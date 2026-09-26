import prisma from '@/lib/db/prisma';
import { validateAnswer } from './validation.service';
import { calculateAccuracy, determineMasteryStatus, computeNewMastery } from './mastery.service';
import { FALLBACK_LESSONS } from '@/lib/data/fallback-content';

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
  // 1. Try DB First
  try {
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

    if (question) {
      // 2. Validate Answer
      const validation = validateAnswer(answer, question.correctAnswer, question.explanation);

      // 3. Record Attempt
      try {
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
      } catch (dbWriteErr) {
        console.warn('Prisma attempt/mistake write failed:', dbWriteErr);
      }

      // 5. Recalculate Lesson Mastery & Progress
      const lesson = question.lesson;
      const lessonQuestionIds = lesson.questions.map((q) => q.id);
      const totalQuestions = lessonQuestionIds.length;

      // Find latest attempt for each question in this lesson
      let allAttempts: any[] = [];
      try {
        allAttempts = await prisma.attempt.findMany({
          where: {
            userId,
            questionId: { in: lessonQuestionIds },
          },
          orderBy: { createdAt: 'desc' },
        });
      } catch (e) {
        console.warn('Prisma attempts lookup failed:', e);
      }

      // Unique latest attempt per question
      const latestAttemptsByQ = new Map<string, boolean>();
      for (const att of allAttempts) {
        if (!latestAttemptsByQ.has(att.questionId)) {
          latestAttemptsByQ.set(att.questionId, att.isCorrect);
        }
      }
      latestAttemptsByQ.set(questionId, validation.isCorrect);

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
      try {
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
      } catch (e) {
        console.warn('Prisma progress upsert failed:', e);
      }

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
  } catch (error) {
    console.warn('Prisma question lookup or DB failed, falling back to static questions:', error);
  }

  // Fallback lookup from static content
  let foundQuestion: any = null;
  let parentLesson: any = null;

  for (const les of FALLBACK_LESSONS) {
    const q = les.questions.find((item) => item.id === questionId);
    if (q) {
      foundQuestion = q;
      parentLesson = les;
      break;
    }
  }

  if (!foundQuestion || !parentLesson) {
    throw new Error(`Question with id "${questionId}" not found.`);
  }

  const validation = validateAnswer(answer, foundQuestion.correctAnswer, foundQuestion.explanation);
  const totalQuestions = parentLesson.questions.length;
  const previousMastery = parentLesson.mastery;
  const simulatedAccuracy = validation.isCorrect
    ? Math.min(100, previousMastery + 20)
    : Math.max(0, previousMastery - 10);
  const newMastery = computeNewMastery(previousMastery, simulatedAccuracy, false);
  const status = determineMasteryStatus(newMastery);

  return {
    isCorrect: validation.isCorrect,
    userAnswer: validation.userAnswerKey,
    correctAnswer: validation.correctAnswerKey,
    explanation: validation.explanation,
    previousMastery,
    newMastery,
    status,
    lessonId: parentLesson.id,
    lessonTitle: parentLesson.title,
    lessonSlug: parentLesson.slug,
    questionOrder: foundQuestion.order,
    totalQuestions,
  };
}
