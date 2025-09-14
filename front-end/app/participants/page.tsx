'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import ConfirmDialog from '@/components/ConfirmDialog';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';

interface Team {
  id: number;
  name: string;
}

interface Participant {
  id: string;
  name: string;
  email: string;
  type: string;
  team_id: number;
  team: Team;
  created_at: string;
  updated_at: string;
}

export default function ParticipantsPage() {
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [teams, setTeams] = useState<Team[]>([]);
  const [loading, setLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [type, setType] = useState('participant');
  const [teamId, setTeamId] = useState('');
  const [editingParticipant, setEditingParticipant] = useState<Participant | null>(null);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [participantToDelete, setParticipantToDelete] = useState<Participant | null>(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const sceneTriggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchParticipants(1, true);
    fetchTeams();
  }, []);

  const fetchParticipants = async (pageNum: number, isRefresh = false, searchQuery = '') => {
    try {
      const searchParam = searchQuery ? `&search=${encodeURIComponent(searchQuery)}` : '';
      const response = await fetch(`/api/participants?page=${pageNum}&limit=10${searchParam}`);
      if (!response.ok) throw new Error('Failed to fetch participants');
      const data = await response.json();
      
      if (isRefresh) {
        setParticipants(data.data);
      } else {
        setParticipants(prev => {
          // Simply append new participants without re-sorting to maintain order
          const newParticipants = data.data.filter((participant: Participant) => 
            !prev.some(p => p.id === participant.id)
          );
          return [...prev, ...newParticipants];
        });
      }

      // Set hasMore based on pagination data
      const hasMorePages = data.pagination && 
        data.pagination.page < data.pagination.totalPages;
      setHasMore(hasMorePages);
      
    } catch (error) {
      toast.error('Error loading participants');
      console.error('Error:', error);
    } finally {
      setLoading(false);
      setIsLoadingMore(false);
      setIsSearching(false);
    }
  };

  // Intersection Observer for infinite scroll (disabled during search)
  useEffect(() => {
    // Don't enable infinite scroll when searching
    if (searchTerm) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !isLoadingMore && hasMore) {
          console.log('Scene triggered - loading more participants');
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
  }, [isLoadingMore, hasMore, searchTerm]);

  // Load more when page changes
  useEffect(() => {
    if (page > 1 && hasMore) {
      fetchParticipants(page, false, searchTerm);
    }
  }, [page, hasMore, searchTerm]);

  // Search functionality with debouncing
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchTerm !== '') {
        setIsSearching(true);
        setPage(1);
        setHasMore(true);
        fetchParticipants(1, true, searchTerm);
      } else {
        // Reset to show all participants when search is cleared
        setPage(1);
        setHasMore(true);
        fetchParticipants(1, true);
      }
    }, 300); // 300ms debounce

    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  // Add a maximum page limit
  useEffect(() => {
    if (page > 100) { // Set a reasonable maximum page limit
      setHasMore(false);
      console.log('Reached maximum page limit');
    }
  }, [page]);

  const fetchTeams = async () => {
    try {
      const response = await fetch('/api/teams');
      if (!response.ok) {
        throw new Error('Failed to fetch teams');
      }
      const data = await response.json();
      // Handle both direct array response and paginated response
      const teamsData = Array.isArray(data) ? data : (data.teams || []);
      setTeams(teamsData);
      if (teamsData.length > 0 && !teamId) {
        setTeamId(teamsData[0].id.toString());
      }
    } catch (error) {
      console.error('Error fetching teams:', error);
      setTeams([]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !type || !teamId) {
      toast.error('Please fill in all required fields');
      return;
    }

    setLoading(true);
    try {
      const url = editingParticipant
        ? `/api/participants/${editingParticipant.id}`
        : '/api/participants';
      
      const response = await fetch(url, {
        method: editingParticipant ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email: email || null,
          type,
          team_id: parseInt(teamId),
        }),
      });

      if (!response.ok) throw new Error('Failed to save participant');
      
      toast.success(
        editingParticipant
          ? 'Participant updated successfully'
          : 'Participant created successfully'
      );
      
      fetchParticipants(1, true);
      handleCancel();
    } catch (error) {
      toast.error('Error saving participant');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (participant: Participant) => {
    setEditingParticipant(participant);
    setName(participant.name);
    setEmail(participant.email);
    setType(participant.type);
    setTeamId(participant.team_id.toString());
  };

  const handleDelete = (participant: Participant) => {
    setParticipantToDelete(participant);
    setShowDeleteDialog(true);
  };

  const confirmDelete = async () => {
    if (!participantToDelete) return;
    
    try {
      const response = await fetch(`/api/participants/${participantToDelete.id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        
        if (response.status === 409 || errorData?.code === 'P2003') {
          toast.error('Não é possível excluir este participante pois existem registros associados a ele.');
          return;
        }
        
        throw new Error('Failed to delete participant');
      }
      
      toast.success('Participant deleted successfully');
      fetchParticipants(1, true);
    } catch (error) {
      console.error('Error:', error);
      toast.error('Erro ao excluir participante. Tente novamente mais tarde.');
    } finally {
      setShowDeleteDialog(false);
      setParticipantToDelete(null);
    }
  };

  const handleCancel = () => {
    setEditingParticipant(null);
    setName('');
    setEmail('');
    setType('participant');
    setTeamId(teams.length > 0 ? teams[0].id.toString() : '');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Toaster />
      
      {/* Form */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">
          {editingParticipant ? 'Editar Participante' : 'Novo Participante'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nome
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-md border-gray-300"
                placeholder="Nome do participante"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md border-gray-300"
                placeholder="Email do participante (opcional)"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tipo
              </label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full rounded-md border-gray-300"
                required
              >
                <option value="participant">Participante</option>
                <option value="captain">Capitão</option>
                <option value="governance">Governança</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Time
              </label>
              <select
                value={teamId}
                onChange={(e) => setTeamId(e.target.value)}
                className="w-full rounded-md border-gray-300"
                required
              >
                <option value="">Selecione um time</option>
                {teams.map((team) => (
                  <option key={team.id} value={team.id}>
                    {team.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex justify-end space-x-2">
            {editingParticipant && (
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
              {loading ? 'Salvando...' : editingParticipant ? 'Atualizar' : 'Criar'}
            </button>
          </div>
        </form>
      </div>

      {/* Search Field */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Buscar Participantes</h2>
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-md border-gray-300 pl-10 pr-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Digite o nome do participante..."
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {isSearching ? (
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
            ) : (
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            )}
          </div>
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
        {searchTerm && (
          <p className="text-sm text-gray-500 mt-2">
            Buscando por: <span className="font-medium">"{searchTerm}"</span>
          </p>
        )}
      </div>

      {/* Participants List */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nome
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tipo
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Time
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Ações
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {participants.map((participant) => (
              <tr key={participant.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {participant.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {participant.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {participant.type}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {participant.team.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => handleEdit(participant)}
                    className="text-indigo-600 hover:text-indigo-900 mr-4 p-2 hover:bg-indigo-50 rounded-full transition-colors"
                    title="Editar participante"
                  >
                    <FiEdit2 className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleDelete(participant)}
                    className="text-red-600 hover:text-red-900 p-2 hover:bg-red-50 rounded-full transition-colors"
                    title="Excluir participante"
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

        {isSearching && (
          <div className="flex justify-center py-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <span className="ml-2 text-gray-600">Buscando...</span>
          </div>
        )}

        {!loading && !isSearching && !hasMore && participants.length > 0 && !searchTerm && (
          <div className="text-gray-500 text-center py-4">
            Não há mais participantes para carregar
          </div>
        )}

        {!loading && !isSearching && participants.length === 0 && searchTerm && (
          <div className="text-gray-500 text-center py-4">
            Nenhum participante encontrado para "{searchTerm}"
          </div>
        )}

        {!loading && !isSearching && participants.length === 0 && !searchTerm && (
          <div className="text-gray-500 text-center py-4">
            Nenhum participante encontrado
          </div>
        )}
      </div>

      {/* Delete Confirmation Dialog */}
      <ConfirmDialog
        open={showDeleteDialog}
        onOpenChange={setShowDeleteDialog}
        title="Confirmar Exclusão"
        description="Tem certeza que deseja excluir este participante? Esta ação não pode ser desfeita."
        confirmText="Excluir"
        cancelText="Cancelar"
        onConfirm={confirmDelete}
      />
    </div>
  );
} 