import prisma from '@/lib/db/prisma';
import { DEFAULT_USER_ID } from './roadmap.service';
import { getGrammarLessons } from './grammar.service';
import { recommendNextLesson, LessonCandidate } from './recommendation.service';

export interface DashboardData {
  user: {
    id: string;
    name: string;
    email: string | null;
  };
  todayLearning: {
    continueLesson: {
      id: string;
      title: string;
      slug: string;
      level: string;
      mastery: number;
      status: string;
    } | null;
    vocabularyCount: number;
    unresolvedMistakesCount: number;
  };
  recommendedLesson: {
    id: string;
    title: string;
    slug: string;
    level: string;
    mastery: number;
    reason: string;
  } | null;
  overallStats: {
    totalLessons: number;
    masteredLessons: number;
    averageMastery: number;
  };
  recentActivity: Array<{
    id: string;
    type: 'ATTEMPT';
    questionSnippet: string;
    lessonTitle: string;
    isCorrect: boolean;
    createdAt: Date;
  }>;
}

export async function getDashboardData(userId: string = DEFAULT_USER_ID): Promise<DashboardData> {
  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  const grammarLessons = await getGrammarLessons(userId);

  // Unresolved mistakes count
  const unresolvedMistakesCount = await prisma.mistake.count({
    where: {
      userId,
      resolved: false,
    },
  });

  // Calculate candidates for recommendation
  const candidates: LessonCandidate[] = grammarLessons.map((l) => ({
    id: l.id,
    title: l.title,
    slug: l.slug,
    level: l.level,
    mastery: l.mastery,
    status: l.status,
    unresolvedMistakesCount: l.unresolvedMistakesCount,
  }));

  const recommendation = recommendNextLesson(candidates);

  // Find Continue Learning lesson (highest mastery that is still < 80% and > 0, or first in progress)
  const inProgressLessons = grammarLessons.filter((l) => l.mastery > 0 && l.mastery < 80);
  const continueLesson = inProgressLessons.length > 0
    ? inProgressLessons.sort((a, b) => b.mastery - a.mastery)[0]
    : grammarLessons.find((l) => l.mastery < 80) || grammarLessons[0] || null;

  // Overall stats
  const totalLessons = grammarLessons.length;
  const masteredLessons = grammarLessons.filter((l) => l.mastery >= 80).length;
  const sumMastery = grammarLessons.reduce((acc, curr) => acc + curr.mastery, 0);
  const averageMastery = totalLessons > 0 ? Math.round(sumMastery / totalLessons) : 0;

  // Recent attempts
  const recentAttempts = await prisma.attempt.findMany({
    where: { userId },
    orderBy: { createdAt: 'desc' },
    take: 5,
    include: {
      question: {
        include: { lesson: true },
      },
    },
  });

  const recentActivity = recentAttempts.map((att) => ({
    id: att.id,
    type: 'ATTEMPT' as const,
    questionSnippet: att.question.question.length > 60
      ? `${att.question.question.slice(0, 60)}...`
      : att.question.question,
    lessonTitle: att.question.lesson.title,
    isCorrect: att.isCorrect,
    createdAt: att.createdAt,
  }));

  return {
    user: {
      id: user?.id || userId,
      name: user?.name || 'TOEFL Scholar',
      email: user?.email || null,
    },
    todayLearning: {
      continueLesson: continueLesson
        ? {
            id: continueLesson.id,
            title: continueLesson.title,
            slug: continueLesson.slug,
            level: continueLesson.level,
            mastery: continueLesson.mastery,
            status: continueLesson.status,
          }
        : null,
      vocabularyCount: 20, // Sample Academic Word List target
      unresolvedMistakesCount,
    },
    recommendedLesson: recommendation.lesson
      ? {
          id: recommendation.lesson.id,
          title: recommendation.lesson.title,
          slug: recommendation.lesson.slug,
          level: recommendation.lesson.level,
          mastery: recommendation.lesson.mastery,
          reason: recommendation.reason,
        }
      : null,
    overallStats: {
      totalLessons,
      masteredLessons,
      averageMastery,
    },
    recentActivity,
  };
}
