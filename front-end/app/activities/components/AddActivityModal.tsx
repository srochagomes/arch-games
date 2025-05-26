import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { format, parse } from 'date-fns';
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

interface ParticipantFormData {
  participant_id: string;
  team_id: string;
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
  const [allParticipants, setAllParticipants] = useState<Participant[]>([]);
  const [participantForms, setParticipantForms] = useState<ParticipantFormData[]>([
    { participant_id: '', team_id: '' }
  ]);
  const [formData, setFormData] = useState({
    activity: '',
    description: '',
    date: format(new Date(), 'dd/MM/yyyy'),
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
        setTeams(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Error fetching teams:', error);
        setTeams([]);
      }
    };

    fetchTeams();
  }, []);

  // Fetch all participants on component mount
  useEffect(() => {
    const fetchAllParticipants = async () => {
      try {
        const response = await fetch('/api/participants');
        if (!response.ok) {
          throw new Error('Failed to fetch participants');
        }
        const data = await response.json();
        setAllParticipants(data || []);
      } catch (error) {
        setAllParticipants([]);
      }
    };

    fetchAllParticipants();
  }, []);

  const handleAddParticipant = () => {
    setParticipantForms(prev => [...prev, { participant_id: '', team_id: '' }]);
  };

  const handleRemoveParticipant = (index: number) => {
    setParticipantForms(prev => prev.filter((_, i) => i !== index));
  };

  const handleParticipantChange = (index: number, field: keyof ParticipantFormData, value: string) => {
    setParticipantForms(prev => {
      const newForms = [...prev];
      newForms[index] = { ...newForms[index], [field]: value };
      if (field === 'team_id') {
        newForms[index].participant_id = '';
      }
      return newForms;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const selectedActivity = ACTIVITY_OPTIONS.find(a => a.value === formData.activity);
      if (!selectedActivity) {
        throw new Error('Atividade inválida');
      }

      const key_process = uuidv4();
      const parsedDate = parse(formData.date, 'dd/MM/yyyy', new Date());
      const dateTime = new Date(`${format(parsedDate, 'yyyy-MM-dd')}T${formData.time}`);
      // Format the date to ensure it's saved in the correct timezone
      const formattedDateTime = format(dateTime, "yyyy-MM-dd'T'HH:mm:ss");
      const base_score = Number(formData.score);
      const calculated_score = base_score * selectedActivity.multiplier;

      // Create activity records for each participant
      const activityPromises = participantForms.map(async (participantForm) => {
        const selectedParticipant = allParticipants.find(p => p.id === participantForm.participant_id);
        const selectedTeam = teams.find(t => t.id === Number(participantForm.team_id));

        if (!selectedParticipant || !selectedTeam) {
          throw new Error('Dados incompletos. Por favor, preencha todos os campos.');
        }

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
          date: formattedDateTime,
          category: selectedActivity.value,
          key_process,
          activity: {
            inputType: "MANUALY",
            description: formData.description || selectedActivity.label,
            dateTime: formattedDateTime,
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

        return response.json();
      });

      await Promise.all(activityPromises);
      toast.success('Atividades adicionadas com sucesso!');
      onAdd();
      onClose();
    } catch (error: any) {
      toast.error(error.message || 'Erro ao adicionar atividades');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'date') {
      // Convert from yyyy-MM-dd (HTML date input) to dd/MM/yyyy
      const date = new Date(value);
      const formattedDate = format(date, 'dd/MM/yyyy');
      setFormData(prev => ({ ...prev, [name]: formattedDate }));
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
          {/* Participants Section */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-900">Participantes</h3>
              <button
                type="button"
                onClick={handleAddParticipant}
                className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Adicionar Participante
              </button>
            </div>

            {participantForms.map((form, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 border rounded-lg relative">
                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveParticipant(index)}
                    className="absolute top-2 right-2 text-red-600 hover:text-red-800"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
            <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                Time
              </label>
              <select
                    value={form.team_id}
                    onChange={(e) => handleParticipantChange(index, 'team_id', e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Selecione um time</option>
                {teams
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map(team => (
                    <option key={team.id} value={team.id}>
                      {team.name}
                    </option>
                  ))}
              </select>
            </div>
            <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                Participante
              </label>
              <select
                    value={form.participant_id}
                    onChange={(e) => handleParticipantChange(index, 'participant_id', e.target.value)}
                required
                    disabled={!form.team_id}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
              >
                <option value="">Selecione um participante</option>
                    {allParticipants
                      .filter(p => p.team_id === Number(form.team_id))
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map(participant => (
                    <option key={participant.id} value={participant.id}>
                      {participant.name}
                    </option>
                  ))}
              </select>
                </div>
              </div>
            ))}
            </div>

          {/* Activity Details Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                value={format(parse(formData.date, 'dd/MM/yyyy', new Date()), 'yyyy-MM-dd')}
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