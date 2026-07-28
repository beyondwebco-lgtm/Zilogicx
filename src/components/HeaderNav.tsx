'use client';

import React, { useState } from 'react';
import { Logo } from '@/components/Logo';
import { Menu, X } from 'lucide-react';

interface HeaderNavProps {
  activePage: 'Home' | 'About' | 'Services' | 'Industries' | 'Technology' | 'Partners' | 'Contact' | 'terms' | string;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({ activePage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        
        {/* Transparent Outer Nav Container with Subtle Border (Desktop) */}
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

        {/* CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a 
            href="/contact?tab=general" 
            className="hidden sm:inline-flex rounded-lg bg-[#FFC700] hover:bg-[#e5b300] px-5 py-2.5 text-sm font-extrabold text-slate-900 transition-all transform active:scale-95 shadow-md shadow-yellow-500/20"
          >
            Get Started
          </a>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl border-2 border-[#070e1b] bg-amber-100/50 text-slate-900 hover:bg-amber-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-amber-50 border-b-2 border-[#070e1b] px-4 pt-2 pb-6 space-y-3 animate-in slide-in-from-top-4 duration-300 shadow-xl">
          <div className="flex flex-col gap-1.5 p-2 bg-amber-100/40 border-2 border-[#070e1b] rounded-2xl">
            {navItems.map((item) => {
              const isActive = activePage === item.name;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 text-sm font-bold rounded-xl transition-all ${
                    isActive
                      ? 'bg-slate-900 text-white font-extrabold shadow-md'
                      : 'text-slate-800 hover:bg-amber-200/60'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </div>
          <a 
            href="/contact?tab=general" 
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full text-center rounded-xl bg-[#FFC700] hover:bg-[#e5b300] py-3 text-sm font-extrabold text-slate-900 transition-all shadow-md"
          >
            Get Started
          </a>
        </div>
      )}
    </header>
  );
};
