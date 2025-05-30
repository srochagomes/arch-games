import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Update image status to PROCESSING
    if (data.key_process) {
      await prisma.image.updateMany({
        where: {
          key_process: data.key_process
        },
        data: {
          status: 'PROCESSING'
        }
      });
    }
    
    return NextResponse.json({ 
      success: true,
      message: 'Webhook received successfully'
    });
  } catch (error) {
    console.error('Error processing webhook:', error);
    return NextResponse.json(
      { 
        success: false,
        message: 'Error processing webhook',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// Optional: Handle GET requests for webhook verification
export async function GET(request: NextRequest) {
  return NextResponse.json({ 
    status: 'active',
    message: 'Webhook endpoint is active'
  });
} 