'use client';

import React, { useEffect, useState, useCallback } from 'react';
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
import { useInView } from 'react-intersection-observer';

interface TeamRanking {
  id: number;
  teamId: number;
  teamName: string;
  scoreTotal: number;
  rankingPosition: number;
  rankingVariation: number | null;
  scoreDiff: number | null;
}

interface PaginationInfo {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

const TeamRankingTable: React.FC = () => {
  const [rankings, setRankings] = useState<TeamRanking[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [pagination, setPagination] = useState<PaginationInfo | null>(null);
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: '100px'
  });

  const fetchRankings = useCallback(async (pageNum: number) => {
    try {
      setIsLoading(true);
      const response = await fetch(`/api/rankings/teams?page=${pageNum}&limit=10`);
      if (!response.ok) {
        throw new Error('Failed to fetch rankings');
      }
      const data = await response.json();
      
      if (pageNum === 1) {
        setRankings(data.teamRankings);
      } else {
        setRankings(prev => [...prev, ...data.teamRankings]);
      }
      
      setPagination(data.pagination);
      setHasMore(pageNum < data.pagination.totalPages);
    } catch (error) {
      console.error('Error fetching rankings:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRankings(1);
  }, [fetchRankings]);

  useEffect(() => {
    if (inView && hasMore && !isLoading) {
      const nextPage = page + 1;
      setPage(nextPage);
      fetchRankings(nextPage);
    }
  }, [inView, hasMore, isLoading, page, fetchRankings]);

  if (isLoading && rankings.length === 0) {
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
        <div className="relative">
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
                <>
                  {rankings.map((ranking) => (
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
                  ))}
                  {hasMore && (
                    <TableRow ref={ref}>
                      <TableCell colSpan={4} className="text-center py-4">
                        {isLoading ? (
                          <div className="flex justify-center">
                            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
                          </div>
                        ) : (
                          'Loading more...'
                        )}
                      </TableCell>
                    </TableRow>
                  )}
                </>
              ) : (
                <TableRow>
                  <TableCell colSpan={4} className="text-center">
                    No rankings available
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamRankingTable; 