import prisma from '@/lib/db/prisma';
import { DEFAULT_USER_ID } from './roadmap.service';

export interface GrammarLessonSummary {
  id: string;
  title: string;
  slug: string;
  level: string;
  order: number;
  questionCount: number;
  mastery: number;
  status: string;
  unresolvedMistakesCount: number;
}

export async function getGrammarLessons(userId: string = DEFAULT_USER_ID): Promise<GrammarLessonSummary[]> {
  const grammarSection = await prisma.section.findUnique({
    where: { slug: 'grammar' },
    include: {
      topics: {
        include: {
          lessons: {
            orderBy: { order: 'asc' },
            include: {
              questions: { select: { id: true } },
              progress: {
                where: { userId },
              },
              _count: {
                select: {
                  questions: true,
                },
              },
            },
          },
        },
      },
    },
  });

  if (!grammarSection) {
    return [];
  }

  // Fetch mistakes for this user
  const userMistakes = await prisma.mistake.findMany({
    where: {
      userId,
      resolved: false,
    },
    include: {
      question: { select: { lessonId: true } },
    },
  });

  const mistakesByLesson: Record<string, number> = {};
  for (const m of userMistakes) {
    const lId = m.question.lessonId;
    mistakesByLesson[lId] = (mistakesByLesson[lId] || 0) + 1;
  }

  const result: GrammarLessonSummary[] = [];

  for (const topic of grammarSection.topics) {
    for (const lesson of topic.lessons) {
      const prog = lesson.progress[0];
      const mastery = prog ? prog.mastery : 0;
      const status = prog ? prog.status : 'NOT_STARTED';

      result.push({
        id: lesson.id,
        title: lesson.title,
        slug: lesson.slug,
        level: lesson.level,
        order: lesson.order,
        questionCount: lesson._count.questions,
        mastery,
        status,
        unresolvedMistakesCount: mistakesByLesson[lesson.id] || 0,
      });
    }
  }

  return result.sort((a, b) => a.order - b.order);
}

export async function getLessonBySlug(slug: string, userId: string = DEFAULT_USER_ID) {
  const lesson = await prisma.lesson.findUnique({
    where: { slug },
    include: {
      topic: {
        include: {
          section: true,
        },
      },
      progress: {
        where: { userId },
      },
      questions: {
        orderBy: { order: 'asc' },
        select: {
          id: true,
          question: true,
          order: true,
          options: {
            orderBy: { key: 'asc' },
            select: {
              id: true,
              key: true,
              text: true,
            },
          },
        },
      },
    },
  });

  if (!lesson) return null;

  const prog = lesson.progress[0];

  return {
    id: lesson.id,
    title: lesson.title,
    slug: lesson.slug,
    level: lesson.level,
    formula: lesson.formula,
    explanation: lesson.explanation,
    topicName: lesson.topic.name,
    sectionName: lesson.topic.section.name,
    mastery: prog ? prog.mastery : 0,
    status: prog ? prog.status : 'NOT_STARTED',
    questions: lesson.questions,
  };
}
