import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir, rm } from 'fs/promises';
import path from 'path';
import { env } from '@/app/config/env';
import { randomUUID } from 'crypto';
import { calculateImageHash } from '@/app/utils/imageHash';
import { findDuplicateImage, saveImageRecord } from '@/app/utils/dbOperations';
import { sendToN8N, MULTIPART_FILE_FIELD } from '@/app/utils/webhook';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  console.log('[Upload] Starting upload process');
  
  let team: string;
  let activityDate: string;
  let targetDir: string | undefined;
  
  try {
    // Ensure upload directory exists
    const uploadDir = env.app.uploadDir;
    await mkdir(uploadDir, { recursive: true });

    // Parse the form data
    const formData = await request.formData();
    console.log('[Upload] Form data received');

    // Get form fields
    team = formData.get('team') as string;
    activityDate = formData.get('activityDate') as string;
    const participantsJson = formData.get('participants') as string;

    // Validate required fields
    if (!team || !activityDate || !participantsJson) {
      return NextResponse.json({
        success: false,
        message: 'Campos obrigatórios faltando',
      }, { status: 400 });
    }

    // Parse participants
    let participants;
    try {
      participants = JSON.parse(participantsJson);
      if (!Array.isArray(participants) || participants.length === 0) {
        throw new Error('Invalid participants format');
      }
    } catch (error) {
      return NextResponse.json({
        success: false,
        message: 'Formato inválido para participantes',
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
    const dateStr = new Date(activityDate).toISOString().split('T')[0];
    const dirName = `${dateStr}_${team.trim().replace(/\s+/g, '_')}`;
    targetDir = path.join(uploadDir, dirName);
    await mkdir(targetDir, { recursive: true });

    console.log('[Upload] Processing files');
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
      const filename = `file${savedFiles.length}${path.extname(file.name)}`;
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

    console.log('[Upload] Sending to N8N');
    // Send to N8N with binary files
    await sendToN8N({
      key_process,
      team,
      activityDate,
      participants,
      files: savedFiles.map(file => ({
        name: file.name,
        type: file.type,
        buffer: file.buffer
      })),
      fileNames: savedFiles.map((_, index) => `${MULTIPART_FILE_FIELD}${index}`).join(', ')
    });

    // After successful webhook call, save records to database
    console.log('[Upload] Saving records to database');
    for (const file of savedFiles) {
      await saveImageRecord(
        file.hash,
        file.name,
        team,
        participants[0].type,
        new Date(activityDate),
        path.resolve(file.path),
        key_process
      );
    }

    console.log('[Upload] Process completed successfully');
    return NextResponse.json({
      success: true,
      message: 'Upload realizado com sucesso',
      data: {
        directory: dirName,
        files: savedFiles.map(f => f.name),
        key_process
      }
    });

  } catch (error) {
    console.error('[Upload] Error:', error);
    // In case of error, we should clean up any files that were saved
    if (targetDir) {
      try {
        await rm(targetDir, { recursive: true, force: true });
      } catch (cleanupError) {
        console.error('[Upload] Error during cleanup:', cleanupError);
      }
    }
    return NextResponse.json({
      success: false,
      message: error instanceof Error ? error.message : 'Erro interno do servidor',
    }, { status: 500 });
  }
} 