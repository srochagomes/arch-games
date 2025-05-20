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
}

interface CategoryDistribution {
  teamId: number;
  category: string;
  totalScore: number;
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D'];

const Dashboard: React.FC = () => {
  const [teamRankings, setTeamRankings] = useState<TeamRanking[]>([]);
  const [participantRankings, setParticipantRankings] = useState<ParticipantRanking[]>([]);
  const [teamScoreDistribution, setTeamScoreDistribution] = useState<TeamScoreDistribution[]>([]);
  const [categoryDistribution, setCategoryDistribution] = useState<CategoryDistribution[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
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

    fetchData();
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
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Team Rankings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={teamRankings}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="teamName" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
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
                        outerRadius={150}
                        label
                      >
                        {teamScoreDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
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