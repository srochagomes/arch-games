import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = searchParams.get('page');
    const limit = searchParams.get('limit');

    // If pagination parameters are not provided, return all records
    if (!page || !limit) {
      const teams = await prisma.team.findMany({
        orderBy: {
          name: 'asc'
        }
      });

      return NextResponse.json(teams);
    }

    // Otherwise, handle pagination
    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);
    const skip = (pageNum - 1) * limitNum;

    // Get total count for pagination
    const total = await prisma.team.count();

    const teams = await prisma.team.findMany({
      orderBy: {
        name: 'asc'
      },
      skip,
      take: limitNum
    });

    return NextResponse.json({
      teams,
      pagination: {
        total,
        page: pageNum,
        limit: limitNum,
        totalPages: Math.ceil(total / limitNum)
      }
    });
  } catch (error) {
    console.error('Error fetching teams:', error);
    return NextResponse.json(
      { error: 'Failed to fetch teams' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    if (!data.name) {
      return NextResponse.json(
        { error: 'Nome é obrigatório' },
        { status: 400 }
      );
    }

    const team = await prisma.team.create({
      data: {
        name: data.name,
        activityOption: data.activityOption || 'physical_activity',
      },
    });

    return NextResponse.json({ team });
  } catch (error: any) {
    if (error.code === 'P2002') {
      return NextResponse.json(
        { error: 'Já existe um time com este nome' },
        { status: 400 }
      );
    }

    console.error('Error creating team:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
} 