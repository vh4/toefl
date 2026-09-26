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
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 text-center shadow-lg">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 text-3xl shadow-inner mb-4">
            <MdEmojiEvents />
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold mb-2">
            <span>Test Completed</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {lessonTitle} Mini Test
          </h2>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Score
              </div>
              <div className="text-2xl font-extrabold text-slate-900 mt-1">
                {correctCount} / {totalQuestions}
              </div>
              <div className="text-xs font-semibold text-slate-500 mt-0.5">
                {accuracy}% Accuracy
              </div>
            </div>

            <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Updated Mastery
              </div>
              <div className="text-2xl font-extrabold text-indigo-600 mt-1">
                {currentMastery}%
              </div>
              <div className="text-xs font-semibold text-slate-500 mt-0.5">
                Saved to Database
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1 rounded-2xl bg-slate-50 p-4 border border-slate-100">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Status
              </div>
              <div className="mt-2">
                <StatusBadge status={currentStatus} />
              </div>
            </div>
          </div>

          <div className="mt-6 mb-6">
            <ProgressBar percentage={currentMastery} showLabel heightClass="h-2.5" />
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-100">
            {mistakesCount > 0 && (
              <Link
                href="/review/mistakes"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-4 py-3 text-xs font-bold text-white shadow-md shadow-amber-500/20 hover:bg-amber-600 transition-colors"
              >
                <MdHistoryEdu className="text-base" />
                <span>Review {mistakesCount} Mistake{mistakesCount > 1 ? 's' : ''}</span>
              </Link>
            )}

            <button
              onClick={handleRetake}
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              <MdRefresh className="text-base text-slate-500" />
              <span>Retake Test</span>
            </button>

            <Link
              href="/dashboard"
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-xs font-bold text-white shadow-md shadow-indigo-600/20 hover:bg-indigo-700 transition-colors"
            >
              <MdDashboard className="text-base" />
              <span>Back to Dashboard</span>
            </Link>
          </div>
        </div>

        {/* Answer Breakdown */}
        <div className="space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 px-1">
            Question Review & Explanations
          </div>
          {results.map((r, i) => (
            <div
              key={r.questionId}
              className={`rounded-2xl border p-4 sm:p-5 bg-white shadow-sm ${
                r.isCorrect ? 'border-emerald-200' : 'border-amber-200'
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-bold text-slate-500">
                  Question {i + 1}
                </span>
                <span
                  className={`inline-flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-full ${
                    r.isCorrect
                      ? 'bg-emerald-50 text-emerald-700'
                      : 'bg-amber-50 text-amber-700'
                  }`}
                >
                  {r.isCorrect ? <MdCheckCircle /> : <MdCancel />}
                  <span>{r.isCorrect ? 'Correct' : 'Incorrect'}</span>
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 mb-2 font-medium">
                {questions[i]?.question}
              </p>
              <div className="text-xs text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100">
                <p className="font-semibold text-slate-800 mb-1">
                  Answer: <span className="text-indigo-600 font-bold">{r.correctAnswer}</span>
                  {!r.isCorrect && (
                    <span className="text-rose-600 ml-2">(Your answer: {r.userAnswer})</span>
                  )}
                </p>
                <p className="text-slate-600">{r.explanation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Active Question View
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Top Breadcrumb & Progress Header */}
      <div className="flex items-center justify-between">
        <Link
          href={`/learn/grammar/${lessonSlug}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-indigo-600 transition-colors"
        >
          <MdArrowBack className="text-base" />
          <span>Exit to Lesson</span>
        </Link>

        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-500">
            Mastery: <span className="text-indigo-600">{currentMastery}%</span>
          </span>
          <StatusBadge status={currentStatus} />
        </div>
      </div>

      {/* Question Stepper Bar */}
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-2">
          <span>
            Question <span className="text-indigo-600 text-sm">{currentIndex + 1}</span> of{' '}
            {totalQuestions}
          </span>
          <span>{lessonTitle}</span>
        </div>
        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
          <div
            className="bg-indigo-600 h-2 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      {/* Main Question Card */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-md">
        <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase tracking-wider mb-3">
          <MdHelpOutline className="text-base" />
          <span>Choose the correct grammatically sound completion</span>
        </div>

        <h3 className="text-base sm:text-xl font-bold text-slate-900 leading-relaxed mb-6">
          {currentQ.question}
        </h3>

        {/* Options */}
        <div className="space-y-3">
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
                className={`w-full flex items-center gap-3.5 p-4 rounded-2xl border text-left transition-all ${optionStyle}`}
              >
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-xl font-bold text-xs flex-shrink-0 transition-colors ${
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
                <span className="text-sm sm:text-base font-medium">{opt.text}</span>
              </button>
            );
          })}
        </div>

        {/* Feedback Display */}
        {feedback && (
          <div
            className={`mt-6 rounded-2xl p-5 border transition-all ${
              feedback.isCorrect
                ? 'bg-emerald-50/80 border-emerald-200 text-emerald-950'
                : 'bg-amber-50/80 border-amber-200 text-amber-950'
            }`}
          >
            <div className="flex items-center gap-2 font-bold text-sm sm:text-base mb-1">
              {feedback.isCorrect ? (
                <>
                  <MdCheckCircle className="text-emerald-600 text-xl" />
                  <span>Correct!</span>
                </>
              ) : (
                <>
                  <MdCancel className="text-amber-600 text-xl" />
                  <span>Incorrect</span>
                </>
              )}
            </div>

            {!feedback.isCorrect && (
              <div className="text-xs sm:text-sm font-semibold mb-2">
                <span>Your answer: </span>
                <span className="text-rose-700 font-bold">{feedback.userAnswer}</span>
                <span className="mx-2">•</span>
                <span>Correct answer: </span>
                <span className="text-emerald-700 font-bold">{feedback.correctAnswer}</span>
              </div>
            )}

            <div className="text-xs sm:text-sm leading-relaxed mt-2 text-slate-700 bg-white/70 p-3 rounded-xl border border-black/5">
              <strong className="text-slate-900">Explanation: </strong>
              {feedback.explanation}
            </div>

            <div className="mt-3 flex items-center justify-between text-xs font-semibold text-slate-600">
              <span>Updated Lesson Mastery:</span>
              <span className="text-indigo-600 font-bold text-sm">{feedback.newMastery}%</span>
            </div>
          </div>
        )}

        {/* Actions Button */}
        <div className="mt-6 flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
          {!feedback ? (
            <button
              type="button"
              disabled={!selectedKey || isSubmitting}
              onClick={handleSubmitAnswer}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-bold text-white shadow-md shadow-indigo-600/20 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <span>{isSubmitting ? 'Evaluating...' : 'Submit Answer'}</span>
              <MdArrowForward className="text-base" />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleNextQuestion}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-bold text-white shadow-md shadow-indigo-600/20 hover:bg-indigo-700 transition-all hover:scale-[1.02]"
            >
              <span>
                {currentIndex + 1 < totalQuestions ? 'Next Question' : 'View Test Summary'}
              </span>
              <MdArrowForward className="text-base" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
