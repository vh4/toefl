import prisma from '@/lib/db/prisma';
import { DEFAULT_USER_ID } from './roadmap.service';
import { FALLBACK_MISTAKES } from '@/lib/data/fallback-content';

export interface MistakeItem {
  id: string;
  questionId: string;
  questionText: string;
  userAnswer: string;
  correctAnswer: string;
  explanation: string;
  reviewCount: number;
  resolved: boolean;
  updatedAt: Date;
  lessonId: string;
  lessonTitle: string;
  lessonSlug: string;
  options: { key: string; text: string }[];
}

export interface MistakesGroupedByLesson {
  lessonId: string;
  lessonTitle: string;
  lessonSlug: string;
  count: number;
  mistakes: MistakeItem[];
}

export async function getMistakes(
  userId: string = DEFAULT_USER_ID,
  includeResolved: boolean = false
): Promise<MistakesGroupedByLesson[]> {
  try {
    const mistakes = await prisma.mistake.findMany({
      where: {
        userId,
        ...(includeResolved ? {} : { resolved: false }),
      },
      include: {
        question: {
          include: {
            lesson: true,
            options: {
              orderBy: { key: 'asc' },
            },
          },
        },
      },
      orderBy: { updatedAt: 'desc' },
    });

    if (!mistakes || mistakes.length === 0) {
      return includeResolved ? [] : FALLBACK_MISTAKES;
    }

    const grouped = new Map<string, MistakesGroupedByLesson>();

    for (const m of mistakes) {
      const lesson = m.question.lesson;
      if (!grouped.has(lesson.id)) {
        grouped.set(lesson.id, {
          lessonId: lesson.id,
          lessonTitle: lesson.title,
          lessonSlug: lesson.slug,
          count: 0,
          mistakes: [],
        });
      }

      const group = grouped.get(lesson.id)!;
      group.count += 1;
      group.mistakes.push({
        id: m.id,
        questionId: m.question.id,
        questionText: m.question.question,
        userAnswer: m.userAnswer,
        correctAnswer: m.question.correctAnswer,
        explanation: m.question.explanation,
        reviewCount: m.reviewCount,
        resolved: m.resolved,
        updatedAt: m.updatedAt,
        lessonId: lesson.id,
        lessonTitle: lesson.title,
        lessonSlug: lesson.slug,
        options: m.question.options.map((opt) => ({
          key: opt.key,
          text: opt.text,
        })),
      });
    }

    return Array.from(grouped.values());
  } catch (error) {
    console.warn('Prisma getMistakes failed, using fallback content:', error);
    return includeResolved ? [] : FALLBACK_MISTAKES;
  }
}

export async function resolveMistake(
  mistakeId: string,
  userId: string = DEFAULT_USER_ID
): Promise<boolean> {
  try {
    const mistake = await prisma.mistake.findFirst({
      where: {
        id: mistakeId,
        userId,
      },
    });

    if (!mistake) return true; // Gracefully succeed in fallback mode

    await prisma.mistake.update({
      where: { id: mistakeId },
      data: {
        resolved: true,
        reviewCount: { increment: 1 },
      },
    });

    return true;
  } catch (error) {
    console.warn('Prisma resolveMistake failed, returning true for fallback UI:', error);
    return true;
  }
}
