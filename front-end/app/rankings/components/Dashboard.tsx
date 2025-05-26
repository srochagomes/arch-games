'use client';

import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { ACTIVITY_OPTIONS, ActivityOption } from '@/app/api/types/activityOptions';
import TeamEvolutionChart from './TeamEvolutionChart';

interface TeamRanking {
  teamId: number;
  teamName: string;
  scoreTotal: number;
  rankingPosition: number;
  rankingVariation: number | null;
  scoreDiff: number | null;
}

interface ParticipantRanking {
  participantId: string;
  participantName: string;
  teamId: number;
  scoreTotal: number;
  rankingPosition: number;
  rankingVariation: number | null;
  scoreDiff: number | null;
}

interface TeamScoreDistribution {
  teamId: number;
  scoreTotal: number;
  percentage: number;
  teamName: string;
}

interface CategoryDistribution {
  teamId: number;
  category: string;
  totalScore: number;
  teamName: string;
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D'];

const Dashboard: React.FC = () => {
  const [teamRankings, setTeamRankings] = useState<TeamRanking[]>([]);
  const [participantRankings, setParticipantRankings] = useState<ParticipantRanking[]>([]);
  const [teamScoreDistribution, setTeamScoreDistribution] = useState<TeamScoreDistribution[]>([]);
  const [categoryDistribution, setCategoryDistribution] = useState<CategoryDistribution[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const aggregateTeamScores = (data: TeamScoreDistribution[]) => {
    const aggregatedData = data.reduce((acc, curr) => {
      const existingTeam = acc.find(item => item.teamId === curr.teamId);
      if (existingTeam) {
        existingTeam.scoreTotal += curr.scoreTotal;
        existingTeam.percentage += curr.percentage;
      } else {
        acc.push({ ...curr });
      }
      return acc;
    }, [] as TeamScoreDistribution[]);

    // Calculate final percentages
    const totalScore = aggregatedData.reduce((sum, item) => sum + item.scoreTotal, 0);
    return aggregatedData
      .map(item => ({
        ...item,
        percentage: (item.scoreTotal / totalScore) * 100
      }))
      .sort((a, b) => b.scoreTotal - a.scoreTotal); // Sort by score in descending order
  };

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const [teamsRes, participantsRes, distributionRes] = await Promise.all([
        fetch('/api/rankings/teams'),
        fetch('/api/rankings/participants'),
        fetch('/api/rankings/distribution')
      ]);

      if (teamsRes.ok && participantsRes.ok && distributionRes.ok) {
        const [teamsData, participantsData, distributionData] = await Promise.all([
          teamsRes.json(),
          participantsRes.json(),
          distributionRes.json()
        ]);

        setTeamRankings(teamsData.teamRankings || []);
        setParticipantRankings(participantsData.participantRankings || []);
        setTeamScoreDistribution(aggregateTeamScores(distributionData.teamScoreDistribution || []));
        setCategoryDistribution(distributionData.categoryDistribution || []);
      }
    } catch (error) {
      setTeamRankings([]);
      setParticipantRankings([]);
      setTeamScoreDistribution([]);
      setCategoryDistribution([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <TeamEvolutionChart />
      <Tabs defaultValue="teams" className="space-y-6">
        <TabsList>
          <TabsTrigger value="teams">Team Rankings</TabsTrigger>
          <TabsTrigger value="participants">Participant Rankings</TabsTrigger>
          <TabsTrigger value="distribution">Score Distribution</TabsTrigger>
        </TabsList>

        <TabsContent value="teams">
          <div className="space-y-6 max-h-[800px] overflow-y-auto pr-4">
            <Card>
              <CardHeader>
                <CardTitle>Team Rankings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={teamRankings}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis 
                        dataKey="teamName" 
                        angle={-45}
                        textAnchor="end"
                        height={100}
                        tickFormatter={(value) => value.length > 25 ? `${value.substring(0, 25)}...` : value}
                        tick={{ fontSize: 12 }}
                      />
                      <YAxis tick={{ fontSize: 12 }} />
                      <Tooltip />
                      <Legend wrapperStyle={{ fontSize: 12 }} />
                      <Bar dataKey="scoreTotal" name="Total Score">
                        {teamRankings.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Team Score Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart margin={{ right: 200, left: 0, top: 0, bottom: 0 }}>
                      <Pie
                        data={teamScoreDistribution}
                        dataKey="scoreTotal"
                        nameKey="teamName"
                        cx="35%"
                        cy="50%"
                        outerRadius={120}
                        innerRadius={60}
                        label={({ name, percent }) => `${name} (${(percent * 100).toFixed(1)}%)`}
                        labelLine={false}
                        isAnimationActive={false}
                      >
                        {teamScoreDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip 
                        formatter={(value: number) => [`${value} pontos`, 'Pontuação']}
                        labelFormatter={(label) => label}
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
                        formatter={(value) => value}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="participants">
          <Card>
            <CardHeader>
              <CardTitle>Participant Rankings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                {participantRankings && participantRankings.length > 0 ? (
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart 
                      data={participantRankings}
                      margin={{ top: 20, right: 30, left: 20, bottom: 100 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis 
                        dataKey="participantName" 
                        angle={-45}
                        textAnchor="end"
                        height={100}
                        tickFormatter={(value) => value.length > 15 ? `${value.substring(0, 15)}...` : value}
                        tick={{ fontSize: 12 }}
                        interval={0}
                      />
                      <YAxis 
                        tick={{ fontSize: 12 }}
                        label={{ value: 'Score', angle: -90, position: 'insideLeft', style: { fontSize: 12 } }}
                      />
                      <Tooltip 
                        formatter={(value: number) => [`${value} points`, 'Score']}
                        labelFormatter={(label) => `Participant: ${label}`}
                      />
                      <Legend 
                        wrapperStyle={{ fontSize: 12 }}
                        layout="vertical"
                        align="right"
                        verticalAlign="middle"
                      />
                      <Bar 
                        dataKey="scoreTotal" 
                        name="Total Score"
                        fill="#8884d8"
                        radius={[4, 4, 0, 0]}
                      >
                        {participantRankings.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <p className="text-gray-500">No participant rankings available</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="distribution">
          <Card>
            <CardHeader>
              <CardTitle>Category Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart 
                    data={categoryDistribution}
                    margin={{ top: 20, right: 30, bottom: 60, left: 40 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="activityLabel"
                      angle={-45}
                      textAnchor="end"
                      height={100}
                      tick={{ fontSize: 12 }}
                    />
                    <YAxis 
                      tick={{ fontSize: 12 }}
                      label={{ value: 'Pontuação Total', angle: -90, position: 'insideLeft', style: { fontSize: 12 } }}
                    />
                    <Tooltip 
                      formatter={(value: number) => [`${value} pontos`, 'Pontuação']}
                      labelFormatter={(label) => `Categoria: ${label}`}
                    />
                    <Bar 
                      dataKey="totalScore" 
                      name="Pontuação Total"
                      radius={[4, 4, 0, 0]}
                    >
                      {categoryDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard; 