import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir, readFile } from 'fs/promises';
import path from 'path';
import { calculateImageHash } from '@/app/utils/imageHash';
import { findDuplicateImage, saveImageRecord } from '@/app/utils/dbOperations';
import { sendToN8N } from '@/app/utils/webhook';
import { env } from '@/app/config/env';
import { randomUUID } from 'crypto';
import formidable from 'formidable';
import { headers } from 'next/headers';
import { calculatePhysicalActivityScore } from '@/app/utils/scoreCalculation';
import { PhysicalActivity } from '@/app/types/activities';
import { validatePhysicalActivity } from '@/app/utils/activityValidation';

// Define valid participant types
type ParticipantType = 'participant' | 'captain' | 'governance';

// Validate participant type
function isValidParticipantType(type: string): type is ParticipantType {
  return ['participant', 'captain', 'governance'].includes(type);
}

// Route segment configuration
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

interface FileInfo {
  name: string;
  type: string;
  path: string;
}

// Helper function to parse form data using formidable
async function parseFormData(req: Request): Promise<{ fields: formidable.Fields; files: formidable.Files }> {
  const form = formidable({
    maxFileSize: 10 * 1024 * 1024, // 10MB
    allowEmptyFiles: false,
    multiples: true,
  });

  // Create headers object from the request
  const headersList = headers();
  const nodeHeaders: { [key: string]: string } = {};
  headersList.forEach((value, key) => {
    nodeHeaders[key] = value;
  });

  // Convert the Request to a Node-compatible stream
  const duplex = new TransformStream();
  req.body?.pipeTo(duplex.writable);
  const nodeStream = require('stream');
  const readable = nodeStream.Readable.fromWeb(duplex.readable);

  // Add headers to the readable stream
  readable.headers = nodeHeaders;

  return new Promise((resolve, reject) => {
    form.parse(readable, (err, fields, files) => {
      if (err) reject(err);
      else resolve({ fields, files });
    });
  });
}

export async function POST(request: Request) {
  try {
    const { fields, files } = await parseFormData(request);
    
    // Extract form fields
    const name = (Array.isArray(fields.name) ? fields.name[0] : fields.name) || '';
    const team = (Array.isArray(fields.team) ? fields.team[0] : fields.team) || '';
    const type = (Array.isArray(fields.type) ? fields.type[0] : fields.type) || '';
    const groupSize = parseInt((Array.isArray(fields.groupSize) ? fields.groupSize[0] : fields.groupSize) || '0');
    const activityDate = (Array.isArray(fields.activityDate) ? fields.activityDate[0] : fields.activityDate) || '';
    const category = (Array.isArray(fields.category) ? fields.category[0] : fields.category) || '';
    const activityData = (Array.isArray(fields.activity) ? fields.activity[0] : fields.activity) || '{}';
    const imageFiles = Array.isArray(files.files) ? files.files : [files.files];

    // Generate key_process UUID
    const key_process = randomUUID();

    // Parse activity data
    const activity = JSON.parse(typeof activityData === 'string' ? activityData : '{}');

    // Calculate score for physical activities
    let base_score = 0;
    let multiplier = 1;
    let calculated_score = 0;

    if (category === 'physical_activity') {
      const physicalActivity: PhysicalActivity = {
        category: 'physical_activity',
        participant: name,
        team,
        date: activityDate,
        type: type as 'participant' | 'captain' | 'governance',
        key_process,
        activity: {
          description: activity.description || '',
          distance_km: activity.distance_km,
          duration_minutes: activity.duration_minutes,
          start: activity.start,
          end: activity.end,
          score: 0 // Will be calculated
        }
      };

      // First validate the activity
      const validationResult = validatePhysicalActivity(physicalActivity);
      if (!validationResult.isValid) {
        // Set score to 0 and add error message to description
        base_score = 0;
        multiplier = 0;
        calculated_score = 0;
        activity.description = activity.description 
          ? `${activity.description}\n\nNota do sistema: ${validationResult.errorMessage}`
          : `Nota do sistema: ${validationResult.errorMessage}`;
      } else {
        // Calculate score only if validation passed
        const scoreResult = calculatePhysicalActivityScore(physicalActivity);
        base_score = scoreResult.base_score;
        multiplier = scoreResult.multiplier;
        calculated_score = scoreResult.calculated_score;

        // Add any score calculation messages if present
        if (scoreResult.error_description) {
          activity.description = activity.description 
            ? `${activity.description}\n\nNota do sistema: ${scoreResult.error_description}`
            : `Nota do sistema: ${scoreResult.error_description}`;
        }
      }

      // Update activity data with calculated score
      activity.score = calculated_score;
    }

    // Validate required fields
    if (!name || !team || !type || !activityDate || !groupSize) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Campos obrigatórios faltando',
          error: 'Missing required fields: name, team, type, groupSize, activityDate'
        },
        { status: 400 }
      );
    }

    // Validate participant type
    if (!isValidParticipantType(type)) {
      return NextResponse.json(
        {
          success: false,
          message: 'Tipo de participante inválido',
          error: 'Type must be one of: participant, captain, governance'
        },
        { status: 400 }
      );
    }

    // Validate group size
    if (isNaN(groupSize) || groupSize < 1) {
      return NextResponse.json(
        {
          success: false,
          message: 'Tamanho do grupo inválido',
          error: 'Group size must be a positive number'
        },
        { status: 400 }
      );
    }
    
    // Process files for N8N
    const validFiles: FileInfo[] = imageFiles
      .filter((file): file is formidable.File => file !== undefined)
      .map(file => ({
        name: file.originalFilename || 'unnamed',
        type: file.mimetype || 'application/octet-stream',
        path: file.filepath
      }));

    // Check for duplicate images before sending to N8N
    for (const imageFile of validFiles) {
      const buffer = await readFile(imageFile.path);
      const imageHash = await calculateImageHash(buffer);
      
      // Check for duplicate images
      const duplicate = await findDuplicateImage(imageHash);
      if (duplicate) {
        return NextResponse.json(
          {
            success: false,
            message: `Esta imagem já foi enviada por ${duplicate.name} da equipe ${duplicate.team} em ${new Date(duplicate.activity_date).toLocaleDateString()}`,
            error: 'Duplicate image detected'
          },
          { status: 400 }
        );
      }
    }

    // First, try to send webhook to N8N
    try {
      await sendToN8N({
        name,
        team,
        type: type as ParticipantType,
        groupSize,
        activityDate,
        uploadDate: new Date().toISOString(),
        key_process,
        files: validFiles,
        category,
        activity,
        base_score,
        multiplier,
        calculated_score
      });
    } catch (error) {
      return NextResponse.json(
        {
          success: false,
          message: error instanceof Error ? error.message : 'Serviço N8N indisponível',
          error: error instanceof Error ? error.message : 'Unknown error'
        },
        { status: error instanceof Error && 
          (error.message.includes('Invalid type') || error.message.includes('Group size')) 
          ? 400 : 503 }
      );
    }

    // Format names for filenames (replace spaces with underscores)
    const formatName = (str: string) => str.trim().replace(/\s+/g, '_');
    const safeTeamName = formatName(team);
    const safeCompetitorName = formatName(name);
    
    // Create date string for directory name (YYYY-MM-DD)
    const dateObj = new Date(activityDate);
    const dateStr = dateObj.toISOString().split('T')[0];
    
    // Create directory name
    const dirName = `${dateStr}_${safeTeamName}_${safeCompetitorName}`;
    const uploadDir = path.join(env.app.uploadDir, dirName);
    
    // Create directory if it doesn't exist
    await mkdir(uploadDir, { recursive: true });
    
    const savedFiles: string[] = [];
    
    // Process each image file
    for (const imageFile of validFiles) {
      const buffer = await readFile(imageFile.path);
      const imageHash = await calculateImageHash(buffer);
      
      // Get file extension from original filename
      const originalExt = path.extname(imageFile.name);
      
      // Create new filename with activity date
      const filename = `${safeTeamName}-${safeCompetitorName}-imagem${savedFiles.length + 1}-${dateStr}${originalExt}`;
      const filepath = path.join(uploadDir, filename);
      
      // Save the file
      await writeFile(filepath, buffer);
      
      // Save record to database
      await saveImageRecord(
        imageHash,
        name,
        team,
        type,
        dateObj,
        filename,
        key_process
      );
      
      savedFiles.push(filename);
    }
    
    // Create metadata file
    const metadata = {
      name,
      team,
      type,
      groupSize,
      activityDate: dateObj.toISOString(),
      uploadDate: new Date().toISOString(),
      key_process,
      files: savedFiles,
      category,
      activity,
      base_score,
      multiplier,
      calculated_score
    };
    
    await writeFile(
      path.join(uploadDir, 'metadata.json'),
      JSON.stringify(metadata, null, 2)
    );
    
    return NextResponse.json({
      success: true,
      message: 'Upload realizado com sucesso',
      data: {
        directory: dirName,
        files: savedFiles,
        key_process
      }
    });
    
  } catch (error) {
    console.error('Error processing upload:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Erro interno do servidor',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
} 