import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const teamId = searchParams.get('team_id');

    const where = teamId ? { team_id: parseInt(teamId) } : {};

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
        email: data.email,
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