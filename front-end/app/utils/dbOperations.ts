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

// DDL for creating the tables (to be run manually in psql or your DB tool)
export const CREATE_TABLES_SQL = `
-- Create schema for our application
CREATE SCHEMA IF NOT EXISTS arch_games;

-- Create enum for participant type
CREATE TYPE arch_games.participant_type AS ENUM ('Participante', 'Capitão', 'Governança');

-- Create table for image records
CREATE TABLE arch_games.image_records (
    id SERIAL PRIMARY KEY,
    key_process UUID NOT NULL,
    hash VARCHAR(64) NOT NULL UNIQUE,
    name VARCHAR(100) NOT NULL,
    team VARCHAR(100) NOT NULL,
    type arch_games.participant_type NOT NULL,
    activity_date TIMESTAMP NOT NULL,
    upload_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    filename VARCHAR(255) NOT NULL
);

-- Create index on hash for faster lookups
CREATE INDEX idx_image_records_hash ON arch_games.image_records(hash);

-- Grant necessary permissions
GRANT USAGE ON SCHEMA arch_games TO n8n_user;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA arch_games TO n8n_user;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA arch_games TO n8n_user;
`;

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
      status: null
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
  try {
    const record = await prisma.image.findFirst({
      where: {
        hash: hash
      }
    });
    return record;
  } catch (error) {
    console.error('Error finding duplicate image:', error);
    return null;
  }
}

export async function saveImageRecord(metadata: ImageMetadata): Promise<ImageRecord> {
  return saveImageMetadata(metadata);
} 