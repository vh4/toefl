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
  { href: '/dashboard', label: 'Dashboard', icon: MdDashboard },
  { href: '/roadmap', label: 'Roadmap', icon: MdAltRoute },
  { href: '/learn/grammar', label: 'Grammar', icon: MdMenuBook },
  { href: '/review/mistakes', label: 'Mistakes', icon: MdHistoryEdu },
];

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 flex h-16 items-center justify-around border-t border-slate-200 bg-white/95 backdrop-blur px-2 shadow-lg">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href || (item.href !== '/dashboard' && pathname.startsWith(item.href));

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center justify-center py-1 px-3 text-[11px] font-medium transition-colors ${
              isActive ? 'text-indigo-600 font-bold' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <Icon className={`text-xl mb-0.5 ${isActive ? 'text-indigo-600 scale-110' : 'text-slate-400'}`} />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
