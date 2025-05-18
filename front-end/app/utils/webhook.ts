import { env } from '../config/env';
import { readFile } from 'fs/promises';

// Define valid participant types
type ParticipantType = 'participant' | 'captain' | 'governance';

interface FileInfo {
  name: string;
  type: string;
  path: string;
}

interface WebhookData {
  name: string;
  team: string;
  type: string;
  groupSize: number;
  activityDate: string;
  uploadDate: string;
  key_process: string;
  files: FileInfo[];
  category: string;
  activity: any;
  base_score: number;
  multiplier: number;
  calculated_score: number;
}

// Validate participant type
function isValidParticipantType(type: string): type is ParticipantType {
  return ['participant', 'captain', 'governance'].includes(type);
}

export async function sendToN8N(data: WebhookData): Promise<void> {
  try {
    // Validate type before proceeding
    if (!isValidParticipantType(data.type)) {
      throw new Error('Invalid type. Must be one of: participant, captain, governance');
    }

    // Validate group size
    if (typeof data.groupSize !== 'number' || data.groupSize < 1) {
      throw new Error('Group size must be a positive number');
    }

    if (data.files.length === 0) {
      throw new Error('No files provided');
    }

    // Create FormData instance using Web API
    const formData = new FormData();

    // Create the metadata object
    const metadata = {
      name: data.name,
      team: data.team,
      type: data.type,
      groupSize: data.groupSize,
      activityDate: data.activityDate,
      uploadDate: data.uploadDate,
      key_process: data.key_process,
      filesInfo: data.files.map(f => ({
        name: f.name,
        type: f.type
      })),
      category: data.category,
      activity: data.activity,
      base_score: data.base_score,
      multiplier: data.multiplier,
      calculated_score: data.calculated_score
    };

    // Add each metadata field separately to ensure they're processed as JSON
    for (const [key, value] of Object.entries(metadata)) {
      formData.append(key, typeof value === 'string' ? value : JSON.stringify(value));
    }

    // Add files as binary
    for (const file of data.files) {
      const fileBuffer = await readFile(file.path);
      const blob = new Blob([fileBuffer], { type: file.type });
      formData.append('imageFiles', blob, file.name);
    }

    // Create Basic Auth header
    const authString = `${env.n8n.username}:${env.n8n.password}`;
    const base64Auth = Buffer.from(authString).toString('base64');

    const response = await fetch(env.n8n.webhookUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${base64Auth}`
      },
      body: formData
    });

    if (!response.ok) {
      throw new Error(`N8N webhook failed: ${response.statusText}`);
    }
  } catch (error) {
    console.error('Error sending webhook to N8N:', error);
    if (error instanceof Error && (error.message.includes('Invalid type') || error.message.includes('Group size'))) {
      throw error; // Rethrow validation errors as is
    }
    throw new Error('N8N está fora do ar. Por favor, tente novamente mais tarde.');
  }
} 