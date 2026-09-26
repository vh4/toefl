import prisma from '@/lib/db/prisma';
import { FALLBACK_SECTIONS } from '@/lib/data/fallback-content';

export const DEFAULT_USER_ID = 'user_demo_toefl';

export interface RoadmapTopicItem {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  lessonCount: number;
  completedLessons: number;
  averageMastery: number;
  status: 'COMPLETED' | 'IN_PROGRESS' | 'LOCKED' | 'NOT_STARTED';
}

export interface RoadmapSectionItem {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  order: number;
  status: 'COMPLETED' | 'IN_PROGRESS' | 'LOCKED' | 'AVAILABLE';
  progressPercentage: number;
  topics: RoadmapTopicItem[];
}

export async function getRoadmap(userId: string = DEFAULT_USER_ID): Promise<RoadmapSectionItem[]> {
  try {
    const sections = await prisma.section.findMany({
      orderBy: { order: 'asc' },
      include: {
        topics: {
          orderBy: { order: 'asc' },
          include: {
            lessons: {
              orderBy: { order: 'asc' },
              include: {
                progress: {
                  where: { userId },
                },
              },
            },
          },
        },
      },
    });

    if (!sections || sections.length === 0) {
      return FALLBACK_SECTIONS;
    }

  return sections.map((sec, secIdx) => {
    let totalLessonsInSection = 0;
    let completedLessonsInSection = 0;

    const topics: RoadmapTopicItem[] = sec.topics.map((top) => {
      const lessonCount = top.lessons.length;
      let totalMastery = 0;
      let completedLessons = 0;

      for (const lesson of top.lessons) {
        const prog = lesson.progress[0];
        const mastery = prog ? prog.mastery : 0;
        totalMastery += mastery;
        if (mastery >= 80) {
          completedLessons += 1;
        }
      }

      totalLessonsInSection += lessonCount;
      completedLessonsInSection += completedLessons;

      const avgMastery = lessonCount > 0 ? Math.round(totalMastery / lessonCount) : 0;
      let topicStatus: RoadmapTopicItem['status'] = 'NOT_STARTED';
      if (lessonCount > 0 && completedLessons === lessonCount) {
        topicStatus = 'COMPLETED';
      } else if (avgMastery > 0 || completedLessons > 0) {
        topicStatus = 'IN_PROGRESS';
      }

      return {
        id: top.id,
        name: top.name,
        slug: top.slug,
        description: top.description,
        lessonCount,
        completedLessons,
        averageMastery: avgMastery,
        status: topicStatus,
      };
    });

    const progressPercentage =
      totalLessonsInSection > 0
        ? Math.round((completedLessonsInSection / totalLessonsInSection) * 100)
        : secIdx <= 2
        ? 15
        : 0;

    let sectionStatus: RoadmapSectionItem['status'] = 'AVAILABLE';
    if (progressPercentage >= 100) {
      sectionStatus = 'COMPLETED';
    } else if (progressPercentage > 0) {
      sectionStatus = 'IN_PROGRESS';
    } else if (secIdx > 3) {
      sectionStatus = 'LOCKED';
    }

    return {
      id: sec.id,
      name: sec.name,
      slug: sec.slug,
      description: sec.description,
      order: sec.order,
      status: sectionStatus,
      progressPercentage,
      topics,
    };
  });
  } catch (error) {
    console.warn('Database offline or unreachable, using fallback roadmap data:', error);
    return FALLBACK_SECTIONS;
  }
}
