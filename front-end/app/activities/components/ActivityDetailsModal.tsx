'use client';

import { Activity } from '@/types/activities';

interface ActivityDetailsModalProps {
  activity: Activity;
  onClose: () => void;
}

export default function ActivityDetailsModal({ activity, onClose }: ActivityDetailsModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Detalhes da Atividade</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="font-medium text-gray-700">Dados Básicos</h3>
            <div className="grid grid-cols-2 gap-4 mt-2">
              <div>
                <p className="text-sm text-gray-500">Participante</p>
                <p className="text-gray-900">{activity.participant}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Time</p>
                <p className="text-gray-900">{activity.team}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Tipo</p>
                <p className="text-gray-900">{activity.type}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Categoria</p>
                <p className="text-gray-900">{activity.category}</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-gray-700">Pontuação</h3>
            <div className="grid grid-cols-3 gap-4 mt-2">
              <div>
                <p className="text-sm text-gray-500">Score Base</p>
                <p className="text-gray-900">{activity.base_score}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Multiplicador</p>
                <p className="text-gray-900">{activity.multiplier}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Score Final</p>
                <p className="text-gray-900">{activity.calculated_score}</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-gray-700">Detalhes da Atividade</h3>
            <pre className="mt-2 bg-gray-50 p-4 rounded-lg overflow-auto max-h-60">
              <code>{JSON.stringify(activity.activity, null, 2)}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
} 