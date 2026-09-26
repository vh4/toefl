'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  MdCheckCircle,
  MdCancel,
  MdArrowForward,
  MdRefresh,
  MdHistoryEdu,
  MdDashboard,
  MdHelpOutline,
  MdEmojiEvents,
  MdArrowBack,
} from 'react-icons/md';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { TranslatableText } from '@/components/ui/TranslatableText';

interface Option {
  id: string;
  key: string;
  text: string;
}

interface Question {
  id: string;
  question: string;
  order: number;
  options: Option[];
}

interface MiniTestClientProps {
  lessonId: string;
  lessonTitle: string;
  lessonSlug: string;
  initialMastery: number;
  questions: Question[];
}

interface AnswerFeedback {
  isCorrect: boolean;
  userAnswer: string;
  correctAnswer: string;
  explanation: string;
  newMastery: number;
  newStatus: string;
}

export function MiniTestClient({
  lessonTitle,
  lessonSlug,
  initialMastery,
  questions,
}: MiniTestClientProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<AnswerFeedback | null>(null);

  // Test-level stats
  const [results, setResults] = useState<
    Array<{
      questionId: string;
      isCorrect: boolean;
      userAnswer: string;
      correctAnswer: string;
      explanation: string;
    }>
  >([]);
  const [currentMastery, setCurrentMastery] = useState(initialMastery);
  const [currentStatus, setCurrentStatus] = useState<string>('LEARNING');
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQ = questions[currentIndex];
  const totalQuestions = questions.length;

  const handleSubmitAnswer = async () => {
    if (!selectedKey || !currentQ || isSubmitting) return;

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/attempts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          questionId: currentQ.id,
          answer: selectedKey,
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to record answer.');
      }

      const data = await res.json();
      const fb: AnswerFeedback = {
        isCorrect: data.isCorrect,
        userAnswer: data.userAnswer,
        correctAnswer: data.correctAnswer,
        explanation: data.explanation,
        newMastery: data.newMastery,
        newStatus: data.status,
      };

      setFeedback(fb);
      setCurrentMastery(data.newMastery);
      setCurrentStatus(data.status);

      setResults((prev) => [
        ...prev,
        {
          questionId: currentQ.id,
          isCorrect: data.isCorrect,
          userAnswer: data.userAnswer,
          correctAnswer: data.correctAnswer,
          explanation: data.explanation,
        },
      ]);
    } catch (err) {
      console.error(err);
      alert('Network error while saving attempt. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex + 1 < totalQuestions) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedKey(null);
      setFeedback(null);
    } else {
      setIsCompleted(true);
    }
  };

  const handleRetake = () => {
    setCurrentIndex(0);
    setSelectedKey(null);
    setFeedback(null);
    setResults([]);
    setIsCompleted(false);
  };

  // Completion Screen
  if (isCompleted) {
    const correctCount = results.filter((r) => r.isCorrect).length;
    const accuracy = Math.round((correctCount / totalQuestions) * 100);
    const mistakesCount = totalQuestions - correctCount;

    return (
      <div className="max-w-2xl mx-auto space-y-4 sm:space-y-6">
        <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-4 sm:p-6 lg:p-8 text-center shadow-lg">
          <div className="mx-auto flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-xl sm:rounded-2xl bg-indigo-50 text-indigo-600 text-2xl sm:text-3xl shadow-inner mb-3 sm:mb-4">
            <MdEmojiEvents />
          </div>

          <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-[10px] sm:text-xs font-bold mb-2">
            <span>Test Completed</span>
          </div>

          <h2 className="text-lg sm:text-2xl lg:text-3xl font-extrabold text-slate-900 line-clamp-2">
            {lessonTitle} Mini Test
          </h2>

          <div className="mt-4 sm:mt-6 grid grid-cols-3 gap-2 sm:gap-3">
            <div className="rounded-xl sm:rounded-2xl bg-slate-50 p-3 sm:p-4 border border-slate-100">
              <div className="text-[9px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Score
              </div>
              <div className="text-lg sm:text-2xl font-extrabold text-slate-900 mt-0.5 sm:mt-1">
                {correctCount}/{totalQuestions}
              </div>
              <div className="text-[9px] sm:text-xs font-semibold text-slate-500 mt-0.5">
                {accuracy}%
              </div>
            </div>

            <div className="rounded-xl sm:rounded-2xl bg-slate-50 p-3 sm:p-4 border border-slate-100">
              <div className="text-[9px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Mastery
              </div>
              <div className="text-lg sm:text-2xl font-extrabold text-indigo-600 mt-0.5 sm:mt-1">
                {currentMastery}%
              </div>
              <div className="text-[9px] sm:text-xs font-semibold text-slate-500 mt-0.5">
                Saved
              </div>
            </div>

            <div className="rounded-xl sm:rounded-2xl bg-slate-50 p-3 sm:p-4 border border-slate-100">
              <div className="text-[9px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Status
              </div>
              <div className="mt-1.5 sm:mt-2">
                <StatusBadge status={currentStatus} />
              </div>
            </div>
          </div>

          <div className="mt-4 sm:mt-6 mb-4 sm:mb-6">
            <ProgressBar percentage={currentMastery} showLabel heightClass="h-2 sm:h-2.5" />
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-slate-100">
            {mistakesCount > 0 && (
              <Link
                href="/review/mistakes"
                className="flex-1 inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl bg-amber-500 px-3 sm:px-4 py-2.5 sm:py-3 text-[10px] sm:text-xs font-bold text-white shadow-md shadow-amber-500/20 hover:bg-amber-600 transition-colors"
              >
                <MdHistoryEdu className="text-sm sm:text-base" />
                <span>Review {mistakesCount} Mistake{mistakesCount > 1 ? 's' : ''}</span>
              </Link>
            )}

            <button
              onClick={handleRetake}
              className="flex-1 inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl border border-slate-200 bg-white px-3 sm:px-4 py-2.5 sm:py-3 text-[10px] sm:text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              <MdRefresh className="text-sm sm:text-base text-slate-500" />
              <span>Retake</span>
            </button>

            <Link
              href="/dashboard"
              className="flex-1 inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl bg-indigo-600 px-3 sm:px-4 py-2.5 sm:py-3 text-[10px] sm:text-xs font-bold text-white shadow-md shadow-indigo-600/20 hover:bg-indigo-700 transition-colors"
            >
              <MdDashboard className="text-sm sm:text-base" />
              <span>Dashboard</span>
            </Link>
          </div>
        </div>

        {/* Answer Breakdown */}
        <div className="space-y-2 sm:space-y-3">
          <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 px-1">
            Question Review & Explanations
          </div>
          {results.map((r, i) => (
            <div
              key={r.questionId}
              className={`rounded-xl sm:rounded-2xl border p-3 sm:p-4 lg:p-5 bg-white shadow-sm ${
                r.isCorrect ? 'border-emerald-200' : 'border-amber-200'
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-1.5 sm:mb-2">
                <span className="text-[10px] sm:text-xs font-bold text-slate-500">
                  Question {i + 1}
                </span>
                <span
                  className={`inline-flex items-center gap-1 text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full ${
                    r.isCorrect
                      ? 'bg-emerald-50 text-emerald-700'
                      : 'bg-amber-50 text-amber-700'
                  }`}
                >
                  {r.isCorrect ? <MdCheckCircle /> : <MdCancel />}
                  <span>{r.isCorrect ? '✓' : '✗'}</span>
                </span>
              </div>
              <p className="text-[11px] sm:text-xs lg:text-sm text-slate-700 mb-2 font-medium leading-relaxed">
                {questions[i]?.question}
              </p>
              <div className="text-[10px] sm:text-xs text-slate-600 bg-slate-50 p-2.5 sm:p-3 rounded-lg sm:rounded-xl border border-slate-100">
                <p className="font-semibold text-slate-800 mb-1">
                  Answer: <span className="text-indigo-600 font-bold">{r.correctAnswer}</span>
                  {!r.isCorrect && (
                    <span className="text-rose-600 ml-1.5 sm:ml-2">(Yours: {r.userAnswer})</span>
                  )}
                </p>
                <TranslatableText
                  en={r.explanation}
                  id={r.explanation}
                  className="text-slate-600"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Active Question View
  return (
    <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
      {/* Top Breadcrumb & Progress Header */}
      <div className="flex items-center justify-between gap-2">
        <Link
          href={`/learn/grammar/${lessonSlug}`}
          className="inline-flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs font-bold text-slate-500 hover:text-indigo-600 transition-colors"
        >
          <MdArrowBack className="text-sm sm:text-base" />
          <span className="hidden sm:inline">Exit to Lesson</span>
          <span className="sm:hidden">Exit</span>
        </Link>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="text-[10px] sm:text-xs font-bold text-slate-500">
            <span className="text-indigo-600">{currentMastery}%</span>
          </span>
          <StatusBadge status={currentStatus} />
        </div>
      </div>

      {/* Question Stepper Bar */}
      <div className="rounded-xl sm:rounded-2xl border border-slate-200 bg-white p-3 sm:p-4 shadow-sm">
        <div className="flex items-center justify-between text-[10px] sm:text-xs font-bold text-slate-500 mb-1.5 sm:mb-2 gap-2">
          <span>
            Q <span className="text-indigo-600 text-xs sm:text-sm">{currentIndex + 1}</span>/{totalQuestions}
          </span>
          <span className="truncate text-right">{lessonTitle}</span>
        </div>
        <div className="w-full bg-slate-100 h-1.5 sm:h-2 rounded-full overflow-hidden">
          <div
            className="bg-indigo-600 h-full rounded-full transition-all duration-300 ease-out"
            style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      {/* Main Question Card */}
      <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-4 sm:p-6 lg:p-8 shadow-md">
        <div className="flex items-center gap-1.5 sm:gap-2 text-indigo-600 font-bold text-[10px] sm:text-xs uppercase tracking-wider mb-2 sm:mb-3">
          <MdHelpOutline className="text-sm sm:text-base flex-shrink-0" />
          <span className="line-clamp-1">Choose the correct answer</span>
        </div>

        <h3 className="text-sm sm:text-base lg:text-xl font-bold text-slate-900 leading-relaxed mb-4 sm:mb-6">
          {currentQ.question}
        </h3>

        {/* Options */}
        <div className="space-y-2 sm:space-y-3">
          {currentQ.options.map((opt) => {
            const isSelected = selectedKey === opt.key;
            const hasAnswered = feedback !== null;
            const isCorrectOption = feedback && feedback.correctAnswer === opt.key;
            const isSelectedWrong = feedback && !feedback.isCorrect && isSelected;

            let optionStyle =
              'border-slate-200 bg-slate-50/70 hover:bg-indigo-50/50 hover:border-indigo-200 text-slate-800';

            if (isSelected && !hasAnswered) {
              optionStyle = 'border-indigo-600 bg-indigo-50/90 text-indigo-950 ring-2 ring-indigo-500/20';
            }

            if (hasAnswered) {
              if (isCorrectOption) {
                optionStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-bold ring-2 ring-emerald-500/30';
              } else if (isSelectedWrong) {
                optionStyle = 'border-rose-400 bg-rose-50 text-rose-950 ring-2 ring-rose-500/20';
              } else {
                optionStyle = 'border-slate-200 bg-white text-slate-400 opacity-60';
              }
            }

            return (
              <button
                key={opt.id}
                type="button"
                disabled={hasAnswered || isSubmitting}
                onClick={() => setSelectedKey(opt.key)}
                className={`w-full flex items-center gap-2.5 sm:gap-3.5 p-3 sm:p-4 rounded-xl sm:rounded-2xl border text-left transition-all ${optionStyle}`}
              >
                <div
                  className={`flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg sm:rounded-xl font-bold text-[10px] sm:text-xs flex-shrink-0 transition-colors ${
                    hasAnswered && isCorrectOption
                      ? 'bg-emerald-600 text-white'
                      : hasAnswered && isSelectedWrong
                      ? 'bg-rose-600 text-white'
                      : isSelected
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white text-slate-600 border border-slate-200'
                  }`}
                >
                  {opt.key}
                </div>
                <span className="text-xs sm:text-sm lg:text-base font-medium">{opt.text}</span>
              </button>
            );
          })}
        </div>

        {/* Feedback Display */}
        {feedback && (
          <div
            className={`mt-4 sm:mt-6 rounded-xl sm:rounded-2xl p-3.5 sm:p-5 border transition-all ${
              feedback.isCorrect
                ? 'bg-emerald-50/80 border-emerald-200 text-emerald-950'
                : 'bg-amber-50/80 border-amber-200 text-amber-950'
            }`}
          >
            <div className="flex items-center gap-1.5 sm:gap-2 font-bold text-xs sm:text-sm lg:text-base mb-1">
              {feedback.isCorrect ? (
                <>
                  <MdCheckCircle className="text-emerald-600 text-lg sm:text-xl" />
                  <span>Correct!</span>
                </>
              ) : (
                <>
                  <MdCancel className="text-amber-600 text-lg sm:text-xl" />
                  <span>Incorrect</span>
                </>
              )}
            </div>

            {!feedback.isCorrect && (
              <div className="text-[10px] sm:text-xs lg:text-sm font-semibold mb-1.5 sm:mb-2">
                <span>Yours: </span>
                <span className="text-rose-700 font-bold">{feedback.userAnswer}</span>
                <span className="mx-1.5 sm:mx-2">•</span>
                <span>Correct: </span>
                <span className="text-emerald-700 font-bold">{feedback.correctAnswer}</span>
              </div>
            )}

            <div className="text-[10px] sm:text-xs lg:text-sm leading-relaxed mt-1.5 sm:mt-2 text-slate-700 bg-white/70 p-2.5 sm:p-3 rounded-lg sm:rounded-xl border border-black/5">
              <strong className="text-slate-900">Explanation: </strong>
              {feedback.explanation}
            </div>

            <div className="mt-2 sm:mt-3 flex items-center justify-between text-[10px] sm:text-xs font-semibold text-slate-600">
              <span>Updated Mastery:</span>
              <span className="text-indigo-600 font-bold text-xs sm:text-sm">{feedback.newMastery}%</span>
            </div>
          </div>
        )}

        {/* Actions Button */}
        <div className="mt-4 sm:mt-6 flex items-center justify-end gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-slate-100">
          {!feedback ? (
            <button
              type="button"
              disabled={!selectedKey || isSubmitting}
              onClick={handleSubmitAnswer}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl bg-indigo-600 px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-white shadow-md shadow-indigo-600/20 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <span>{isSubmitting ? 'Evaluating...' : 'Submit Answer'}</span>
              <MdArrowForward className="text-sm sm:text-base" />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleNextQuestion}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl bg-indigo-600 px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-white shadow-md shadow-indigo-600/20 hover:bg-indigo-700 transition-all hover:scale-[1.02]"
            >
              <span>
                {currentIndex + 1 < totalQuestions ? 'Next Question' : 'View Summary'}
              </span>
              <MdArrowForward className="text-sm sm:text-base" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
