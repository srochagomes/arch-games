import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const team = searchParams.get('team');
    const participant = searchParams.get('participant');

    console.log('Received search params:', { status, team, participant });

    const where: any = {};

    if (status) {
      where.status = status;
    }

    if (team) {
      where.team = {
        contains: team,
        mode: 'insensitive'
      };
    }

    if (participant) {
      where.filename = {
        contains: participant,
        mode: 'insensitive'
      };
    }

    console.log('Filter conditions:', JSON.stringify(where, null, 2));

    const images = await prisma.image.findMany({
      where,
      orderBy: {
        activity_date: 'desc'
      },
      select: {
        id: true,
        filename: true,
        key_process: true,
        activity_date: true,
        name: true,
        team: true,
        type: true,
        hash: true,
        status: true
      }
    });

    console.log('Found images:', images.length);
    if (images.length > 0) {
      console.log('First image:', {
        filename: images[0].filename,
        name: images[0].name,
        team: images[0].team,
        status: images[0].status
      });
    }

    return NextResponse.json({
      success: true,
      images
    });
  } catch (error) {
    console.error('Error fetching images:', error);
    return NextResponse.json({
      success: false,
      message: 'Erro ao buscar imagens'
    }, { status: 500 });
  }
} 