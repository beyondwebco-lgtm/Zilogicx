'use client';

import React, { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { 
  Inbox, 
  Users, 
  Truck, 
  Headphones, 
  MapPin, 
  TrendingUp, 
  Clock, 
  CheckCircle2,
  Calendar
} from 'lucide-react';
import Link from 'next/link';

export default function AdminDashboardPage() {
  const [stats, setStats] = useState({
    inquiries: 0,
    partners: 0,
    newInquiries: 0,
    pendingPartners: 0,
  });
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    fetchStats();
  }, []);

  async function fetchStats() {
    try {
      const [inquiriesRes, partnersRes] = await Promise.all([
        supabase.from('inquiries').select('*'),
        supabase.from('partner_applications').select('*')
      ]);

      const inquiriesData = inquiriesRes.data || [];
      const partnersData = partnersRes.data || [];

      setStats({
        inquiries: inquiriesData.length,
        partners: partnersData.length,
        newInquiries: inquiriesData.filter(i => i.status === 'new').length,
        pendingPartners: partnersData.filter(p => p.status === 'pending').length,
      });
    } catch (err) {
      console.error('Error fetching dashboard stats:', err);
    } finally {
      setLoading(false);
    }
  }

  const quickLinks = [
    { name: 'General Inquiries', href: '/admin/inquiries', icon: Inbox, count: stats.newInquiries, color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { name: 'Partner Registrations', href: '/admin/partners', icon: Users, count: stats.pendingPartners, color: 'text-[#FFC700]', bg: 'bg-[#FFC700]/10' },
    { name: 'Delivery Partners', href: '/admin/delivery', icon: Truck, count: 4, color: 'text-green-500', bg: 'bg-green-500/10' },
    { name: 'Customer Support', href: '/admin/support', icon: Headphones, count: 2, color: 'text-purple-500', bg: 'bg-purple-500/10' },
    { name: 'Live GPS Tracking', href: '/admin/tracking', icon: MapPin, count: 3, color: 'text-red-500', bg: 'bg-red-500/10' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* Welcome Banner */}
      <div className="relative rounded-3xl bg-gradient-to-br from-[#060B18] via-[#0A132A] to-[#12224A] p-6 md:p-8 border border-slate-800/60 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden group">
        {/* Animated Background Orbs */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl group-hover:bg-blue-600/20 transition-colors duration-1000"></div>
        <div className="absolute bottom-0 right-40 -mb-20 w-80 h-80 bg-[#FFC700]/5 rounded-full blur-3xl group-hover:bg-[#FFC700]/10 transition-colors duration-1000 delay-300"></div>
        
        {/* Subtle Grid Pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-wide uppercase mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              System Online
            </div>
            <h1 className="text-2xl md:text-4xl font-black text-white mb-2 tracking-tight">
              Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-100">Zilogicx Admin</span>
            </h1>
            <p className="text-slate-400 font-medium text-sm md:text-base max-w-xl leading-relaxed">
              Monitor your logistics ecosystem, manage retail partner onboarding requests, and review general inquiries from a single command center.
            </p>
          </div>
          
          <div className="hidden lg:block relative z-10">
            <div className="w-24 h-24 bg-gradient-to-tr from-blue-600/10 to-[#FFC700]/10 rounded-2xl border border-white/5 flex items-center justify-center backdrop-blur-md transform rotate-12 group-hover:rotate-6 transition-transform duration-500 shadow-xl">
               <TrendingUp className="w-12 h-12 text-blue-500/50" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        
        {/* Card 1: New Inquiries */}
        <div className="bg-[#050A15]/80 border border-slate-800 rounded-2xl p-6 shadow-xl flex items-center justify-between">
          <div>
            <span className="text-slate-400 text-xs font-bold uppercase tracking-wider block mb-1">New Inquiries</span>
            <span className="text-3xl font-black text-white">{loading ? '...' : stats.newInquiries}</span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-500 flex items-center justify-center">
            <Inbox className="w-6 h-6" />
          </div>
        </div>

        {/* Card 2: Pending Partners */}
        <div className="bg-[#050A15]/80 border border-slate-800 rounded-2xl p-6 shadow-xl flex items-center justify-between">
          <div>
            <span className="text-slate-400 text-xs font-bold uppercase tracking-wider block mb-1">Pending Partners</span>
            <span className="text-3xl font-black text-[#FFC700]">{loading ? '...' : stats.pendingPartners}</span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-[#FFC700]/10 border border-[#FFC700]/20 text-[#FFC700] flex items-center justify-center">
            <Users className="w-6 h-6" />
          </div>
        </div>

        {/* Card 3: Total Inquiries */}
        <div className="bg-[#050A15]/80 border border-slate-800 rounded-2xl p-6 shadow-xl flex items-center justify-between">
          <div>
            <span className="text-slate-400 text-xs font-bold uppercase tracking-wider block mb-1">Total Inquiries</span>
            <span className="text-3xl font-black text-white">{loading ? '...' : stats.inquiries}</span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-slate-800 text-slate-400 flex items-center justify-center">
            <Clock className="w-6 h-6" />
          </div>
        </div>

        {/* Card 4: Active Merchants */}
        <div className="bg-[#050A15]/80 border border-slate-800 rounded-2xl p-6 shadow-xl flex items-center justify-between">
          <div>
            <span className="text-slate-400 text-xs font-bold uppercase tracking-wider block mb-1">Total Partners</span>
            <span className="text-3xl font-black text-white">{loading ? '...' : stats.partners}</span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-slate-800 text-slate-400 flex items-center justify-center">
            <CheckCircle2 className="w-6 h-6" />
          </div>
        </div>

      </div>

      {/* Navigation Shortcut Grid */}
      <div>
        <h3 className="text-lg font-extrabold text-white mb-4">Operations Management</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quickLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link 
                key={link.name} 
                href={link.href}
                className="bg-[#050A15]/80 border border-slate-800 hover:border-blue-500/50 p-6 rounded-2xl shadow-xl flex items-center justify-between transition-all duration-355 hover:-translate-y-1 block"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl ${link.bg} ${link.color} border border-white/5 flex items-center justify-center`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-0.5">{link.name}</h4>
                    <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Access Panel</span>
                  </div>
                </div>
                {link.count > 0 && (
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-black ${link.bg} ${link.color} border border-white/5`}>
                    {link.count}
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      </div>

    </div>
  );
}
