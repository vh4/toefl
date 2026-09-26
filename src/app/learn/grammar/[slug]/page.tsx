import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getLessonBySlug } from '@/lib/services/grammar.service';
import { AppShell } from '@/components/layout/AppShell';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { ProgressBar } from '@/components/ui/ProgressBar';
import {
  MdArrowBack,
  MdFunctions,
  MdMenuBook,
  MdCheckCircle,
  MdPlayArrow,
  MdFormatQuote,
  MdLightbulb,
} from 'react-icons/md';

export const revalidate = 0;

interface LessonPageProps {
  params: Promise<{ slug: string }>;
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { slug } = await params;
  const lesson = await getLessonBySlug(slug);

  if (!lesson) {
    notFound();
  }

  // Parse explanation and examples cleanly
  const explanationParts = lesson.explanation.split('### Examples');
  const mainExplanation = explanationParts[0].trim();
  const examplesRaw = explanationParts[1] ? explanationParts[1].trim() : '';
  const examplesList = examplesRaw
    ? examplesRaw
        .split('\n')
        .map((line) => line.replace(/^\d+\.\s*/, '').trim())
        .filter(Boolean)
    : [];

  return (
    <AppShell title={lesson.title}>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between">
          <Link
            href="/learn/grammar"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-indigo-600 transition-colors"
          >
            <MdArrowBack className="text-base" />
            <span>Back to Grammar Syllabus</span>
          </Link>

          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400 font-semibold">{lesson.level}</span>
            <StatusBadge status={lesson.status} />
          </div>
        </div>

        {/* Hero Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-indigo-800 via-indigo-700 to-indigo-900 p-6 sm:p-8 text-white shadow-xl shadow-indigo-900/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-1">
                <span>{lesson.sectionName}</span>
                <span>•</span>
                <span>{lesson.topicName}</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                {lesson.title}
              </h1>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-4 border border-white/10 sm:min-w-[180px]">
              <div className="text-[11px] font-bold uppercase tracking-wider text-indigo-200">
                Your Mastery
              </div>
              <div className="text-2xl font-extrabold text-white mt-1">
                {lesson.mastery}%
              </div>
              <ProgressBar
                percentage={lesson.mastery}
                heightClass="h-1.5"
                className="mt-2"
              />
            </div>
          </div>
        </div>

        {/* Formula Card */}
        {lesson.formula && (
          <div className="rounded-2xl border-2 border-indigo-200 bg-indigo-50/70 p-5 sm:p-6 shadow-sm">
            <div className="flex items-center gap-2 text-indigo-800 font-extrabold text-xs uppercase tracking-wider mb-2">
              <MdFunctions className="text-lg" />
              <span>Grammar Formula & Structure</span>
            </div>
            <div className="rounded-xl bg-white p-4 font-mono text-sm sm:text-base font-bold text-indigo-900 border border-indigo-100 shadow-inner">
              {lesson.formula}
            </div>
          </div>
        )}

        {/* Explanation Section */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-slate-800 font-bold text-base sm:text-lg">
            <MdMenuBook className="text-indigo-600 text-xl" />
            <span>Academic Rule & Usage</span>
          </div>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            {mainExplanation}
          </p>

          <div className="rounded-xl bg-slate-50 border border-slate-100 p-4 flex items-start gap-3 mt-4">
            <MdLightbulb className="text-amber-500 text-xl flex-shrink-0 mt-0.5" />
            <p className="text-xs text-slate-600 leading-relaxed">
              <strong className="text-slate-800 font-semibold">TOEFL Tip:</strong> Watch for subject-verb inversion, intervening prepositional phrases, and tense consistency with temporal adverbs.
            </p>
          </div>
        </div>

        {/* Examples Section */}
        {examplesList.length > 0 && (
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-slate-800 font-bold text-base sm:text-lg">
              <MdFormatQuote className="text-indigo-600 text-2xl" />
              <span>Authentic TOEFL Passages & Examples</span>
            </div>

            <div className="space-y-3">
              {examplesList.map((example, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-xl bg-slate-50/80 p-4 border border-slate-200/80 hover:border-indigo-200 transition-colors"
                >
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold flex-shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <p className="text-sm sm:text-base font-medium text-slate-800 leading-relaxed italic">
                    &ldquo;{example}&rdquo;
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Mini Test Action Card */}
        <div className="rounded-2xl border border-indigo-200 bg-gradient-to-r from-indigo-50 to-white p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md shadow-indigo-100">
          <div>
            <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm mb-1">
              <MdCheckCircle className="text-lg" />
              <span>Verify Retention: 5 TOEFL-Style Questions</span>
            </div>
            <p className="text-xs text-slate-600">
              Immediate explanations, mistake tracking, and dynamic mastery recalculation.
            </p>
          </div>

          <Link
            href={`/learn/grammar/${lesson.slug}/test`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-bold text-white shadow-md shadow-indigo-600/20 hover:bg-indigo-700 transition-all hover:scale-[1.02]"
          >
            <span>Start Mini Test</span>
            <MdPlayArrow className="text-xl" />
          </Link>
        </div>
      </div>
    </AppShell>
  );
}
