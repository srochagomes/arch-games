import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { env } from '@/config/env';

export async function GET(
  request: Request,
  { params }: { params: { filename: string } }
) {
  try {
    const { filename } = params;
    const uploadDir = env.UPLOAD_DIR;

    // Decode the filename from URL encoding
    const decodedFilename = decodeURIComponent(filename);

    // Construct the file path, ensuring we don't allow directory traversal
    const filePath = path.join(uploadDir, decodedFilename);
    
    // Verify the path is within the upload directory
    const normalizedPath = path.normalize(filePath);
    if (!normalizedPath.startsWith(uploadDir)) {
      return new NextResponse('Invalid file path', { status: 400 });
    }

    // Check if file exists and is not a directory
    try {
      const stats = await fs.stat(filePath);
      if (stats.isDirectory()) {
        return new NextResponse('Not a file', { status: 400 });
      }
    } catch (error) {
      return new NextResponse('Image not found', { status: 404 });
    }

    // Read the file
    const fileBuffer = await fs.readFile(filePath);

    // Determine content type based on file extension
    const ext = path.extname(decodedFilename).toLowerCase();
    const contentType = ext === '.png' ? 'image/png' : 'image/jpeg';

    // Return the image with appropriate headers
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000',
      },
    });
  } catch (error) {
    console.error('Error serving image:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
} 