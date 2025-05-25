import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const teamId = searchParams.get('team_id');
    const page = searchParams.get('page');
    const limit = searchParams.get('limit');

    const where = teamId ? { team_id: parseInt(teamId) } : {};

    // If pagination parameters are not provided, return all records
    if (!page || !limit) {
      const participants = await prisma.participant.findMany({
        where,
        include: {
          team: true
        },
        orderBy: {
          name: 'asc'
        }
      });

      return NextResponse.json(participants);
    }

    // Otherwise, handle pagination
    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);
    const skip = (pageNum - 1) * limitNum;

    // Get total count for pagination
    const total = await prisma.participant.count({ where });

    const participants = await prisma.participant.findMany({
      where,
      include: {
        team: true
      },
      orderBy: {
        name: 'asc'
      },
      skip,
      take: limitNum
    });

    return NextResponse.json({
      data: participants,
      pagination: {
        total,
        page: pageNum,
        limit: limitNum,
        totalPages: Math.ceil(total / limitNum)
      }
    });
  } catch (error) {
    console.error('Error fetching participants:', error);
    return NextResponse.json(
      { error: 'Failed to fetch participants' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const participant = await prisma.participant.create({
      data: {
        name: data.name,
        email: data.email || null,
        type: data.type,
        team_id: data.team_id
      },
      include: {
        team: true
      }
    });
    return NextResponse.json(participant);
  } catch (error) {
    console.error('Error creating participant:', error);
    return NextResponse.json(
      { error: 'Failed to create participant' },
      { status: 500 }
    );
  }
} 