import React from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { MobileNav } from './MobileNav';

interface AppShellProps {
  children: React.ReactNode;
  title?: string;
  unresolvedMistakesCount?: number;
}

export function AppShell({
  children,
  title,
  unresolvedMistakesCount = 0,
}: AppShellProps) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Header title={title} unresolvedMistakesCount={unresolvedMistakesCount} />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 pb-24 lg:pb-12 px-3 py-4 sm:px-6 sm:py-6 lg:px-8 max-w-7xl mx-auto w-full min-w-0">
          {children}
        </main>
      </div>
      <MobileNav />
    </div>
  );
}
