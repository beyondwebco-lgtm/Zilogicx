'use client';

import React, { Suspense } from 'react';
import Link from 'next/link';
import { 
  LayoutDashboard, 
  Inbox, 
  Users, 
  Truck,
  FileCode2,
  ChevronRight,
  LogOut,
  ShieldAlert,
  FileText
} from 'lucide-react';
import { Logo } from '@/components/Logo';
import { createClient } from '@/utils/supabase/client';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';



function AdminLayoutInner({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const supabase = createClient();

  const [categories, setCategories] = useState<string[]>(['general', 'demo', 'security', 'd2c', 'retail']);

  useEffect(() => {
    async function fetchCategories() {
      const { data } = await supabase.from('form_configs').select('category');
      if (data) {
        const dynamicCats = data.map(d => d.category);
        setCategories(prev => Array.from(new Set([...prev, ...dynamicCats])));
      }
    }
    fetchCategories();
  }, []);

  const getLabel = (cat: string) => {
    const labels: Record<string, string> = {
      general: 'General Inquiries',
      demo: 'Demo Requests',
      security: 'Security Issues',
      d2c: 'D2C / E-commerce',
      retail: 'Retail Inquiries'
    };
    if (labels[cat]) return labels[cat];
    return cat.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  };

  const sidebarLinks = [
    { href: '/admin', label: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5" /> },
    { href: '/admin/inquiries', label: 'All Inquiries', icon: <Inbox className="w-5 h-5" /> },
    ...categories.filter(c => c !== 'partner').map(cat => ({
      href: `/admin/inquiries?type=${cat}`,
      label: getLabel(cat),
      icon: <Inbox className="w-4 h-4 ml-2 opacity-70" />
    })),
    { href: '/admin/partners', label: 'Partner Approvals', icon: <Users className="w-5 h-5" /> },
    { href: '/admin/forms', label: 'Form Builder', icon: <FileCode2 className="w-5 h-5" /> },
    { href: '/admin/tracking', label: 'Live Tracking', icon: <Truck className="w-5 h-5" /> },
    { href: '/admin/legal', label: 'Legal Pages', icon: <FileText className="w-5 h-5" /> },
  ];

  // If we are on the login page, don't show the sidebar layout
  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/admin/login');
    router.refresh();
  };

  return (
    <div className="min-h-screen bg-[#0B152A] flex">
      {/* Sidebar */}
      <aside className="w-72 bg-[#050A15] border-r border-slate-800 flex flex-col hidden md:flex shrink-0 shadow-2xl z-10">
        <div className="p-6 border-b border-slate-800">
          <Logo />
          <div className="mt-2 text-xs font-bold text-slate-500 uppercase tracking-widest font-mono">
            Admin Portal
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1.5 overflow-y-auto overflow-x-hidden custom-scrollbar">
          {sidebarLinks.map((link) => {
            let isActive = false;
            
            if (link.href === '/admin') {
              isActive = pathname === '/admin';
            } else if (link.href.includes('?')) {
              // It's a query param link
              const [linkPath, query] = link.href.split('?');
              const urlParams = new URLSearchParams(query);
              const type = urlParams.get('type');
              isActive = pathname === linkPath && searchParams.get('type') === type;
            } else {
              isActive = pathname.startsWith(link.href);
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-extrabold transition-all group ${
                  isActive 
                    ? 'bg-blue-600/10 text-white border border-blue-500/20 shadow-inner' 
                    : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200 border border-transparent'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`${isActive ? 'text-blue-500' : 'text-slate-500 group-hover:text-slate-300'} transition-colors`}>
                    {link.icon}
                  </span>
                  {link.label}
                </div>
                {isActive && <ChevronRight className="w-4 h-4 text-blue-500" />}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-800">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-extrabold text-slate-400 hover:bg-red-500/10 hover:text-red-400 transition-all border border-transparent hover:border-red-500/20"
          >
            <LogOut className="w-5 h-5" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-h-screen overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-[#0B152A]/80 backdrop-blur-md border-b border-slate-800 flex items-center justify-between px-8 sticky top-0 z-20">
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
            <span className="text-sm font-bold text-slate-300">System Secure & Online</span>
          </div>
          <div className="flex items-center gap-4">
             <div className="flex flex-col items-end">
               <span className="text-sm font-bold text-white">Administrator</span>
               <span className="text-xs font-medium text-slate-400">Super Admin Access</span>
             </div>
             <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-[#FFC700] p-0.5">
               <div className="w-full h-full bg-[#0B152A] rounded-full border-2 border-transparent flex items-center justify-center">
                 <ShieldAlert className="w-4 h-4 text-[#FFC700]" />
               </div>
             </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 p-8 overflow-y-auto">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0B152A] flex items-center justify-center text-white">Loading Admin...</div>}>
      <AdminLayoutInner>{children}</AdminLayoutInner>
    </Suspense>
  );
}
