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

interface ValidationResult {
  isValid: boolean;
  error?: string;
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
      error: `Campos base obrigatórios faltando: ${missingFields.join(', ')}`
    };
  }

  if (!['participant', 'captain', 'governance'].includes(activity.type)) {
    return {
      isValid: false,
      error: 'Tipo inválido. Deve ser um dos seguintes: participant, captain, governance'
    };
  }

  if (!UUID_REGEX.test(activity.key_process)) {
    return {
      isValid: false,
      error: 'key_process deve ser um UUID válido'
    };
  }

  return { isValid: true };
}

export function validateActivity(activity: ModelActivity): ValidationResult {
  try {
    // Basic field validation
    if (!activity.participant) {
      return { isValid: false, error: 'Participante é obrigatório' };
    }
    if (!activity.team) {
      return { isValid: false, error: 'Time é obrigatório' };
    }
    if (!activity.date) {
      return { isValid: false, error: 'Data é obrigatória' };
    }
    if (!activity.type) {
      return { isValid: false, error: 'Tipo é obrigatório' };
    }
    if (!activity.category) {
      return { isValid: false, error: 'Categoria é obrigatória' };
    }
    if (!activity.key_process) {
      return { isValid: false, error: 'Key process é obrigatório' };
    }
    if (!activity.activity) {
      return { isValid: false, error: 'Detalhes da atividade são obrigatórios' };
    }

    // Type validation
    if (!['participant', 'captain', 'governance'].includes(activity.type)) {
      return { isValid: false, error: 'Tipo de participante inválido' };
    }

    // Category-specific validation
    switch (activity.category) {
      case 'physical_activity':
        if (!activity.activity.duration_minutes || !activity.activity.distance_km) {
          return { isValid: false, error: 'Duração e distância são obrigatórios para atividade física' };
        }
        break;
      case 'duolingo':
        if (!activity.activity.points || !activity.activity.language) {
          return { isValid: false, error: 'Pontos e idioma são obrigatórios para Duolingo' };
        }
        break;
      case 'professional_training':
        if (!activity.activity.duration_hours || !activity.activity.institution) {
          return { isValid: false, error: 'Duração e instituição são obrigatórios para treinamento profissional' };
        }
        break;
      case 'corporate_meeting':
        if (!activity.activity.duration_minutes || !activity.activity.participants) {
          return { isValid: false, error: 'Duração e participantes são obrigatórios para reunião corporativa' };
        }
        break;
      case 'happy_hour':
        if (!activity.activity.location || !activity.activity.participants) {
          return { isValid: false, error: 'Local e participantes são obrigatórios para happy hour' };
        }
        break;
      case 'books':
        if (!activity.activity.title || !activity.activity.author || !activity.activity.pages) {
          return { isValid: false, error: 'Título, autor e número de páginas são obrigatórios para livros' };
        }
        break;
      case 'games':
        if (!activity.activity.game_title || !activity.activity.type) {
          return { isValid: false, error: 'Título do jogo e tipo são obrigatórios para jogos' };
        }
        break;
      case 'amigo_de_valor':
        if (!activity.activity.description) {
          return { isValid: false, error: 'Descrição é obrigatória para Amigo de Valor' };
        }
        break;
      case 'blood_donation':
        if (!activity.activity.location || !activity.activity.type) {
          return { isValid: false, error: 'Local e tipo são obrigatórios para doação de sangue' };
        }
        break;
      case 'lacre_event':
        if (!activity.activity.event_name || activity.activity.position === undefined) {
          return { isValid: false, error: 'Nome do evento e posição são obrigatórios para evento Lacre' };
        }
        break;
      default:
        return { isValid: false, error: 'Categoria de atividade inválida' };
    }

    // Score validation
    if (typeof activity.base_score !== 'number' || activity.base_score < 0) {
      return { isValid: false, error: 'Score base deve ser um número positivo' };
    }
    if (typeof activity.multiplier !== 'number' || activity.multiplier < 0) {
      return { isValid: false, error: 'Multiplicador deve ser um número positivo' };
    }
    if (typeof activity.calculated_score !== 'number' || activity.calculated_score < 0) {
      return { isValid: false, error: 'Score calculado deve ser um número positivo' };
    }

    return { isValid: true };
  } catch (error) {
    return { isValid: false, error: 'Erro ao validar atividade' };
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
      error: `Atividade física com campos obrigatórios faltando: ${missingFields.join(', ')}`
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
      error: `Atividade Duolingo com campos obrigatórios faltando: ${missingFields.join(', ')}`
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
      error: `Treinamento profissional com campos obrigatórios faltando: ${missingFields.join(', ')}`
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
      error: `Reunião corporativa com campos obrigatórios faltando: ${missingFields.join(', ')}`
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
      error: `Happy hour com campos obrigatórios faltando: ${missingFields.join(', ')}`
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
      error: `Atividade de livros com campos obrigatórios faltando: ${missingFields.join(', ')}`
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
      error: `Atividade de jogos com campos obrigatórios faltando: ${missingFields.join(', ')}`
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
      error: `Atividade Amigo de Valor com campos obrigatórios faltando: ${missingFields.join(', ')}`
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
      error: `Doação de sangue com campos obrigatórios faltando: ${missingFields.join(', ')}`
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
      error: `Evento Lacre com campos obrigatórios faltando: ${missingFields.join(', ')}`
    };
  }

  return { isValid: true };
} 