import prisma from '@/lib/db/prisma';
import { DEFAULT_USER_ID } from './roadmap.service';
import { FALLBACK_LESSONS } from '@/lib/data/fallback-content';

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
  try {
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

    if (!grammarSection || grammarSection.topics.length === 0) {
      return FALLBACK_LESSONS.map((l) => ({
        id: l.id,
        title: l.title,
        slug: l.slug,
        level: l.level,
        order: l.order,
        questionCount: l.questionCount,
        mastery: l.mastery,
        status: l.status,
        unresolvedMistakesCount: l.unresolvedMistakesCount,
      }));
    }

    // Fetch mistakes for this user
    let userMistakes: any[] = [];
    try {
      userMistakes = await prisma.mistake.findMany({
        where: {
          userId,
          resolved: false,
        },
        include: {
          question: { select: { lessonId: true } },
        },
      });
    } catch (e) {
      console.warn('Prisma mistake query failed, using empty mistakes:', e);
    }

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
  } catch (error) {
    console.warn('Prisma getGrammarLessons failed, using fallback content:', error);
    return FALLBACK_LESSONS.map((l) => ({
      id: l.id,
      title: l.title,
      slug: l.slug,
      level: l.level,
      order: l.order,
      questionCount: l.questionCount,
      mastery: l.mastery,
      status: l.status,
      unresolvedMistakesCount: l.unresolvedMistakesCount,
    }));
  }
}

export async function getLessonBySlug(slug: string, userId: string = DEFAULT_USER_ID) {
  try {
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

    if (!lesson) {
      const fallback = FALLBACK_LESSONS.find((l) => l.slug === slug);
      if (!fallback) return null;

      return {
        id: fallback.id,
        title: fallback.title,
        slug: fallback.slug,
        level: fallback.level,
        formula: fallback.formula,
        explanation: fallback.explanation,
        topicName: fallback.topicName,
        sectionName: fallback.sectionName,
        mastery: fallback.mastery,
        status: fallback.status,
        questions: fallback.questions.map((q) => ({
          id: q.id,
          question: q.question,
          order: q.order,
          options: q.options.map((opt) => ({
            id: opt.id,
            key: opt.key,
            text: opt.text,
          })),
        })),
      };
    }

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
  } catch (error) {
    console.warn('Prisma getLessonBySlug failed, using fallback content:', error);
    const fallback = FALLBACK_LESSONS.find((l) => l.slug === slug);
    if (!fallback) return null;

    return {
      id: fallback.id,
      title: fallback.title,
      slug: fallback.slug,
      level: fallback.level,
      formula: fallback.formula,
      explanation: fallback.explanation,
      topicName: fallback.topicName,
      sectionName: fallback.sectionName,
      mastery: fallback.mastery,
      status: fallback.status,
      questions: fallback.questions.map((q) => ({
        id: q.id,
        question: q.question,
        order: q.order,
        options: q.options.map((opt) => ({
          id: opt.id,
          key: opt.key,
          text: opt.text,
        })),
      })),
    };
  }
}
