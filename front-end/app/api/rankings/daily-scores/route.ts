import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const dynamic = 'force-dynamic';

interface ScoreResult {
  teamName: string;
  participantName: string;
  totalScore: number;
  category: string;
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const date = searchParams.get('date');
    const teamId = searchParams.get('teamId');
    const participantId = searchParams.get('participantId');
    const category = searchParams.get('category');

    console.log('Query parameters:', { date, teamId, participantId, category });

    if (!date) {
      return NextResponse.json(
        { error: 'Date parameter is required' },
        { status: 400 }
      );
    }

    // Parse the date and set it to the start of the day in UTC
    const startDate = new Date(date + 'T00:00:00.000Z');
    
    // Set end date to the end of the day in UTC
    const endDate = new Date(date + 'T23:59:59.999Z');

    console.log('Date range:', {
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString()
    });

    // Build the where clause based on provided parameters
    const whereClause: any = {
      date: {
        gte: startDate,
        lte: endDate
      }
    };

    if (teamId) {
      whereClause.team_id = parseInt(teamId);
    }

    if (participantId) {
      whereClause.participant_id = participantId;
    }

    if (category) {
      whereClause.category = category;
    }

    console.log('Where clause:', JSON.stringify(whereClause, null, 2));

    // First, check if there are any activities for this team/participant in the last 30 days
    const now = new Date();
    const recentActivities = await prisma.activity.findFirst({
      where: {
        team_id: parseInt(teamId || '0'),
        participant_id: participantId,
        date: {
          gte: new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000) // 30 days ago
        }
      },
      orderBy: {
        date: 'desc'
      }
    });

    if (recentActivities) {
      console.log('Most recent activity found:', {
        date: recentActivities.date.toISOString(),
        teamId: recentActivities.team_id,
        participantId: recentActivities.participant_id,
        calculated_score: recentActivities.calculated_score
      });
    }

    // Get all activities for the specified date with their teams and participants
    const dailyScores = await prisma.activity.findMany({
      where: whereClause,
      include: {
        team_relation: {
          select: {
            id: true,
            name: true
          }
        },
        participant_relation: {
          select: {
            id: true,
            name: true
          }
        }
      }
    });

    console.log('Found activities:', dailyScores.length);
    if (dailyScores.length > 0) {
      console.log('Sample activity:', JSON.stringify({
        id: dailyScores[0].id,
        date: dailyScores[0].date.toISOString(),
        team_id: dailyScores[0].team_id,
        participant_id: dailyScores[0].participant_id,
        calculated_score: dailyScores[0].calculated_score,
        category: dailyScores[0].category
      }, null, 2));
    }

    // Group and sum scores by team, participant, and category
    const scoreMap = new Map<string, ScoreResult>();

    dailyScores.forEach(activity => {
      if (!activity.team_relation || !activity.participant_relation) {
        console.log('Skipping activity without relations:', {
          id: activity.id,
          date: activity.date.toISOString(),
          team_id: activity.team_id,
          participant_id: activity.participant_id
        });
        return;
      }

      const key = `${activity.team_relation.id}-${activity.participant_relation.id}-${activity.category}`;
      const currentScore = scoreMap.get(key)?.totalScore || 0;

      scoreMap.set(key, {
        teamName: activity.team_relation.name,
        participantName: activity.participant_relation.name,
        totalScore: currentScore + activity.calculated_score,
        category: activity.category
      });
    });

    // Convert map to array
    const result = Array.from(scoreMap.values());

    console.log('Final result:', JSON.stringify(result, null, 2));

    if (result.length === 0) {
      return NextResponse.json({
        message: 'No activities found for the specified date',
        lastActivityDate: recentActivities?.date.toISOString() || null,
        queryDate: date,
        dateRange: {
          start: startDate.toISOString(),
          end: endDate.toISOString()
        }
      });
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error in daily scores route:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
} 