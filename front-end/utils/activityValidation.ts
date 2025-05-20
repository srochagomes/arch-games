import { Activity } from '@/types/activities';

export function validateActivity(activity: Partial<Activity>): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];

  // Required fields
  if (!activity.participant) errors.push('Participante é obrigatório');
  if (!activity.team) errors.push('Time é obrigatório');
  if (!activity.category) errors.push('Categoria é obrigatória');
  if (!activity.date) errors.push('Data é obrigatória');
  if (typeof activity.base_score !== 'number') errors.push('Pontuação base é obrigatória');
  if (typeof activity.multiplier !== 'number') errors.push('Multiplicador é obrigatório');
  if (typeof activity.calculated_score !== 'number') errors.push('Pontuação calculada é obrigatória');

  // Validate numeric fields
  if (activity.base_score !== undefined && activity.base_score < 0) errors.push('Pontuação base não pode ser negativa');
  if (activity.multiplier !== undefined && activity.multiplier < 0) errors.push('Multiplicador não pode ser negativo');
  if (activity.calculated_score !== undefined && activity.calculated_score < 0) errors.push('Pontuação calculada não pode ser negativa');

  // Validate date format
  if (activity.date && !isValidISODate(activity.date)) {
    errors.push('Formato de data inválido');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

function isValidISODate(dateString: string): boolean {
  const date = new Date(dateString);
  return date instanceof Date && !isNaN(date.getTime());
} 