import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    // Total de atividades registradas
    const totalActivities = await prisma.activity.count();

    // Total de evidências recebidas (imagens)
    const totalEvidences = await prisma.image.count();

    // Participantes ativos (que têm pelo menos uma atividade)
    const activeParticipants = await prisma.participant.count({
      where: {
        activities: {
          some: {}
        }
      }
    });

    // Total de participantes
    const totalParticipants = await prisma.participant.count();

    // Eventos presenciais (happy_hour + corporate_meeting)
    const presenceEvents = await prisma.activity.count({
      where: {
        category: {
          in: ['happy_hour', 'corporate_meeting']
        }
      }
    });

    // Certificados de cursos recebidos (professional_training com certificate: true)
    const professionalTrainings = await prisma.activity.findMany({
      where: {
        category: 'professional_training'
      },
      select: {
        activity: true
      }
    });

    const certificatesReceived = professionalTrainings.filter(activity => {
      const activityData = activity.activity as any;
      return activityData?.certificate === true || activityData?.certificate === 'true';
    }).length;

    // Total de horas dedicadas pelos times
    // Buscar todas as atividades com duration_hours ou duration_minutes
    const allActivities = await prisma.activity.findMany({
      select: {
        activity: true,
        category: true
      }
    });

    let totalHours = 0;

    allActivities.forEach(activity => {
      const activityData = activity.activity as any;
      
      // Professional training tem duration_hours
      if (activity.category === 'professional_training' && activityData?.duration_hours) {
        totalHours += Number(activityData.duration_hours) || 0;
      }
      
      // Physical activity e corporate meeting têm duration_minutes
      if ((activity.category === 'physical_activity' || activity.category === 'corporate_meeting') 
          && activityData?.duration_minutes) {
        totalHours += (Number(activityData.duration_minutes) || 0) / 60;
      }
    });

    // Pontuação total
    const totalScoreResult = await prisma.activity.aggregate({
      _sum: {
        calculated_score: true
      }
    });
    const totalScore = totalScoreResult._sum.calculated_score || 0;

    // Média de pontuação por participante ativo
    const averageScorePerParticipant = activeParticipants > 0 
      ? totalScore / activeParticipants 
      : 0;

    // Total de equipes
    const totalTeams = await prisma.team.count();

    // Equipes ativas (que têm pelo menos uma atividade)
    const activeTeams = await prisma.team.count({
      where: {
        activities: {
          some: {}
        }
      }
    });

    // Distribuição por categoria
    const activitiesByCategory = await prisma.activity.groupBy({
      by: ['category'],
      _count: {
        id: true
      }
    });

    // Total de livros lidos
    const booksRead = await prisma.activity.count({
      where: {
        category: 'books'
      }
    });

    // Total de doações de sangue
    const bloodDonations = await prisma.activity.count({
      where: {
        category: 'blood_donation'
      }
    });

    // Total de atividades físicas
    const physicalActivities = await prisma.activity.count({
      where: {
        category: 'physical_activity'
      }
    });

    // Total de atividades Duolingo
    const duolingoActivities = await prisma.activity.count({
      where: {
        category: 'duolingo'
      }
    });

    return NextResponse.json({
      totalActivities,
      totalEvidences,
      activeParticipants,
      totalParticipants,
      presenceEvents,
      certificatesReceived,
      totalHours: Math.round(totalHours * 10) / 10, // Arredondar para 1 casa decimal
      totalScore: Math.round(totalScore * 10) / 10,
      averageScorePerParticipant: Math.round(averageScorePerParticipant * 10) / 10,
      totalTeams,
      activeTeams,
      activitiesByCategory: activitiesByCategory.map(item => ({
        category: item.category,
        count: item._count.id
      })),
      booksRead,
      bloodDonations,
      physicalActivities,
      duolingoActivities
    });
  } catch (error) {
    console.error('Error fetching statistics:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

