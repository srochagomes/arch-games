'use client';

import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';

interface TeamScoreHistory {
  teamId: number;
  teamName: string;
  score: number;
  date: string;
}

interface TeamRankingHistoryProps {
  onGenerate: () => Promise<void>;
  isGenerating: boolean;
}

const TeamRankingHistory: React.FC<TeamRankingHistoryProps> = ({ onGenerate, isGenerating }) => {
  const [teamHistory, setTeamHistory] = useState<TeamScoreHistory[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTeamHistory = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch('/api/rankings/team-history');
      if (!response.ok) {
        throw new Error('Failed to fetch team history');
      }
      const data = await response.json();
      setTeamHistory(data);
    } catch (error) {
      setError('Failed to load team history');
      console.error('Error fetching team history:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTeamHistory();
  }, []);

  // Group data by month
  const groupedData = teamHistory.reduce((acc, record) => {
    const monthYear = format(new Date(record.date), 'MMM yyyy');
    if (!acc[monthYear]) {
      acc[monthYear] = [];
    }
    acc[monthYear].push(record);
    return acc;
  }, {} as Record<string, TeamScoreHistory[]>);

  // Get all unique months
  const months = Object.keys(groupedData).sort((a, b) => 
    new Date(a).getTime() - new Date(b).getTime()
  );

  // Get latest month's data for the chart
  const latestMonth = months[months.length - 1];
  const chartData = latestMonth ? groupedData[latestMonth] : [];

  // Get all unique teams
  const teams = Array.from(new Set(teamHistory.map(record => record.teamName)));

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="text-red-500 text-center">{error}</div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Team Ranking History</h2>
        <Button 
          onClick={onGenerate} 
          disabled={isGenerating}
          className="bg-blue-600 hover:bg-blue-700"
        >
          {isGenerating ? 'Generating...' : 'Generate Ranking'}
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Current Month Rankings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="teamName" 
                  angle={-45}
                  textAnchor="end"
                  height={100}
                  tickFormatter={(value) => value.length > 15 ? `${value.substring(0, 15)}...` : value}
                  tick={{ fontSize: 12 }}
                />
                <YAxis 
                  tick={{ fontSize: 12 }}
                  label={{ value: 'Score', angle: -90, position: 'insideLeft', style: { fontSize: 12 } }}
                />
                <Tooltip 
                  formatter={(value: number) => [`${value} points`, 'Score']}
                  labelFormatter={(label) => `Team: ${label}`}
                />
                <Bar dataKey="score" fill="#8884d8" name="Score" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Monthly Score Progression</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Team</TableHead>
                  {months.map(month => (
                    <TableHead key={month}>{month}</TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {teams.map(team => (
                  <TableRow key={team}>
                    <TableCell className="font-medium">{team}</TableCell>
                    {months.map(month => {
                      const teamScore = groupedData[month]?.find(
                        record => record.teamName === team
                      );
                      return (
                        <TableCell key={`${team}-${month}`}>
                          {teamScore ? teamScore.score : '-'}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeamRankingHistory; 