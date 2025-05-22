import { env } from '@/config/env';
import fetch from 'node-fetch';
import FormData from 'form-data';

// Constants for form field names
export const MULTIPART_FILE_FIELD = 'imageFiles';

// Define valid participant types
type ParticipantType = 'participant' | 'captain' | 'governance';

interface FileInfo {
  name: string;
  type: string;
  buffer: Buffer;
}

export interface WebhookData {
  key_process: string;
  team: string;
  team_id: number;
  participant_id: number;
  participants: Array<{ id: number; name: string }>;
  activityDate: string;
  quantityParticipants: number;
  maxTokens: number;
  files: Array<{ name: string; type: string; buffer: Buffer }>;
  fileNames: string;
}

// Validate participant type
function isValidParticipantType(type: string): type is ParticipantType {
  return ['participant', 'captain', 'governance'].includes(type);
}

export async function sendToN8N(data: WebhookData): Promise<void> {
  const webhookUrl = env.N8N_WEBHOOK_URL;
  const username = env.N8N_USERNAME;
  const password = env.N8N_PASSWORD;

  if (!webhookUrl) {
    throw new Error('N8N webhook URL not configured');
  }

  if (!username || !password) {
    throw new Error('N8N credentials not configured');
  }

  console.log('Sending webhook request to:', webhookUrl);

  try {
    // Create FormData for multipart/form-data
    const formData = new FormData();
    
    // Add all data fields at root level
    formData.append('key_process', data.key_process);
    formData.append('team', data.team);
    formData.append('team_id', data.team_id.toString());
    formData.append('participant_id', data.participant_id.toString());
    formData.append('participants', JSON.stringify(data.participants));
    formData.append('activityDate', data.activityDate);
    formData.append('quantityParticipants', data.quantityParticipants.toString());
    formData.append('maxTokens', data.maxTokens.toString());

    // Add each file with its corresponding field name
    data.files.forEach((file, index) => {
      formData.append(`${MULTIPART_FILE_FIELD}${index}`, file.buffer, {
        filename: file.name,
        contentType: file.type
      });
    });

    // Add fileNames field
    formData.append('fileNames', data.fileNames);

    // Create basic auth header
    const auth = Buffer.from(`${username}:${password}`).toString('base64');

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${auth}`,
        ...formData.getHeaders()
      },
      body: formData
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`N8N webhook failed: ${response.status} ${response.statusText} - ${errorText}`);
    }

    console.log('Webhook request successful');
  } catch (error) {
    console.error('Error in sendToN8N:', error);
    throw error;
  }
} 