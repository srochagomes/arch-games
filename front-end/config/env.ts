export const env = {
  UPLOAD_DIR: process.env.UPLOAD_DIR || 'uploads',
  MAX_FILE_SIZE: parseInt(process.env.MAX_FILE_SIZE || '5242880'), // 5MB default
  ALLOWED_EXTENSIONS: (process.env.ALLOWED_EXTENSIONS || 'jpg,jpeg,png,gif,webp').split(','),
  WEBHOOK_URL: process.env.WEBHOOK_URL,
  WEBHOOK_SECRET: process.env.WEBHOOK_SECRET,
  DATABASE_URL: process.env.DATABASE_URL,
} as const; 