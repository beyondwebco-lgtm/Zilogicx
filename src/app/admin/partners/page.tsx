'use client';

import React, { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { Users, ExternalLink, Calendar, CheckCircle2, Search, XCircle } from 'lucide-react';

type Partner = {
  id: string;
  created_at: string;
  status: string;
  business_name: string;
  contact_name: string;
  email: string;
  phone: string;
  business_type: string;
  industry: string;
  monthly_volume: string;
  operating_cities: string;
  current_provider: string;
  website_url: string;
  additional_notes: string;
};

export default function AdminPartnersPage() {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const supabase = createClient();

  useEffect(() => {
    fetchPartners();
  }, []);

  async function fetchPartners() {
    setLoading(true);
    const { data, error } = await supabase
      .from('partner_applications')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setPartners(data);
    }
    setLoading(false);
  }

  async function updateStatus(id: string, newStatus: 'approved' | 'rejected') {
    if (!confirm(`Are you sure you want to ${newStatus} this partner application?`)) return;

    await supabase
      .from('partner_applications')
      .update({ status: newStatus })
      .eq('id', id);
    
    // Optimistic UI update
    setPartners(partners.map(p => 
      p.id === id ? { ...p, status: newStatus } : p
    ));
  }

  const filteredPartners = partners.filter(p => 
    p.business_name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.contact_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-white mb-2 flex items-center gap-3">
            <Users className="w-8 h-8 text-[#FFC700]" /> Partner Approvals
          </h1>
          <p className="text-slate-400 font-medium">Review and manage incoming business partner applications.</p>
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-500" />
          </div>
          <input
            type="text"
            placeholder="Search businesses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full md:w-80 pl-10 pr-3 py-2 border border-slate-700 rounded-xl leading-5 bg-[#050A15]/50 text-slate-300 placeholder-slate-500 focus:outline-none focus:bg-[#0B152A] focus:border-[#FFC700] focus:ring-1 focus:ring-[#FFC700] sm:text-sm transition-all"
          />
        </div>
      </div>

      <div className="bg-[#050A15]/80 backdrop-blur-md border border-slate-800 rounded-2xl shadow-xl overflow-hidden">
        {loading ? (
          <div className="p-12 text-center text-slate-500 font-bold flex flex-col items-center">
            <div className="w-8 h-8 border-4 border-[#FFC700] border-t-transparent rounded-full animate-spin mb-4"></div>
            Loading applications...
          </div>
        ) : filteredPartners.length === 0 ? (
          <div className="p-12 text-center text-slate-500 font-bold">
            No partner applications found.
          </div>
        ) : (
          <div className="overflow-x-auto custom-scrollbar">
            <table className="min-w-full divide-y divide-slate-800">
              <thead className="bg-slate-900/50">
                <tr>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-black text-slate-400 uppercase tracking-wider">Status</th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-black text-slate-400 uppercase tracking-wider">Business Details</th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-black text-slate-400 uppercase tracking-wider">Operations</th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-black text-slate-400 uppercase tracking-wider">Date</th>
                  <th scope="col" className="px-6 py-4 text-right text-xs font-black text-slate-400 uppercase tracking-wider">Review Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/50 bg-transparent">
                {filteredPartners.map((partner) => (
                  <tr key={partner.id} className="hover:bg-slate-800/20 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      {partner.status === 'pending' && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">Pending Review</span>
                      )}
                      {partner.status === 'approved' && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-500/10 text-green-400 border border-green-500/20">Approved</span>
                      )}
                      {partner.status === 'rejected' && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-red-500/10 text-red-400 border border-red-500/20">Rejected</span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-white">{partner.business_name}</span>
                        <span className="text-sm text-slate-400">👤 {partner.contact_name}</span>
                        <a href={`mailto:${partner.email}`} className="text-sm text-slate-400 hover:text-blue-400 transition-colors">
                          ✉️ {partner.email}
                        </a>
                        <span className="text-xs text-slate-500 font-medium mt-1 uppercase tracking-wide">
                          {partner.business_type} • {partner.industry}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col gap-1 text-sm text-slate-300">
                        <span className="font-bold">{partner.monthly_volume} orders/mo</span>
                        <span className="text-slate-400 text-xs">Cities: {partner.operating_cities}</span>
                        {partner.current_provider && (
                          <span className="text-slate-500 text-xs">Switching from: {partner.current_provider}</span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-400">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-slate-500" />
                        {new Date(partner.created_at).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      {partner.status === 'pending' ? (
                        <div className="flex items-center justify-end gap-3">
                          <button
                            onClick={() => updateStatus(partner.id, 'approved')}
                            className="p-2 rounded-xl bg-green-500/10 text-green-500 hover:bg-green-500/20 hover:scale-105 transition-all border border-green-500/20"
                            title="Approve Partner"
                          >
                            <CheckCircle2 className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => updateStatus(partner.id, 'rejected')}
                            className="p-2 rounded-xl bg-red-500/10 text-red-500 hover:bg-red-500/20 hover:scale-105 transition-all border border-red-500/20"
                            title="Reject Partner"
                          >
                            <XCircle className="w-5 h-5" />
                          </button>
                        </div>
                      ) : (
                        <span className="text-slate-500 text-xs font-bold uppercase tracking-wider">Reviewed</span>
                      )}
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
