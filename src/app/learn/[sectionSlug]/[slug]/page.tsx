import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getLessonBySlug } from '@/lib/services/grammar.service';
import { AppShell } from '@/components/layout/AppShell';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { TranslatableText } from '@/components/ui/TranslatableText';
import { GRAMMAR_DETAILS, LESSON_EXAMPLES, TOEFL_TIPS } from '@/lib/data/toefl-content';
import {
  MdArrowBack,
  MdFunctions,
  MdMenuBook,
  MdCheckCircle,
  MdPlayArrow,
  MdFormatQuote,
  MdLightbulb,
  MdTipsAndUpdates,
  MdWarningAmber,
  MdAutoAwesome,
} from 'react-icons/md';

export const revalidate = 0;

interface UniversalLessonPageProps {
  params: Promise<{ sectionSlug: string; slug: string }>;
}

export default async function UniversalLessonPage({ params }: UniversalLessonPageProps) {
  const { sectionSlug, slug } = await params;
  const lesson = await getLessonBySlug(slug);

  if (!lesson) {
    notFound();
  }

  // Get enriched content for this lesson
  const grammarDetail = GRAMMAR_DETAILS[slug];
  const bilingualExamples = LESSON_EXAMPLES[slug] || [];
  const relevantTips = TOEFL_TIPS.filter(
    (t) => t.category === sectionSlug || t.category === 'grammar' || t.category === 'general'
  ).slice(0, 3);

  return (
    <AppShell title={lesson.title}>
      <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between gap-2">
          <Link
            href={`/learn/${sectionSlug}`}
            className="inline-flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs font-bold text-slate-500 hover:text-indigo-600 transition-colors"
          >
            <MdArrowBack className="text-sm sm:text-base" />
            <span className="hidden sm:inline">Back to {lesson.sectionName} Syllabus</span>
            <span className="sm:hidden">Back</span>
          </Link>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="text-[10px] sm:text-xs text-slate-400 font-semibold">{lesson.level}</span>
            <StatusBadge status={lesson.status} />
          </div>
        </div>

        {/* Hero Banner */}
        <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-r from-indigo-800 via-indigo-700 to-indigo-900 p-4 sm:p-6 lg:p-8 text-white shadow-xl shadow-indigo-900/10">
          <div className="flex flex-col gap-3 sm:gap-4">
            <div>
              <div className="flex items-center gap-2 text-indigo-300 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-1 flex-wrap">
                <span>{lesson.sectionName}</span>
                <span>•</span>
                <span>{lesson.topicName}</span>
              </div>
              {grammarDetail ? (
                <TranslatableText
                  en={grammarDetail.title.en}
                  id={grammarDetail.title.id}
                  className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight"
                  translationClassName="text-indigo-200/90 text-sm sm:text-base font-normal"
                />
              ) : (
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight">
                  {lesson.title}
                </h1>
              )}
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/10 self-start">
              <div className="text-[9px] sm:text-[11px] font-bold uppercase tracking-wider text-indigo-200">
                Your Mastery
              </div>
              <div className="text-xl sm:text-2xl font-extrabold text-white mt-0.5 sm:mt-1">
                {lesson.mastery}%
              </div>
              <ProgressBar
                percentage={lesson.mastery}
                heightClass="h-1.5"
                className="mt-1.5 sm:mt-2 min-w-[120px] sm:min-w-[160px]"
              />
            </div>
          </div>
        </div>

        {/* Formula / Strategy Card */}
        {lesson.formula && (
          <div className="rounded-xl sm:rounded-2xl border-2 border-indigo-200 bg-indigo-50/70 p-4 sm:p-5 lg:p-6 shadow-sm">
            <div className="flex items-center gap-2 text-indigo-800 font-extrabold text-[10px] sm:text-xs uppercase tracking-wider mb-2">
              <MdFunctions className="text-base sm:text-lg flex-shrink-0" />
              <span>Core Formula & Strategy</span>
            </div>
            <div className="rounded-lg sm:rounded-xl bg-white p-3 sm:p-4 font-mono text-xs sm:text-sm lg:text-base font-bold text-indigo-900 border border-indigo-100 shadow-inner break-all">
              {lesson.formula}
            </div>
          </div>
        )}

        {/* Detailed Explanation with Translation */}
        <div className="rounded-xl sm:rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 lg:p-8 shadow-sm space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2 text-slate-800 font-bold text-sm sm:text-base lg:text-lg">
            <MdMenuBook className="text-indigo-600 text-lg sm:text-xl flex-shrink-0" />
            <span>Academic Rule & Strategic Insights</span>
          </div>

          {grammarDetail ? (
            <TranslatableText
              en={grammarDetail.description.en}
              id={grammarDetail.description.id}
              className="text-xs sm:text-sm lg:text-base text-slate-700 leading-relaxed"
            />
          ) : (
            <p className="text-xs sm:text-sm lg:text-base text-slate-700 leading-relaxed">
              {lesson.explanation.split('### Examples')[0].trim()}
            </p>
          )}

          {/* Key Signals */}
          {grammarDetail && grammarDetail.keySignals.length > 0 && (
            <div className="rounded-lg sm:rounded-xl bg-indigo-50/80 border border-indigo-100 p-3 sm:p-4">
              <div className="text-[10px] sm:text-xs font-bold text-indigo-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <MdAutoAwesome className="text-sm" />
                <span>Key Signals & Diagnostic Indicators</span>
              </div>
              <div className="space-y-1.5">
                {grammarDetail.keySignals.map((signal, i) => (
                  <TranslatableText
                    key={i}
                    en={`• ${signal.en}`}
                    id={signal.id}
                    className="text-[11px] sm:text-xs text-slate-700"
                  />
                ))}
              </div>
            </div>
          )}

          {/* TOEFL Tip */}
          {grammarDetail && (
            <div className="rounded-lg sm:rounded-xl bg-slate-50 border border-slate-100 p-3 sm:p-4 flex items-start gap-2 sm:gap-3">
              <MdLightbulb className="text-amber-500 text-lg sm:text-xl flex-shrink-0 mt-0.5" />
              <TranslatableText
                en={`TOEFL Trick: ${grammarDetail.toeflTrick.en}`}
                id={grammarDetail.toeflTrick.id}
                className="text-[11px] sm:text-xs text-slate-600 leading-relaxed"
              />
            </div>
          )}
        </div>

        {/* Common Mistakes Section */}
        {grammarDetail && grammarDetail.commonMistakes.length > 0 && (
          <div className="rounded-xl sm:rounded-2xl border border-amber-200 bg-amber-50/50 p-4 sm:p-6 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-amber-800 font-bold text-sm sm:text-base">
              <MdWarningAmber className="text-lg sm:text-xl flex-shrink-0" />
              <span>Common Traps to Avoid</span>
            </div>
            <div className="space-y-2">
              {grammarDetail.commonMistakes.map((mistake, i) => (
                <div key={i} className="flex items-start gap-2 sm:gap-3 rounded-lg bg-white p-2.5 sm:p-3 border border-amber-100">
                  <span className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-amber-100 text-amber-700 text-[10px] sm:text-xs font-bold flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <TranslatableText
                    en={mistake.en}
                    id={mistake.id}
                    className="text-[11px] sm:text-xs text-slate-700 leading-relaxed"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Examples Section with Indonesian Translations */}
        {bilingualExamples.length > 0 && (
          <div className="rounded-xl sm:rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 lg:p-8 shadow-sm space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2 text-slate-800 font-bold text-sm sm:text-base lg:text-lg">
              <MdFormatQuote className="text-indigo-600 text-xl sm:text-2xl flex-shrink-0" />
              <span>Authentic TOEFL Excerpts with Translation</span>
            </div>

            <div className="space-y-3">
              {bilingualExamples.map((ex, i) => (
                <div
                  key={i}
                  className="rounded-lg sm:rounded-xl border border-slate-100 bg-slate-50/50 p-3 sm:p-4 hover:border-indigo-100 hover:bg-indigo-50/20 transition-colors"
                >
                  <div className="flex items-start gap-2 sm:gap-3">
                    <span className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-md bg-indigo-100 text-indigo-700 text-[10px] sm:text-xs font-bold flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <div className="flex-1 space-y-1 sm:space-y-1.5 min-w-0">
                      <TranslatableText
                        en={ex.en}
                        id={ex.id}
                        className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed"
                        translationClassName="text-slate-500 font-normal italic"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section Pro Tips */}
        {relevantTips.length > 0 && (
          <div className="rounded-xl sm:rounded-2xl border border-emerald-200 bg-emerald-50/40 p-4 sm:p-6 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm sm:text-base">
              <MdTipsAndUpdates className="text-emerald-600 text-lg sm:text-xl flex-shrink-0" />
              <span>Expert Tips for Section Mastery</span>
            </div>
            <div className="space-y-2">
              {relevantTips.map((tip, i) => (
                <div key={i} className="flex items-start gap-2 rounded-lg bg-white p-2.5 sm:p-3 border border-emerald-100">
                  <MdCheckCircle className="text-emerald-500 text-xs sm:text-sm flex-shrink-0 mt-0.5" />
                  <TranslatableText
                    en={tip.en}
                    id={tip.id}
                    className="text-[11px] sm:text-xs text-slate-700 leading-relaxed"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Start Mini Test CTA */}
        <div className="rounded-xl sm:rounded-2xl border border-indigo-200 bg-gradient-to-r from-indigo-50 via-white to-indigo-50 p-4 sm:p-6 lg:p-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 shadow-sm">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              Ready to validate your knowledge?
            </h3>
            <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 sm:mt-1">
              5 authentic TOEFL questions with instant scoring, answer explanations, and mistake tracking.
            </p>
          </div>

          <Link
            href={`/learn/${sectionSlug}/${lesson.slug}/test`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 sm:px-8 py-3 sm:py-3.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-indigo-600/20 hover:bg-indigo-700 transition-colors flex-shrink-0"
          >
            <MdPlayArrow className="text-base sm:text-lg" />
            <span>Start 5-Question Test</span>
          </Link>
        </div>
      </div>
    </AppShell>
  );
}
