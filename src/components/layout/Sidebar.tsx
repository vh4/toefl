'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  MdDashboard,
  MdAltRoute,
  MdMenuBook,
  MdHistoryEdu,
  MdAutoAwesome,
  MdFormatQuote,
} from 'react-icons/md';

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: MdDashboard },
  { href: '/roadmap', label: 'Roadmap', icon: MdAltRoute },
  { href: '/learn/grammar', label: 'Grammar', icon: MdMenuBook },
  { href: '/review/mistakes', label: 'Mistakes Notebook', icon: MdHistoryEdu },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex w-64 flex-col border-r border-slate-200 bg-white min-h-[calc(100vh-4rem)] p-4 justify-between flex-shrink-0">
      <div className="space-y-6">
        <div>
          <div className="px-3 pb-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">
            Study Workspace
          </div>
          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href || (item.href !== '/dashboard' && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-indigo-50 text-indigo-700 shadow-sm shadow-indigo-100/50'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <Icon className={`text-xl ${isActive ? 'text-indigo-600' : 'text-slate-400'}`} />
                  <span className="truncate">{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="rounded-2xl bg-gradient-to-br from-indigo-50 to-slate-50 border border-indigo-100 p-4 shadow-sm">
          <div className="flex items-center gap-2 text-indigo-700 font-bold text-xs uppercase tracking-wider mb-2">
            <MdAutoAwesome className="text-sm" />
            <span>Mastery Focus</span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            TOEFL grammar items test high-yield rules. Achieving <span className="font-semibold text-indigo-700">80%+ mastery</span> unlocks reading synthesis speed.
          </p>
        </div>
      </div>

      <div className="pt-4 border-t border-slate-100">
        <div className="flex items-center gap-2 text-xs text-slate-400 italic">
          <MdFormatQuote className="text-base text-slate-300 flex-shrink-0" />
          <span>Consistency is the key to 600+</span>
        </div>
      </div>
    </aside>
  );
}
