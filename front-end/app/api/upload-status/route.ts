import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const team = searchParams.get('team');
    const participant = searchParams.get('participant');

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
      where.name = {
        contains: participant,
        mode: 'insensitive'
      };
    }

    const images = await prisma.image.findMany({
      where,
      orderBy: {
        activity_date: 'desc'
      }
    });

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