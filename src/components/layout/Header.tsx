import React from 'react';
import Link from 'next/link';
import { MdOutlineSchool, MdCheckCircle, MdWarningAmber } from 'react-icons/md';

interface HeaderProps {
  title?: string;
  unresolvedMistakesCount?: number;
}

export function Header({ title = 'TOEFL Mastery Studio', unresolvedMistakesCount = 0 }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex h-14 sm:h-16 w-full items-center justify-between border-b border-slate-200 bg-white/95 px-3 sm:px-6 backdrop-blur gap-2">
      <div className="flex items-center gap-2 sm:gap-3 min-w-0">
        <Link href="/dashboard" className="flex items-center gap-2 font-bold text-slate-900 group flex-shrink-0">
          <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 to-indigo-500 text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            <MdOutlineSchool className="text-lg sm:text-xl" />
          </div>
          <span className="hidden sm:inline-block font-extrabold tracking-tight text-slate-800 text-base lg:text-lg">
            TOEFL<span className="text-indigo-600">Mastery</span>
          </span>
        </Link>
        {title && (
          <div className="hidden md:flex items-center gap-2 pl-3 border-l border-slate-200 text-sm font-semibold text-slate-600 truncate">
            <span className="truncate">{title}</span>
          </div>
        )}
      </div>

      <div className="flex items-center gap-1.5 sm:gap-3 flex-shrink-0">
        {unresolvedMistakesCount > 0 && (
          <Link
            href="/review/mistakes"
            className="flex items-center gap-1 sm:gap-1.5 rounded-full bg-amber-50 px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-semibold text-amber-800 border border-amber-200 hover:bg-amber-100 transition-colors"
          >
            <MdWarningAmber className="text-amber-600 text-xs sm:text-sm" />
            <span className="hidden xs:inline">{unresolvedMistakesCount}</span>
            <span className="hidden sm:inline">Mistakes</span>
          </Link>
        )}

        <div className="flex items-center gap-1.5 sm:gap-2 rounded-full border border-slate-200 bg-slate-50/80 py-1 pl-1 pr-2 sm:pr-3 text-[10px] sm:text-xs font-medium text-slate-700">
          <div className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-indigo-600 text-[8px] sm:text-[10px] font-bold text-white uppercase">
            AM
          </div>
          <span className="hidden sm:inline">Alex M.</span>
          <span className="flex items-center text-emerald-600" title="Target: 600+">
            <MdCheckCircle className="text-xs sm:text-sm mr-0.5" />
            <span className="text-[10px] sm:text-xs">600</span>
          </span>
        </div>
      </div>
    </header>
  );
}
