import { PrismaClient } from '@prisma/client';
import { rename, mkdir, readdir } from 'fs/promises';
import path from 'path';
import { env } from '../config/env';

const prisma = new PrismaClient();

async function renameFiles() {
  try {
    // Get all images from the database
    const images = await prisma.image.findMany({
      select: {
        id: true,
        filename: true,
        name: true,
        team: true,
        activity_date: true,
      },
    });

    console.log(`Found ${images.length} images in database`);

    for (const image of images) {
      try {
        // Get the directory path from the filename
        const dirPath = path.dirname(path.join(env.UPLOAD_DIR, image.filename));
        
        // List files in the directory
        const files = await readdir(dirPath);
        
        // Find the file that matches the pattern (should be the only PNG in the directory)
        const matchingFile = files.find(file => file.endsWith('.png'));
        
        if (!matchingFile) {
          console.error(`No matching file found in directory: ${dirPath}`);
          continue;
        }

        // Construct the old and new paths
        const oldPath = path.join(dirPath, matchingFile);
        const newPath = path.join(env.UPLOAD_DIR, image.filename);

        // Only rename if the files are different
        if (oldPath !== newPath) {
          await rename(oldPath, newPath);
          console.log(`Renamed: ${matchingFile} -> ${path.basename(image.filename)}`);
        } else {
          console.log(`File already has correct name: ${image.filename}`);
        }
      } catch (error) {
        console.error(`Error processing image ${image.id}:`, error);
        if (error instanceof Error) {
          console.error('Error details:', error.message);
        }
      }
    }

    console.log('File renaming completed');
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the script
renameFiles(); 