'use client';

import React, { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUpIcon, ArrowDownIcon, MinusIcon } from '@heroicons/react/24/solid';

interface TeamRanking {
  id: number;
  teamId: number;
  teamName: string;
  scoreTotal: number;
  rankingPosition: number;
  rankingVariation: number | null;
  scoreDiff: number | null;
}

const TeamRankingTable: React.FC = () => {
  const [rankings, setRankings] = useState<TeamRanking[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRankings = async () => {
      try {
        const response = await fetch('/api/rankings/teams');
        if (!response.ok) {
          throw new Error('Failed to fetch rankings');
        }
        const data = await response.json();
        setRankings(data.teamRankings);
      } catch (error) {
        // Error handling without console.log
      } finally {
        setIsLoading(false);
      }
    };

    fetchRankings();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Team Rankings</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Position</TableHead>
              <TableHead>Team</TableHead>
              <TableHead>Score</TableHead>
              <TableHead>Variation</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rankings && rankings.length > 0 ? (
              rankings.map((ranking) => (
                <TableRow key={ranking.id}>
                  <TableCell className="font-medium">{ranking.rankingPosition}</TableCell>
                  <TableCell>{ranking.teamName}</TableCell>
                  <TableCell>{ranking.scoreTotal}</TableCell>
                  <TableCell>
                    {ranking.rankingVariation === null || ranking.rankingVariation === 0 ? (
                      <span className="text-gray-400">-</span>
                    ) : ranking.rankingVariation > 0 ? (
                      <ArrowUpIcon className="h-4 w-4 text-green-500" />
                    ) : (
                      <ArrowDownIcon className="h-4 w-4 text-red-500" />
                    )}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} className="text-center">
                  No rankings available
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default TeamRankingTable; 