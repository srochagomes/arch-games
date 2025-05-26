import { team, participant, activity } from '@prisma/client';

interface TeamWithParticipants extends team {
  participants: (participant & {
    activities: activity[];
  })[];
}

interface TeamRanking {
  teamId: number;
  teamName: string;
  scoreTotal: number;
}

export async function calculateTeamRankings(teams: TeamWithParticipants[]): Promise<TeamRanking[]> {
  // Calculate team scores
  const teamScores = teams.map(team => {
    const scoreTotal = team.participants.reduce((sum, participant) => {
      const participantScore = participant.activities.reduce((scoreSum, activity) => 
        scoreSum + (activity.calculated_score || 0), 0);
      return sum + participantScore;
    }, 0);

    return {
      teamId: team.id,
      teamName: team.name,
      scoreTotal
    };
  });

  // Sort teams by score (highest to lowest)
  return teamScores.sort((a, b) => b.scoreTotal - a.scoreTotal);
} 