'use client';

import React, { useState } from 'react';
import { Headphones, Search, CheckCircle, Clock, AlertCircle, Send, MessageSquare } from 'lucide-react';

type Ticket = {
  id: string;
  customer: string;
  email: string;
  issue: string;
  priority: 'High' | 'Medium' | 'Low';
  status: 'Open' | 'Pending' | 'Resolved';
  date: string;
  messages: Array<{ sender: 'customer' | 'admin', text: string, time: string }>;
};

const initialTickets: Ticket[] = [
  { 
    id: 'TCK-201', 
    customer: 'Rahul Kumar', 
    email: 'rahul.k@gmail.com', 
    issue: 'Order verification verification pending for last 3 hours', 
    priority: 'High', 
    status: 'Open', 
    date: '2026-07-22',
    messages: [
      { sender: 'customer', text: 'Hey, I ordered a Nike sneaker and selected Open Box Verification, but rider has not yet arrived with code.', time: '18:12' }
    ]
  },
  { 
    id: 'TCK-202', 
    customer: 'Simran Singh', 
    email: 'simran.s@yahoo.com', 
    issue: 'Rider refund process delay', 
    priority: 'Medium', 
    status: 'Pending', 
    date: '2026-07-22',
    messages: [
      { sender: 'customer', text: 'Refund for return order #ZIL-8092 has not credited to my bank account.', time: '17:05' },
      { sender: 'admin', text: 'Hi Simran, we have initiated the refund. It will reflect in 24 hours.', time: '17:20' }
    ]
  },
  { 
    id: 'TCK-203', 
    customer: 'Vikram Grover', 
    email: 'vikram@brand.com', 
    issue: 'Merchant dashboard invoice export error', 
    priority: 'Low', 
    status: 'Resolved', 
    date: '2026-07-21',
    messages: [
      { sender: 'customer', text: 'Unable to export PDF of June month payouts.', time: '11:00' },
      { sender: 'admin', text: 'Issue has been fixed Vikram. Please try again now.', time: '11:45' }
    ]
  },
];

export default function AdminSupportPage() {
  const [tickets, setTickets] = useState<Ticket[]>(initialTickets);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
  const [replyText, setReplyText] = useState('');

  const handleSendReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyText || !selectedTicket) return;

    const updatedTickets = tickets.map(t => {
      if (t.id === selectedTicket.id) {
        return {
          ...t,
          status: 'Pending' as const,
          messages: [
            ...t.messages,
            { sender: 'admin' as const, text: replyText, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
          ]
        };
      }
      return t;
    });

    setTickets(updatedTickets);
    setSelectedTicket(updatedTickets.find(t => t.id === selectedTicket.id) || null);
    setReplyText('');
  };

  const markResolved = (id: string) => {
    setTickets(tickets.map(t => t.id === id ? { ...t, status: 'Resolved' } : t));
    if (selectedTicket?.id === id) {
      setSelectedTicket({ ...selectedTicket, status: 'Resolved' });
    }
  };

  const filteredTickets = tickets.filter(t => 
    t.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    t.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    t.issue.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* Header */}
      <div>
        <h1 className="text-3xl font-extrabold text-white mb-2 flex items-center gap-3">
          <Headphones className="w-8 h-8 text-blue-500" /> Customer Support Center
        </h1>
        <p className="text-slate-400 font-medium">Respond to support inquiries, chat with customers, and check resolution metrics.</p>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#050A15]/80 border border-slate-800 rounded-2xl p-6 shadow-xl flex items-center justify-between">
          <div>
            <span className="text-slate-400 text-xs font-bold uppercase tracking-wider block mb-1">Open Tickets</span>
            <span className="text-3xl font-black text-red-400">{tickets.filter(t => t.status === 'Open').length}</span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center">
            <AlertCircle className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-[#050A15]/80 border border-slate-800 rounded-2xl p-6 shadow-xl flex items-center justify-between">
          <div>
            <span className="text-slate-400 text-xs font-bold uppercase tracking-wider block mb-1">Awaiting Reply</span>
            <span className="text-3xl font-black text-yellow-450">{tickets.filter(t => t.status === 'Pending').length}</span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 flex items-center justify-center">
            <Clock className="w-6 h-6 animate-pulse" />
          </div>
        </div>

        <div className="bg-[#050A15]/80 border border-slate-800 rounded-2xl p-6 shadow-xl flex items-center justify-between">
          <div>
            <span className="text-slate-400 text-xs font-bold uppercase tracking-wider block mb-1">Resolved Tickets</span>
            <span className="text-3xl font-black text-green-400">{tickets.filter(t => t.status === 'Resolved').length}</span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 flex items-center justify-center">
            <CheckCircle className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Main Support Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Side: Ticket List (Col 5) */}
        <div className="lg:col-span-5 bg-[#050A15]/80 border border-slate-800 rounded-2xl p-6 shadow-xl h-[550px] flex flex-col">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search tickets by ID, issue..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2.5 border border-slate-850 rounded-xl bg-[#0B152A] text-slate-300 placeholder-slate-500 focus:outline-none focus:border-blue-500 text-xs font-medium"
            />
          </div>

          <div className="flex-1 overflow-y-auto space-y-3 custom-scrollbar pr-1">
            {filteredTickets.map(t => (
              <button
                key={t.id}
                onClick={() => setSelectedTicket(t)}
                className={`w-full text-left p-4 rounded-xl border transition-all ${
                  selectedTicket?.id === t.id 
                    ? 'bg-blue-600/10 border-blue-500/30' 
                    : 'bg-slate-900/50 border-slate-850 hover:bg-slate-800/25'
                }`}
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-bold text-slate-500 font-mono">{t.id}</span>
                  {t.priority === 'High' && (
                    <span className="text-[10px] font-extrabold text-red-400 uppercase">High Priority</span>
                  )}
                </div>
                <h4 className="text-sm font-bold text-white mb-1 truncate">{t.customer}</h4>
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">{t.issue}</p>
                
                <div className="flex justify-between items-center mt-3 pt-2 border-t border-slate-850/50">
                  <span className="text-[10px] text-slate-500">{t.date}</span>
                  <span className={`text-[10px] font-black uppercase ${
                    t.status === 'Open' ? 'text-red-450' : 
                    t.status === 'Pending' ? 'text-yellow-450' : 'text-green-450'
                  }`}>
                    {t.status}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Right Side: Conversation Panel (Col 7) */}
        <div className="lg:col-span-7 bg-[#050A15]/80 border border-slate-800 rounded-2xl p-6 shadow-xl h-[550px] flex flex-col">
          {selectedTicket ? (
            <div className="flex flex-col h-full">
              {/* Active Ticket Header */}
              <div className="pb-4 border-b border-slate-850 flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h3 className="text-md font-black text-white flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-blue-500" /> {selectedTicket.customer}
                  </h3>
                  <span className="text-xs text-slate-500">{selectedTicket.email} • ID: {selectedTicket.id}</span>
                </div>
                {selectedTicket.status !== 'Resolved' && (
                  <button
                    onClick={() => markResolved(selectedTicket.id)}
                    className="px-3.5 py-1.5 bg-green-500/10 hover:bg-green-500/25 border border-green-500/20 text-green-400 text-xs font-bold rounded-xl transition-all"
                  >
                    Mark Resolved
                  </button>
                )}
              </div>

              {/* Chat Thread */}
              <div className="flex-1 overflow-y-auto py-4 space-y-4 custom-scrollbar pr-1">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-850 text-xs text-slate-400">
                  <span className="font-bold text-slate-300 block mb-1">Customer Issue Description:</span>
                  {selectedTicket.issue}
                </div>

                {selectedTicket.messages.map((m, idx) => (
                  <div key={idx} className={`flex flex-col max-w-[85%] ${m.sender === 'admin' ? 'ml-auto items-end' : 'mr-auto items-start'}`}>
                    <div className={`p-4 rounded-2xl text-xs font-medium leading-relaxed ${
                      m.sender === 'admin' 
                        ? 'bg-blue-600 text-white rounded-tr-none' 
                        : 'bg-slate-900 border border-slate-850 text-slate-300 rounded-tl-none'
                    }`}>
                      {m.text}
                    </div>
                    <span className="text-[10px] text-slate-500 mt-1">{m.time}</span>
                  </div>
                ))}
              </div>

              {/* Reply Box */}
              {selectedTicket.status !== 'Resolved' ? (
                <form onSubmit={handleSendReply} className="pt-4 border-t border-slate-850 flex gap-2">
                  <input
                    type="text"
                    required
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    placeholder="Type your response to the customer..."
                    className="flex-1 px-4 py-3 bg-slate-900 border border-slate-850 rounded-xl text-white placeholder-slate-550 focus:outline-none focus:border-blue-500 text-xs font-medium"
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-500 text-white p-3 rounded-xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center shadow-lg shadow-blue-600/25"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                <div className="pt-4 border-t border-slate-850 text-center text-xs text-slate-500 font-bold">
                  This support ticket is closed and resolved.
                </div>
              )}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <Headphones className="w-16 h-16 text-slate-700 mb-4 opacity-50" />
              <h3 className="text-lg font-bold text-white mb-1">Select a Support Ticket</h3>
              <p className="text-slate-500 text-xs max-w-xs">Pick any support ticket from the sidebar to review details and write responses.</p>
            </div>
          )}
        </div>

      </div>

    </div>
  );
}
