'use client';

import { useState, useEffect } from 'react';
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
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    status: '',
    team: '',
    participant: '',
  });

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await fetch('/api/teams');
        const data = await response.json();
        if (data.success) {
          setTeams(data.teams);
        }
      } catch (error) {
        console.error('Error fetching teams:', error);
      }
    };

    fetchTeams();
  }, []);

  useEffect(() => {
    fetchImages();
  }, [filters]);

  const fetchImages = async () => {
    try {
      const queryParams = new URLSearchParams();
      if (filters.status) queryParams.append('status', filters.status);
      if (filters.team) queryParams.append('team', filters.team);
      if (filters.participant) queryParams.append('participant', filters.participant);

      const response = await fetch(`/api/upload-status?${queryParams.toString()}`);
      const data = await response.json();
      setImages(data.images);
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleStatusChange = (value: string) => {
    setFilters(prev => ({ ...prev, status: value === 'all' ? '' : value }));
  };

  const handleTeamChange = (value: string) => {
    setFilters(prev => ({ ...prev, team: value === 'all' ? '' : value }));
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
                  {teams
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
                onClick={fetchImages}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                Buscar
              </Button>
            </div>
          </div>

          {loading ? (
            <div className="text-center">Carregando...</div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Data</TableHead>
                  <TableHead>Nome do Arquivo</TableHead>
                  <TableHead>Equipe</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Tipo</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {images.map((image) => (
                  <TableRow key={image.id}>
                    <TableCell>
                      {format(new Date(image.activity_date), "dd/MM/yyyy HH:mm", { locale: ptBR })}
                    </TableCell>
                    <TableCell>{image.name}</TableCell>
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
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
} 