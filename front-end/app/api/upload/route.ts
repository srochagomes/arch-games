import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir, rm } from 'fs/promises';
import path from 'path';
import { env } from '@/config/env';
import { randomUUID } from 'crypto';
import { calculateImageHash } from '@/utils/imageHash';
import { findDuplicateImage, saveImageRecord } from '@/utils/dbOperations';
import { sendToN8N, MULTIPART_FILE_FIELD } from '@/app/utils/webhook';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

async function cleanupFiles(targetDir: string | undefined) {
  if (targetDir) {
    try {
      await rm(targetDir, { recursive: true, force: true });
    } catch (cleanupError) {
      console.error('[Upload] Error during cleanup:', cleanupError);
    }
  }
}

export async function POST(request: NextRequest) {
  let team: string;
  let activityDate: string;
  let targetDir: string | undefined;
  
  try {
    // Ensure upload directory exists
    const uploadDir = env.UPLOAD_DIR;
    await mkdir(uploadDir, { recursive: true });

    // Parse the form data
    const formData = await request.formData();

    // Get form fields
    team = formData.get('team') as string;
    const team_id = formData.get('team_id') as string;
    const participantsJson = formData.get('participants') as string;
    const participants = JSON.parse(participantsJson);
    activityDate = formData.get('activityDate') as string;

    // Validate required fields
    if (!team || !activityDate || !team_id || !participants || !Array.isArray(participants) || participants.length === 0) {
      return NextResponse.json({
        success: false,
        message: 'Campos obrigatórios faltando',
      }, { status: 400 });
    }

    // Get the first participant's ID (we'll use this as the main participant for the activity)
    const mainParticipant = participants[0];
    if (!mainParticipant || !mainParticipant.id) {
      return NextResponse.json({
        success: false,
        message: 'Dados do participante inválidos',
      }, { status: 400 });
    }

    // Get files from form data
    const files = formData.getAll('imageFiles');
    if (files.length === 0) {
      return NextResponse.json({
        success: false,
        message: 'Nenhuma imagem foi enviada',
      }, { status: 400 });
    }

    // Generate process ID and create directory
    const key_process = randomUUID();
    const date = new Date(activityDate);
    const teamStr = team.trim().replace(/\s+/g, '_');
    const participantStr = mainParticipant.name.trim().replace(/\s+/g, '_');
    const dateStr = date.toISOString()
      .replace('T', '-')
      .replace(/:/g, '-')
      .replace(/\./g, '-')
      .slice(0, 23); // Format: YYYY-MM-DD-HH-mm-ss
    const dirName = `${teamStr}/${participantStr}/${dateStr}`;
    targetDir = path.join(uploadDir, dirName);
    await mkdir(targetDir, { recursive: true });

    const savedFiles: Array<{ name: string; type: string; path: string; buffer: Buffer; hash: string }> = [];

    // Process each file
    for (const file of files) {
      if (!(file instanceof File)) {
        continue;
      }

      // Read file as buffer
      const buffer = Buffer.from(await file.arrayBuffer());
      
      // Calculate hash and check for duplicates
      const imageHash = await calculateImageHash(buffer);
      const duplicate = await findDuplicateImage(imageHash);
      
      if (duplicate) {
        return NextResponse.json({
          success: false,
          message: `Uma das imagens já foi enviada por ${duplicate.name} da equipe ${duplicate.team} em ${new Date(duplicate.activity_date).toLocaleDateString()}`,
        }, { status: 400 });
      }

      // Save file to disk
      const filename = file.name;
      const filepath = path.join(targetDir, filename);
      await writeFile(filepath, buffer);

      // Store file info with buffer and hash
      savedFiles.push({
        name: file.name,
        type: file.type,
        path: filepath,
        buffer,
        hash: imageHash
      });
    }

    const maxParticipants = Math.min(participants.length, 10);
    const maxTokens = maxParticipants * 300;

    // Define webhookPayload with required properties
    const webhookPayload = {
      key_process,
      team,
      team_id: parseInt(team_id),
      participant_id: mainParticipant.id,
      participants: participants,
      activityDate,
      quantityParticipants: participants.length,
      maxTokens,
      files: savedFiles.map(file => ({
        name: file.name,
        type: file.type,
        buffer: file.buffer
      })),
      fileNames: savedFiles.map((_, index) => `${MULTIPART_FILE_FIELD}${index}`).join(', ')
    };

    try {
      // First try to send to N8N
      await sendToN8N(webhookPayload);

      // Only save records to database after successful webhook call
      for (const file of savedFiles) {
        await saveImageRecord({
          fileName: path.join(dirName, file.name),
          originalName: file.name,
          mimeType: file.type,
          size: file.buffer.length,
          hash: file.hash,
          activityId: key_process,
          team: team
        });
      }

      return NextResponse.json({
        success: true,
        message: 'Upload realizado com sucesso',
        data: {
          directory: dirName,
          files: savedFiles.map(f => f.name),
          key_process,
          quantityParticipants: participants.length,
          maxTokens
        }
      });
    } catch (error) {
      await cleanupFiles(targetDir);
      throw error; // Re-throw to be caught by outer try-catch
    }
  } catch (error) {
    await cleanupFiles(targetDir);
    return NextResponse.json({
      success: false,
      message: error instanceof Error ? error.message : 'Erro interno do servidor',
    }, { status: 500 });
  }
} 