'use client';

import React from 'react';
import { Logo } from '@/components/Logo';

interface HeaderNavProps {
  activePage: 'Home' | 'About' | 'Services' | 'Industries' | 'Technology' | 'Partners' | 'Contact';
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
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-[#070e1b]/95 backdrop-blur-md">
      <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Logo />
        
        {/* Transparent Outer Nav Container with Subtle Border */}
        <nav className="hidden lg:flex items-center gap-1 bg-transparent border border-slate-800/60 p-1 rounded-xl">
          {navItems.map((item) => {
            const isActive = activePage === item.name;
            return (
              <a
                key={item.name}
                href={item.href}
                className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 relative ${
                  isActive
                    ? 'bg-transparent text-[#FFC700] font-extrabold border border-yellow-500/80 shadow-[0_0_12px_rgba(255,199,0,0.15)] drop-shadow-[0_0_8px_rgba(255,199,0,0.8)]'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/30'
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
          className="rounded-lg bg-[#FFC700] hover:bg-[#e5b300] px-5 py-2.5 text-sm font-extrabold text-black transition-all transform active:scale-95 shadow-md shadow-yellow-500/10"
        >
          Get Started
        </a>
      </div>
    </header>
  );
};
