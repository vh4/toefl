import { PrismaClient } from '@prisma/client';
import { COMPLETE_SECTIONS_DATA } from '../src/lib/data/curriculum-data';

const prisma = new PrismaClient();

async function main() {
  console.log('--- Seeding Complete TOEFL Platform Curriculum (Sections 1-9) ---');

  // 1. Ensure Default User
  const user = await prisma.user.upsert({
    where: { id: 'user_demo_toefl' },
    update: {},
    create: {
      id: 'user_demo_toefl',
      email: 'demo@toefl.local',
      name: 'Alex Mercer (TOEFL Scholar)',
    },
  });
  console.log(`✓ User ready: ${user.name} (${user.id})`);

  let totalSectionsSeeded = 0;
  let totalTopicsSeeded = 0;
  let totalLessonsSeeded = 0;
  let totalQuestionsSeeded = 0;

  for (const sData of COMPLETE_SECTIONS_DATA) {
    // 2. Upsert Section
    const section = await prisma.section.upsert({
      where: { slug: sData.slug },
      update: {
        name: sData.name,
        description: sData.description,
        order: sData.order,
      },
      create: {
        name: sData.name,
        slug: sData.slug,
        description: sData.description,
        order: sData.order,
      },
    });
    totalSectionsSeeded++;

    for (const tData of sData.topics) {
      // 3. Upsert Topic
      const topic = await prisma.topic.upsert({
        where: {
          sectionId_slug: {
            sectionId: section.id,
            slug: tData.slug,
          },
        },
        update: {
          name: tData.name,
          description: tData.description,
          order: tData.order,
        },
        create: {
          sectionId: section.id,
          name: tData.name,
          slug: tData.slug,
          description: tData.description,
          order: tData.order,
        },
      });
      totalTopicsSeeded++;

      for (const lData of tData.lessons) {
        // 4. Upsert Lesson
        const lesson = await prisma.lesson.upsert({
          where: { slug: lData.slug },
          update: {
            topicId: topic.id,
            title: lData.title,
            level: lData.level,
            order: lData.order,
            formula: lData.formula || null,
            explanation: lData.explanation,
          },
          create: {
            topicId: topic.id,
            title: lData.title,
            slug: lData.slug,
            level: lData.level,
            order: lData.order,
            formula: lData.formula || null,
            explanation: lData.explanation,
          },
        });
        totalLessonsSeeded++;

        // 5. Upsert Questions & Options
        for (const q of lData.questions) {
          const existingQ = await prisma.question.findFirst({
            where: {
              lessonId: lesson.id,
              order: q.order,
            },
          });

          let questionId = existingQ?.id;
          if (!existingQ) {
            const createdQ = await prisma.question.create({
              data: {
                lessonId: lesson.id,
                question: q.question,
                explanation: q.explanation,
                correctAnswer: q.correctAnswer,
                order: q.order,
              },
            });
            questionId = createdQ.id;
          } else {
            await prisma.question.update({
              where: { id: existingQ.id },
              data: {
                question: q.question,
                explanation: q.explanation,
                correctAnswer: q.correctAnswer,
              },
            });
          }
          totalQuestionsSeeded++;

          // Sync options
          await prisma.questionOption.deleteMany({
            where: { questionId },
          });
          for (const opt of q.options) {
            await prisma.questionOption.create({
              data: {
                questionId: questionId!,
                key: opt.key,
                text: opt.text,
              },
            });
          }

          // Demonstration mistakes in Passive Voice and AWL
          if (
            (lData.slug === 'passive-voice' && (q.order === 1 || q.order === 2 || q.order === 4)) ||
            (lData.slug === 'awl-sublist-1' && q.order === 2)
          ) {
            await prisma.mistake.upsert({
              where: {
                userId_questionId: {
                  userId: user.id,
                  questionId: questionId!,
                },
              },
              update: { resolved: false, reviewCount: 1 },
              create: {
                userId: user.id,
                questionId: questionId!,
                userAnswer: q.correctAnswer === 'A' ? 'B' : 'A',
                resolved: false,
                reviewCount: 1,
              },
            });
          }
        }

        // 6. User progress
        await prisma.progress.upsert({
          where: {
            userId_lessonId: {
              userId: user.id,
              lessonId: lesson.id,
            },
          },
          update: {
            mastery: lData.initialMastery,
            status: lData.initialStatus,
          },
          create: {
            userId: user.id,
            lessonId: lesson.id,
            mastery: lData.initialMastery,
            status: lData.initialStatus,
          },
        });
      }
    }
  }

  console.log(`✓ Seeding completed successfully!`);
  console.log(`  - Sections: ${totalSectionsSeeded}`);
  console.log(`  - Topics: ${totalTopicsSeeded}`);
  console.log(`  - Lessons: ${totalLessonsSeeded}`);
  console.log(`  - Questions: ${totalQuestionsSeeded}`);
}

main()
  .catch((e) => {
    console.error('Seeding error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
