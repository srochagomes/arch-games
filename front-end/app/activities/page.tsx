'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { format, parse } from 'date-fns';
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
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [isSceneTriggered, setIsSceneTriggered] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);
  const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());
  const sceneTriggerRef = useRef<HTMLDivElement>(null);
  const [totalPages, setTotalPages] = useState(1);
  const [filters, setFilters] = useState({
    startDate: '',
    endDate: '',
    participant: '',
    team: '',
  });
  const [activityToUpdateScores, setActivityToUpdateScores] = useState<Activity | null>(null);
  const [activityToDelete, setActivityToDelete] = useState<Activity | null>(null);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [activityWithHistory, setActivityWithHistory] = useState<Activity | null>(null);

  const fetchActivities = useCallback(async (pageNum: number, isRefresh = false) => {
    try {
      const response = await fetch(`/api/activities?page=${pageNum}&limit=10`);
      if (!response.ok) {
        throw new Error('Failed to fetch activities');
      }
      const responseData = await response.json();
      
      // Log the response for debugging
      console.log('API Response:', responseData);
      
      // Check if response has the expected structure
      if (!responseData || !responseData.data || !Array.isArray(responseData.data)) {
        throw new Error('Invalid response format from server');
      }

      const activities = responseData.data;
      
      if (isRefresh) {
        setActivities(activities);
      } else {
        setActivities(prev => {
          // Create a map of existing activities by ID
          const existingMap = new Map(prev.map(activity => [activity.id, activity]));
          
          // Update or add new activities
          activities.forEach((activity: Activity) => {
            if (activity && activity.id) {
              existingMap.set(activity.id, activity);
            }
          });
          
          // Convert map back to array and sort by date
          return Array.from(existingMap.values())
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        });
      }
      
      // Set hasMore based on pagination data
      const hasMorePages = responseData.pagination && 
        responseData.pagination.page < responseData.pagination.totalPages;
      setHasMore(hasMorePages);
      
      setError(null);
      setLastUpdate(new Date());
    } catch (err) {
      console.error('Error fetching activities:', err);
      setError(err instanceof Error ? err.message : 'An error occurred');
      setActivities([]); // Reset activities on error
      setHasMore(false); // Stop infinite scroll on error
    } finally {
      setIsLoading(false);
      setIsLoadingMore(false);
      setIsRefreshing(false);
    }
  }, []);

  // Initial load
  useEffect(() => {
    fetchActivities(1, true);
  }, [fetchActivities]);

  // Intersection Observer for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !isLoadingMore && !isSceneTriggered && hasMore) {
          console.log('Scene triggered - loading more activities');
          setIsSceneTriggered(true);
          setIsLoadingMore(true);
          setPage(prev => prev + 1);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '100px' // Add some margin to trigger earlier
      }
    );

    const currentTrigger = sceneTriggerRef.current;
    if (currentTrigger) {
      observer.observe(currentTrigger);
    }

    return () => {
      if (currentTrigger) {
        observer.unobserve(currentTrigger);
      }
    };
  }, [isLoadingMore, isSceneTriggered, hasMore]);

  // Load more when page changes
  useEffect(() => {
    if (page > 1 && hasMore) {
      fetchActivities(page);
    }
  }, [page, fetchActivities, hasMore]);

  // Reset scene trigger after loading
  useEffect(() => {
    if (!isLoadingMore) {
      setIsSceneTriggered(false);
    }
  }, [isLoadingMore]);

  // Add a maximum page limit
  useEffect(() => {
    if (page > 100) { // Set a reasonable maximum page limit
      setHasMore(false);
      console.log('Reached maximum page limit');
    }
  }, [page]);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    setPage(1);
    await fetchActivities(1, true);
  }, [fetchActivities]);

  const handleCreateActivity = useCallback(async (newActivity: Activity) => {
    try {
      const response = await fetch('/api/activities', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newActivity),
      });

      if (!response.ok) {
        throw new Error('Failed to create activity');
      }

      const createdActivity = await response.json();
      setActivities(prev => [createdActivity, ...prev]);
      setIsModalOpen(false);
      toast.success('Activity created successfully!');
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Failed to create activity');
    }
  }, []);

  const handleUpdateActivity = useCallback(async (updatedActivity: Activity) => {
    try {
      const response = await fetch(`/api/activities/${updatedActivity.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedActivity),
      });

      if (!response.ok) {
        throw new Error('Failed to update activity');
      }

      const updated = await response.json();
      setActivities(prev => 
        prev.map(activity => 
          activity.id === updated.id ? updated : activity
        )
      );
      setIsUpdateModalOpen(false);
      setSelectedActivity(null);
      toast.success('Activity updated successfully!');
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Failed to update activity');
    }
  }, []);

  const handleDeleteActivity = useCallback(async (activity: Activity) => {
    try {
      const response = await fetch(`/api/activities/${activity.id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete activity');
      }

      setActivities(prev => prev.filter(a => a.id !== activity.id));
      setIsDeleteModalOpen(false);
      setSelectedActivity(null);
      toast.success('Activity deleted successfully!');
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Failed to delete activity');
    }
  }, []);

  const handleSearch = () => {
    setPage(1);
    setError(null);
    fetchActivities(1, true);
  };

  const handleDeleteClick = (activity: Activity) => {
    setActivityToDelete(activity);
    setIsDeleteModalOpen(true);
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
      setIsDeleteModalOpen(false);
      setActivityToDelete(null);
    }
  };

  const handleDeleteCancel = () => {
    setIsDeleteModalOpen(false);
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
              type="text"
              className="w-full rounded-md border-gray-300 text-sm"
              value={filters.startDate}
              onChange={(e) => setFilters(prev => ({ ...prev, startDate: e.target.value }))}
              placeholder="dd/mm/yyyy"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Data Fim
            </label>
            <input
              type="text"
              className="w-full rounded-md border-gray-300 text-sm"
              value={filters.endDate}
              onChange={(e) => setFilters(prev => ({ ...prev, endDate: e.target.value }))}
              placeholder="dd/mm/yyyy"
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
      <div className="relative">
        <ResponsiveTable
          activities={activities}
          onViewHistory={setActivityWithHistory}
          onViewDetails={setSelectedActivity}
          onUpdateScores={setActivityToUpdateScores}
          onDelete={handleDeleteClick}
          lastActivityRef={sceneTriggerRef}
        />

        {/* Scene Trigger Element */}
        <div 
          ref={sceneTriggerRef}
          className="h-20 w-full"
          style={{ position: 'absolute', bottom: 0 }}
        />

        {isLoadingMore && (
          <div className="flex justify-center mt-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        )}

        {error && (
          <div className="text-red-600 text-center mt-4">
            {error}
          </div>
        )}

        {!isLoading && !error && activities.length === 0 && (
          <div className="text-gray-500 text-center mt-4">
            Nenhuma atividade encontrada
          </div>
        )}

        {!isLoading && !error && !hasMore && activities.length > 0 && (
          <div className="text-gray-500 text-center mt-4">
            Não há mais atividades para carregar
          </div>
        )}
      </div>

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
        open={isDeleteModalOpen}
        onOpenChange={setIsDeleteModalOpen}
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