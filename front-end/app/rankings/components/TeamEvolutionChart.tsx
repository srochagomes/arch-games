'use client';

import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { format } from 'date-fns';

interface TeamEvolutionData {
  month: string;
  [key: string]: any;
}

interface Team {
  id: number;
  name: string;
}

const COLORS = [
  '#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#0088fe',
  '#00c49f', '#ffbb28', '#ff8042', '#a4de6c', '#d0ed57'
];

const TeamEvolutionChart: React.FC = () => {
  const [data, setData] = useState<TeamEvolutionData[]>([]);
  const [teams, setTeams] = useState<Team[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetch('/api/rankings/team-evolution');
        if (!response.ok) {
          throw new Error('Failed to fetch team evolution data');
        }
        const result = await response.json();
        
        // Sort teams by their latest score
        const sortedTeams = result.teams.sort((a: Team, b: Team) => {
          const aLatestScore = result.chartData[result.chartData.length - 1][`team_${a.id}`] || 0;
          const bLatestScore = result.chartData[result.chartData.length - 1][`team_${b.id}`] || 0;
          return bLatestScore - aLatestScore;
        });

        setData(result.chartData);
        setTeams(sortedTeams);
      } catch (error) {
        setError('Failed to load team evolution data');
        console.error('Error fetching team evolution data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

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
    <Card>
      <CardHeader>
        <CardTitle>Team Score Evolution</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ right: 200, left: 40, top: 20, bottom: 60 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="month" 
                tick={{ fontSize: 12 }}
                angle={-45}
                textAnchor="end"
                height={60}
              />
              <YAxis 
                tick={{ fontSize: 12 }}
                label={{ 
                  value: 'Score', 
                  angle: -90, 
                  position: 'insideLeft',
                  style: { fontSize: 12 }
                }}
              />
              <Tooltip 
                formatter={(value: number) => [`${value} points`, 'Score']}
                labelFormatter={(label) => `Month: ${label}`}
              />
              <Legend 
                layout="vertical"
                align="right"
                verticalAlign="middle"
                wrapperStyle={{
                  right: 0,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '180px'
                }}
              />
              {teams.map((team, index) => (
                <Line
                  key={team.id}
                  type="monotone"
                  dataKey={`team_${team.id}`}
                  name={team.name}
                  stroke={COLORS[index % COLORS.length]}
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamEvolutionChart; 