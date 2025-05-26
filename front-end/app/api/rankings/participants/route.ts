import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const skip = (page - 1) * limit;

    // Get the latest generation timestamp for participant rankings
    const latestParticipantRanking = await prisma.rankingParticipant.findFirst({
      orderBy: {
        generatedAt: 'desc'
      },
      select: {
        generatedAt: true
      }
    });

    // Get paginated participant rankings for the latest generation
    const participantRankings = latestParticipantRanking ? await prisma.rankingParticipant.findMany({
      where: {
        generatedAt: latestParticipantRanking.generatedAt
      },
      orderBy: [
        { scoreTotal: 'desc' },
        { rankingPosition: 'asc' }
      ],
      include: {
        team: true // Include team information
      },
      skip,
      take: limit
    }) : [];

    // Get total count of participant rankings
    const totalParticipantRankings = latestParticipantRanking ? await prisma.rankingParticipant.count({
      where: {
        generatedAt: latestParticipantRanking.generatedAt
      }
    }) : 0;

    return NextResponse.json({
      participantRankings,
      pagination: {
        total: totalParticipantRankings,
        page,
        limit,
        totalPages: Math.ceil(totalParticipantRankings / limit)
      }
    });
  } catch (error) {
    console.error('Error fetching participant rankings:', error);
    return NextResponse.json(
      { success: false, message: 'Error fetching participant rankings' },
      { status: 500 }
    );
  }
} 