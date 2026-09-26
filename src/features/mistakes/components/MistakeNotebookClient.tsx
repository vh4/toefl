'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  MdCheckCircle,
  MdRefresh,
  MdMenuBook,
  MdPlayArrow,
  MdHistoryEdu,
  MdExpandMore,
  MdExpandLess,
  MdLightbulb,
} from 'react-icons/md';
import { MistakesGroupedByLesson, MistakeItem } from '@/lib/services/mistakes.service';
import { TranslatableText } from '@/components/ui/TranslatableText';

interface MistakeNotebookClientProps {
  initialGroups: MistakesGroupedByLesson[];
}

export function MistakeNotebookClient({ initialGroups }: MistakeNotebookClientProps) {
  const [groups, setGroups] = useState<MistakesGroupedByLesson[]>(initialGroups);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [retryingId, setRetryingId] = useState<string | null>(null);
  const [retryAnswer, setRetryAnswer] = useState<Record<string, string>>({});
  const [retryFeedback, setRetryFeedback] = useState<Record<string, { isCorrect: boolean; message: string }>>({});
  const [resolvingId, setResolvingId] = useState<string | null>(null);

  const totalMistakes = groups.reduce((acc, g) => acc + g.count, 0);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const handleResolve = async (mistake: MistakeItem) => {
    setResolvingId(mistake.id);
    try {
      const res = await fetch('/api/mistakes/resolve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mistakeId: mistake.id }),
      });

      if (!res.ok) throw new Error('Failed to resolve mistake.');

      // Remove from client state optimistically
      setGroups((prevGroups) =>
        prevGroups
          .map((g) => {
            if (g.lessonId !== mistake.lessonId) return g;
            const updatedMistakes = g.mistakes.filter((m) => m.id !== mistake.id);
            return {
              ...g,
              count: updatedMistakes.length,
              mistakes: updatedMistakes,
            };
          })
          .filter((g) => g.count > 0)
      );
    } catch (err) {
      console.error(err);
      alert('Error resolving mistake. Please try again.');
    } finally {
      setResolvingId(null);
    }
  };

  const handleRetrySubmit = async (mistake: MistakeItem) => {
    const selected = retryAnswer[mistake.id];
    if (!selected) return;

    try {
      const res = await fetch('/api/attempts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          questionId: mistake.questionId,
          answer: selected,
        }),
      });

      const data = await res.json();
      if (data.isCorrect) {
        setRetryFeedback((prev) => ({
          ...prev,
          [mistake.id]: {
            isCorrect: true,
            message: 'Brilliant! Correct answer. This mistake has been automatically resolved.',
          },
        }));

        // Remove from list after brief delay
        setTimeout(() => {
          handleResolve(mistake);
        }, 1200);
      } else {
        setRetryFeedback((prev) => ({
          ...prev,
          [mistake.id]: {
            isCorrect: false,
            message: `Not quite. Correct answer is ${data.correctAnswer}. ${data.explanation}`,
          },
        }));
      }
    } catch (err) {
      console.error(err);
      alert('Failed to evaluate retry.');
    }
  };

  if (totalMistakes === 0) {
    return (
      <div className="rounded-2xl sm:rounded-3xl border border-emerald-200 bg-emerald-50/50 p-6 sm:p-8 lg:p-12 text-center max-w-xl mx-auto shadow-sm">
        <div className="mx-auto flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-xl sm:rounded-2xl bg-emerald-100 text-emerald-600 text-2xl sm:text-3xl mb-3 sm:mb-4 shadow-inner">
          <MdCheckCircle />
        </div>
        <h2 className="text-lg sm:text-2xl font-extrabold text-slate-900">
          Mistake Notebook is Clean!
        </h2>
        <TranslatableText
          en="You currently have zero unresolved mistakes. Continue with your roadmap or take a mini test to identify new areas for improvement."
          id="Kamu saat ini tidak memiliki kesalahan yang belum terselesaikan. Lanjutkan dengan roadmap-mu atau ambil mini tes untuk mengidentifikasi area baru yang perlu diperbaiki."
          className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed"
        />
        <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
          <Link
            href="/learn/grammar"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 sm:px-5 py-2.5 text-[10px] sm:text-xs font-bold text-white shadow hover:bg-indigo-700 transition-colors"
          >
            <MdMenuBook className="text-sm sm:text-base" />
            <span>Grammar Lessons</span>
          </Link>
          <Link
            href="/dashboard"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 sm:px-5 py-2.5 text-[10px] sm:text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors"
          >
            <span>Dashboard</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
      {/* Header Info */}
      <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-r from-amber-600 via-amber-700 to-slate-900 p-4 sm:p-6 lg:p-8 text-white shadow-xl shadow-amber-950/10">
        <div className="flex items-center gap-1.5 sm:gap-2 text-amber-200 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-1.5 sm:mb-2">
          <MdHistoryEdu className="text-sm sm:text-base flex-shrink-0" />
          <span>Active Recall & Remediation</span>
        </div>
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight">
          Mistakes Notebook
        </h1>
        <TranslatableText
          en="Items you answered incorrectly are automatically saved here. Re-attempt them or review the grammatical logic to solidify mastery and resolve them permanently."
          id="Item yang kamu jawab salah secara otomatis disimpan di sini. Coba ulang atau review logika gramatikal untuk memperkuat penguasaan dan selesaikan secara permanen."
          className="mt-1.5 sm:mt-2 text-[11px] sm:text-sm text-amber-100 max-w-xl leading-relaxed"
          translationClassName="text-amber-200/80"
        />
        <div className="mt-3 sm:mt-4 inline-flex items-center gap-2 rounded-full bg-black/20 backdrop-blur px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs font-semibold text-white">
          <span>{totalMistakes} Unresolved Item{totalMistakes > 1 ? 's' : ''}</span>
        </div>
      </div>

      {/* Grouped Lessons */}
      <div className="space-y-4 sm:space-y-6">
        {groups.map((group) => (
          <div
            key={group.lessonId}
            className="rounded-xl sm:rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden"
          >
            {/* Group Header */}
            <div className="flex items-center justify-between p-3 sm:p-4 lg:p-5 bg-slate-50/80 border-b border-slate-100 gap-2">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <span className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg sm:rounded-xl bg-amber-100 text-amber-800 text-[10px] sm:text-xs font-extrabold flex-shrink-0">
                  {group.count}
                </span>
                <div className="min-w-0">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base lg:text-lg truncate">
                    {group.lessonTitle}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-slate-500 font-medium">
                    {group.count} unresolved
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
                <Link
                  href={`/learn/grammar/${group.lessonSlug}`}
                  className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-bold text-indigo-600 hover:text-indigo-800 p-1.5 sm:p-2"
                >
                  <MdMenuBook className="text-sm sm:text-base" />
                  <span className="hidden sm:inline">Review</span>
                </Link>
                <Link
                  href={`/learn/grammar/${group.lessonSlug}/test`}
                  className="inline-flex items-center gap-1 rounded-lg sm:rounded-xl bg-indigo-600 px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs font-bold text-white shadow-sm hover:bg-indigo-700 transition-colors"
                >
                  <MdPlayArrow className="text-sm sm:text-base" />
                  <span>Test</span>
                </Link>
              </div>
            </div>

            {/* Mistakes List */}
            <div className="divide-y divide-slate-100 p-3 sm:p-4 lg:p-6 space-y-3 sm:space-y-4">
              {group.mistakes.map((mistake, idx) => {
                const isExpanded = expandedId === mistake.id;
                const isRetrying = retryingId === mistake.id;
                const isResolving = resolvingId === mistake.id;
                const fb = retryFeedback[mistake.id];

                return (
                  <div
                    key={mistake.id}
                    className="rounded-xl sm:rounded-2xl border border-slate-200 p-3 sm:p-4 lg:p-5 bg-white space-y-2 sm:space-y-3 transition-all"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-start gap-2 sm:gap-2.5 min-w-0">
                        <span className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-slate-100 text-slate-600 text-[10px] sm:text-xs font-bold flex-shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <p className="text-xs sm:text-sm lg:text-base font-semibold text-slate-900 leading-relaxed">
                          {mistake.questionText}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => toggleExpand(mistake.id)}
                        className="inline-flex items-center gap-0.5 sm:gap-1 rounded-lg sm:rounded-xl border border-slate-200 bg-slate-50 px-2 sm:px-2.5 py-1 sm:py-1.5 text-[10px] sm:text-xs font-bold text-slate-600 hover:bg-slate-100 flex-shrink-0"
                      >
                        <MdLightbulb className="text-amber-500 text-xs sm:text-sm" />
                        <span className="hidden sm:inline">{isExpanded ? 'Hide' : 'Explain'}</span>
                        {isExpanded ? <MdExpandLess className="text-sm" /> : <MdExpandMore className="text-sm" />}
                      </button>
                    </div>

                    {/* Explanatory Rule Accordion */}
                    {isExpanded && (
                      <div className="rounded-lg sm:rounded-xl bg-amber-50/70 border border-amber-200/80 p-2.5 sm:p-3.5 text-[10px] sm:text-xs leading-relaxed text-slate-800 space-y-1">
                        <p className="font-bold text-amber-900 flex items-center gap-1.5">
                          <span>Grammatical Rule:</span>
                        </p>
                        <TranslatableText
                          en={mistake.explanation}
                          id={mistake.explanation}
                          className="text-slate-700"
                        />
                        <p className="text-[9px] sm:text-[11px] text-slate-500 pt-1">
                          Correct: <strong className="text-emerald-700">{mistake.correctAnswer}</strong> | Yours: <strong className="text-rose-700">{mistake.userAnswer}</strong>
                        </p>
                      </div>
                    )}

                    {/* Interactive Retry Interface */}
                    {isRetrying ? (
                      <div className="rounded-lg sm:rounded-xl bg-slate-50 p-3 sm:p-4 border border-slate-200 space-y-2 sm:space-y-3">
                        <div className="text-[10px] sm:text-xs font-bold text-slate-600 uppercase tracking-wider">
                          Select the correct answer:
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
                          {mistake.options.map((opt) => (
                            <button
                              key={opt.key}
                              type="button"
                              onClick={() =>
                                setRetryAnswer((prev) => ({
                                  ...prev,
                                  [mistake.id]: opt.key,
                                }))
                              }
                              className={`flex items-center gap-1.5 sm:gap-2 p-2 sm:p-2.5 rounded-lg sm:rounded-xl border text-[10px] sm:text-xs font-semibold text-left transition-all ${
                                retryAnswer[mistake.id] === opt.key
                                  ? 'border-indigo-600 bg-indigo-50 text-indigo-950 ring-1 ring-indigo-500'
                                  : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                              }`}
                            >
                              <span className="flex h-5 w-5 items-center justify-center rounded-md bg-slate-100 text-slate-700 text-[9px] sm:text-[10px] font-bold flex-shrink-0">
                                {opt.key}
                              </span>
                              <span className="truncate">{opt.text}</span>
                            </button>
                          ))}
                        </div>

                        {fb && (
                          <div
                            className={`p-2.5 sm:p-3 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-semibold ${
                              fb.isCorrect
                                ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                                : 'bg-rose-100 text-rose-900 border border-rose-300'
                            }`}
                          >
                            {fb.message}
                          </div>
                        )}

                        <div className="flex items-center justify-end gap-1.5 sm:gap-2 pt-1.5 sm:pt-2">
                          <button
                            type="button"
                            onClick={() => {
                              setRetryingId(null);
                              setRetryFeedback((prev) => {
                                const copy = { ...prev };
                                delete copy[mistake.id];
                                return copy;
                              });
                            }}
                            className="px-2.5 sm:px-3 py-1.5 rounded-lg border border-slate-200 text-[10px] sm:text-xs font-bold text-slate-600 hover:bg-slate-100"
                          >
                            Cancel
                          </button>
                          <button
                            type="button"
                            disabled={!retryAnswer[mistake.id]}
                            onClick={() => handleRetrySubmit(mistake)}
                            className="px-3 sm:px-4 py-1.5 rounded-lg bg-indigo-600 text-[10px] sm:text-xs font-bold text-white shadow hover:bg-indigo-700 disabled:opacity-50"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-wrap items-center justify-between gap-2 pt-1.5 sm:pt-2">
                        <div className="text-[10px] sm:text-xs text-slate-500 font-medium">
                          Reviewed: <span className="font-semibold text-slate-700">{mistake.reviewCount}×</span>
                        </div>

                        <div className="flex items-center gap-1.5 sm:gap-2">
                          <button
                            type="button"
                            onClick={() => setRetryingId(mistake.id)}
                            className="inline-flex items-center gap-1 sm:gap-1.5 rounded-lg sm:rounded-xl border border-slate-200 bg-white px-2.5 sm:px-3 py-1.5 text-[10px] sm:text-xs font-bold text-slate-700 hover:bg-slate-50 shadow-sm"
                          >
                            <MdRefresh className="text-sm sm:text-base text-indigo-600" />
                            <span>Retry</span>
                          </button>

                          <button
                            type="button"
                            disabled={isResolving}
                            onClick={() => handleResolve(mistake)}
                            className="inline-flex items-center gap-1 sm:gap-1.5 rounded-lg sm:rounded-xl bg-emerald-600 px-2.5 sm:px-3 py-1.5 text-[10px] sm:text-xs font-bold text-white hover:bg-emerald-700 shadow-sm disabled:opacity-50 transition-colors"
                          >
                            <MdCheckCircle className="text-sm sm:text-base" />
                            <span>{isResolving ? '...' : 'Resolve'}</span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
