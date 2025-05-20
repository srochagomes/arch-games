import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import path from 'path';

export const dynamic = 'force-dynamic';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const images = await prisma.image.findMany({
      where: {
        key_process: params.id
      },
      orderBy: {
        upload_date: 'desc'
      }
    });

    // Transform absolute paths to relative paths
    const transformedImages = images.map(image => ({
      ...image,
      filename: image.filename.replace('/home/programmer/desenvolvimento/arch-games/front-end', '')
    }));

    return NextResponse.json({
      success: true,
      images: transformedImages
    });
  } catch (error) {
    console.error('Error fetching images:', error);
    return NextResponse.json({
      success: false,
      message: 'Erro ao buscar imagens'
    }, { status: 500 });
  }
} 