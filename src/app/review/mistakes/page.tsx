import React from 'react';
import { getMistakes } from '@/lib/services/mistakes.service';
import { AppShell } from '@/components/layout/AppShell';
import { MistakeNotebookClient } from '@/features/mistakes/components/MistakeNotebookClient';

export const revalidate = 0;

export default async function MistakesPage() {
  const groupedMistakes = await getMistakes('user_demo_toefl', false);
  const totalCount = groupedMistakes.reduce((acc, g) => acc + g.count, 0);

  return (
    <AppShell title="Mistakes Notebook" unresolvedMistakesCount={totalCount}>
      <MistakeNotebookClient initialGroups={groupedMistakes} />
    </AppShell>
  );
}
