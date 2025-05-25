import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get('page') || '1');
    const pageSize = parseInt(searchParams.get('pageSize') || '20');
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');
    const participant = searchParams.get('participant');
    const team = searchParams.get('team');

    const where: any = {};

    if (startDate || endDate) {
      where.date = {};
      if (startDate) {
        where.date.gte = new Date(startDate + 'T00:00:00.000Z');
      }
      if (endDate) {
        where.date.lte = new Date(endDate + 'T23:59:59.999Z');
      }
    }

    if (participant) {
      where.participant = {
        contains: participant,
        mode: 'insensitive',
      };
    }

    if (team) {
      where.team = {
        contains: team,
        mode: 'insensitive',
      };
    }

    // Calculate the correct offset
    const offset = (page - 1) * pageSize;

    console.log('Query params:', {
      page,
      pageSize,
      offset,
      where
    });

    // First get the total count
    const total = await prisma.activity.count({ where });
    const totalPages = Math.ceil(total / pageSize);

    // Then get the paginated results
    const activities = await prisma.activity.findMany({
      where,
      orderBy: {
        date: 'desc',
      },
      skip: offset,
      take: pageSize,
      include: {
        team_relation: true,
        participant_relation: true,
      }
    });

    console.log('Query results:', {
      activitiesCount: activities.length,
      total,
      totalPages,
      currentPage: page,
      hasMore: page < totalPages
    });

    return NextResponse.json({ 
      activities,
      pagination: {
        total,
        page,
        pageSize,
        totalPages
      }
    });
  } catch (error) {
    console.error('Error fetching activities:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
} 