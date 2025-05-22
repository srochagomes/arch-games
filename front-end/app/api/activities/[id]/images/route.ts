import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import path from 'path';
import { Activity } from '@/types/activities';

export const dynamic = 'force-dynamic';

interface ImageRecord {
  id: number;
  filename: string;
  key_process: string;
  activity_date: Date;
  name: string;
  team: string;
  type: string;
  hash: string;
  status: string | null;
  [key: string]: any;
}

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
        activity_date: 'desc'
      }
    });

    console.log('Raw images from database:', images);

    // Transform absolute paths to relative paths
    const transformedImages = images.map((image: ImageRecord) => {
      const transformed = {
        ...image,
        filename: image.filename.replace('/home/programmer/desenvolvimento/arch-games/front-end', '')
      };
      console.log('Transformed image:', transformed);
      return transformed;
    });

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

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const imageId = parseInt(params.id, 10);
    if (isNaN(imageId)) {
      return NextResponse.json({
        success: false,
        message: 'ID da imagem inválido'
      }, { status: 400 });
    }

    await prisma.image.delete({
      where: { id: imageId }
    });

    return NextResponse.json({
      success: true,
      message: 'Imagem excluída com sucesso'
    });
  } catch (error) {
    console.error('Error deleting image:', error);
    return NextResponse.json({
      success: false,
      message: 'Erro ao excluir imagem'
    }, { status: 500 });
  }
}

export type ModelActivity = Activity; 