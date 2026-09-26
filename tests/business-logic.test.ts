import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateAccuracy,
  determineMasteryStatus,
  computeNewMastery,
} from '../src/lib/services/mastery.service.js';
import {
  validateAnswer,
  normalizeAnswer,
} from '../src/lib/services/validation.service.js';
import {
  calculateLessonPriority,
  recommendNextLesson,
  LessonCandidate,
} from '../src/lib/services/recommendation.service.js';

describe('TOEFL Learning Platform - Business Logic Tests', () => {
  describe('Mastery & Accuracy Service', () => {
    it('calculates accuracy accurately for 4 out of 5 questions (80%)', () => {
      const accuracy = calculateAccuracy(4, 5);
      assert.equal(accuracy, 80);
    });

    it('handles edge cases for zero and negative questions gracefully', () => {
      assert.equal(calculateAccuracy(0, 5), 0);
      assert.equal(calculateAccuracy(0, 0), 0);
      assert.equal(calculateAccuracy(5, 5), 100);
    });

    it('maps mastery scores correctly to learning statuses per specification', () => {
      // 0-49: LEARNING, 50-79: NEEDS_REVIEW, 80-100: MASTERED
      assert.equal(determineMasteryStatus(0), 'NOT_STARTED');
      assert.equal(determineMasteryStatus(25), 'LEARNING');
      assert.equal(determineMasteryStatus(49), 'LEARNING');
      assert.equal(determineMasteryStatus(50), 'NEEDS_REVIEW');
      assert.equal(determineMasteryStatus(79), 'NEEDS_REVIEW');
      assert.equal(determineMasteryStatus(80), 'MASTERED');
      assert.equal(determineMasteryStatus(100), 'MASTERED');
    });

    it('computes new mastery on first attempt and subsequent attempts', () => {
      // First attempt: sets directly to accuracy
      const firstAttempt = computeNewMastery(0, 80, true);
      assert.equal(firstAttempt, 80);

      // Subsequent attempt with prior 80 and new 100: 80 * 0.3 + 100 * 0.7 = 24 + 70 = 94
      const secondAttempt = computeNewMastery(80, 100, false);
      assert.equal(secondAttempt, 94);
    });
  });

  describe('Answer Validation Service', () => {
    it('normalizes answers regardless of casing and whitespace', () => {
      assert.equal(normalizeAnswer(' b '), 'B');
      assert.equal(normalizeAnswer('a'), 'A');
    });

    it('validates correct and incorrect answers with feedback explanation', () => {
      const correctResult = validateAnswer('b', 'B', '"She" uses "has".');
      assert.equal(correctResult.isCorrect, true);
      assert.equal(correctResult.userAnswerKey, 'B');
      assert.equal(correctResult.correctAnswerKey, 'B');

      const incorrectResult = validateAnswer('a', 'B', '"She" uses "has".');
      assert.equal(incorrectResult.isCorrect, false);
      assert.equal(incorrectResult.userAnswerKey, 'A');
      assert.equal(incorrectResult.correctAnswerKey, 'B');
    });
  });

  describe('Lesson Recommendation Algorithm', () => {
    const mockLessons: LessonCandidate[] = [
      {
        id: '1',
        title: 'Simple Present',
        slug: 'simple-present',
        level: 'Beginner',
        mastery: 85,
        status: 'MASTERED',
        unresolvedMistakesCount: 0,
      },
      {
        id: '2',
        title: 'Present Perfect',
        slug: 'present-perfect',
        level: 'Intermediate',
        mastery: 60,
        status: 'NEEDS_REVIEW',
        unresolvedMistakesCount: 1,
      },
      {
        id: '3',
        title: 'Passive Voice',
        slug: 'passive-voice',
        level: 'Intermediate',
        mastery: 42,
        status: 'LEARNING',
        unresolvedMistakesCount: 3,
      },
      {
        id: '4',
        title: 'Relative Clauses',
        slug: 'relative-clauses',
        level: 'Intermediate',
        mastery: 0,
        status: 'NOT_STARTED',
        unresolvedMistakesCount: 0,
      },
    ];

    it('prioritizes lower mastery and high mistake count', () => {
      const passiveVoicePriority = calculateLessonPriority(mockLessons[2]);
      const presentPerfectPriority = calculateLessonPriority(mockLessons[1]);
      const simplePresentPriority = calculateLessonPriority(mockLessons[0]);

      assert.ok(passiveVoicePriority > presentPerfectPriority);
      assert.ok(presentPerfectPriority > simplePresentPriority);
    });

    it('recommends Passive Voice for the given candidate list', () => {
      const recommendation = recommendNextLesson(mockLessons);
      assert.ok(recommendation.lesson !== null);
      assert.equal(recommendation.lesson?.slug, 'passive-voice');
      assert.match(recommendation.reason, /42%/);
      assert.match(recommendation.reason, /3 recent mistakes/);
    });
  });
});
