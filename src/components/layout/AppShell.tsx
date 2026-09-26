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
        <main className="flex-1 pb-20 lg:pb-12 px-4 py-6 sm:px-8 max-w-7xl mx-auto w-full">
          {children}
        </main>
      </div>
      <MobileNav />
    </div>
  );
}
