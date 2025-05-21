import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

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

export async function POST() {
  try {
    // Get all teams
    const teams = await prisma.team.findMany();
    
    // Get ALL activities without filtering by calculated_score
    const activities = await prisma.activity.findMany({
      include: {
        team_relation: true,
        participant_relation: true
      }
    });

    // Calculate team scores from ALL activities
    const teamScores = teams.map(team => {
      const teamActivities = activities.filter(a => a.team_id === team.id);
      const scoreTotal = teamActivities.reduce((sum, activity) => sum + (activity.calculated_score || 0), 0);
      return {
        teamId: team.id,
        teamName: team.name,
        scoreTotal
      };
    });

    // Sort teams by score
    teamScores.sort((a, b) => b.scoreTotal - a.scoreTotal);

    // Get previous team rankings and store them before deletion
    const previousTeamRankings = await prisma.rankingTeam.findMany({
      orderBy: {
        generatedAt: 'desc'
      }
    });

    // Create new team rankings with variations
    const teamRankings = teamScores.map((team, index) => {
      // Find the most recent previous ranking for this team
      const previousRanking = previousTeamRankings.find(r => r.teamId === team.teamId);
      const newPosition = index + 1;
      
      // If there's a previous ranking, calculate variation
      let rankingVariation = null;
      let scoreDiff = null;
      
      if (previousRanking) {
        // If position hasn't changed, keep the previous variation
        if (previousRanking.rankingPosition === newPosition) {
          rankingVariation = previousRanking.rankingVariation;
        } else {
          // If position changed, calculate new variation
          rankingVariation = previousRanking.rankingPosition - newPosition;
        }
        scoreDiff = team.scoreTotal - previousRanking.scoreTotal;
      }

      return {
        teamId: team.teamId,
        teamName: team.teamName,
        scoreTotal: team.scoreTotal,
        rankingPosition: newPosition,
        rankingVariation,
        scoreDiff,
        generatedAt: new Date()
      };
    });

    // Delete all existing team rankings
    await prisma.rankingTeam.deleteMany({});

    // Save new team rankings
    await prisma.rankingTeam.createMany({
      data: teamRankings
    });

    // Calculate participant scores from ALL activities
    const participantScores = activities.reduce((acc: Record<string, ParticipantScore>, activity) => {
      if (!activity.participant_id || !activity.participant_relation) return acc;
      
      const key = activity.participant_id;
      if (!acc[key]) {
        acc[key] = {
          participantId: activity.participant_id,
          participantName: activity.participant_relation.name,
          teamId: activity.team_id || 0,
          scoreTotal: 0
        };
      }
      acc[key].scoreTotal += activity.calculated_score || 0;
      return acc;
    }, {});

    // Get all participants to ensure we include those without activities
    const allParticipants = await prisma.participant.findMany({
      include: {
        team: true
      }
    });

    // Add participants without activities to the scores
    allParticipants.forEach(participant => {
      if (!participantScores[participant.id]) {
        participantScores[participant.id] = {
          participantId: participant.id,
          participantName: participant.name,
          teamId: participant.team_id,
          scoreTotal: 0
        };
      }
    });

    // Sort participants by score
    const sortedParticipants = Object.values(participantScores).sort((a, b) => b.scoreTotal - a.scoreTotal);

    // Get previous participant rankings and store them before deletion
    const previousParticipantRankings = await prisma.rankingParticipant.findMany({
      orderBy: {
        generatedAt: 'desc'
      }
    });

    // Create new participant rankings with variations
    const participantRankings = sortedParticipants.map((participant, index) => {
      // Find the most recent previous ranking for this participant
      const previousRanking = previousParticipantRankings.find(r => r.participantId === participant.participantId);
      const newPosition = index + 1;
      
      // If there's a previous ranking, calculate variation
      let rankingVariation = null;
      let scoreDiff = null;
      
      if (previousRanking) {
        // If position hasn't changed, keep the previous variation
        if (previousRanking.rankingPosition === newPosition) {
          rankingVariation = previousRanking.rankingVariation;
        } else {
          // If position changed, calculate new variation
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
        generatedAt: new Date()
      };
    });

    // Delete all existing participant rankings
    await prisma.rankingParticipant.deleteMany({});

    // Save new participant rankings
    await prisma.rankingParticipant.createMany({
      data: participantRankings
    });

    // Delete existing distribution data
    await prisma.teamScoreDistribution.deleteMany({});
    await prisma.categoryDistribution.deleteMany({});

    // Calculate and save team score distribution
    const totalScore = teamScores.reduce((sum, team) => sum + team.scoreTotal, 0);
    if (totalScore > 0) {
      await prisma.teamScoreDistribution.createMany({
        data: teamScores.map(team => ({
          teamId: team.teamId,
          scoreTotal: team.scoreTotal,
          percentage: (team.scoreTotal / totalScore) * 100
        }))
      });
    }

    // Calculate and save category distribution
    const categoryScores = activities.reduce((acc: Record<string, { category: string; totalScore: number }>, activity) => {
      if (!activity.category) return acc;
      
      if (!acc[activity.category]) {
        acc[activity.category] = {
          category: activity.category,
          totalScore: 0
        };
      }
      acc[activity.category].totalScore += activity.calculated_score || 0;
      return acc;
    }, {});

    await prisma.categoryDistribution.createMany({
      data: Object.values(categoryScores).map(score => ({
        teamId: 1, // Using a default teamId since we're aggregating by category
        category: score.category,
        totalScore: score.totalScore
      }))
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Rankings and distributions generated successfully',
      teamRankings,
      participantRankings
    });
  } catch (error) {
    console.error('Error generating rankings:', error);
    return NextResponse.json(
      { success: false, message: 'Error generating rankings' },
      { status: 500 }
    );
  }
} 