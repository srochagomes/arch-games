import prisma from '@/lib/prisma';

export interface ImageRecord {
  id: number;
  filename: string;
  key_process: string;
  activity_date: Date;
  name: string;
  team: string;
  type: string;
  hash: string;
  status: string | null;
}

export interface ImageMetadata {
  fileName: string;
  originalName: string;
  mimeType: string;
  size: number;
  hash: string;
  activityId: string;
  team: string;
}

export async function saveImageMetadata(metadata: ImageMetadata): Promise<ImageRecord> {
  return prisma.image.create({
    data: {
      filename: metadata.fileName,
      name: metadata.originalName,
      type: metadata.mimeType,
      hash: metadata.hash,
      key_process: metadata.activityId,
      team: metadata.team,
      activity_date: new Date(),
      status: 'PENDING'
    }
  });
}

export async function getImageByHash(hash: string): Promise<ImageRecord | null> {
  return prisma.image.findFirst({
    where: { hash },
  });
}

export async function deleteImageMetadata(id: number): Promise<ImageRecord> {
  return prisma.image.delete({
    where: { id },
  });
}

export async function findDuplicateImage(hash: string): Promise<ImageRecord | null> {
  return getImageByHash(hash);
}

export async function saveImageRecord(metadata: ImageMetadata): Promise<ImageRecord> {
  return saveImageMetadata(metadata);
} 