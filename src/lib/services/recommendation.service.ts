/**
 * Domain service for recommending the next lesson based on mastery and unresolved mistakes.
 */

export interface LessonCandidate {
  id: string;
  title: string;
  slug: string;
  level: string;
  mastery: number; // 0 - 100
  status: string;  // NOT_STARTED, LEARNING, NEEDS_REVIEW, MASTERED
  unresolvedMistakesCount: number;
}

export interface RecommendationResult {
  lesson: LessonCandidate | null;
  reason: string;
  priorityScore: number;
}

/**
 * Calculates priority score for a lesson candidate:
 * - Base penalty: (100 - mastery) * 1.5
 * - Mistakes weight: unresolvedMistakesCount * 25
 * - Not started bonus: 15 (if never started, encourage beginning)
 * - Mastered penalty: -500 (avoid recommending already mastered lessons unless all are mastered)
 */
export function calculateLessonPriority(candidate: LessonCandidate): number {
  if (candidate.status === 'MASTERED' || candidate.mastery >= 80) {
    return -100 + candidate.unresolvedMistakesCount * 10;
  }

  let score = (100 - candidate.mastery) * 1.5;
  score += candidate.unresolvedMistakesCount * 25;

  if (candidate.status === 'NOT_STARTED') {
    score += 10;
  }

  return Math.round(score);
}

/**
 * Evaluates candidate lessons and returns the highest priority recommended lesson.
 */
export function recommendNextLesson(candidates: LessonCandidate[]): RecommendationResult {
  if (!candidates || candidates.length === 0) {
    return {
      lesson: null,
      reason: 'No lessons available.',
      priorityScore: 0,
    };
  }

  // Sort by priority descending
  const scored = candidates.map((candidate) => ({
    candidate,
    score: calculateLessonPriority(candidate),
  }));

  scored.sort((a, b) => b.score - a.score);
  const best = scored[0];

  let reason = '';
  if (best.candidate.unresolvedMistakesCount > 0) {
    reason = `Your current mastery is ${best.candidate.mastery}% and you have ${best.candidate.unresolvedMistakesCount} recent mistake${
      best.candidate.unresolvedMistakesCount > 1 ? 's' : ''
    } to review.`;
  } else if (best.candidate.status === 'NOT_STARTED') {
    reason = `New topic in your study plan. Start this lesson to build your foundation.`;
  } else if (best.candidate.mastery < 80) {
    reason = `Your current mastery is ${best.candidate.mastery}%. A quick practice session will help reach mastery.`;
  } else {
    reason = `All current lessons are mastered! Reviewing this will reinforce your knowledge.`;
  }

  return {
    lesson: best.candidate,
    reason,
    priorityScore: best.score,
  };
}
