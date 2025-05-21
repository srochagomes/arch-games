import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { ACTIVITY_OPTIONS, ActivityOption } from '@/app/api/types/activityOptions';

interface CategoryDistributionResult {
  category: string;
  totalScore: number;
}

export async function GET() {
  try {
    // Get all team score distributions with their teams
    const teamScoreDistribution = await prisma.teamScoreDistribution.findMany({
      include: {
        team: {
          select: {
            name: true
          }
        }
      },
      orderBy: {
        scoreTotal: 'desc'
      }
    });

    // Create a map of activity options for easy lookup
    const activityOptionMap = ACTIVITY_OPTIONS.reduce((acc: Record<string, string>, option: ActivityOption) => {
      acc[option.value] = option.label;
      return acc;
    }, {} as Record<string, string>);

    // Get category distribution directly from the database
    const categoryDistribution = await prisma.$queryRaw<CategoryDistributionResult[]>`
      SELECT category, CAST(SUM("totalScore") AS FLOAT) as "totalScore"
      FROM "arch_games"."CategoryDistribution"
      WHERE "totalScore" > 0
      GROUP BY category
    `;

    // Create a map of existing category scores
    const categoryScoreMap = categoryDistribution.reduce((acc: Record<string, number>, item) => {
      acc[item.category] = Number(item.totalScore);
      return acc;
    }, {});

    // Transform the data to include team names
    const transformedData = {
      teamScoreDistribution: teamScoreDistribution.map(item => ({
        teamId: item.teamId,
        scoreTotal: item.scoreTotal,
        percentage: item.percentage,
        teamName: item.team.name
      })),
      categoryDistribution: ACTIVITY_OPTIONS.map(option => ({
        category: option.value,
        totalScore: categoryScoreMap[option.value] || 0,
        activityLabel: option.label
      })).filter(item => item.totalScore > 0)
    };

    return NextResponse.json(transformedData);
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
} 