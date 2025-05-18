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
        where.date.gte = new Date(startDate);
      }
      if (endDate) {
        where.date.lte = new Date(endDate);
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

    const [activities, total] = await Promise.all([
      prisma.activity.findMany({
        where,
        orderBy: {
          date: 'desc',
        },
        skip: (page - 1) * pageSize,
        take: pageSize,
      }),
      prisma.activity.count({ where })
    ]);

    return NextResponse.json({ 
      activities,
      pagination: {
        total,
        page,
        pageSize,
        totalPages: Math.ceil(total / pageSize)
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