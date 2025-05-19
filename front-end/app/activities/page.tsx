'use client';

import { useState, useEffect, useRef } from 'react';
import { format } from 'date-fns';
import ActivityDetailsModal from './components/ActivityDetailsModal';
import UpdateScoresModal from './components/UpdateScoresModal';
import ConfirmDialog from '@/components/ConfirmDialog';
import { Activity } from '@/types/activities';
import { toast } from 'react-hot-toast';

const PAGE_SIZE = 20;

export default function ActivitiesPage() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({
    startDate: '',
    endDate: '',
    participant: '',
    team: '',
  });
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);
  const [activityToUpdateScores, setActivityToUpdateScores] = useState<Activity | null>(null);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [activityToDelete, setActivityToDelete] = useState<Activity | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);
  const lastActivityRef = useRef<HTMLTableRowElement | null>(null);

  const fetchActivities = async (pageNum: number, isNewSearch = false) => {
    try {
      setLoading(true);
      const queryParams = new URLSearchParams({
        page: pageNum.toString(),
        pageSize: PAGE_SIZE.toString(),
        ...(filters.startDate && { startDate: filters.startDate }),
        ...(filters.endDate && { endDate: filters.endDate }),
        ...(filters.participant && { participant: filters.participant }),
        ...(filters.team && { team: filters.team }),
      });

      const response = await fetch(`/api/activities/list?${queryParams}`);
      const data = await response.json();

      if (isNewSearch) {
        setActivities(data.activities);
      } else {
        setActivities(prev => [...prev, ...data.activities]);
      }
      setHasMore(data.activities.length === PAGE_SIZE);
    } catch (error) {
      console.error('Error fetching activities:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '20px',
      threshold: 0.1,
    };

    observer.current = new IntersectionObserver((entries) => {
      const target = entries[0];
      if (target.isIntersecting && hasMore && !loading) {
        setPage(prev => prev + 1);
      }
    }, options);

    if (lastActivityRef.current) {
      observer.current.observe(lastActivityRef.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [hasMore, loading]);

  useEffect(() => {
    if (page > 1) {
      fetchActivities(page, false);
    }
  }, [page]);

  const handleSearch = () => {
    setPage(1);
    fetchActivities(1, true);
  };

  const handleDeleteClick = (activity: Activity) => {
    setActivityToDelete(activity);
    setDeleteConfirmOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (!activityToDelete) return;

    try {
      const response = await fetch(`/api/activities/${activityToDelete.id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setActivities(prev => prev.filter(activity => activity.id !== activityToDelete.id));
        toast.success('Atividade excluída com sucesso');
      } else {
        const data = await response.json();
        throw new Error(data.error || 'Erro ao excluir atividade');
      }
    } catch (error: any) {
      console.error('Error deleting activity:', error);
      toast.error(error.message || 'Erro ao excluir atividade');
    } finally {
      setDeleteConfirmOpen(false);
      setActivityToDelete(null);
    }
  };

  const handleDeleteCancel = () => {
    setDeleteConfirmOpen(false);
    setActivityToDelete(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Filters */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="flex flex-col space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Data Início
            </label>
            <input
              type="date"
              className="w-full rounded-md border-gray-300 text-sm"
              value={filters.startDate}
              onChange={(e) => setFilters(prev => ({ ...prev, startDate: e.target.value }))}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Data Fim
            </label>
            <input
              type="date"
              className="w-full rounded-md border-gray-300 text-sm"
              value={filters.endDate}
              onChange={(e) => setFilters(prev => ({ ...prev, endDate: e.target.value }))}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Participante
            </label>
            <input
              type="text"
              className="w-full rounded-md border-gray-300 text-sm"
              value={filters.participant}
              onChange={(e) => setFilters(prev => ({ ...prev, participant: e.target.value }))}
              placeholder="Nome do participante"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Time
            </label>
            <input
              type="text"
              className="w-full rounded-md border-gray-300 text-sm"
              value={filters.team}
              onChange={(e) => setFilters(prev => ({ ...prev, team: e.target.value }))}
              placeholder="Nome do time"
            />
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Buscar
          </button>
        </div>
      </div>

      {/* Activities Grid */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data/Hora</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Participante</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Categoria</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score Base</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Multiplicador</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score Final</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Detalhes</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {activities.map((activity, index) => (
                <tr
                  key={activity.id}
                  ref={index === activities.length - 1 ? lastActivityRef : null}
                  className="hover:bg-gray-50"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {format(new Date(activity.date), 'dd/MM/yyyy HH:mm')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {activity.participant}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {activity.team}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {activity.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {activity.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {activity.base_score}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {activity.multiplier}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {activity.calculated_score}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setSelectedActivity(activity)}
                        className="text-blue-600 hover:text-blue-800"
                        title="View Details"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </button>
                      <button
                        onClick={() => setActivityToUpdateScores(activity)}
                        className="text-green-600 hover:text-green-800"
                        title="Update Scores"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                      <button
                        onClick={() => handleDeleteClick(activity)}
                        className="text-red-600 hover:text-red-800"
                        title="Delete"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {loading && (
        <div className="flex justify-center mt-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      )}

      {selectedActivity && (
        <ActivityDetailsModal
          activity={selectedActivity}
          onClose={() => setSelectedActivity(null)}
        />
      )}

      {activityToUpdateScores && (
        <UpdateScoresModal
          activity={activityToUpdateScores}
          onClose={() => setActivityToUpdateScores(null)}
          onUpdate={() => {
            // Refresh the activities list
            setPage(1);
            fetchActivities(1, true);
          }}
        />
      )}

      <ConfirmDialog
        isOpen={deleteConfirmOpen}
        title="Confirmar Exclusão"
        message={`Tem certeza que deseja excluir esta atividade de ${activityToDelete?.participant}?`}
        onConfirm={handleDeleteConfirm}
        onCancel={handleDeleteCancel}
        confirmLabel="Excluir"
        cancelLabel="Cancelar"
      />
    </div>
  );
} 