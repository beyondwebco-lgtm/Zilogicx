'use client';

import React from 'react';
import { Headphones } from 'lucide-react';

export default function AdminSupportPage() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div>
        <h1 className="text-3xl font-extrabold text-white mb-2 flex items-center gap-3">
          <Headphones className="w-8 h-8 text-blue-500" /> Customer Support
        </h1>
        <p className="text-slate-400 font-medium">Manage support tickets, live chat, and customer resolutions.</p>
      </div>

      <div className="bg-[#050A15]/80 backdrop-blur-md border border-slate-800 rounded-2xl shadow-xl overflow-hidden p-12 text-center">
        <Headphones className="w-16 h-16 text-slate-700 mx-auto mb-4 opacity-50" />
        <h2 className="text-xl font-bold text-white mb-2">Coming Soon</h2>
        <p className="text-slate-500">The integrated customer support ticketing system will be activated in Phase 2.</p>
      </div>
    </div>
  );
}
