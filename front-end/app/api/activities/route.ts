import { NextResponse } from 'next/server';
import { ModelActivity } from '@/types/activities';
import { validateActivity } from '@/utils/activityValidation';
import prisma from '@/lib/prisma';

// Helper function to handle CORS
function corsResponse(response: NextResponse) {
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
  return response;
}

// Handle OPTIONS request for CORS preflight
export async function OPTIONS() {
  return corsResponse(new NextResponse(null, { status: 204 }));
}

export async function POST(request: Request) {
  try {
    const modelActivity: ModelActivity = await request.json();

    // Ensure the date string has seconds and milliseconds for proper Date parsing
    const dateStr = modelActivity.date;
    const formattedDate = dateStr.includes(':') && dateStr.split(':').length === 2 
      ? `${dateStr}:00.000Z`
      : dateStr;

    // Store the activity in the database
    const storedActivity = await prisma.activity.create({
      data: {
        participant: modelActivity.participant,
        team: modelActivity.team,
        team_id: modelActivity.team_id ? parseInt(modelActivity.team_id.toString()) : null,
        participant_id: modelActivity.participant_id ? modelActivity.participant_id.toString() : null,
        date: new Date(formattedDate), // Convert string date to Date object with proper formatting
        type: modelActivity.type,
        category: modelActivity.category,
        key_process: modelActivity.key_process,
        activity: modelActivity.activity as any, // Store the activity object as JSON
        base_score: modelActivity.base_score,
        multiplier: modelActivity.multiplier,
        calculated_score: modelActivity.calculated_score,
      },
    });

    // Update image status based on activity creation success
    try {
      await prisma.image.updateMany({
        where: {
          key_process: modelActivity.key_process
        },
        data: {
          status: 'PROCESSED'
        }
      });
    } catch (error) {
      console.error('Error updating image status:', error);
      // If there's an error updating the image status, set it to PROCESS_WITH_ERRORS
      await prisma.image.updateMany({
        where: {
          key_process: modelActivity.key_process
        },
        data: {
          status: 'PROCESS_WITH_ERRORS'
        }
      });
    }
    
    return corsResponse(
      NextResponse.json({
        message: 'Activity recorded successfully',
        data: storedActivity
      }, { status: 201 })
    );

  } catch (error) {
    console.error('Error processing activity:', error);
    
    // If there's an error creating the activity, update image status to PROCESS_WITH_ERRORS
    try {
      const modelActivity = await request.json();
      await prisma.image.updateMany({
        where: {
          key_process: modelActivity.key_process
        },
        data: {
          status: 'PROCESS_WITH_ERRORS'
        }
      });
    } catch (updateError) {
      console.error('Error updating image status after activity error:', updateError);
    }
    
    // Handle specific database errors
    if (error instanceof Error) {
      if (error.message.includes('prisma')) {
        return corsResponse(
          NextResponse.json(
            { error: 'Database error occurred' },
            { status: 500 }
          )
        );
      }
    }
    
    return corsResponse(
      NextResponse.json(
        { error: 'Internal server error' },
        { status: 500 }
      )
    );
  }
}

// Add GET endpoint to retrieve activities
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    
    // Build query filters
    const filters: any = {};
    
    // Add optional filters
    if (searchParams.has('participant')) {
      filters.participant = searchParams.get('participant');
    }
    if (searchParams.has('team')) {
      filters.team = searchParams.get('team');
    }
    if (searchParams.has('category')) {
      filters.category = searchParams.get('category');
    }
    if (searchParams.has('key_process')) {
      filters.key_process = searchParams.get('key_process');
    }
    
    // Get activities with pagination
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const skip = (page - 1) * limit;
    
    const activities = await prisma.activity.findMany({
      where: filters,
      orderBy: {
        createdAt: 'desc',
      },
      skip,
      take: limit,
    });
    
    // Get total count for pagination
    const total = await prisma.activity.count({
      where: filters,
    });
    
    return corsResponse(
      NextResponse.json({
        data: activities,
        pagination: {
          total,
          page,
          limit,
          totalPages: Math.ceil(total / limit),
        },
      })
    );
    
  } catch (error) {
    console.error('Error fetching activities:', error);
    return corsResponse(
      NextResponse.json(
        { error: 'Internal server error' },
        { status: 500 }
      )
    );
  }
} 