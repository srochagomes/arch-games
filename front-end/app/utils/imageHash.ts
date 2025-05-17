import CryptoJS from 'crypto-js';
import { readdir, readFile } from 'fs/promises';
import path from 'path';

export interface ImageMetadata {
  hash: string;
  name: string;
  team: string;
  uploadDate: string;
  filename: string;
}

export async function calculateImageHash(buffer: Buffer): Promise<string> {
  const wordArray = CryptoJS.lib.WordArray.create(buffer as unknown as number[]);
  return CryptoJS.SHA256(wordArray).toString();
}

export async function findDuplicateImage(
  imageHash: string,
  uploadsDir: string
): Promise<ImageMetadata | null> {
  try {
    // Get all directories in uploads folder
    const directories = await readdir(uploadsDir);

    // Check each directory for metadata.json
    for (const dir of directories) {
      const metadataPath = path.join(uploadsDir, dir, 'metadata.json');
      try {
        const metadataContent = await readFile(metadataPath, 'utf-8');
        const metadata = JSON.parse(metadataContent);

        // Check if this metadata contains our hash
        if (metadata.imageHashes && metadata.imageHashes[imageHash]) {
          return {
            hash: imageHash,
            name: metadata.name,
            team: metadata.team,
            uploadDate: metadata.uploadDate,
            filename: metadata.imageHashes[imageHash]
          };
        }
      } catch (error) {
        // Skip if metadata file doesn't exist or is invalid
        continue;
      }
    }

    return null;
  } catch (error) {
    console.error('Error checking for duplicate images:', error);
    return null;
  }
} 