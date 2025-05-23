import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { Activity } from '@/types/activities';

interface ScoreChange {
  id: string;
  old_base_score: number;
  old_multiplier: number;
  new_base_score: number;
  new_multiplier: number;
  change_reason: string;
  changed_at: string;
}

interface ScoreHistoryModalProps {
  activity: Activity;
  onClose: () => void;
}

export default function ScoreHistoryModal({ activity, onClose }: ScoreHistoryModalProps) {
  const [scoreChanges, setScoreChanges] = useState<ScoreChange[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchScoreHistory = async () => {
      try {
        const response = await fetch(`/api/activities/${activity.id}/score-history`);
        if (!response.ok) throw new Error('Failed to fetch score history');
        const data = await response.json();
        setScoreChanges(data.scoreChanges);
      } catch (error) {
        console.error('Error fetching score history:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchScoreHistory();
  }, [activity.id]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Score Change History</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {loading ? (
          <div className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        ) : scoreChanges.length > 0 ? (
          <div className="space-y-4">
            {scoreChanges.map((change) => (
              <div key={change.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="text-sm text-gray-500">
                      {format(new Date(change.changed_at), 'dd/MM/yyyy HH:mm')}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-2">
                  <div>
                    <p className="text-sm font-medium text-gray-700">Old Score</p>
                    <p className="text-sm text-gray-600">
                      Base: {change.old_base_score} × {change.old_multiplier} = {(change.old_base_score * change.old_multiplier).toFixed(2)}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">New Score</p>
                    <p className="text-sm text-gray-600">
                      Base: {change.new_base_score} × {change.new_multiplier} = {(change.new_base_score * change.new_multiplier).toFixed(2)}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Reason for Change</p>
                  <p className="text-sm text-gray-600">{change.change_reason}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 py-8">No score changes recorded</p>
        )}
      </div>
    </div>
  );
} 