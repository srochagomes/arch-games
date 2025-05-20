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

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const [rankingsRes, distributionRes] = await Promise.all([
        fetch('/api/rankings/teams'),
        fetch('/api/rankings/distribution')
      ]);

      if (rankingsRes.ok && distributionRes.ok) {
        const [rankingsData, distributionData] = await Promise.all([
          rankingsRes.json(),
          distributionRes.json()
        ]);

        setTeamRankings(rankingsData.teamRankings);
        setParticipantRankings(rankingsData.participantRankings);
        setTeamScoreDistribution(distributionData.teamScoreDistribution);
        setCategoryDistribution(distributionData.categoryDistribution);
      }
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();

    // Set up an interval to refresh data every 30 seconds
    const interval = setInterval(fetchData, 30000);

    // Clean up the interval on component unmount
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
                      <Bar dataKey="scoreTotal" fill="#8884d8" name="Total Score" />
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
                    <PieChart>
                      <Pie
                        data={teamScoreDistribution}
                        dataKey="percentage"
                        nameKey="teamName"
                        cx="50%"
                        cy="50%"
                        outerRadius={120}
                        innerRadius={60}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        labelLine={true}
                        style={{ fontSize: 12 }}
                      >
                        {teamScoreDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend 
                        wrapperStyle={{ fontSize: 12 }}
                        formatter={(value) => value.length > 25 ? `${value.substring(0, 25)}...` : value}
                        layout="vertical"
                        align="right"
                        verticalAlign="middle"
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
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={participantRankings}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="participantName" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="scoreTotal" fill="#82ca9d" name="Total Score" />
                  </BarChart>
                </ResponsiveContainer>
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
                  <BarChart data={categoryDistribution}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="category" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="totalScore" fill="#ffc658" name="Category Score" />
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