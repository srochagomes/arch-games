import { NextRequest, NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import path from 'path';
import { env } from '@/config/env';

export async function GET(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  try {
    const filePath = path.join(env.UPLOAD_DIR, ...params.path);
    console.log('Attempting to read file:', filePath);
    console.log('Upload directory:', env.UPLOAD_DIR);
    console.log('Path segments:', params.path);
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