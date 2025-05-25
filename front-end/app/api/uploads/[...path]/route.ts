import { NextRequest, NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import path from 'path';
import { env } from '@/config/env';

export async function GET(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  try {
    // Decode each path segment and join them with the correct path separator
    const decodedPath = params.path.map(segment => decodeURIComponent(segment));
    const fullPath = decodedPath.join('/');
    
    // Join the path segments and ensure it's within the upload directory
    const filePath = path.join(env.UPLOAD_DIR, fullPath);
    
    // Security check: ensure the file path is within the upload directory
    const normalizedFilePath = path.normalize(filePath);
    const normalizedUploadDir = path.normalize(env.UPLOAD_DIR);
    
    if (!normalizedFilePath.startsWith(normalizedUploadDir)) {
      console.error('Attempted to access file outside upload directory:', filePath);
      return new NextResponse('File not found', { status: 404 });
    }

    console.log('Attempting to read file:', filePath);
    console.log('Upload directory:', env.UPLOAD_DIR);
    console.log('Full path:', fullPath);
    console.log('Full URL path:', request.nextUrl.pathname);
    
    // Read the file
    const fileBuffer = await readFile(filePath);
    
    // Get the file extension to determine content type
    const ext = path.extname(filePath).toLowerCase();
    const contentType = {
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.jpeg': 'image/jpeg',
      '.gif': 'image/gif',
      '.webp': 'image/webp'
    }[ext] || 'application/octet-stream';

    // Return the file with appropriate headers
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000',
      },
    });
  } catch (error) {
    console.error('Error serving file:', error);
    console.error('Error details:', error instanceof Error ? error.message : 'Unknown error');
    return new NextResponse('File not found', { status: 404 });
  }
} 