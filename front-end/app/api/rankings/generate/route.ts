import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { calculateTeamRankings } from '@/lib/ranking';

interface TeamScore {
  teamId: number;
  teamName: string;
  scoreTotal: number;
}

interface ParticipantScore {
  participantId: string;
  participantName: string;
  teamId: number;
  scoreTotal: number;
}

// Minimal types for local use
// You can replace 'any' with more specific types if you have them

type Team = any;
type Activity = any;
type RankingTeam = any;
type RankingParticipant = any;

export const dynamic = 'force-dynamic';

export async function POST() {
  try {
    // Get all teams with their participants and activities
    const teams = await prisma.team.findMany({
      include: {
        participants: {
          include: {
            activities: true
          }
        }
      }
    });

    // Calculate team rankings
    const teamRankings = await calculateTeamRankings(teams);

    // Get the latest generation timestamp
    const latestGeneration = await prisma.rankingTeam.findFirst({
      orderBy: {
        generatedAt: 'desc'
      },
      select: {
        generatedAt: true
      }
    });

    // Store team rankings with historical data
    const currentDate = new Date();
    const monthYear = currentDate.toISOString().slice(0, 7); // Format: YYYY-MM

    // Create team ranking records
    const teamRankingRecords = teamRankings.map((ranking, index) => ({
      teamId: ranking.teamId,
      teamName: ranking.teamName,
      scoreTotal: ranking.scoreTotal,
      rankingPosition: index + 1,
      rankingVariation: null, // Will be calculated in the next generation
      generatedAt: currentDate
    }));

    // Store team rankings
    await prisma.$transaction(
      teamRankingRecords.map(record => 
        prisma.rankingTeam.create({
          data: record
        })
      )
    );

    // Store historical data
    await prisma.$transaction(
      teamRankings.map((ranking, index) => 
        prisma.teamScoreHistory.create({
          data: {
            teamId: ranking.teamId,
            score: ranking.scoreTotal,
            date: currentDate
          }
        })
      )
    );

    // Calculate and update ranking variations if there's a previous generation
    if (latestGeneration) {
      const previousRankings = await prisma.rankingTeam.findMany({
        where: {
          generatedAt: latestGeneration.generatedAt
        }
      });

      const previousRankingMap = new Map(
        previousRankings.map(ranking => [ranking.teamId, ranking.rankingPosition])
      );

      // Update variations for current rankings
      await Promise.all(
        teamRankings.map((ranking, index) => {
          const previousPosition = previousRankingMap.get(ranking.teamId);
          const variation = previousPosition ? previousPosition - (index + 1) : null;

          return prisma.rankingTeam.updateMany({
            where: {
              teamId: ranking.teamId,
              generatedAt: currentDate
            },
            data: {
              rankingVariation: variation
            }
          });
        })
      );
    }

    // Calculate participant scores
    const activities = await prisma.activity.findMany({
      include: {
        team_relation: true,
        participant_relation: true
      }
    });

    const participantScores = activities.reduce((acc: Record<string, any>, activity) => {
      if (!activity.participant_id || !activity.participant_relation) return acc;

      const participantId = activity.participant_id;
      if (!acc[participantId]) {
        acc[participantId] = {
          participantId,
          participantName: activity.participant_relation.name,
          teamId: activity.team_relation?.id || 0,
          scoreTotal: 0
        };
      }

      acc[participantId].scoreTotal += activity.calculated_score || 0;
      return acc;
    }, {});

    // Sort participants by score
    const sortedParticipants = Object.values(participantScores).sort(
      (a, b) => b.scoreTotal - a.scoreTotal
    );

    // Get previous participant rankings
    const previousParticipantRankings = await prisma.rankingParticipant.findMany({
      where: {
        generatedAt: latestGeneration?.generatedAt
      }
    });

    // Create new participant rankings with variations
    const participantRankings = sortedParticipants.map((participant, index) => {
      const previousRanking = previousParticipantRankings.find(
        r => r.participantId === participant.participantId
      );
      const newPosition = index + 1;

      let rankingVariation = null;
      let scoreDiff = null;

      if (previousRanking) {
        if (previousRanking.rankingPosition === newPosition) {
          rankingVariation = previousRanking.rankingVariation;
        } else {
          rankingVariation = previousRanking.rankingPosition - newPosition;
        }
        scoreDiff = participant.scoreTotal - previousRanking.scoreTotal;
      }

      return {
        participantId: participant.participantId,
        participantName: participant.participantName,
        teamId: participant.teamId,
        scoreTotal: participant.scoreTotal,
        rankingPosition: newPosition,
        rankingVariation,
        scoreDiff,
        generatedAt: currentDate
      };
    });

    // Delete all existing participant rankings
    await prisma.rankingParticipant.deleteMany({});

    // Save new participant rankings
    await prisma.rankingParticipant.createMany({
      data: participantRankings
    });

    // Calculate and save team score distribution
    const totalScore = teamRankings.reduce((sum, team) => sum + team.scoreTotal, 0);
    if (totalScore > 0) {
      await prisma.teamScoreDistribution.createMany({
        data: teamRankings.map(team => ({
          teamId: team.teamId,
          scoreTotal: team.scoreTotal,
          percentage: (team.scoreTotal / totalScore) * 100
        }))
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error generating rankings:', error);
    return NextResponse.json(
      { success: false, message: 'Error generating rankings' },
      { status: 500 }
    );
  }
} 