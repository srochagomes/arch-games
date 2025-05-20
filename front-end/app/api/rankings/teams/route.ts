import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    // Get the latest generation timestamp for team rankings
    const latestTeamRanking = await prisma.rankingTeam.findFirst({
      orderBy: {
        generatedAt: 'desc'
      },
      select: {
        generatedAt: true
      }
    });

    // Get the latest generation timestamp for participant rankings
    const latestParticipantRanking = await prisma.rankingParticipant.findFirst({
      orderBy: {
        generatedAt: 'desc'
      },
      select: {
        generatedAt: true
      }
    });

    // Get all team rankings for the latest generation
    const teamRankings = latestTeamRanking ? await prisma.rankingTeam.findMany({
      where: {
        generatedAt: latestTeamRanking.generatedAt
      },
      orderBy: {
        rankingPosition: 'asc'
      }
    }) : [];

    // Get all participant rankings for the latest generation
    const participantRankings = latestParticipantRanking ? await prisma.rankingParticipant.findMany({
      where: {
        generatedAt: latestParticipantRanking.generatedAt
      },
      orderBy: {
        rankingPosition: 'asc'
      },
      include: {
        team: true // Include team information
      }
    }) : [];

    console.log('Latest team generation:', latestTeamRanking?.generatedAt);
    console.log('Latest participant generation:', latestParticipantRanking?.generatedAt);
    console.log('Team rankings count:', teamRankings.length);
    console.log('Participant rankings count:', participantRankings.length);
    console.log('Participant rankings:', JSON.stringify(participantRankings, null, 2));

    return NextResponse.json({
      teamRankings,
      participantRankings
    });
  } catch (error) {
    console.error('Error fetching rankings:', error);
    return NextResponse.json(
      { success: false, message: 'Error fetching rankings' },
      { status: 500 }
    );
  }
} 