import { COMPLETE_SECTIONS_DATA } from './curriculum-data';

export interface FallbackTopic {
  id: string;
  name: string;
  slug: string;
  description: string;
  lessonCount: number;
  completedLessons: number;
  averageMastery: number;
  status: 'COMPLETED' | 'IN_PROGRESS' | 'LOCKED' | 'NOT_STARTED';
}

export interface FallbackSection {
  id: string;
  name: string;
  slug: string;
  description: string;
  order: number;
  status: 'COMPLETED' | 'IN_PROGRESS' | 'AVAILABLE' | 'LOCKED';
  progressPercentage: number;
  topics: FallbackTopic[];
}

export interface FallbackQuestionOption {
  id: string;
  key: string;
  text: string;
}

export interface FallbackQuestion {
  id: string;
  question: string;
  explanation: string;
  correctAnswer: string;
  order: number;
  options: FallbackQuestionOption[];
}

export interface FallbackLesson {
  id: string;
  title: string;
  slug: string;
  level: string;
  order: number;
  questionCount: number;
  mastery: number;
  status: string;
  unresolvedMistakesCount: number;
  formula?: string;
  explanation: string;
  topicName: string;
  sectionName: string;
  sectionSlug: string;
  questions: FallbackQuestion[];
}

// ──────────────────────────────────────────────────────────
// Build FALLBACK_SECTIONS & FALLBACK_LESSONS from curriculum data
// ──────────────────────────────────────────────────────────
export const FALLBACK_SECTIONS: FallbackSection[] = COMPLETE_SECTIONS_DATA.map((sec, secIdx) => {
  let totalLessonsInSection = 0;
  let totalMasterySum = 0;
  let completedLessonsInSection = 0;

  const topics: FallbackTopic[] = sec.topics.map((top, topIdx) => {
    const lessonCount = top.lessons.length;
    totalLessonsInSection += lessonCount;

    let topicMasterySum = 0;
    let completedCount = 0;

    for (const les of top.lessons) {
      topicMasterySum += les.initialMastery;
      if (les.initialMastery >= 80) {
        completedCount++;
      }
    }

    totalMasterySum += topicMasterySum;
    completedLessonsInSection += completedCount;

    const avgMastery = lessonCount > 0 ? Math.round(topicMasterySum / lessonCount) : 0;
    let topicStatus: FallbackTopic['status'] = 'NOT_STARTED';
    if (lessonCount > 0 && completedCount === lessonCount) {
      topicStatus = 'COMPLETED';
    } else if (avgMastery > 0 || completedCount > 0) {
      topicStatus = 'IN_PROGRESS';
    } else if (sec.status === 'LOCKED') {
      topicStatus = 'LOCKED';
    }

    return {
      id: `top-${secIdx + 1}-${topIdx + 1}`,
      name: top.name,
      slug: top.slug,
      description: top.description,
      lessonCount,
      completedLessons: completedCount,
      averageMastery: avgMastery,
      status: topicStatus,
    };
  });

  const progressPercentage =
    totalLessonsInSection > 0
      ? Math.round((completedLessonsInSection / totalLessonsInSection) * 100)
      : 0;

  return {
    id: `sec-${sec.order}`,
    name: sec.name,
    slug: sec.slug,
    description: sec.description,
    order: sec.order,
    status: sec.status,
    progressPercentage: sec.status === 'COMPLETED' ? 100 : progressPercentage,
    topics,
  };
});

export const FALLBACK_LESSONS: FallbackLesson[] = [];

for (const sec of COMPLETE_SECTIONS_DATA) {
  for (const top of sec.topics) {
    for (const les of top.lessons) {
      const questions: FallbackQuestion[] = les.questions.map((q) => ({
        id: `q-${les.slug}-${q.order}`,
        question: q.question,
        explanation: q.explanation,
        correctAnswer: q.correctAnswer,
        order: q.order,
        options: q.options.map((opt) => ({
          id: `opt-${les.slug}-${q.order}-${opt.key.toLowerCase()}`,
          key: opt.key,
          text: opt.text,
        })),
      }));

      FALLBACK_LESSONS.push({
        id: `les-${les.slug}`,
        title: les.title,
        slug: les.slug,
        level: les.level,
        order: les.order,
        questionCount: questions.length,
        mastery: les.initialMastery,
        status: les.initialStatus,
        unresolvedMistakesCount: les.slug === 'passive-voice' ? 3 : 0,
        formula: les.formula,
        explanation: les.explanation,
        topicName: top.name,
        sectionName: sec.name,
        sectionSlug: sec.slug,
        questions,
      });
    }
  }
}

export const FALLBACK_MISTAKES = [
  {
    lessonId: 'les-passive-voice',
    lessonTitle: 'Passive Voice',
    lessonSlug: 'passive-voice',
    count: 3,
    mistakes: [
      {
        id: 'mst-pv-1',
        questionId: 'q-passive-voice-1',
        questionText: 'Photosynthetic pigments in plant cells _____ by specific wavelengths of visible light.',
        userAnswer: 'A',
        correctAnswer: 'B',
        explanation: 'The pigments receive the action from the light; plural subject requires "are activated".',
        reviewCount: 1,
        resolved: false,
        updatedAt: new Date(),
        lessonId: 'les-passive-voice',
        lessonTitle: 'Passive Voice',
        lessonSlug: 'passive-voice',
        options: [
          { key: 'A', text: 'activates' },
          { key: 'B', text: 'are activated' },
          { key: 'C', text: 'activating' },
          { key: 'D', text: 'activate' },
        ],
      },
      {
        id: 'mst-pv-2',
        questionId: 'q-passive-voice-2',
        questionText: 'The ancient papyrus manuscript _____ by prominent philologists before its display in the museum.',
        userAnswer: 'B',
        correctAnswer: 'A',
        explanation: 'The singular subject "manuscript" was acted upon in the past, requiring the past passive "was authenticated".',
        reviewCount: 1,
        resolved: false,
        updatedAt: new Date(),
        lessonId: 'les-passive-voice',
        lessonTitle: 'Passive Voice',
        lessonSlug: 'passive-voice',
        options: [
          { key: 'A', text: 'was authenticated' },
          { key: 'B', text: 'authenticating' },
          { key: 'C', text: 'authenticated' },
          { key: 'D', text: 'is authenticate' },
        ],
      },
      {
        id: 'mst-pv-4',
        questionId: 'q-passive-voice-4',
        questionText: 'Anomalous subterranean vibrations _____ by seismologists forty-eight hours prior to the volcanic eruption.',
        userAnswer: 'B',
        correctAnswer: 'A',
        explanation: 'The plural subject "vibrations" requires "were detected".',
        reviewCount: 1,
        resolved: false,
        updatedAt: new Date(),
        lessonId: 'les-passive-voice',
        lessonTitle: 'Passive Voice',
        lessonSlug: 'passive-voice',
        options: [
          { key: 'A', text: 'were detected' },
          { key: 'B', text: 'was detected' },
          { key: 'C', text: 'detected' },
          { key: 'D', text: 'detecting' },
        ],
      },
    ],
  },
];
