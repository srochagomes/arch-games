import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const skip = (page - 1) * limit;

    // Get the latest generation timestamp for team rankings
    const latestTeamRanking = await prisma.rankingTeam.findFirst({
      orderBy: {
        generatedAt: 'desc'
      },
      select: {
        generatedAt: true
      }
    });

    // Get paginated team rankings for the latest generation
    const teamRankings = latestTeamRanking ? await prisma.rankingTeam.findMany({
      where: {
        generatedAt: latestTeamRanking.generatedAt
      },
      orderBy: {
        rankingPosition: 'asc'
      },
      skip,
      take: limit
    }) : [];

    // Get total count of team rankings
    const totalTeamRankings = latestTeamRanking ? await prisma.rankingTeam.count({
      where: {
        generatedAt: latestTeamRanking.generatedAt
      }
    }) : 0;

    return NextResponse.json({
      teamRankings,
      pagination: {
        total: totalTeamRankings,
        page,
        limit,
        totalPages: Math.ceil(totalTeamRankings / limit)
      }
    });
  } catch (error) {
    console.error('Error fetching team rankings:', error);
    return NextResponse.json(
      { success: false, message: 'Error fetching team rankings' },
      { status: 500 }
    );
  }
} 