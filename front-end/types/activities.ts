export interface Activity {
  id: string;
  key_process: string;
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  date: string; // ISO date string
  status: 'pending' | 'in_progress' | 'completed';
  participant: string;
  team: string;
  team_id?: string | number; // Added for API compatibility
  participant_id?: string | number; // Added for API compatibility
  type: string;
  category: string;
  base_score: number;
  multiplier: number;
  calculated_score: number;
  activity: any; // This is used to display raw activity data
  images?: Image[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Image {
  id: string;
  fileName: string;
  originalName: string;
  mimeType: string;
  size: number;
  hash: string;
  activityId: string;
  createdAt: Date;
  updatedAt: Date;
}

// Add ModelActivity type for API routes
export type ModelActivity = Activity; 