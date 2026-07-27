'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { createClient } from '@/utils/supabase/client';
import { Inbox, Calendar, CheckCircle2, Search, X, Save, Edit3 } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

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
  industry: string;
  monthly_volume: string;
  preferred_date: string;
  preferred_time: string;
  notes: string;
  custom_fields?: Record<string, any>;
};

function InquiriesContent() {
  const searchParams = useSearchParams();
  const typeParam = searchParams.get('type') || '';
  const [typeFilter, setTypeFilter] = useState<string>(typeParam);

  // Sync state if URL query params change (e.g. from sidebar clicks)
  useEffect(() => {
    setTypeFilter(typeParam);
  }, [typeParam]);
  const [categories, setCategories] = useState<string[]>(['general', 'partner', 'demo', 'security', 'd2c', 'retail']);
  
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  
  // CRM Features
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);
  const [saving, setSaving] = useState(false);
  
  const supabase = createClient();

  useEffect(() => {
    fetchInquiries();
  }, [typeFilter]); // Refetch if type changes

  useEffect(() => {
    async function loadCategories() {
      const { data } = await supabase.from('form_configs').select('category');
      if (data) {
        const dynamicCats = data.map(d => d.category);
        setCategories(prev => Array.from(new Set([...prev, ...dynamicCats])));
      }
    }
    loadCategories();
  }, []);

  async function fetchInquiries() {
    setLoading(true);
    let query = supabase
      .from('inquiries')
      .select('*')
      .order('created_at', { ascending: false });
      
    if (typeFilter) {
      query = query.eq('type', typeFilter);
    }

    const { data, error } = await query;

    if (!error && data) {
      setInquiries(data);
    }
    setLoading(false);
  }

  async function markAsResolved(id: string, e: React.MouseEvent) {
    e.stopPropagation();
    await supabase
      .from('inquiries')
      .update({ status: 'resolved' })
      .eq('id', id);
    
    setInquiries(inquiries.map(inq => 
      inq.id === id ? { ...inq, status: 'resolved' } : inq
    ));
    if (selectedInquiry?.id === id) {
      setSelectedInquiry({ ...selectedInquiry, status: 'resolved' });
    }
  }

  async function saveInquiryDetails() {
    if (!selectedInquiry) return;
    setSaving(true);
    
    const { error } = await supabase
      .from('inquiries')
      .update({
        status: selectedInquiry.status,
        notes: selectedInquiry.notes
      })
      .eq('id', selectedInquiry.id);
      
    if (!error) {
      setInquiries(inquiries.map(inq => 
        inq.id === selectedInquiry.id ? selectedInquiry : inq
      ));
      alert('Changes saved successfully!');
    } else {
      alert('Failed to save changes.');
    }
    setSaving(false);
  }

  const filteredInquiries = inquiries.filter(inq => 
    inq.full_name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    inq.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (inq.company_name && inq.company_name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 relative">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-white mb-2 flex items-center gap-3">
            <Inbox className="w-8 h-8 text-blue-500" /> 
            {typeFilter ? `${typeFilter.toUpperCase()} Inquiries` : 'All Inquiries'}
          </h1>
          <p className="text-slate-400 font-medium">Manage, review, and follow up on customer inquiries.</p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4">
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="block w-full md:w-48 px-3 py-2 border border-slate-700 rounded-xl leading-5 bg-[#050A15]/50 text-slate-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm transition-all capitalize"
          >
            <option value="">All Categories</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat.replace(/_/g, ' ')}</option>
            ))}
          </select>
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
                  <tr 
                    key={inquiry.id} 
                    onClick={() => setSelectedInquiry(inquiry)}
                    className="hover:bg-slate-800/20 transition-colors cursor-pointer"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      {inquiry.status === 'new' && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20">New</span>
                      )}
                      {inquiry.status === 'in_progress' && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">In Progress</span>
                      )}
                      {inquiry.status === 'resolved' && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-500/10 text-green-400 border border-green-500/20">Resolved</span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-white">{inquiry.full_name}</span>
                        <span className="text-sm text-slate-400">{inquiry.email}</span>
                        {inquiry.company_name && (
                          <span className="text-xs text-slate-500 font-medium mt-0.5">
                            🏢 {inquiry.company_name}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm font-bold text-slate-300 uppercase tracking-wider text-xs">{inquiry.type}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-400">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-slate-500" />
                        {new Date(inquiry.created_at).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center justify-end gap-3">
                        {inquiry.status !== 'resolved' && (
                          <button
                            onClick={(e) => markAsResolved(inquiry.id, e)}
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

      {/* Side Panel for CRM Details */}
      {selectedInquiry && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedInquiry(null)}></div>
          
          <div className="relative w-full max-w-md bg-[#050A15] border-l border-slate-800 shadow-2xl h-full overflow-y-auto flex flex-col animate-in slide-in-from-right duration-300">
            
            <div className="p-6 border-b border-slate-800 flex items-center justify-between sticky top-0 bg-[#050A15] z-10">
              <h2 className="text-xl font-extrabold text-white">Inquiry Details</h2>
              <button onClick={() => setSelectedInquiry(null)} className="p-2 rounded-full hover:bg-slate-800 text-slate-400 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-8 flex-1">
              
              <section className="space-y-4">
                <h3 className="text-xs font-extrabold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                  <Edit3 className="w-4 h-4" /> Customer Information
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <div><div className="text-xs text-slate-500 mb-1">Full Name</div><div className="text-sm font-bold text-white">{selectedInquiry.full_name}</div></div>
                  <div><div className="text-xs text-slate-500 mb-1">Email</div><div className="text-sm font-bold text-white">{selectedInquiry.email}</div></div>
                  <div><div className="text-xs text-slate-500 mb-1">Phone</div><div className="text-sm font-bold text-white">{selectedInquiry.phone || 'N/A'}</div></div>
                  <div><div className="text-xs text-slate-500 mb-1">Company</div><div className="text-sm font-bold text-white">{selectedInquiry.company_name || 'N/A'}</div></div>
                  <div><div className="text-xs text-slate-500 mb-1">Type</div><div className="text-sm font-bold text-[#FFC700] uppercase tracking-wider">{selectedInquiry.type}</div></div>
                  <div><div className="text-xs text-slate-500 mb-1">Submitted</div><div className="text-sm font-bold text-white">{new Date(selectedInquiry.created_at).toLocaleDateString()}</div></div>
                </div>
              </section>

              {selectedInquiry.custom_fields && Object.keys(selectedInquiry.custom_fields).length > 0 && (
                <section className="space-y-4 pt-4 border-t border-slate-800">
                  <h3 className="text-xs font-extrabold text-[#FFC700] uppercase tracking-widest">Custom Form Fields</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {Object.entries(selectedInquiry.custom_fields).map(([key, val]) => (
                      <div key={key}>
                        <div className="text-xs text-slate-500 mb-1">{key}</div>
                        <div className="text-sm font-bold text-white bg-slate-900/50 p-3 rounded-lg border border-slate-800">{String(val)}</div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              <section className="space-y-2 pt-4 border-t border-slate-800">
                <h3 className="text-xs font-extrabold text-slate-500 uppercase tracking-widest">Message</h3>
                <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700 text-sm text-slate-300 leading-relaxed whitespace-pre-wrap">
                  {selectedInquiry.message || 'No message provided.'}
                </div>
              </section>

              <section className="space-y-4 pt-4 border-t border-slate-800">
                <h3 className="text-xs font-extrabold text-slate-500 uppercase tracking-widest">Management</h3>
                
                <div>
                  <label className="block text-xs font-bold text-slate-400 mb-2">Status</label>
                  <select 
                    value={selectedInquiry.status}
                    onChange={(e) => setSelectedInquiry({...selectedInquiry, status: e.target.value})}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="new">New</option>
                    <option value="in_progress">In Progress</option>
                    <option value="resolved">Resolved</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 mb-2">Internal Notes</label>
                  <textarea 
                    rows={5}
                    value={selectedInquiry.notes || ''}
                    onChange={(e) => setSelectedInquiry({...selectedInquiry, notes: e.target.value})}
                    placeholder="Add notes about this customer..."
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 resize-none"
                  ></textarea>
                </div>

              </section>

            </div>

            <div className="p-6 border-t border-slate-800 bg-[#050A15]">
              <button 
                onClick={saveInquiryDetails}
                disabled={saving}
                className="w-full flex items-center justify-center gap-2 bg-[#FFC700] hover:bg-[#e5b300] text-black font-extrabold py-3.5 rounded-xl transition-all disabled:opacity-50"
              >
                <Save className="w-5 h-5" />
                {saving ? 'Saving...' : 'Save Changes'}
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

export default function AdminInquiriesPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-slate-500 font-bold">Loading CRM...</div>}>
      <InquiriesContent />
    </Suspense>
  );
}
