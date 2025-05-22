import { z } from 'zod';

const envSchema = z.object({
  UPLOAD_DIR: z.string(),
  MAX_FILE_SIZE: z.number(),
  ALLOWED_EXTENSIONS: z.array(z.string()),
  WEBHOOK_URL: z.string().optional(),
  WEBHOOK_SECRET: z.string().optional(),
  DATABASE_URL: z.string().optional(),
  N8N_WEBHOOK_URL: z.string().optional(),
  N8N_USERNAME: z.string().optional(),
  N8N_PASSWORD: z.string().optional(),
});

export const env = {
  UPLOAD_DIR: process.env.UPLOAD_DIR || 'uploads',
  MAX_FILE_SIZE: parseInt(process.env.MAX_FILE_SIZE || '10485760'), // 10MB default
  ALLOWED_EXTENSIONS: (process.env.ALLOWED_EXTENSIONS || 'jpg,jpeg,png').split(','),
  WEBHOOK_URL: process.env.WEBHOOK_URL,
  WEBHOOK_SECRET: process.env.WEBHOOK_SECRET,
  DATABASE_URL: process.env.DATABASE_URL,
  N8N_WEBHOOK_URL: process.env.N8N_WEBHOOK_URL,
  N8N_USERNAME: process.env.N8N_USERNAME,
  N8N_PASSWORD: process.env.N8N_PASSWORD,
} as const; 