export interface ActivityOption {
  value: string;
  label: string;
}

export const ACTIVITY_OPTIONS: ActivityOption[] = [
  { value: 'physical_activity', label: 'Atividade Física' },
  { value: 'blood_donation', label: 'Doação de Sangue' },
  { value: 'happy_hour', label: 'Happy Hour' },
  { value: 'learning', label: 'Aprendizado' },
  { value: 'duolingo', label: 'Duolingo' },
  { value: 'books', label: 'Livros' }
]; 