import prisma from '@/lib/db/prisma';
import { DEFAULT_USER_ID } from './roadmap.service';
import { FALLBACK_LESSONS, FALLBACK_SECTIONS } from '@/lib/data/fallback-content';

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
  sectionSlug?: string;
  sectionName?: string;
  topicName?: string;
}

export interface SectionDetails {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  order: number;
  lessons: GrammarLessonSummary[];
}

export async function getLessonsBySection(
  sectionSlug: string,
  userId: string = DEFAULT_USER_ID
): Promise<GrammarLessonSummary[]> {
  try {
    const section = await prisma.section.findUnique({
      where: { slug: sectionSlug },
      include: {
        topics: {
          orderBy: { order: 'asc' },
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

    if (!section || section.topics.length === 0) {
      return FALLBACK_LESSONS.filter((l) => l.sectionSlug === sectionSlug).map((l) => ({
        id: l.id,
        title: l.title,
        slug: l.slug,
        level: l.level,
        order: l.order,
        questionCount: l.questionCount,
        mastery: l.mastery,
        status: l.status,
        unresolvedMistakesCount: l.unresolvedMistakesCount,
        sectionSlug: l.sectionSlug,
        sectionName: l.sectionName,
        topicName: l.topicName,
      }));
    }

    // Fetch unresolved mistakes for this user
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

    for (const topic of section.topics) {
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
          sectionSlug: section.slug,
          sectionName: section.name,
          topicName: topic.name,
        });
      }
    }

    return result.sort((a, b) => a.order - b.order);
  } catch (error) {
    console.warn(`Prisma getLessonsBySection failed for ${sectionSlug}, using fallback content:`, error);
    return FALLBACK_LESSONS.filter((l) => l.sectionSlug === sectionSlug).map((l) => ({
      id: l.id,
      title: l.title,
      slug: l.slug,
      level: l.level,
      order: l.order,
      questionCount: l.questionCount,
      mastery: l.mastery,
      status: l.status,
      unresolvedMistakesCount: l.unresolvedMistakesCount,
      sectionSlug: l.sectionSlug,
      sectionName: l.sectionName,
      topicName: l.topicName,
    }));
  }
}

export async function getGrammarLessons(userId: string = DEFAULT_USER_ID): Promise<GrammarLessonSummary[]> {
  return getLessonsBySection('grammar', userId);
}

export async function getSectionDetails(
  sectionSlug: string,
  userId: string = DEFAULT_USER_ID
): Promise<SectionDetails | null> {
  try {
    const section = await prisma.section.findUnique({
      where: { slug: sectionSlug },
    });

    if (!section) {
      const fallbackSec = FALLBACK_SECTIONS.find((s) => s.slug === sectionSlug);
      if (!fallbackSec) return null;

      const lessons = await getLessonsBySection(sectionSlug, userId);
      return {
        id: fallbackSec.id,
        name: fallbackSec.name,
        slug: fallbackSec.slug,
        description: fallbackSec.description,
        order: fallbackSec.order,
        lessons,
      };
    }

    const lessons = await getLessonsBySection(sectionSlug, userId);
    return {
      id: section.id,
      name: section.name,
      slug: section.slug,
      description: section.description,
      order: section.order,
      lessons,
    };
  } catch (error) {
    console.warn(`Prisma getSectionDetails failed for ${sectionSlug}:`, error);
    const fallbackSec = FALLBACK_SECTIONS.find((s) => s.slug === sectionSlug);
    if (!fallbackSec) return null;

    const lessons = await getLessonsBySection(sectionSlug, userId);
    return {
      id: fallbackSec.id,
      name: fallbackSec.name,
      slug: fallbackSec.slug,
      description: fallbackSec.description,
      order: fallbackSec.order,
      lessons,
    };
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
        sectionSlug: fallback.sectionSlug,
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
      sectionSlug: lesson.topic.section.slug,
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
      sectionSlug: fallback.sectionSlug,
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
