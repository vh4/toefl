import React from 'react';
import Link from 'next/link';
import {
  MdOutlineSchool,
  MdArrowForward,
  MdAutoAwesome,
  MdCheckCircle,
  MdHistoryEdu,
  MdAltRoute,
  MdMenuBook,
} from 'react-icons/md';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-50">
      {/* Top Bar */}
      <header className="flex h-16 w-full items-center justify-between border-b border-slate-200 bg-white/90 px-6 backdrop-blur">
        <div className="flex items-center gap-2 font-bold text-slate-900">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-600/20">
            <MdOutlineSchool className="text-xl" />
          </div>
          <span className="font-extrabold tracking-tight text-slate-900 text-lg">
            TOEFL<span className="text-indigo-600">Mastery</span>
          </span>
        </div>

        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-xs font-bold text-white shadow-md shadow-indigo-600/20 hover:bg-indigo-700 transition-all hover:scale-[1.02]"
        >
          <span>Open Dashboard</span>
          <MdArrowForward className="text-sm" />
        </Link>
      </header>

      {/* Hero Section */}
      <main className="flex-1 max-w-5xl mx-auto px-6 py-12 sm:py-16 flex flex-col items-center text-center space-y-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/80 px-4 py-1.5 text-xs font-bold text-indigo-700 shadow-sm">
          <MdAutoAwesome className="text-sm text-indigo-600" />
          <span>PostgreSQL-Powered Adaptive Learning Engine</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 max-w-3xl leading-tight">
          Achieve <span className="text-indigo-600">110+ on TOEFL</span> with Precision Spaced Mastery
        </h1>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
          Master high-yield English grammar, retain academic vocabulary, resolve mistaken patterns systematically, and track real-time progress stored in PostgreSQL.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          <Link
            href="/dashboard"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-2xl bg-indigo-600 px-8 py-4 text-sm font-extrabold text-white shadow-xl shadow-indigo-600/25 hover:bg-indigo-700 transition-all hover:scale-[1.02]"
          >
            <span>Start Learning Now</span>
            <MdArrowForward className="text-lg" />
          </Link>

          <Link
            href="/roadmap"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-7 py-4 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors shadow-sm"
          >
            <MdAltRoute className="text-lg text-indigo-600" />
            <span>View 9-Section Roadmap</span>
          </Link>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 text-left w-full">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 text-xl font-bold mb-4">
              <MdMenuBook />
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-1">
              Grammar Rule Formulas
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Formulas, grammatical breakdown, and authentic academic TOEFL excerpts for all core syntactic patterns.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 text-xl font-bold mb-4">
              <MdCheckCircle />
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-1">
              Dynamic Mini Tests
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Instant feedback, atomic attempt logging, and PostgreSQL mastery updates with configurable status thresholds.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600 text-xl font-bold mb-4">
              <MdHistoryEdu />
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-1">
              Mistake Notebook
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Dedicated error log where unresolved mistakes are highlighted, reviewed, and retried until fully mastered.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-6 px-6 text-center text-xs text-slate-500">
        <p>
          TOEFL Mastery Studio • Powered by Next.js, Prisma ORM, and Supabase PostgreSQL.
        </p>
      </footer>
    </div>
  );
}
