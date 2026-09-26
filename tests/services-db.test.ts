import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { getRoadmap } from '../src/lib/services/roadmap.service.js';
import { getGrammarLessons, getLessonBySlug } from '../src/lib/services/grammar.service.js';
import { submitAnswer } from '../src/lib/services/attempt.service.js';
import { getDashboardData } from '../src/lib/services/dashboard.service.js';
import { getMistakes, resolveMistake } from '../src/lib/services/mistakes.service.js';
import prisma from '../src/lib/db/prisma.js';

describe('TOEFL Learning Platform - Database Services Integration Tests', () => {
  const testUserId = 'user_demo_toefl';

  it('retrieves the 9 sections in the roadmap', async () => {
    const roadmap = await getRoadmap(testUserId);
    assert.equal(roadmap.length, 9);
    assert.equal(roadmap[0].name, 'English Foundation');
    assert.equal(roadmap[2].name, 'Grammar');
  });

  it('retrieves 5 grammar lessons with their mastery levels', async () => {
    const lessons = await getGrammarLessons(testUserId);
    assert.equal(lessons.length, 5);
    const simplePresent = lessons.find((l) => l.slug === 'simple-present');
    assert.ok(simplePresent);
    assert.equal(simplePresent.title, 'Simple Present');
    assert.ok(simplePresent.mastery >= 0);
  });

  it('retrieves a single lesson by slug with formula and questions', async () => {
    const lesson = await getLessonBySlug('present-perfect', testUserId);
    assert.ok(lesson);
    assert.equal(lesson.title, 'Present Perfect');
    assert.ok(lesson.formula?.includes('have/has'));
    assert.equal(lesson.questions.length, 5);
    assert.equal(lesson.questions[0].options.length, 4);
  });

  it('submits an answer, updates attempt, mistake, and recalculates progress in PostgreSQL', async () => {
    const lesson = await getLessonBySlug('simple-present', testUserId);
    assert.ok(lesson);
    const q1 = lesson.questions[0];

    // Submit answer 'B'
    const result = await submitAnswer({
      userId: testUserId,
      questionId: q1.id,
      answer: 'B',
    });

    assert.equal(result.isCorrect, true);
    assert.equal(result.userAnswer, 'B');
    assert.ok(result.newMastery >= 0);

    // Verify attempt exists in database
    const attempt = await prisma.attempt.findFirst({
      where: {
        userId: testUserId,
        questionId: q1.id,
      },
      orderBy: { createdAt: 'desc' },
    });
    assert.ok(attempt);
    assert.equal(attempt.answer, 'B');
  });

  it('retrieves dashboard data with recommended lesson and today learning', async () => {
    const dashboard = await getDashboardData(testUserId);
    assert.ok(dashboard);
    assert.ok(dashboard.user);
    assert.ok(dashboard.recommendedLesson);
    assert.ok(dashboard.todayLearning);
    assert.ok(dashboard.overallStats.totalLessons >= 5);
  });

  it('handles mistake retrieval and resolution', async () => {
    const mistakesGrouped = await getMistakes(testUserId, false);
    assert.ok(Array.isArray(mistakesGrouped));

    if (mistakesGrouped.length > 0 && mistakesGrouped[0].mistakes.length > 0) {
      const firstMistake = mistakesGrouped[0].mistakes[0];
      const resolved = await resolveMistake(firstMistake.id, testUserId);
      assert.equal(resolved, true);

      const check = await prisma.mistake.findUnique({
        where: { id: firstMistake.id },
      });
      assert.equal(check?.resolved, true);
    }
  });
});
