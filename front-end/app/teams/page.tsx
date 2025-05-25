'use client';

import { useState, useEffect, useRef } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import ConfirmDialog from '@/components/ConfirmDialog';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';

interface Team {
  id: number;
  name: string;
}

export default function TeamsPage() {
  const [teams, setTeams] = useState<Team[]>([]);
  const [loading, setLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [name, setName] = useState('');
  const [editingTeam, setEditingTeam] = useState<Team | null>(null);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [teamToDelete, setTeamToDelete] = useState<Team | null>(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isSceneTriggered, setIsSceneTriggered] = useState(false);
  const sceneTriggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchTeams(1, true);
  }, []);

  const fetchTeams = async (pageNum: number, isRefresh = false) => {
    try {
      const response = await fetch(`/api/teams?page=${pageNum}&limit=10`);
      if (!response.ok) throw new Error('Failed to fetch teams');
      const data = await response.json();
      
      if (isRefresh) {
        setTeams(data.teams);
      } else {
        setTeams(prev => {
          // Create a map of existing teams by ID
          const existingMap = new Map(prev.map(t => [t.id, t]));
          
          // Update or add new teams
          data.teams.forEach((team: Team) => {
            if (team && team.id) {
              existingMap.set(team.id, team);
            }
          });
          
          // Convert map back to array and sort by name
          return Array.from(existingMap.values())
            .sort((a, b) => a.name.localeCompare(b.name));
        });
      }

      // Set hasMore based on pagination data
      const hasMorePages = data.pagination && 
        data.pagination.page < data.pagination.totalPages;
      setHasMore(hasMorePages);
      
    } catch (error) {
      toast.error('Error loading teams');
      console.error('Error:', error);
    } finally {
      setLoading(false);
      setIsLoadingMore(false);
    }
  };

  // Intersection Observer for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !isLoadingMore && !isSceneTriggered && hasMore) {
          console.log('Scene triggered - loading more teams');
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
      fetchTeams(page);
    }
  }, [page, hasMore]);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);
      const url = editingTeam 
        ? `/api/teams/${editingTeam.id}`
        : '/api/teams';
      
      const response = await fetch(url, {
        method: editingTeam ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error);
      }

      toast.success(editingTeam ? 'Time atualizado com sucesso!' : 'Time criado com sucesso!');
      setName('');
      setEditingTeam(null);
      fetchTeams(1, true);
    } catch (error: any) {
      toast.error(error.message || 'Erro ao salvar time');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (team: Team) => {
    setEditingTeam(team);
    setName(team.name);
  };

  const handleDelete = (team: Team) => {
    setTeamToDelete(team);
    setShowDeleteDialog(true);
  };

  const confirmDelete = async () => {
    if (!teamToDelete) return;

    try {
      setLoading(true);
      const response = await fetch(`/api/teams/${teamToDelete.id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error);
      }

      toast.success('Time excluído com sucesso!');
      fetchTeams(1, true);
    } catch (error: any) {
      toast.error(error.message || 'Erro ao excluir time');
    } finally {
      setLoading(false);
      setShowDeleteDialog(false);
      setTeamToDelete(null);
    }
  };

  const handleCancel = () => {
    setEditingTeam(null);
    setName('');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Toaster />
      
      {/* Form */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">
          {editingTeam ? 'Editar Time' : 'Novo Time'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nome
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-md border-gray-300"
              placeholder="Nome do time"
              required
            />
          </div>
          <div className="flex justify-end space-x-2">
            {editingTeam && (
              <button
                type="button"
                onClick={handleCancel}
                className="px-4 py-2 text-gray-700 hover:text-gray-900"
                disabled={loading}
              >
                Cancelar
              </button>
            )}
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"
              disabled={loading}
            >
              {loading ? 'Salvando...' : editingTeam ? 'Atualizar' : 'Criar'}
            </button>
          </div>
        </form>
      </div>

      {/* Teams List */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nome
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Ações
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {teams.map((team) => (
              <tr key={team.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {team.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => handleEdit(team)}
                    className="text-indigo-600 hover:text-indigo-900 mr-4 p-2 hover:bg-indigo-50 rounded-full transition-colors"
                    title="Editar time"
                  >
                    <FiEdit2 className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleDelete(team)}
                    className="text-red-600 hover:text-red-900 p-2 hover:bg-red-50 rounded-full transition-colors"
                    title="Excluir time"
                  >
                    <FiTrash2 className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Scene Trigger Element */}
        <div 
          ref={sceneTriggerRef}
          className="h-20 w-full"
          style={{ position: 'relative' }}
        />

        {isLoadingMore && (
          <div className="flex justify-center py-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        )}

        {!loading && !hasMore && teams.length > 0 && (
          <div className="text-gray-500 text-center py-4">
            Não há mais times para carregar
          </div>
        )}

        {!loading && teams.length === 0 && (
          <div className="text-gray-500 text-center py-4">
            Nenhum time encontrado
          </div>
        )}
      </div>

      {/* Delete Confirmation Dialog */}
      <ConfirmDialog
        open={showDeleteDialog}
        onOpenChange={setShowDeleteDialog}
        title="Confirmar Exclusão"
        description="Tem certeza que deseja excluir este time? Esta ação não pode ser desfeita."
        confirmText="Excluir"
        cancelText="Cancelar"
        onConfirm={confirmDelete}
      />
    </div>
  );
} 