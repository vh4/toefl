import prisma from '@/lib/db/prisma';
import { validateAnswer } from './validation.service';
import { calculateAccuracy, determineMasteryStatus, computeNewMastery } from './mastery.service';

export interface SubmitAnswerParams {
  userId: string;
  questionId: string;
  answer: string;
}

export interface SubmitAnswerResponse {
  isCorrect: boolean;
  userAnswer: string;
  correctAnswer: string;
  explanation: string;
  previousMastery: number;
  newMastery: number;
  status: string;
  lessonId: string;
  lessonTitle: string;
  lessonSlug: string;
  questionOrder: number;
  totalQuestions: number;
}

export async function submitAnswer({
  userId,
  questionId,
  answer,
}: SubmitAnswerParams): Promise<SubmitAnswerResponse> {
  // 1. Fetch Question and its parent Lesson
  const question = await prisma.question.findUnique({
    where: { id: questionId },
    include: {
      lesson: {
        include: {
          questions: { select: { id: true } },
          progress: {
            where: { userId },
          },
        },
      },
    },
  });

  if (!question) {
    throw new Error(`Question with id "${questionId}" not found.`);
  }

  // 2. Validate Answer
  const validation = validateAnswer(answer, question.correctAnswer, question.explanation);

  // 3. Record Attempt
  await prisma.attempt.create({
    data: {
      userId,
      questionId,
      answer: validation.userAnswerKey,
      isCorrect: validation.isCorrect,
    },
  });

  // 4. Handle Mistake
  if (!validation.isCorrect) {
    await prisma.mistake.upsert({
      where: {
        userId_questionId: {
          userId,
          questionId,
        },
      },
      update: {
        userAnswer: validation.userAnswerKey,
        reviewCount: { increment: 1 },
        resolved: false,
      },
      create: {
        userId,
        questionId,
        userAnswer: validation.userAnswerKey,
        reviewCount: 1,
        resolved: false,
      },
    });
  } else {
    // If user got it right, check if there was an open mistake and mark it resolved
    const existingMistake = await prisma.mistake.findUnique({
      where: {
        userId_questionId: {
          userId,
          questionId,
        },
      },
    });

    if (existingMistake && !existingMistake.resolved) {
      await prisma.mistake.update({
        where: { id: existingMistake.id },
        data: {
          resolved: true,
          reviewCount: { increment: 1 },
        },
      });
    }
  }

  // 5. Recalculate Lesson Mastery & Progress
  const lesson = question.lesson;
  const lessonQuestionIds = lesson.questions.map((q) => q.id);
  const totalQuestions = lessonQuestionIds.length;

  // Find latest attempt for each question in this lesson
  const allAttempts = await prisma.attempt.findMany({
    where: {
      userId,
      questionId: { in: lessonQuestionIds },
    },
    orderBy: { createdAt: 'desc' },
  });

  // Unique latest attempt per question
  const latestAttemptsByQ = new Map<string, boolean>();
  for (const att of allAttempts) {
    if (!latestAttemptsByQ.has(att.questionId)) {
      latestAttemptsByQ.set(att.questionId, att.isCorrect);
    }
  }

  let correctCount = 0;
  for (const isCorrect of latestAttemptsByQ.values()) {
    if (isCorrect) correctCount += 1;
  }

  // Accuracy based on current evaluated questions
  const accuracy = calculateAccuracy(correctCount, totalQuestions);

  const currentProg = lesson.progress[0];
  const previousMastery = currentProg ? currentProg.mastery : 0;
  const isFirstAttempt = !currentProg || currentProg.status === 'NOT_STARTED';

  const newMastery = computeNewMastery(previousMastery, accuracy, isFirstAttempt);
  const status = determineMasteryStatus(newMastery);

  // Save Progress to PostgreSQL
  await prisma.progress.upsert({
    where: {
      userId_lessonId: {
        userId,
        lessonId: lesson.id,
      },
    },
    update: {
      mastery: newMastery,
      status,
    },
    create: {
      userId,
      lessonId: lesson.id,
      mastery: newMastery,
      status,
    },
  });

  return {
    isCorrect: validation.isCorrect,
    userAnswer: validation.userAnswerKey,
    correctAnswer: validation.correctAnswerKey,
    explanation: validation.explanation,
    previousMastery,
    newMastery,
    status,
    lessonId: lesson.id,
    lessonTitle: lesson.title,
    lessonSlug: lesson.slug,
    questionOrder: question.order,
    totalQuestions,
  };
}
