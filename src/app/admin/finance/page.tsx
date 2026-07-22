'use client';

import React, { useState } from 'react';
import { CircleDollarSign, Calendar, TrendingUp, ArrowUpRight, ArrowDownRight, RefreshCw, Layers } from 'lucide-react';

type Transaction = {
  id: string;
  date: string;
  partner: string;
  amount: number;
  type: 'Payout' | 'Settlement' | 'Chargeback';
  status: 'Completed' | 'Pending' | 'Failed';
};

const initialTransactions: Transaction[] = [
  { id: 'TXN-9081', date: '2026-07-22', partner: 'Zilogicx Bangalore Hub', amount: 45200, type: 'Settlement', status: 'Completed' },
  { id: 'TXN-9082', date: '2026-07-22', partner: 'Arjun Kumar (Rider)', amount: 1250, type: 'Payout', status: 'Completed' },
  { id: 'TXN-9083', date: '2026-07-21', partner: 'Mohammad Ali (Rider)', amount: 1870, type: 'Payout', status: 'Pending' },
  { id: 'TXN-9084', date: '2026-07-21', partner: 'Nike Store Indiranagar', amount: 89000, type: 'Settlement', status: 'Completed' },
  { id: 'TXN-9085', date: '2026-07-20', partner: 'Samsung Plaza Delhi', amount: 154000, type: 'Settlement', status: 'Completed' },
];

export default function AdminFinancePage() {
  const [txns, setTxns] = useState<Transaction[]>(initialTransactions);
  const [filterType, setFilterType] = useState<Transaction['type'] | 'All'>('All');

  const filteredTxns = filterType === 'All' 
    ? txns 
    : txns.filter(t => t.type === filterType);

  const handleProcessSettlement = () => {
    const newTxn: Transaction = {
      id: `TXN-${Math.floor(9000 + Math.random() * 1000)}`,
      date: new Date().toISOString().split('T')[0],
      partner: 'Mock Retail Partner',
      amount: Math.floor(10000 + Math.random() * 50000),
      type: 'Settlement',
      status: 'Pending'
    };
    setTxns([newTxn, ...txns]);
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-white mb-2 flex items-center gap-3">
            <CircleDollarSign className="w-8 h-8 text-green-500" /> Finance & Settlement Overview
          </h1>
          <p className="text-slate-400 font-medium">Monitor payouts, settle merchant balances, and audit transaction streams.</p>
        </div>

        <button
          onClick={handleProcessSettlement}
          className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-extrabold px-5 py-3 rounded-xl transition-all shadow-lg shadow-green-500/20 active:scale-95 text-sm"
        >
          <RefreshCw className="w-4 h-4 animate-spin-slow" /> Trigger Auto-Settlement
        </button>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-[#050A15]/80 border border-slate-800 rounded-2xl p-6 shadow-xl relative overflow-hidden">
          <span className="text-slate-400 text-xs font-bold uppercase tracking-wider block mb-1">Gross Volume</span>
          <span className="text-3xl font-black text-white">₹2,89,450</span>
          <span className="flex items-center text-[10px] font-bold text-green-400 mt-2">
            <TrendingUp className="w-3.5 h-3.5 mr-1" /> +14.2% from last week
          </span>
        </div>

        <div className="bg-[#050A15]/80 border border-slate-800 rounded-2xl p-6 shadow-xl">
          <span className="text-slate-400 text-xs font-bold uppercase tracking-wider block mb-1">Partner Payouts</span>
          <span className="text-3xl font-black text-white">₹3,120</span>
          <span className="flex items-center text-[10px] font-bold text-slate-500 mt-2">
            Rider payouts this week
          </span>
        </div>

        <div className="bg-[#050A15]/80 border border-slate-800 rounded-2xl p-6 shadow-xl">
          <span className="text-slate-400 text-xs font-bold uppercase tracking-wider block mb-1">Pending Settlements</span>
          <span className="text-3xl font-black text-yellow-450">₹1,870</span>
          <span className="flex items-center text-[10px] font-bold text-yellow-500 mt-2">
            Requires merchant release
          </span>
        </div>

        <div className="bg-[#050A15]/80 border border-slate-800 rounded-2xl p-6 shadow-xl">
          <span className="text-slate-400 text-xs font-bold uppercase tracking-wider block mb-1">Chargebacks</span>
          <span className="text-3xl font-black text-red-400">₹0</span>
          <span className="flex items-center text-[10px] font-bold text-green-400 mt-2">
            0 active disputes
          </span>
        </div>
      </div>

      {/* Transaction Feed */}
      <div className="bg-[#050A15]/80 backdrop-blur-md border border-slate-800 rounded-2xl shadow-xl overflow-hidden">
        
        {/* Table Filters */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between flex-wrap gap-4">
          <h3 className="text-lg font-extrabold text-white flex items-center gap-2">
            <Layers className="w-5 h-5 text-green-500" /> Transaction Ledger
          </h3>
          
          <div className="flex gap-2 bg-[#0B152A] p-1.5 rounded-xl border border-slate-800">
            {['All', 'Settlement', 'Payout', 'Chargeback'].map((type) => (
              <button
                key={type}
                onClick={() => setFilterType(type as any)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  filterType === type 
                    ? 'bg-green-600/10 text-green-400 border border-green-500/20 shadow-inner' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto custom-scrollbar">
          <table className="min-w-full divide-y divide-slate-800">
            <thead className="bg-slate-900/50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-black text-slate-400 uppercase tracking-wider">Transaction ID</th>
                <th className="px-6 py-4 text-left text-xs font-black text-slate-400 uppercase tracking-wider">Partner</th>
                <th className="px-6 py-4 text-left text-xs font-black text-slate-400 uppercase tracking-wider">Type</th>
                <th className="px-6 py-4 text-left text-xs font-black text-slate-400 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-4 text-left text-xs font-black text-slate-400 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50">
              {filteredTxns.map((t) => (
                <tr key={t.id} className="hover:bg-slate-800/20 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-slate-400 font-mono">
                    {t.id}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-white">{t.partner}</span>
                      <span className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                        <Calendar className="w-3.5 h-3.5" /> {t.date}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {t.type === 'Settlement' && (
                      <span className="inline-flex items-center gap-1 text-sm font-bold text-green-400">
                        <ArrowUpRight className="w-4 h-4 text-green-500" /> Settlement
                      </span>
                    )}
                    {t.type === 'Payout' && (
                      <span className="inline-flex items-center gap-1 text-sm font-bold text-blue-400">
                        <ArrowDownRight className="w-4 h-4 text-blue-550" /> Payout
                      </span>
                    )}
                    {t.type === 'Chargeback' && (
                      <span className="inline-flex items-center gap-1 text-sm font-bold text-red-400">
                        Dispute
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-black text-white">
                    ₹{t.amount.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {t.status === 'Completed' && (
                      <span className="px-2.5 py-0.5 text-xs font-bold rounded-full bg-green-500/10 text-green-400 border border-green-500/20">Success</span>
                    )}
                    {t.status === 'Pending' && (
                      <span className="px-2.5 py-0.5 text-xs font-bold rounded-full bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">Pending</span>
                    )}
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
