/**
 * Comprehensive TOEFL Curriculum Data for Sections 1 to 9
 * Contains complete sections, topics, lessons, formulas, explanations, and authentic questions.
 */

export interface QuestionOptionData {
  key: string;
  text: string;
}

export interface QuestionData {
  order: number;
  question: string;
  explanation: string;
  correctAnswer: string;
  options: QuestionOptionData[];
}

export interface LessonData {
  title: string;
  slug: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  order: number;
  formula?: string;
  explanation: string;
  initialMastery: number;
  initialStatus: 'NOT_STARTED' | 'IN_PROGRESS' | 'NEEDS_REVIEW' | 'MASTERED';
  questions: QuestionData[];
}

export interface TopicData {
  name: string;
  slug: string;
  description: string;
  order: number;
  lessons: LessonData[];
}

export interface SectionData {
  name: string;
  slug: string;
  description: string;
  order: number;
  status: 'COMPLETED' | 'IN_PROGRESS' | 'AVAILABLE' | 'LOCKED';
  topics: TopicData[];
}

export const COMPLETE_SECTIONS_DATA: SectionData[] = [
  // ──────────────────────────────────────────────────────────
  // SECTION 1: English Foundation
  // ──────────────────────────────────────────────────────────
  {
    name: 'English Foundation',
    slug: 'english-foundation',
    description: 'Core grammatical fundamentals, sentence dynamics, and academic phrasing.',
    order: 1,
    status: 'COMPLETED',
    topics: [
      {
        name: 'Academic Sentence Structure',
        slug: 'academic-sentence-structure',
        description: 'Subjects, predicates, clauses, and essential conjunctions.',
        order: 1,
        lessons: [
          {
            title: 'Sentence Elements & Clauses',
            slug: 'sentence-elements-clauses',
            level: 'Beginner',
            order: 1,
            formula: 'Independent Clause: Subject + Verb (+ Object) | Complex: Subordinator + S + V, S + V',
            explanation:
              'Every complete English sentence requires at least one independent clause containing a subject and a finite verb. TOEFL tests your ability to distinguish complete sentences from fragments and run-ons.\n\n### Examples\n1. Although the committee proposed several amendments, the principal legislation remained unchanged.\n2. Photosynthesis is the fundamental biochemical process by which plants convert solar irradiance into glucose.\n3. The satellite, which was launched last November, transmits real-time atmospheric measurements to ground stations.',
            initialMastery: 85,
            initialStatus: 'MASTERED',
            questions: [
              {
                order: 1,
                question: '_____ throughout the forested areas of North America, the red squirrel feeds primarily on conifer seeds.',
                explanation: 'A participle phrase "Found throughout..." correctly modifies the subject "the red squirrel". Options B, C, and D create sentence structure errors.',
                correctAnswer: 'A',
                options: [
                  { key: 'A', text: 'Found' },
                  { key: 'B', text: 'It is found' },
                  { key: 'C', text: 'Finding it' },
                  { key: 'D', text: 'Because found' },
                ],
              },
              {
                order: 2,
                question: 'The Appalachian Mountain range _____ one of the oldest geological formations on the North American continent.',
                explanation: 'The sentence requires a finite verb for the singular subject "The Appalachian Mountain range". "Is" is the correct verb.',
                correctAnswer: 'C',
                options: [
                  { key: 'A', text: 'being' },
                  { key: 'B', text: 'which is' },
                  { key: 'C', text: 'is' },
                  { key: 'D', text: 'to be' },
                ],
              },
              {
                order: 3,
                question: 'Not only _____ water to survive, but desert flora must also minimize moisture transpiration during daytime hours.',
                explanation: 'Negative correlative "Not only" at the beginning of a clause triggers subject-auxiliary inversion: "do desert plants require".',
                correctAnswer: 'B',
                options: [
                  { key: 'A', text: 'desert plants require' },
                  { key: 'B', text: 'do desert plants require' },
                  { key: 'C', text: 'requiring desert plants' },
                  { key: 'D', text: 'desert plants do require' },
                ],
              },
              {
                order: 4,
                question: 'Marine bioluminescence occurs _____ luciferin molecules react with molecular oxygen in the presence of an enzyme.',
                explanation: 'The dependent adverbial clause of time/condition requires the subordinator "when".',
                correctAnswer: 'A',
                options: [
                  { key: 'A', text: 'when' },
                  { key: 'B', text: 'during' },
                  { key: 'C', text: 'which' },
                  { key: 'D', text: 'that' },
                ],
              },
              {
                order: 5,
                question: 'Archaeological evidence indicates that early inhabitants of the fertile crescent _____ irrigation channels around 6000 BCE.',
                explanation: 'The subordinate clause requires a past tense verb "constructed" to match the specific historical timeframe "around 6000 BCE".',
                correctAnswer: 'D',
                options: [
                  { key: 'A', text: 'construct' },
                  { key: 'B', text: 'constructing' },
                  { key: 'C', text: 'to construct' },
                  { key: 'D', text: 'constructed' },
                ],
              },
            ],
          },
          {
            title: 'Conjunctions & Transitions',
            slug: 'conjunctions-transitions',
            level: 'Beginner',
            order: 2,
            formula: 'Coordinating: FANBOYS | Subordinating: Although/Because | Conjunctive Adverbs: S + V; however, S + V',
            explanation:
              'Academic discourse relies heavily on precise logical connectors. Coordinating conjunctions join equal grammatical units, while conjunctive adverbs show relationships between independent clauses.\n\n### Examples\n1. The experimental vaccine showed high efficacy; nevertheless, extensive longitudinal trials are still required.\n2. Despite severe climatic anomalies during the Pleistocene, megafauna persisted across diverse glacial refugia.\n3. Furthermore, recent spectroscopic analyses indicate that the comet contains abundant organic molecules.',
            initialMastery: 80,
            initialStatus: 'MASTERED',
            questions: [
              {
                order: 1,
                question: '_____ the severe droughts of the late fourteenth century, agricultural output in the river valley plummeted.',
                explanation: '"Due to" is a prepositional phrase correctly followed by the noun phrase "the severe droughts". "Although" and "because" require full clauses.',
                correctAnswer: 'B',
                options: [
                  { key: 'A', text: 'Although' },
                  { key: 'B', text: 'Due to' },
                  { key: 'C', text: 'Because' },
                  { key: 'D', text: 'Whereas' },
                ],
              },
              {
                order: 2,
                question: 'The satellite lost contact with ground telemetry; _____, autonomous protocols oriented its solar panels toward the sun.',
                explanation: 'A semicolon and comma framing a transition showing result or sequence requires the conjunctive adverb "consequently".',
                correctAnswer: 'A',
                options: [
                  { key: 'A', text: 'consequently' },
                  { key: 'B', text: 'although' },
                  { key: 'C', text: 'despite' },
                  { key: 'D', text: 'such as' },
                ],
              },
              {
                order: 3,
                question: 'Deep-sea hydrothermal vents emit superheated mineral fluids, _____ surrounding abyssal ocean temperatures hover near freezing.',
                explanation: 'The contrasting clause connector "whereas" shows direct comparison between two conditions.',
                correctAnswer: 'C',
                options: [
                  { key: 'A', text: 'in spite of' },
                  { key: 'B', text: 'because of' },
                  { key: 'C', text: 'whereas' },
                  { key: 'D', text: 'despite' },
                ],
              },
              {
                order: 4,
                question: '_____ the initial trials failed to produce conclusive data, the researchers secured additional grant funding to redesign the methodology.',
                explanation: '"Even though" functions as a subordinating conjunction introducing the dependent clause of concession.',
                correctAnswer: 'D',
                options: [
                  { key: 'A', text: 'In spite' },
                  { key: 'B', text: 'Despite' },
                  { key: 'C', text: 'Regardless' },
                  { key: 'D', text: 'Even though' },
                ],
              },
              {
                order: 5,
                question: 'The expedition team lacked sufficient potable water, _____ did they have reliable satellite communication equipment.',
                explanation: 'Negative coordination with subject-auxiliary inversion requires "nor": "nor did they have".',
                correctAnswer: 'B',
                options: [
                  { key: 'A', text: 'or' },
                  { key: 'B', text: 'nor' },
                  { key: 'C', text: 'and' },
                  { key: 'D', text: 'either' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────────────────
  // SECTION 2: Vocabulary
  // ──────────────────────────────────────────────────────────
  {
    name: 'Vocabulary',
    slug: 'vocabulary',
    description: 'Academic Word List (AWL), prefixes, suffixes, and contextual connotation.',
    order: 2,
    status: 'IN_PROGRESS',
    topics: [
      {
        name: 'Academic Word List (AWL) & Collocations',
        slug: 'awl-essentials',
        description: 'Core university textbook vocabulary, roots, prefixes, and academic collocations.',
        order: 1,
        lessons: [
          {
            title: 'AWL High-Frequency Sublist 1',
            slug: 'awl-sublist-1',
            level: 'Intermediate',
            order: 1,
            formula: 'Core Lemmas: analyze, concept, constitute, establish, derive, indicate, principle, significant',
            explanation:
              'Sublist 1 contains the 60 most frequent word families across academic university textbooks, research journals, and TOEFL reading passages.\n\n### Examples\n1. Economic analysts established a direct correlation between industrial automation and regional labor dislocation.\n2. The research team formulated a comprehensive conceptual framework to investigate neural synaptic plasticity.\n3. Government regulations constitute a vital safeguard against monopolistic market consolidation.',
            initialMastery: 60,
            initialStatus: 'IN_PROGRESS',
            questions: [
              {
                order: 1,
                question: 'The newly discovered fossil specimens _____ a crucial evolutionary link between theropod dinosaurs and avian species.',
                explanation: '"Constitute" means to be a part of, make up, or represent in formal academic discourse.',
                correctAnswer: 'C',
                options: [
                  { key: 'A', text: 'derive' },
                  { key: 'B', text: 'speculate' },
                  { key: 'C', text: 'constitute' },
                  { key: 'D', text: 'complicate' },
                ],
              },
              {
                order: 2,
                question: 'Geological core samples _____ that dramatic fluctuations in atmospheric carbon dioxide occurred prior to the Permian extinction.',
                explanation: '"Indicate" is the high-yield academic reporting verb meaning to show or serve as strong evidence for.',
                correctAnswer: 'A',
                options: [
                  { key: 'A', text: 'indicate' },
                  { key: 'B', text: 'postpone' },
                  { key: 'C', text: 'confine' },
                  { key: 'D', text: 'neglect' },
                ],
              },
              {
                order: 3,
                question: 'Botanists were able to _____ valuable medicinal compounds from the bark of indigenous South American rainforest trees.',
                explanation: '"Derive" means to obtain, extract, or receive something from a specified source.',
                correctAnswer: 'B',
                options: [
                  { key: 'A', text: 'indicate' },
                  { key: 'B', text: 'derive' },
                  { key: 'C', text: 'displace' },
                  { key: 'D', text: 'diminish' },
                ],
              },
              {
                order: 4,
                question: 'The statistical analysis demonstrated a _____ disparity between rural and metropolitan access to specialized oncology treatment.',
                explanation: '"Significant" in research context denotes a large, statistically meaningful, or noteworthy difference.',
                correctAnswer: 'D',
                options: [
                  { key: 'A', text: 'casual' },
                  { key: 'B', text: 'rudimentary' },
                  { key: 'C', text: 'transient' },
                  { key: 'D', text: 'significant' },
                ],
              },
              {
                order: 5,
                question: 'Sociologists utilize empirical data to _____ whether cultural assimilation accelerates among second-generation immigrant cohorts.',
                explanation: '"Analyze" means to examine methodically and in detail the constitution or structure of information.',
                correctAnswer: 'B',
                options: [
                  { key: 'A', text: 'conserve' },
                  { key: 'B', text: 'analyze' },
                  { key: 'C', text: 'deviate' },
                  { key: 'D', text: 'precede' },
                ],
              },
            ],
          },
          {
            title: 'Academic Prefixes & Roots',
            slug: 'academic-prefixes-roots',
            level: 'Intermediate',
            order: 2,
            formula: 'Prefix (direction/negation) + Base Root (core meaning) + Suffix (grammatical category)',
            explanation:
              'Over 70% of academic English vocabulary is derived from Greek and Latin morphemes. Deconstructing prefixes and roots unlocks the meaning of complex scientific terms.\n\n### Examples\n1. Retrospective historical analysis illuminates the structural origins of democratic institutions.\n2. Circumnavigating the polar ice caps requires specialized icebreakers with reinforced hulls.\n3. Geologists extract mineral core samples to deduce the chronological sequence of volcanic strata.',
            initialMastery: 50,
            initialStatus: 'IN_PROGRESS',
            questions: [
              {
                order: 1,
                question: 'The word "subterranean" contains the root "-terr-", which relates to:',
                explanation: 'The Latin root "terr" means earth or land. Subterranean = underground.',
                correctAnswer: 'A',
                options: [
                  { key: 'A', text: 'earth or ground' },
                  { key: 'B', text: 'water or fluid' },
                  { key: 'C', text: 'heat or temperature' },
                  { key: 'D', text: 'light or radiation' },
                ],
              },
              {
                order: 2,
                question: 'In academic texts, the prefix "circum-" (as in circumvent or circumscribe) denotes:',
                explanation: 'The Latin prefix "circum-" means around or about.',
                correctAnswer: 'C',
                options: [
                  { key: 'A', text: 'under or below' },
                  { key: 'B', text: 'between or among' },
                  { key: 'C', text: 'around or encircling' },
                  { key: 'D', text: 'against or opposing' },
                ],
              },
              {
                order: 3,
                question: 'A scientist who conducts a "retrospective" study is looking:',
                explanation: 'Retro- (backward) + spect (look/see) = looking back into past events or historical records.',
                correctAnswer: 'B',
                options: [
                  { key: 'A', text: 'forward into future projections' },
                  { key: 'B', text: 'backward at past occurrences' },
                  { key: 'C', text: 'inward at psychological states' },
                  { key: 'D', text: 'closely at cellular structures' },
                ],
              },
              {
                order: 4,
                question: 'The root "-tract-" in words like "extract", "contract", and "attract" means:',
                explanation: 'The Latin root "tract" means to draw or pull.',
                correctAnswer: 'D',
                options: [
                  { key: 'A', text: 'to speak' },
                  { key: 'B', text: 'to write' },
                  { key: 'C', text: 'to break' },
                  { key: 'D', text: 'to pull or draw' },
                ],
              },
              {
                order: 5,
                question: 'Which of the following prefixes signifies "opposing" or "against" in academic terms?',
                explanation: 'The Greek prefix "anti-" and Latin "contra-" signify against or opposing.',
                correctAnswer: 'A',
                options: [
                  { key: 'A', text: 'contra-' },
                  { key: 'B', text: 'sym-' },
                  { key: 'C', text: 'intra-' },
                  { key: 'D', text: 'ante-' },
                ],
              },
            ],
          },
          {
            title: 'Academic Collocations',
            slug: 'academic-collocations',
            level: 'Intermediate',
            order: 3,
            formula: 'Verb + Noun: conduct research | Adj + Noun: empirical evidence | Noun + Prep: reliance on',
            explanation:
              'Collocations are habitual word pairings that native academic writers use. TOEFL tests whether you recognize standard academic partnerships (e.g., "draw conclusions," not "make conclusions").\n\n### Examples\n1. The epidemiological consortium conducted rigorous research into asymptomatic viral transmission.\n2. Sociologists drew profound conclusions concerning urban migration patterns following industrialization.\n3. Empirical evidence substantiates the hypothesis that sleep deprivation impairs memory consolidation.',
            initialMastery: 40,
            initialStatus: 'IN_PROGRESS',
            questions: [
              {
                order: 1,
                question: 'Before publishing their breakthrough findings, the climatologists _____ rigorous research over five calendar years.',
                explanation: 'In academic English, the natural collocation with "research" is "conducted" (or "carried out"), never "made" or "manufactured".',
                correctAnswer: 'C',
                options: [
                  { key: 'A', text: 'made' },
                  { key: 'B', text: 'created' },
                  { key: 'C', text: 'conducted' },
                  { key: 'D', text: 'composed' },
                ],
              },
              {
                order: 2,
                question: 'The peer review panel concluded that the experimental results failed to provide _____ evidence to support the claim.',
                explanation: '"Empirical evidence" (observable, measurable data) is the canonical academic collocation.',
                correctAnswer: 'A',
                options: [
                  { key: 'A', text: 'empirical' },
                  { key: 'B', text: 'fictional' },
                  { key: 'C', text: 'instinctive' },
                  { key: 'D', text: 'spontaneous' },
                ],
              },
              {
                order: 3,
                question: 'Prolonged atmospheric ozone depletion poses a significant _____ to polar phytoplankton ecosystems.',
                explanation: 'The natural collocation is "poses a threat" (or "poses a risk/hazard").',
                correctAnswer: 'B',
                options: [
                  { key: 'A', text: 'obstacle' },
                  { key: 'B', text: 'threat' },
                  { key: 'C', text: 'refusal' },
                  { key: 'D', text: 'defect' },
                ],
              },
              {
                order: 4,
                question: 'Based on the cross-sectional survey data, the investigators were able to _____ definitive conclusions.',
                explanation: 'The standard academic collocation with conclusions is "draw conclusions" or "reach conclusions".',
                correctAnswer: 'D',
                options: [
                  { key: 'A', text: 'do' },
                  { key: 'B', text: 'construct' },
                  { key: 'C', text: 'invent' },
                  { key: 'D', text: 'draw' },
                ],
              },
              {
                order: 5,
                question: 'The sudden decline in honeybee populations has been directly attributed _____ widespread neonicotinoid pesticide usage.',
                explanation: 'The academic verb "attributed" strictly collocates with the preposition "to".',
                correctAnswer: 'B',
                options: [
                  { key: 'A', text: 'with' },
                  { key: 'B', text: 'to' },
                  { key: 'C', text: 'from' },
                  { key: 'D', text: 'for' },
                ],
              },
            ],
          },
          {
            title: 'Contextual Synonyms',
            slug: 'contextual-synonyms',
            level: 'Advanced',
            order: 4,
            formula: 'Contextual Clues: Surrounding Contrast (unlike, but) + Cause/Effect + Appositive Restatement',
            explanation:
              'Words often carry multiple meanings depending on context. In TOEFL Reading vocabulary questions, you must pick the meaning that fits the exact sentence, not just the primary dictionary definition.\n\n### Examples\n1. In metallurgy, a metal\'s ductile property allows it to be drawn into thin wires without fracturing.\n2. The botanist discovered a novel species of orchid thriving in the subterranean cave ecosystem.\n3. Subtle shifts in ocean salinity precipitated a sudden deceleration of the Atlantic conveyor current.',
            initialMastery: 30,
            initialStatus: 'IN_PROGRESS',
            questions: [
              {
                order: 1,
                question: 'In the sentence: "Certain minerals exhibit the unique property of phosphorescence," the word "property" is closest in meaning to:',
                explanation: 'In scientific contexts, "property" refers to an inherent characteristic, attribute, or physical quality.',
                correctAnswer: 'C',
                options: [
                  { key: 'A', text: 'real estate' },
                  { key: 'B', text: 'wealth' },
                  { key: 'C', text: 'characteristic' },
                  { key: 'D', text: 'possession' },
                ],
              },
              {
                order: 2,
                question: 'In the sentence: "Engineers designed a novel filtration membrane to desalinize seawater," the word "novel" means:',
                explanation: 'In this context, the adjective "novel" means new, innovative, or original.',
                correctAnswer: 'A',
                options: [
                  { key: 'A', text: 'innovative' },
                  { key: 'B', text: 'literary' },
                  { key: 'C', text: 'lengthy' },
                  { key: 'D', text: 'fragile' },
                ],
              },
              {
                order: 3,
                question: 'In the sentence: "The unprecedented drought precipitated a collapse of municipal reservoir reserves," the word "precipitated" means:',
                explanation: 'In academic prose, "precipitate" (verb) means to trigger, accelerate, or bring about suddenly.',
                correctAnswer: 'B',
                options: [
                  { key: 'A', text: 'delayed' },
                  { key: 'B', text: 'triggered' },
                  { key: 'C', text: 'prevented' },
                  { key: 'D', text: 'measured' },
                ],
              },
              {
                order: 4,
                question: 'In the sentence: "The historian provided an objective account of the diplomatic treaty," the word "objective" means:',
                explanation: '"Objective" in academic texts denotes impartiality, fairness, and freedom from personal bias.',
                correctAnswer: 'D',
                options: [
                  { key: 'A', text: 'purposeful' },
                  { key: 'B', text: 'tangible' },
                  { key: 'C', text: 'hostile' },
                  { key: 'D', text: 'unbiased' },
                ],
              },
              {
                order: 5,
                question: 'In the sentence: "Volcanic ash clouds can obscure solar radiation for several months," the word "obscure" is closest in meaning to:',
                explanation: 'As a verb, "obscure" means to block, conceal, or hide from view.',
                correctAnswer: 'A',
                options: [
                  { key: 'A', text: 'block' },
                  { key: 'B', text: 'magnify' },
                  { key: 'C', text: 'absorb' },
                  { key: 'D', text: 'reflect' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────────────────
  // SECTION 3: Grammar
  // ──────────────────────────────────────────────────────────
  {
    name: 'Grammar',
    slug: 'grammar',
    description: 'Comprehensive grammar rules tested in TOEFL reading, writing, and structure.',
    order: 3,
    status: 'IN_PROGRESS',
    topics: [
      {
        name: 'Core Syntax & Tenses',
        slug: 'core-syntax-and-tenses',
        description: 'High-frequency grammar patterns tested across all TOEFL sections.',
        order: 1,
        lessons: [
          {
            title: 'Simple Present',
            slug: 'simple-present',
            level: 'Beginner',
            order: 1,
            formula: 'Subject + V1(s/es) + Complement | Negative: Subject + do/does not + V1',
            explanation:
              'The Simple Present expresses habitual actions, permanent facts, scientific truths, and scheduled occurrences. In academic TOEFL texts, verbs must strictly agree in number with their subjects, even when separated by complex prepositional phrases, participle clauses, or appositives.\n\n### Examples\n1. Photosynthesis occurs when chlorophyll absorbs solar electromagnetic radiation.\n2. The international committee reviews higher education accreditation standards annually.\n3. Archaeologists investigate ancient settlements to understand early urban trade networks.',
            initialMastery: 80,
            initialStatus: 'MASTERED',
            questions: [
              {
                order: 1,
                question: "The Amazon River basin _____ approximately twenty percent of the Earth's total river flow.",
                explanation: '"The Amazon River basin" is a singular noun phrase requiring the singular verb form "contains".',
                correctAnswer: 'B',
                options: [
                  { key: 'A', text: 'contain' },
                  { key: 'B', text: 'contains' },
                  { key: 'C', text: 'containing' },
                  { key: 'D', text: 'is contained' },
                ],
              },
              {
                order: 2,
                question: 'Unlike migratory birds, the arctic fox _____ active throughout the harsh winter months.',
                explanation: 'The singular subject "the arctic fox" requires the third-person singular present verb "remains".',
                correctAnswer: 'B',
                options: [
                  { key: 'A', text: 'remain' },
                  { key: 'B', text: 'remains' },
                  { key: 'C', text: 'remaining' },
                  { key: 'D', text: 'have remained' },
                ],
              },
              {
                order: 3,
                question: 'Ocean currents _____ a crucial role in regulating global climate patterns.',
                explanation: 'The plural subject "Ocean currents" takes the base plural verb "play".',
                correctAnswer: 'B',
                options: [
                  { key: 'A', text: 'plays' },
                  { key: 'B', text: 'play' },
                  { key: 'C', text: 'playing' },
                  { key: 'D', text: 'is playing' },
                ],
              },
              {
                order: 4,
                question: 'In linguistics, a morpheme _____ the smallest meaningful constituent of a language.',
                explanation: '"A morpheme" is a singular grammatical concept, requiring "represents".',
                correctAnswer: 'A',
                options: [
                  { key: 'A', text: 'represents' },
                  { key: 'B', text: 'represent' },
                  { key: 'C', text: 'representing' },
                  { key: 'D', text: 'are represented' },
                ],
              },
              {
                order: 5,
                question: 'Geothermal energy plants typically _____ steam from deep reservoirs to drive turbines.',
                explanation: 'The plural subject "Geothermal energy plants" takes the base form "utilize".',
                correctAnswer: 'B',
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
              'The Simple Past denotes completed historical actions, discoveries, or events tied to a finished timeframe. TOEFL historical passages frequently rely on simple past constructions to delineate chronological sequences.\n\n### Examples\n1. Marie Curie discovered radium and polonium in 1898.\n2. The catastrophic eruption of Mount Tambora in 1815 caused significant global climate cooling.\n3. Early hominids developed rudimentary stone tools to adapt to changing savanna ecosystems.',
            initialMastery: 65,
            initialStatus: 'NEEDS_REVIEW',
            questions: [
              {
                order: 1,
                question: 'During the Industrial Revolution, mechanized textile production rapidly _____ traditional handicrafts.',
                explanation: '"During the Industrial Revolution" pinpoints a finished historical period, requiring the simple past "replaced".',
                correctAnswer: 'B',
                options: [
                  { key: 'A', text: 'replaces' },
                  { key: 'B', text: 'replaced' },
                  { key: 'C', text: 'replacing' },
                  { key: 'D', text: 'replace' },
                ],
              },
              {
                order: 2,
                question: 'In 1928, Alexander Fleming accidentally _____ penicillin while studying staphylococci bacteria.',
                explanation: 'The definite historical marker "In 1928" requires the simple past tense verb "discovered".',
                correctAnswer: 'A',
                options: [
                  { key: 'A', text: 'discovered' },
                  { key: 'B', text: 'discovers' },
                  { key: 'C', text: 'has discovered' },
                  { key: 'D', text: 'discovering' },
                ],
              },
              {
                order: 3,
                question: 'The Maya civilization _____ sophisticated astronomical calendars prior to the arrival of European explorers.',
                explanation: 'The sentence requires simple past "developed" to describe an ancient civilizational accomplishment.',
                correctAnswer: 'C',
                options: [
                  { key: 'A', text: 'develops' },
                  { key: 'B', text: 'developing' },
                  { key: 'C', text: 'developed' },
                  { key: 'D', text: 'to develop' },
                ],
              },
              {
                order: 4,
                question: 'Ancient Roman architects _____ volcanic pozzolana into concrete to build long-lasting marine structures.',
                explanation: 'Past narrative of Roman engineering requires the simple past "incorporated".',
                correctAnswer: 'B',
                options: [
                  { key: 'A', text: 'incorporate' },
                  { key: 'B', text: 'incorporated' },
                  { key: 'C', text: 'incorporates' },
                  { key: 'D', text: 'incorporating' },
                ],
              },
              {
                order: 5,
                question: 'Charles Darwin _____ the HMS Beagle voyage in 1831, which fundamentally shaped his evolutionary theories.',
                explanation: 'A completed event in 1831 requires the simple past "joined".',
                correctAnswer: 'A',
                options: [
                  { key: 'A', text: 'joined' },
                  { key: 'B', text: 'joins' },
                  { key: 'C', text: 'has joined' },
                  { key: 'D', text: 'joining' },
                ],
              },
            ],
          },
          {
            title: 'Present Perfect',
            slug: 'present-perfect',
            level: 'Beginner',
            order: 3,
            formula: 'Subject + have/has + Past Participle (V3) | Negative: Subject + have/has not + V3',
            explanation:
              'The Present Perfect connects past occurrences directly to the present moment. It denotes actions at an indefinite past time, actions continuing from past to present, and recent discoveries with ongoing relevance.\n\n### Examples\n1. Scientists have discovered over 5,000 exoplanets beyond our solar system.\n2. She has lived in Japan for three years.\n3. Researchers have recently published groundbreaking findings on neural plasticity.',
            initialMastery: 30,
            initialStatus: 'IN_PROGRESS',
            questions: [
              {
                order: 1,
                question: 'Since the launch of the James Webb Space Telescope, astronomers _____ unprecedented images of early galaxies.',
                explanation: 'The temporal preposition "Since" combined with present relevance commands the Present Perfect "have captured".',
                correctAnswer: 'C',
                options: [
                  { key: 'A', text: 'captured' },
                  { key: 'B', text: 'captures' },
                  { key: 'C', text: 'have captured' },
                  { key: 'D', text: 'had captured' },
                ],
              },
              {
                order: 2,
                question: 'Epidemiologists _____ substantial evidence demonstrating that urban green spaces reduce cortisol levels.',
                explanation: 'The plural subject "Epidemiologists" requires "have compiled" for ongoing scientific relevance.',
                correctAnswer: 'A',
                options: [
                  { key: 'A', text: 'have compiled' },
                  { key: 'B', text: 'has compiled' },
                  { key: 'C', text: 'compiling' },
                  { key: 'D', text: 'compiled by' },
                ],
              },
              {
                order: 3,
                question: 'Over the past two decades, renewable energy installations _____ at an exponential annual rate.',
                explanation: 'The duration phrase "Over the past two decades" denotes a span leading to the present: "have expanded".',
                correctAnswer: 'D',
                options: [
                  { key: 'A', text: 'expanded' },
                  { key: 'B', text: 'expands' },
                  { key: 'C', text: 'expanding' },
                  { key: 'D', text: 'have expanded' },
                ],
              },
              {
                order: 4,
                question: 'Geneticists _____ recently the complete genome of several endangered marine mammals.',
                explanation: 'The adverb "recently" with present relevance pairs naturally with Present Perfect "have sequenced".',
                correctAnswer: 'B',
                options: [
                  { key: 'A', text: 'sequenced' },
                  { key: 'B', text: 'have sequenced' },
                  { key: 'C', text: 'are sequencing' },
                  { key: 'D', text: 'sequence' },
                ],
              },
              {
                order: 5,
                question: 'Climatological surveys show that average surface temperatures _____ steadily over the last century.',
                explanation: 'The plural subject "temperatures" over the timeframe "over the last century" requires "have increased".',
                correctAnswer: 'A',
                options: [
                  { key: 'A', text: 'have increased' },
                  { key: 'B', text: 'has increased' },
                  { key: 'C', text: 'increases' },
                  { key: 'D', text: 'increasing' },
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
              'The Passive Voice shifts emphasis from the actor to the patient or result. Scientific and academic TOEFL passages overwhelmingly employ passive structures to maintain objectivity and institutional neutrality.\n\n### Examples\n1. The greenhouse gases are absorbed by oceans and forests.\n2. The telescope was invented in the Netherlands during the early seventeenth century.\n3. Comprehensive climatological data will be analyzed by the research consortium next month.',
            initialMastery: 42,
            initialStatus: 'NEEDS_REVIEW',
            questions: [
              {
                order: 1,
                question: 'Photosynthetic pigments in plant cells _____ by specific wavelengths of visible light.',
                explanation: 'The pigments receive the action from the light; plural subject requires "are activated".',
                correctAnswer: 'B',
                options: [
                  { key: 'A', text: 'activates' },
                  { key: 'B', text: 'are activated' },
                  { key: 'C', text: 'activating' },
                  { key: 'D', text: 'activate' },
                ],
              },
              {
                order: 2,
                question: 'The ancient papyrus manuscript _____ by prominent philologists before its display in the museum.',
                explanation: 'The singular subject "manuscript" was acted upon in the past, requiring the past passive "was authenticated".',
                correctAnswer: 'A',
                options: [
                  { key: 'A', text: 'was authenticated' },
                  { key: 'B', text: 'authenticating' },
                  { key: 'C', text: 'authenticated' },
                  { key: 'D', text: 'is authenticate' },
                ],
              },
              {
                order: 3,
                question: 'Deep-sea trenches _____ by the tectonic subduction of oceanic crust beneath lighter continental plates.',
                explanation: 'The passive structure "are formed by" describes a continuous geological process.',
                correctAnswer: 'C',
                options: [
                  { key: 'A', text: 'form' },
                  { key: 'B', text: 'forming' },
                  { key: 'C', text: 'are formed' },
                  { key: 'D', text: 'have formed' },
                ],
              },
              {
                order: 4,
                question: 'Anomalous subterranean vibrations _____ by seismologists forty-eight hours prior to the volcanic eruption.',
                explanation: 'The plural subject "vibrations" requires "were detected".',
                correctAnswer: 'A',
                options: [
                  { key: 'A', text: 'were detected' },
                  { key: 'B', text: 'was detected' },
                  { key: 'C', text: 'detected' },
                  { key: 'D', text: 'detecting' },
                ],
              },
              {
                order: 5,
                question: 'All experimental specimens must _____ in hermetically sealed containers at cryogenic temperatures.',
                explanation: 'Modal passive formula: modal + be + past participle ("must be stored").',
                correctAnswer: 'D',
                options: [
                  { key: 'A', text: 'store' },
                  { key: 'B', text: 'storing' },
                  { key: 'C', text: 'stored' },
                  { key: 'D', text: 'be stored' },
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
              'Relative clauses specify or describe a preceding noun. In TOEFL, check for pronoun agreement and verify that no redundant object pronouns exist inside the subordinate clause.\n\n### Examples\n1. The evolutionary biologist who formulated the punctuated equilibrium model delivered the keynote address.\n2. The algorithmic matrix, which was developed at Caltech, optimizes orbital satellite trajectories.\n3. The observatory where astronomical spectroscopic measurements were first recorded celebrated its centennial.',
            initialMastery: 0,
            initialStatus: 'NOT_STARTED',
            questions: [
              {
                order: 1,
                question: 'The astrophysicist _____ proposed the primordial singularity hypothesis won the international medal.',
                explanation: '"Who" is the relative pronoun used as the subject of the subordinate clause referring to a person.',
                correctAnswer: 'B',
                options: [
                  { key: 'A', text: 'which' },
                  { key: 'B', text: 'who' },
                  { key: 'C', text: 'whom' },
                  { key: 'D', text: 'whose' },
                ],
              },
              {
                order: 2,
                question: 'The Hadron Collider, _____ subterranean circumference spans 27 kilometers, accelerates protons to near-light speed.',
                explanation: '"Whose" expresses possession for both animate and inanimate nouns in relative clauses.',
                correctAnswer: 'A',
                options: [
                  { key: 'A', text: 'whose' },
                  { key: 'B', text: 'which' },
                  { key: 'C', text: 'that' },
                  { key: 'D', text: 'its' },
                ],
              },
              {
                order: 3,
                question: 'The ocean trench _____ the research submersible gathered deep-water thermal data reaches 11,000 meters in depth.',
                explanation: '"Where" (or "in which") is the relative adverb referring to geographical place.',
                correctAnswer: 'C',
                options: [
                  { key: 'A', text: 'which' },
                  { key: 'B', text: 'when' },
                  { key: 'C', text: 'where' },
                  { key: 'D', text: 'who' },
                ],
              },
              {
                order: 4,
                question: 'Dendrochronology is a dating technique _____ analyzes tree-ring growth patterns to determine historical environmental conditions.',
                explanation: 'A restrictive relative clause modifying an inanimate noun "technique" requires "that" or "which".',
                correctAnswer: 'D',
                options: [
                  { key: 'A', text: 'who' },
                  { key: 'B', text: 'whose' },
                  { key: 'C', text: 'where' },
                  { key: 'D', text: 'that' },
                ],
              },
              {
                order: 5,
                question: 'The geological era _____ dinosaurs dominated terrestrial ecosystems is designated as the Mesozoic.',
                explanation: '"When" is the relative adverb used to refer to a time period or era.',
                correctAnswer: 'B',
                options: [
                  { key: 'A', text: 'where' },
                  { key: 'B', text: 'when' },
                  { key: 'C', text: 'which' },
                  { key: 'D', text: 'who' },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'Advanced Syntactic Patterns',
        slug: 'advanced-syntactic-patterns',
        description: 'Conditionals, inversions, gerunds, infinitives, and parallel structure.',
        order: 2,
        lessons: [
          {
            title: 'Conditionals & Inversions',
            slug: 'conditionals-inversions',
            level: 'Advanced',
            order: 6,
            formula: 'Type 3 Inverted: Had + S + V3, S + would have + V3 | Negative Inversion: Rarely + Aux + S + V',
            explanation:
              'Conditional sentences and inverted structures are top-tier scoring items on the TOEFL Structure section. Inversion occurs after negative adverbs, restrictive prepositions, and omitted conditional "if".\n\n### Examples\n1. Had the meteoroid entered the atmosphere at a steeper angle, the explosion would have decimated a broader area.\n2. Rarely do subterranean aquifer systems replenish at the pace of modern industrial extraction.\n3. Were renewable energy storage costs to drop by half, fossil fuel power plants would become economically obsolete.',
            initialMastery: 20,
            initialStatus: 'IN_PROGRESS',
            questions: [
              {
                order: 1,
                question: '_____ the warning sirens sounded in time, hundreds of coastal residents would have evacuated safely before the tsunami struck.',
                explanation: 'Inverted third conditional with omitted "if" begins with "Had": "Had the warning sirens sounded...".',
                correctAnswer: 'A',
                options: [
                  { key: 'A', text: 'Had' },
                  { key: 'B', text: 'If had' },
                  { key: 'C', text: 'Were' },
                  { key: 'D', text: 'Should' },
                ],
              },
              {
                order: 2,
                question: 'Rarely _____ such catastrophic seismic activity in a geologically passive intraplate region.',
                explanation: 'An initial negative adverb ("Rarely") triggers subject-auxiliary inversion: "have geologists recorded".',
                correctAnswer: 'C',
                options: [
                  { key: 'A', text: 'geologists have recorded' },
                  { key: 'B', text: 'recorded geologists' },
                  { key: 'C', text: 'have geologists recorded' },
                  { key: 'D', text: 'geologists recorded' },
                ],
              },
              {
                order: 3,
                question: 'Under no circumstances _____ allowed to operate the particle accelerator without supervisor authorization.',
                explanation: 'Restrictive negative phrase "Under no circumstances" requires inversion: "are researchers allowed".',
                correctAnswer: 'B',
                options: [
                  { key: 'A', text: 'researchers are' },
                  { key: 'B', text: 'are researchers' },
                  { key: 'C', text: 'researchers being' },
                  { key: 'D', text: 'that researchers are' },
                ],
              },
              {
                order: 4,
                question: 'Were global ocean temperatures _____ by another two degrees, extensive coral bleaching events would be irreversible.',
                explanation: 'Inverted second conditional: "Were + Subject + to-infinitive": "Were global ocean temperatures to rise...".',
                correctAnswer: 'D',
                options: [
                  { key: 'A', text: 'rising' },
                  { key: 'B', text: 'rose' },
                  { key: 'C', text: 'risen' },
                  { key: 'D', text: 'to rise' },
                ],
              },
              {
                order: 5,
                question: 'Not only _____ high aerodynamic resistance, but the experimental craft also suffered from engine cooling failure.',
                explanation: '"Not only" at the start of a clause requires inversion: "did the vehicle encounter".',
                correctAnswer: 'A',
                options: [
                  { key: 'A', text: 'did the vehicle encounter' },
                  { key: 'B', text: 'the vehicle encountered' },
                  { key: 'C', text: 'encountered the vehicle' },
                  { key: 'D', text: 'was the vehicle encounter' },
                ],
              },
            ],
          },
          {
            title: 'Gerunds vs. Infinitives',
            slug: 'gerunds-infinitives',
            level: 'Intermediate',
            order: 7,
            formula: 'Verb + Gerund (admit, avoid, consider) | Verb + Infinitive (attempt, decide, tend)',
            explanation:
              'Verbs in English dictate whether following verbal complements take the gerund (-ing) or infinitive (to + verb) form. Prepositions always require gerunds.\n\n### Examples\n1. The university administration postponed implementing the revised grading policy until next semester.\n2. Biologists succeeded in sequencing the complete genome of the extinct woolly mammoth.\n3. The architectural committee intends to construct an eco-friendly campus dormitory.',
            initialMastery: 40,
            initialStatus: 'IN_PROGRESS',
            questions: [
              {
                order: 1,
                question: 'The research team avoided _____ definitive assertions until statistical replication was finalized.',
                explanation: 'The verb "avoid" is strictly followed by a gerund (-ing form): "avoided making".',
                correctAnswer: 'B',
                options: [
                  { key: 'A', text: 'to make' },
                  { key: 'B', text: 'making' },
                  { key: 'C', text: 'make' },
                  { key: 'D', text: 'made' },
                ],
              },
              {
                order: 2,
                question: 'Marine biologists succeeded in _____ the migratory route of humpback whales using satellite telemetry.',
                explanation: 'A preposition ("in") must always be followed by a gerund: "succeeded in mapping".',
                correctAnswer: 'C',
                options: [
                  { key: 'A', text: 'to map' },
                  { key: 'B', text: 'map' },
                  { key: 'C', text: 'mapping' },
                  { key: 'D', text: 'mapped' },
                ],
              },
              {
                order: 3,
                question: 'The engineering firm plans _____ a prototype carbon capture system for industrial blast furnaces.',
                explanation: '"Plan" takes an infinitive: "plans to build".',
                correctAnswer: 'A',
                options: [
                  { key: 'A', text: 'to build' },
                  { key: 'B', text: 'building' },
                  { key: 'C', text: 'build' },
                  { key: 'D', text: 'built' },
                ],
              },
              {
                order: 4,
                question: 'Astronomers postponed _____ the deep-space telescope until atmospheric cloud cover dissipated.',
                explanation: 'The verb "postpone" requires a gerund complement: "postponed launching".',
                correctAnswer: 'D',
                options: [
                  { key: 'A', text: 'to launch' },
                  { key: 'B', text: 'launch' },
                  { key: 'C', text: 'launched' },
                  { key: 'D', text: 'launching' },
                ],
              },
              {
                order: 5,
                question: 'Many migratory waterfowl are capable of _____ non-stop across open oceanic expanses for days.',
                explanation: 'Preposition "of" requires a gerund: "capable of flying".',
                correctAnswer: 'B',
                options: [
                  { key: 'A', text: 'to fly' },
                  { key: 'B', text: 'flying' },
                  { key: 'C', text: 'fly' },
                  { key: 'D', text: 'flight' },
                ],
              },
            ],
          },
          {
            title: 'Parallel Structure',
            slug: 'parallel-structure',
            level: 'Intermediate',
            order: 8,
            formula: 'Both [Noun] and [Noun] | Not only [Verb] but also [Verb] | Neither [Adj] nor [Adj]',
            explanation:
              'Parallel structure requires that series of words, phrases, or clauses joined by coordinating or correlative conjunctions share the identical grammatical form.\n\n### Examples\n1. The research grant covers purchasing lab equipment, hiring student assistants, and publishing findings.\n2. The proposed urban plan is neither economically feasible nor environmentally sustainable.\n3. The scholar spent her career studying ancient hieroglyphs, translating forgotten texts, and mentoring younger linguists.',
            initialMastery: 35,
            initialStatus: 'IN_PROGRESS',
            questions: [
              {
                order: 1,
                question: 'The environmental assessment evaluated air quality, water contamination, and _____ in the river basin.',
                explanation: 'Parallel structure in a list of noun phrases: "air quality", "water contamination", and "soil erosion".',
                correctAnswer: 'A',
                options: [
                  { key: 'A', text: 'soil erosion' },
                  { key: 'B', text: 'eroding the soil' },
                  { key: 'C', text: 'how soil erodes' },
                  { key: 'D', text: 'to erode soil' },
                ],
              },
              {
                order: 2,
                question: 'The new university laboratory is designed for conducting chemical synthesis, isolating organic compounds, and _____ data.',
                explanation: 'Parallel gerund phrases: "conducting...", "isolating...", and "analyzing...".',
                correctAnswer: 'C',
                options: [
                  { key: 'A', text: 'to analyze' },
                  { key: 'B', text: 'analysis of' },
                  { key: 'C', text: 'analyzing' },
                  { key: 'D', text: 'analyze' },
                ],
              },
              {
                order: 3,
                question: 'The proposed energy reform is both economically viable _____ environmentally responsible.',
                explanation: 'Correlative conjunction pair "both... and": "both economically viable and environmentally responsible".',
                correctAnswer: 'B',
                options: [
                  { key: 'A', text: 'as well as' },
                  { key: 'B', text: 'and' },
                  { key: 'C', text: 'also' },
                  { key: 'D', text: 'or' },
                ],
              },
              {
                order: 4,
                question: 'The novel algorithm is faster, more accurate, and _____ than previous computational iterations.',
                explanation: 'Parallel comparative adjectives: "faster", "more accurate", and "more dependable".',
                correctAnswer: 'D',
                options: [
                  { key: 'A', text: 'dependability' },
                  { key: 'B', text: 'dependable' },
                  { key: 'C', text: 'with dependability' },
                  { key: 'D', text: 'more dependable' },
                ],
              },
              {
                order: 5,
                question: 'The professor praised the student not only for her thorough literature review but also for _____ original methodology.',
                explanation: 'Parallel structure after "not only for [X] but also for [Y]": "for developing".',
                correctAnswer: 'A',
                options: [
                  { key: 'A', text: 'developing' },
                  { key: 'B', text: 'her development' },
                  { key: 'C', text: 'to develop' },
                  { key: 'D', text: 'she developed' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────────────────
  // SECTION 4: Reading
  // ──────────────────────────────────────────────────────────
  {
    name: 'Reading',
    slug: 'reading',
    description: 'Main idea, inference, negative factual, vocabulary in context, and insertion.',
    order: 4,
    status: 'AVAILABLE',
    topics: [
      {
        name: 'Academic Reading Strategies & Question Types',
        slug: 'reading-strategies',
        description: 'Comprehensive strategies for all 10 TOEFL reading question formats.',
        order: 1,
        lessons: [
          {
            title: 'Factual & Negative Factual',
            slug: 'factual-questions',
            level: 'Intermediate',
            order: 1,
            formula: 'Strategy: Scan keywords -> Match direct passage paraphrase -> Eliminate 3 distractors',
            explanation:
              'Factual questions verify specific information stated directly in the passage. Negative factual questions require you to identify the one option that is NOT mentioned or contradicts the text.\n\n### Examples\n1. According to the geological survey, granite formations solidify at subterranean depths exceeding five kilometers.\n2. All of the following factors contributed to the decline of the Mayan lowland cities EXCEPT a catastrophic volcanic event.\n3. The author notes that desert tortoises spend approximately ninety-five percent of their lives underground to conserve water.',
            initialMastery: 0,
            initialStatus: 'NOT_STARTED',
            questions: [
              {
                order: 1,
                question: 'According to paragraph 2, why do arctic vegetation species remain dwarf in stature?',
                explanation: 'Factual match: the text states cold permafrost and violent polar winds limit vertical stem development.',
                correctAnswer: 'B',
                options: [
                  { key: 'A', text: 'They lack sufficient chlorophyll for photosynthesis' },
                  { key: 'B', text: 'Permafrost and gale-force winds suppress vertical growth' },
                  { key: 'C', text: 'Herbivores graze all tall branches during summer' },
                  { key: 'D', text: 'Soil salinity stunts root growth entirely' },
                ],
              },
              {
                order: 2,
                question: 'The author states that all of the following contributed to the expansion of Mesopotamian agriculture EXCEPT:',
                explanation: 'Negative factual: The passage mentions canals, silt deposits, and oxen plows, but explicitly denies the use of iron tools during this early epoch.',
                correctAnswer: 'D',
                options: [
                  { key: 'A', text: 'Silt deposition from seasonal river inundations' },
                  { key: 'B', text: 'The engineering of gravity-fed irrigation canals' },
                  { key: 'C', text: 'The domestication of draft oxen for tilling' },
                  { key: 'D', text: 'The widespread adoption of tempered iron plows' },
                ],
              },
              {
                order: 3,
                question: 'According to paragraph 4, what is the primary consequence of ocean acidification on calcifying organisms?',
                explanation: 'Direct passage reference: Acidification lowers carbonate ion concentration, impeding shell synthesis.',
                correctAnswer: 'A',
                options: [
                  { key: 'A', text: 'It reduces available carbonate ions needed to construct shells' },
                  { key: 'B', text: 'It elevates water temperatures beyond physiological tolerance' },
                  { key: 'C', text: 'It stimulates predatory starfish reproduction rates' },
                  { key: 'D', text: 'It destroys symbiotic zooxanthellae instantly' },
                ],
              },
              {
                order: 4,
                question: 'The passage indicates that prehistoric cave paintings were primarily created using pigments derived from:',
                explanation: 'Factual detail: the text specifies naturally occurring mineral oxides, charcoal, and ochre.',
                correctAnswer: 'C',
                options: [
                  { key: 'A', text: 'Synthetic chemical dyes traded across long distances' },
                  { key: 'B', text: 'Crushed shells and marine mollusk secretions' },
                  { key: 'C', text: 'Natural mineral oxides, charcoal, and clay ochres' },
                  { key: 'D', text: 'Boiled tree bark extracts and berry juices' },
                ],
              },
              {
                order: 5,
                question: 'Which of the following is NOT cited in paragraph 1 as a characteristic of migratory locust swarms?',
                explanation: 'Negative factual: the passage highlights gregarious phase shifts, long-distance flights, and crop devastation, but notes they travel only during daytime hours, not nocturnal.',
                correctAnswer: 'B',
                options: [
                  { key: 'A', text: 'Rapid physiological transition from solitary to gregarious behavior' },
                  { key: 'B', text: 'Exclusive navigation during nocturnal midnight hours' },
                  { key: 'C', text: 'Sustained flight carried by prevailing wind currents' },
                  { key: 'D', text: 'Extensive devastation of both cereal grains and wild grasses' },
                ],
              },
            ],
          },
          {
            title: 'Inference & Rhetorical Purpose',
            slug: 'inference-purpose',
            level: 'Advanced',
            order: 2,
            formula: 'Inference: Premise A + Premise B -> Implicit Conclusion | Purpose: Why author introduces fact X',
            explanation:
              'Inference questions test what is logically implied but not explicitly stated. Rhetorical purpose questions ask WHY the author included a particular fact, example, or quote.\n\n### Examples\n1. It can be inferred from paragraph 3 that early hominids favored riverine habitats because freshwater attracted game animals.\n2. The author mentions the Coelacanth in paragraph 2 to illustrate that living fossils can survive largely unchanged for millions of years.\n3. From the passage, it is implied that the solar wind would strip Earth\'s atmosphere if the planetary magnetic field did not exist.',
            initialMastery: 0,
            initialStatus: 'NOT_STARTED',
            questions: [
              {
                order: 1,
                question: 'It can be inferred from paragraph 2 that if the Earth lacked a molten iron-nickel outer core, then:',
                explanation: 'The text links mantle convection to geomagnetic field generation; without it, solar wind would erode atmospheric gases.',
                correctAnswer: 'C',
                options: [
                  { key: 'A', text: 'Tectonic volcanism would accelerate exponentially' },
                  { key: 'B', text: 'Oceanic tides would double in periodic frequency' },
                  { key: 'C', text: 'The planet would lose its protective geomagnetic field' },
                  { key: 'D', text: 'Gravitational attraction would cease entirely' },
                ],
              },
              {
                order: 2,
                question: 'Why does the author mention the "Industrial Revolution" in paragraph 3?',
                explanation: 'Rhetorical purpose: The author introduces this historical event as a baseline benchmark marking the onset of exponential atmospheric CO2 rises.',
                correctAnswer: 'A',
                options: [
                  { key: 'A', text: 'To establish a historical benchmark for accelerated anthropogenic emissions' },
                  { key: 'B', text: 'To praise British engineering innovations in metallurgy' },
                  { key: 'C', text: 'To prove that steam engines were cleaner than modern engines' },
                  { key: 'D', text: 'To contrast urban employment with agrarian serfdom' },
                ],
              },
              {
                order: 3,
                question: 'What can be inferred about nocturnal desert predators from their metabolic adaptations?',
                explanation: 'Logical inference: hunting by night allows predators to avoid extreme midday solar thermal loads and minimize dehydration.',
                correctAnswer: 'B',
                options: [
                  { key: 'A', text: 'They possess inferior eyesight compared to daytime counterparts' },
                  { key: 'B', text: 'They conserve bodily moisture and avoid extreme thermal stress' },
                  { key: 'C', text: 'They consume significantly more water than diurnal species' },
                  { key: 'D', text: 'They are unable to digest mammalian prey effectively' },
                ],
              },
              {
                order: 4,
                question: 'The author discusses "canary in a coal mine" in paragraph 5 in order to:',
                explanation: 'The idiom serves as a vivid rhetorical analogy demonstrating how amphibian declines serve as an early warning indicator for ecological collapse.',
                correctAnswer: 'D',
                options: [
                  { key: 'A', text: 'Describe historical British coal mining practices' },
                  { key: 'B', text: 'Argue that songbirds are more vulnerable than frogs' },
                  { key: 'C', text: 'Explain the toxicological effects of carbon monoxide gas' },
                  { key: 'D', text: 'Illustrate how amphibians function as early environmental bioindicators' },
                ],
              },
              {
                order: 5,
                question: 'It can be inferred from the passage that early astronomical navigation was unreliable during:',
                explanation: 'Navigators relied on polar star sighting; protracted overcast storm conditions prevented optical celestial observation.',
                correctAnswer: 'A',
                options: [
                  { key: 'A', text: 'Prolonged periods of dense cloud cover and sea fog' },
                  { key: 'B', text: 'Summer solstice daylight periods near the equator' },
                  { key: 'C', text: 'Calm ocean waters with negligible surface currents' },
                  { key: 'D', text: 'Voyages conducted along longitudinal shorelines' },
                ],
              },
            ],
          },
          {
            title: 'Vocabulary in Context',
            slug: 'vocab-in-context',
            level: 'Intermediate',
            order: 3,
            formula: 'Target word in passage -> substitute 4 choices -> check semantic and grammatical fit',
            explanation:
              'These questions ask for the meaning of a highlighted word or phrase as used in the specific paragraph context, requiring morphological and semantic evaluation.\n\n### Examples\n1. The term "proliferation" in line 14 is closest in meaning to rapid increase or multiplication.\n2. The word "dormant" in paragraph 4 is closest in meaning to inactive or quiescent.\n3. The author uses "meticulous" to characterize the botanist\'s painstaking observational records.',
            initialMastery: 0,
            initialStatus: 'NOT_STARTED',
            questions: [
              {
                order: 1,
                question: 'The word "proliferation" in paragraph 2 is closest in meaning to:',
                explanation: '"Proliferation" in biological and scientific contexts signifies rapid increase or multiplication.',
                correctAnswer: 'B',
                options: [
                  { key: 'A', text: 'extinction' },
                  { key: 'B', text: 'rapid increase' },
                  { key: 'C', text: 'gradual decay' },
                  { key: 'D', text: 'migration' },
                ],
              },
              {
                order: 2,
                question: 'The word "dormant" in paragraph 3 is closest in meaning to:',
                explanation: 'A dormant seed or volcano is alive/present but in an inactive or resting state.',
                correctAnswer: 'A',
                options: [
                  { key: 'A', text: 'inactive' },
                  { key: 'B', text: 'submerged' },
                  { key: 'C', text: 'fertile' },
                  { key: 'D', text: 'poisonous' },
                ],
              },
              {
                order: 3,
                question: 'The word "meticulous" in paragraph 1 is closest in meaning to:',
                explanation: '"Meticulous" means showing great attention to detail; very careful and precise.',
                correctAnswer: 'D',
                options: [
                  { key: 'A', text: 'hasty' },
                  { key: 'B', text: 'controversial' },
                  { key: 'C', text: 'traditional' },
                  { key: 'D', text: 'painstaking' },
                ],
              },
              {
                order: 4,
                question: 'The phrase "paved the way for" in paragraph 4 is closest in meaning to:',
                explanation: 'To pave the way for something means to facilitate, initiate, or make it possible.',
                correctAnswer: 'C',
                options: [
                  { key: 'A', text: 'obstructed' },
                  { key: 'B', text: 'replaced' },
                  { key: 'C', text: 'made possible' },
                  { key: 'D', text: 'delayed' },
                ],
              },
              {
                order: 5,
                question: 'The word "ephemeral" in the final paragraph is closest in meaning to:',
                explanation: '"Ephemeral" describes phenomena lasting for a very short time; transient.',
                correctAnswer: 'B',
                options: [
                  { key: 'A', text: 'enduring' },
                  { key: 'B', text: 'short-lived' },
                  { key: 'C', text: 'destructive' },
                  { key: 'D', text: 'invisible' },
                ],
              },
            ],
          },
          {
            title: 'Sentence Insertion & Summary',
            slug: 'sentence-insertion-summary',
            level: 'Advanced',
            order: 4,
            formula: 'Insertion: Connect preceding thought -> Insert -> Verify next referent | Summary: 3 Major Arguments',
            explanation:
              'Sentence insertion evaluates discourse flow and cohesion across 4 black squares [■]. Summary questions require selecting the 3 core thesis arguments from 6 choices.\n\n### Examples\n1. These findings challenged the prevailing orthodoxy that human language evolution occurred abruptly rather than incrementally.\n2. Consequently, the resulting sediment layers provide a chronological geological record spanning two billion years.\n3. An overarching thesis: Continental drift, driven by mantle convection, explains both seismic volatility and global biogeography.',
            initialMastery: 0,
            initialStatus: 'NOT_STARTED',
            questions: [
              {
                order: 1,
                question: 'Look at the four squares [■] that indicate where the following sentence could be added: "These microscopic crystalline deposits provide indelible proof of ancient glacial scouring."',
                explanation: 'The sentence must immediately follow a discussion of rock surface abrasions and preceding the explanation of how geologists date them.',
                correctAnswer: 'C',
                options: [
                  { key: 'A', text: '[■] First position (Paragraph start)' },
                  { key: 'B', text: '[■] Second position (After bedrock introduction)' },
                  { key: 'C', text: '[■] Third position (Directly after microscopic abrasion discussion)' },
                  { key: 'D', text: '[■] Fourth position (Paragraph conclusion)' },
                ],
              },
              {
                order: 2,
                question: 'When evaluating choices for the 3-point Passage Summary question, test-takers should immediately eliminate:',
                explanation: 'Summary questions assess macro comprehension: options that represent minor details or state false claims must be eliminated.',
                correctAnswer: 'A',
                options: [
                  { key: 'A', text: 'Minor specific details, even if factually accurate from the text' },
                  { key: 'B', text: 'Broad thematic statements covering multiple paragraphs' },
                  { key: 'C', text: 'Conclusions supported by the author\'s main scientific thesis' },
                  { key: 'D', text: 'Paraphrases of the introductory paragraph\'s central assertion' },
                ],
              },
              {
                order: 3,
                question: 'Where should a sentence beginning with "Consequently, urban populations began to rely on imported agrarian surpluses" be inserted?',
                explanation: '"Consequently" establishes a cause-effect relationship; it must follow the sentence detailing the depletion of local arable farmland.',
                correctAnswer: 'B',
                options: [
                  { key: 'A', text: 'Before the definition of urban settlements' },
                  { key: 'B', text: 'Immediately after the description of local farmland exhaustion' },
                  { key: 'C', text: 'Between two sentences describing ancient pottery kilns' },
                  { key: 'D', text: 'At the very beginning of the passage' },
                ],
              },
              {
                order: 4,
                question: 'Which of the following is a common distractor in TOEFL Reading summary questions?',
                explanation: 'Test makers deliberately include statements that are true facts from the text but represent insignificant supporting examples rather than core themes.',
                correctAnswer: 'D',
                options: [
                  { key: 'A', text: 'A synthesis of two contrasting viewpoints presented in the body' },
                  { key: 'B', text: 'A rephrased version of the author\'s primary thesis' },
                  { key: 'C', text: 'An overarching conceptual generalization' },
                  { key: 'D', text: 'A hyper-specific quantitative data point mentioned in passing' },
                ],
              },
              {
                order: 5,
                question: 'In sentence insertion, the presence of the demonstrative pronoun "This phenomenon" indicates that the inserted sentence must:',
                explanation: 'A demonstrative pronoun ("This X") requires that the phenomenon was explicitly described in the sentence immediately prior.',
                correctAnswer: 'C',
                options: [
                  { key: 'A', text: 'Be placed at the very start of a brand new paragraph' },
                  { key: 'B', text: 'Introduce an entirely unrelated topic' },
                  { key: 'C', text: 'Directly follow a specific event or mechanism described previously' },
                  { key: 'D', text: 'Conclude with a rhetorical question' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────────────────
  // SECTION 5: Listening
  // ──────────────────────────────────────────────────────────
  {
    name: 'Listening',
    slug: 'listening',
    description: 'Lectures, campus conversations, pragmatic understanding, and synthesis.',
    order: 5,
    status: 'LOCKED',
    topics: [
      {
        name: 'Academic Listening & Pragmatics',
        slug: 'academic-listening',
        description: 'Conversations, lecture structures, note-taking, and speaker attitude analysis.',
        order: 1,
        lessons: [
          {
            title: 'Campus Conversations',
            slug: 'campus-conversations',
            level: 'Intermediate',
            order: 1,
            formula: 'Format: Student Problem -> Administrative Policy/Advice -> Solution Agreed',
            explanation:
              'Campus conversations involve a student speaking with a professor, academic advisor, librarian, or registrar. Questions test the central dilemma, proposed solutions, and next steps.\n\n### Examples\n1. Student: "I\'m concerned because the prerequisite syllabus mentions advanced linear algebra, which I haven\'t taken yet."\n2. Advisor: "You can submit a waiver request if you have completed the equivalent multivariable calculus coursework."\n3. Librarian: "The special archives collection requires a faculty sponsor authorization form before physical access is granted."',
            initialMastery: 0,
            initialStatus: 'NOT_STARTED',
            questions: [
              {
                order: 1,
                question: 'Why does the student visit the professor\'s office hours in the dialogue?',
                explanation: 'The student explicitly explains early on that she is confused about the scope of the upcoming term paper topic.',
                correctAnswer: 'B',
                options: [
                  { key: 'A', text: 'To ask for a deadline extension due to illness' },
                  { key: 'B', text: 'To clarify the research scope for her term paper' },
                  { key: 'C', text: 'To complain about an unfair midterm exam grade' },
                  { key: 'D', text: 'To apply for a teaching assistant position' },
                ],
              },
              {
                order: 2,
                question: 'What does the academic advisor suggest the student do regarding his graduation audit?',
                explanation: 'The advisor advises submitting a petition form to substitute a completed statistics course for the calculus requirement.',
                correctAnswer: 'A',
                options: [
                  { key: 'A', text: 'Submit a petition to substitute an alternative quantitative course' },
                  { key: 'B', text: 'Postpone graduation by two full academic years' },
                  { key: 'C', text: 'Drop his declared minor immediately' },
                  { key: 'D', text: 'Retake the introductory seminar during summer school' },
                ],
              },
              {
                order: 3,
                question: 'What policy does the university librarian explain regarding rare manuscript access?',
                explanation: 'The librarian states that special collection items cannot be checked out and require viewing in the supervised reading room.',
                correctAnswer: 'C',
                options: [
                  { key: 'A', text: 'Undergraduates are completely forbidden from entering' },
                  { key: 'B', text: 'Manuscripts can be borrowed for up to three weeks' },
                  { key: 'C', text: 'They must be examined inside the monitored archives room' },
                  { key: 'D', text: 'Digital copies are unavailable to enrolled students' },
                ],
              },
              {
                order: 4,
                question: 'How does the housing coordinator resolve the student\'s dormitory dilemma?',
                explanation: 'The coordinator provides a temporary room reassignment until the maintenance team repairs the water leak.',
                correctAnswer: 'D',
                options: [
                  { key: 'A', text: 'By evicting the troublesome roommate' },
                  { key: 'B', text: 'By refunding the entire semester housing fee' },
                  { key: 'C', text: 'By suggesting the student find off-campus apartments' },
                  { key: 'D', text: 'By approving a temporary room transfer during plumbing repairs' },
                ],
              },
              {
                order: 5,
                question: 'What is the student\'s intended immediate next action at the conclusion of the conversation?',
                explanation: 'The student concludes by stating she will email the departmental chair to request the prerequisite signature.',
                correctAnswer: 'A',
                options: [
                  { key: 'A', text: 'Contact the department chair to obtain written prerequisite consent' },
                  { key: 'B', text: 'Withdraw from the chemistry major' },
                  { key: 'C', text: 'Purchase a new laboratory manual at the campus bookstore' },
                  { key: 'D', text: 'Schedule a second meeting with her study group' },
                ],
              },
            ],
          },
          {
            title: 'Academic Lectures',
            slug: 'academic-lectures',
            level: 'Advanced',
            order: 2,
            formula: 'Format: Topic Announcement -> Conceptual Definition -> Case Studies/Examples -> Synthesis',
            explanation:
              'TOEFL lectures emulate North American university undergraduate classes across sciences, arts, social sciences, and history. You must track major arguments, theories, and examples.\n\n### Examples\n1. Professor: "Today we\'ll examine how mycorrhizal fungi form symbiotic networks that transfer nutrients between forest trees."\n2. The lecturer highlights three distinct adaptations that allow desert succulents to withstand prolonged droughts.\n3. In medieval Europe, the transition from a two-field to a three-field crop rotation system vastly augmented productivity.',
            initialMastery: 0,
            initialStatus: 'NOT_STARTED',
            questions: [
              {
                order: 1,
                question: 'What is the main topic of the environmental science lecture?',
                explanation: 'The professor focuses the lecture on how underground mycorrhizal fungal networks redistribute nitrogen between trees.',
                correctAnswer: 'C',
                options: [
                  { key: 'A', text: 'Deforestation patterns in the Amazon basin' },
                  { key: 'B', text: 'The evolutionary anatomy of bark beetles' },
                  { key: 'C', text: 'Symbiotic nutrient sharing via mycorrhizal fungal networks' },
                  { key: 'D', text: 'Commercial timber harvesting regulations' },
                ],
              },
              {
                order: 2,
                question: 'According to the professor, how do deciduous trees minimize winter moisture loss?',
                explanation: 'The lecture details that dropping leaves eliminates surface area through which water evaporates during freezing weather.',
                correctAnswer: 'A',
                options: [
                  { key: 'A', text: 'By shedding foliage to eliminate transpiring surface area' },
                  { key: 'B', text: 'By secreting anti-freeze resins through their taproots' },
                  { key: 'C', text: 'By doubling chlorophyll production in the bark' },
                  { key: 'D', text: 'By absorbing atmospheric snowfall through branches' },
                ],
              },
              {
                order: 3,
                question: 'Why does the professor discuss the medieval three-field crop rotation system?',
                explanation: 'The example illustrates an agricultural innovation that prevented soil nitrogen exhaustion and increased food yields.',
                correctAnswer: 'B',
                options: [
                  { key: 'A', text: 'To criticize feudal landlords for exploiting serfs' },
                  { key: 'B', text: 'To demonstrate how crop variation prevents soil nutrient depletion' },
                  { key: 'C', text: 'To argue that wheat is nutritionally superior to barley' },
                  { key: 'D', text: 'To prove that medieval Europeans lacked botanical knowledge' },
                ],
              },
              {
                order: 4,
                question: 'What technological advance allowed Renaissance painters to achieve unprecedented atmospheric depth?',
                explanation: 'The art history professor explains that oil painting glazes allowed subtle gradations of light and shadow (sfumato).',
                correctAnswer: 'D',
                options: [
                  { key: 'A', text: 'The invention of motorized canvas easels' },
                  { key: 'B', text: 'The exclusive adoption of water-based tempera paints' },
                  { key: 'C', text: 'The use of synthetic acrylic polymers' },
                  { key: 'D', text: 'The layering of translucent oil glazes and linear perspective' },
                ],
              },
              {
                order: 5,
                question: 'What conclusion does the astronomy professor draw regarding ocean presence on Jupiter\'s moon Europa?',
                explanation: 'Surface ice fracture patterns and magnetic readings suggest a liquid saltwater ocean exists beneath the crust.',
                correctAnswer: 'B',
                options: [
                  { key: 'A', text: 'Europa is completely desiccated with no traces of water' },
                  { key: 'B', text: 'A deep liquid saltwater ocean likely exists beneath the icy crust' },
                  { key: 'C', text: 'Europa possesses surface oceans identical to Earth\'s Pacific' },
                  { key: 'D', text: 'Volcanic lava covers ninety percent of Europa\'s terrain' },
                ],
              },
            ],
          },
          {
            title: 'Speaker Attitude',
            slug: 'speaker-attitude',
            level: 'Advanced',
            order: 3,
            formula: 'Replay Excerpt -> Analyze Intonation & Word Choice -> Infer Speaker Stance/Intent',
            explanation:
              'Pragmatic questions replay a short excerpt and ask what the speaker implies or feels (e.g., skeptical, enthusiastic, uncertain, sarcastic) based on intonation and understatement.\n\n### Examples\n1. Professor: "Well, that hypothesis was popular in the 1970s, but modern spectroscopic data paints a rather different picture."\n2. The professor\'s tone indicates skepticism regarding the historical claim that the library was burned in a single catastrophic fire.\n3. Student: "Wait, so the entire migration depends on wind currents they can\'t even predict?" (Tone: Bewildered and intrigued).',
            initialMastery: 0,
            initialStatus: 'NOT_STARTED',
            questions: [
              {
                order: 1,
                question: 'Listen again to part of the lecture. What does the professor imply when she says: "Well, that\'s what the textbook claims, anyway..."?',
                explanation: 'Her intonation and dismissive phrasing indicate skepticism toward the textbook\'s oversimplified assertion.',
                correctAnswer: 'C',
                options: [
                  { key: 'A', text: 'She agrees wholeheartedly with the authors' },
                  { key: 'B', text: 'She forgot to assign the required chapter reading' },
                  { key: 'C', text: 'She is skeptical of the accuracy of the textbook\'s claim' },
                  { key: 'D', text: 'She wrote the textbook herself years ago' },
                ],
              },
              {
                order: 2,
                question: 'What is the student\'s attitude when he exclaims: "Wait, they actually believed the Earth was hollow?!"',
                explanation: 'His sharp rising pitch and rhetorical questioning signify astonishment and amusement.',
                correctAnswer: 'A',
                options: [
                  { key: 'A', text: 'Astonishment and disbelief at the historical misconception' },
                  { key: 'B', text: 'Hostility toward the professor\'s explanation' },
                  { key: 'C', text: 'Fear that the planet may indeed collapse' },
                  { key: 'D', text: 'Complete indifference to geological history' },
                ],
              },
              {
                order: 3,
                question: 'When the professor remarks: "I suppose that\'s one way to balance the budget," what is his tone?',
                explanation: 'Understatement accompanied by ironic pauses indicates mild disapproval or sarcastic criticism.',
                correctAnswer: 'B',
                options: [
                  { key: 'A', text: 'Enthusiastic support' },
                  { key: 'B', text: 'Subtle sarcasm and doubt' },
                  { key: 'C', text: 'Formal neutrality' },
                  { key: 'D', text: 'Desperate urgency' },
                ],
              },
              {
                order: 4,
                question: 'Why does the student say: "I think I see where this is going..."?',
                explanation: 'She says this to demonstrate that she anticipates the logical conclusion of the professor\'s thought experiment.',
                correctAnswer: 'D',
                options: [
                  { key: 'A', text: 'She wants to leave the classroom immediately' },
                  { key: 'B', text: 'She cannot see the slide projector screen clearly' },
                  { key: 'C', text: 'She disagrees with the experiment\'s premise' },
                  { key: 'D', text: 'She has deduced the outcome of the professor\'s argument' },
                ],
              },
              {
                order: 5,
                question: 'How does the professor feel about the new archaeological discovery in Peru?',
                explanation: 'The professor repeatedly uses praising adverbs ("extraordinary," "groundbreaking"), reflecting genuine professional excitement.',
                correctAnswer: 'C',
                options: [
                  { key: 'A', text: 'Reluctant to discuss unverified artifacts' },
                  { key: 'B', text: 'Bored because similar sites exist elsewhere' },
                  { key: 'C', text: 'Genuinely enthusiastic about its potential to revise timelines' },
                  { key: 'D', text: 'Distrustful of the radiometric carbon dating methodology' },
                ],
              },
            ],
          },
          {
            title: 'Structural Organization',
            slug: 'listening-organization',
            level: 'Intermediate',
            order: 4,
            formula: 'Lecture Model: Cause & Effect | Classification Matrix | Chronological Stages',
            explanation:
              'These questions test your understanding of how a lecture is organized: chronological evolution, classification of types, comparative contrast, or cause-and-effect processes.\n\n### Examples\n1. The professor organizes the lecture chronologically: first discussing archaic cave paintings, then classical fresco techniques.\n2. The discussion compares two evolutionary theories: phyletic gradualism versus punctuated equilibrium.\n3. The lecturer uses a cause-and-effect structure to delineate how volcanic ash clouds induce hemispheric cooling.',
            initialMastery: 0,
            initialStatus: 'NOT_STARTED',
            questions: [
              {
                order: 1,
                question: 'How is the biology lecture primarily structured?',
                explanation: 'The professor contrasts two distinct mammalian adaptations: metabolic torpor vs. full winter hibernation.',
                correctAnswer: 'B',
                options: [
                  { key: 'A', text: 'A chronological timeline of twentieth-century zoologists' },
                  { key: 'B', text: 'A comparative analysis of two physiological wintering adaptations' },
                  { key: 'C', text: 'A step-by-step description of a surgical veterinary procedure' },
                  { key: 'D', text: 'A cause-and-effect explanation of greenhouse gas emissions' },
                ],
              },
              {
                order: 2,
                question: 'In the lecture on volcanic geology, what sequence does the professor follow?',
                explanation: 'The lecturer traces the lifecycle of a magma chamber from mantle ascent to eruption and caldera collapse.',
                correctAnswer: 'A',
                options: [
                  { key: 'A', text: 'Sequential chronological stages from magma accumulation to caldera formation' },
                  { key: 'B', text: 'Alphabetical listing of worldwide volcanic mountain ranges' },
                  { key: 'C', text: 'Debate between two disagreeing volcanologists' },
                  { key: 'D', text: 'Economic analysis of volcanic mineral export revenues' },
                ],
              },
              {
                order: 3,
                question: 'The professor categorizes the oceanic zones based on which physical parameter?',
                explanation: 'Oceanographers classify pelagic zones primarily by depth and solar light penetration (photic vs aphotic).',
                correctAnswer: 'C',
                options: [
                  { key: 'A', text: 'Water salinity and mineral chemical saturation' },
                  { key: 'B', text: 'Proximity to international maritime commercial lanes' },
                  { key: 'C', text: 'Depth intervals and the penetration of solar sunlight' },
                  { key: 'D', text: 'The prevalence of apex predator shark species' },
                ],
              },
              {
                order: 4,
                question: 'Why does the professor pause to review the "Bohr model" before discussing quantum mechanics?',
                explanation: 'The foundational model provides essential background knowledge necessary to understand why quantum theory emerged.',
                correctAnswer: 'D',
                options: [
                  { key: 'A', text: 'To fill extra remaining lecture time' },
                  { key: 'B', text: 'To announce an upcoming homework quiz' },
                  { key: 'C', text: 'To prove that early Danish physicists were infallible' },
                  { key: 'D', text: 'To establish prerequisite conceptual context for the modern theory' },
                ],
              },
              {
                order: 5,
                question: 'In a table-matching question about sedimentary vs. igneous rocks, which trait belongs to igneous rocks?',
                explanation: 'Igneous rocks originate from cooled molten magma/lava, whereas sedimentary rocks form from compressed strata.',
                correctAnswer: 'A',
                options: [
                  { key: 'A', text: 'Formed through the cooling and solidification of molten magma' },
                  { key: 'B', text: 'Formed from compressed organic fossil fragments' },
                  { key: 'C', text: 'Composed strictly of wind-deposited sand grains' },
                  { key: 'D', text: 'Found exclusively on the ocean floor under extreme pressure' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────────────────
  // SECTION 6: Speaking
  // ──────────────────────────────────────────────────────────
  {
    name: 'Speaking',
    slug: 'speaking',
    description: 'Independent opinion task and integrated academic response templates.',
    order: 6,
    status: 'LOCKED',
    topics: [
      {
        name: 'TOEFL iBT Speaking Masterclass',
        slug: 'speaking-masterclass',
        description: 'Response templates, delivery pacing, and scoring rubrics for Tasks 1-4.',
        order: 1,
        lessons: [
          {
            title: 'Independent Speaking (Task 1)',
            slug: 'speaking-independent',
            level: 'Intermediate',
            order: 1,
            formula: 'Template: Stance (5s) -> Reason 1 + Example (20s) -> Reason 2 + Example (18s) -> Wrap-up (2s)',
            explanation:
              'Task 1 gives you 15 seconds to prepare and 45 seconds to speak on a paired choice (e.g., studying alone vs. studying in groups). Structure and fluency determine your score.\n\n### Examples\n1. Stance: "In my perspective, I firmly prefer studying independently because it maximizes personal concentration."\n2. Personal Example: "For instance, when preparing for physics exams, working in solitude allows me to focus on difficult formulas."\n3. Conclusion: "Therefore, independent study ensures higher retention and better academic results."',
            initialMastery: 0,
            initialStatus: 'NOT_STARTED',
            questions: [
              {
                order: 1,
                question: 'In TOEFL Speaking Task 1, how should a test-taker spend the 15-second preparation period?',
                explanation: 'Jot down your clear stance and two quick concrete keywords for examples; never attempt to write full sentences.',
                correctAnswer: 'B',
                options: [
                  { key: 'A', text: 'Write down a complete scripted paragraph to read aloud' },
                  { key: 'B', text: 'Jot down a decisive stance and two specific keyword ideas' },
                  { key: 'C', text: 'Silently repeat the question prompt word-for-word' },
                  { key: 'D', text: 'Rest with your eyes closed to stay calm' },
                ],
              },
              {
                order: 2,
                question: 'Which of the following represents the most effective opening for an independent response?',
                explanation: 'A decisive, direct statement of your personal stance immediately signals clear organization to the raters.',
                correctAnswer: 'A',
                options: [
                  { key: 'A', text: '"I firmly believe that students should live on campus because..."' },
                  { key: 'B', text: '"There are both pros and cons to living on campus and off campus..."' },
                  { key: 'C', text: '"Well, this is an extremely intriguing philosophical dilemma..."' },
                  { key: 'D', text: '"Today I am going to talk about the question you asked me..."' },
                ],
              },
              {
                order: 3,
                question: 'Why are specific personal examples superior to generalized philosophical claims in Task 1?',
                explanation: 'Concrete anecdotes ("When I was a sophomore...") are easier to articulate naturally and prove language fluency.',
                correctAnswer: 'C',
                options: [
                  { key: 'A', text: 'Raters verify whether your personal story actually occurred' },
                  { key: 'B', text: 'General statements are banned by the testing software' },
                  { key: 'C', text: 'Concrete examples showcase descriptive vocabulary and natural discourse flow' },
                  { key: 'D', text: 'Personal examples require fewer grammatical tenses' },
                ],
              },
              {
                order: 4,
                question: 'If you finish speaking with 8 seconds remaining on the clock, what is the best strategy?',
                explanation: 'Deliver a concise concluding sentence reinforcing your thesis rather than sitting in awkward silence.',
                correctAnswer: 'D',
                options: [
                  { key: 'A', text: 'Say "I am done" and stay silent' },
                  { key: 'B', text: 'Repeat your entire response from the beginning' },
                  { key: 'C', text: 'Apologize to the rater for finishing early' },
                  { key: 'D', text: 'Summarize your core message with a crisp concluding sentence' },
                ],
              },
              {
                order: 5,
                question: 'What delivery factor contributes most heavily to a high Delivery score (3.5 - 4.0)?',
                explanation: 'A steady rhythm, clear intonation, and minimal unnatural hesitation pauses characterize high-scoring delivery.',
                correctAnswer: 'B',
                options: [
                  { key: 'A', text: 'Speaking with an exaggerated, forced British accent' },
                  { key: 'B', text: 'Fluid pacing with natural rhythm, clear intonation, and few filler pauses' },
                  { key: 'C', text: 'Talking as quickly as humanly possible to fit 200 words' },
                  { key: 'D', text: 'Shouting into the microphone to maximize audio clarity' },
                ],
              },
            ],
          },
          {
            title: 'Integrated Speaking: Campus Situations',
            slug: 'speaking-campus-integrated',
            level: 'Advanced',
            order: 2,
            formula: 'Template: Reading Notice (10s) -> Student Stance (5s) -> Reason 1 (20s) -> Reason 2 (20s) -> Wrap-up (5s)',
            explanation:
              'Read a short campus announcement (45s), listen to two students react to it, then summarize the primary speaker\'s opinion and their two stated reasons within 60 seconds.\n\n### Examples\n1. Reading Notice: The dining hall will eliminate plastic trays to conserve water.\n2. Student Opinion: The woman enthusiastically supports this because students waste far less food carrying individual plates.\n3. Reason 2: She notes the energy savings align with the environmental sustainability initiative.',
            initialMastery: 0,
            initialStatus: 'NOT_STARTED',
            questions: [
              {
                order: 1,
                question: 'What is the primary role of the reading passage in Speaking Task 2?',
                explanation: 'The reading passage simply provides context for the campus change; your spoken response must focus primarily on the student\'s reaction.',
                correctAnswer: 'A',
                options: [
                  { key: 'A', text: 'To introduce the campus proposal or policy change that the conversation addresses' },
                  { key: 'B', text: 'To be read aloud word-for-word during your response' },
                  { key: 'C', text: 'To provide your personal stance on university administration' },
                  { key: 'D', text: 'To test your reading speed under extreme time constraints' },
                ],
              },
              {
                order: 2,
                question: 'Approximately how much of your 60-second speaking time should be allocated to summarizing the reading announcement?',
                explanation: 'Spend no more than 10 to 12 seconds on the reading; allocate the remaining 48-50 seconds to the student\'s specific arguments.',
                correctAnswer: 'C',
                options: [
                  { key: 'A', text: '35 to 40 seconds' },
                  { key: 'B', text: 'The entire 60 seconds' },
                  { key: 'C', text: '10 to 12 seconds' },
                  { key: 'D', text: 'Exactly 30 seconds' },
                ],
              },
              {
                order: 3,
                question: 'Should you include your own personal thoughts on the campus issue in Task 2?',
                explanation: 'No! Task 2 is strictly an integrated synthesis task. Inserting personal opinions will lower your score.',
                correctAnswer: 'D',
                options: [
                  { key: 'A', text: 'Yes, dedicating at least 20 seconds to your own opinion' },
                  { key: 'B', text: 'Only if you disagree with both students' },
                  { key: 'C', text: 'Yes, if you have experienced a similar issue at your school' },
                  { key: 'D', text: 'No; you must strictly synthesize the student\'s stated viewpoint and reasons' },
                ],
              },
              {
                order: 4,
                question: 'When the student speaker gives two reasons for disagreeing with a policy, how should you structure your response?',
                explanation: 'State the student\'s disagreement, then detail Reason 1 with its examples, followed by Reason 2 with its examples.',
                correctAnswer: 'B',
                options: [
                  { key: 'A', text: 'Combine both reasons into a single vague sentence' },
                  { key: 'B', text: 'Present Reason 1 with supporting details, then transition clearly to Reason 2' },
                  { key: 'C', text: 'Focus solely on Reason 1 and omit Reason 2' },
                  { key: 'D', text: 'Argue that the student is mistaken and defend the administration' },
                ],
              },
              {
                order: 5,
                question: 'What transition phrase effectively signals the introduction of the student\'s second argument?',
                explanation: 'Cohesive transitions like "Furthermore, he points out that..." clearly guide the listener through your response.',
                correctAnswer: 'A',
                options: [
                  { key: 'A', text: '"Furthermore, he points out that..."' },
                  { key: 'B', text: '"In spite of the weather..."' },
                  { key: 'C', text: '"On the other hand, I personally believe..."' },
                  { key: 'D', text: '"Nevertheless, the reading claims..."' },
                ],
              },
            ],
          },
          {
            title: 'Integrated Speaking: Lecture Synthesis',
            slug: 'speaking-lecture-synthesis',
            level: 'Advanced',
            order: 3,
            formula: 'Template: Define Academic Concept (10s) -> Professor Example 1 (25s) -> Example 2 (20s) -> Wrap-up (5s)',
            explanation:
              'Task 3 combines a short textbook reading defining an academic concept with a lecture giving specific examples. Task 4 summarizes a standalone lecture on a scientific or business topic.\n\n### Examples\n1. Concept: Behavioral mimicry occurs when a harmless organism evolves patterns resembling a toxic predator.\n2. Lecture Example: The professor illustrates this with the hoverfly, displaying yellow and black stripes identical to stinging wasps.\n3. Synthesis: Birds avoid the harmless hoverfly, securing protection without producing venom.',
            initialMastery: 0,
            initialStatus: 'NOT_STARTED',
            questions: [
              {
                order: 1,
                question: 'In Task 3 (Academic Concept + Lecture), what is the key relationship between the reading and the listening?',
                explanation: 'The reading introduces an academic term/definition; the professor\'s lecture provides one or two specific concrete examples illustrating it.',
                correctAnswer: 'C',
                options: [
                  { key: 'A', text: 'The lecture directly contradicts the reading definition' },
                  { key: 'B', text: 'The reading and lecture are completely unrelated' },
                  { key: 'C', text: 'The lecture provides concrete real-world examples that illustrate the reading\'s concept' },
                  { key: 'D', text: 'The professor quizzes the students on textbook vocabulary' },
                ],
              },
              {
                order: 2,
                question: 'How should you begin your Task 3 spoken response?',
                explanation: 'State the concept name and its core definition extracted from the reading in 8-10 seconds.',
                correctAnswer: 'A',
                options: [
                  { key: 'A', text: 'Define the target concept briefly in your own words' },
                  { key: 'B', text: 'Describe the professor\'s voice and speaking tempo' },
                  { key: 'C', text: 'Recite all 100 words of the reading passage' },
                  { key: 'D', text: 'Give your personal opinion on whether the concept is interesting' },
                ],
              },
              {
                order: 3,
                question: 'In Task 4 (Standalone Academic Lecture), what must your response include?',
                explanation: 'Task 4 features a lecture with two distinct points or examples; you must summarize the overarching topic and both supporting points.',
                correctAnswer: 'D',
                options: [
                  { key: 'A', text: 'Only the introductory definition' },
                  { key: 'B', text: 'A critique of the professor\'s teaching methodology' },
                  { key: 'C', text: 'A comparison with courses you have taken at your home university' },
                  { key: 'D', text: 'The central topic and both main points or examples described by the professor' },
                ],
              },
              {
                order: 4,
                question: 'What is the most common error test-takers make during Task 4?',
                explanation: 'Spending too long on the first example and running out of time before explaining the second example.',
                correctAnswer: 'B',
                options: [
                  { key: 'A', text: 'Speaking too loudly into the microphone' },
                  { key: 'B', text: 'Spending 45 seconds on Example 1 and rushing or omitting Example 2' },
                  { key: 'C', text: 'Finishing the entire summary in under 20 seconds' },
                  { key: 'D', text: 'Using formal academic vocabulary' },
                ],
              },
              {
                order: 5,
                question: 'Which signpost effectively transitions between the two examples in an academic lecture synthesis?',
                explanation: '"The professor then provides a second example involving..." provides clear structural continuity.',
                correctAnswer: 'A',
                options: [
                  { key: 'A', text: '"The professor then provides a second example involving..."' },
                  { key: 'B', text: '"In conclusion, I disagree with..."' },
                  { key: 'C', text: '"On the contrary, the student stated..."' },
                  { key: 'D', text: '"As I was saying earlier..."' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────────────────
  // SECTION 7: Writing
  // ──────────────────────────────────────────────────────────
  {
    name: 'Writing',
    slug: 'writing',
    description: 'Integrated lecture-reading synthesis and academic discussion writing.',
    order: 7,
    status: 'LOCKED',
    topics: [
      {
        name: 'TOEFL iBT Academic Writing',
        slug: 'academic-writing',
        description: 'Writing for an Academic Discussion and Integrated Synthesis strategies.',
        order: 1,
        lessons: [
          {
            title: 'Academic Discussion Writing',
            slug: 'writing-academic-discussion',
            level: 'Advanced',
            order: 1,
            formula: 'Format: Acknowledge Classmates & State Stance (25w) -> Novel Rationale (50w) -> Concrete Example (35w)',
            explanation:
              'In this modern 10-minute task, a professor posts an academic question, two students provide short responses, and you must write a 100+ word contribution that adds original value.\n\n### Examples\n1. Prompt: Professor asks whether governments should prioritize funding space exploration or environmental protection.\n2. Stance: "While I acknowledge Andrew\'s point regarding satellite technology, I strongly align with Claire."\n3. Original Argument: "Atmospheric warming represents an immediate existential crisis that demands sovereign capital today."',
            initialMastery: 0,
            initialStatus: 'NOT_STARTED',
            questions: [
              {
                order: 1,
                question: 'What is the recommended word count for the Writing for an Academic Discussion task?',
                explanation: 'While the prompt suggests a minimum of 100 words, aiming for 120-150 well-developed words consistently secures top scores (4.5-5.0).',
                correctAnswer: 'C',
                options: [
                  { key: 'A', text: 'At least 500 words' },
                  { key: 'B', text: 'Exactly 50 words' },
                  { key: 'C', text: '120 to 150 words' },
                  { key: 'D', text: 'No more than 80 words' },
                ],
              },
              {
                order: 2,
                question: 'How should you engage with the other students\' opinions in the discussion board?',
                explanation: 'Acknowledge at least one student\'s perspective briefly, then introduce your own original justification.',
                correctAnswer: 'A',
                options: [
                  { key: 'A', text: 'Reference one classmate by name and contribute an original supporting reason' },
                  { key: 'B', text: 'Insult the classmate\'s intelligence directly' },
                  { key: 'C', text: 'Copy the classmate\'s sentences verbatim into your response' },
                  { key: 'D', text: 'Completely ignore the classmate posts and write an unrelated story' },
                ],
              },
              {
                order: 3,
                question: 'How much time do you have to read the prompt, formulate your ideas, and type your response?',
                explanation: 'Writing for an Academic Discussion has a strict 10-minute time limit.',
                correctAnswer: 'B',
                options: [
                  { key: 'A', text: '30 minutes' },
                  { key: 'B', text: '10 minutes' },
                  { key: 'C', text: '20 minutes' },
                  { key: 'D', text: '5 minutes' },
                ],
              },
              {
                order: 4,
                question: 'Which of the following would result in a score penalty in Academic Discussion Writing?',
                explanation: 'Simply rephrasing another student\'s exact argument without providing new reasoning or evidence incurs penalties for lack of development.',
                correctAnswer: 'D',
                options: [
                  { key: 'A', text: 'Using advanced grammatical subordinate clauses' },
                  { key: 'B', text: 'Providing a specific real-world example' },
                  { key: 'C', text: 'Writing 135 words with accurate spelling' },
                  { key: 'D', text: 'Merely repeating the exact argument of a previous student without any new ideas' },
                ],
              },
              {
                order: 5,
                question: 'What is the most effective way to spend the final 60 seconds of the 10-minute timer?',
                explanation: 'Proofread carefully for subject-verb agreement, verb tenses, and typographical errors.',
                correctAnswer: 'A',
                options: [
                  { key: 'A', text: 'Proofread for typographical errors, subject-verb agreement, and punctuation' },
                  { key: 'B', text: 'Erase your entire conclusion and rewrite it' },
                  { key: 'C', text: 'Close the browser window' },
                  { key: 'D', text: 'Add 50 random adjectives to increase word count' },
                ],
              },
            ],
          },
          {
            title: 'Integrated Writing Synthesis',
            slug: 'writing-integrated-synthesis',
            level: 'Advanced',
            order: 2,
            formula: 'Format: Intro (Tension) -> Body 1 (Reading 1 vs Lecture Counter) -> Body 2 (Point 2) -> Body 3 (Point 3)',
            explanation:
              'You read an academic passage with 3 points (3 mins), listen to a lecture that directly refutes them (2 mins), and write an essay (20 mins, 250-300 words) summarizing how the lecture challenges the reading.\n\n### Examples\n1. The reading claims constructing offshore wind farms is economically unviable.\n2. Conversely, the lecturer refutes this by citing modular floating turbine technology that drastically reduces costs.\n3. In conclusion, the lecture systematically casts doubt on each objection raised in the reading.',
            initialMastery: 0,
            initialStatus: 'NOT_STARTED',
            questions: [
              {
                order: 1,
                question: 'What is the core objective of the Integrated Writing task?',
                explanation: 'The objective is to accurately summarize the lecture\'s specific counter-arguments and explain how they refute the reading passage\'s claims.',
                correctAnswer: 'B',
                options: [
                  { key: 'A', text: 'To argue your personal opinion on the controversial topic' },
                  { key: 'B', text: 'To explain how the lecture points challenge or cast doubt on points in the reading' },
                  { key: 'C', text: 'To correct the grammatical errors in the reading passage' },
                  { key: 'D', text: 'To describe what the professor sounded like' },
                ],
              },
              {
                order: 2,
                question: 'How many body paragraphs should an Integrated Writing essay typically contain?',
                explanation: 'Standard format: 3 body paragraphs, corresponding directly to the 3 main points and counter-points.',
                correctAnswer: 'C',
                options: [
                  { key: 'A', text: '1 single massive paragraph' },
                  { key: 'B', text: 'Exactly 7 paragraphs' },
                  { key: 'C', text: '3 body paragraphs (one for each main claim and counter-claim)' },
                  { key: 'D', text: 'Body paragraphs are not required' },
                ],
              },
              {
                order: 3,
                question: 'Which of the following reporting verbs is most appropriate for describing the lecturer\'s arguments?',
                explanation: 'Academic reporting verbs like "contends," "asserts," "refutes," and "disputes" demonstrate precise academic register.',
                correctAnswer: 'D',
                options: [
                  { key: 'A', text: 'talks about' },
                  { key: 'B', text: 'says' },
                  { key: 'C', text: 'goes like' },
                  { key: 'D', text: 'contends / refutes / casts doubt upon' },
                ],
              },
              {
                order: 4,
                question: 'Does the reading passage remain visible on screen while you write your essay?',
                explanation: 'Yes! The reading passage reappears on the left side of the screen during the 20-minute writing period.',
                correctAnswer: 'A',
                options: [
                  { key: 'A', text: 'Yes, the reading passage reappears on screen while you type' },
                  { key: 'B', text: 'No, you must memorize the entire reading in 3 minutes' },
                  { key: 'C', text: 'Only if you request special permission from the proctor' },
                  { key: 'D', text: 'It flashes on screen for 5 seconds every minute' },
                ],
              },
              {
                order: 5,
                question: 'What is the recommended essay length for Integrated Writing?',
                explanation: 'The official guideline is 150-225 words, but writing 250-300 detailed, accurate words ensures complete synthesis.',
                correctAnswer: 'B',
                options: [
                  { key: 'A', text: '50 to 75 words' },
                  { key: 'B', text: '225 to 300 words' },
                  { key: 'C', text: 'Over 1,000 words' },
                  { key: 'D', text: 'Exactly 100 words' },
                ],
              },
            ],
          },
          {
            title: 'Grammatical Precision & Lexis',
            slug: 'writing-grammar-lexis',
            level: 'Advanced',
            order: 3,
            formula: 'Syntactic Variety: Simple + Compound + Complex + Inverted + Varied Lexical Modifiers',
            explanation:
              'Scoring 28-30 on TOEFL Writing demands syntactic variety: compound-complex sentences, participial modifiers, nominalization, and zero grammatical errors.\n\n### Examples\n1. Rather than solely relying on monetary subsidies, municipal authorities should incentivize private green infrastructure.\n2. Had educational institutions embraced digital pedagogy earlier, the transitional disruption would have been minimized.\n3. Consequently, implementing progressive taxation policies fosters socioeconomic mobility.',
            initialMastery: 0,
            initialStatus: 'NOT_STARTED',
            questions: [
              {
                order: 1,
                question: 'Which of the following sentences exhibits high-level academic nominalization?',
                explanation: 'Nominalization transforms verbs/adjectives into abstract nouns: "The rapid expansion of urban centers precipitated..."',
                correctAnswer: 'C',
                options: [
                  { key: 'A', text: 'Cities grew really fast and that made a lot of problems happen.' },
                  { key: 'B', text: 'Because cities were growing fast, people had many troubles.' },
                  { key: 'C', text: 'The rapid expansion of urban centers precipitated severe housing shortages.' },
                  { key: 'D', text: 'Fast city growth is what caused everyone to not have homes.' },
                ],
              },
              {
                order: 2,
                question: 'What is a major stylistic flaw in academic writing called "comma splice"?',
                explanation: 'Joining two independent clauses with only a comma (without a coordinating conjunction) is a serious mechanical error.',
                correctAnswer: 'A',
                options: [
                  { key: 'A', text: 'Joining two independent clauses with only a comma' },
                  { key: 'B', text: 'Using too many semicolons in an essay' },
                  { key: 'C', text: 'Placing commas after introductory adverbial phrases' },
                  { key: 'D', text: 'Using parentheses inside a sentence' },
                ],
              },
              {
                order: 3,
                question: 'Why should writers vary sentence structures between simple, compound, and complex sentences?',
                explanation: 'Syntactic variety creates engaging prose rhythm and directly demonstrates grammatical competence to raters.',
                correctAnswer: 'B',
                options: [
                  { key: 'A', text: 'It confuses the human rater into giving a higher score' },
                  { key: 'B', text: 'It establishes rhythmic flow and demonstrates syntactic mastery' },
                  { key: 'C', text: 'Simple sentences are not allowed in TOEFL essays' },
                  { key: 'D', text: 'Longer sentences always receive higher scores regardless of grammar' },
                ],
              },
              {
                order: 4,
                question: 'Which fronted adverbial effectively introduces an empirical evidentiary finding?',
                explanation: '"Compelling empirical evidence indicates that..." establishes strong academic register.',
                correctAnswer: 'D',
                options: [
                  { key: 'A', text: '"Like I said before,"' },
                  { key: 'B', text: '"Believe it or not,"' },
                  { key: 'C', text: '"As anyone knows,"' },
                  { key: 'D', text: '"Compelling empirical evidence indicates that..."' },
                ],
              },
              {
                order: 5,
                question: 'Which sentence correctly avoids informal colloquial contractions?',
                explanation: 'Formal academic writing avoids contractions (don\'t -> do not; cannot, it is).',
                correctAnswer: 'A',
                options: [
                  { key: 'A', text: 'Policymakers cannot overlook the environmental consequences of unregulated deforestation.' },
                  { key: 'B', text: 'Policymakers can\'t overlook the environmental consequences...' },
                  { key: 'C', text: 'It won\'t be easy for governments to fix this mess.' },
                  { key: 'D', text: 'They\'re going to have to do something about it soon.' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────────────────
  // SECTION 8: TOEFL Practice
  // ──────────────────────────────────────────────────────────
  {
    name: 'TOEFL Practice',
    slug: 'toefl-practice',
    description: 'Sectional drills with timed condition simulations.',
    order: 8,
    status: 'LOCKED',
    topics: [
      {
        name: 'Sectional Speed & Accuracy Drills',
        slug: 'sectional-drills',
        description: 'Timed sectional sprints for Structure, Reading, and Listening.',
        order: 1,
        lessons: [
          {
            title: 'Structure & Written Expression Timed Sprint',
            slug: 'practice-structure-drill',
            level: 'Advanced',
            order: 1,
            formula: 'Rapid Scan: Identify Verb -> Check Subject -> Check Clause Connector -> Eliminate Distractors',
            explanation:
              'Timed sectional drill simulating actual exam pressure. Target pacing: 30 seconds per item across subject-verb agreement, clauses, parallel structure, and word forms.\n\n### Examples\n1. Not until the invention of the electron microscope was it possible to observe cellular organelles.\n2. Rarely has a single meteorological phenomenon generated such extensive inland flood damage.\n3. The chemical synthesis of synthetic indigo in 1897 rendered agricultural indigo plantations commercially obsolete.',
            initialMastery: 0,
            initialStatus: 'NOT_STARTED',
            questions: [
              {
                order: 1,
                question: 'Not until the invention of the electron microscope _____ to observe the intricate internal organelles of living bacterial cells.',
                explanation: 'Negative introductory phrase "Not until..." commands inversion: "was it possible".',
                correctAnswer: 'C',
                options: [
                  { key: 'A', text: 'it was possible' },
                  { key: 'B', text: 'possible it was' },
                  { key: 'C', text: 'was it possible' },
                  { key: 'D', text: 'it possible was' },
                ],
              },
              {
                order: 2,
                question: '_____ the deepest ocean trench on Earth, the Mariana Trench plunges nearly 11,000 meters beneath the Pacific surface.',
                explanation: 'An appositive noun phrase modifying "the Mariana Trench": "Considered the deepest ocean trench on Earth...".',
                correctAnswer: 'B',
                options: [
                  { key: 'A', text: 'It is considered' },
                  { key: 'B', text: 'Considered' },
                  { key: 'C', text: 'To consider' },
                  { key: 'D', text: 'That it is' },
                ],
              },
              {
                order: 3,
                question: 'Neither the senior archaeologists nor the excavation director _____ able to identify the peculiar bronze artifact.',
                explanation: 'Proximity agreement with "neither... nor": the singular noun "excavation director" is closest to the verb, requiring "was".',
                correctAnswer: 'A',
                options: [
                  { key: 'A', text: 'was' },
                  { key: 'B', text: 'were' },
                  { key: 'C', text: 'are' },
                  { key: 'D', text: 'have been' },
                ],
              },
              {
                order: 4,
                question: 'The migratory path of monarch butterflies spans thousands of miles, _____ generations to complete the round-trip cycle.',
                explanation: 'A present participle phrase denoting result: "requiring multiple generations...".',
                correctAnswer: 'D',
                options: [
                  { key: 'A', text: 'require' },
                  { key: 'B', text: 'required' },
                  { key: 'C', text: 'requires' },
                  { key: 'D', text: 'requiring' },
                ],
              },
              {
                order: 5,
                question: 'So rapidly _____ that urban planners struggled to install adequate sewage and transit infrastructure.',
                explanation: 'Result clause with initial "So + adverb" commands inversion: "did the metropolitan population expand".',
                correctAnswer: 'B',
                options: [
                  { key: 'A', text: 'the metropolitan population expanded' },
                  { key: 'B', text: 'did the metropolitan population expand' },
                  { key: 'C', text: 'expanded the metropolitan population' },
                  { key: 'D', text: 'was the metropolitan population expand' },
                ],
              },
            ],
          },
          {
            title: 'Academic Reading Speed Simulation',
            slug: 'practice-reading-simulation',
            level: 'Advanced',
            order: 2,
            formula: 'Keyword Anchor: Target Question Noun -> Scan Rapidly -> Read 2 Lines -> Select Answer',
            explanation:
              'Intensive drill focusing on pacing: 1.5 minutes per question. Train your eye to locate paragraph evidence swiftly without losing comprehension.\n\n### Examples\n1. Paragraph 1 introduces the concept of continental drift, originally proposed by Alfred Wegener in 1912.\n2. The fossil distribution of the freshwater reptile Mesosaurus across southern Africa and South America provides compelling proof.\n3. Mid-ocean ridge seafloor spreading rates vary between one and ten centimeters per year.',
            initialMastery: 0,
            initialStatus: 'NOT_STARTED',
            questions: [
              {
                order: 1,
                question: 'Which of the following best expresses the essential information in the highlighted sentence regarding continental drift?',
                explanation: 'The correct paraphrase captures Wegener\'s core claim that matched continental margins and identical fossil bands prove prehistoric continental unity.',
                correctAnswer: 'A',
                options: [
                  { key: 'A', text: 'Complementary coastlines and identical fossil records indicate continents were once unified' },
                  { key: 'B', text: 'Ancient reptiles swam across the Atlantic Ocean to colonize Africa and Brazil' },
                  { key: 'C', text: 'Wegener was ridiculed because geologists preferred ocean expansion models' },
                  { key: 'D', text: 'South America and Africa possess completely different geological strata' },
                ],
              },
              {
                order: 2,
                question: 'According to the passage, why was Alfred Wegener\'s hypothesis initially rejected by contemporary geophysicists?',
                explanation: 'Passage detail: Wegener could not identify a plausible physical mechanism capable of plowing solid continents through oceanic crust.',
                correctAnswer: 'C',
                options: [
                  { key: 'A', text: 'His maps were proven mathematically inaccurate' },
                  { key: 'B', text: 'He lacked formal academic credentials in meteorology' },
                  { key: 'C', text: 'He could not propose a convincing physical mechanism for continental propulsion' },
                  { key: 'D', text: 'Radiometric dating had not yet been invented' },
                ],
              },
              {
                order: 3,
                question: 'The word "plausible" in line 22 is closest in meaning to:',
                explanation: '"Plausible" means reasonable, believable, or credible.',
                correctAnswer: 'B',
                options: [
                  { key: 'A', text: 'fanciful' },
                  { key: 'B', text: 'credible' },
                  { key: 'C', text: 'ridiculous' },
                  { key: 'D', text: 'temporary' },
                ],
              },
              {
                order: 4,
                question: 'What role did post-WWII sonar ocean floor mapping play in plate tectonic theory?',
                explanation: 'Sonar surveys revealed mid-ocean ridges and geomagnetic reversal stripes, confirming seafloor spreading.',
                correctAnswer: 'D',
                options: [
                  { key: 'A', text: 'It disproved continental drift once and for all' },
                  { key: 'B', text: 'It allowed submarines to navigate without satellite GPS' },
                  { key: 'C', text: 'It demonstrated that ocean floors are static and unmoving' },
                  { key: 'D', text: 'It uncovered mid-ocean mountain chains and magnetic striping, verifying seafloor spreading' },
                ],
              },
              {
                order: 5,
                question: 'It can be inferred from the final paragraph that mantle convection currents are powered by:',
                explanation: 'The text links convection circulation to radioactive decay heat escaping from the Earth\'s core.',
                correctAnswer: 'A',
                options: [
                  { key: 'A', text: 'Subterranean primordial heat and radioactive decay within Earth\'s core' },
                  { key: 'B', text: 'Solar radiation penetrating deep subterranean crustal fissures' },
                  { key: 'C', text: 'The gravitational pull of the moon on magma reserves' },
                  { key: 'D', text: 'Atmospheric pressure variations across ocean surfaces' },
                ],
              },
            ],
          },
          {
            title: 'Academic Listening Sprint',
            slug: 'practice-listening-sprint',
            level: 'Advanced',
            order: 3,
            formula: 'Intent Pacing: Predict questions while listening -> Capture core nouns, verbs, and contrast cues',
            explanation:
              'Rapid-fire listening simulation with authentic speech rates, academic lectures, and pragmatic audio cues.\n\n### Examples\n1. Lecture Excerpt: "Let\'s turn our attention to bioluminescence in deep-sea cephalopods, specifically the vampire squid."\n2. Unlike shallow-water squids that expel dark melanin ink, deep-sea species eject a glowing bioluminescent cloud.\n3. This glowing cloud temporarily blinds predators in perpetual darkness, allowing escape.',
            initialMastery: 0,
            initialStatus: 'NOT_STARTED',
            questions: [
              {
                order: 1,
                question: 'What unusual defensive mechanism does the vampire squid possess compared to shallow-water cephalopods?',
                explanation: 'The lecture highlights that instead of dark ink (useless in pitch blackness), it expels a cloud of glowing bioluminescent mucus.',
                correctAnswer: 'B',
                options: [
                  { key: 'A', text: 'It releases lethal neurotoxins into the surrounding water' },
                  { key: 'B', text: 'It expels a glowing cloud of bioluminescent mucus to disorient predators' },
                  { key: 'C', text: 'It changes color to match brightly lit surface waters' },
                  { key: 'D', text: 'It burrows into the sandy seabed within seconds' },
                ],
              },
              {
                order: 2,
                question: 'Why does dark melanin ink fail to function as a defensive mechanism in the abyssal pelagic zone?',
                explanation: 'In the deep ocean where no ambient sunlight penetrates, dark black ink is completely invisible.',
                correctAnswer: 'C',
                options: [
                  { key: 'A', text: 'The extreme hydrostatic pressure solidifies the ink' },
                  { key: 'B', text: 'Melanin decomposes instantly at freezing temperatures' },
                  { key: 'C', text: 'In total darkness, black ink provides zero visual camouflage' },
                  { key: 'D', text: 'Predators in the deep sea have no eyes' },
                ],
              },
              {
                order: 3,
                question: 'According to the professor, what does the vampire squid feed on primarily?',
                explanation: 'The professor clarifies that despite its intimidating name, it is a detritivore consuming "marine snow" (dead organic debris).',
                correctAnswer: 'A',
                options: [
                  { key: 'A', text: 'Drifting organic detritus and fecal pellets known as marine snow' },
                  { key: 'B', text: 'Large predatory deep-sea sharks and giant crabs' },
                  { key: 'C', text: 'Living coral polyps scraped off seamounts' },
                  { key: 'D', text: 'Photosynthetic plankton found near the ocean surface' },
                ],
              },
              {
                order: 4,
                question: 'What is the professor\'s opinion regarding the taxonomy name "Vampyroteuthis infernalis"?',
                explanation: 'The professor chuckles and states the menacing Latin name ("vampire squid from hell") is comical considering its passive diet.',
                correctAnswer: 'D',
                options: [
                  { key: 'A', text: 'He believes it accurately reflects a terrifying apex predator' },
                  { key: 'B', text: 'He argues the species should be reclassified as a jellyfish' },
                  { key: 'C', text: 'He is angry that German biologists gave it a non-Latin name' },
                  { key: 'D', text: 'He finds the menacing name ironic given the creature\'s docile detritivorous habits' },
                ],
              },
              {
                order: 5,
                question: 'What metabolic adaptation allows the vampire squid to survive in oxygen minimum zones (OMZs)?',
                explanation: 'Its blood contains hemocyanin with extraordinary chemical affinity for binding dissolved oxygen.',
                correctAnswer: 'B',
                options: [
                  { key: 'A', text: 'It breathes air by swimming to the surface twice daily' },
                  { key: 'B', text: 'Its blood pigment possesses an exceptionally high binding affinity for oxygen' },
                  { key: 'C', text: 'It shuts down its heart and enters suspended animation indefinitely' },
                  { key: 'D', text: 'It produces oxygen internally through chemical chemosynthesis' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────────────────
  // SECTION 9: Mock TOEFL
  // ──────────────────────────────────────────────────────────
  {
    name: 'Mock TOEFL',
    slug: 'mock-toefl',
    description: 'Full-length diagnostic exams with scaled 0-120 scoring prediction.',
    order: 9,
    status: 'LOCKED',
    topics: [
      {
        name: 'Full Diagnostic Mock Exams',
        slug: 'diagnostic-simulations',
        description: 'Complete end-to-end TOEFL exam simulations with scaled score conversions.',
        order: 1,
        lessons: [
          {
            title: 'Diagnostic Exam 1: Structure & Vocabulary',
            slug: 'mock-diagnostic-exam-1',
            level: 'Advanced',
            order: 1,
            formula: 'Simulation: Full coverage across AWL vocabulary, grammatical syntax, and error recognition',
            explanation:
              'Comprehensive diagnostic simulation assessing your grammatical accuracy, syntactic mastery, and academic vocabulary under timed exam constraints.\n\n### Examples\n1. Although ozone is a pollutant at ground level, in the stratosphere it serves as a critical UV shield.\n2. Had seismic engineers not installed base-isolation dampers, the tower would have collapsed.\n3. The AWL term "ubiquitous" describes microplastic particles found throughout remote glaciers.',
            initialMastery: 0,
            initialStatus: 'NOT_STARTED',
            questions: [
              {
                order: 1,
                question: 'Although _____ in the upper atmosphere, ozone serves as an indispensable shield against mutagenic ultraviolet solar radiation.',
                explanation: 'Reduced adverbial clause: "Although present in the upper atmosphere...".',
                correctAnswer: 'B',
                options: [
                  { key: 'A', text: 'it present' },
                  { key: 'B', text: 'present' },
                  { key: 'C', text: 'is present' },
                  { key: 'D', text: 'it is presence' },
                ],
              },
              {
                order: 2,
                question: 'Had the geotechnical engineers not reinforced the subterranean foundation piles, the historical cathedral _____ catastrophic settling.',
                explanation: 'Inverted third conditional requires "would have suffered" in the independent result clause.',
                correctAnswer: 'C',
                options: [
                  { key: 'A', text: 'will suffer' },
                  { key: 'B', text: 'suffered' },
                  { key: 'C', text: 'would have suffered' },
                  { key: 'D', text: 'had suffered' },
                ],
              },
              {
                order: 3,
                question: 'In academic research, a "ubiquitous" organism is one that is found:',
                explanation: 'AWL term: "ubiquitous" means present, appearing, or found everywhere simultaneously.',
                correctAnswer: 'A',
                options: [
                  { key: 'A', text: 'everywhere and across diverse ecosystems' },
                  { key: 'B', text: 'only in deep hydrothermal vents' },
                  { key: 'C', text: 'exclusively in frozen tundra' },
                  { key: 'D', text: 'on the brink of imminent extinction' },
                ],
              },
              {
                order: 4,
                question: 'Neither the principal investigator nor the laboratory technicians _____ able to duplicate the unexpected calorimetric anomaly.',
                explanation: 'Proximity agreement: plural "laboratory technicians" nearest to verb requires plural "were".',
                correctAnswer: 'B',
                options: [
                  { key: 'A', text: 'was' },
                  { key: 'B', text: 'were' },
                  { key: 'C', text: 'is' },
                  { key: 'D', text: 'has been' },
                ],
              },
              {
                order: 5,
                question: 'Dendroclimatologists analyze tree rings not only to determine age _____ to reconstruct prehistoric precipitation levels.',
                explanation: 'Parallel correlative pair "not only [X] but also [Y]": "but also to reconstruct".',
                correctAnswer: 'D',
                options: [
                  { key: 'A', text: 'and also' },
                  { key: 'B', text: 'as well' },
                  { key: 'C', text: 'or' },
                  { key: 'D', text: 'but also' },
                ],
              },
            ],
          },
          {
            title: 'Diagnostic Exam 2: Reading & Listening Synthesis',
            slug: 'mock-diagnostic-exam-2',
            level: 'Advanced',
            order: 2,
            formula: 'Simulation: Multi-paragraph analytical synthesis + Lecture comprehension and pragmatic inference',
            explanation:
              'Full-spectrum diagnostic measuring your ability to process complex academic information, synthesize multiple viewpoints, and maintain stamina.\n\n### Examples\n1. The transition from nomadic hunter-gatherer bands to settled Neolithic agrarian villages in the Fertile Crescent.\n2. Einkorn wheat underwent selective phenotypic modification due to human harvesting practices.\n3. The maritime shipping revolution lowered bulk transport tariffs compared to overland caravan routes.',
            initialMastery: 0,
            initialStatus: 'NOT_STARTED',
            questions: [
              {
                order: 1,
                question: 'According to the diagnostic passage, what was the primary catalyst for the Neolithic agricultural transition in the Fertile Crescent?',
                explanation: 'Climatological stabilization and warmer post-glacial temperatures allowed wild cereal grasses to proliferate reliably.',
                correctAnswer: 'C',
                options: [
                  { key: 'A', text: 'The sudden global extinction of all edible plant species' },
                  { key: 'B', text: 'The invention of motorized bronze plows' },
                  { key: 'C', text: 'Post-glacial climatic warming and predictable seasonal precipitation' },
                  { key: 'D', text: 'Direct trade with South American agrarian communities' },
                ],
              },
              {
                order: 2,
                question: 'It can be inferred from the lecture on maritime trade that seafloor navigation corridors were preferred over overland silk caravans because:',
                explanation: 'Maritime shipping dramatically lowered transport tariffs and allowed bulk cargo transit with fewer overland bandit hazards.',
                correctAnswer: 'A',
                options: [
                  { key: 'A', text: 'Cargo vessels could transport vastly larger volumes of commodities at lower cost' },
                  { key: 'B', text: 'Caravan camels were prone to chronic oceanic diseases' },
                  { key: 'C', text: 'European kings completely outlawed overland trade routes' },
                  { key: 'D', text: 'Overland trails were submerged under glacial lakes' },
                ],
              },
              {
                order: 3,
                question: 'Why does the professor highlight the non-shattering rachis mutation in domesticated wheat?',
                explanation: 'The non-shattering rachis kept grains attached to the stalk until harvested by farmers, enabling domestic cultivation.',
                correctAnswer: 'B',
                options: [
                  { key: 'A', text: 'To prove that ancient farmers possessed genetic laboratory tools' },
                  { key: 'B', text: 'To illustrate how selective human harvesting favored an otherwise disadvantageous wild trait' },
                  { key: 'C', text: 'To explain why wild birds preferred wild barley' },
                  { key: 'D', text: 'To argue that domestic wheat yields were inferior to wild grasses' },
                ],
              },
              {
                order: 4,
                question: 'What is the speaker\'s tone when reviewing seventeenth-century claims of spontaneous generation?',
                explanation: 'The speaker expresses polite intellectual amusement at how scholars once believed maggots generated from decaying meat spontaneously.',
                correctAnswer: 'D',
                options: [
                  { key: 'A', text: 'Fierce personal hostility toward past philosophers' },
                  { key: 'B', text: 'Panic that spontaneous generation might recur' },
                  { key: 'C', text: 'Solemn reverence for medieval scientific rigor' },
                  { key: 'D', text: 'Intellectual amusement accompanied by educational explanations' },
                ],
              },
              {
                order: 5,
                question: 'In synthesizing the passage and lecture, what overarching conclusion emerges regarding technological revolutions?',
                explanation: 'Technological paradigm shifts represent incremental convergences of environmental conditions and communicative innovation.',
                correctAnswer: 'C',
                options: [
                  { key: 'A', text: 'Technological progress occurs strictly in isolated individual minds' },
                  { key: 'B', text: 'Societies invariably collapse following agricultural revolutions' },
                  { key: 'C', text: 'Major revolutions emerge from converging ecological pressures and institutional innovations' },
                  { key: 'D', text: 'Ancient civilizations possessed superior computing technology to modern societies' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
