'use client';

import React, { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { Inbox, ExternalLink, Calendar, CheckCircle2, Search } from 'lucide-react';

type Inquiry = {
  id: string;
  created_at: string;
  type: string;
  status: string;
  full_name: string;
  email: string;
  company_name: string;
  phone: string;
  message: string;
};

export default function AdminInquiriesPage() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const supabase = createClient();

  useEffect(() => {
    fetchInquiries();
  }, []);

  async function fetchInquiries() {
    setLoading(true);
    const { data, error } = await supabase
      .from('inquiries')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setInquiries(data);
    }
    setLoading(false);
  }

  async function markAsResolved(id: string) {
    await supabase
      .from('inquiries')
      .update({ status: 'resolved' })
      .eq('id', id);
    
    // Optimistic UI update
    setInquiries(inquiries.map(inq => 
      inq.id === id ? { ...inq, status: 'resolved' } : inq
    ));
  }

  const filteredInquiries = inquiries.filter(inq => 
    inq.full_name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    inq.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (inq.company_name && inq.company_name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-white mb-2 flex items-center gap-3">
            <Inbox className="w-8 h-8 text-blue-500" /> General Inquiries
          </h1>
          <p className="text-slate-400 font-medium">Manage and respond to contact requests from the website.</p>
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-500" />
          </div>
          <input
            type="text"
            placeholder="Search by name, email, or company..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full md:w-80 pl-10 pr-3 py-2 border border-slate-700 rounded-xl leading-5 bg-[#050A15]/50 text-slate-300 placeholder-slate-500 focus:outline-none focus:bg-[#0B152A] focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm transition-all"
          />
        </div>
      </div>

      <div className="bg-[#050A15]/80 backdrop-blur-md border border-slate-800 rounded-2xl shadow-xl overflow-hidden">
        {loading ? (
          <div className="p-12 text-center text-slate-500 font-bold flex flex-col items-center">
            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
            Loading inquiries...
          </div>
        ) : filteredInquiries.length === 0 ? (
          <div className="p-12 text-center text-slate-500 font-bold">
            No inquiries found matching your search.
          </div>
        ) : (
          <div className="overflow-x-auto custom-scrollbar">
            <table className="min-w-full divide-y divide-slate-800">
              <thead className="bg-slate-900/50">
                <tr>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-black text-slate-400 uppercase tracking-wider">Status</th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-black text-slate-400 uppercase tracking-wider">Contact Details</th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-black text-slate-400 uppercase tracking-wider">Category</th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-black text-slate-400 uppercase tracking-wider">Date</th>
                  <th scope="col" className="px-6 py-4 text-right text-xs font-black text-slate-400 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/50 bg-transparent">
                {filteredInquiries.map((inquiry) => (
                  <tr key={inquiry.id} className="hover:bg-slate-800/20 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      {inquiry.status === 'new' ? (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                          New
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-500/10 text-green-400 border border-green-500/20">
                          Resolved
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-white">{inquiry.full_name}</span>
                        <a href={`mailto:${inquiry.email}`} className="text-sm text-slate-400 hover:text-blue-400 transition-colors">
                          {inquiry.email}
                        </a>
                        {inquiry.company_name && (
                          <span className="text-xs text-slate-500 font-medium mt-0.5">
                            🏢 {inquiry.company_name}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm font-bold text-slate-300 capitalize">{inquiry.type}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-400">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-slate-500" />
                        {new Date(inquiry.created_at).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center justify-end gap-3">
                        <button
                          onClick={() => alert(`Message from ${inquiry.full_name}:\n\n${inquiry.message}`)}
                          className="text-slate-400 hover:text-white transition-colors"
                          title="Read Message"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </button>
                        {inquiry.status !== 'resolved' && (
                          <button
                            onClick={() => markAsResolved(inquiry.id)}
                            className="text-green-500/70 hover:text-green-400 transition-colors"
                            title="Mark as Resolved"
                          >
                            <CheckCircle2 className="w-5 h-5" />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
