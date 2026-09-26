import React from 'react';
import Link from 'next/link';
import { getRoadmap } from '@/lib/services/roadmap.service';
import { AppShell } from '@/components/layout/AppShell';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { TranslatableText } from '@/components/ui/TranslatableText';
import { TOEFL_ROADMAP_STEPS } from '@/lib/data/toefl-content';
import {
  MdCheckCircle,
  MdRadioButtonUnchecked,
  MdLock,
  MdArrowDownward,
  MdArrowForward,
  MdSchool,
  MdTipsAndUpdates,
  MdFlag,
  MdTimeline,
} from 'react-icons/md';

export const revalidate = 0;

export default async function RoadmapPage() {
  const sections = await getRoadmap();

  return (
    <AppShell title="Learning Roadmap">
      <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
        {/* Header Banner */}
        <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-r from-indigo-700 via-indigo-600 to-indigo-800 p-4 sm:p-6 lg:p-8 text-white shadow-xl shadow-indigo-600/10">
          <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
            <span className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg sm:rounded-xl bg-white/20 backdrop-blur text-white text-base sm:text-lg flex-shrink-0">
              <MdSchool />
            </span>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-indigo-200">
              Mastery Curriculum
            </span>
          </div>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight">
            TOEFL Preparation Roadmap
          </h1>
          <TranslatableText
            en="A research-backed curriculum structured to advance your English proficiency systematically from core grammatical mechanics to full-length test simulations."
            id="Kurikulum berbasis riset yang terstruktur untuk memajukan kemampuan bahasa Inggris-mu secara sistematis dari mekanika gramatikal inti hingga simulasi tes penuh."
            className="mt-1.5 sm:mt-2 text-xs sm:text-sm lg:text-base text-indigo-100 max-w-2xl leading-relaxed"
            translationClassName="text-indigo-200/80"
          />
        </div>

        {/* 12-Week Study Plan */}
        <div className="rounded-xl sm:rounded-2xl border border-emerald-200 bg-emerald-50/50 p-4 sm:p-6 shadow-sm space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm sm:text-base lg:text-lg">
            <MdTimeline className="text-xl sm:text-2xl flex-shrink-0" />
            <TranslatableText
              en="12-Week Step-by-Step Plan to Score 600+"
              id="Rencana Langkah demi Langkah 12 Minggu untuk Skor 600+"
              className="font-bold"
            />
          </div>

          <div className="space-y-3 sm:space-y-4">
            {TOEFL_ROADMAP_STEPS.map((step, idx) => (
              <div
                key={idx}
                className="rounded-lg sm:rounded-xl bg-white border border-emerald-100 p-3 sm:p-4 lg:p-5 space-y-2 sm:space-y-3"
              >
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold bg-emerald-100 text-emerald-700 border border-emerald-200 whitespace-nowrap">
                      {step.weekRange}
                    </span>
                    <MdFlag className="text-emerald-500 text-sm" />
                  </div>
                </div>

                <TranslatableText
                  en={step.title.en}
                  id={step.title.id}
                  className="text-sm sm:text-base font-bold text-slate-900"
                />

                <TranslatableText
                  en={step.description.en}
                  id={step.description.id}
                  className="text-[11px] sm:text-xs text-slate-600 leading-relaxed"
                />

                {/* Goals */}
                <div className="space-y-1">
                  <div className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Goals
                  </div>
                  {step.goals.map((goal, gi) => (
                    <div key={gi} className="flex items-start gap-1.5 sm:gap-2">
                      <MdCheckCircle className="text-emerald-400 text-xs sm:text-sm flex-shrink-0 mt-0.5" />
                      <TranslatableText
                        en={goal.en}
                        id={goal.id}
                        className="text-[10px] sm:text-xs text-slate-700"
                      />
                    </div>
                  ))}
                </div>

                {/* Strategies */}
                <div className="space-y-1">
                  <div className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Strategies
                  </div>
                  {step.strategies.map((strategy, si) => (
                    <div key={si} className="flex items-start gap-1.5 sm:gap-2">
                      <MdTipsAndUpdates className="text-amber-400 text-xs sm:text-sm flex-shrink-0 mt-0.5" />
                      <TranslatableText
                        en={strategy.en}
                        id={strategy.id}
                        className="text-[10px] sm:text-xs text-slate-600"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section Roadmap Path */}
        <div className="space-y-3 sm:space-y-4">
          <h2 className="text-base sm:text-lg lg:text-xl font-extrabold text-slate-900 flex items-center gap-2">
            <MdSchool className="text-indigo-600 text-xl sm:text-2xl flex-shrink-0" />
            <span>Course Sections</span>
          </h2>

          <div className="relative pl-5 sm:pl-6 lg:pl-10 space-y-6 sm:space-y-8">
            {/* Vertical Connecting Line */}
            <div className="absolute left-[14px] sm:left-[18px] lg:left-[35px] top-6 bottom-6 w-0.5 sm:w-1 bg-gradient-to-b from-emerald-500 via-indigo-500 to-slate-200 rounded-full" />

            {sections.map((section, idx) => {
              const isCompleted = section.status === 'COMPLETED';
              const isInProgress = section.status === 'IN_PROGRESS';
              const isLocked = section.status === 'LOCKED';

              return (
                <div key={section.id} className="relative group">
                  {/* Node Icon on Line */}
                  <div
                    className={`absolute -left-5 sm:-left-6 lg:-left-10 top-4 sm:top-5 flex h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 items-center justify-center rounded-xl sm:rounded-2xl border-2 sm:border-4 border-slate-50 transition-all ${
                      isCompleted
                        ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/30'
                        : isInProgress
                        ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30 ring-2 sm:ring-4 ring-indigo-100'
                        : isLocked
                        ? 'bg-slate-200 text-slate-400'
                        : 'bg-white text-slate-400 border-slate-300'
                    }`}
                  >
                    {isCompleted ? (
                      <MdCheckCircle className="text-base sm:text-xl lg:text-2xl" />
                    ) : isInProgress ? (
                      <MdArrowForward className="text-base sm:text-xl lg:text-2xl animate-pulse" />
                    ) : isLocked ? (
                      <MdLock className="text-sm sm:text-lg lg:text-xl" />
                    ) : (
                      <MdRadioButtonUnchecked className="text-sm sm:text-lg lg:text-xl" />
                    )}
                  </div>

                  {/* Section Card */}
                  <div
                    className={`rounded-xl sm:rounded-2xl border bg-white p-4 sm:p-5 lg:p-6 transition-all ${
                      isInProgress
                        ? 'border-indigo-300 shadow-md ring-1 ring-indigo-100'
                        : isCompleted
                        ? 'border-emerald-200 shadow-sm'
                        : 'border-slate-200 shadow-sm opacity-90'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5 sm:gap-2 mb-0.5 sm:mb-1 flex-wrap">
                          <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider whitespace-nowrap">
                            Section {section.order}
                          </span>
                          <StatusBadge status={section.status} />
                        </div>
                        <h2 className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 line-clamp-2">
                          {section.name}
                        </h2>
                      </div>

                        <Link
                          href={`/learn/${section.slug}`}
                          className={`inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 text-[10px] sm:text-xs font-bold text-white shadow transition-colors flex-shrink-0 whitespace-nowrap ${
                            isCompleted
                              ? 'bg-emerald-600 hover:bg-emerald-700'
                              : isInProgress
                              ? 'bg-indigo-600 hover:bg-indigo-700'
                              : 'bg-slate-700 hover:bg-slate-800'
                          }`}
                        >
                          <span>{isCompleted ? 'Review' : isInProgress ? 'Continue' : 'Open'}</span>
                          <MdArrowForward className="text-sm sm:text-base" />
                        </Link>
                      </div>

                    {section.description && (
                      <p className="text-[10px] sm:text-xs lg:text-sm text-slate-600 mb-3 sm:mb-4 leading-relaxed line-clamp-3">
                        {section.description}
                      </p>
                    )}

                    {/* Progress Bar */}
                    <div className="mb-3 sm:mb-4">
                      <ProgressBar
                        percentage={section.progressPercentage}
                        showLabel
                        heightClass="h-2"
                      />
                    </div>

                    {/* Topics List */}
                    {section.topics.length > 0 && (
                      <div className="mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-slate-100 space-y-1.5 sm:space-y-2">
                        <div className="text-[9px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                          Curriculum Topics
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
                          {section.topics.map((topic) => (
                            <div
                              key={topic.id}
                              className="flex items-center justify-between rounded-lg sm:rounded-xl bg-slate-50 p-2 sm:p-2.5 border border-slate-100"
                            >
                              <span className="text-[10px] sm:text-xs font-semibold text-slate-700 truncate mr-2">
                                {topic.name}
                              </span>
                              <span className="text-[10px] sm:text-[11px] font-bold text-indigo-600 whitespace-nowrap">
                                {topic.averageMastery}%
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Downward indicator between cards */}
                  {idx < sections.length - 1 && (
                    <div className="flex justify-center -mb-3 sm:-mb-4 -mt-1 sm:-mt-2">
                      <MdArrowDownward className="text-slate-300 text-base sm:text-lg" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
