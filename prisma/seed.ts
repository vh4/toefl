import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('--- Seeding TOEFL Platform Data ---');

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

  // 2. Initial Sections (all 9 required sections)
  const sectionsData = [
    { name: 'English Foundation', slug: 'english-foundation', description: 'Core grammatical fundamentals, sentence dynamics, and academic phrasing.', order: 1 },
    { name: 'Vocabulary', slug: 'vocabulary', description: 'Academic Word List (AWL), prefixes, suffixes, and contextual connotation.', order: 2 },
    { name: 'Grammar', slug: 'grammar', description: 'Comprehensive grammar rules tested in TOEFL reading, writing, and structure.', order: 3 },
    { name: 'Reading', slug: 'reading', description: 'Main idea, inference, negative factual, vocabulary in context, and insertion.', order: 4 },
    { name: 'Listening', slug: 'listening', description: 'Lectures, campus conversations, pragmatic understanding, and synthesis.', order: 5 },
    { name: 'Speaking', slug: 'speaking', description: 'Independent opinion task and integrated academic response templates.', order: 6 },
    { name: 'Writing', slug: 'writing', description: 'Integrated lecture-reading synthesis and academic discussion writing.', order: 7 },
    { name: 'TOEFL Practice', slug: 'toefl-practice', description: 'Sectional drills with timed condition simulations.', order: 8 },
    { name: 'Mock TOEFL', slug: 'mock-toefl', description: 'Full-length diagnostic exams with scaled 0-120 scoring prediction.', order: 9 },
  ];

  const sections: Record<string, string> = {};
  for (const s of sectionsData) {
    const record = await prisma.section.upsert({
      where: { slug: s.slug },
      update: { name: s.name, description: s.description, order: s.order },
      create: s,
    });
    sections[s.slug] = record.id;
  }
  console.log(`✓ ${sectionsData.length} Sections synchronized.`);

  // 3. Create Grammar Topic
  const grammarTopic = await prisma.topic.upsert({
    where: {
      sectionId_slug: {
        sectionId: sections['grammar'],
        slug: 'core-syntax-and-tenses',
      },
    },
    update: {
      name: 'Core Syntax & Tenses',
      description: 'High-frequency grammar patterns tested across all TOEFL sections.',
      order: 1,
    },
    create: {
      sectionId: sections['grammar'],
      name: 'Core Syntax & Tenses',
      slug: 'core-syntax-and-tenses',
      description: 'High-frequency grammar patterns tested across all TOEFL sections.',
      order: 1,
    },
  });

  // Also create a Foundation topic for Roadmap illustration
  await prisma.topic.upsert({
    where: {
      sectionId_slug: {
        sectionId: sections['english-foundation'],
        slug: 'academic-sentence-structure',
      },
    },
    update: {},
    create: {
      sectionId: sections['english-foundation'],
      name: 'Academic Sentence Structure',
      slug: 'academic-sentence-structure',
      description: 'Subjects, predicates, clauses, and essential conjunctions.',
      order: 1,
    },
  });

  // 4. The 5 Grammar Lessons with Formula, Explanation, Examples & 5 Questions
  const lessonsData = [
    {
      title: 'Simple Present',
      slug: 'simple-present',
      level: 'Beginner',
      order: 1,
      formula: 'Subject + V1(s/es) + Complement | Negative: Subject + do/does not + V1',
      explanation:
        'The Simple Present expresses habitual actions, permanent facts, scientific truths, and scheduled occurrences. In academic TOEFL texts, verbs must strictly agree in number with their subjects, even when separated by complex prepositional phrases, participle clauses, or appositives.',
      initialMastery: 80,
      initialStatus: 'MASTERED',
      examples: [
        'Photosynthesis occurs when chlorophyll absorbs solar electromagnetic radiation.',
        'The international committee reviews higher education accreditation standards annually.',
        'Archaeologists investigate ancient settlements to understand early urban trade networks.',
      ],
      questions: [
        {
          question: "The Amazon River basin _____ approximately twenty percent of the Earth's total river flow.",
          explanation: '"The Amazon River basin" is a singular noun phrase requiring the singular verb form "contains".',
          correctAnswer: 'B',
          order: 1,
          options: [
            { key: 'A', text: 'contain' },
            { key: 'B', text: 'contains' },
            { key: 'C', text: 'containing' },
            { key: 'D', text: 'is contained' },
          ],
        },
        {
          question: 'Unlike migratory birds, the arctic fox _____ active throughout the harsh winter months.',
          explanation: 'The singular subject "the arctic fox" requires the third-person singular present verb "remains".',
          correctAnswer: 'B',
          order: 2,
          options: [
            { key: 'A', text: 'remain' },
            { key: 'B', text: 'remains' },
            { key: 'C', text: 'remaining' },
            { key: 'D', text: 'have remained' },
          ],
        },
        {
          question: 'Ocean currents _____ a crucial role in regulating global climate patterns.',
          explanation: 'The plural subject "Ocean currents" takes the base plural verb "play".',
          correctAnswer: 'B',
          order: 3,
          options: [
            { key: 'A', text: 'plays' },
            { key: 'B', text: 'play' },
            { key: 'C', text: 'playing' },
            { key: 'D', text: 'is playing' },
          ],
        },
        {
          question: 'In linguistics, a morpheme _____ the smallest meaningful constituent of a language.',
          explanation: '"A morpheme" is a singular grammatical concept, requiring "represents".',
          correctAnswer: 'A',
          order: 4,
          options: [
            { key: 'A', text: 'represents' },
            { key: 'B', text: 'represent' },
            { key: 'C', text: 'representing' },
            { key: 'D', text: 'are represented' },
          ],
        },
        {
          question: 'Geothermal energy plants typically _____ steam from deep reservoirs to drive turbines.',
          explanation: 'The plural subject "Geothermal energy plants" takes the base form "utilize".',
          correctAnswer: 'B',
          order: 5,
          options: [
            { key: 'A', text: 'utilizes' },
            { key: 'B', text: 'utilize' },
            { key: 'C', text: 'utilizing' },
            { key: 'D', text: 'to utilize' },
          ],
        },
      ],
    },
    {
      title: 'Simple Past',
      slug: 'simple-past',
      level: 'Beginner',
      order: 2,
      formula: 'Subject + V2 (ed / irregular) + Complement | Negative: Subject + did not + V1',
      explanation:
        'The Simple Past denotes completed historical actions, discoveries, or events tied to a finished timeframe (e.g., in 1928, during the Pleistocene, prior to the revolution). TOEFL historical passages frequently rely on simple past constructions to delineate chronological sequences.',
      initialMastery: 65,
      initialStatus: 'NEEDS_REVIEW',
      examples: [
        'Marie Curie discovered radium and polonium in 1898 after analyzing tons of pitchblende.',
        'The catastrophic eruption of Mount Tambora in 1815 caused significant global climate cooling.',
        'Early hominids developed rudimentary stone tools to adapt to changing savanna ecosystems.',
      ],
      questions: [
        {
          question: 'During the Industrial Revolution, mechanized textile production rapidly _____ traditional handicrafts.',
          explanation: '"During the Industrial Revolution" pinpoints a finished historical period, requiring the simple past "replaced".',
          correctAnswer: 'B',
          order: 1,
          options: [
            { key: 'A', text: 'replaces' },
            { key: 'B', text: 'replaced' },
            { key: 'C', text: 'replacing' },
            { key: 'D', text: 'replace' },
          ],
        },
        {
          question: 'In the early twentieth century, astronomers _____ that our galaxy is one of billions in the observable universe.',
          explanation: 'The timeframe "In the early twentieth century" necessitates the simple past verb "deduced".',
          correctAnswer: 'B',
          order: 2,
          options: [
            { key: 'A', text: 'deduce' },
            { key: 'B', text: 'deduced' },
            { key: 'C', text: 'deducing' },
            { key: 'D', text: 'have deduced' },
          ],
        },
        {
          question: 'The ancient Maya civilization _____ an intricate hieroglyphic writing system on stone stelae.',
          explanation: 'Historical facts concerning antiquity use the past tense "constructed".',
          correctAnswer: 'A',
          order: 3,
          options: [
            { key: 'A', text: 'constructed' },
            { key: 'B', text: 'constructs' },
            { key: 'C', text: 'constructing' },
            { key: 'D', text: 'is constructed' },
          ],
        },
        {
          question: 'In 1928, Alexander Fleming accidentally _____ penicillin while culturing staphylococcus bacteria.',
          explanation: '"In 1928" demands the simple past tense "discovered".',
          correctAnswer: 'A',
          order: 4,
          options: [
            { key: 'A', text: 'discovered' },
            { key: 'B', text: 'discovers' },
            { key: 'C', text: 'discovering' },
            { key: 'D', text: 'has discovered' },
          ],
        },
        {
          question: 'The construction of the Erie Canal significantly _____ bulk freight transportation costs in 1825.',
          explanation: 'Historical consequence completed in 1825 requires "reduced".',
          correctAnswer: 'B',
          order: 5,
          options: [
            { key: 'A', text: 'reduces' },
            { key: 'B', text: 'reduced' },
            { key: 'C', text: 'reducing' },
            { key: 'D', text: 'will reduce' },
          ],
        },
      ],
    },
    {
      title: 'Present Perfect',
      slug: 'present-perfect',
      level: 'Intermediate',
      order: 3,
      formula: 'Subject + have/has + Past Participle (V3) | Negative: Subject + have/has not + V3',
      explanation:
        'The Present Perfect connects past occurrences directly to the present moment. It denotes actions occurring at an indefinite past time, actions enduring from the past into the present (often with "since" or "for"), and newly completed discoveries with ongoing academic relevance.',
      initialMastery: 30,
      initialStatus: 'LEARNING',
      examples: [
        'I have finished my homework.',
        'She has lived in Japan for three years.',
        'They have already completed the project.',
      ],
      questions: [
        {
          question: 'She _____ already finished the report.',
          explanation: '"She" is third-person singular and requires the auxiliary "has".',
          correctAnswer: 'B',
          order: 1,
          options: [
            { key: 'A', text: 'have' },
            { key: 'B', text: 'has' },
            { key: 'C', text: 'having' },
            { key: 'D', text: 'had' },
          ],
        },
        {
          question: 'Marine biologists _____ numerous deep-sea hydrothermal vents that support chemosynthetic life.',
          explanation: 'The plural subject "Marine biologists" agrees with the auxiliary "have uncovered".',
          correctAnswer: 'B',
          order: 2,
          options: [
            { key: 'A', text: 'has uncovered' },
            { key: 'B', text: 'have uncovered' },
            { key: 'C', text: 'uncovering' },
            { key: 'D', text: 'uncovers' },
          ],
        },
        {
          question: 'Since the implementation of stricter clean air regulations, industrial sulfur emissions _____ noticeably.',
          explanation: 'The temporal clause "Since..." indicates an action continuing to the present; plural "emissions" takes "have declined".',
          correctAnswer: 'B',
          order: 3,
          options: [
            { key: 'A', text: 'declined' },
            { key: 'B', text: 'have declined' },
            { key: 'C', text: 'has declined' },
            { key: 'D', text: 'declining' },
          ],
        },
        {
          question: 'Recent satellite telemetry _____ accelerating mass loss across sub-polar glaciers.',
          explanation: '"Satellite telemetry" is singular/uncountable, requiring "has documented".',
          correctAnswer: 'B',
          order: 4,
          options: [
            { key: 'A', text: 'have documented' },
            { key: 'B', text: 'has documented' },
            { key: 'C', text: 'documenting' },
            { key: 'D', text: 'were documenting' },
          ],
        },
        {
          question: 'Several migratory mammal populations _____ their traditional routes in response to urban fragmentation.',
          explanation: 'The plural subject "populations" takes "have altered".',
          correctAnswer: 'B',
          order: 5,
          options: [
            { key: 'A', text: 'has altered' },
            { key: 'B', text: 'have altered' },
            { key: 'C', text: 'altering' },
            { key: 'D', text: 'is altering' },
          ],
        },
      ],
    },
    {
      title: 'Passive Voice',
      slug: 'passive-voice',
      level: 'Intermediate',
      order: 4,
      formula: 'Subject + BE (am/is/are/was/were/been/being) + Past Participle (V3) (+ by Agent)',
      explanation:
        'The Passive Voice shifts emphasis from the actor to the patient or result of the action. Scientific literature and academic TOEFL readings overwhelmingly employ passive structures to maintain objective distance and highlight empirical phenomena over researcher agency.',
      initialMastery: 42,
      initialStatus: 'LEARNING',
      examples: [
        'The greenhouse gases are absorbed by oceans and forests.',
        'The telescope was invented in the Netherlands during the early seventeenth century.',
        'Comprehensive climatological data will be analyzed by the research consortium next month.',
      ],
      questions: [
        {
          question: 'Photosynthetic pigments in plant cells _____ by specific wavelengths of visible light.',
          explanation: 'The pigments receive the action from the light; plural subject requires "are activated".',
          correctAnswer: 'B',
          order: 1,
          options: [
            { key: 'A', text: 'activates' },
            { key: 'B', text: 'are activated' },
            { key: 'C', text: 'activating' },
            { key: 'D', text: 'activate' },
          ],
        },
        {
          question: 'The ancient papyrus manuscript _____ by prominent philologists before its display in the museum.',
          explanation: 'The singular subject "manuscript" was acted upon, requiring the past passive "was authenticated".',
          correctAnswer: 'A',
          order: 2,
          options: [
            { key: 'A', text: 'was authenticated' },
            { key: 'B', text: 'authenticating' },
            { key: 'C', text: 'authenticated' },
            { key: 'D', text: 'is authenticate' },
          ],
        },
        {
          question: 'Rare earth minerals _____ in the manufacturing of high-efficiency renewable energy generators.',
          explanation: 'The plural subject "minerals" takes the passive plural "are widely used".',
          correctAnswer: 'B',
          order: 3,
          options: [
            { key: 'A', text: 'is widely used' },
            { key: 'B', text: 'are widely used' },
            { key: 'C', text: 'widely using' },
            { key: 'D', text: 'use widely' },
          ],
        },
        {
          question: 'Anomalous subterranean vibrations _____ by seismologists forty-eight hours prior to the volcanic eruption.',
          explanation: 'The plural subject "vibrations" requires "were detected".',
          correctAnswer: 'A',
          order: 4,
          options: [
            { key: 'A', text: 'were detected' },
            { key: 'B', text: 'was detected' },
            { key: 'C', text: 'detected' },
            { key: 'D', text: 'detecting' },
          ],
        },
        {
          question: 'Federal research endowment funding _____ for carbon sequestration initiatives in the preceding budget cycle.',
          explanation: '"Funding" is an uncountable singular noun, so the singular passive "was allocated" is grammatically sound.',
          correctAnswer: 'A',
          order: 5,
          options: [
            { key: 'A', text: 'was allocated' },
            { key: 'B', text: 'were allocated' },
            { key: 'C', text: 'allocated' },
            { key: 'D', text: 'allocating' },
          ],
        },
      ],
    },
    {
      title: 'Relative Clauses',
      slug: 'relative-clauses',
      level: 'Intermediate',
      order: 5,
      formula: 'Noun + [Relative Pronoun (who/which/that/whose/where/when)] + [Clause]',
      explanation:
        'Relative clauses (adjective clauses) specify or describe a preceding noun. In TOEFL items, check for pronoun agreement (who for persons, which/that for objects, whose for possession) and verify that no redundant object pronouns linger inside the subordinate clause.',
      initialMastery: 0,
      initialStatus: 'NOT_STARTED',
      examples: [
        'The evolutionary biologist who formulated the punctuated equilibrium model delivered the keynote address.',
        'The algorithmic matrix, which was developed at Caltech, optimizes orbital satellite trajectories.',
        'The observatory where astronomical spectroscopic measurements were first recorded celebrated its centennial.',
      ],
      questions: [
        {
          question: 'Geophysicists study continental plates, _____ interactions generate intense tectonic stress along fault lines.',
          explanation: 'The possessive relative pronoun "whose" is required before "interactions" to signal possession.',
          correctAnswer: 'A',
          order: 1,
          options: [
            { key: 'A', text: 'whose' },
            { key: 'B', text: 'which' },
            { key: 'C', text: 'who' },
            { key: 'D', text: 'where' },
          ],
        },
        {
          question: 'The ancient astrological scroll, _____ was deciphered by paleographers, contains accurate lunar tables.',
          explanation: 'A non-defining relative clause referring to an object (scroll) marked by commas requires "which".',
          correctAnswer: 'A',
          order: 2,
          options: [
            { key: 'A', text: 'which' },
            { key: 'B', text: 'who' },
            { key: 'C', text: 'whom' },
            { key: 'D', text: 'what' },
          ],
        },
        {
          question: 'Composite crystalline materials _____ conduct electrical current with zero resistance are termed superconductors.',
          explanation: 'The restrictive relative pronoun "that" (or which) functions as subject modifying "materials".',
          correctAnswer: 'A',
          order: 3,
          options: [
            { key: 'A', text: 'that' },
            { key: 'B', text: 'who' },
            { key: 'C', text: 'whom' },
            { key: 'D', text: 'where' },
          ],
        },
        {
          question: 'The senior astrophysicist _____ oversees the deep-space radio telescope announced new pulsar findings.',
          explanation: '"The senior astrophysicist" is a person acting as the subject of the clause, requiring "who".',
          correctAnswer: 'A',
          order: 4,
          options: [
            { key: 'A', text: 'who' },
            { key: 'B', text: 'which' },
            { key: 'C', text: 'whose' },
            { key: 'D', text: 'where' },
          ],
        },
        {
          question: 'The Pleistocene Epoch was an epoch _____ extensive continental glaciation repeatedly reshaped terrestrial topography.',
          explanation: '"epoch" denotes a temporal period, requiring the relative temporal adverb "when".',
          correctAnswer: 'A',
          order: 5,
          options: [
            { key: 'A', text: 'when' },
            { key: 'B', text: 'which' },
            { key: 'C', text: 'where' },
            { key: 'D', text: 'who' },
          ],
        },
      ],
    },
  ];

  for (const lData of lessonsData) {
    // Upsert lesson
    const lesson = await prisma.lesson.upsert({
      where: { slug: lData.slug },
      update: {
        title: lData.title,
        level: lData.level,
        order: lData.order,
        formula: lData.formula,
        explanation: `${lData.explanation}\n\n### Examples\n${lData.examples.map((ex, i) => `${i + 1}. ${ex}`).join('\n')}`,
      },
      create: {
        topicId: grammarTopic.id,
        title: lData.title,
        slug: lData.slug,
        level: lData.level,
        order: lData.order,
        formula: lData.formula,
        explanation: `${lData.explanation}\n\n### Examples\n${lData.examples.map((ex, i) => `${i + 1}. ${ex}`).join('\n')}`,
      },
    });

    // Upsert questions
    for (const q of lData.questions) {
      // Find existing or create
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

      // If this is Passive Voice Q1, Q2 or Present Perfect Q1, add a seed mistake for demonstration
      if (lData.slug === 'passive-voice' && (q.order === 1 || q.order === 2 || q.order === 4)) {
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

    // Set initial user progress
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

    console.log(`✓ Lesson seeded: ${lesson.title} (${lData.questions.length} questions, initial mastery: ${lData.initialMastery}%)`);
  }

  console.log('✓ Seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error('Seeding error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
