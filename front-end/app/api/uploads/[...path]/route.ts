import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  try {
    // Remove 'uploads' from the path if it's the first segment
    const pathSegments = params.path[0] === 'uploads' ? params.path.slice(1) : params.path;
    const filePath = path.join(process.cwd(), 'uploads', ...pathSegments);
    
    console.log('Attempting to access file at:', filePath);
    
    // Check if file exists
    try {
      await fs.access(filePath);
    } catch (error) {
      console.error('File not found:', filePath);
      return new NextResponse('File not found', { status: 404 });
    }

    // Read the file
    const fileBuffer = await fs.readFile(filePath);
    
    // Get the file extension to determine content type
    const ext = path.extname(filePath).toLowerCase();
    const contentType = {
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.jpeg': 'image/jpeg',
      '.gif': 'image/gif',
      '.webp': 'image/webp',
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
    return new NextResponse('Internal Server Error', { status: 500 });
  }
} 