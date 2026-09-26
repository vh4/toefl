import React from 'react';

interface StatusBadgeProps {
  status: string; // MASTERED | NEEDS_REVIEW | LEARNING | NOT_STARTED | COMPLETED | IN_PROGRESS
  className?: string;
}

export function StatusBadge({ status, className = '' }: StatusBadgeProps) {
  const norm = status.toUpperCase();

  let label = status;
  let styles = 'bg-slate-100 text-slate-700 border-slate-200';

  if (norm === 'MASTERED' || norm === 'COMPLETED') {
    label = 'Mastered';
    styles = 'bg-emerald-50 text-emerald-700 border-emerald-200 font-semibold';
  } else if (norm === 'NEEDS_REVIEW') {
    label = 'Needs Review';
    styles = 'bg-amber-50 text-amber-700 border-amber-200 font-semibold';
  } else if (norm === 'LEARNING' || norm === 'IN_PROGRESS') {
    label = 'Learning';
    styles = 'bg-indigo-50 text-indigo-700 border-indigo-200 font-medium';
  } else if (norm === 'NOT_STARTED') {
    label = 'Not Started';
    styles = 'bg-slate-100 text-slate-500 border-slate-200';
  } else if (norm === 'LOCKED') {
    label = 'Locked';
    styles = 'bg-slate-100 text-slate-400 border-slate-200';
  }

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs border ${styles} ${className}`}
    >
      {label}
    </span>
  );
}
