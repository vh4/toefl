'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  MdDashboard,
  MdAltRoute,
  MdMenuBook,
  MdHistoryEdu,
} from 'react-icons/md';

const navItems = [
  { href: '/dashboard', label: 'Home', icon: MdDashboard },
  { href: '/roadmap', label: 'Roadmap', icon: MdAltRoute },
  { href: '/learn/grammar', label: 'Grammar', icon: MdMenuBook },
  { href: '/review/mistakes', label: 'Mistakes', icon: MdHistoryEdu },
];

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 flex h-16 items-center justify-around border-t border-slate-200 bg-white/95 backdrop-blur px-1 shadow-[0_-4px_24px_rgb(0,0,0,0.06)]">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href || (item.href !== '/dashboard' && pathname.startsWith(item.href));

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center justify-center py-1 px-2 sm:px-3 text-[10px] sm:text-[11px] font-medium transition-all rounded-xl ${
              isActive
                ? 'text-indigo-600 font-bold'
                : 'text-slate-400 hover:text-slate-700 active:text-slate-900'
            }`}
          >
            <div
              className={`flex items-center justify-center w-10 h-7 rounded-full transition-all ${
                isActive ? 'bg-indigo-50' : ''
              }`}
            >
              <Icon className={`text-xl ${isActive ? 'text-indigo-600' : 'text-slate-400'}`} />
            </div>
            <span className="mt-0.5 truncate max-w-[64px]">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
