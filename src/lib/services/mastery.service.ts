/**
 * Domain service for calculating accuracy, mastery levels, and status transitions.
 */

export type MasteryStatus = 'NOT_STARTED' | 'LEARNING' | 'NEEDS_REVIEW' | 'MASTERED';

export interface MasteryThresholds {
  learningMax: number;     // 49
  needsReviewMax: number;  // 79
  masteredMin: number;     // 80
}

export const DEFAULT_THRESHOLDS: MasteryThresholds = {
  learningMax: 49,
  needsReviewMax: 79,
  masteredMin: 80,
};

/**
 * Calculates percentage accuracy (0 to 100) rounded to nearest integer.
 */
export function calculateAccuracy(correctCount: number, totalCount: number): number {
  if (totalCount <= 0) return 0;
  const percentage = (correctCount / totalCount) * 100;
  return Math.min(100, Math.max(0, Math.round(percentage)));
}

/**
 * Maps mastery score (0-100) to learning status.
 */
export function determineMasteryStatus(
  mastery: number,
  thresholds: MasteryThresholds = DEFAULT_THRESHOLDS
): MasteryStatus {
  if (mastery <= 0) return 'NOT_STARTED';
  if (mastery <= thresholds.learningMax) return 'LEARNING';
  if (mastery <= thresholds.needsReviewMax) return 'NEEDS_REVIEW';
  return 'MASTERED';
}

/**
 * Computes updated mastery score considering historical progress and new test accuracy.
 * Uses a weighted average (70% current test accuracy, 30% prior mastery if previously attempted)
 * to reward steady retention while acknowledging improvement.
 */
export function computeNewMastery(
  previousMastery: number,
  currentAccuracy: number,
  isFirstAttempt: boolean = false
): number {
  if (isFirstAttempt || previousMastery === 0) {
    return currentAccuracy;
  }
  const weighted = Math.round(previousMastery * 0.3 + currentAccuracy * 0.7);
  return Math.min(100, Math.max(0, weighted));
}
