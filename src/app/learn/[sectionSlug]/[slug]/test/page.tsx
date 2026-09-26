import React from 'react';
import { notFound } from 'next/navigation';
import { getLessonBySlug } from '@/lib/services/grammar.service';
import { AppShell } from '@/components/layout/AppShell';
import { MiniTestClient } from '@/features/grammar/components/MiniTestClient';

export const revalidate = 0;

interface UniversalTestPageProps {
  params: Promise<{ sectionSlug: string; slug: string }>;
}

export default async function UniversalTestPage({ params }: UniversalTestPageProps) {
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
