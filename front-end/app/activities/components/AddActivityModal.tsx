import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { format } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';
import { Activity } from '@/types/activities';

interface Team {
  id: number;
  name: string;
}

interface Participant {
  id: string;
  name: string;
  team_id: number;
  type: string;
}

interface ActivityOption {
  value: string;
  label: string;
  category: string;
  base_score: number;
  multiplier: number;
}

const ACTIVITY_OPTIONS: ActivityOption[] = [
  { value: 'physical_activity', label: 'Atividade Física', category: 'physical_activity', base_score: 10, multiplier: 1 },
  { value: 'duolingo', label: 'Duolingo', category: 'duolingo', base_score: 5, multiplier: 1 },
  { value: 'professional_training', label: 'Treinamento Profissional', category: 'professional_training', base_score: 15, multiplier: 1 },
  { value: 'corporate_meeting', label: 'Reunião Corporativa', category: 'corporate_meeting', base_score: 5, multiplier: 1 },
  { value: 'happy_hour', label: 'Happy Hour', category: 'happy_hour', base_score: 5, multiplier: 1 },
  { value: 'books', label: 'Livros', category: 'books', base_score: 10, multiplier: 1 },
  { value: 'games', label: 'Jogos', category: 'games', base_score: 5, multiplier: 1 },
  { value: 'amigo_de_valor', label: 'Amigo de Valor', category: 'amigo_de_valor', base_score: 15, multiplier: 1 },
  { value: 'blood_donation', label: 'Doação de Sangue', category: 'blood_donation', base_score: 20, multiplier: 1 },
  { value: 'lacre_event', label: 'Evento Lacre', category: 'lacre_event', base_score: 10, multiplier: 1 },
];

interface AddActivityModalProps {
  onClose: () => void;
  onAdd: () => void;
}

export default function AddActivityModal({ onClose, onAdd }: AddActivityModalProps) {
  const [loading, setLoading] = useState(false);
  const [teams, setTeams] = useState<Team[]>([]);
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [selectedTeamId, setSelectedTeamId] = useState<number | ''>('');
  const [formData, setFormData] = useState({
    participant_id: '',
    team_id: '',
    activity: '',
    description: '',
    date: format(new Date(), 'yyyy-MM-dd'),
    time: format(new Date(), 'HH:mm'),
    score: '',
  });

  // Fetch teams on component mount
  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await fetch('/api/teams');
        if (!response.ok) {
          throw new Error('Failed to fetch teams');
        }
        const data = await response.json();
        setTeams(data.teams || []);
      } catch (error) {
        // Error handling without console.log
        setTeams([]);
      }
    };

    fetchTeams();
  }, []);

  // Fetch participants when team is selected
  useEffect(() => {
    const fetchParticipants = async () => {
      if (!selectedTeamId) {
        setParticipants([]);
        setFormData(prev => ({ ...prev, participant_id: '' }));
        return;
      }

      try {
        const response = await fetch(`/api/participants?team_id=${selectedTeamId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch participants');
        }
        const data = await response.json();
        setParticipants(data || []);
      } catch (error) {
        // Error handling without console.log
      }
    };

    fetchParticipants();
  }, [selectedTeamId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const selectedParticipant = participants.find(p => p.id === formData.participant_id);
      const selectedTeam = teams.find(t => t.id === Number(formData.team_id));
      const selectedActivity = ACTIVITY_OPTIONS.find(a => a.value === formData.activity);

      if (!selectedParticipant || !selectedTeam || !selectedActivity) {
        throw new Error('Dados incompletos. Por favor, preencha todos os campos.');
      }

      const key_process = uuidv4();
      const dateTime = new Date(`${formData.date}T${formData.time}`);
      const base_score = Number(formData.score);
      const calculated_score = base_score * selectedActivity.multiplier;

      const response = await fetch('/api/activities', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          participant: selectedParticipant.name,
          team: selectedTeam.name,
          team_id: selectedTeam.id,
          participant_id: selectedParticipant.id,
          date: dateTime.toISOString(),
          category: selectedActivity.value,
          key_process,
          activity: {
            inputType: "MANUALY",
            description: formData.description || selectedActivity.label,
            dateTime: dateTime.toISOString(),
            category: selectedActivity.category
          },
          type: selectedParticipant.type,
          base_score,
          multiplier: selectedActivity.multiplier,
          calculated_score
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to add activity');
      }

      toast.success('Atividade adicionada com sucesso!');
      onAdd();
      onClose();
    } catch (error) {
      // Error handling without console.log
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'team_id') {
      setSelectedTeamId(value ? Number(value) : '');
      setFormData(prev => ({ ...prev, [name]: value, participant_id: '' }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Adicionar Atividade</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="team_id" className="block text-sm font-medium text-gray-700 mb-1">
                Time
              </label>
              <select
                id="team_id"
                name="team_id"
                value={formData.team_id}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Selecione um time</option>
                {teams.map(team => (
                  <option key={team.id} value={team.id}>
                    {team.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="participant_id" className="block text-sm font-medium text-gray-700 mb-1">
                Participante
              </label>
              <select
                id="participant_id"
                name="participant_id"
                value={formData.participant_id}
                onChange={handleChange}
                required
                disabled={!selectedTeamId}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
              >
                <option value="">Selecione um participante</option>
                {participants.map(participant => (
                  <option key={participant.id} value={participant.id}>
                    {participant.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="activity" className="block text-sm font-medium text-gray-700 mb-1">
                Atividade
              </label>
              <select
                id="activity"
                name="activity"
                value={formData.activity}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Selecione uma atividade</option>
                {ACTIVITY_OPTIONS.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Descrição
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Descreva a atividade realizada..."
              />
            </div>

            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                Data
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                Hora
              </label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="score" className="block text-sm font-medium text-gray-700 mb-1">
                Pontuação
              </label>
              <input
                type="number"
                id="score"
                name="score"
                value={formData.score}
                onChange={handleChange}
                required
                min="0"
                step="1"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Digite a pontuação"
              />
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              {loading ? 'Adicionando...' : 'Adicionar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 