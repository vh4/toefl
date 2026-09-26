'use client';

import React, { useState } from 'react';
import { MdTranslate } from 'react-icons/md';

interface TranslatableTextProps {
  en: string;
  id: string;
  className?: string;
  translationClassName?: string;
  /** Render the English text as italic (useful for example sentences) */
  italic?: boolean;
  /** Show the toggle inline vs as a separate line */
  inline?: boolean;
}

export function TranslatableText({
  en,
  id,
  className = '',
  translationClassName = '',
  italic = false,
  inline = false,
}: TranslatableTextProps) {
  const [showTranslation, setShowTranslation] = useState(false);

  return (
    <span className={`${inline ? 'inline' : 'block'} ${className}`}>
      <span className={`${italic ? 'italic' : ''}`}>{en}</span>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setShowTranslation((prev) => !prev);
        }}
        className="inline-flex items-center justify-center ml-1.5 h-5 w-5 rounded-md bg-indigo-50 hover:bg-indigo-100 text-indigo-600 transition-all hover:scale-110 align-middle flex-shrink-0 border border-indigo-100 cursor-pointer"
        title={showTranslation ? 'Sembunyikan terjemahan' : 'Tampilkan terjemahan'}
        aria-label="Toggle translation"
      >
        <MdTranslate className="text-xs" />
      </button>
      {showTranslation && (
        <span
          className={`block text-xs text-indigo-600/80 mt-0.5 pl-0 leading-relaxed font-normal not-italic ${translationClassName}`}
        >
          🇮🇩 {id}
        </span>
      )}
    </span>
  );
}

/**
 * Batch translatable content — wraps multiple sentences with individual toggles
 */
interface TranslatableParagraphProps {
  sentences: Array<{ en: string; id: string }>;
  className?: string;
}

export function TranslatableParagraph({ sentences, className = '' }: TranslatableParagraphProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      {sentences.map((s, i) => (
        <TranslatableText key={i} en={s.en} id={s.id} />
      ))}
    </div>
  );
}
