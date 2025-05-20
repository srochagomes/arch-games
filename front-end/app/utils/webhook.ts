import { env } from '@/config/env';
import fetch from 'node-fetch';
import FormData from 'form-data';

// Constants for form field names
export const MULTIPART_FILE_FIELD = 'files';

// Define valid participant types
type ParticipantType = 'participant' | 'captain' | 'governance';

interface FileInfo {
  name: string;
  type: string;
  buffer: Buffer;
}

interface WebhookData {
  key_process: string;
  team: string;
  team_id: number;
  participant_id: string;
  participants: Array<{
    id: string;
    name: string;
    type: string;
  }>;
  activityDate: string;
  quantityParticipants: number;
  maxTokens: number;
  files: Array<{
    name: string;
    type: string;
    buffer: Buffer;
  }>;
  fileNames: string;
}

// Validate participant type
function isValidParticipantType(type: string): type is ParticipantType {
  return ['participant', 'captain', 'governance'].includes(type);
}

export async function sendToN8N(data: WebhookData): Promise<void> {
  console.log('[Webhook] Starting N8N webhook process');
  try {
    if (data.files.length === 0) {
      throw new Error('No files provided');
    }

    // Create FormData instance
    const formData = new FormData();

    // Add all form fields
    formData.append('key_process', data.key_process);
    formData.append('team', data.team);
    formData.append('team_id', data.team_id.toString());
    formData.append('participant_id', data.participant_id);
    formData.append('participants', JSON.stringify(data.participants));
    formData.append('activityDate', data.activityDate);
    formData.append('quantityParticipants', data.quantityParticipants.toString());
    formData.append('maxTokens', data.maxTokens.toString());

    // Create multipart attribute names string (files0, files1, etc.)
    const fileNames = data.files.map((_, index) => `${MULTIPART_FILE_FIELD}${index}`).join(', ');
    formData.append('fileNames', fileNames);

    // Add files as binary with original filenames
    data.files.forEach((file, index) => {
      const fieldName = `${MULTIPART_FILE_FIELD}${index}`;
      formData.append(fieldName, file.buffer, {
        filename: file.name,
        contentType: file.type
      });
    });

    // Create Basic Auth header
    const authString = `webhook:${env.WEBHOOK_SECRET}`;
    const base64Auth = Buffer.from(authString).toString('base64');

    console.log('[Webhook] Sending request to N8N webhook URL');
    if (!env.WEBHOOK_URL) {
      throw new Error('WEBHOOK_URL is not defined');
    }
    const response = await fetch(env.WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${base64Auth}`,
        ...formData.getHeaders()
      },
      // @ts-ignore - FormData from 'form-data' is compatible with node-fetch
      body: formData
    });

    if (!response.ok) {
      throw new Error(`N8N webhook failed: ${response.statusText}`);
    }

    console.log('[Webhook] Successfully sent data to N8N');
  } catch (error) {
    console.error('[Webhook] Error in N8N webhook process:', error);
    throw new Error('N8N está fora do ar. Por favor, tente novamente mais tarde.');
  }
} 