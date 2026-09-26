import React from 'react';
import Link from 'next/link';
import { getGrammarLessons } from '@/lib/services/grammar.service';
import { AppShell } from '@/components/layout/AppShell';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { ProgressBar } from '@/components/ui/ProgressBar';
import {
  MdMenuBook,
  MdArrowForward,
  MdQuiz,
  MdWarningAmber,
  MdLayers,
} from 'react-icons/md';

export const revalidate = 0;

export default async function GrammarPage() {
  const lessons = await getGrammarLessons();

  const totalLessons = lessons.length;
  const masteredCount = lessons.filter((l) => l.mastery >= 80).length;
  const overallAvg =
    totalLessons > 0
      ? Math.round(lessons.reduce((acc, curr) => acc + curr.mastery, 0) / totalLessons)
      : 0;

  return (
    <AppShell title="Grammar Syllabus">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Header Hero */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 rounded-3xl bg-gradient-to-br from-indigo-900 via-indigo-800 to-slate-900 p-6 sm:p-8 text-white shadow-xl shadow-indigo-950/20">
          <div>
            <div className="flex items-center gap-2 mb-2 text-indigo-300 text-xs font-bold uppercase tracking-wider">
              <MdMenuBook className="text-base" />
              <span>Section 3: Structure & Written Expression</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              TOEFL Grammar Mastery
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-indigo-100 max-w-xl leading-relaxed">
              Master essential high-frequency syntactic patterns tested in academic passages. Complete lessons, review rules and formulas, and validate retention with 5-question mini tests.
            </p>
          </div>

          {/* Quick Stats Widget */}
          <div className="grid grid-cols-2 gap-3 min-w-[240px]">
            <div className="rounded-2xl bg-white/10 backdrop-blur p-4 border border-white/10">
              <div className="text-[11px] font-bold uppercase tracking-wider text-indigo-200">
                Mastered
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                {masteredCount} / {totalLessons}
              </div>
              <div className="text-[11px] text-emerald-400 font-semibold mt-0.5">
                {Math.round((masteredCount / totalLessons) * 100)}% Complete
              </div>
            </div>

            <div className="rounded-2xl bg-white/10 backdrop-blur p-4 border border-white/10">
              <div className="text-[11px] font-bold uppercase tracking-wider text-indigo-200">
                Avg Mastery
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                {overallAvg}%
              </div>
              <div className="text-[11px] text-indigo-300 font-semibold mt-0.5">
                Scale: 0-100
              </div>
            </div>
          </div>
        </div>

        {/* Lessons List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {lessons.map((lesson) => {
            const isMastered = lesson.mastery >= 80;

            return (
              <div
                key={lesson.id}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md">
                        <MdLayers className="text-xs" />
                        <span>{lesson.level}</span>
                      </span>
                      {lesson.unresolvedMistakesCount > 0 && (
                        <span className="flex items-center gap-1 text-[11px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
                          <MdWarningAmber className="text-xs" />
                          <span>{lesson.unresolvedMistakesCount} Mistake{lesson.unresolvedMistakesCount > 1 ? 's' : ''}</span>
                        </span>
                      )}
                    </div>
                    <StatusBadge status={lesson.status} />
                  </div>

                  <h2 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {lesson.title}
                  </h2>

                  <div className="mt-4 mb-4">
                    <ProgressBar
                      percentage={lesson.mastery}
                      showLabel
                      heightClass="h-2"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-3 border-t border-slate-100">
                  <Link
                    href={`/learn/grammar/${lesson.slug}`}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-100 transition-colors"
                  >
                    <MdMenuBook className="text-base text-slate-500" />
                    <span>Study Lesson</span>
                  </Link>

                  <Link
                    href={`/learn/grammar/${lesson.slug}/test`}
                    className={`inline-flex items-center justify-center gap-1.5 rounded-xl px-4 py-2 text-xs font-bold text-white shadow-sm transition-colors ${
                      isMastered
                        ? 'bg-emerald-600 hover:bg-emerald-700'
                        : 'bg-indigo-600 hover:bg-indigo-700'
                    }`}
                  >
                    <MdQuiz className="text-base" />
                    <span>Mini Test</span>
                    <MdArrowForward className="text-sm" />
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
