'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Trash2, Eye, X } from "lucide-react";
import NotificationDialog from '@/components/NotificationDialog';
import { ConfirmDialog } from '@/components/ConfirmDialog';

interface ImageRecord {
  id: number;
  filename: string;
  key_process: string;
  activity_date: Date;
  name: string;
  team: string;
  type: string;
  hash: string;
  status: string | null;
}

interface Team {
  id: number;
  name: string;
}

export default function UploadStatus() {
  const [images, setImages] = useState<ImageRecord[]>([]);
  const [teams, setTeams] = useState<Team[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [isSceneTriggered, setIsSceneTriggered] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [notification, setNotification] = useState<{
    open: boolean;
    type: 'success' | 'error';
    title: string;
    message: string;
  }>({
    open: false,
    type: 'success',
    title: '',
    message: ''
  });
  const [deleteConfirmation, setDeleteConfirmation] = useState<{
    open: boolean;
    key_process: string | null;
  }>({
    open: false,
    key_process: null
  });
  const [selectedImage, setSelectedImage] = useState<ImageRecord | null>(null);
  const [filters, setFilters] = useState({
    status: '',
    team: '',
    participant: '',
  });
  const sceneTriggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await fetch('/api/teams');
        const data = await response.json();
        // Handle both paginated and non-paginated responses
        const teams = Array.isArray(data) ? data : data.teams;
        setTeams(teams || []);
      } catch (error) {
        console.error('Error fetching teams:', error);
        setTeams([]);
      }
    };

    fetchTeams();
  }, []);

  const fetchImages = useCallback(async (pageNum: number, isRefresh = false) => {
    try {
      const queryParams = new URLSearchParams();
      if (filters.status) queryParams.append('status', filters.status);
      if (filters.team) queryParams.append('team', filters.team);
      if (filters.participant) queryParams.append('participant', filters.participant.trim());
      queryParams.append('page', pageNum.toString());
      queryParams.append('limit', '10');

      console.log('Fetching with params:', queryParams.toString());

      const response = await fetch(`/api/upload-status?${queryParams.toString()}`);
      const data = await response.json();
      
      if (!data.success) {
        throw new Error(data.message || 'Error fetching images');
      }

      if (isRefresh) {
        setImages(data.data);
      } else {
        setImages(prev => {
          // Create a map of existing images by ID
          const existingMap = new Map(prev.map(image => [image.id, image]));
          
          // Update or add new images
          data.data.forEach((image: ImageRecord) => {
            if (image && image.id) {
              existingMap.set(image.id, image);
            }
          });
          
          // Convert map back to array and sort by date
          return Array.from(existingMap.values())
            .sort((a, b) => new Date(b.activity_date).getTime() - new Date(a.activity_date).getTime());
        });
      }

      // Set hasMore based on pagination data
      const hasMorePages = data.pagination && 
        data.pagination.page < data.pagination.totalPages;
      setHasMore(hasMorePages);
      
    } catch (error) {
      console.error('Error fetching images:', error);
      setNotification({
        open: true,
        type: 'error',
        title: 'Erro',
        message: error instanceof Error ? error.message : 'Erro ao buscar imagens'
      });
    } finally {
      setIsLoading(false);
      setIsLoadingMore(false);
    }
  }, [filters]);

  // Initial load
  useEffect(() => {
    fetchImages(1, true);
  }, [fetchImages]);

  // Intersection Observer for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !isLoadingMore && !isSceneTriggered && hasMore) {
          console.log('Scene triggered - loading more images');
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
      fetchImages(page);
    }
  }, [page, fetchImages, hasMore]);

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

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleStatusChange = (value: string) => {
    setFilters(prev => ({ ...prev, status: value === 'all' ? '' : value }));
  };

  const handleTeamChange = (value: string) => {
    setFilters(prev => ({ ...prev, team: value === 'all' ? '' : value }));
  };

  const handleSearch = () => {
    setPage(1);
    fetchImages(1, true);
  };

  const handleDelete = async (key_process: string) => {
    setDeleteConfirmation({
      open: true,
      key_process
    });
  };

  const confirmDelete = async () => {
    if (!deleteConfirmation.key_process) return;

    try {
      const response = await fetch(`/api/upload-status/delete?key_process=${deleteConfirmation.key_process}`, {
        method: 'DELETE',
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Erro ao excluir upload');
      }

      setNotification({
        open: true,
        type: 'success',
        title: 'Sucesso',
        message: 'Upload excluído com sucesso'
      });
      // Refresh the data
      setPage(1);
      fetchImages(1, true);
    } catch (error) {
      console.error('Error deleting upload:', error);
      setNotification({
        open: true,
        type: 'error',
        title: 'Erro',
        message: error instanceof Error ? error.message : 'Erro ao excluir upload'
      });
    } finally {
      setDeleteConfirmation({ open: false, key_process: null });
    }
  };

  return (
    <div className="container mx-auto py-6">
      <Card>
        <CardHeader>
          <CardTitle>Status de Upload</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div>
              <Select
                value={filters.status}
                onValueChange={(value) => handleStatusChange(value)}
              >
                <SelectTrigger className="bg-white">
                  <SelectValue placeholder="Filtrar por status" />
                </SelectTrigger>
                <SelectContent className="bg-white border border-gray-200">
                  <SelectItem value="all" className="hover:bg-gray-100">Todos</SelectItem>
                  <SelectItem value="PENDING" className="hover:bg-gray-100">Pendente</SelectItem>
                  <SelectItem value="PROCESSING" className="hover:bg-gray-100">Processando</SelectItem>
                  <SelectItem value="COMPLETED" className="hover:bg-gray-100">Concluído</SelectItem>
                  <SelectItem value="ERROR" className="hover:bg-gray-100">Erro</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Select
                value={filters.team}
                onValueChange={(value) => handleTeamChange(value)}
              >
                <SelectTrigger className="bg-white">
                  <SelectValue placeholder="Filtrar por equipe" />
                </SelectTrigger>
                <SelectContent className="bg-white border border-gray-200">
                  <SelectItem value="all" className="hover:bg-gray-100">Todas</SelectItem>
                  {teams && teams.length > 0 && teams
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((team) => (
                      <SelectItem key={team.id} value={team.name} className="hover:bg-gray-100">
                        {team.name}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Input
                placeholder="Filtrar por participante"
                value={filters.participant}
                onChange={(e) => handleFilterChange('participant', e.target.value)}
                className="bg-white"
              />
            </div>
            <div>
              <Button 
                onClick={handleSearch}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                Buscar
              </Button>
            </div>
          </div>

          <div className="relative">
            {isLoading ? (
            <div className="text-center">Carregando...</div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Data</TableHead>
                    <TableHead>Participante</TableHead>
                  <TableHead>Nome do Arquivo</TableHead>
                  <TableHead>Equipe</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Tipo</TableHead>
                    <TableHead>Detalhes</TableHead>
                    <TableHead>Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {images.map((image) => (
                  <TableRow key={image.id}>
                    <TableCell>
                      {format(new Date(image.activity_date), "dd/MM/yyyy HH:mm", { locale: ptBR })}
                    </TableCell>
                    <TableCell>{image.name}</TableCell>
                      <TableCell>{image.filename}</TableCell>
                    <TableCell>{image.team}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        image.status === 'COMPLETED' ? 'bg-green-100 text-green-800' :
                        image.status === 'PROCESSING' ? 'bg-yellow-100 text-yellow-800' :
                        image.status === 'ERROR' ? 'bg-red-100 text-red-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {image.status || 'Pendente'}
                      </span>
                    </TableCell>
                    <TableCell>{image.type}</TableCell>
                      <TableCell>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => setSelectedImage(image)}
                          className="h-8 w-8"
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="destructive"
                          size="icon"
                          onClick={() => handleDelete(image.key_process)}
                          className="h-8 w-8"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}

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

            {!isLoading && !hasMore && images.length > 0 && (
              <div className="text-gray-500 text-center mt-4">
                Não há mais imagens para carregar
              </div>
            )}

            {!isLoading && images.length === 0 && (
              <div className="text-gray-500 text-center mt-4">
                Nenhuma imagem encontrada
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <NotificationDialog
        open={notification.open}
        onClose={() => setNotification(prev => ({ ...prev, open: false }))}
        title={notification.title}
        message={notification.message}
        type={notification.type}
      />

      <ConfirmDialog
        open={deleteConfirmation.open}
        onOpenChange={(open: boolean) => setDeleteConfirmation(prev => ({ ...prev, open }))}
        title="Confirmar Exclusão"
        description="Tem certeza que deseja excluir este upload? Esta ação não pode ser desfeita."
        onConfirm={confirmDelete}
        confirmText="Sim, excluir"
        cancelText="Não, cancelar"
      />

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-3xl w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Detalhes da Imagem</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSelectedImage(null)}
                className="h-8 w-8"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="aspect-video relative mb-4">
              <img
                src={`/api/uploads/${encodeURIComponent(selectedImage.filename)}`}
                alt={selectedImage.name}
                className="object-contain w-full h-full"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-gray-500">Participante</p>
                <p className="mt-1">{selectedImage.name}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Equipe</p>
                <p className="mt-1">{selectedImage.team}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Data</p>
                <p className="mt-1">
                  {format(new Date(selectedImage.activity_date), "dd/MM/yyyy HH:mm", { locale: ptBR })}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Status</p>
                <p className="mt-1">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    selectedImage.status === 'COMPLETED' ? 'bg-green-100 text-green-800' :
                    selectedImage.status === 'PROCESSING' ? 'bg-yellow-100 text-yellow-800' :
                    selectedImage.status === 'ERROR' ? 'bg-red-100 text-red-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {selectedImage.status || 'Pendente'}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 