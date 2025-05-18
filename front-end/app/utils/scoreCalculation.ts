import { PhysicalActivity } from '../types/activities';

interface ScoreResult {
  base_score: number;
  multiplier: number;
  calculated_score: number;
  error_description?: string;
}

export function calculatePhysicalActivityScore(activity: PhysicalActivity): ScoreResult {
  const { distance_km, duration_minutes } = activity.activity;
  
  // Validate distance_km
  if (typeof distance_km !== 'number' || isNaN(distance_km) || distance_km <= 0) {
    return {
      base_score: 0,
      multiplier: 0,
      calculated_score: 0,
      error_description: 'Distância inválida ou não informada. A pontuação foi definida como zero.'
    };
  }
  
  // Base calculation rules for physical activities
  let base_score = 40; // Default base score
  let multiplier = 1.0; // Default multiplier
  
  // Additional score based on distance
  if (distance_km >= 10) {
    base_score += 10;
  } else if (distance_km >= 5) {
    base_score += 5;
  }
  
  // Additional score based on duration
  if (duration_minutes >= 60) {
    multiplier *= 1.2;
  }
  
  // Calculate final score
  const calculated_score = Math.round(base_score * multiplier);
  
  return {
    base_score,
    multiplier,
    calculated_score
  };
} 