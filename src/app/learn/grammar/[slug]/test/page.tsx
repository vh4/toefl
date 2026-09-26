import React from 'react';
import { notFound } from 'next/navigation';
import { getLessonBySlug } from '@/lib/services/grammar.service';
import { AppShell } from '@/components/layout/AppShell';
import { MiniTestClient } from '@/features/grammar/components/MiniTestClient';

export const revalidate = 0;

interface TestPageProps {
  params: Promise<{ slug: string }>;
}

export default async function TestPage({ params }: TestPageProps) {
  const { slug } = await params;
  const lesson = await getLessonBySlug(slug);

  if (!lesson || lesson.questions.length === 0) {
    notFound();
  }

  return (
    <AppShell title={`${lesson.title} - Mini Test`}>
      <MiniTestClient
        lessonId={lesson.id}
        lessonTitle={lesson.title}
        lessonSlug={lesson.slug}
        initialMastery={lesson.mastery}
        questions={lesson.questions}
      />
    </AppShell>
  );
}
