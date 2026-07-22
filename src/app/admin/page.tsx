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
      <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent)]"></div>
        <h1 className="text-3xl font-black mb-2">Welcome to Zilogicx Admin Control</h1>
        <p className="text-blue-100 font-medium text-sm max-w-xl">
          Monitor your logistics ecosystem, manage retail partner onboarding requests, and review general inquiries.
        </p>
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
