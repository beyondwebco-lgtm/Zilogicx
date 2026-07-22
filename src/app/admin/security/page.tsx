'use client';

import React from 'react';
import { ShieldAlert } from 'lucide-react';

export default function AdminSecurityPage() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div>
        <h1 className="text-3xl font-extrabold text-white mb-2 flex items-center gap-3">
          <ShieldAlert className="w-8 h-8 text-blue-500" /> Security & Audit Logs
        </h1>
        <p className="text-slate-400 font-medium">Monitor system access, permissions, and security events.</p>
      </div>

      <div className="bg-[#050A15]/80 backdrop-blur-md border border-slate-800 rounded-2xl shadow-xl overflow-hidden p-12 text-center">
        <ShieldAlert className="w-16 h-16 text-slate-700 mx-auto mb-4 opacity-50" />
        <h2 className="text-xl font-bold text-white mb-2">Coming Soon</h2>
        <p className="text-slate-500">The advanced security and audit logging module will be activated in Phase 2.</p>
      </div>
    </div>
  );
}
