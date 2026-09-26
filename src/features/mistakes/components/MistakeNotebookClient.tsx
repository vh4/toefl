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
            message: 'Brilliant! Correct answer. This mistake has been automatically resolved in PostgreSQL.',
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
      <div className="rounded-3xl border border-emerald-200 bg-emerald-50/50 p-8 sm:p-12 text-center max-w-xl mx-auto shadow-sm">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 text-3xl mb-4 shadow-inner">
          <MdCheckCircle />
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900">
          Mistake Notebook is Clean!
        </h2>
        <p className="mt-2 text-sm text-slate-600 leading-relaxed">
          You currently have zero unresolved mistakes. Continue with your roadmap or take a mini test to identify new areas for improvement.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/learn/grammar"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-xs font-bold text-white shadow hover:bg-indigo-700 transition-colors"
          >
            <MdMenuBook className="text-base" />
            <span>Open Grammar Lessons</span>
          </Link>
          <Link
            href="/dashboard"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors"
          >
            <span>Back to Dashboard</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header Info */}
      <div className="rounded-3xl bg-gradient-to-r from-amber-600 via-amber-700 to-slate-900 p-6 sm:p-8 text-white shadow-xl shadow-amber-950/10">
        <div className="flex items-center gap-2 text-amber-200 text-xs font-bold uppercase tracking-wider mb-2">
          <MdHistoryEdu className="text-base" />
          <span>Active Recall & Remediation</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          Mistakes Notebook
        </h1>
        <p className="mt-2 text-xs sm:text-sm text-amber-100 max-w-xl leading-relaxed">
          Items you answered incorrectly are automatically saved here. Re-attempt them or review the grammatical logic to solidify mastery and resolve them permanently.
        </p>
        <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-black/20 backdrop-blur px-3 py-1 text-xs font-semibold text-white">
          <span>{totalMistakes} Unresolved Item{totalMistakes > 1 ? 's' : ''}</span>
        </div>
      </div>

      {/* Grouped Lessons */}
      <div className="space-y-6">
        {groups.map((group) => (
          <div
            key={group.lessonId}
            className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden"
          >
            {/* Group Header */}
            <div className="flex items-center justify-between p-4 sm:p-5 bg-slate-50/80 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-100 text-amber-800 text-xs font-extrabold">
                  {group.count}
                </span>
                <div>
                  <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                    {group.lessonTitle}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    {group.count} unresolved mistake{group.count > 1 ? 's' : ''}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Link
                  href={`/learn/grammar/${group.lessonSlug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-800 p-2"
                >
                  <MdMenuBook className="text-base" />
                  <span className="hidden sm:inline">Review Lesson</span>
                </Link>
                <Link
                  href={`/learn/grammar/${group.lessonSlug}/test`}
                  className="inline-flex items-center gap-1 rounded-xl bg-indigo-600 px-3 py-1.5 text-xs font-bold text-white shadow-sm hover:bg-indigo-700 transition-colors"
                >
                  <MdPlayArrow className="text-base" />
                  <span>Mini Test</span>
                </Link>
              </div>
            </div>

            {/* Mistakes List */}
            <div className="divide-y divide-slate-100 p-4 sm:p-6 space-y-4">
              {group.mistakes.map((mistake, idx) => {
                const isExpanded = expandedId === mistake.id;
                const isRetrying = retryingId === mistake.id;
                const isResolving = resolvingId === mistake.id;
                const fb = retryFeedback[mistake.id];

                return (
                  <div
                    key={mistake.id}
                    className="rounded-2xl border border-slate-200 p-4 sm:p-5 bg-white space-y-3 transition-all"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-2.5">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-slate-600 text-xs font-bold flex-shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <p className="text-sm sm:text-base font-semibold text-slate-900 leading-relaxed">
                          {mistake.questionText}
                        </p>
                      </div>

                      <div className="flex items-center gap-1 flex-shrink-0">
                        <button
                          type="button"
                          onClick={() => toggleExpand(mistake.id)}
                          className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs font-bold text-slate-600 hover:bg-slate-100"
                        >
                          <MdLightbulb className="text-amber-500 text-sm" />
                          <span>{isExpanded ? 'Hide Rule' : 'Explanation'}</span>
                          {isExpanded ? <MdExpandLess /> : <MdExpandMore />}
                        </button>
                      </div>
                    </div>

                    {/* Explanatory Rule Accordion */}
                    {isExpanded && (
                      <div className="rounded-xl bg-amber-50/70 border border-amber-200/80 p-3.5 text-xs leading-relaxed text-slate-800 space-y-1">
                        <p className="font-bold text-amber-900 flex items-center gap-1.5">
                          <span>Grammatical Rule:</span>
                        </p>
                        <p className="text-slate-700">{mistake.explanation}</p>
                        <p className="text-[11px] text-slate-500 pt-1">
                          Correct Option: <strong className="text-emerald-700">{mistake.correctAnswer}</strong> | Your Previous Answer: <strong className="text-rose-700">{mistake.userAnswer}</strong>
                        </p>
                      </div>
                    )}

                    {/* Interactive Retry Interface */}
                    {isRetrying ? (
                      <div className="rounded-xl bg-slate-50 p-4 border border-slate-200 space-y-3">
                        <div className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                          Select the correct answer to resolve:
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
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
                              className={`flex items-center gap-2 p-2.5 rounded-xl border text-xs font-semibold text-left transition-all ${
                                retryAnswer[mistake.id] === opt.key
                                  ? 'border-indigo-600 bg-indigo-50 text-indigo-950 ring-1 ring-indigo-500'
                                  : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                              }`}
                            >
                              <span className="flex h-5 w-5 items-center justify-center rounded-md bg-slate-100 text-slate-700 text-[10px] font-bold">
                                {opt.key}
                              </span>
                              <span>{opt.text}</span>
                            </button>
                          ))}
                        </div>

                        {fb && (
                          <div
                            className={`p-3 rounded-xl text-xs font-semibold ${
                              fb.isCorrect
                                ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                                : 'bg-rose-100 text-rose-900 border border-rose-300'
                            }`}
                          >
                            {fb.message}
                          </div>
                        )}

                        <div className="flex items-center justify-end gap-2 pt-2">
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
                            className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-100"
                          >
                            Cancel
                          </button>
                          <button
                            type="button"
                            disabled={!retryAnswer[mistake.id]}
                            onClick={() => handleRetrySubmit(mistake)}
                            className="px-4 py-1.5 rounded-lg bg-indigo-600 text-xs font-bold text-white shadow hover:bg-indigo-700 disabled:opacity-50"
                          >
                            Submit Answer
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-wrap items-center justify-between gap-2 pt-2">
                        <div className="text-xs text-slate-500 font-medium">
                          Reviewed: <span className="font-semibold text-slate-700">{mistake.reviewCount} time{mistake.reviewCount > 1 ? 's' : ''}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => setRetryingId(mistake.id)}
                            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-50 shadow-sm"
                          >
                            <MdRefresh className="text-base text-indigo-600" />
                            <span>Retry Question</span>
                          </button>

                          <button
                            type="button"
                            disabled={isResolving}
                            onClick={() => handleResolve(mistake)}
                            className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-emerald-700 shadow-sm disabled:opacity-50 transition-colors"
                          >
                            <MdCheckCircle className="text-base" />
                            <span>{isResolving ? 'Resolving...' : 'Mark Resolved'}</span>
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
