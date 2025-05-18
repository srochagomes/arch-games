import { NextResponse } from 'next/server';
import { Activity } from '@/app/types/activities';
import { validateActivity, ValidationError } from '@/app/utils/activityValidation';
import { prisma } from '@/app/lib/prisma';

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
    const activity: Activity = await request.json();

    try {
      // Validate all fields including key_process
      validateActivity(activity);
    } catch (validationError) {
      if (validationError instanceof ValidationError) {
        return corsResponse(
          NextResponse.json(
            { error: validationError.message },
            { status: 400 }
          )
        );
      }
      throw validationError;
    }

    // Store the activity in the database
    const storedActivity = await prisma.activity.create({
      data: {
        participant: activity.participant,
        team: activity.team,
        date: new Date(activity.date), // Convert string date to Date object
        type: activity.type,
        category: activity.category,
        key_process: activity.key_process,
        activity: activity.activity as any, // Store the activity object as JSON
      },
    });
    
    return corsResponse(
      NextResponse.json({
        message: 'Activity recorded successfully',
        data: storedActivity
      }, { status: 201 })
    );

  } catch (error) {
    console.error('Error processing activity:', error);
    
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