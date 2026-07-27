'use client';

import React, { useState } from 'react';
import { Shield, ShieldAlert, Terminal, Eye, Filter, RefreshCw, Key } from 'lucide-react';

type AuditLog = {
  id: string;
  time: string;
  user: string;
  event: string;
  severity: 'Low' | 'Medium' | 'Critical';
  ipAddress: string;
};

const initialLogs: AuditLog[] = [
  { id: 'LOG-991', time: '2026-07-22 20:15:32', user: 'admin@123gmail.com', event: 'Admin Session Login Successful', severity: 'Low', ipAddress: '192.168.1.33' },
  { id: 'LOG-992', time: '2026-07-22 20:14:12', user: 'system_daemon', event: 'Database Connection Established', severity: 'Low', ipAddress: 'localhost' },
  { id: 'LOG-993', time: '2026-07-22 20:08:44', user: 'admin@123gmail.com', event: 'Session Initialization Attempt Failed (Wrong URL Configuration)', severity: 'Medium', ipAddress: '192.168.1.33' },
  { id: 'LOG-994', time: '2026-07-22 18:34:01', user: 'system_daemon', event: 'RLS Policies Executed on inquiries Table', severity: 'Low', ipAddress: 'localhost' },
  { id: 'LOG-995', time: '2026-07-22 18:22:15', user: 'system_daemon', event: 'Security Policy Synchronization Complete', severity: 'Low', ipAddress: 'localhost' },
];

export default function AdminSecurityPage() {
  const [logs, setLogs] = useState<AuditLog[]>(initialLogs);
  const [filter, setFilter] = useState<AuditLog['severity'] | 'All'>('All');

  const filteredLogs = filter === 'All' 
    ? logs 
    : logs.filter(l => l.severity === filter);

  const simulateSecurityEvent = () => {
    const newLog: AuditLog = {
      id: `LOG-${Math.floor(1000 + Math.random() * 9000)}`,
      time: new Date().toISOString().replace('T', ' ').substring(0, 19),
      user: 'admin@123gmail.com',
      event: 'Updated partner approval state for R-102',
      severity: 'Low',
      ipAddress: '192.168.1.33'
    };
    setLogs([newLog, ...logs]);
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-white mb-2 flex items-center gap-3">
            <Shield className="w-8 h-8 text-blue-500" /> Security & Audit Logs
          </h1>
          <p className="text-slate-400 font-medium">Review real-time access events, security status, and platform audit records.</p>
        </div>

        <button
          onClick={simulateSecurityEvent}
          className="flex items-center justify-center gap-2 bg-[#0B152A] hover:bg-slate-800 text-white font-extrabold px-5 py-3 rounded-xl border border-slate-800 transition-all active:scale-95 text-sm"
        >
          <RefreshCw className="w-4 h-4" /> Simulate Security Log
        </button>
      </div>

      {/* Security Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#050A15]/80 border border-slate-800 rounded-2xl p-6 shadow-xl flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 flex items-center justify-center">
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-0.5">Firewall Status</span>
            <span className="text-lg font-black text-white">Active & Guarding</span>
          </div>
        </div>

        <div className="bg-[#050A15]/80 border border-slate-800 rounded-2xl p-6 shadow-xl flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
            <Key className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-0.5">Row Level Security</span>
            <span className="text-lg font-black text-white">Enforced (2 Tables)</span>
          </div>
        </div>

        <div className="bg-[#050A15]/80 border border-slate-800 rounded-2xl p-6 shadow-xl flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-0.5">Critical Audits</span>
            <span className="text-lg font-black text-red-400">0 events pending</span>
          </div>
        </div>
      </div>

      {/* Logs Table */}
      <div className="bg-[#050A15]/80 backdrop-blur-md border border-slate-800 rounded-2xl shadow-xl overflow-hidden">
        
        {/* Table Filters */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between flex-wrap gap-4">
          <h3 className="text-lg font-extrabold text-white flex items-center gap-2">
            <Terminal className="w-5 h-5 text-blue-500" /> Platform Security Stream
          </h3>
          
          <div className="flex gap-2 bg-[#0B152A] p-1.5 rounded-xl border border-slate-800">
            {['All', 'Low', 'Medium', 'Critical'].map((level) => (
              <button
                key={level}
                onClick={() => setFilter(level as any)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  filter === level 
                    ? 'bg-blue-600/10 text-blue-400 border border-blue-500/20 shadow-inner' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {level === 'All' ? 'All Severities' : `${level}`}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto custom-scrollbar">
          <table className="min-w-full divide-y divide-slate-800">
            <thead className="bg-slate-900/50">
              <tr>
                <th scope="col" className="px-6 py-4 text-left text-xs font-black text-slate-400 uppercase tracking-wider">Severity</th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-black text-slate-400 uppercase tracking-wider">Event Details</th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-black text-slate-400 uppercase tracking-wider">User / IP</th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-black text-slate-400 uppercase tracking-wider">Timestamp</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50">
              {filteredLogs.map((log) => (
                <tr key={log.id} className="hover:bg-slate-800/20 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    {log.severity === 'Low' && (
                      <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-slate-800 text-slate-300 border border-slate-700">INFO</span>
                    )}
                    {log.severity === 'Medium' && (
                      <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">WARN</span>
                    )}
                    {log.severity === 'Critical' && (
                      <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-red-500/10 text-red-400 border border-red-500/20 animate-pulse">ALERT</span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-white">{log.event}</span>
                      <span className="text-[10px] text-slate-500 font-mono mt-0.5">{log.id}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-slate-300">{log.user}</span>
                      <span className="text-xs text-slate-500 font-mono">{log.ipAddress}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs text-slate-450 font-mono">
                    {log.time}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
