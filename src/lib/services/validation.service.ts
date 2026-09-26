/**
 * Domain service for question answer validation and normalization.
 */

export interface ValidationResult {
  isCorrect: boolean;
  userAnswerKey: string;
  correctAnswerKey: string;
  explanation: string;
}

/**
 * Normalizes input answer string (e.g. trims whitespace, uppercase option key).
 */
export function normalizeAnswer(answer: string): string {
  return answer.trim().toUpperCase();
}

/**
 * Validates a submitted answer against the correct answer.
 */
export function validateAnswer(
  submittedAnswer: string,
  correctAnswer: string,
  explanation: string
): ValidationResult {
  const normalizedUser = normalizeAnswer(submittedAnswer);
  const normalizedCorrect = normalizeAnswer(correctAnswer);

  const isCorrect = normalizedUser === normalizedCorrect;

  return {
    isCorrect,
    userAnswerKey: normalizedUser,
    correctAnswerKey: normalizedCorrect,
    explanation,
  };
}
