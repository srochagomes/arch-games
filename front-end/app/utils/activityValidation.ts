import { 
  ModelActivity,
  PhysicalActivity,
  DuolingoActivity,
  ProfessionalTrainingActivity,
  CorporateMeetingActivity,
  HappyHourActivity,
  BooksActivity,
  GamesActivity,
  AmigoDeValorActivity,
  BloodDonationActivity,
  LacreEventActivity,
  BaseActivity
} from '../types/activities';

export interface ValidationResult {
  isValid: boolean;
  errorMessage?: string;
}

// UUID validation regex
const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

// Validate base fields that are common to all activities
function validateBaseFields(activity: BaseActivity): ValidationResult {
  const missingFields = [];
  
  if (!activity.participant) missingFields.push('participante');
  if (!activity.team) missingFields.push('equipe');
  if (!activity.date) missingFields.push('data');
  if (!activity.type) missingFields.push('tipo');
  if (!activity.category) missingFields.push('categoria');
  if (!activity.key_process) missingFields.push('chave do processo');

  if (missingFields.length > 0) {
    return {
      isValid: false,
      errorMessage: `Campos base obrigatórios faltando: ${missingFields.join(', ')}`
    };
  }

  if (!['participant', 'captain', 'governance'].includes(activity.type)) {
    return {
      isValid: false,
      errorMessage: 'Tipo inválido. Deve ser um dos seguintes: participant, captain, governance'
    };
  }

  if (!UUID_REGEX.test(activity.key_process)) {
    return {
      isValid: false,
      errorMessage: 'key_process deve ser um UUID válido'
    };
  }

  return { isValid: true };
}

export function validateActivity(activity: ModelActivity): ValidationResult {
  // First validate base fields
  const baseValidation = validateBaseFields(activity);
  if (!baseValidation.isValid) {
    return baseValidation;
  }

  // Then validate category-specific fields
  switch (activity.category) {
    case 'physical_activity':
      return validatePhysicalActivity(activity);
    case 'duolingo':
      return validateDuolingoActivity(activity);
    case 'professional_training':
      return validateProfessionalTraining(activity);
    case 'corporate_meeting':
      return validateCorporateMeeting(activity);
    case 'happy_hour':
      return validateHappyHour(activity);
    case 'books':
      return validateBooks(activity);
    case 'games':
      return validateGames(activity);
    case 'amigo_de_valor':
      return validateAmigoDeValor(activity);
    case 'blood_donation':
      return validateBloodDonation(activity);
    case 'lacre_event':
      return validateLacreEvent(activity);
    default:
      const _exhaustiveCheck: never = activity;
      return {
        isValid: false,
        errorMessage: `Categoria de atividade desconhecida: ${(activity as any).category}`
      };
  }
}

export function validatePhysicalActivity(activity: PhysicalActivity): ValidationResult {
  const { duration_minutes, distance_km, start, end, score } = activity.activity;
  const missingFields = [];
  
  if (!duration_minutes) missingFields.push('duração');
  if (!distance_km) missingFields.push('distância');
  if (!start) missingFields.push('início');
  if (!end) missingFields.push('fim');
  if (score === undefined) missingFields.push('pontuação');
  
  if (missingFields.length > 0) {
    return {
      isValid: false,
      errorMessage: `Atividade física com campos obrigatórios faltando: ${missingFields.join(', ')}`
    };
  }
  
  return { isValid: true };
}

export function validateDuolingoActivity(activity: DuolingoActivity): ValidationResult {
  const { points, language, level, start, end } = activity.activity;
  const missingFields = [];

  if (!points) missingFields.push('pontos');
  if (!language) missingFields.push('idioma');
  if (!level) missingFields.push('nível');
  if (!start) missingFields.push('início');
  if (!end) missingFields.push('fim');

  if (missingFields.length > 0) {
    return {
      isValid: false,
      errorMessage: `Atividade Duolingo com campos obrigatórios faltando: ${missingFields.join(', ')}`
    };
  }

  return { isValid: true };
}

export function validateProfessionalTraining(activity: ProfessionalTrainingActivity): ValidationResult {
  const { description, institution, duration_hours, certificate, score } = activity.activity;
  const missingFields = [];

  if (!description) missingFields.push('descrição');
  if (!institution) missingFields.push('instituição');
  if (!duration_hours) missingFields.push('horas de duração');
  if (certificate === undefined) missingFields.push('certificado');
  if (score === undefined) missingFields.push('pontuação');

  if (missingFields.length > 0) {
    return {
      isValid: false,
      errorMessage: `Treinamento profissional com campos obrigatórios faltando: ${missingFields.join(', ')}`
    };
  }

  return { isValid: true };
}

export function validateCorporateMeeting(activity: CorporateMeetingActivity): ValidationResult {
  const { title, duration_minutes, participants, score } = activity.activity;
  const missingFields = [];

  if (!title) missingFields.push('título');
  if (!duration_minutes) missingFields.push('duração');
  if (!Array.isArray(participants)) missingFields.push('participantes');
  if (score === undefined) missingFields.push('pontuação');

  if (missingFields.length > 0) {
    return {
      isValid: false,
      errorMessage: `Reunião corporativa com campos obrigatórios faltando: ${missingFields.join(', ')}`
    };
  }

  return { isValid: true };
}

export function validateHappyHour(activity: HappyHourActivity): ValidationResult {
  const { description, location, participants, score } = activity.activity;
  const missingFields = [];

  if (!description) missingFields.push('descrição');
  if (!location) missingFields.push('local');
  if (!Array.isArray(participants)) missingFields.push('participantes');
  if (score === undefined) missingFields.push('pontuação');

  if (missingFields.length > 0) {
    return {
      isValid: false,
      errorMessage: `Happy hour com campos obrigatórios faltando: ${missingFields.join(', ')}`
    };
  }

  return { isValid: true };
}

export function validateBooks(activity: BooksActivity): ValidationResult {
  const { title, author, pages, summary_submitted, score } = activity.activity;
  const missingFields = [];

  if (!title) missingFields.push('título');
  if (!author) missingFields.push('autor');
  if (!pages) missingFields.push('páginas');
  if (summary_submitted === undefined) missingFields.push('resumo enviado');
  if (score === undefined) missingFields.push('pontuação');

  if (missingFields.length > 0) {
    return {
      isValid: false,
      errorMessage: `Atividade de livros com campos obrigatórios faltando: ${missingFields.join(', ')}`
    };
  }

  return { isValid: true };
}

export function validateGames(activity: GamesActivity): ValidationResult {
  const { game_title, type, score, rank } = activity.activity;
  const missingFields = [];

  if (!game_title) missingFields.push('título do jogo');
  if (!type) missingFields.push('tipo');
  if (score === undefined) missingFields.push('pontuação');
  if (rank === undefined) missingFields.push('classificação');

  if (missingFields.length > 0) {
    return {
      isValid: false,
      errorMessage: `Atividade de jogos com campos obrigatórios faltando: ${missingFields.join(', ')}`
    };
  }

  return { isValid: true };
}

export function validateAmigoDeValor(activity: AmigoDeValorActivity): ValidationResult {
  const { description, score } = activity.activity;
  const missingFields = [];

  if (!description) missingFields.push('descrição');
  if (score === undefined) missingFields.push('pontuação');

  if (missingFields.length > 0) {
    return {
      isValid: false,
      errorMessage: `Atividade Amigo de Valor com campos obrigatórios faltando: ${missingFields.join(', ')}`
    };
  }

  return { isValid: true };
}

export function validateBloodDonation(activity: BloodDonationActivity): ValidationResult {
  const { location, type, certificate_provided, score } = activity.activity;
  const missingFields = [];

  if (!location) missingFields.push('local');
  if (!type) missingFields.push('tipo');
  if (certificate_provided === undefined) missingFields.push('certificado fornecido');
  if (score === undefined) missingFields.push('pontuação');

  if (missingFields.length > 0) {
    return {
      isValid: false,
      errorMessage: `Doação de sangue com campos obrigatórios faltando: ${missingFields.join(', ')}`
    };
  }

  return { isValid: true };
}

export function validateLacreEvent(activity: LacreEventActivity): ValidationResult {
  const { event_name, position, score } = activity.activity;
  const missingFields = [];

  if (!event_name) missingFields.push('nome do evento');
  if (position === undefined) missingFields.push('posição');
  if (score === undefined) missingFields.push('pontuação');

  if (missingFields.length > 0) {
    return {
      isValid: false,
      errorMessage: `Evento Lacre com campos obrigatórios faltando: ${missingFields.join(', ')}`
    };
  }

  return { isValid: true };
} 