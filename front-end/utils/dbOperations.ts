import prisma from '@/lib/prisma';

export interface ImageMetadata {
  fileName: string;
  originalName: string;
  mimeType: string;
  size: number;
  hash: string;
  activityId?: string;
}

export async function saveImageMetadata(metadata: ImageMetadata) {
  return prisma.image.create({
    data: {
      filename: metadata.fileName,
      name: metadata.originalName,
      type: metadata.mimeType,
      hash: metadata.hash,
      key_process: metadata.activityId || '',
      team: '', // This needs to be provided
      activity_date: new Date(), // This needs to be provided
    },
  });
}

export async function getImageByHash(hash: string) {
  return prisma.image.findFirst({
    where: { hash },
  });
}

export async function deleteImageMetadata(id: number) {
  return prisma.image.delete({
    where: { id },
  });
}

export async function findDuplicateImage(hash: string) {
  return getImageByHash(hash);
}

export async function saveImageRecord(metadata: ImageMetadata) {
  return saveImageMetadata(metadata);
} 