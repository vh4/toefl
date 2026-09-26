import React from 'react';
import Link from 'next/link';
import { getRoadmap } from '@/lib/services/roadmap.service';
import { AppShell } from '@/components/layout/AppShell';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { ProgressBar } from '@/components/ui/ProgressBar';
import {
  MdCheckCircle,
  MdRadioButtonUnchecked,
  MdLock,
  MdArrowDownward,
  MdArrowForward,
  MdSchool,
} from 'react-icons/md';

export const revalidate = 0;

export default async function RoadmapPage() {
  const sections = await getRoadmap();

  return (
    <AppShell title="Learning Roadmap">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-indigo-700 via-indigo-600 to-indigo-800 p-6 sm:p-8 text-white shadow-xl shadow-indigo-600/10">
          <div className="flex items-center gap-3 mb-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/20 backdrop-blur text-white text-lg">
              <MdSchool />
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-200">
              Mastery Curriculum
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            TOEFL Preparation Roadmap
          </h1>
          <p className="mt-2 text-sm sm:text-base text-indigo-100 max-w-2xl leading-relaxed">
            A research-backed curriculum structured to advance your English proficiency systematically from core grammatical mechanics to full-length test simulations.
          </p>
        </div>

        {/* Roadmap Path */}
        <div className="relative pl-6 sm:pl-10 space-y-8">
          {/* Vertical Connecting Line */}
          <div className="absolute left-[19px] sm:left-[35px] top-6 bottom-6 w-1 bg-gradient-to-b from-emerald-500 via-indigo-500 to-slate-200 rounded-full" />

          {sections.map((section, idx) => {
            const isCompleted = section.status === 'COMPLETED';
            const isInProgress = section.status === 'IN_PROGRESS';
            const isLocked = section.status === 'LOCKED';

            return (
              <div key={section.id} className="relative group">
                {/* Node Icon on Line */}
                <div
                  className={`absolute -left-6 sm:-left-10 top-5 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-2xl border-4 border-slate-50 transition-all ${
                    isCompleted
                      ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/30'
                      : isInProgress
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30 ring-4 ring-indigo-100'
                      : isLocked
                      ? 'bg-slate-200 text-slate-400'
                      : 'bg-white text-slate-400 border-slate-300'
                  }`}
                >
                  {isCompleted ? (
                    <MdCheckCircle className="text-xl sm:text-2xl" />
                  ) : isInProgress ? (
                    <MdArrowForward className="text-xl sm:text-2xl animate-pulse" />
                  ) : isLocked ? (
                    <MdLock className="text-lg sm:text-xl" />
                  ) : (
                    <MdRadioButtonUnchecked className="text-lg sm:text-xl" />
                  )}
                </div>

                {/* Section Card */}
                <div
                  className={`rounded-2xl border bg-white p-5 sm:p-6 transition-all ${
                    isInProgress
                      ? 'border-indigo-300 shadow-md ring-1 ring-indigo-100'
                      : isCompleted
                      ? 'border-emerald-200 shadow-sm'
                      : 'border-slate-200 shadow-sm opacity-90'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                          Section {section.order}
                        </span>
                        <StatusBadge status={section.status} />
                      </div>
                      <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                        {section.name}
                      </h2>
                    </div>

                    {section.slug === 'grammar' && (
                      <Link
                        href="/learn/grammar"
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-xs font-bold text-white shadow hover:bg-indigo-700 transition-colors"
                      >
                        <span>Open Grammar Lessons</span>
                        <MdArrowForward className="text-base" />
                      </Link>
                    )}
                  </div>

                  {section.description && (
                    <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                      {section.description}
                    </p>
                  )}

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <ProgressBar
                      percentage={section.progressPercentage}
                      showLabel
                      heightClass="h-2"
                    />
                  </div>

                  {/* Topics List */}
                  {section.topics.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-slate-100 space-y-2">
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                        Curriculum Topics
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {section.topics.map((topic) => (
                          <div
                            key={topic.id}
                            className="flex items-center justify-between rounded-xl bg-slate-50 p-2.5 border border-slate-100"
                          >
                            <span className="text-xs font-semibold text-slate-700">
                              {topic.name}
                            </span>
                            <span className="text-[11px] font-bold text-indigo-600">
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
                  <div className="flex justify-center -mb-4 -mt-2">
                    <MdArrowDownward className="text-slate-300 text-lg" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </AppShell>
  );
}
