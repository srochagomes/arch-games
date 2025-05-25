'use client';

import { useState } from 'react';
import { Activity } from '@/types/activities';
import { toast } from 'react-hot-toast';

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

interface UpdateScoresModalProps {
  activity: Activity;
  onClose: () => void;
  onUpdate: () => void;
}

export default function UpdateScoresModal({ activity, onClose, onUpdate }: UpdateScoresModalProps) {
  const [scores, setScores] = useState({
    base_score: activity.base_score,
    multiplier: activity.multiplier,
    change_reason: '',
    category: activity.category,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!scores.change_reason.trim()) {
      toast.error('Por favor, informe o motivo da alteração');
      return;
    }

    try {
      const response = await fetch(`/api/activities/${activity.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          base_score: scores.base_score,
          multiplier: scores.multiplier,
          calculated_score: scores.base_score * scores.multiplier,
          change_reason: scores.change_reason,
          category: scores.category,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update scores');
      }

      toast.success('Scores updated successfully');
      onUpdate();
      onClose();
    } catch (error) {
      console.error('Error updating scores:', error);
      toast.error('Failed to update scores');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Update Scores</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              value={scores.category}
              onChange={(e) => setScores(prev => ({ ...prev, category: e.target.value }))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            >
              {ACTIVITY_OPTIONS.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Base Score
            </label>
            <input
              type="number"
              value={scores.base_score}
              onChange={(e) => setScores(prev => ({ ...prev, base_score: parseFloat(e.target.value) }))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              min="0"
              step="0.1"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Multiplier
            </label>
            <input
              type="number"
              value={scores.multiplier}
              onChange={(e) => setScores(prev => ({ ...prev, multiplier: parseFloat(e.target.value) }))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              min="0"
              step="0.1"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Calculated Score
            </label>
            <div className="mt-1 py-2 px-3 bg-gray-100 rounded-md">
              {(scores.base_score * scores.multiplier).toFixed(2)}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Motivo da Alteração
            </label>
            <textarea
              value={scores.change_reason}
              onChange={(e) => setScores(prev => ({ ...prev, change_reason: e.target.value }))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              rows={3}
              required
              placeholder="Descreva o motivo da alteração dos scores"
            />
          </div>

          <div className="flex justify-end space-x-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 