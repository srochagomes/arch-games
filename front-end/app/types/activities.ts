// Base activity interface
export interface BaseActivity {
  participant: string;
  team: string;
  date: string;
  type: 'participant' | 'captain' | 'governance';
  category: string;
  key_process: string;
  base_score: number;
  multiplier: number;
  calculated_score: number;
  activity: Record<string, any>;
}

// Physical Activity
export interface PhysicalActivity extends BaseActivity {
  category: 'physical_activity';
  activity: {
    description: string;
    duration_minutes: number;
    distance_km: number;
    start: string;
    end: string;
    score: number;
  };
}

// Duolingo Activity
export interface DuolingoActivity extends BaseActivity {
  category: 'duolingo';
  activity: {
    description: string;
    points: number;
    language: string;
    level: string;
    start: string;
    end: string;
  };
}

// Professional Training Activity
export interface ProfessionalTrainingActivity extends BaseActivity {
  category: 'professional_training';
  activity: {
    description: string;
    institution: string;
    duration_hours: number;
    certificate: boolean;
    score: number;
  };
}

// Corporate Meeting Activity
export interface CorporateMeetingActivity extends BaseActivity {
  category: 'corporate_meeting';
  activity: {
    title: string;
    duration_minutes: number;
    participants: string[];
    score: number;
  };
}

// Happy Hour Activity
export interface HappyHourActivity extends BaseActivity {
  category: 'happy_hour';
  activity: {
    description: string;
    location: string;
    participants: string[];
    score: number;
  };
}

// Books Activity
export interface BooksActivity extends BaseActivity {
  category: 'books';
  activity: {
    title: string;
    author: string;
    pages: number;
    summary_submitted: boolean;
    score: number;
  };
}

// Games Activity
export interface GamesActivity extends BaseActivity {
  category: 'games';
  activity: {
    game_title: string;
    type: string;
    score: number;
    rank: number;
  };
}

// Amigo de Valor Activity
export interface AmigoDeValorActivity extends BaseActivity {
  category: 'amigo_de_valor';
  activity: {
    description: string;
    score: number;
  };
}

// Blood Donation Activity
export interface BloodDonationActivity extends BaseActivity {
  category: 'blood_donation';
  activity: {
    location: string;
    type: string;
    certificate_provided: boolean;
    score: number;
  };
}

// Lacre Event Activity
export interface LacreEventActivity extends BaseActivity {
  category: 'lacre_event';
  activity: {
    event_name: string;
    position: number;
    score: number;
  };
}

// Union type of all activities
export type ModelActivity =
  | PhysicalActivity
  | DuolingoActivity
  | ProfessionalTrainingActivity
  | CorporateMeetingActivity
  | HappyHourActivity
  | BooksActivity
  | GamesActivity
  | AmigoDeValorActivity
  | BloodDonationActivity
  | LacreEventActivity;

export interface Activity {
  id: string;
  participant: string;
  team: string;
  date: string;
  type: string;
  category: string;
  base_score: number;
  multiplier: number;
  calculated_score: number;
  key_process: string;
  activity: any; // This will be a specific type based on the category
  createdAt: string;
  updatedAt: string;
} 