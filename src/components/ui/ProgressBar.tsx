import React from 'react';

interface ProgressBarProps {
  percentage: number;
  heightClass?: string;
  showLabel?: boolean;
  className?: string;
}

export function ProgressBar({
  percentage,
  heightClass = 'h-2',
  showLabel = false,
  className = '',
}: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, percentage));

  let colorClass = 'bg-indigo-600';
  if (clamped >= 80) colorClass = 'bg-emerald-500';
  else if (clamped >= 50) colorClass = 'bg-amber-500';

  return (
    <div className={`w-full ${className}`}>
      {showLabel && (
        <div className="flex justify-between items-center text-xs text-slate-500 mb-1">
          <span>Mastery</span>
          <span className="font-semibold text-slate-700">{clamped}%</span>
        </div>
      )}
      <div className={`w-full bg-slate-200 rounded-full overflow-hidden ${heightClass}`}>
        <div
          className={`${heightClass} ${colorClass} rounded-full transition-all duration-500 ease-out`}
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  );
}
