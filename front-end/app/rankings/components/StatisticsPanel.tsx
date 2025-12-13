'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Statistics {
  totalActivities: number;
  totalEvidences: number;
  activeParticipants: number;
  totalParticipants: number;
  presenceEvents: number;
  certificatesReceived: number;
  totalHours: number;
  totalScore: number;
  averageScorePerParticipant: number;
  totalTeams: number;
  activeTeams: number;
  booksRead: number;
  bloodDonations: number;
  physicalActivities: number;
  duolingoActivities: number;
  activitiesByCategory: Array<{
    category: string;
    count: number;
  }>;
}

interface StatisticsPanelProps {
  refreshKey?: number;
}

export default function StatisticsPanel({ refreshKey = 0 }: StatisticsPanelProps) {
  const [statistics, setStatistics] = useState<Statistics | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchStatistics();
  }, [refreshKey]);

  const fetchStatistics = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/rankings/statistics');
      if (!response.ok) {
        throw new Error('Failed to fetch statistics');
      }
      const data = await response.json();
      setStatistics(data);
      setError(null);
    } catch (err) {
      console.error('Error fetching statistics:', err);
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Estatísticas Gerais</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center items-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Estatísticas Gerais</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-red-600 text-center py-4">
            Erro ao carregar estatísticas: {error}
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!statistics) {
    return null;
  }

  const statCards = [
    {
      title: 'Atividades Registradas',
      value: statistics.totalActivities.toLocaleString('pt-BR'),
      icon: '📋',
      color: 'bg-blue-500',
      description: 'Total de atividades cadastradas no sistema'
    },
    {
      title: 'Evidências Recebidas',
      value: statistics.totalEvidences.toLocaleString('pt-BR'),
      icon: '📸',
      color: 'bg-green-500',
      description: 'Total de imagens/evidências enviadas'
    },
    {
      title: 'Participantes Ativos',
      value: `${statistics.activeParticipants} / ${statistics.totalParticipants}`,
      icon: '👥',
      color: 'bg-purple-500',
      description: 'Participantes com atividades registradas'
    },
    {
      title: 'Eventos Presenciais',
      value: statistics.presenceEvents.toLocaleString('pt-BR'),
      icon: '🎉',
      color: 'bg-orange-500',
      description: 'Happy hours e reuniões corporativas'
    },
    {
      title: 'Certificados Recebidos',
      value: statistics.certificatesReceived.toLocaleString('pt-BR'),
      icon: '🎓',
      color: 'bg-indigo-500',
      description: 'Certificados de cursos e treinamentos'
    },
    {
      title: 'Horas Dedicadas',
      value: `${statistics.totalHours.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}h`,
      icon: '⏱️',
      color: 'bg-red-500',
      description: 'Total de horas dedicadas pelos times'
    },
    {
      title: 'Pontuação Total',
      value: statistics.totalScore.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 }),
      icon: '🏆',
      color: 'bg-yellow-500',
      description: 'Soma de todas as pontuações'
    },
    {
      title: 'Média por Participante',
      value: statistics.averageScorePerParticipant.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 }),
      icon: '📊',
      color: 'bg-teal-500',
      description: 'Média de pontuação por participante ativo'
    },
    {
      title: 'Equipes Ativas',
      value: `${statistics.activeTeams} / ${statistics.totalTeams}`,
      icon: '👔',
      color: 'bg-pink-500',
      description: 'Equipes com atividades registradas'
    },
    {
      title: 'Atividades Físicas',
      value: statistics.physicalActivities.toLocaleString('pt-BR'),
      icon: '🏃',
      color: 'bg-cyan-500',
      description: 'Corridas, caminhadas e exercícios'
    },
    {
      title: 'Lições Duolingo',
      value: statistics.duolingoActivities.toLocaleString('pt-BR'),
      icon: '🌍',
      color: 'bg-emerald-500',
      description: 'Atividades de aprendizado de idiomas'
    },
    {
      title: 'Livros Lidos',
      value: statistics.booksRead.toLocaleString('pt-BR'),
      icon: '📚',
      color: 'bg-amber-500',
      description: 'Total de livros lidos e resumidos'
    },
    {
      title: 'Doações de Sangue',
      value: statistics.bloodDonations.toLocaleString('pt-BR'),
      icon: '❤️',
      color: 'bg-rose-500',
      description: 'Doações de sangue realizadas'
    }
  ];

  return (
    <Card className="mb-8">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Estatísticas Gerais</CardTitle>
          <button
            onClick={fetchStatistics}
            className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
            title="Atualizar estatísticas"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Atualizar
          </button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {statCards.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-2">
                <div className={`${stat.color} text-white rounded-lg p-2 text-xl`}>
                  {stat.icon}
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <h3 className="text-sm font-semibold text-gray-700 mb-1">
                  {stat.title}
                </h3>
                <p className="text-xs text-gray-500">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Distribuição por Categoria */}
        {statistics.activitiesByCategory.length > 0 && (
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Distribuição por Categoria
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {statistics.activitiesByCategory
                .sort((a, b) => b.count - a.count)
                .map((item, index) => {
                  const categoryNames: Record<string, string> = {
                    physical_activity: 'Atividade Física',
                    duolingo: 'Duolingo',
                    professional_training: 'Treinamento Profissional',
                    corporate_meeting: 'Reunião Corporativa',
                    happy_hour: 'Happy Hour',
                    books: 'Livros',
                    games: 'Jogos',
                    amigo_de_valor: 'Amigo de Valor',
                    blood_donation: 'Doação de Sangue',
                    lacre_event: 'Evento Lacre'
                  };

                  const categoryName = categoryNames[item.category] || item.category;
                  const percentage = statistics.totalActivities > 0
                    ? ((item.count / statistics.totalActivities) * 100).toFixed(1)
                    : '0';

                  return (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-lg p-3 border border-gray-200"
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-gray-700">
                          {categoryName}
                        </span>
                        <span className="text-sm font-bold text-gray-900">
                          {item.count}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full transition-all"
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-500 mt-1 block">
                        {percentage}% do total
                      </span>
                    </div>
                  );
                })}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

