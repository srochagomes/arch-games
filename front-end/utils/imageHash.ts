import crypto from 'crypto';
import { createReadStream } from 'fs';

export async function calculateImageHash(input: Buffer | string): Promise<string> {
  return new Promise((resolve, reject) => {
    const hash = crypto.createHash('sha256');
    if (typeof input === 'string') {
      // treat as file path
      const stream = createReadStream(input);
      stream.on('error', err => reject(err));
      stream.on('data', chunk => hash.update(chunk));
      stream.on('end', () => resolve(hash.digest('hex')));
    } else {
      // treat as buffer
      hash.update(input);
      resolve(hash.digest('hex'));
    }
  });
}

export function generateUniqueFileName(originalName: string, hash: string): string {
  const extension = originalName.split('.').pop();
  return `${hash}.${extension}`;
}

// Alias for calculateImageHash to maintain backward compatibility
export const generateImageHash = calculateImageHash; 