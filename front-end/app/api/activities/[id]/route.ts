import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    await prisma.activity.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting activity:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

// Helper function to handle CORS
function corsResponse(response: NextResponse) {
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET, PATCH, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
  return response;
}

// Handle OPTIONS request for CORS preflight
export async function OPTIONS() {
  return corsResponse(new NextResponse(null, { status: 204 }));
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const { base_score, multiplier, calculated_score, change_reason, category } = await request.json();

    // First verify that the activity exists
    const existingActivity = await prisma.activity.findUnique({
      where: { id }
    });

    if (!existingActivity) {
      return corsResponse(
        NextResponse.json(
          { error: 'Activity not found' },
          { status: 404 }
        )
      );
    }

    // Create a score change history record
    await prisma.scoreChangeHistory.create({
      data: {
        activity_id: id,
        old_base_score: existingActivity.base_score,
        old_multiplier: existingActivity.multiplier,
        new_base_score: base_score,
        new_multiplier: multiplier,
        change_reason,
        changed_at: new Date(),
      },
    });

    // Update the activity with new scores and category
    const updatedActivity = await prisma.activity.update({
      where: { id },
      data: {
        base_score,
        multiplier,
        calculated_score,
        category,
      },
    });

    return corsResponse(
      NextResponse.json(updatedActivity)
    );
  } catch (error) {
    console.error('Error updating activity:', error);
    return corsResponse(
      NextResponse.json(
        { error: 'Internal server error' },
        { status: 500 }
      )
    );
  }
} 