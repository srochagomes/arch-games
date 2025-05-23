'use client';

import { useState, useEffect, useRef } from 'react';
import { format } from 'date-fns';
import ActivityDetailsModal from './components/ActivityDetailsModal';
import UpdateScoresModal from './components/UpdateScoresModal';
import AddActivityModal from './components/AddActivityModal';
import ConfirmDialog from '@/components/ConfirmDialog';
import { Activity } from '@/types/activities';
import { toast } from 'react-hot-toast';
import ScoreHistoryModal from './components/ScoreHistoryModal';
import ResponsiveTable from './components/ResponsiveTable';

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
  const [addModalOpen, setAddModalOpen] = useState(false);
  const observer = useRef<IntersectionObserver | null>(null);
  const lastActivityRef = useRef<HTMLTableRowElement>(null);
  const [activityWithHistory, setActivityWithHistory] = useState<Activity | null>(null);

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
      {/* Add Activity Button */}
      <div className="mb-8">
        <button
          onClick={() => setAddModalOpen(true)}
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
        >
          Adicionar Atividade
        </button>
      </div>

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
      <ResponsiveTable
        activities={activities}
        onViewHistory={setActivityWithHistory}
        onViewDetails={setSelectedActivity}
        onUpdateScores={setActivityToUpdateScores}
        onDelete={handleDeleteClick}
        lastActivityRef={lastActivityRef}
      />

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
            setPage(1);
            fetchActivities(1, true);
          }}
        />
      )}

      {addModalOpen && (
        <AddActivityModal
          onClose={() => setAddModalOpen(false)}
          onAdd={() => {
            setPage(1);
            fetchActivities(1, true);
          }}
        />
      )}

      <ConfirmDialog
        open={deleteConfirmOpen}
        onOpenChange={setDeleteConfirmOpen}
        title="Confirmar Exclusão"
        description={`Tem certeza que deseja excluir esta atividade de ${activityToDelete?.participant}?`}
        onConfirm={handleDeleteConfirm}
        confirmText="Confirmar"
        cancelText="Cancelar"
      />

      {activityWithHistory && (
        <ScoreHistoryModal
          activity={activityWithHistory}
          onClose={() => setActivityWithHistory(null)}
        />
      )}
    </div>
  );
} 