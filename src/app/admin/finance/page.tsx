'use client';

import React from 'react';
import { CircleDollarSign } from 'lucide-react';

export default function AdminFinancePage() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div>
        <h1 className="text-3xl font-extrabold text-white mb-2 flex items-center gap-3">
          <CircleDollarSign className="w-8 h-8 text-green-500" /> Finance & Settlement
        </h1>
        <p className="text-slate-400 font-medium">View financial reports, partner payouts, and system revenue.</p>
      </div>

      <div className="bg-[#050A15]/80 backdrop-blur-md border border-slate-800 rounded-2xl shadow-xl overflow-hidden p-12 text-center">
        <CircleDollarSign className="w-16 h-16 text-slate-700 mx-auto mb-4 opacity-50" />
        <h2 className="text-xl font-bold text-white mb-2">Coming Soon</h2>
        <p className="text-slate-500">The finance and settlement dashboard will be activated in Phase 2.</p>
      </div>
    </div>
  );
}
