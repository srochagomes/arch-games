import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import { calculateImageHash, findDuplicateImage } from '@/app/utils/imageHash';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    // Extract form fields
    const name = formData.get('name') as string;
    const team = formData.get('team') as string;
    const type = formData.get('type') as string;
    const activityDate = formData.get('activityDate') as string;
    
    // Format names for filenames (replace spaces with underscores)
    const formatName = (str: string) => str.trim().replace(/\s+/g, '_');
    const safeTeamName = formatName(team);
    const safeCompetitorName = formatName(name);
    
    // Format the activity date for filenames
    const dateObj = new Date(activityDate);
    const dateStr = dateObj.toISOString()
      .replace(/T/, '-')
      .replace(/:/g, '-')
      .split('.')[0]; // Format: YYYY-MM-DD-HH-mm-ss

    // Get all image files
    const imageFiles = formData.getAll('images');
    const uploadsDir = path.join(process.cwd(), 'uploads');

    // Check for duplicate images before proceeding
    const imageHashes: { [key: string]: string } = {};
    
    for (const imageFile of imageFiles) {
      if (imageFile instanceof Blob) {
        const buffer = Buffer.from(await imageFile.arrayBuffer());
        const imageHash = await calculateImageHash(buffer);
        
        // Check if this image already exists
        const duplicate = await findDuplicateImage(imageHash, uploadsDir);
        if (duplicate) {
          return NextResponse.json({
            success: false,
            message: 'Imagem duplicada detectada',
            error: `Uma imagem idêntica já foi enviada por ${duplicate.name} da equipe ${duplicate.team} em ${new Date(duplicate.uploadDate).toLocaleDateString('pt-BR')}`,
            duplicate: {
              name: duplicate.name,
              team: duplicate.team,
              uploadDate: duplicate.uploadDate,
              filename: duplicate.filename
            }
          }, { status: 400 });
        }
        
        // Store hash for metadata
        imageHashes[imageHash] = imageFile.name;
      }
    }
    
    // Create directory name using activity date
    const dirName = `${safeTeamName}-${safeCompetitorName}-${dateStr}`;
    
    // Create upload directory path
    const uploadDir = path.join(uploadsDir, dirName);
    
    // Ensure upload directory exists
    await mkdir(uploadDir, { recursive: true });
    
    const savedFiles = [];
    
    // Process each image file
    for (let i = 0; i < imageFiles.length; i++) {
      const imageFile = imageFiles[i];
      if (imageFile instanceof Blob) {
        const buffer = Buffer.from(await imageFile.arrayBuffer());
        
        // Get file extension from original filename
        const originalExt = path.extname(imageFile.name);
        
        // Create new filename with activity date
        const filename = `${safeTeamName}-${safeCompetitorName}-imagem${(i + 1).toString().padStart(2, '0')}-${dateStr}${originalExt}`;
        
        const filepath = path.join(uploadDir, filename);
        
        // Save the file
        await writeFile(filepath, buffer);
        savedFiles.push(filename);
      }
    }
    
    // Create metadata file with original names and image hashes
    const metadata = {
      name,
      team,
      type,
      activityDate: dateObj.toISOString(),
      uploadDate: new Date().toISOString(),
      files: savedFiles,
      imageHashes
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
        files: savedFiles
      }
    });
    
  } catch (error) {
    console.error('Error handling upload:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Erro ao processar upload',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// Increase payload size limit for file uploads
export const config = {
  api: {
    bodyParser: false,
  },
}; 