import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const scoreChanges = await prisma.scoreChangeHistory.findMany({
      where: {
        activity_id: params.id
      },
      orderBy: {
        changed_at: 'desc'
      }
    });

    return NextResponse.json({
      success: true,
      scoreChanges
    });
  } catch (error) {
    console.error('Error fetching score history:', error);
    return NextResponse.json({
      success: false,
      message: 'Error fetching score history'
    }, { status: 500 });
  }
} 