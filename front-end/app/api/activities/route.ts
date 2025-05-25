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
  let modelActivity: ModelActivity | undefined;
  
  try {
    const payload = await request.json();
    console.log('Received payload:', JSON.stringify(payload, null, 2));
    
    // Validate payload structure
    if (!payload || typeof payload !== 'object') {
      throw new Error('Invalid payload: must be an object');
    }

    // Check if this is a validation response
    if ('score' in payload && 'message' in payload) {
      return corsResponse(
        NextResponse.json({
          message: payload.message,
          score: payload.score
        }, { status: 200 })
      );
    }

    // Handle both direct activity data and wrapped body format
    modelActivity = payload.body || payload;
    
    if (!modelActivity || typeof modelActivity !== 'object') {
      throw new Error('Invalid activity data: must be an object');
    }

    // Validate required fields before accessing them
    const requiredFields = ['participant', 'team', 'date', 'type', 'category', 'key_process'] as const;
    const missingFields = requiredFields.filter(field => {
      if (!modelActivity) return true;
      return !(field in modelActivity) || modelActivity[field] === undefined || modelActivity[field] === null;
    });
    
    if (missingFields.length > 0) {
      throw new Error(`Missing required fields: ${missingFields.join(', ')}`);
    }

    console.log('Processing activity:', JSON.stringify(modelActivity, null, 2));

    // Ensure the date string has seconds and milliseconds for proper Date parsing
    const dateStr = modelActivity.date;
    if (!dateStr || typeof dateStr !== 'string') {
      throw new Error('Invalid date format');
    }

    // Format the date string to ensure it's a valid ISO date
    let formattedDate: string;
    try {
      const date = new Date(dateStr);
      if (isNaN(date.getTime())) {
        throw new Error('Invalid date');
      }
      formattedDate = date.toISOString();
    } catch (error) {
      throw new Error('Invalid date format');
    }

    console.log('Formatted date:', formattedDate);

    // Store the activity in the database
    const activityData = {
      participant: modelActivity.participant,
      team: modelActivity.team,
      team_id: modelActivity.team_id ? parseInt(modelActivity.team_id.toString()) : null,
      participant_id: modelActivity.participant_id ? modelActivity.participant_id.toString() : null,
      date: new Date(formattedDate),
      type: modelActivity.type,
      category: modelActivity.category,
      key_process: modelActivity.key_process,
      activity: modelActivity.activity as any,
      base_score: modelActivity.base_score || 0,
      multiplier: modelActivity.multiplier || 1,
      calculated_score: modelActivity.calculated_score || 0,
    };

    console.log('Creating activity with data:', JSON.stringify(activityData, null, 2));

    try {
      const storedActivity = await prisma.activity.create({
        data: activityData,
      });

      console.log('Activity created successfully:', storedActivity.id);

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
        console.log('Image status updated to PROCESSED');
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
        console.log('Image status updated to PROCESS_WITH_ERRORS');
      }
      
      return corsResponse(
        NextResponse.json({
          message: 'Activity recorded successfully',
          data: storedActivity
        }, { status: 201 })
      );
    } catch (dbError) {
      console.error('Database error:', dbError);
      throw new Error(`Database error: ${dbError instanceof Error ? dbError.message : 'Unknown error'}`);
    }
  } catch (error) {
    console.error('Error processing activity:', error);
    
    // Log detailed error information
    if (error instanceof Error) {
      console.error('Error name:', error.name);
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }
    
    // If there's an error creating the activity and we have the modelActivity, update image status
    if (modelActivity?.key_process) {
      try {
        await prisma.image.updateMany({
          where: {
            key_process: modelActivity.key_process
          },
          data: {
            status: 'PROCESS_WITH_ERRORS'
          }
        });
        console.log('Image status updated to PROCESS_WITH_ERRORS after error');
      } catch (updateError) {
        console.error('Error updating image status after activity error:', updateError);
      }
    }
    
    return corsResponse(
      NextResponse.json(
        { 
          error: 'Internal server error',
          details: error instanceof Error ? error.message : 'Unknown error'
        },
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