/**
 * Comprehensive TOEFL Content Data
 * Step-by-step roadmap to achieve 600+ TOEFL score
 * Includes detailed grammar explanations, tips & tricks, and Indonesian translations
 */

// ──────────────────────────────────────────────────────────
// TOEFL Tips & Tricks (used across pages)
// ──────────────────────────────────────────────────────────
export interface ToeflTip {
  en: string;
  id: string;
  category: 'grammar' | 'reading' | 'listening' | 'writing' | 'general' | 'vocabulary' | 'speaking' | 'practice' | 'mock';
}

export const TOEFL_TIPS: ToeflTip[] = [
  // Grammar Tips
  {
    en: 'Always identify the subject first before choosing the verb form. Look for intervening phrases that separate subject from verb.',
    id: 'Selalu identifikasi subjek terlebih dahulu sebelum memilih bentuk kata kerja. Perhatikan frasa penyela yang memisahkan subjek dari kata kerja.',
    category: 'grammar',
  },
  {
    en: 'In TOEFL, "neither...nor" and "either...or" follow proximity agreement — the verb agrees with the nearest subject.',
    id: 'Dalam TOEFL, "neither...nor" dan "either...or" mengikuti aturan kedekatan — kata kerja disesuaikan dengan subjek yang terdekat.',
    category: 'grammar',
  },
  {
    en: 'Watch for time markers like "since," "for," "already," "yet," "just," "recently" — they signal Present Perfect tense.',
    id: 'Perhatikan penanda waktu seperti "since," "for," "already," "yet," "just," "recently" — menandakan tense Present Perfect.',
    category: 'grammar',
  },
  {
    en: 'Passive voice is extremely common in academic TOEFL reading. The formula is: Subject + BE + Past Participle.',
    id: 'Kalimat pasif sangat umum dalam bacaan akademik TOEFL. Rumusnya: Subjek + BE + Past Participle (kata kerja bentuk ketiga).',
    category: 'grammar',
  },
  {
    en: 'In relative clauses, "who/whom" is for people, "which" is for things, and "that" can be used for both in restrictive clauses.',
    id: 'Dalam klausa relatif, "who/whom" untuk orang, "which" untuk benda, dan "that" bisa digunakan untuk keduanya dalam klausa restriktif.',
    category: 'grammar',
  },
  {
    en: 'Conditional sentences: Type 0 = general truth, Type 1 = possible future, Type 2 = unlikely present, Type 3 = impossible past.',
    id: 'Kalimat kondisional: Tipe 0 = kebenaran umum, Tipe 1 = kemungkinan masa depan, Tipe 2 = situasi tidak mungkin sekarang, Tipe 3 = hal mustahil di masa lalu.',
    category: 'grammar',
  },
  {
    en: 'A gerund (-ing form) can act as a subject, object, or complement. An infinitive (to + verb) often expresses purpose or intention.',
    id: 'Gerund (bentuk -ing) bisa menjadi subjek, objek, atau pelengkap. Infinitive (to + verb) sering mengekspresikan tujuan atau niat.',
    category: 'grammar',
  },
  {
    en: 'Negative inversion: words like "Rarely", "Never", "Seldom", "Hardly" at the start of a sentence require auxiliary inversion (Aux + Subject + Verb).',
    id: 'Inversi negatif: kata seperti "Rarely", "Never", "Seldom", "Hardly" di awal kalimat mewajibkan inversi kata bantu (Aux + Subjek + Kata Kerja).',
    category: 'grammar',
  },

  // Vocabulary Tips
  {
    en: 'Build your vocabulary with context — learn words in sentences, not just definitions. Focus on Academic Word List (AWL).',
    id: 'Bangun kosakata dengan konteks — pelajari kata dalam kalimat, bukan hanya definisi. Fokus pada Academic Word List (AWL).',
    category: 'vocabulary',
  },
  {
    en: 'Master Greek and Latin roots (e.g., "spect" = to see, "tract" = to pull). Recognizing root words helps you infer unfamiliar academic vocabulary.',
    id: 'Kuasai akar kata Yunani dan Latin (misal "spect" = melihat, "tract" = menarik). Mengenali akar kata membantu menebak makna kosakata akademik baru.',
    category: 'vocabulary',
  },
  {
    en: 'Pay attention to academic collocations: verbs like "conduct research", "formulate hypotheses", and "draw conclusions" frequently appear in TOEFL.',
    id: 'Perhatikan kolokasi akademik: kata kerja seperti "conduct research", "formulate hypotheses", dan "draw conclusions" sangat sering muncul di TOEFL.',
    category: 'vocabulary',
  },

  // Reading Tips
  {
    en: 'For TOEFL Reading: skim the passage first, then read questions before re-reading for specific answers.',
    id: 'Untuk Reading TOEFL: baca sekilas dulu, lalu baca pertanyaannya sebelum membaca ulang untuk menemukan jawaban spesifik.',
    category: 'reading',
  },
  {
    en: 'Practice reading academic texts from journals in fields like biology, history, psychology, and astronomy — these are TOEFL favorites.',
    id: 'Berlatihlah membaca teks akademik dari jurnal di bidang biologi, sejarah, psikologi, dan astronomi — ini adalah topik favorit TOEFL.',
    category: 'reading',
  },
  {
    en: 'For negative factual questions ("EXCEPT" / "NOT"), eliminate the three options explicitly mentioned in the text to isolate the untrue choice.',
    id: 'Untuk soal fakta negatif ("EXCEPT" / "NOT"), eliminasi tiga opsi yang disebutkan secara jelas dalam teks untuk menyisakan pilihan yang tidak benar.',
    category: 'reading',
  },
  {
    en: 'Sentence insertion questions test cohesion. Check for reference words (this, that, these, such) immediately following the target insertion point.',
    id: 'Pertanyaan penyisipan kalimat menguji keterpaduan wacana. Periksa kata rujukan (this, that, these, such) tepat setelah titik penyisipan target.',
    category: 'reading',
  },

  // Listening Tips
  {
    en: 'For Listening: take notes using abbreviations and symbols. Focus on main ideas, examples, and speaker attitude.',
    id: 'Untuk Listening: catat menggunakan singkatan dan simbol. Fokus pada ide utama, contoh, dan sikap pembicara.',
    category: 'listening',
  },
  {
    en: 'Listen closely for discourse transitions such as "however," "on the other hand," and "unexpectedly" — questions often target contrasting points.',
    id: 'Dengarkan baik-baik penanda transisi seperti "however," "on the other hand," dan "unexpectedly" — pertanyaan sering menguji poin kontras tersebut.',
    category: 'listening',
  },
  {
    en: 'Notice rhetorical questions in lectures. When a professor asks a question and answers it, it signals a primary testable concept.',
    id: 'Perhatikan pertanyaan retoris dalam kuliah. Ketika dosen bertanya lalu menjawabnya sendiri, itu menandakan konsep penting yang diujikan.',
    category: 'listening',
  },

  // Speaking Tips
  {
    en: 'Independent Speaking: Use the 15-second prep time to jot down 2 concrete reasons. Start speaking immediately with a decisive topic sentence.',
    id: 'Speaking Mandiri: Gunakan 15 detik waktu persiapan untuk mencatat 2 alasan konkret. Mulailah berbicara langsung dengan kalimat topik yang tegas.',
    category: 'speaking',
  },
  {
    en: 'Integrated Speaking: Focus 70% of your response time on summarizing the speaker\'s arguments and specific supporting rationale.',
    id: 'Speaking Terpadu: Alokasikan 70% waktu responmu untuk meringkas argumen pembicara beserta alasan pendukung yang spesifik.',
    category: 'speaking',
  },

  // Writing Tips
  {
    en: 'Academic Discussion Writing: Express your personal stance in the first sentence, then explicitly reference and build upon classmate contributions.',
    id: 'Menulis Diskusi Akademik: Nyatakan pendirian pribadimu di kalimat pertama, lalu rujuk dan kembangkan kontribusi teman sekelas secara eksplisit.',
    category: 'writing',
  },
  {
    en: 'Integrated Writing: Synthesize contrasts between reading and lecture. Use academic reporting verbs: "The lecturer contends," "refutes," "disputes."',
    id: 'Menulis Terpadu: Sintesiskan perbedaan bacaan dan kuliah. Gunakan kata kerja pelapor akademik: "The lecturer contends," "refutes," "disputes."',
    category: 'writing',
  },

  // General & Practice Tips
  {
    en: 'Time management: spend no more than 20 minutes per reading passage. For Structure, aim for 30 seconds per question.',
    id: 'Manajemen waktu: habiskan maksimal 20 menit per bacaan. Untuk Structure, targetkan 30 detik per pertanyaan.',
    category: 'general',
  },
  {
    en: 'Full diagnostic simulations train mental stamina. Treat practice tests with identical timing rules to eliminate test anxiety.',
    id: 'Simulasi diagnostik penuh melatih stamina mental. Perlakukan tes latihan dengan aturan waktu yang sama persis untuk mengatasi kecemasan ujian.',
    category: 'practice',
  },
  {
    en: 'Aiming for 600+ requires systematic error analysis. Never move past an incorrect answer until you can explain the rule violation clearly.',
    id: 'Menargetkan skor 600+ menuntut analisis kesalahan sistematis. Jangan abaikan jawaban salah sampai kamu bisa menjelaskan pelanggaran aturannya dengan jelas.',
    category: 'mock',
  },
];

// ──────────────────────────────────────────────────────────
// Bilingual Grammar & Lesson Details
// ──────────────────────────────────────────────────────────
export interface BilingualContent {
  en: string;
  id: string;
}

export interface GrammarTipDetail {
  title: BilingualContent;
  description: BilingualContent;
  formula: string;
  keySignals: BilingualContent[];
  commonMistakes: BilingualContent[];
  toeflTrick: BilingualContent;
}

export const GRAMMAR_DETAILS: Record<string, GrammarTipDetail> = {
  // ── SECTION 1: English Foundation ──
  'sentence-elements-clauses': {
    title: {
      en: 'Sentence Elements & Clause Boundaries',
      id: 'Elemen Kalimat & Batasan Klausa',
    },
    description: {
      en: 'Every complete English sentence requires at least one independent clause containing a subject and a finite verb. TOEFL tests your ability to distinguish complete sentences from fragments and run-ons.',
      id: 'Setiap kalimat bahasa Inggris lengkap membutuhkan minimal satu klausa independen yang memiliki subjek dan kata kerja utama. TOEFL menguji kemampuan membedakan kalimat lengkap dari fragmen atau kalimat bersambung tanpa tanda baca.',
    },
    formula: 'Independent Clause: Subject + Verb (+ Object/Complement) | Complex: Subordinator + S + V, S + V',
    keySignals: [
      { en: 'Finite verbs vs. non-finite participles (doing, to do)', id: 'Kata kerja berwaktu (finite) vs partisip (-ing, to do)' },
      { en: 'Subordinators: because, although, since, whereas, if', id: 'Kata hubung subordinatif: because, although, since, whereas, if' },
      { en: 'Prepositional phrases cannot function as sentence subjects', id: 'Frasa preposisi tidak dapat berfungsi sebagai subjek kalimat' },
    ],
    commonMistakes: [
      { en: 'Treating a participle clause (-ing phrase) as a complete predicate', id: 'Menganggap frasa -ing sebagai predikat kalimat lengkap' },
      { en: 'Comma splices: joining two independent clauses with only a comma', id: 'Menghubungkan dua klausa independen hanya dengan koma (comma splice)' },
      { en: 'Missing main verb in sentences with multiple relative clauses', id: 'Kehilangan kata kerja utama dalam kalimat dengan banyak klausa relatif' },
    ],
    toeflTrick: {
      en: 'Cross out prepositional phrases with your pencil mentally. What remains must be a clean Subject + Verb pairing.',
      id: 'Coretlah frasa preposisi secara mental. Yang tersisa harus berupa pasangan Subjek + Kata Kerja yang utuh.',
    },
  },
  'conjunctions-transitions': {
    title: {
      en: 'Conjunctions & Academic Transitions',
      id: 'Kata Hubung & Transisi Akademik',
    },
    description: {
      en: 'Academic discourse relies heavily on precise logical connectors. Coordinating conjunctions join equal grammatical units, while conjunctive adverbs show relationships between independent clauses.',
      id: 'Wacana akademik sangat bergantung pada konektor logis yang presisi. Kata hubung setara menggabungkan unit gramatikal sejajar, sedangkan adverbia konjungtif menunjukkan hubungan antar klausa.',
    },
    formula: 'Coordinating: FANBOYS (For, And, Nor, But, Or, Yet, So) | Conjunctive Adverbs: S + V; however, S + V',
    keySignals: [
      { en: 'Contrast: however, nevertheless, on the contrary, whereas', id: 'Kontras: however, nevertheless, on the contrary, whereas' },
      { en: 'Causation: therefore, consequently, as a result, hence', id: 'Kausalitas: therefore, consequently, as a result, hence' },
      { en: 'Addition: furthermore, moreover, in addition', id: 'Penambahan: furthermore, moreover, in addition' },
    ],
    commonMistakes: [
      { en: 'Using "although" and "but" in the exact same sentence', id: 'Menggunakan "although" dan "but" sekaligus dalam satu kalimat' },
      { en: 'Punctuation errors around conjunctive adverbs (; however,)', id: 'Kesalahan tanda baca di sekitar adverbia transisi (; however,)' },
      { en: 'Confusing "despite" (preposition) with "although" (conjunction)', id: 'Bingung antara "despite" (preposisi + kata benda) dan "although" (klausa)' },
    ],
    toeflTrick: {
      en: 'Remember: "Despite" and "In spite of" must take nouns or gerunds, NEVER a full Subject + Verb clause.',
      id: 'Ingat: "Despite" dan "In spite of" harus diikuti kata benda/gerund, TIDAK PERNAH diikuti klausa Subjek + Kata Kerja.',
    },
  },

  // ── SECTION 2: Vocabulary ──
  'awl-sublist-1': {
    title: {
      en: 'Academic Word List (AWL) - High-Frequency Core',
      id: 'Academic Word List (AWL) - Kosakata Inti Frekuensi Tinggi',
    },
    description: {
      en: 'Sublist 1 contains the 60 most frequent word families across academic university textbooks, research journals, and TOEFL reading passages.',
      id: 'Sublist 1 berisi 60 rumpun kata paling sering muncul di buku teks universitas, jurnal penelitian, dan bacaan ujian TOEFL.',
    },
    formula: 'Target Lemma: analyze, concept, constitute, establish, derive, indicate, principle, significant',
    keySignals: [
      { en: 'Academic register: "indicate" instead of "show"', id: 'Gaya akademik: "indicate" daripada sekadar "show"' },
      { en: 'Nominalization: analyze → analysis, constitute → constitution', id: 'Nominalisasi: analyze → analysis, constitute → constitution' },
      { en: 'Abstract conceptual nouns and research methodology verbs', id: 'Kata benda konseptual abstrak dan kata kerja metodologi riset' },
    ],
    commonMistakes: [
      { en: 'Confusing word forms (e.g., "significant" adjective vs. "significance" noun)', id: 'Tertukar bentuk kata (misal kata sifat "significant" vs kata benda "significance")' },
      { en: 'Selecting colloquial everyday synonyms in formal academic contexts', id: 'Memilih sinonim bahasa sehari-hari dalam konteks teks akademik formal' },
      { en: 'Misunderstanding shifting connotations in specialized scientific domains', id: 'Salah paham perubahan konotasi kata di ranah keilmuan khusus' },
    ],
    toeflTrick: {
      en: 'When TOEFL asks for the meaning of an AWL word, the correct answer is almost always the most academically formal synonym.',
      id: 'Ketika TOEFL menanyakan makna kata AWL, jawaban yang tepat hampir selalu sinonim yang paling bernuansa akademik formal.',
    },
  },
  'academic-prefixes-roots': {
    title: {
      en: 'Academic Prefixes, Roots & Morphological Derivation',
      id: 'Awalan, Akar Kata & Penurunan Morfologi Akademik',
    },
    description: {
      en: 'Over 70% of academic English vocabulary is derived from Greek and Latin morphemes. Deconstructing prefixes and roots unlocks the meaning of complex scientific terms.',
      id: 'Lebih dari 70% kosakata akademik bahasa Inggris diturunkan dari morfem Yunani dan Latin. Membedah awalan dan akar kata membuka kunci makna istilah ilmiah yang rumit.',
    },
    formula: 'Prefix (direction/negation) + Base Root (core meaning) + Suffix (grammatical category)',
    keySignals: [
      { en: 'Roots: -spect- (see), -tract- (pull), -vert/vers- (turn), -gen- (origin)', id: 'Akar kata: -spect- (melihat), -tract- (menarik), -vert- (memutar), -gen- (asal)' },
      { en: 'Prefixes: circum- (around), inter- (between), contra- (against), sub- (under)', id: 'Awalan: circum- (sekeliling), inter- (antara), contra- (menentang), sub- (bawah)' },
      { en: 'Suffixes: -ology (study), -ize (make), -tion (noun of action), -able (capable of)', id: 'Akhiran: -ology (ilmu), -ize (membuat), -tion (kata benda), -able (dapat)' },
    ],
    commonMistakes: [
      { en: 'Confusing "pre-" (before) with "post-" (after) in chronological stems', id: 'Bingung antara awalan "pre-" (sebelum) dan "post-" (sesudah)' },
      { en: 'Assuming false cognates without checking structural root meanings', id: 'Mengasumsikan arti secara keliru tanpa memeriksa akar kata struktural' },
      { en: 'Overlooking negative prefixes: in-, im-, un-, dis-, non-', id: 'Mengabaikan awalan bermakna negatif: in-, im-, un-, dis-, non-' },
    ],
    toeflTrick: {
      en: 'Break unknown words into 3 pieces: prefix + root + suffix. Even knowing just the root reveals the general semantic field.',
      id: 'Bagi kata asing menjadi 3 bagian: awalan + akar kata + akhiran. Mengetahui akar katanya saja sudah mengungkap ranah maknanya.',
    },
  },
  'academic-collocations': {
    title: {
      en: 'Academic Collocations & Phrasal Patterns',
      id: 'Kolokasi Akademik & Pola Frasa',
    },
    description: {
      en: 'Collocations are habitual word pairings that native academic writers use. TOEFL tests whether you recognize standard academic partnerships (e.g., "draw conclusions," not "make conclusions").',
      id: 'Kolokasi adalah pasangan kata alami yang digunakan para akademisi penutur asli. TOEFL menguji kepekaan terhadap padanan kata standar (misal "draw conclusions", bukan "make conclusions").',
    },
    formula: 'Verb + Noun: conduct study | Adj + Noun: empirical evidence | Noun + Preposition: reliance on',
    keySignals: [
      { en: 'Fixed verb-noun pairs: formulate a theory, substantiate a claim, pose a threat', id: 'Pasangan kata kerja-benda tetap: merumuskan teori, membuktikan klaim, menebar ancaman' },
      { en: 'Fixed prepositional attachments: attributed to, associated with, contrary to', id: 'Pelekatan preposisi tetap: attributed to, associated with, contrary to' },
      { en: 'Academic adverbs modifying adjectives: highly plausible, readily available', id: 'Adverbia akademik pemodifikasi kata sifat: highly plausible, readily available' },
    ],
    commonMistakes: [
      { en: 'Translating idioms literally from Indonesian (e.g. "make research" instead of "conduct research")', id: 'Menerjemahkan secara harfiah dari bahasa Indonesia (misal "make research" padahal yang benar "conduct research")' },
      { en: 'Mismatched prepositions with academic verbs (e.g., "consist from" instead of "consist of")', id: 'Preposisi salah pasang (misal "consist from" padahal harus "consist of")' },
      { en: 'Using weak informal verbs when strong academic verbs exist', id: 'Menggunakan kata kerja informal lemah ketika ada kata kerja akademik presisi' },
    ],
    toeflTrick: {
      en: 'In Structure questions with prepositions, look at the verb or adjective immediately preceding it: "associated ___" will always require "with".',
      id: 'Pada soal Structure berpreposisi, perhatikan kata kerja atau kata sifat tepat sebelumnya: "associated ___" selalu membutuhkan "with".',
    },
  },
  'contextual-synonyms': {
    title: {
      en: 'Contextual Synonyms & Semantic Nuances',
      id: 'Sinonim Kontekstual & Nuansa Makna',
    },
    description: {
      en: 'Words often carry multiple meanings depending on context. In TOEFL Reading vocabulary questions, you must pick the meaning that fits the exact sentence, not just the primary dictionary definition.',
      id: 'Kata sering memiliki banyak arti tergantung konteks. Dalam soal kosakata Reading TOEFL, pilihlah makna yang pas dengan kalimat tersebut, bukan sekadar arti umum kamus.',
    },
    formula: 'Contextual Clues: Surrounding Contrast (unlike, but) + Cause/Effect + Appositive Restatement',
    keySignals: [
      { en: 'Polysemous words: "property" (attribute vs land), "novel" (new vs book)', id: 'Kata bermakna ganda: "property" (sifat karakteristik vs tanah), "novel" (baru vs buku)' },
      { en: 'Tone alignment: positive, neutral, or critical contextual register', id: 'Kesesuaian nada bacaan: register konteks positif, netral, atau kritis' },
      { en: 'Punctuation indicators: dashes (—), parentheses, or commas defining terms', id: 'Indikator tanda baca: tanda pisah (—), tanda kurung, atau koma penjelas' },
    ],
    commonMistakes: [
      { en: 'Choosing the most common definition without re-reading the passage context', id: 'Memilih definisi kamus yang paling populer tanpa membaca ulang kalimat di teks' },
      { en: 'Ignoring syntactic function (choosing a noun synonym when the target is an adjective)', id: 'Mengabaikan fungsi sintaksis (memilih kata benda padahal kata targetnya kata sifat)' },
      { en: 'Falling for phonetic lookalikes (e.g., ingenuous vs. ingenious)', id: 'Terkecoh kata yang bunyinya mirip (misal ingenuous vs ingenious)' },
    ],
    toeflTrick: {
      en: 'Substitute each answer choice into the original sentence. The correct answer must make complete logical and grammatical sense.',
      id: 'Gantikan setiap pilihan jawaban langsung ke dalam kalimat aslinya. Jawaban yang benar harus masuk akal secara logika dan tata bahasa.',
    },
  },

  // ── SECTION 3: Grammar ──
  'simple-present': {
    title: {
      en: 'Simple Present Tense',
      id: 'Tense Simple Present (Waktu Sekarang Sederhana)',
    },
    description: {
      en: 'The Simple Present expresses habitual actions, permanent facts, scientific truths, and scheduled occurrences. In academic TOEFL texts, verbs must strictly agree in number with their subjects, even when separated by complex prepositional phrases.',
      id: 'Simple Present menyatakan kebiasaan, fakta permanen, kebenaran ilmiah, dan kejadian terjadwal. Dalam teks akademik TOEFL, kata kerja harus sesuai dengan jumlah subjeknya, bahkan ketika dipisahkan oleh frasa preposisi yang kompleks.',
    },
    formula: 'Subject + V1(s/es) + Complement | Negative: Subject + do/does not + V1',
    keySignals: [
      { en: 'always, usually, often, sometimes, rarely, never', id: 'selalu, biasanya, sering, kadang-kadang, jarang, tidak pernah' },
      { en: 'every day/week/month/year', id: 'setiap hari/minggu/bulan/tahun' },
      { en: 'general facts and scientific laws', id: 'fakta umum dan hukum ilmiah' },
    ],
    commonMistakes: [
      { en: 'Forgetting -s/-es for third person singular (he, she, it)', id: 'Lupa menambahkan -s/-es untuk orang ketiga tunggal (he, she, it)' },
      { en: 'Confusing simple present with present continuous for states', id: 'Bingung antara simple present dan present continuous untuk keadaan' },
      { en: 'Not recognizing subject-verb agreement with intervening phrases', id: 'Tidak mengenali kesesuaian subjek-kata kerja dengan frasa penyela' },
    ],
    toeflTrick: {
      en: 'When you see a sentence about scientific fact or universal truth, it almost always uses Simple Present — even in past-tense passages.',
      id: 'Ketika kamu melihat kalimat tentang fakta ilmiah atau kebenaran universal, hampir selalu menggunakan Simple Present — bahkan dalam bacaan bertense lampau.',
    },
  },
  'simple-past': {
    title: {
      en: 'Simple Past Tense',
      id: 'Tense Simple Past (Waktu Lampau Sederhana)',
    },
    description: {
      en: 'The Simple Past denotes completed historical actions, discoveries, or events tied to a finished timeframe. TOEFL historical passages frequently rely on simple past constructions.',
      id: 'Simple Past menunjukkan tindakan historis yang telah selesai, penemuan, atau peristiwa yang terkait dengan kerangka waktu yang sudah berakhir. Bacaan historis TOEFL sering menggunakan konstruksi simple past.',
    },
    formula: 'Subject + V2 (ed / irregular) + Complement | Negative: Subject + did not + V1',
    keySignals: [
      { en: 'yesterday, last week/month/year, in 1998, ago', id: 'kemarin, minggu/bulan/tahun lalu, pada tahun 1998, yang lalu' },
      { en: 'during the [historical period], at that time', id: 'selama [periode sejarah], pada saat itu' },
      { en: 'completed actions with definite past time', id: 'tindakan selesai dengan waktu lampau yang pasti' },
    ],
    commonMistakes: [
      { en: 'Using present tense for historical events', id: 'Menggunakan present tense untuk peristiwa sejarah' },
      { en: 'Irregular verb forms: go→went, begin→began, write→wrote', id: 'Bentuk kata kerja tidak beraturan: go→went, begin→began, write→wrote' },
      { en: 'Confusing simple past with present perfect when time is specified', id: 'Bingung antara simple past dan present perfect ketika waktunya sudah ditentukan' },
    ],
    toeflTrick: {
      en: 'If the sentence includes a specific year, date, or completed historical era, always choose Simple Past — never Present Perfect.',
      id: 'Jika kalimat menyertakan tahun, tanggal, atau era sejarah tertentu yang sudah selesai, selalu pilih Simple Past — bukan Present Perfect.',
    },
  },
  'present-perfect': {
    title: {
      en: 'Present Perfect Tense',
      id: 'Tense Present Perfect (Waktu Sekarang Sempurna)',
    },
    description: {
      en: 'The Present Perfect connects past occurrences directly to the present moment. It denotes actions at an indefinite past time, actions continuing from past to present, and recent discoveries with ongoing relevance.',
      id: 'Present Perfect menghubungkan kejadian lampau langsung ke saat ini. Menunjukkan tindakan pada waktu lampau yang tidak pasti, tindakan yang berlanjut dari masa lalu ke masa kini, dan penemuan baru dengan relevansi berkelanjutan.',
    },
    formula: 'Subject + have/has + Past Participle (V3) | Negative: Subject + have/has not + V3',
    keySignals: [
      { en: 'since, for, already, yet, just, recently, ever, never', id: 'sejak, selama, sudah, belum, baru saja, baru-baru ini, pernah, tidak pernah' },
      { en: 'so far, up to now, until now', id: 'sejauh ini, sampai sekarang, hingga saat ini' },
      { en: 'actions with present relevance (no specific past time)', id: 'tindakan dengan relevansi saat ini (tanpa waktu lampau spesifik)' },
    ],
    commonMistakes: [
      { en: 'Using "has" with plural subjects (they has → they have)', id: 'Menggunakan "has" dengan subjek jamak (they has → they have)' },
      { en: 'Using present perfect with specific past time markers (In 1999, I have gone → went)', id: 'Menggunakan present perfect dengan penanda waktu lampau spesifik (In 1999, I have gone → went)' },
      { en: 'Confusing past participle forms: gone/went, written/wrote, taken/took', id: 'Bingung bentuk past participle: gone/went, written/wrote, taken/took' },
    ],
    toeflTrick: {
      en: '"Since" always signals Present Perfect. "For + duration" with no specific endpoint also strongly indicates Present Perfect.',
      id: '"Since" selalu menandakan Present Perfect. "For + durasi" tanpa titik akhir spesifik juga sangat mengindikasikan Present Perfect.',
    },
  },
  'passive-voice': {
    title: {
      en: 'Passive Voice',
      id: 'Kalimat Pasif',
    },
    description: {
      en: 'The Passive Voice shifts emphasis from the actor to the patient or result. Scientific and academic TOEFL passages overwhelmingly employ passive structures to maintain objectivity.',
      id: 'Kalimat Pasif menggeser penekanan dari pelaku ke penerima atau hasil. Bacaan ilmiah dan akademik TOEFL banyak menggunakan struktur pasif untuk menjaga objektivitas.',
    },
    formula: 'Subject + BE (am/is/are/was/were/been/being) + Past Participle (V3) (+ by Agent)',
    keySignals: [
      { en: '"by + agent" construction', id: 'konstruksi "by + agen"' },
      { en: 'Focus on result rather than doer', id: 'Fokus pada hasil bukan pelaku' },
      { en: 'Common in scientific writing: "was discovered," "is classified," "were analyzed"', id: 'Umum dalam penulisan ilmiah: "was discovered," "is classified," "were analyzed"' },
    ],
    commonMistakes: [
      { en: 'Forgetting the past participle: "was discover" → "was discovered"', id: 'Lupa past participle: "was discover" → "was discovered"' },
      { en: 'Wrong BE form: singular subject + are = error', id: 'Bentuk BE salah: subjek tunggal + are = salah' },
      { en: 'Using active form when passive is needed for objectivity', id: 'Menggunakan bentuk aktif ketika pasif diperlukan untuk objektivitas' },
    ],
    toeflTrick: {
      en: 'When the subject receives the action rather than performing it, choose passive. Check: "The experiment was conducted" (not "was conduct").',
      id: 'Ketika subjek menerima tindakan daripada melakukannya, pilih pasif. Periksa: "The experiment was conducted" (bukan "was conduct").',
    },
  },
  'relative-clauses': {
    title: {
      en: 'Relative Clauses (Adjective Clauses)',
      id: 'Klausa Relatif (Klausa Kata Sifat)',
    },
    description: {
      en: 'Relative clauses specify or describe a preceding noun. In TOEFL, check for pronoun agreement and verify that no redundant object pronouns exist inside the subordinate clause.',
      id: 'Klausa relatif menjelaskan atau mendeskripsikan kata benda sebelumnya. Dalam TOEFL, periksa kesesuaian kata ganti dan pastikan tidak ada kata ganti objek berlebihan di dalam anak kalimat.',
    },
    formula: 'Noun + [Relative Pronoun (who/which/that/whose/where/when)] + [Clause]',
    keySignals: [
      { en: 'who = subject (people), whom = object (people)', id: 'who = subjek (orang), whom = objek (orang)' },
      { en: 'which = things/animals, that = people or things (restrictive)', id: 'which = benda/hewan, that = orang atau benda (restriktif)' },
      { en: 'whose = possession, where = place, when = time', id: 'whose = kepemilikan, where = tempat, when = waktu' },
    ],
    commonMistakes: [
      { en: 'Using "who" for things: "The book who..." → "The book which/that..."', id: 'Menggunakan "who" untuk benda: "The book who..." → "The book which/that..."' },
      { en: 'Redundant pronoun: "The man who he came" → "The man who came"', id: 'Kata ganti berlebihan: "The man who he came" → "The man who came"' },
      { en: 'Using "that" in non-restrictive (comma) clauses: ", that..." → ", which..."', id: 'Menggunakan "that" dalam klausa non-restriktif (koma): ", that..." → ", which..."' },
    ],
    toeflTrick: {
      en: 'If there is a comma before the relative pronoun, you must use "which" (not "that") for things, and "who" for people.',
      id: 'Jika ada koma sebelum kata ganti relatif, kamu harus menggunakan "which" (bukan "that") untuk benda, dan "who" untuk orang.',
    },
  },
  'conditionals-inversions': {
    title: {
      en: 'Conditionals & Subject-Auxiliary Inversion',
      id: 'Kalimat Pengandaian & Inversi Subjek-Kata Bantu',
    },
    description: {
      en: 'Conditional sentences and inverted structures are top-tier scoring items on the TOEFL Structure section. Inversion occurs after negative adverbs, restrictive prepositions, and omitted conditional "if".',
      id: 'Kalimat pengandaian dan struktur inversi adalah soal penentu skor tertinggi pada bagian Structure TOEFL. Inversi terjadi setelah adverbia negatif, preposisi restriktif, dan penghilangan kata "if".',
    },
    formula: 'Type 3 Inverted: Had + S + V3, S + would have + V3 | Negative Inversion: Rarely + Aux + S + V',
    keySignals: [
      { en: 'Omitted "if": Had I known... / Were he to arrive... / Should you require...', id: 'Penghilangan "if": Had I known... / Were he to arrive... / Should you require...' },
      { en: 'Negative adverbs: Rarely, Seldom, Scarcely, Never before, Under no circumstances', id: 'Adverbia negatif: Rarely, Seldom, Scarcely, Never before, Under no circumstances' },
      { en: 'Correlatives: Not only... but also (with initial inversion)', id: 'Korelatif: Not only... but also (dengan inversi di awal klausa)' },
    ],
    commonMistakes: [
      { en: 'Using "would have" in the if-clause instead of past perfect (had + V3)', id: 'Menggunakan "would have" di anak kalimat if (seharusnya had + V3)' },
      { en: 'Forgetting inversion after initial negative adverbs ("Seldom she visits" → "Seldom does she visit")', id: 'Lupa inversi setelah kata negatif di depan ("Seldom she visits" → "Seldom does she visit")' },
      { en: 'Mixing conditional tenses incorrectly across mismatched clauses', id: 'Mencampuradukkan bentuk waktu pengandaian antarklausa secara tidak tepat' },
    ],
    toeflTrick: {
      en: 'If a sentence begins with "Had", "Were", or "Should" without a question mark, it is an inverted conditional meaning "If".',
      id: 'Jika kalimat diawali "Had", "Were", atau "Should" tanpa tanda tanya di akhir, itu adalah inversi pengandaian yang bermakna "Jika".',
    },
  },
  'gerunds-infinitives': {
    title: {
      en: 'Gerunds vs. Infinitives in Academic Syntax',
      id: 'Gerund vs. Infinitive dalam Sintaksis Akademik',
    },
    description: {
      en: 'Verbs in English dictate whether following verbal complements take the gerund (-ing) or infinitive (to + verb) form. Prepositions always require gerunds.',
      id: 'Kata kerja dalam bahasa Inggris menentukan apakah pelengkap kata kerja berikutnya berwujud gerund (-ing) atau infinitive (to + verb). Preposisi selalu mewajibkan gerund.',
    },
    formula: 'Verb + Gerund (appreciate, avoid, consider) | Verb + Infinitive (attempt, decide, tend)',
    keySignals: [
      { en: 'Gerund after prepositions: capable of doing, succeed in proving', id: 'Gerund setelah preposisi: capable of doing, succeed in proving' },
      { en: 'Verbs of continuation/cessation: stop, quit, postpone, delay (+ gerund)', id: 'Kata kerja penghentian/penundaan: stop, quit, postpone, delay (+ gerund)' },
      { en: 'Infinitives expressing purpose: "conducted the experiment to test the hypothesis"', id: 'Infinitive untuk menyatakan tujuan: "conducted the experiment to test the hypothesis"' },
    ],
    commonMistakes: [
      { en: 'Using infinitive after prepositions: "interested to learn" → "interested in learning"', id: 'Memakai infinitive setelah preposisi: "interested to learn" → "interested in learning"' },
      { en: 'Confusing "used to + V1" (past habit) with "be used to + -ing" (accustomed to)', id: 'Bingung antara "used to + V1" (kebiasaan dulu) dan "be used to + -ing" (terbiasa)' },
      { en: 'Overlooking verbs followed by gerunds: admit, avoid, consider, deny, suggest', id: 'Mengabaikan kata kerja wajib gerund: admit, avoid, consider, deny, suggest' },
    ],
    toeflTrick: {
      en: 'Preposition + Verb always equals Verb-ing. If you see a preposition followed by a base verb or to-infinitive, it is an automatic error.',
      id: 'Preposisi + Kata Kerja selalu menghasilkan Verb-ing. Jika melihat preposisi diikuti kata kerja dasar atau to-infinitive, itu pasti salah.',
    },
  },
  'parallel-structure': {
    title: {
      en: 'Parallel Structure & Correlative Conjunctions',
      id: 'Struktur Paralel & Konjungsi Korelatif',
    },
    description: {
      en: 'Parallel structure requires that series of words, phrases, or clauses joined by coordinating or correlative conjunctions share the identical grammatical form.',
      id: 'Struktur paralel menuntut agar deretan kata, frasa, atau klausa yang dihubungkan oleh konjungsi setara atau korelatif memiliki bentuk gramatikal yang identik.',
    },
    formula: 'Both [Noun] and [Noun] | Not only [Verb] but also [Verb] | Neither [Adj] nor [Adj]',
    keySignals: [
      { en: 'Correlatives: either...or, neither...nor, both...and, not only...but also', id: 'Korelatif: either...or, neither...nor, both...and, not only...but also' },
      { en: 'Lists separated by commas: A, B, and C (all must share identical POS)', id: 'Daftar berpemisah koma: A, B, and C (semua harus sejenis part of speech)' },
      { en: 'Comparisons: X is more [adj] than Y (X and Y must be balanced)', id: 'Perbandingan: X lebih [sifat] daripada Y (X dan Y harus seimbang)' },
    ],
    commonMistakes: [
      { en: 'Mixing gerunds and infinitives in a single list: "swimming, to run, and cycling"', id: 'Mencampur gerund dan infinitive dalam satu daftar: "swimming, to run, and cycling"' },
      { en: 'Mismatched correlative pairs: "either...nor" or "neither...or"', id: 'Pasangan korelatif salah sambung: "either...nor" atau "neither...or"' },
      { en: 'Unbalanced comparison: "The climate of Rome is warmer than France" (should be "that of France")', id: 'Perbandingan tidak logis: "The climate of Rome is warmer than France" (harus "that of France")' },
    ],
    toeflTrick: {
      en: 'Locate the coordinating word ("and", "or", "but also"). Check the grammatical category on both sides; they must be a mirror image.',
      id: 'Temukan kata penghubung ("and", "or", "but also"). Periksa kategori gramatikal di kedua sisinya; bentuknya harus bercermin sama persis.',
    },
  },

  // ── SECTION 4: Reading ──
  'factual-questions': {
    title: {
      en: 'Factual & Negative Factual Questions',
      id: 'Pertanyaan Fakta Langsung & Fakta Negatif',
    },
    description: {
      en: 'Factual questions verify specific information stated directly in the passage. Negative factual questions require you to identify the one option that is NOT mentioned or contradicts the text.',
      id: 'Pertanyaan fakta menguji info spesifik yang tertulis langsung di bacaan. Pertanyaan fakta negatif menuntutmu menemukan satu opsi yang TIDAK disebutkan atau bertentangan dengan teks.',
    },
    formula: 'Strategy: Identify paragraph keyword → Scan passage for synonym match → Eliminate false distractors',
    keySignals: [
      { en: 'Stems: "According to the passage, which of the following is true...?"', id: 'Pola soal: "According to the passage, which of the following is true...?"' },
      { en: 'Negative stems: "Which of the following is NOT mentioned...?" / "All of the following EXCEPT"', id: 'Pola negatif: "Which of the following is NOT mentioned...?" / "All of the following EXCEPT"' },
      { en: 'Direct paraphrasing of passage text using academic synonyms', id: 'Parafrasa langsung dari teks menggunakan sinonim akademik' },
    ],
    commonMistakes: [
      { en: 'Choosing an answer that is true in real life but NOT mentioned in the passage', id: 'Memilih jawaban yang benar di dunia nyata tapi TIDAK ada dalam teks bacaan' },
      { en: 'Picking options containing extreme modifiers: always, never, completely, entirely', id: 'Memilih opsi yang memuat kata ekstrem: always, never, completely, entirely' },
      { en: 'Misreading the "EXCEPT" prompt and selecting the first true fact spotted', id: 'Lengah membaca instruksi "EXCEPT" lalu langsung memilih fakta pertama yang benar' },
    ],
    toeflTrick: {
      en: 'Answers with absolute words like "solely," "exclusively," or "inevitably" are almost always wrong distractors in TOEFL Reading.',
      id: 'Pilihan yang memakai kata mutlak seperti "solely," "exclusively," atau "inevitably" hampir selalu merupakan pengecoh keliru di Reading TOEFL.',
    },
  },
  'inference-purpose': {
    title: {
      en: 'Inference & Rhetorical Purpose Questions',
      id: 'Pertanyaan Inferensi & Tujuan Retoris Penulis',
    },
    description: {
      en: 'Inference questions test what is logically implied but not explicitly stated. Rhetorical purpose questions ask WHY the author included a particular fact, example, or quote.',
      id: 'Pertanyaan inferensi menguji kesimpulan logis tersirat yang tidak ditulis terang-terangan. Pertanyaan tujuan retoris menanyakan MENGAPA penulis memasukkan contoh atau kutipan tertentu.',
    },
    formula: 'Inference: Premise A + Premise B → Logical Implication | Purpose: "Why does the author mention X?"',
    keySignals: [
      { en: 'Stems: "It can be inferred from paragraph X that...", "Why does the author mention...?"', id: 'Pola: "It can be inferred from paragraph X that...", "Why does the author mention...?"' },
      { en: 'Rhetorical purpose answers often begin with: "To illustrate," "To refute," "To emphasize"', id: 'Jawaban tujuan retoris sering diawali: "To illustrate," "To refute," "To emphasize"' },
      { en: 'Logical extrapolation strictly anchored to passage evidence', id: 'Penyimpulan logis yang berjangkar ketat pada bukti dalam bacaan' },
    ],
    commonMistakes: [
      { en: 'Speculating too far beyond the passage without textual backing', id: 'Berspekulasi terlalu jauh di luar teks tanpa didukung bukti kutipan' },
      { en: 'Confusing the literal fact with the author\'s functional reason for mentioning it', id: 'Bingung antara fakta harfiah dan alasan fungsional mengapa penulis menyebutkannya' },
      { en: 'Selecting restatements instead of valid implicit inferences', id: 'Memilih kalimat yang hanya mengulang fakta langsung alih-alih inferensi tersirat' },
    ],
    toeflTrick: {
      en: 'For "Why does the author mention X?", look at the sentence immediately BEFORE X. The author almost always mentions X to support the preceding claim.',
      id: 'Untuk soal "Why does the author mention X?", lihatlah satu kalimat tepat SEBELUM X. Penulis hampir selalu menyebut X sebagai contoh bukti klaim sebelumnya.',
    },
  },
  'vocab-in-context': {
    title: {
      en: 'Vocabulary-in-Context Questions',
      id: 'Pertanyaan Kosakata dalam Konteks Bacaan',
    },
    description: {
      en: 'These questions ask for the meaning of a highlighted word or phrase as used in the specific paragraph context, requiring morphological and semantic evaluation.',
      id: 'Pertanyaan ini menanyakan arti kata atau frasa yang disorot sebagaimana digunakan dalam paragraf tertentu, menuntut penilaian morfologis dan semantis.',
    },
    formula: 'Passage context check: target word → test 4 choices in original sentence → maintain tone and sense',
    keySignals: [
      { en: 'Stem: "The word X in paragraph Y is closest in meaning to..."', id: 'Pola: "The word X in paragraph Y is closest in meaning to..."' },
      { en: 'Contextual contrast markers: but, however, rather than, conversely', id: 'Penanda kontras konteks: but, however, rather than, conversely' },
      { en: 'Explanatory appositives or parenthetical expansions', id: 'Aposisi penjelas atau penjabaran dalam tanda kurung/koma' },
    ],
    commonMistakes: [
      { en: 'Choosing a correct English definition that does not fit this specific passage context', id: 'Memilih definisi yang benar secara kamus tapi tidak cocok dengan konteks bacaan spesifik ini' },
      { en: 'Failing to plug the chosen word back into the sentence to test readability', id: 'Lupa memasukkan kembali kata yang dipilih ke dalam kalimat untuk menguji kelayakannya' },
      { en: 'Confusing figurative or metaphorical meaning with literal meaning', id: 'Bingung antara makna kiasan/metaforis dan makna harfiah' },
    ],
    toeflTrick: {
      en: 'Read one sentence before and one sentence after the target word. The surrounding text provides the semantic clues you need.',
      id: 'Bacalah satu kalimat sebelum dan satu kalimat sesudah kata target. Teks sekitar selalu menyediakan petunjuk makna yang kamu butuhkan.',
    },
  },
  'sentence-insertion-summary': {
    title: {
      en: 'Sentence Insertion & Passage Summary Questions',
      id: 'Penyisipan Kalimat & Rangkuman Keseluruhan Bacaan',
    },
    description: {
      en: 'Sentence insertion evaluates discourse flow and cohesion across 4 black squares [■]. Summary questions require selecting the 3 core thesis arguments from 6 choices.',
      id: 'Penyisipan kalimat menguji alur wacana dan kohesi pada 4 kotak hitam [■]. Soal rangkuman menuntut memilih 3 ide pokok utama dari 6 pilihan yang tersedia.',
    },
    formula: 'Insertion: Connect preceding idea → Lead-in sentence → Follow-up reference | Summary: 3 Major Ideas',
    keySignals: [
      { en: 'Anaphoric references: this theory, these findings, such organisms, former/latter', id: 'Rujukan anaforis: this theory, these findings, such organisms, former/latter' },
      { en: 'Transition adverbs: for example, on the other hand, consequently', id: 'Adverbia transisi: for example, on the other hand, consequently' },
      { en: 'Summary distractors: minor supporting details or factually incorrect claims', id: 'Pengecoh soal rangkuman: detail pendukung minor atau klaim yang salah secara fakta' },
    ],
    commonMistakes: [
      { en: 'Selecting summary choices that are true facts from the text but merely minor details', id: 'Memilih opsi rangkuman yang faktanya benar tapi cuma detail kecil bukan gagasan pokok' },
      { en: 'Inserting the sentence where it interrupts an already cohesive grammatical bond', id: 'Menyisipkan kalimat di tempat yang justru memutus kesinambungan gramatikal yang sudah utuh' },
      { en: 'Ignoring pronouns in the sentence to be inserted', id: 'Mengabaikan kata ganti (pronoun) dalam kalimat yang akan disisipkan' },
    ],
    toeflTrick: {
      en: 'For summary questions, eliminate options that mention specific numbers, dates, or individual experiments — major ideas are broad and thematic.',
      id: 'Untuk soal rangkuman, buang opsi yang memuat angka spesifik, tanggal, atau eksperimen tunggal — ide utama selalu bersifat menyeluruh dan tematik.',
    },
  },

  // ── SECTION 5: Listening ──
  'campus-conversations': {
    title: {
      en: 'Campus Conversations & Student Service Interactions',
      id: 'Percakapan Kampus & Interaksi Layanan Mahasiswa',
    },
    description: {
      en: 'Campus conversations involve a student speaking with a professor, academic advisor, librarian, or registrar. Questions test the central dilemma, proposed solutions, and next steps.',
      id: 'Percakapan kampus melibatkan mahasiswa dengan dosen, penasihat akademik, pustakawan, atau staf administrasi. Soal menguji inti masalah, solusi usulan, dan langkah berikutnya.',
    },
    formula: 'Structure: Greeting → State Problem/Dilemma → University Policy/Advice → Resolution/Next Step',
    keySignals: [
      { en: 'Problem indicators: "I was wondering if...", "The reason I stopped by is..."', id: 'Indikator masalah: "I was wondering if...", "The reason I stopped by is..."' },
      { en: 'Advice markers: "Have you considered...", "What you need to do is..."', id: 'Penanda nasihat: "Have you considered...", "What you need to do is..."' },
      { en: 'Commitment markers: "I\'ll head over there now," "I will submit that form today"', id: 'Penanda komitmen: "I\'ll head over there now," "I will submit that form today"' },
    ],
    commonMistakes: [
      { en: 'Focusing on polite conversational opening remarks rather than the real reason for the visit', id: 'Terjebak basa-basi pembuka percakapan alih-alih alasan utama kunjungan' },
      { en: 'Confusing the professor\'s original suggestion with the final agreed-upon course of action', id: 'Bingung antara usulan awal dosen dan keputusan akhir yang disepakati bersama' },
      { en: 'Failing to take notes on required prerequisites or administrative deadlines', id: 'Lupa mencatat persyaratan awal atau batas waktu administrasi yang disebutkan' },
    ],
    toeflTrick: {
      en: 'The student\'s real problem is almost always stated within the first 30 seconds of the dialogue. Listen intently right from the start.',
      id: 'Masalah utama mahasiswa hampir selalu diucapkan dalam 30 detik pertama dialog. Pasang telinga tajam sejak detik awal.',
    },
  },
  'academic-lectures': {
    title: {
      en: 'Academic Lectures: Main Ideas & Supporting Details',
      id: 'Kuliah Akademik: Gagasan Utama & Detail Pendukung',
    },
    description: {
      en: 'TOEFL lectures emulate North American university undergraduate classes across sciences, arts, social sciences, and history. You must track major arguments, theories, and examples.',
      id: 'Kuliah TOEFL meniru suasana kelas sarjana universitas di Amerika Utara (sains, seni, ilmu sosial, sejarah). Kamu harus melacak argumen utama, teori, dan contohnya.',
    },
    formula: 'Format: Topic Announcement → Conceptual Definition → Case Study/Example 1 → Example 2 → Synthesis',
    keySignals: [
      { en: 'Topic statement: "Today we will examine...", "Let\'s delve into..."', id: 'Pernyataan topik: "Today we will examine...", "Let\'s delve into..."' },
      { en: 'Signposting: "First, consider...", "Another hypothesis is...", "In contrast..."', id: 'Penanda alur: "First, consider...", "Another hypothesis is...", "In contrast..."' },
      { en: 'Digressions: "Now, as an aside...", "Before we move on, keep in mind..."', id: 'Selingan dosen: "Now, as an aside...", "Before we move on, keep in mind..."' },
    ],
    commonMistakes: [
      { en: 'Trying to write down every spoken word instead of mapping structural relationships', id: 'Mencoba mencatat kata per kata secara dikte alih-alih memetakan hierarki ide' },
      { en: 'Missing questions about why the professor introduced a specific analogy or historical anecdote', id: 'Melewatkan pertanyaan mengenai alasan dosen menganalogikan suatu contoh' },
      { en: 'Focusing exclusively on terminology while missing the broader scientific significance', id: 'Terlalu terpaku pada istilah asing tapi melupakan signifikansi ilmiahnya' },
    ],
    toeflTrick: {
      en: 'Whenever the professor repeats a concept or defines a term on the whiteboard, it is 100% guaranteed to be on the questions.',
      id: 'Kapan pun dosen mengulang suatu konsep atau menjelaskan istilah di papan tulis, hampir 100% pasti akan ditanyakan.',
    },
  },
  'speaker-attitude': {
    title: {
      en: 'Speaker Attitude & Pragmatic Understanding',
      id: 'Sikap Pembicara & Pemahaman Pragmatik',
    },
    description: {
      en: 'Pragmatic questions replay a short excerpt and ask what the speaker implies or feels (e.g., skeptical, enthusiastic, uncertain, sarcastic) based on intonation and understatement.',
      id: 'Soal pragmatik memutar ulang kutipan pendek dan menanyakan maksud tersirat atau sikap pembicara (skeptis, antusias, ragu, sarkastis) dari nada bicara dan intonasi.',
    },
    formula: 'Replay Excerpt → Analyze Intonation & Word Choice → Infer Speaker Stance/Intent',
    keySignals: [
      { en: 'Skepticism markers: "Well, supposedly...", "That\'s what the textbook claims, but..."', id: 'Penanda skeptis: "Well, supposedly...", "That\'s what the textbook claims, but..."' },
      { en: 'Uncertainty markers: pauses, rising intonation, hedges ("sort of", "to some degree")', id: 'Penanda ragu: jeda, intonasi naik, pelembut nada ("sort of", "to some degree")' },
      { en: 'Disapproval or surprise: sharp pitch shifts, emphatic stress on auxiliary verbs', id: 'Ketidaksetujuan/kejutan: lonjakan nada suara, penekanan tegas pada kata bantu' },
    ],
    commonMistakes: [
      { en: 'Interpreting sarcastic comments as literal endorsements', id: 'Mengartikan komentar bernada sarkastis sebagai persetujuan harfiah' },
      { en: 'Ignoring auditory vocal cues like sighs, chuckles, or hesitant vocal fillers', id: 'Mengabaikan petunjuk vokal seperti helaan napas, kekehan, atau jeda ragu' },
      { en: 'Confusing the speaker\'s opinion with a counter-opinion they are quoting', id: 'Tertukar antara pendapat pribadi pembicara dan pendapat lawan yang sedang ia kutip' },
    ],
    toeflTrick: {
      en: 'Pay attention to voice modulation in replay questions. A hesitant "Uh... okay..." means the speaker is unconvinced or doubtful.',
      id: 'Perhatikan modulasi intonasi pada pertanyaan replay. Ucapan ragu seperti "Uh... okay..." menandakan pembicara belum yakin atau ragu.',
    },
  },
  'listening-organization': {
    title: {
      en: 'Lecture Organization & Information Synthesis',
      id: 'Struktur Organisasi Kuliah & Sintesis Informasi',
    },
    description: {
      en: 'These questions test your understanding of how a lecture is organized: chronological evolution, classification of types, comparative contrast, or cause-and-effect processes.',
      id: 'Soal ini menguji pemahaman struktur organisasi kuliah: evolusi kronologis, klasifikasi jenis, perbandingan kontras, atau rantai sebab-akibat.',
    },
    formula: 'Lecture Model: Cause & Effect | Classification Matrix | Chronological Stages',
    keySignals: [
      { en: 'Classification: "There are two distinct varieties...", "Categorized into..."', id: 'Klasifikasi: "There are two distinct varieties...", "Categorized into..."' },
      { en: 'Process/Stages: "The first phase begins with...", "Following this initial reaction..."', id: 'Proses/Tahapan: "The first phase begins with...", "Following this initial reaction..."' },
      { en: 'Compare/Contrast: "Whereas species A exhibits..., species B relies on..."', id: 'Perbandingan: "Whereas species A exhibits..., species B relies on..."' },
    ],
    commonMistakes: [
      { en: 'Scrambling the sequential order of scientific biological or geological processes', id: 'Mengacaukan urutan tahapan dalam proses biologis atau geologis' },
      { en: 'Assigning a characteristic of Category A to Category B in table-matching questions', id: 'Tertukar memasukkan karakteristik kategori A ke kategori B pada soal pencocokan tabel' },
      { en: 'Confusing cause with effect in ecological chain reaction questions', id: 'Membalikkan antara penyebab dan dampak dalam rantai reaksi ekologi' },
    ],
    toeflTrick: {
      en: 'Use a split-page note format: left column for Category A, right column for Category B. It makes matching-table questions effortless.',
      id: 'Gunakan catatan format dua kolom: kolom kiri untuk Kategori A, kanan untuk Kategori B. Ini membuat soal mencocokkan tabel menjadi sangat mudah.',
    },
  },

  // ── SECTION 6: Speaking ──
  'speaking-independent': {
    title: {
      en: 'Independent Speaking: Personal Choice & Opinions',
      id: 'Speaking Mandiri: Pilihan Pribadi & Argumentasi Opini',
    },
    description: {
      en: 'Task 1 gives you 15 seconds to prepare and 45 seconds to speak on a paired choice (e.g., studying alone vs. studying in groups). Structure and fluency determine your score.',
      id: 'Task 1 memberimu 15 detik persiapan dan 45 detik berbicara tentang dua pilihan (misal belajar sendiri vs kelompok). Struktur dan kelancaran menentukan skor.',
    },
    formula: 'Template: Stance (5s) → Reason 1 + Specific Personal Example (20s) → Reason 2 + Example (18s) → Wrap-up (2s)',
    keySignals: [
      { en: 'Direct assertion: "In my perspective, I firmly prefer X because..."', id: 'Pernyataan tegas: "In my perspective, I firmly prefer X because..."' },
      { en: 'Signposted examples: "For instance, during my sophomore year at university..."', id: 'Contoh nyata: "For instance, during my sophomore year at university..."' },
      { en: 'Cohesive transitions: "Furthermore," "On top of that," "Consequently"', id: 'Transisi terpadu: "Furthermore," "On top of that," "Consequently"' },
    ],
    commonMistakes: [
      { en: 'Spending 20 seconds introducing both sides instead of stating your own stance immediately', id: 'Menghabiskan 20 detik pertama menjabarkan kedua opsi alih-alih langsung menyatakan pilihan sendiri' },
      { en: 'Giving broad philosophical claims without concrete personal anecdotes', id: 'Memberikan argumen abstrak umum tanpa contoh konkret yang meyakinkan' },
      { en: 'Pausing with prolonged "ummm" silence; keep speaking steadily', id: 'Terdiam dengan jeda "ummm" yang lama; berbicaralah dengan tempo stabil' },
    ],
    toeflTrick: {
      en: 'Pick the easiest option to justify, not necessarily your true personal belief. It is much easier to invent clear examples for simpler choices.',
      id: 'Pilihlah opsi yang paling mudah dijelaskan contohnya, bukan harus mencerminkan isi hatimu sebenarnya. Yang dinilai adalah kelancaran bahasa Inggris-mu.',
    },
  },
  'speaking-campus-integrated': {
    title: {
      en: 'Integrated Speaking: Campus Situations (Task 2)',
      id: 'Speaking Terpadu: Situasi Kampus (Task 2)',
    },
    description: {
      en: 'Read a short campus announcement (45s), listen to two students react to it, then summarize the primary speaker\'s opinion and their two stated reasons within 60 seconds.',
      id: 'Baca pengumuman kampus (45 detik), dengarkan percakapan dua mahasiswa, lalu rangkum opini pembicara utama beserta dua alasannya dalam 60 detik.',
    },
    formula: 'Reading Summary (10s) → Student\'s Stance (5s) → Reason 1 Details (20s) → Reason 2 Details (20s) → Conclusion (5s)',
    keySignals: [
      { en: 'Reading prompt: "The university plans to...", "The student council announces..."', id: 'Teks bacaan: "The university plans to...", "The student council announces..."' },
      { en: 'Student reaction: "The man/woman strongly agrees/disagrees because..."', id: 'Reaksi mahasiswa: "The man/woman strongly agrees/disagrees because..."' },
      { en: 'Counter-evidence: "He points out that the cost is overstated...", "Secondly, he notes..."', id: 'Alasan sanggahan: "He points out that the cost is overstated...", "Secondly, he notes..."' },
    ],
    commonMistakes: [
      { en: 'Spending too much time explaining the reading passage (keep it under 12 seconds)', id: 'Terlalu lama menjelaskan teks pengumuman (batasi maksimal 12 detik)' },
      { en: 'Inserting personal opinions; this is an integrated summary task, NOT an opinion task', id: 'Memasukkan opini pribadimu; ini tugas merangkum murni, BUKAN tugas opini' },
      { en: 'Mixing up which student held the strong opinion (the man or the woman)', id: 'Tertukar mahasiswa mana yang mengemukakan opini kuat (laki-laki atau perempuan)' },
    ],
    toeflTrick: {
      en: 'The speaker in the conversation will 95% of the time disagree with the university announcement. Prepare your notes for a rebuttal structure.',
      id: 'Mahasiswa dalam percakapan hampir 95% tidak setuju dengan pengumuman kampus. Siapkan catatanmu untuk pola sanggahan.',
    },
  },
  'speaking-lecture-synthesis': {
    title: {
      en: 'Integrated Speaking: Academic Lecture Synthesis (Tasks 3 & 4)',
      id: 'Speaking Terpadu: Sintesis Kuliah Akademik (Task 3 & 4)',
    },
    description: {
      en: 'Task 3 combines a short textbook reading defining an academic concept with a lecture giving specific examples. Task 4 summarizes a standalone lecture on a scientific or business topic.',
      id: 'Task 3 memadukan teks definisi buku kuliah dengan contoh konkret dosen. Task 4 merangkum kuliah mandiri tentang sains atau bisnis.',
    },
    formula: 'Define Concept (10s) → Professor\'s Example 1 (25s) → Professor\'s Example 2 (20s) → Synthesis (5s)',
    keySignals: [
      { en: 'Concept definition from reading: "The passage defines [Concept] as..."', id: 'Definisi konsep dari teks: "The passage defines [Concept] as..."' },
      { en: 'Lecture illustration: "To demonstrate this, the professor introduces an experiment involving..."', id: 'Ilustrasi dosen: "To demonstrate this, the professor introduces an experiment involving..."' },
      { en: 'Experimental outcomes: "As a result, the animals adapted by..."', id: 'Hasil eksperimen: "As a result, the animals adapted by..."' },
    ],
    commonMistakes: [
      { en: 'Failing to link the professor\'s examples directly back to the textbook concept', id: 'Gagal menghubungkan contoh dosen kembali ke konsep teori di buku teks' },
      { en: 'Running out of time before explaining the second lecture example', id: 'Kehabisan waktu sebelum sempat menjabarkan contoh kedua dari dosen' },
      { en: 'Mispronouncing key scientific terminology introduced in the reading', id: 'Salah melafalkan istilah ilmiah yang sudah tertera jelas di teks' },
    ],
    toeflTrick: {
      en: 'Write the definition from the reading in 5 words or fewer. Dedicate 80% of your notes and speaking time to the professor\'s vivid real-world example.',
      id: 'Tulis definisi dari bacaan dalam 5 kata saja. Dedikasikan 80% catatan dan waktu bicaramu untuk contoh nyata yang dipaparkan sang dosen.',
    },
  },

  // ── SECTION 7: Writing ──
  'writing-academic-discussion': {
    title: {
      en: 'Writing for an Academic Discussion',
      id: 'Menulis Diskusi Akademik (Academic Discussion)',
    },
    description: {
      en: 'In this modern 10-minute task, a professor posts an academic question, two students provide short responses, and you must write a 100+ word contribution that adds original value.',
      id: 'Pada tugas modern 10 menit ini, dosen mengunggah pertanyaan kuliah, dua mahasiswa memberi tanggapan singkat, dan kamu harus menulis respon 100+ kata dengan ide orisinal.',
    },
    formula: 'Acknowledge Classmates & State Stance (25w) → Original Supporting Argument (50w) → Concrete Example & Concluding Synthesis (35w)',
    keySignals: [
      { en: 'Direct engagement: "While I understand Sarah\'s argument regarding..., I strongly align with..."', id: 'Rujukan langsung: "While I understand Sarah\'s argument regarding..., I strongly align with..."' },
      { en: 'Unique perspective: "An essential dimension that has not yet been addressed is..."', id: 'Perspektif unik: "An essential dimension that has not yet been addressed is..."' },
      { en: 'Nuanced rationale: "From an economic standpoint," "This inevitably fosters..."', id: 'Argumentasi mendalam: "From an economic standpoint," "This inevitably fosters..."' },
    ],
    commonMistakes: [
      { en: 'Merely repeating what one of the existing student posts already said', id: 'Hanya mengulang apa yang sudah dikatakan oleh mahasiswa lain di forum' },
      { en: 'Writing fewer than 100 words (aim for 120-150 words for a top score)', id: 'Menulis kurang dari 100 kata (targetkan 120-150 kata untuk skor maksimal)' },
      { en: 'Failing to proofread for subject-verb agreement and punctuation in the final minute', id: 'Tidak menyisakan 1 menit terakhir untuk memeriksa ejaan dan kesesuaian subjek-kata kerja' },
    ],
    toeflTrick: {
      en: 'Mention one classmate by name in your first sentence ("While Paul makes a valid point about X..."). This immediately signals high discourse sophistication.',
      id: 'Sebut nama salah satu mahasiswa di kalimat pertama ("While Paul makes a valid point about X..."). Ini langsung mencerminkan kecakapan wacana tinggi.',
    },
  },
  'writing-integrated-synthesis': {
    title: {
      en: 'Integrated Writing: Lecture vs. Reading Synthesis',
      id: 'Menulis Terpadu: Sintesis Kuliah vs. Bacaan',
    },
    description: {
      en: 'You read an academic passage with 3 points (3 mins), listen to a lecture that directly refutes them (2 mins), and write an essay (20 mins, 250-300 words) summarizing how the lecture challenges the reading.',
      id: 'Kamu membaca teks akademik dengan 3 poin (3 menit), mendengarkan kuliah yang membantahnya (2 menit), lalu menulis esai 20 menit (250-300 kata) menjelaskan bantahan dosen tersebut.',
    },
    formula: 'Intro: State central tension → Body 1: Reading Point 1 vs Lecture Counter → Body 2: Point 2 vs Counter → Body 3: Point 3 vs Counter',
    keySignals: [
      { en: 'Reporting verbs: The lecturer asserts, refutes, casts doubt upon, contends', id: 'Kata kerja pelapor: The lecturer asserts, refutes, casts doubt upon, contends' },
      { en: 'Contrast markers: In direct opposition to, Conversely, On the other hand', id: 'Penanda kontras: In direct opposition to, Conversely, On the other hand' },
      { en: 'Synthesis markers: This explicitly contradicts the author\'s claim that...', id: 'Penanda sintesis: This explicitly contradicts the author\'s claim that...' },
    ],
    commonMistakes: [
      { en: 'Giving your personal opinion on the topic (strictly forbidden in Integrated Writing)', id: 'Memberikan pendapat pribadimu (sangat dilarang pada Integrated Writing)' },
      { en: 'Writing too much about the reading and neglecting the lecture\'s specific refutations', id: 'Terlalu banyak menulis isi bacaan dan menelantarkan poin bantahan dosen' },
      { en: 'Using the same reporting verb ("says", "states") repeatedly throughout the essay', id: 'Memakai kata kerja pelapor yang itu-itu saja ("says", "states") secara berulang' },
    ],
    toeflTrick: {
      en: 'Each body paragraph should follow: 1 sentence on the reading\'s claim, followed by 3-4 detailed sentences on how the professor disputes it with evidence.',
      id: 'Setiap paragraf isi: 1 kalimat menyebut klaim bacaan, diikuti 3-4 kalimat mendalam memaparkan bagaimana dosen membantahnya dengan bukti nyata.',
    },
  },
  'writing-grammar-lexis': {
    title: {
      en: 'Grammatical Precision & Lexical Sophistication in Writing',
      id: 'Ketepatan Tata Bahasa & Kekayaan Leksikal dalam Menulis',
    },
    description: {
      en: 'Scoring 28-30 on TOEFL Writing demands syntactic variety: compound-complex sentences, participial modifiers, nominalization, and zero grammatical errors.',
      id: 'Meraih skor 28-30 pada TOEFL Writing menuntut variasi sintaksis: kalimat majemuk-bertingkat, frasa partisip, nominalisasi, dan minim kesalahan tata bahasa.',
    },
    formula: 'Syntactic Variety: Simple + Compound + Complex + Inverted Structures + Precise Lexical Modifiers',
    keySignals: [
      { en: 'Nominalization: "Because governments intervened..." → "Governmental intervention led to..."', id: 'Nominalisasi: "Because governments intervened..." → "Governmental intervention led to..."' },
      { en: 'Fronted adverbials: "Undoubtedly,", "From an empirical standpoint,"', id: 'Keterangan di awal kalimat: "Undoubtedly,", "From an empirical standpoint,"' },
      { en: 'Varied sentence lengths to create rhythmic, engaging academic prose', id: 'Variasi panjang pendek kalimat untuk menciptakan ritme prosa akademik yang memikat' },
    ],
    commonMistakes: [
      { en: 'Stringing together repetitive "Subject + Verb + Object" short childish sentences', id: 'Menyusun kalimat pendek bernada kaku berulang-ulang (Subject + Verb + Object)' },
      { en: 'Forcing overly esoteric vocabulary that is used incorrectly in context', id: 'Memaksakan kosakata kuno/aneh yang penggunaannya keliru dalam konteks kalimat' },
      { en: 'Careless typos in plural endings and verb tenses', id: 'Salah ketik akhiran jamak (-s/-es) dan konsistensi tense kata kerja' },
    ],
    toeflTrick: {
      en: 'Include at least one conditional or inverted sentence in your essay. It proves high syntactic mastery to both human raters and the AI scoring engine.',
      id: 'Sisipkan setidaknya satu kalimat pengandaian atau kalimat inversi di esaimu. Ini membuktikan penguasaan sintaksis tingkat tinggi kepada penilai.',
    },
  },

  // ── SECTION 8: TOEFL Practice ──
  'practice-structure-drill': {
    title: {
      en: 'Structure & Written Expression Timed Sprint',
      id: 'Latihan Cepat & Berwaktu: Structure & Written Expression',
    },
    description: {
      en: 'Timed sectional drill simulating actual exam pressure. Target pacing: 30 seconds per item across subject-verb agreement, clauses, parallel structure, and word forms.',
      id: 'Latihan kilat berwaktu menyimulasikan tekanan ujian sesungguhnya. Target kecepatan: 30 detik per soal meliputi kesesuaian subjek, klausa, dan bentuk kata.',
    },
    formula: 'Rapid Scan: Identify Verb → Check Subject → Check Clause Connector → Eliminate Distractors',
    keySignals: [
      { en: 'Sentence completions with missing subjects, verbs, or conjunctions', id: 'Kalimat rumpang yang kehilangan subjek, kata kerja, atau konjungsi' },
      { en: 'Error identification in underlined segments A, B, C, D', id: 'Identifikasi kesalahan pada kata bergaris bawah A, B, C, D' },
      { en: 'Strict 30-second countdown pacing requirement', id: 'Tuntutan kecepatan hitung mundur 30 detik per butir soal' },
    ],
    commonMistakes: [
      { en: 'Rereading the entire sentence five times instead of scanning for grammatical anatomy', id: 'Membaca ulang seluruh kalimat berkali-kali alih-alih membedah anatomi gramatikalnya' },
      { en: 'Second-guessing your initial instinct without clear rule-based evidence', id: 'Ragu-ragu mengubah jawaban pertama tanpa dasar aturan yang jelas' },
      { en: 'Running out of time on later questions because of getting stuck on one problem', id: 'Kehabisan waktu di soal-soal akhir karena terpaku terlalu lama pada satu soal sulit' },
    ],
    toeflTrick: {
      en: 'If you cannot identify the answer in 40 seconds, eliminate obvious errors, guess, and flag it. Never sacrifice 3 future questions for 1 stubborn item.',
      id: 'Jika tidak menemukan jawaban dalam 40 detik, eliminasi opsi yang jelas salah, tebak satu, dan lanjutkan. Jangan korbankan 3 soal ke depan demi 1 soal.',
    },
  },
  'practice-reading-simulation': {
    title: {
      en: 'Academic Reading Speed & Synthesis Drill',
      id: 'Simulasi Kecepatan & Sintesis Reading Akademik',
    },
    description: {
      en: 'Intensive drill focusing on pacing: 1.5 minutes per question. Train your eye to locate paragraph evidence swiftly without losing comprehension.',
      id: 'Latihan intensif berfokus pada kecepatan: 1,5 menit per pertanyaan. Latih ketajaman mata mencari bukti paragraf dengan cepat tanpa kehilangan pemahaman.',
    },
    formula: 'Keyword Anchor: Target Question Noun → Scan Rapidly → Read 2 Lines Closely → Select Answer',
    keySignals: [
      { en: 'Dense academic texts: evolutionary biology, plate tectonics, mesopotamian archaeology', id: 'Teks akademik berbobot: biologi evolusi, lempeng tektonik, arkeologi mesopotamia' },
      { en: 'Factual, inference, vocabulary, and sentence insertion mix', id: 'Kombinasi soal fakta, inferensi, kosakata, dan penyisipan kalimat' },
      { en: 'Time management tracker maintaining 18 minutes per passage', id: 'Pelacak manajemen waktu menjaga 18 menit per bacaan' },
    ],
    commonMistakes: [
      { en: 'Reading the entire 700-word passage before ever looking at Question 1', id: 'Membaca tuntas seluruh 700 kata bacaan sebelum melihat Pertanyaan 1' },
      { en: 'Getting trapped analyzing complex scientific diagrams not asked about in questions', id: 'Terjebak menelaah diagram ilmiah rumit yang sama sekali tidak ditanyakan' },
      { en: 'Losing concentration halfway through dense historical passages', id: 'Kehilangan konsentrasi di tengah-tengah bacaan sejarah yang padat' },
    ],
    toeflTrick: {
      en: 'Questions in TOEFL Reading appear in chronological paragraph order. Question 1 is in Paragraph 1; Question 2 is in Paragraph 1 or 2.',
      id: 'Pertanyaan Reading TOEFL selalu berurutan sesuai urutan paragraf. Soal 1 ada di Paragraf 1; Soal 2 ada di Paragraf 1 atau 2.',
    },
  },
  'practice-listening-sprint': {
    title: {
      en: 'Academic Listening Comprehension Sprint',
      id: 'Latihan Cepat Pemahaman Listening Akademik',
    },
    description: {
      en: 'Rapid-fire listening simulation with authentic speech rates, academic lectures, and pragmatic audio cues.',
      id: 'Simulasi mendengarkan cepat dengan kecepatan bicara alami, perkuliahan akademik, dan isyarat audio pragmatik.',
    },
    formula: 'Listen with Intent: Predict questions while listening → Note core nouns, verbs, and contrast markers',
    keySignals: [
      { en: 'Natural conversational pace with authentic reductions (gonna, wanna, kinda)', id: 'Kecepatan percakapan alami dengan reduksi bunyi penutur asli' },
      { en: 'Professor questioning students to elicit critical reasoning', id: 'Dosen bertanya ke mahasiswa untuk memancing penalaran kritis' },
      { en: 'Visualized board diagrams accompanying lectures', id: 'Diagram ilustrasi papan tulis yang menyertai kuliah' },
    ],
    commonMistakes: [
      { en: 'Looking away or letting thoughts wander during long monologues', id: 'Lengah atau melamun saat dosen berbicara monolog panjang' },
      { en: 'Panicking when missing one specific word; keep listening for the broader argument', id: 'Panik ketika melewatkan satu kata; tetap dengarkan alur ide besarnya' },
      { en: 'Failing to note transition markers that signal incoming test items', id: 'Gagal mencatat penanda transisi yang menjadi sinyal materi ujian' },
    ],
    toeflTrick: {
      en: 'Listen for when the speaker changes their speed: when a professor slows down and speaks deliberately, that sentence contains a test question.',
      id: 'Dengarkan perubahan kecepatan bicara: saat dosen melambatkan bicaranya dengan penekanan jelas, kalimat itu pasti memuat soal ujian.',
    },
  },

  // ── SECTION 9: Mock TOEFL ──
  'mock-diagnostic-exam-1': {
    title: {
      en: 'Full Diagnostic Exam 1: Structure & Vocabulary',
      id: 'Ujian Diagnostik Penuh 1: Structure & Kosakata',
    },
    description: {
      en: 'Comprehensive diagnostic simulation assessing your grammatical accuracy, syntactic mastery, and academic vocabulary under timed exam constraints.',
      id: 'Simulasi diagnostik komprehensif mengukur akurasi tata bahasa, penguasaan sintaksis, dan kosakata akademikmu dalam batasan waktu ujian nyata.',
    },
    formula: 'Exam Condition: Strict timing, scaled 0-120 conversion benchmark, comprehensive error categorization',
    keySignals: [
      { en: 'Balanced distribution across all major grammatical categories', id: 'Distribusi seimbang di semua kategori tata bahasa utama' },
      { en: 'High-frequency Academic Word List (AWL) items', id: 'Item kosakata Academic Word List (AWL) frekuensi tinggi' },
      { en: 'Detailed post-exam analytics mapping exact weakness domains', id: 'Analisis pasca-ujian mendalam yang memetakan domain kelemahan spesifik' },
    ],
    commonMistakes: [
      { en: 'Treating diagnostic practice casually rather than testing under real quiet conditions', id: 'Mengerjakan tes diagnostik sambil santai alih-alih dalam suasana hening ujian nyata' },
      { en: 'Reviewing only correct answers and skipping deep analysis of mistakes', id: 'Hanya melihat skor dan mengabaikan analisis mendalam pada jawaban yang salah' },
      { en: 'Rushing through questions with minutes to spare instead of double-checking', id: 'Tergesa-gesa menyelesaikan padahal waktu masih ada untuk memeriksa ulang' },
    ],
    toeflTrick: {
      en: 'A high score on Diagnostic Exam 1 predicts a 600+ overall TOEFL score because syntactic accuracy directly powers reading comprehension.',
      id: 'Skor tinggi di Ujian Diagnostik 1 memprediksi skor TOEFL 600+ secara andal karena akurasi sintaksis menopang kecepatan pemahaman bacaan.',
    },
  },
  'mock-diagnostic-exam-2': {
    title: {
      en: 'Full Diagnostic Exam 2: Reading & Listening Synthesis',
      id: 'Ujian Diagnostik Penuh 2: Sintesis Reading & Listening',
    },
    description: {
      en: 'Full-spectrum diagnostic measuring your ability to process complex academic information, synthesize multiple viewpoints, and maintain stamina.',
      id: 'Diagnostik spektrum penuh mengukur kemampuan memproses informasi akademik rumit, mensintesis beragam sudut pandang, dan mempertahankan stamina.',
    },
    formula: 'Endurance Benchmark: Multi-paragraph analysis + Audio synthesis + Analytical reasoning',
    keySignals: [
      { en: 'Authentic multi-discipline passage topics (paleontology, sociology, astrophysics)', id: 'Topik bacaan lintas disiplin otentik (paleontologi, sosiologi, astrofisika)' },
      { en: 'Complex inference, rhetorical intent, and lecture classification questions', id: 'Soal inferensi rumit, tujuan retoris, dan klasifikasi kuliah' },
      { en: 'Complete scaled performance breakdown across all cognitive skills', id: 'Rincian performa berskala lengkap di seluruh keterampilan kognitif' },
    ],
    commonMistakes: [
      { en: 'Mental fatigue setting in during the second half of the exam', id: 'Kelelahan mental yang melanda di paruh kedua pelaksanaan ujian' },
      { en: 'Failing to take crisp, organized notes during listening components', id: 'Catatan berantakan dan tidak teratur saat bagian mendengarkan berlangsung' },
      { en: 'Second-guessing well-reasoned answers due to time pressure panic', id: 'Mengubah jawaban yang sudah benar karena panik dikejar sisa waktu' },
    ],
    toeflTrick: {
      en: 'Maintain steady rhythmic breathing during lengthy reading passages to sustain peak cognitive oxygenation and focus.',
      id: 'Jaga ritme pernapasan yang stabil saat membaca teks panjang untuk mempertahankan konsentrasi dan stamina kognitif prima.',
    },
  },
};

// Alias for convenience
export const LESSON_DETAILS = GRAMMAR_DETAILS;

// ──────────────────────────────────────────────────────────
// Enhanced Lesson Examples with Translations (For ALL Sections)
// ──────────────────────────────────────────────────────────
export interface BilingualExample {
  en: string;
  id: string;
}

export const LESSON_EXAMPLES: Record<string, BilingualExample[]> = {
  // ── SECTION 1: English Foundation ──
  'sentence-elements-clauses': [
    {
      en: 'Although the committee proposed several amendments, the principal legislation remained unchanged.',
      id: 'Meskipun komite mengusulkan beberapa amandemen, undang-undang utama tersebut tetap tidak berubah.',
    },
    {
      en: 'Photosynthesis is the fundamental biochemical process by which plants convert solar irradiance into glucose.',
      id: 'Fotosintesis adalah proses biokimia fundamental di mana tumbuhan mengubah radiasi matahari menjadi glukosa.',
    },
    {
      en: 'Having completed the initial excavations, archaeologists uncovered a labyrinth of prehistoric irrigation channels.',
      id: 'Setelah menyelesaikan penggalian awal, para arkeolog menemukan labirin saluran irigasi prasejarah.',
    },
    {
      en: 'The satellite, which was launched last November, transmits real-time atmospheric measurements to ground stations.',
      id: 'Satelit tersebut, yang diluncurkan November lalu, mentransmisikan pengukuran atmosfer waktu-nyata ke stasiun bumi.',
    },
  ],
  'conjunctions-transitions': [
    {
      en: 'The experimental vaccine showed high efficacy; nevertheless, extensive longitudinal trials are still required.',
      id: 'Vaksin eksperimental tersebut menunjukkan efikasi tinggi; meskipun demikian, uji coba longitudinal ekstensif masih tetap diperlukan.',
    },
    {
      en: 'Despite severe climatic anomalies during the Pleistocene, megafauna persisted across diverse glacial refugia.',
      id: 'Terlepas dari anomali iklim yang parah selama era Pleistosen, megafauna tetap bertahan di berbagai suaka glasial.',
    },
    {
      en: 'Furthermore, recent spectroscopic analyses indicate that the comet contains abundant organic molecules.',
      id: 'Lebih jauh lagi, analisis spektroskopi terkini mengindikasikan bahwa komet tersebut mengandung banyak molekul organik.',
    },
    {
      en: 'Not only did the ocean temperature rise abruptly, but marine biodiversity also declined markedly.',
      id: 'Bukan hanya suhu lautan yang naik secara drastis, tetapi keanekaragaman hayati laut juga menurun drastis.',
    },
  ],

  // ── SECTION 2: Vocabulary ──
  'awl-sublist-1': [
    {
      en: 'Economic analysts established a direct correlation between industrial automation and regional labor dislocation.',
      id: 'Para analis ekonomi membuktikan adanya korelasi langsung antara otomatisasi industri dan pergeseran tenaga kerja regional.',
    },
    {
      en: 'The research team formulated a comprehensive conceptual framework to investigate neural synaptic plasticity.',
      id: 'Tim peneliti merumuskan kerangka konseptual komprehensif untuk menyelidiki plastisitas sinaptik saraf.',
    },
    {
      en: 'Government regulations constitute a vital safeguard against monopolistic market consolidation.',
      id: 'Peraturan pemerintah merupakan perlindungan penting terhadap konsolidasi pasar monopolistik.',
    },
    {
      en: 'Preliminary data indicate that elevated salinity significantly inhibits mangrove seedling propagation.',
      id: 'Data awal menunjukkan bahwa salinitas yang meningkat secara signifikan menghambat perkembangbiakan bibit bakau.',
    },
  ],
  'academic-prefixes-roots': [
    {
      en: 'Retrospective historical analysis illuminates the structural origins of democratic institutions.',
      id: 'Analisis historis retrospektif (melihat ke masa lalu) menjelaskan asal mula struktural institusi demokrasi.',
    },
    {
      en: 'Circumnavigating the polar ice caps requires specialized icebreakers with reinforced hulls.',
      id: 'Mengarungi sekeliling tudung es kutub membutuhkan kapal pemecah es khusus dengan lambung kapal yang diperkuat.',
    },
    {
      en: 'Geologists extract mineral core samples to deduce the chronological sequence of volcanic strata.',
      id: 'Ahli geologi mengekstraksi sampel inti mineral untuk menyimpulkan urutan kronologis lapisan vulkanik.',
    },
    {
      en: 'The interstellar trajectory was calculated using gravitational perturbation models.',
      id: 'Lintasan antar-bintang dihitung menggunakan model gangguan gravitasi.',
    },
  ],
  'academic-collocations': [
    {
      en: 'The epidemiological consortium conducted rigorous research into asymptomatic viral transmission.',
      id: 'Konsorsium epidemiologi melakukan penelitian ketat terhadap transmisi virus tanpa gejala.',
    },
    {
      en: 'Sociologists drew profound conclusions concerning urban migration patterns following industrialization.',
      id: 'Para sosiolog menarik kesimpulan mendalam mengenai pola migrasi perkotaan setelah industrialisasi.',
    },
    {
      en: 'Empirical evidence substantiates the hypothesis that sleep deprivation impairs memory consolidation.',
      id: 'Bukti empiris memperkuat hipotesis bahwa kurang tidur merusak konsolidasi memori.',
    },
    {
      en: 'Anthropogenic carbon emissions pose a grave threat to fragile coral reef ecosystems worldwide.',
      id: 'Emisi karbon antropogenik (akibat manusia) menebar ancaman serius bagi ekosistem terumbu karang yang rentan.',
    },
  ],
  'contextual-synonyms': [
    {
      en: 'In metallurgy, a metal\'s ductile property allows it to be drawn into thin wires without fracturing.',
      id: 'Dalam metalurgi, sifat lentur suatu logam memungkinkannya ditarik menjadi kawat tipis tanpa patah.',
    },
    {
      en: 'The botanist discovered a novel species of orchid thriving in the subterranean cave ecosystem.',
      id: 'Ahli botani tersebut menemukan spesies anggrek baru (belum pernah ada sebelumnya) yang berkembang subur di ekosistem gua bawah tanah.',
    },
    {
      en: 'The author\'s account of the constitutional convention is remarkably objective and impartial.',
      id: 'Laporan penulis tentang konvensi konstitusional tersebut luar biasa objektif dan tidak memihak.',
    },
    {
      en: 'Subtle shifts in ocean salinity precipitated a sudden deceleration of the Atlantic conveyor current.',
      id: 'Pergeseran halus dalam salinitas laut memicu deselerasi mendadak arus konveyor Atlantik.',
    },
  ],

  // ── SECTION 3: Grammar ──
  'simple-present': [
    {
      en: 'Photosynthesis occurs when chlorophyll absorbs solar electromagnetic radiation.',
      id: 'Fotosintesis terjadi ketika klorofil menyerap radiasi elektromagnetik matahari.',
    },
    {
      en: 'The international committee reviews higher education accreditation standards annually.',
      id: 'Komite internasional meninjau standar akreditasi pendidikan tinggi setiap tahun.',
    },
    {
      en: 'Archaeologists investigate ancient settlements to understand early urban trade networks.',
      id: 'Arkeolog menyelidiki pemukiman kuno untuk memahami jaringan perdagangan urban awal.',
    },
    {
      en: 'Water boils at 100 degrees Celsius at sea level.',
      id: 'Air mendidih pada suhu 100 derajat Celsius di permukaan laut.',
    },
  ],
  'simple-past': [
    {
      en: 'Marie Curie discovered radium and polonium in 1898.',
      id: 'Marie Curie menemukan radium dan polonium pada tahun 1898.',
    },
    {
      en: 'The catastrophic eruption of Mount Tambora in 1815 caused significant global climate cooling.',
      id: 'Letusan dahsyat Gunung Tambora pada tahun 1815 menyebabkan pendinginan iklim global yang signifikan.',
    },
    {
      en: 'Early hominids developed rudimentary stone tools to adapt to changing savanna ecosystems.',
      id: 'Hominid awal mengembangkan peralatan batu sederhana untuk beradaptasi dengan ekosistem sabana yang berubah.',
    },
    {
      en: 'The Wright brothers successfully flew the first motorized airplane in 1903.',
      id: 'Bersaudara Wright berhasil menerbangkan pesawat bermotor pertama pada tahun 1903.',
    },
  ],
  'present-perfect': [
    {
      en: 'Scientists have discovered over 5,000 exoplanets beyond our solar system.',
      id: 'Para ilmuwan telah menemukan lebih dari 5.000 exoplanet di luar tata surya kita.',
    },
    {
      en: 'Researchers have recently published groundbreaking findings on neural plasticity.',
      id: 'Para peneliti baru-baru ini menerbitkan temuan terobosan tentang plastisitas saraf.',
    },
    {
      en: 'Global temperatures have risen significantly since the Industrial Revolution.',
      id: 'Suhu global telah meningkat secara signifikan sejak Revolusi Industri.',
    },
    {
      en: 'Astronomers have observed multiple gamma-ray bursts using orbital satellite arrays.',
      id: 'Para astronom telah mengamati banyak ledakan sinar gamma menggunakan susunan satelit orbital.',
    },
  ],
  'passive-voice': [
    {
      en: 'The greenhouse gases are absorbed by oceans and forests.',
      id: 'Gas rumah kaca diserap oleh samudra dan hutan.',
    },
    {
      en: 'The telescope was invented in the Netherlands during the early seventeenth century.',
      id: 'Teleskop ditemukan di Belanda pada awal abad ketujuh belas.',
    },
    {
      en: 'Comprehensive climatological data will be analyzed by the research consortium next month.',
      id: 'Data klimatologi komprehensif akan dianalisis oleh konsorsium penelitian bulan depan.',
    },
    {
      en: 'The ancient manuscript was carefully preserved in a temperature-controlled vault.',
      id: 'Manuskrip kuno itu dijaga dengan hati-hati di lemari penyimpanan bersuhu terkontrol.',
    },
  ],
  'relative-clauses': [
    {
      en: 'The evolutionary biologist who formulated the punctuated equilibrium model delivered the keynote address.',
      id: 'Ahli biologi evolusi yang merumuskan model keseimbangan bersela menyampaikan pidato utama.',
    },
    {
      en: 'The algorithmic matrix, which was developed at Caltech, optimizes orbital satellite trajectories.',
      id: 'Matriks algoritmik, yang dikembangkan di Caltech, mengoptimalkan lintasan satelit orbital.',
    },
    {
      en: 'The observatory where astronomical spectroscopic measurements were first recorded celebrated its centennial.',
      id: 'Observatorium tempat pengukuran spektroskopi astronomi pertama kali dicatat merayakan hari jadinya yang keseratus.',
    },
    {
      en: 'Students whose research proposals were accepted will receive full funding.',
      id: 'Mahasiswa yang proposal penelitiannya diterima akan menerima pendanaan penuh.',
    },
  ],
  'conditionals-inversions': [
    {
      en: 'Had the meteoroid entered the atmosphere at a steeper angle, the explosion would have decimated a broader area.',
      id: 'Seandainya meteoroid itu memasuki atmosfer pada sudut yang lebih curam, ledakannya pasti telah memusnahkan area yang lebih luas.',
    },
    {
      en: 'Rarely do subterranean aquifer systems replenish at the pace of modern industrial extraction.',
      id: 'Jarang sekali sistem akuifer bawah tanah terisi kembali secepat laju ekstraksi industri modern.',
    },
    {
      en: 'Were renewable energy storage costs to drop by half, fossil fuel power plants would become economically obsolete.',
      id: 'Seandainya biaya penyimpanan energi terbarukan turun separuh, pembangkit listrik berbahan bakar fosil akan usang secara ekonomi.',
    },
    {
      en: 'Under no circumstances should the volatile chemical reagent be exposed to direct incandescent light.',
      id: 'Dalam keadaan apa pun reagen kimia volatil tersebut tidak boleh terpapar cahaya pijar langsung.',
    },
  ],
  'gerunds-infinitives': [
    {
      en: 'The university administration postponed implementing the revised grading policy until next semester.',
      id: 'Pihak administrasi universitas menunda penerapan kebijakan penilaian yang direvisi hingga semester depan.',
    },
    {
      en: 'Biologists succeeded in sequencing the complete genome of the extinct woolly mammoth.',
      id: 'Para ahli biologi berhasil mengurutkan genom lengkap dari mamut berbulu yang telah punah.',
    },
    {
      en: 'The architectural committee intends to construct an eco-friendly campus dormitory powered by geothermal heat.',
      id: 'Komite arsitektur bermaksud membangun asrama kampus ramah lingkungan yang ditenagai panas bumi.',
    },
    {
      en: 'Physicists avoided making premature conclusions prior to replicating the particle collision experiment.',
      id: 'Para fisikawan menghindari pengambilan kesimpulan dini sebelum mereplikasi eksperimen tabrakan partikel.',
    },
  ],
  'parallel-structure': [
    {
      en: 'The research grant covers purchasing lab equipment, hiring student assistants, and publishing findings in peer-reviewed journals.',
      id: 'Dana hibah penelitian mencakup pembelian peralatan lab, perekrutan asisten mahasiswa, dan penerbitan temuan di jurnal mitra bestari.',
    },
    {
      en: 'The proposed urban plan is neither economically feasible nor environmentally sustainable.',
      id: 'Rencana tata kota yang diusulkan itu tidak layak secara ekonomi maupun berkelanjutan bagi lingkungan.',
    },
    {
      en: 'The volcanic eruption caused widespread destruction of infrastructure and severe disruptions of global air travel.',
      id: 'Letusan gunung berapi tersebut menyebabkan kehancuran infrastruktur yang luas dan gangguan parah pada perjalanan udara global.',
    },
    {
      en: 'The scholar spent her career studying ancient hieroglyphs, translating forgotten texts, and mentoring younger linguists.',
      id: 'Cendekiawan tersebut mendedikasikan kariernya untuk mempelajari hieroglif kuno, menerjemahkan naskah terlupakan, dan membimbing linguis muda.',
    },
  ],

  // ── SECTION 4: Reading ──
  'factual-questions': [
    {
      en: 'According to the geological survey, granite formations solidify at subterranean depths exceeding five kilometers.',
      id: 'Menurut survei geologi, formasi granit membeku pada kedalaman bawah tanah yang melebihi lima kilometer.',
    },
    {
      en: 'All of the following factors contributed to the decline of the Mayan lowland cities EXCEPT a catastrophic volcanic event.',
      id: 'Semua faktor berikut berkontribusi pada kemunduran kota-kota dataran rendah Maya KECUALI bencana letusan gunung berapi.',
    },
    {
      en: 'The author notes that desert tortoises spend approximately ninety-five percent of their lives underground to conserve water.',
      id: 'Penulis mencatat bahwa kura-kura gurun menghabiskan sekitar sembilan puluh lima persen hidupnya di bawah tanah untuk menghemat air.',
    },
    {
      en: 'The text indicates that the invention of the movable-type printing press stimulated literacy throughout Renaissance Europe.',
      id: 'Teks menunjukkan bahwa penemuan mesin cetak huruf bergerak merangsang melek huruf di seluruh Eropa era Renaissance.',
    },
  ],
  'inference-purpose': [
    {
      en: 'It can be inferred from paragraph 3 that early hominids favored riverine habitats because freshwater attracted game animals.',
      id: 'Dapat disimpulkan dari paragraf 3 bahwa hominid awal menyukai habitat tepi sungai karena air tawar menarik hewan buruan.',
    },
    {
      en: 'The author mentions the Coelacanth in paragraph 2 to illustrate that living fossils can survive largely unchanged for millions of years.',
      id: 'Penulis menyebutkan ikan Coelacanth di paragraf 2 untuk mengilustrasikan bahwa fosil hidup dapat bertahan tanpa banyak berubah selama jutaan tahun.',
    },
    {
      en: 'From the passage, it is implied that the solar wind would strip Earth\'s atmosphere if the planetary magnetic field did not exist.',
      id: 'Dari bacaan tersirat bahwa angin matahari akan mengikis atmosfer Bumi seandainya medan magnet planet tidak ada.',
    },
    {
      en: 'Why does the author discuss the silk trade? To demonstrate the extensive intercontinental reach of ancient Eurasian economies.',
      id: 'Mengapa penulis membahas perdagangan sutra? Untuk membuktikan jangkauan antarkebudayaan yang luas dari ekonomi Eurasia kuno.',
    },
  ],
  'vocab-in-context': [
    {
      en: 'The term "proliferation" in line 14 is closest in meaning to rapid increase or multiplication.',
      id: 'Istilah "proliferation" pada baris 14 paling mendekati maknanya dengan peningkatan atau perkembangbiakan pesat.',
    },
    {
      en: 'The word "dormant" in paragraph 4 is closest in meaning to inactive or quiescent.',
      id: 'Kata "dormant" di paragraf 4 paling mendekati maknanya dengan tidak aktif atau sedang tidur.',
    },
    {
      en: 'The author uses "meticulous" to characterize the botanist\'s painstaking observational records.',
      id: 'Penulis menggunakan kata "meticulous" untuk mencirikan catatan pengamatan ahli botani yang sangat teliti dan cermat.',
    },
    {
      en: 'The phrase "paved the way for" in paragraph 5 is closest in meaning to made possible or facilitated.',
      id: 'Frasa "paved the way for" pada paragraf 5 paling dekat artinya dengan membuka jalan bagi atau memfasilitasi.',
    },
  ],
  'sentence-insertion-summary': [
    {
      en: 'These findings challenged the prevailing orthodoxy that human language evolution occurred abruptly rather than incrementally.',
      id: 'Temuan-temuan ini menantang ortodoksi yang berlaku bahwa evolusi bahasa manusia terjadi secara mendadak alih-alih bertahap.',
    },
    {
      en: 'Consequently, the resulting sediment layers provide a chronological geological record spanning two billion years.',
      id: 'Akibatnya, lapisan sedimen yang dihasilkan memberikan rekaman geologis kronologis yang membentang selama dua miliar tahun.',
    },
    {
      en: 'An overarching thesis: Continental drift, driven by mantle convection, explains both seismic volatility and global biogeography.',
      id: 'Tesis menyeluruh: Pergeseran benua, yang didorong oleh konveksi mantel bumi, menjelaskan volatilitas seismik sekaligus biogeografi global.',
    },
    {
      en: 'Summary statement: Industrialization reorganized agrarian labor, accelerated urban growth, and precipitated environmental transformation.',
      id: 'Pernyataan rangkuman: Industrialisasi mereorganisasi tenaga kerja agraris, mempercepat pertumbuhan kota, dan memicu transformasi lingkungan.',
    },
  ],

  // ── SECTION 5: Listening ──
  'campus-conversations': [
    {
      en: 'Student: "I\'m concerned because the prerequisite syllabus mentions advanced linear algebra, which I haven\'t taken yet."',
      id: 'Mahasiswa: "Saya khawatir karena silabus prasyarat menyebutkan aljabar linier tingkat lanjut, yang belum pernah saya ambil."',
    },
    {
      en: 'Advisor: "You can submit a waiver request if you have completed the equivalent multivariable calculus coursework."',
      id: 'Penasihat: "Kamu bisa mengajukan permohonan dispensasi jika sudah menyelesaikan mata kuliah kalkulus multivariabel yang setara."',
    },
    {
      en: 'Librarian: "The special archives collection requires a faculty sponsor authorization form before physical access is granted."',
      id: 'Pustakawan: "Koleksi arsip khusus memerlukan formulir izin sponsor dari dosen sebelum akses fisik diberikan."',
    },
    {
      en: 'Student: "Thanks for clarifying; I\'ll schedule a meeting with Professor Harrison right after my geology seminar."',
      id: 'Mahasiswa: "Terima kasih atas penjelasannya; saya akan menjadwalkan pertemuan dengan Profesor Harrison tepat setelah seminar geologi saya."',
    },
  ],
  'academic-lectures': [
    {
      en: 'Professor: "Today we\'ll examine how mycorrhizal fungi form symbiotic networks that transfer nutrients between forest trees."',
      id: 'Profesor: "Hari ini kita akan meneliti bagaimana jamur mikoriza membentuk jaringan simbiotik yang mentransfer nutrisi antar-pohon di hutan."',
    },
    {
      en: 'The lecturer highlights three distinct adaptations that allow desert succulents to withstand prolonged hyper-arid droughts.',
      id: 'Dosen tersebut menyoroti tiga adaptasi berbeda yang memungkinkan tanaman sukulen gurun bertahan dari kekeringan hiper-kering berkepanjangan.',
    },
    {
      en: 'In medieval Europe, the transition from a two-field to a three-field crop rotation system vastly augmented agricultural productivity.',
      id: 'Di Eropa abad pertengahan, transisi dari sistem rotasi tanaman dua ladang ke tiga ladang sangat meningkatkan produktivitas pertanian.',
    },
    {
      en: 'Astronomers utilize the Doppler effect on starlight to deduce the gravitational wobble caused by orbiting exoplanets.',
      id: 'Para astronom memanfaatkan efek Doppler pada cahaya bintang untuk menyimpulkan goyangan gravitasi yang disebabkan oleh exoplanet yang mengorbit.',
    },
  ],
  'speaker-attitude': [
    {
      en: 'Professor: "Well, that hypothesis was popular in the 1970s, but modern spectroscopic data paints a rather different picture."',
      id: 'Profesor: "Yah, hipotesis itu memang populer pada tahun 1970-an, tetapi data spektroskopi modern memberikan gambaran yang cukup berbeda."',
    },
    {
      en: 'The professor\'s tone indicates skepticism regarding the historical claim that the library was burned in a single catastrophic fire.',
      id: 'Nada bicara profesor mengindikasikan rasa skeptis mengenai klaim sejarah bahwa perpustakaan tersebut terbakar dalam satu kebakaran dahsyat tunggal.',
    },
    {
      en: 'Student: "Wait, so the entire migration depends on wind currents they can\'t even predict?" (Tone: Bewildered and intrigued).',
      id: 'Mahasiswa: "Tunggu, jadi seluruh migrasi bergantung pada arus angin yang bahkan tidak bisa mereka prediksi?" (Nada: Terperangah dan penasaran).',
    },
    {
      en: 'The lecturer expresses admiration for the architectural resilience of Roman concrete in underwater harbor structures.',
      id: 'Dosen tersebut menyatakan kekaguman atas ketahanan arsitektural beton Romawi pada struktur pelabuhan bawah air.',
    },
  ],
  'listening-organization': [
    {
      en: 'The professor organizes the lecture chronologically: first discussing archaic cave paintings, then transitioning to classical fresco techniques.',
      id: 'Dosen menyusun kuliahnya secara kronologis: pertama membahas lukisan gua kuno, lalu beralih ke teknik fresko klasik.',
    },
    {
      en: 'The discussion compares two evolutionary theories: phyletic gradualism versus punctuated equilibrium.',
      id: 'Diskusi tersebut membandingkan dua teori evolusi: gradualisme filetik versus keseimbangan bersela (punctuated equilibrium).',
    },
    {
      en: 'The lecturer uses a cause-and-effect structure to delineate how volcanic ash clouds induce hemispheric cooling.',
      id: 'Dosen menggunakan struktur sebab-akibat untuk menguraikan bagaimana awan abu vulkanik menyebabkan pendinginan belahan bumi.',
    },
    {
      en: 'A classification framework divides marine hydrothermal ecosystems based on fluid temperature and mineral saturation.',
      id: 'Kerangka klasifikasi membagi ekosistem hidrotermal laut berdasarkan suhu cairan dan kejenuhan mineral.',
    },
  ],

  // ── SECTION 6: Speaking ──
  'speaking-independent': [
    {
      en: 'Prompt: Some universities require all first-year students to live on campus. Do you agree or disagree?',
      id: 'Soal: Sebagian universitas mewajibkan mahasiswa tahun pertama tinggal di asrama kampus. Apakah kamu setuju atau tidak?',
    },
    {
      en: 'Response: "I firmly agree that first-year students should reside in dormitories because it accelerates social integration and facilitates study groups."',
      id: 'Jawaban: "Saya sangat setuju bahwa mahasiswa tahun pertama harus tinggal di asrama karena hal itu mempercepat integrasi sosial dan memfasilitasi kelompok belajar."',
    },
    {
      en: 'Personal Example: "For instance, when I shared a dormitory during freshman year, my roommate and I collaborated on physics assignments every evening."',
      id: 'Contoh Pribadi: "Misalnya, ketika saya berbagi kamar asrama di tahun pertama, teman sekamar saya dan saya berkolaborasi mengerjakan tugas fisika setiap malam."',
    },
    {
      en: 'Conclusion: "Therefore, on-campus living provides vital academic and emotional foundations for undergraduate success."',
      id: 'Kesimpulan: "Oleh karena itu, tinggal di dalam kampus memberikan landasan akademik dan emosional yang vital bagi kesuksesan sarjana."',
    },
  ],
  'speaking-campus-integrated': [
    {
      en: 'Reading Notice: The dining hall will eliminate plastic trays starting next month to conserve water and reduce dishwashing detergents.',
      id: 'Pemberitahuan: Kantin akan meniadakan nampan plastik mulai bulan depan untuk menghemat air dan mengurangi detergen pencuci piring.',
    },
    {
      en: 'Student Opinion: "The woman enthusiastic supports this policy because students waste far less food when carrying individual plates."',
      id: 'Opini Mahasiswa: "Mahasiswi tersebut sangat mendukung kebijakan ini karena mahasiswa membuang jauh lebih sedikit makanan ketika membawa piring satuan."',
    },
    {
      en: 'Reason 1: "She explains that without large trays, students avoid piling up excess dishes they never finish eating."',
      id: 'Alasan 1: "Dia menjelaskan bahwa tanpa nampan besar, mahasiswa tidak akan menumpuk makanan berlebih yang akhirnya tidak mereka habiskan."',
    },
    {
      en: 'Reason 2: "Additionally, she notes the energy savings align with the student council\'s environmental sustainability initiative."',
      id: 'Alasan 2: "Selain itu, dia mencatat penghematan energi selaras dengan inisiatif kelestarian lingkungan dari dewan mahasiswa."',
    },
  ],
  'speaking-lecture-synthesis': [
    {
      en: 'Concept: "Behavioral mimicry occurs when a harmless organism evolves visual patterns resembling a toxic predator to deter attacks."',
      id: 'Konsep: "Mimikri perilaku terjadi ketika organisme yang tidak berbahaya mengembangkan pola visual yang menyerupai predator beracun untuk menangkal serangan."',
    },
    {
      en: 'Lecture Example: "The professor illustrates this with the hoverfly, which displays yellow and black stripes identical to stinging wasps."',
      id: 'Contoh Kuliah: "Profesor mengilustrasikan hal ini dengan lalat hoverfly, yang menampilkan garis kuning dan hitam identik dengan lebah penyengat."',
    },
    {
      en: 'Mechanism: "Birds that have suffered wasp stings completely avoid the harmless hoverfly, mistaking it for the stinging insect."',
      id: 'Mekanisme: "Burung yang pernah tersengat lebah sama sekali menghindari lalat hoverfly yang tidak berbahaya tersebut karena mengira serangga penyengat."',
    },
    {
      en: 'Synthesis: "Thus, the hoverfly secures protection against predation without expending metabolic energy producing venom."',
      id: 'Sintesis: "Dengan demikian, hoverfly memperoleh perlindungan dari pemangsaan tanpa mengeluarkan energi metabolik untuk memproduksi bisa racun."',
    },
  ],

  // ── SECTION 7: Writing ──
  'writing-academic-discussion': [
    {
      en: 'Discussion Prompt: Professor Diaz asks whether governments should prioritize funding space exploration or combating local environmental degradation.',
      id: 'Topik Diskusi: Profesor Diaz menanyakan apakah pemerintah harus memprioritaskan pendanaan eksplorasi luar angkasa atau memerangi degradasi lingkungan lokal.',
    },
    {
      en: 'Student Argument: "While I acknowledge Andrew\'s point that space technology drives satellite innovation, I strongly side with Claire."',
      id: 'Argumen Mahasiswa: "Meskipun saya mengakui poin Andrew bahwa teknologi antariksa memicu inovasi satelit, saya sangat berpihak pada Claire."',
    },
    {
      en: 'Original Contribution: "Atmospheric warming and freshwater depletion represent immediate existential crises that demand sovereign capital allocations today."',
      id: 'Kontribusi Orisinal: "Pemanasan atmosfer dan berkurangnya air bersih merupakan krisis eksistensial mendesak yang menuntut alokasi anggaran negara saat ini juga."',
    },
    {
      en: 'Concluding Thought: "Without a habitable biosphere on Earth, interplanetary aspirations become fundamentally meaningless."',
      id: 'Pikiran Penutup: "Tanpa biosfer yang layak huni di Bumi, aspirasi antarplanet pada hakikatnya menjadi tidak bermakna."',
    },
  ],
  'writing-integrated-synthesis': [
    {
      en: 'The reading passage claims that constructing offshore wind farms is economically unviable and disrupts commercial shipping lanes.',
      id: 'Teks bacaan mengklaim bahwa pembangunan ladang turbin angin lepas pantai tidak layak secara ekonomi dan mengganggu jalur pelayaran komersial.',
    },
    {
      en: 'Conversely, the lecturer refutes this by citing modular floating turbine technology that drastically reduces installation and maintenance costs.',
      id: 'Sebaliknya, dosen membantah hal ini dengan mengutip teknologi turbin terapung modular yang secara drastis memangkas biaya pemasangan dan perawatan.',
    },
    {
      en: 'Furthermore, the professor emphasizes that satellite GPS corridors prevent navigational collisions with near-zero marine interference.',
      id: 'Lebih lanjut, profesor menekankan bahwa koridor navigasi satelit GPS mencegah tabrakan kapal dengan gangguan laut yang hampir nihil.',
    },
    {
      en: 'In conclusion, the lecture systematically casts doubt on each objection raised in the reading, demonstrating that offshore wind is viable.',
      id: 'Kesimpulannya, kuliah tersebut secara sistematis membantah setiap keberatan dalam teks bacaan, membuktikan bahwa turbin angin lepas pantai sangat layak.',
    },
  ],
  'writing-grammar-lexis': [
    {
      en: 'Rather than solely relying on monetary subsidies, municipal authorities should incentivize private green infrastructure development.',
      id: 'Alih-alih hanya mengandalkan subsidi keuangan, otoritas perkotaan sebaiknya memberi insentif pada pengembangan infrastruktur hijau oleh swasta.',
    },
    {
      en: 'Had educational institutions embraced digital pedagogy earlier, the transitional disruption during the pandemic would have been minimized.',
      id: 'Seandainya institusi pendidikan merangkul pedagogi digital lebih awal, disrupsi masa transisi selama pandemi pasti dapat diminimalkan.',
    },
    {
      en: 'Compelling empirical evidence underscores the indispensable role of early childhood bilingualism in fostering cognitive flexibility.',
      id: 'Bukti empiris yang meyakinkan menggarisbawahi peran mutlak kedwibahasaan anak usia dini dalam membina kelenturan kognitif.',
    },
    {
      en: 'Consequently, implementing progressive taxation policies fosters socioeconomic mobility and curtails structural wealth inequality.',
      id: 'Akibatnya, penerapan kebijakan pajak progresif mendorong mobilitas sosio-ekonomi dan menekan ketimpangan kekayaan struktural.',
    },
  ],

  // ── SECTION 8: TOEFL Practice ──
  'practice-structure-drill': [
    {
      en: 'Not until the invention of the electron microscope _____ to observe the intricate internal organelles of living bacterial cells.',
      id: 'Baru setelah penemuan mikroskop elektron _____ mengamati organel internal yang rumit dari sel bakteri hidup.',
    },
    {
      en: 'Rarely _____ a single meteorological phenomenon generated such extensive inland flood damage as the 1993 Mississippi River crest.',
      id: 'Jarang sekali _____ fenomena meteorologi tunggal menimbulkan kerusakan banjir pedalaman sedemikian luas seperti luapan Sungai Mississippi tahun 1993.',
    },
    {
      en: 'The chemical synthesis of synthetic indigo in 1897 rendered agricultural indigo plantations commercially obsolete.',
      id: 'Sintesis kimia pewarna nila sintetis pada tahun 1897 membuat perkebunan nila pertanian menjadi usang secara komersial.',
    },
    {
      en: 'Geologists classify metamorphic rocks according to their mineralogical composition and the degree of recrystallization they have undergone.',
      id: 'Ahli geologi mengklasifikasikan batuan metamorf menurut komposisi mineralogi dan derajat rekristalisasi yang dialaminya.',
    },
  ],
  'practice-reading-simulation': [
    {
      en: 'Paragraph 1 introduces the concept of continental drift, originally proposed by Alfred Wegener in 1912 based on coastline complementarity.',
      id: 'Paragraf 1 memperkenalkan konsep pergeseran benua, yang awalnya diusulkan oleh Alfred Wegener pada 1912 berdasarkan kesesuaian garis pantai.',
    },
    {
      en: 'The fossil distribution of the freshwater reptile Mesosaurus across southern Africa and South America provides compelling paleogeographic proof.',
      id: 'Distribusi fosil reptil air tawar Mesosaurus di Afrika bagian selatan dan Amerika Selatan memberikan bukti paleogeografis yang meyakinkan.',
    },
    {
      en: 'Mid-ocean ridge seafloor spreading rates vary between one and ten centimeters per year depending on tectonic subduction dynamics.',
      id: 'Kecepatan pemekaran lantai samudra di punggungan tengah laut bervariasi antara satu hingga sepuluh sentimeter per tahun tergantung dinamika subduksi.',
    },
    {
      en: 'The author concludes that mantle convection plumes constitute the primary driving engine powering lithospheric plate displacements.',
      id: 'Penulis menyimpulkan bahwa aliran konveksi mantel bumi merupakan mesin penggerak utama yang mendasari pergeseran lempeng litosfer.',
    },
  ],
  'practice-listening-sprint': [
    {
      en: 'Lecture Excerpt: "Let\'s turn our attention to bioluminescence in deep-sea cephalopods, specifically the vampire squid."',
      id: 'Kutipan Kuliah: "Mari alihkan perhatian kita ke bioluminesensi pada sefalopoda laut dalam, khususnya cumi-cumi vampir."',
    },
    {
      en: 'The speaker notes that unlike shallow-water squids that expel dark melanin ink, deep-sea species eject a glowing bioluminescent cloud.',
      id: 'Pembicara mencatat bahwa tidak seperti cumi perairan dangkal yang mengeluarkan tinta melanin gelap, spesies laut dalam menyemburkan awan bercahaya.',
    },
    {
      en: 'This glowing cloud temporarily blinds predators in perpetual darkness, allowing the vampire squid to escape undetected.',
      id: 'Awan bercahaya ini membutakan predator untuk sementara di kegelapan abadi, memungkinkan cumi vampir meloloskan diri tanpa terdeteksi.',
    },
    {
      en: 'Question Analysis: The question asks why the professor contrasts shallow-water ink with deep-sea luminescent secretions (Rhetorical Purpose).',
      id: 'Analisis Soal: Soal menanyakan mengapa profesor mengontraskan tinta perairan dangkal dengan sekresi bercahaya laut dalam (Tujuan Retoris).',
    },
  ],

  // ── SECTION 9: Mock TOEFL ──
  'mock-diagnostic-exam-1': [
    {
      en: 'Item 1: Although _____ in the upper atmosphere, ozone serves as a critical shield against mutagenic ultraviolet-B solar radiation.',
      id: 'Soal 1: Meskipun _____ di lapisan atmosfer atas, ozon berfungsi sebagai perisai penting terhadap radiasi matahari ultraviolet-B yang mutagenik.',
    },
    {
      en: 'Item 2: Had the seismic engineers not installed base-isolation elastomeric dampers, the skyscraper _____ catastrophic structural failure.',
      id: 'Soal 2: Seandainya para insinyur seismik tidak memasang peredam elastomer isolasi dasar, gedung pencakar langit itu _____ kegagalan struktural fatal.',
    },
    {
      en: 'Item 3: The AWL term "ubiquitous" in paragraph 2 describes microplastic contaminants found throughout remote Antarctic glaciers.',
      id: 'Soal 3: Istilah AWL "ubiquitous" di paragraf 2 mendeskripsikan polutan mikroplastik yang ditemukan di mana-mana di seluruh gletser Antartika terpencil.',
    },
    {
      en: 'Item 4: Neither the laboratory technician nor the senior researchers _____ able to account for the unexpected calorimetric discrepancy.',
      id: 'Soal 4: Baik teknisi laboratorium maupun para peneliti senior _____ mampu menjelaskan perbedaan kalorimetri yang tak terduga tersebut.',
    },
  ],
  'mock-diagnostic-exam-2': [
    {
      en: 'Diagnostic Passage: The transition from foraging hunter-gatherer bands to settled Neolithic agrarian villages in the Fertile Crescent.',
      id: 'Bacaan Diagnostik: Transisi dari kelompok pemburu-peramu yang berpindah-pindah ke desa agraris Neolitikum yang menetap di Hilal Subur.',
    },
    {
      en: 'Inference Item: It can be inferred that wild einkorn wheat underwent selective genetic phenotypic modifications due to harvesting practices.',
      id: 'Soal Inferensi: Dapat disimpulkan bahwa gandum einkorn liar mengalami modifikasi fenotipik genetik selektif akibat praktik panen manusia.',
    },
    {
      en: 'Listening Diagnostic: Professor discusses the economic repercussions of the Silk Road maritime routes versus overland caravan trails.',
      id: 'Diagnostik Listening: Profesor membahas dampak ekonomi jalur sutra maritim dibandingkan jalur karavan darat.',
    },
    {
      en: 'Synthesis Item: Compare how the maritime shipping revolution lowered bulk transport tariffs compared to overland transport.',
      id: 'Soal Sintesis: Bandingkan bagaimana revolusi pelayaran maritim menurunkan biaya transportasi barang dalam jumlah besar dibandingkan jalur darat.',
    },
  ],
};

// ──────────────────────────────────────────────────────────
// Step-by-Step TOEFL Roadmap Content (600+ Target)
// ──────────────────────────────────────────────────────────
export interface RoadmapStepContent {
  weekRange: string;
  title: BilingualContent;
  description: BilingualContent;
  goals: BilingualContent[];
  strategies: BilingualContent[];
}

export const TOEFL_ROADMAP_STEPS: RoadmapStepContent[] = [
  {
    weekRange: 'Week 1-2',
    title: {
      en: 'Foundation: Grammar Basics & Vocabulary Building',
      id: 'Fondasi: Dasar Grammar & Membangun Kosakata',
    },
    description: {
      en: 'Master the core sentence structure, basic tenses (Simple Present, Simple Past, Future), and start building academic vocabulary.',
      id: 'Kuasai struktur kalimat inti, tense dasar (Simple Present, Simple Past, Future), dan mulai membangun kosakata akademik.',
    },
    goals: [
      { en: 'Identify subjects, verbs, and objects in complex sentences', id: 'Identifikasi subjek, kata kerja, dan objek dalam kalimat kompleks' },
      { en: 'Master subject-verb agreement rules', id: 'Kuasai aturan kesesuaian subjek-kata kerja' },
      { en: 'Learn 50 essential AWL (Academic Word List) words', id: 'Pelajari 50 kata penting dari AWL (Academic Word List)' },
      { en: 'Complete Simple Present and Simple Past lessons with 80%+ mastery', id: 'Selesaikan pelajaran Simple Present dan Simple Past dengan penguasaan 80%+' },
    ],
    strategies: [
      { en: 'Study grammar rules in the morning when focus is sharpest', id: 'Pelajari aturan grammar di pagi hari ketika fokus paling tajam' },
      { en: 'Use flashcards for vocabulary — review 10 words daily', id: 'Gunakan flashcard untuk kosakata — review 10 kata setiap hari' },
      { en: 'Practice with mini tests after every lesson', id: 'Berlatih dengan mini tes setelah setiap pelajaran' },
    ],
  },
  {
    weekRange: 'Week 3-4',
    title: {
      en: 'Intermediate Grammar: Perfect Tenses & Passive Voice',
      id: 'Grammar Menengah: Tense Perfect & Kalimat Pasif',
    },
    description: {
      en: 'Expand into Present Perfect, Past Perfect, passive constructions, and relative clauses. These are the most heavily tested grammar areas.',
      id: 'Perluas ke Present Perfect, Past Perfect, konstruksi pasif, dan klausa relatif. Ini adalah area grammar yang paling sering diuji.',
    },
    goals: [
      { en: 'Master Present Perfect vs. Simple Past distinction', id: 'Kuasai perbedaan antara Present Perfect dan Simple Past' },
      { en: 'Construct and identify passive voice in all tenses', id: 'Bentuk dan identifikasi kalimat pasif di semua tense' },
      { en: 'Use relative pronouns (who, which, that, whose, where, when) correctly', id: 'Gunakan kata ganti relatif (who, which, that, whose, where, when) dengan benar' },
      { en: 'Learn 100+ AWL words total', id: 'Pelajari total 100+ kata AWL' },
    ],
    strategies: [
      { en: 'Compare similar sentences: "He went" vs. "He has gone" — understand why one is correct', id: 'Bandingkan kalimat serupa: "He went" vs. "He has gone" — pahami mengapa salah satu benar' },
      { en: 'Read scientific abstracts and highlight all passive constructions', id: 'Baca abstrak ilmiah dan sorot semua konstruksi pasif' },
      { en: 'Review and resolve all mistakes in your notebook', id: 'Review dan selesaikan semua kesalahan di buku catatan' },
    ],
  },
  {
    weekRange: 'Week 5-6',
    title: {
      en: 'Advanced Grammar: Conditionals, Gerunds & Infinitives',
      id: 'Grammar Lanjutan: Kalimat Kondisional, Gerund & Infinitive',
    },
    description: {
      en: 'Master conditional sentences, gerund vs. infinitive usage, parallel structure, and inversion patterns.',
      id: 'Kuasai kalimat kondisional, penggunaan gerund vs. infinitive, struktur paralel, dan pola inversi.',
    },
    goals: [
      { en: 'Identify and use all 4 conditional types correctly', id: 'Identifikasi dan gunakan keempat tipe kalimat kondisional dengan benar' },
      { en: 'Know which verbs take gerund, infinitive, or both', id: 'Ketahui kata kerja mana yang menggunakan gerund, infinitive, atau keduanya' },
      { en: 'Apply parallel structure in lists and comparisons', id: 'Terapkan struktur paralel dalam daftar dan perbandingan' },
      { en: 'Achieve 70%+ average mastery across all grammar topics', id: 'Capai penguasaan rata-rata 70%+ di semua topik grammar' },
    ],
    strategies: [
      { en: 'Create a personal error log — categorize mistakes by type', id: 'Buat catatan kesalahan pribadi — kategorikan kesalahan berdasarkan tipe' },
      { en: 'Practice transformation exercises: change active to passive, past to perfect', id: 'Latih soal transformasi: ubah aktif ke pasif, past ke perfect' },
      { en: 'Take timed practice tests (30 seconds per Structure question)', id: 'Ambil tes latihan berwaktu (30 detik per pertanyaan Structure)' },
    ],
  },
  {
    weekRange: 'Week 7-8',
    title: {
      en: 'Reading Skills: Comprehension & Speed',
      id: 'Keterampilan Membaca: Pemahaman & Kecepatan',
    },
    description: {
      en: 'Apply grammar knowledge to reading passages. Build speed, accuracy, and learn question-type strategies.',
      id: 'Terapkan pengetahuan grammar pada bacaan. Bangun kecepatan, akurasi, dan pelajari strategi berdasarkan tipe pertanyaan.',
    },
    goals: [
      { en: 'Read 700-word academic passages in under 10 minutes', id: 'Baca bacaan akademik 700 kata dalam waktu kurang dari 10 menit' },
      { en: 'Master all TOEFL reading question types', id: 'Kuasai semua tipe pertanyaan Reading TOEFL' },
      { en: 'Build vocabulary to 200+ AWL words', id: 'Bangun kosakata hingga 200+ kata AWL' },
      { en: 'Score 70%+ on practice reading sections', id: 'Raih skor 70%+ pada bagian Reading latihan' },
    ],
    strategies: [
      { en: 'Read the first and last sentence of each paragraph for main ideas', id: 'Baca kalimat pertama dan terakhir setiap paragraf untuk ide utama' },
      { en: 'For inference questions, eliminate answers that are too extreme', id: 'Untuk pertanyaan inferensi, eliminasi jawaban yang terlalu ekstrem' },
      { en: 'Underline key transition words: however, therefore, consequently, moreover', id: 'Garis bawahi kata transisi kunci: however, therefore, consequently, moreover' },
    ],
  },
  {
    weekRange: 'Week 9-10',
    title: {
      en: 'Listening Skills: Note-Taking & Comprehension',
      id: 'Keterampilan Mendengarkan: Pencatatan & Pemahaman',
    },
    description: {
      en: 'Develop active listening strategies for lectures and conversations. Practice note-taking with abbreviated symbols.',
      id: 'Kembangkan strategi mendengarkan aktif untuk perkuliahan dan percakapan. Latih pencatatan dengan simbol singkatan.',
    },
    goals: [
      { en: 'Understand main ideas and supporting details in 5-minute lectures', id: 'Pahami ide utama dan detail pendukung dalam perkuliahan 5 menit' },
      { en: 'Identify speaker attitude and purpose', id: 'Identifikasi sikap dan tujuan pembicara' },
      { en: 'Master campus vocabulary and academic discussion phrases', id: 'Kuasai kosakata kampus dan frasa diskusi akademik' },
    ],
    strategies: [
      { en: 'Listen to English podcasts on science/history for 30 minutes daily', id: 'Dengarkan podcast bahasa Inggris tentang sains/sejarah selama 30 menit setiap hari' },
      { en: 'Practice dictation: listen and write what you hear word-for-word', id: 'Latih dikte: dengarkan dan tulis apa yang kamu dengar kata per kata' },
      { en: 'Use symbols in notes: → (leads to), ∵ (because), ∴ (therefore), ≠ (not equal)', id: 'Gunakan simbol dalam catatan: → (mengarah ke), ∵ (karena), ∴ (oleh karena itu), ≠ (tidak sama)' },
    ],
  },
  {
    weekRange: 'Week 11-12',
    title: {
      en: 'Full-Length Practice & Score Optimization',
      id: 'Latihan Penuh & Optimasi Skor',
    },
    description: {
      en: 'Take complete TOEFL practice tests under timed conditions. Analyze weak areas and focus remediation.',
      id: 'Ambil tes latihan TOEFL lengkap dalam kondisi terhitung waktu. Analisis area lemah dan fokus perbaikan.',
    },
    goals: [
      { en: 'Complete 3+ full-length practice tests', id: 'Selesaikan 3+ tes latihan penuh' },
      { en: 'Achieve consistent 600+ scores on practice tests', id: 'Capai skor konsisten 600+ pada tes latihan' },
      { en: 'Resolve all remaining items in Mistakes Notebook', id: 'Selesaikan semua item tersisa di Buku Catatan Kesalahan' },
      { en: 'Target 80%+ mastery on all grammar lessons', id: 'Target penguasaan 80%+ pada semua pelajaran grammar' },
    ],
    strategies: [
      { en: 'Simulate test day: no breaks, strict timing, quiet environment', id: 'Simulasikan hari tes: tanpa istirahat, waktu ketat, lingkungan tenang' },
      { en: 'Review every incorrect answer — understand the "why" behind each error', id: 'Review setiap jawaban salah — pahami "mengapa" di balik setiap kesalahan' },
      { en: 'Focus remaining study time on your weakest 2-3 grammar topics', id: 'Fokuskan sisa waktu belajar pada 2-3 topik grammar terlemahmu' },
    ],
  },
];

// ──────────────────────────────────────────────────────────
// Translation Pairs for Key UI Text
// ──────────────────────────────────────────────────────────
export const UI_TRANSLATIONS: Record<string, string> = {
  // Dashboard
  'Target Score: 600+. High-yield grammar accuracy directly correlates with TOEFL Reading & Structure speed.':
    'Target Skor: 600+. Akurasi grammar tinggi berkorelasi langsung dengan kecepatan Reading & Structure TOEFL.',
  'TOEFL grammar items test high-yield rules. Achieving 80%+ mastery unlocks reading synthesis speed.':
    'Item grammar TOEFL menguji aturan berfrekuensi tinggi. Mencapai penguasaan 80%+ membuka kecepatan sintesis reading.',
  'Consistency is the key to 600+':
    'Konsistensi adalah kunci mencapai 600+',
  'High-frequency terms: phenomenon, comprise, derive, hypothesis.':
    'Istilah frekuensi tinggi: phenomenon (fenomena), comprise (terdiri dari), derive (berasal), hypothesis (hipotesis).',
  'Questions answered incorrectly are retained until you review and successfully resolve them.':
    'Pertanyaan yang dijawab salah akan disimpan sampai kamu mereview dan menyelesaikannya dengan sukses.',
  'All current lessons mastered!':
    'Semua pelajaran saat ini sudah dikuasai!',
  'No recent activity recorded yet. Start a lesson to begin your streak!':
    'Belum ada aktivitas terbaru yang tercatat. Mulai pelajaran untuk memulai streak-mu!',

  // Grammar page
  'Master essential high-frequency syntactic patterns tested in academic passages. Complete lessons, review rules and formulas, and validate retention with 5-question mini tests.':
    'Kuasai pola sintaksis frekuensi tinggi yang diuji dalam bacaan akademik. Selesaikan pelajaran, review aturan dan rumus, dan validasi retensi dengan mini tes 5 pertanyaan.',

  // Lesson page
  'Watch for subject-verb inversion, intervening prepositional phrases, and tense consistency with temporal adverbs.':
    'Perhatikan inversi subjek-kata kerja, frasa preposisi penyela, dan konsistensi tense dengan kata keterangan waktu.',
  'Immediate explanations, mistake tracking, and dynamic mastery recalculation.':
    'Penjelasan langsung, pelacakan kesalahan, dan perhitungan ulang penguasaan secara dinamis.',

  // Roadmap
  'A research-backed curriculum structured to advance your English proficiency systematically from core grammatical mechanics to full-length test simulations.':
    'Kurikulum berbasis riset yang terstruktur untuk memajukan kemampuan bahasa Inggris-mu secara sistematis dari mekanika gramatikal inti hingga simulasi tes penuh.',

  // Mistakes page
  'Items you answered incorrectly are automatically saved here. Re-attempt them or review the grammatical logic to solidify mastery and resolve them permanently.':
    'Item yang kamu jawab salah secara otomatis disimpan di sini. Coba ulang atau review logika gramatikal untuk memperkuat penguasaan dan selesaikan secara permanen.',

  // Landing
  'Master high-yield English grammar, retain academic vocabulary, resolve mistaken patterns systematically, and track real-time progress stored in PostgreSQL.':
    'Kuasai grammar bahasa Inggris berfrekuensi tinggi, pertahankan kosakata akademik, selesaikan pola kesalahan secara sistematis, dan lacak progres real-time yang disimpan di PostgreSQL.',
  'Formulas, grammatical breakdown, and authentic academic TOEFL excerpts for all core syntactic patterns.':
    'Rumus, uraian gramatikal, dan kutipan akademik TOEFL asli untuk semua pola sintaksis inti.',
  'Instant feedback, atomic attempt logging, and PostgreSQL mastery updates with configurable status thresholds.':
    'Feedback instan, pencatatan percobaan atomik, dan pembaruan penguasaan PostgreSQL dengan ambang batas status yang dapat dikonfigurasi.',
  'Dedicated error log where unresolved mistakes are highlighted, reviewed, and retried until fully mastered.':
    'Catatan kesalahan khusus di mana kesalahan yang belum terselesaikan disorot, ditinjau, dan dicoba ulang sampai sepenuhnya dikuasai.',
};
