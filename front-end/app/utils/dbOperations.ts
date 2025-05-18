import { prisma } from '@/app/lib/prisma';

interface ImageRecord {
  id: number;
  hash: string;
  name: string;
  team: string;
  type: string;
  activity_date: Date;
  upload_date: Date;
  filename: string;
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

export async function findDuplicateImage(hash: string): Promise<ImageRecord | null> {
  try {
    const record = await prisma.image.findUnique({
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

export async function saveImageRecord(
  hash: string,
  name: string,
  team: string,
  type: string,
  activity_date: Date,
  filename: string,
  key_process: string
): Promise<void> {
  try {
    await prisma.image.create({
      data: {
        hash,
        name,
        team,
        type,
        activity_date,
        filename,
        key_process
      }
    });
  } catch (error) {
    console.error('Error saving image record:', error);
    throw error;
  }
} 