import { env } from '@/config/env';
import crypto from 'crypto';

export const MULTIPART_FILE_FIELD = 'file';

interface WebhookPayload {
  event: string;
  data: any;
  timestamp: number;
}

export async function sendWebhook(payload: WebhookPayload): Promise<Response> {
  if (!env.WEBHOOK_URL) {
    throw new Error('Webhook URL not configured');
  }

  const timestamp = Date.now();
  const signature = generateWebhookSignature(payload, timestamp);

  return fetch(env.WEBHOOK_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Webhook-Signature': signature,
      'X-Webhook-Timestamp': timestamp.toString(),
    },
    body: JSON.stringify(payload),
  });
}

function generateWebhookSignature(payload: WebhookPayload, timestamp: number): string {
  if (!env.WEBHOOK_SECRET) {
    throw new Error('Webhook secret not configured');
  }

  const message = `${timestamp}.${JSON.stringify(payload)}`;
  return crypto
    .createHmac('sha256', env.WEBHOOK_SECRET)
    .update(message)
    .digest('hex');
}

export async function sendToN8N(payload: WebhookPayload): Promise<Response> {
  return sendWebhook(payload);
} 