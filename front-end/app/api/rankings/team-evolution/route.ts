import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { format } from 'date-fns';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    // Get all team score history ordered by date
    const teamHistory = await prisma.teamScoreHistory.findMany({
      orderBy: {
        date: 'asc'
      },
      include: {
        team: true
      }
    });

    // Group data by month and team
    const monthlyData = teamHistory.reduce((acc, record) => {
      const monthYear = format(new Date(record.date), 'MMM yyyy');
      const teamId = record.teamId;
      
      if (!acc[monthYear]) {
        acc[monthYear] = {};
      }
      
      if (!acc[monthYear][teamId]) {
        acc[monthYear][teamId] = {
          teamId,
          teamName: record.team.name,
          score: 0
        };
      }
      
      // Use the latest score for each team in the month
      acc[monthYear][teamId].score = record.score;
      
      return acc;
    }, {} as Record<string, Record<number, { teamId: number; teamName: string; score: number }>>);

    // Transform data for the chart
    const months = Object.keys(monthlyData).sort((a, b) => 
      new Date(a).getTime() - new Date(b).getTime()
    );

    const teams = new Set<number>();
    teamHistory.forEach(record => teams.add(record.teamId));

    const chartData = months.map(month => {
      const monthData: Record<string, any> = { month };
      
      teams.forEach(teamId => {
        const teamData = monthlyData[month][teamId];
        if (teamData) {
          monthData[`team_${teamId}`] = teamData.score;
          monthData[`team_${teamId}_name`] = teamData.teamName;
        } else {
          monthData[`team_${teamId}`] = 0;
        }
      });
      
      return monthData;
    });

    return NextResponse.json({
      chartData,
      teams: Array.from(teams).map(teamId => ({
        id: teamId,
        name: teamHistory.find(r => r.teamId === teamId)?.team.name
      }))
    });
  } catch (error) {
    console.error('Error fetching team evolution data:', error);
    return NextResponse.json(
      { success: false, message: 'Error fetching team evolution data' },
      { status: 500 }
    );
  }
} 