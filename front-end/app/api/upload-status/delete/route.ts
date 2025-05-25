import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { rm } from 'fs/promises';
import path from 'path';
import { env } from '@/config/env';
import { PrismaClient } from '@prisma/client';

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const key_process = searchParams.get('key_process');

    if (!key_process) {
      return NextResponse.json({
        success: false,
        message: 'Key process is required'
      }, { status: 400 });
    }

    // Start a transaction to ensure all deletions are atomic
    await prisma.$transaction(async (tx: Omit<PrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use' | '$extends'>) => {
      // 1. Get all image records for this key_process
      const images = await tx.image.findMany({
        where: { key_process },
        select: { filename: true }
      });

      // 2. Delete the image files from disk
      for (const image of images) {
        const filePath = path.join(env.UPLOAD_DIR, image.filename);
        try {
          await rm(filePath, { force: true });
          console.log(`Deleted file: ${filePath}`);
        } catch (error) {
          console.error(`Error deleting file ${filePath}:`, error);
          // Continue with other files even if one fails
        }
      }

      // 3. Delete related activity records
      await tx.activity.deleteMany({
        where: { key_process }
      });

      // 4. Delete the image records from database
      await tx.image.deleteMany({
        where: { key_process }
      });
    });

    return NextResponse.json({
      success: true,
      message: 'Upload and related records deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting upload:', error);
    return NextResponse.json({
      success: false,
      message: error instanceof Error ? error.message : 'Internal server error'
    }, { status: 500 });
  }
} 