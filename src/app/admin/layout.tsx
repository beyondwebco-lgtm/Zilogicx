'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Inbox, 
  Users, 
  Truck, 
  CircleDollarSign, 
  ShieldAlert, 
  Headphones, 
  MapPin,
  LogOut,
  ChevronRight
} from 'lucide-react';
import { Logo } from '@/components/Logo';
import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';

const sidebarLinks = [
  { href: '/admin', label: 'Dashboard Overview', icon: <LayoutDashboard className="w-5 h-5" /> },
  { href: '/admin/inquiries', label: 'Inquiries', icon: <Inbox className="w-5 h-5" /> },
  { href: '/admin/partners', label: 'Partner Approvals', icon: <Users className="w-5 h-5" /> },
  { href: '/admin/delivery', label: 'Delivery Partners', icon: <Truck className="w-5 h-5" /> },
  { href: '/admin/finance', label: 'Finance & Settlement', icon: <CircleDollarSign className="w-5 h-5" /> },
  { href: '/admin/security', label: 'Security & Audit Logs', icon: <ShieldAlert className="w-5 h-5" /> },
  { href: '/admin/support', label: 'Customer Support', icon: <Headphones className="w-5 h-5" /> },
  { href: '/admin/tracking', label: 'Live Tracking', icon: <MapPin className="w-5 h-5" /> },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const supabase = createClient();

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
          <Link href="/">
            <Logo />
          </Link>
          <div className="mt-2 text-xs font-bold text-slate-500 uppercase tracking-widest font-mono">
            Admin Portal
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1.5 overflow-y-auto overflow-x-hidden custom-scrollbar">
          {sidebarLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/admin' && pathname.startsWith(link.href));
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
