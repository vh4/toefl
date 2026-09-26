import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getSectionDetails } from '@/lib/services/grammar.service';
import { AppShell } from '@/components/layout/AppShell';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { TranslatableText } from '@/components/ui/TranslatableText';
import {
  MdMenuBook,
  MdArrowForward,
  MdQuiz,
  MdWarningAmber,
  MdLayers,
  MdArrowBack,
} from 'react-icons/md';

export const revalidate = 0;

interface SectionPageProps {
  params: Promise<{ sectionSlug: string }>;
}

export default async function SectionPage({ params }: SectionPageProps) {
  const { sectionSlug } = await params;
  const section = await getSectionDetails(sectionSlug);

  if (!section) {
    notFound();
  }

  const lessons = section.lessons;
  const totalLessons = lessons.length;
  const masteredCount = lessons.filter((l) => l.mastery >= 80).length;
  const overallAvg =
    totalLessons > 0
      ? Math.round(lessons.reduce((acc, curr) => acc + curr.mastery, 0) / totalLessons)
      : 0;

  return (
    <AppShell title={`${section.name} Syllabus`}>
      <div className="max-w-5xl mx-auto space-y-4 sm:space-y-6">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between gap-2">
          <Link
            href="/roadmap"
            className="inline-flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs font-bold text-slate-500 hover:text-indigo-600 transition-colors"
          >
            <MdArrowBack className="text-sm sm:text-base" />
            <span>Back to Roadmap</span>
          </Link>
          <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">
            Section {section.order}
          </span>
        </div>

        {/* Header Hero */}
        <div className="flex flex-col gap-4 sm:gap-6 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-indigo-900 via-indigo-800 to-slate-900 p-4 sm:p-6 lg:p-8 text-white shadow-xl shadow-indigo-950/20">
          <div>
            <div className="flex items-center gap-2 mb-1.5 sm:mb-2 text-indigo-300 text-[10px] sm:text-xs font-bold uppercase tracking-wider">
              <MdMenuBook className="text-sm sm:text-base flex-shrink-0" />
              <span>Section {section.order}: {section.name}</span>
            </div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight">
              TOEFL {section.name} Mastery
            </h1>
            {section.description && (
              <TranslatableText
                en={section.description}
                id={
                  section.slug === 'vocabulary'
                    ? 'Academic Word List (AWL), awalan, akhiran, dan konotasi kontekstual untuk mencapai skor 600+.'
                    : section.slug === 'grammar'
                    ? 'Kuasai pola sintaksis frekuensi tinggi yang diuji dalam bacaan akademik dengan mini tes 5 soal.'
                    : section.slug === 'reading'
                    ? 'Gagasan utama, inferensi, fakta negatif, kosakata kontekstual, dan penyisipan kalimat.'
                    : section.slug === 'listening'
                    ? 'Perkuliahan, percakapan kampus, pemahaman pragmatik, dan sintesis informasi audio.'
                    : section.slug === 'speaking'
                    ? 'Tugas opini independen dan template respon akademik terpadu.'
                    : section.slug === 'writing'
                    ? 'Sintesis perkuliahan-bacaan terpadu dan penulisan diskusi akademik.'
                    : section.slug === 'toefl-practice'
                    ? 'Latihan bagian berwaktu dengan simulasi kondisi ujian nyata.'
                    : section.slug === 'mock-toefl'
                    ? 'Ujian diagnostik penuh dengan prediksi skor skala 0-120 resmi.'
                    : 'Fondasi tata bahasa inti, dinamika kalimat, dan frasa akademik.'
                }
                className="mt-1.5 sm:mt-2 text-[11px] sm:text-sm text-indigo-100 max-w-xl leading-relaxed"
                translationClassName="text-indigo-200/80"
              />
            )}
          </div>

          {/* Quick Stats Widget */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            <div className="rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur p-3 sm:p-4 border border-white/10">
              <div className="text-[9px] sm:text-[11px] font-bold uppercase tracking-wider text-indigo-200">
                Mastered
              </div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white mt-0.5 sm:mt-1">
                {masteredCount} / {totalLessons}
              </div>
              <div className="text-[9px] sm:text-[11px] text-emerald-400 font-semibold mt-0.5">
                {totalLessons > 0 ? Math.round((masteredCount / totalLessons) * 100) : 0}% Complete
              </div>
            </div>

            <div className="rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur p-3 sm:p-4 border border-white/10">
              <div className="text-[9px] sm:text-[11px] font-bold uppercase tracking-wider text-indigo-200">
                Avg Mastery
              </div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white mt-0.5 sm:mt-1">
                {overallAvg}%
              </div>
              <div className="text-[9px] sm:text-[11px] text-indigo-300 font-semibold mt-0.5">
                Scale: 0-100
              </div>
            </div>
          </div>
        </div>

        {/* Lessons List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {lessons.map((lesson) => {
            const isMastered = lesson.mastery >= 80;

            return (
              <div
                key={lesson.id}
                className="flex flex-col justify-between rounded-xl sm:rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm hover:shadow-md transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between gap-1.5 sm:gap-2 mb-1.5 sm:mb-2 flex-wrap">
                    <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                      <span className="flex items-center gap-1 text-[9px] sm:text-[11px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-1.5 sm:px-2 py-0.5 rounded-md whitespace-nowrap">
                        <MdLayers className="text-[10px] sm:text-xs" />
                        <span>{lesson.level}</span>
                      </span>
                      {lesson.unresolvedMistakesCount > 0 && (
                        <span className="flex items-center gap-1 text-[9px] sm:text-[11px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-1.5 sm:px-2 py-0.5 rounded-full whitespace-nowrap">
                          <MdWarningAmber className="text-[10px] sm:text-xs" />
                          <span>{lesson.unresolvedMistakesCount}</span>
                        </span>
                      )}
                    </div>
                    <StatusBadge status={lesson.status} />
                  </div>

                  <h2 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-2">
                    {lesson.title}
                  </h2>

                  <div className="mt-3 sm:mt-4 mb-3 sm:mb-4">
                    <ProgressBar
                      percentage={lesson.mastery}
                      showLabel
                      heightClass="h-2"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-2.5 sm:pt-3 border-t border-slate-100">
                  <Link
                    href={`/learn/${sectionSlug}/${lesson.slug}`}
                    className="flex-1 inline-flex items-center justify-center gap-1 sm:gap-1.5 rounded-lg sm:rounded-xl border border-slate-200 bg-slate-50 px-2 sm:px-3 py-2 text-[10px] sm:text-xs font-bold text-slate-700 hover:bg-slate-100 transition-colors"
                  >
                    <MdMenuBook className="text-sm sm:text-base text-slate-500" />
                    <span>Study</span>
                  </Link>

                  <Link
                    href={`/learn/${sectionSlug}/${lesson.slug}/test`}
                    className={`inline-flex items-center justify-center gap-1 sm:gap-1.5 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 text-[10px] sm:text-xs font-bold text-white shadow-sm transition-colors whitespace-nowrap ${
                      isMastered
                        ? 'bg-emerald-600 hover:bg-emerald-700'
                        : 'bg-indigo-600 hover:bg-indigo-700'
                    }`}
                  >
                    <MdQuiz className="text-sm sm:text-base" />
                    <span>Test</span>
                    <MdArrowForward className="text-xs sm:text-sm" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AppShell>
  );
}
