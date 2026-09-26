import React from 'react';
import Link from 'next/link';
import { MdOutlineSchool, MdCheckCircle, MdWarningAmber } from 'react-icons/md';

interface HeaderProps {
  title?: string;
  unresolvedMistakesCount?: number;
}

export function Header({ title = 'TOEFL Mastery Studio', unresolvedMistakesCount = 0 }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-slate-200 bg-white/95 px-4 backdrop-blur sm:px-6">
      <div className="flex items-center gap-3">
        <Link href="/dashboard" className="flex items-center gap-2 font-bold text-slate-900 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 to-indigo-500 text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            <MdOutlineSchool className="text-xl" />
          </div>
          <span className="hidden sm:inline-block font-extrabold tracking-tight text-slate-800 text-lg">
            TOEFL<span className="text-indigo-600">Mastery</span>
          </span>
        </Link>
        {title && (
          <div className="hidden md:flex items-center gap-2 pl-4 border-l border-slate-200 text-sm font-semibold text-slate-600">
            <span>{title}</span>
          </div>
        )}
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        {unresolvedMistakesCount > 0 && (
          <Link
            href="/review/mistakes"
            className="flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800 border border-amber-200 hover:bg-amber-100 transition-colors"
          >
            <MdWarningAmber className="text-amber-600 text-sm" />
            <span>{unresolvedMistakesCount} Mistakes</span>
          </Link>
        )}

        <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50/80 py-1 pl-1 pr-3 text-xs font-medium text-slate-700">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-[10px] font-bold text-white uppercase">
            AM
          </div>
          <span className="hidden sm:inline">Alex M.</span>
          <span className="flex items-center text-emerald-600" title="Target: 110+">
            <MdCheckCircle className="text-sm mr-0.5" />
            <span>Target 110</span>
          </span>
        </div>
      </div>
    </header>
  );
}
