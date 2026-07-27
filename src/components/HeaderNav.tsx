'use client';

import React from 'react';
import { Logo } from '@/components/Logo';

interface HeaderNavProps {
  activePage: 'Home' | 'About' | 'Services' | 'Industries' | 'Technology' | 'Partners' | 'Contact' | 'terms';
}

export const HeaderNav: React.FC<HeaderNavProps> = ({ activePage }) => {
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Industries', href: '/industries' },
    { name: 'Technology', href: '/technology' },
    { name: 'Partners', href: '/partners' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-[#070e1b] bg-amber-50/95 backdrop-blur-md shadow-sm">
      <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Logo />
        
        {/* Transparent Outer Nav Container with Subtle Border */}
        <nav className="hidden lg:flex items-center gap-1 bg-amber-100/40 border-2 border-[#070e1b] p-1 rounded-xl">
          {navItems.map((item) => {
            const isActive = activePage === item.name;
            return (
              <a
                key={item.name}
                href={item.href}
                className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 relative ${
                  isActive
                    ? 'bg-slate-900 text-white font-extrabold shadow-md'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* CTA Button */}
        <a 
          href="/contact?tab=general" 
          className="rounded-lg bg-[#FFC700] hover:bg-[#e5b300] px-5 py-2.5 text-sm font-extrabold text-slate-900 transition-all transform active:scale-95 shadow-md shadow-yellow-500/20"
        >
          Get Started
        </a>
      </div>
    </header>
  );
};

