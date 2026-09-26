import React from 'react';
import Link from 'next/link';
import { getDashboardData } from '@/lib/services/dashboard.service';
import { AppShell } from '@/components/layout/AppShell';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { TranslatableText } from '@/components/ui/TranslatableText';
import {
  MdPlayArrow,
  MdHistoryEdu,
  MdAutoAwesome,
  MdMenuBook,
  MdCheckCircle,
  MdCancel,
  MdSchool,
  MdArrowForward,
  MdTrendingUp,
  MdTranslate,
} from 'react-icons/md';

export const revalidate = 0;

export default async function DashboardPage() {
  const data = await getDashboardData();
  const { todayLearning, recommendedLesson, overallStats, recentActivity, user } = data;

  return (
    <AppShell
      title="Study Dashboard"
      unresolvedMistakesCount={todayLearning.unresolvedMistakesCount}
    >
      <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8">
        {/* Welcome Banner */}
        <div className="flex flex-col gap-4 sm:gap-6 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-indigo-800 via-indigo-700 to-slate-900 p-4 sm:p-6 lg:p-8 text-white shadow-xl shadow-indigo-950/15">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-indigo-300 text-[10px] sm:text-xs font-bold uppercase tracking-wider">
              <MdSchool className="text-sm sm:text-base" />
              <span>Welcome back, {user.name}</span>
            </div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight">
              Today&apos;s TOEFL Learning Goals
            </h1>
            <TranslatableText
              en="Target Score: 600+. High-yield grammar accuracy directly correlates with TOEFL Reading & Structure speed."
              id="Target Skor: 600+. Akurasi grammar tinggi berkorelasi langsung dengan kecepatan Reading & Structure TOEFL."
              className="text-[11px] sm:text-sm text-indigo-100 max-w-xl leading-relaxed"
              translationClassName="text-indigo-200/80"
            />
          </div>

          {/* Quick Overall Metrics */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            <div className="rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur p-3 sm:p-4 border border-white/10">
              <div className="text-[9px] sm:text-[11px] font-bold text-indigo-200 uppercase tracking-wider">
                Grammar Mastery
              </div>
              <div className="text-xl sm:text-2xl font-extrabold text-white mt-0.5 sm:mt-1">
                {overallStats.averageMastery}%
              </div>
              <div className="text-[9px] sm:text-[11px] text-emerald-400 font-semibold mt-0.5">
                {overallStats.masteredLessons} of {overallStats.totalLessons} Mastered
              </div>
            </div>

            <div className="rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur p-3 sm:p-4 border border-white/10">
              <div className="text-[9px] sm:text-[11px] font-bold text-indigo-200 uppercase tracking-wider">
                Open Mistakes
              </div>
              <div className="text-xl sm:text-2xl font-extrabold text-white mt-0.5 sm:mt-1">
                {todayLearning.unresolvedMistakesCount}
              </div>
              <div className="text-[9px] sm:text-[11px] text-amber-300 font-semibold mt-0.5">
                Needs Resolution
              </div>
            </div>
          </div>
        </div>

        {/* Today's Learning Grid */}
        <section className="space-y-3 sm:space-y-4">
          <div className="flex items-center justify-between gap-2">
            <h2 className="text-base sm:text-lg lg:text-xl font-extrabold text-slate-900 flex items-center gap-2">
              <MdTrendingUp className="text-indigo-600 text-xl sm:text-2xl flex-shrink-0" />
              <span className="truncate">Today&apos;s Learning Queue</span>
            </h2>
            <Link
              href="/roadmap"
              className="text-[10px] sm:text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 flex-shrink-0 whitespace-nowrap"
            >
              <span>Roadmap</span>
              <MdArrowForward className="text-sm" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-5">
            {/* Card 1: Continue Learning */}
            <div className="flex flex-col justify-between rounded-xl sm:rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2 sm:mb-3">
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Grammar in Progress
                  </span>
                  {todayLearning.continueLesson && (
                    <StatusBadge status={todayLearning.continueLesson.status} />
                  )}
                </div>

                {todayLearning.continueLesson ? (
                  <>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1 line-clamp-2">
                      {todayLearning.continueLesson.title}
                    </h3>
                    <p className="text-[10px] sm:text-xs text-slate-500 mb-3 sm:mb-4 font-medium">
                      Level: {todayLearning.continueLesson.level}
                    </p>
                    <ProgressBar
                      percentage={todayLearning.continueLesson.mastery}
                      showLabel
                      heightClass="h-2"
                    />
                  </>
                ) : (
                  <TranslatableText
                    en="All current lessons mastered!"
                    id="Semua pelajaran saat ini sudah dikuasai!"
                    className="text-sm text-slate-600"
                  />
                )}
              </div>

              <div className="pt-4 sm:pt-5 mt-3 sm:mt-4 border-t border-slate-100">
                {todayLearning.continueLesson && (
                  <Link
                    href={`/learn/grammar/${todayLearning.continueLesson.slug}`}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-indigo-700 transition-colors"
                  >
                    <span>Continue Lesson</span>
                    <MdPlayArrow className="text-base" />
                  </Link>
                )}
              </div>
            </div>

            {/* Card 2: Vocabulary */}
            <div className="flex flex-col justify-between rounded-xl sm:rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2 sm:mb-3">
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Vocabulary Target
                  </span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200 whitespace-nowrap">
                    AWL Sublist 1
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 text-lg sm:text-xl font-bold flex-shrink-0">
                    <MdTranslate />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 truncate">
                      Academic Words
                    </h3>
                    <p className="text-[10px] sm:text-xs text-slate-500 truncate">
                      {todayLearning.vocabularyCount} words queued
                    </p>
                  </div>
                </div>

                <TranslatableText
                  en="High-frequency terms: phenomenon, comprise, derive, hypothesis."
                  id="Istilah frekuensi tinggi: phenomenon (fenomena), comprise (terdiri dari), derive (berasal), hypothesis (hipotesis)."
                  className="text-[10px] sm:text-xs text-slate-600 leading-relaxed mt-2 sm:mt-3"
                />
              </div>

              <div className="pt-4 sm:pt-5 mt-3 sm:mt-4 border-t border-slate-100">
                <Link
                  href="/learn/vocabulary"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-100 transition-colors"
                >
                  <MdMenuBook className="text-base text-slate-500" />
                  <span>Review Lexicon</span>
                </Link>
              </div>
            </div>

            {/* Card 3: Mistakes Notebook */}
            <div className="flex flex-col justify-between rounded-xl sm:rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2 sm:mb-3">
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Error Log
                  </span>
                  <span
                    className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold whitespace-nowrap ${
                      todayLearning.unresolvedMistakesCount > 0
                        ? 'bg-amber-50 text-amber-800 border border-amber-200'
                        : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                    }`}
                  >
                    {todayLearning.unresolvedMistakesCount > 0 ? 'Needs Attention' : 'All Clear'}
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600 text-lg sm:text-xl font-bold flex-shrink-0">
                    <MdHistoryEdu />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 truncate">
                      Mistakes Notebook
                    </h3>
                    <p className="text-[10px] sm:text-xs text-slate-500">
                      {todayLearning.unresolvedMistakesCount} question{todayLearning.unresolvedMistakesCount !== 1 ? 's' : ''} to remediate
                    </p>
                  </div>
                </div>

                <TranslatableText
                  en="Questions answered incorrectly are retained until you review and successfully resolve them."
                  id="Pertanyaan yang dijawab salah akan disimpan sampai kamu mereview dan menyelesaikannya dengan sukses."
                  className="text-[10px] sm:text-xs text-slate-600 leading-relaxed mt-2 sm:mt-3"
                />
              </div>

              <div className="pt-4 sm:pt-5 mt-3 sm:mt-4 border-t border-slate-100">
                <Link
                  href="/review/mistakes"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-4 py-2.5 text-xs font-bold text-white shadow-sm shadow-amber-500/20 hover:bg-amber-600 transition-colors"
                >
                  <MdHistoryEdu className="text-base" />
                  <span>Review Mistakes</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Recommended Next Lesson Card */}
        {recommendedLesson && (
          <section className="rounded-2xl sm:rounded-3xl border-2 border-indigo-200 bg-gradient-to-r from-indigo-50/80 via-white to-indigo-50/50 p-4 sm:p-6 lg:p-8 shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-6">
              <div className="space-y-2 sm:space-y-3 min-w-0">
                <div className="flex items-center gap-2 text-indigo-700 font-extrabold text-[10px] sm:text-xs uppercase tracking-wider">
                  <MdAutoAwesome className="text-sm sm:text-base flex-shrink-0" />
                  <span>AI Recommendation Engine</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-slate-900 line-clamp-2">
                    Recommended: {recommendedLesson.title}
                  </h3>
                  <span className="self-start text-[10px] sm:text-xs font-bold text-indigo-700 bg-indigo-100/70 px-2.5 py-0.5 rounded-full whitespace-nowrap">
                    {recommendedLesson.level}
                  </span>
                </div>

                <div className="rounded-xl bg-white p-3 sm:p-3.5 border border-indigo-100 shadow-inner">
                  <TranslatableText
                    en={`Why this lesson? ${recommendedLesson.reason}`}
                    id={`Mengapa pelajaran ini? ${recommendedLesson.reason}`}
                    className="text-[11px] sm:text-sm text-slate-700 leading-relaxed"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 flex-shrink-0">
                <Link
                  href={`/learn/grammar/${recommendedLesson.slug}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-white shadow-md shadow-indigo-600/20 hover:bg-indigo-700 transition-colors"
                >
                  <span>Continue</span>
                  <MdArrowForward className="text-base" />
                </Link>

                <Link
                  href={`/learn/grammar/${recommendedLesson.slug}/test`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-indigo-200 bg-white px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-indigo-700 hover:bg-indigo-50 transition-colors"
                >
                  <span>Mini Test</span>
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Recent Activity Timeline */}
        <section className="space-y-3 sm:space-y-4">
          <h2 className="text-base sm:text-lg lg:text-xl font-extrabold text-slate-900 flex items-center gap-2">
            <MdMenuBook className="text-indigo-600 text-xl sm:text-2xl flex-shrink-0" />
            <span>Recent Learning Activity</span>
          </h2>

          <div className="rounded-xl sm:rounded-2xl border border-slate-200 bg-white p-3 sm:p-4 lg:p-6 shadow-sm">
            {recentActivity.length > 0 ? (
              <div className="divide-y divide-slate-100">
                {recentActivity.map((act) => (
                  <div
                    key={act.id}
                    className="flex items-center justify-between py-2.5 sm:py-3.5 first:pt-0 last:pb-0 gap-2 sm:gap-4"
                  >
                    <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                      <div
                        className={`flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg sm:rounded-xl text-sm sm:text-base font-bold flex-shrink-0 ${
                          act.isCorrect
                            ? 'bg-emerald-50 text-emerald-600'
                            : 'bg-rose-50 text-rose-600'
                        }`}
                      >
                        {act.isCorrect ? <MdCheckCircle /> : <MdCancel />}
                      </div>
                      <div className="min-w-0">
                        <div className="text-[11px] sm:text-sm font-bold text-slate-900 truncate">
                          {act.lessonTitle}
                        </div>
                        <div className="text-[10px] sm:text-xs text-slate-500 truncate max-w-[180px] sm:max-w-xs md:max-w-md">
                          {act.questionSnippet}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
                      <span
                        className={`px-1.5 sm:px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold whitespace-nowrap ${
                          act.isCorrect
                            ? 'bg-emerald-50 text-emerald-700'
                            : 'bg-rose-50 text-rose-700'
                        }`}
                      >
                        {act.isCorrect ? '✓' : '✗'}
                      </span>
                      <span className="text-[10px] sm:text-[11px] text-slate-400 hidden sm:inline whitespace-nowrap">
                        {new Date(act.createdAt).toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-6 sm:py-8">
                <TranslatableText
                  en="No recent activity recorded yet. Start a lesson to begin your streak!"
                  id="Belum ada aktivitas terbaru yang tercatat. Mulai pelajaran untuk memulai streak-mu!"
                  className="text-xs text-slate-400"
                />
              </div>
            )}
          </div>
        </section>
      </div>
    </AppShell>
  );
}
