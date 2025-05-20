import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    // Get team score distribution
    const teamScoreDistribution = await prisma.teamScoreDistribution.findMany({
      include: {
        team: true
      }
    });

    // Get category distribution
    const categoryDistribution = await prisma.categoryDistribution.findMany({
      include: {
        team: true
      }
    });

    // Transform the data to include team names
    const transformedTeamDistribution = teamScoreDistribution.map(dist => ({
      ...dist,
      teamName: dist.team.name
    }));

    const transformedCategoryDistribution = categoryDistribution.map(dist => ({
      ...dist,
      teamName: dist.team.name
    }));

    return NextResponse.json({
      teamScoreDistribution: transformedTeamDistribution,
      categoryDistribution: transformedCategoryDistribution
    });
  } catch (error) {
    console.error('Error fetching distribution data:', error);
    return NextResponse.json(
      { success: false, message: 'Error fetching distribution data' },
      { status: 500 }
    );
  }
} 