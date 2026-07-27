'use client';

import React, { useState, useEffect } from 'react';
import { createClient } from '@/utils/supabase/client';
import { FileText, Save, CheckCircle2, Building2 } from 'lucide-react';

export default function LegalAdminPage() {
  const [activeTab, setActiveTab] = useState<'terms_and_conditions' | 'privacy_policy' | 'company_details'>('terms_and_conditions');
  const [content, setContent] = useState('');
  
  // Company details states
  const [emailGeneral, setEmailGeneral] = useState('');
  const [emailSales, setEmailSales] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [hours, setHours] = useState('');

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const supabase = createClient();

  useEffect(() => {
    fetchContent(activeTab);
  }, [activeTab]);

  async function fetchContent(tabKey: typeof activeTab) {
    setLoading(true);
    if (tabKey === 'company_details') {
      const keys = ['company_email_general', 'company_email_sales', 'company_phone', 'company_address', 'company_hours'];
      const { data } = await supabase
        .from('site_content')
        .select('key, content')
        .in('key', keys);
      
      const findContent = (k: string, defaultVal: string) => 
        data?.find(item => item.key === k)?.content || defaultVal;

      setEmailGeneral(findContent('company_email_general', 'hello@zilogicx.com'));
      setEmailSales(findContent('company_email_sales', 'sales@zilogicx.com'));
      setPhone(findContent('company_phone', '+91 98765 43210'));
      setAddress(findContent('company_address', 'ZILOGICX Technologies Pvt. Ltd., Bengaluru, Karnataka, India'));
      setHours(findContent('company_hours', 'Monday – Saturday, 9:00 AM – 7:00 PM IST'));
    } else {
      const { data, error } = await supabase
        .from('site_content')
        .select('content')
        .eq('key', tabKey)
        .single();

      if (!error && data) {
        setContent(data.content || '');
      } else {
        setContent('');
      }
    }
    setLoading(false);
  }

  async function handleSave() {
    setSaving(true);
    setSaved(false);

    let errorOccurred = false;

    if (activeTab === 'company_details') {
      const updates = [
        { key: 'company_email_general', content: emailGeneral, updated_at: new Date().toISOString() },
        { key: 'company_email_sales', content: emailSales, updated_at: new Date().toISOString() },
        { key: 'company_phone', content: phone, updated_at: new Date().toISOString() },
        { key: 'company_address', content: address, updated_at: new Date().toISOString() },
        { key: 'company_hours', content: hours, updated_at: new Date().toISOString() }
      ];

      for (const item of updates) {
        const { error } = await supabase
          .from('site_content')
          .upsert(item, { onConflict: 'key' });
        if (error) {
          errorOccurred = true;
          console.error(`Error saving ${item.key}:`, error);
        }
      }
    } else {
      const { error } = await supabase
        .from('site_content')
        .upsert({ 
          key: activeTab, 
          content: content,
          updated_at: new Date().toISOString()
        }, { onConflict: 'key' });

      if (error) {
        errorOccurred = true;
        console.error(error);
      }
    }

    if (!errorOccurred) {
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } else {
      alert('Failed to save content. Please check console.');
    }
    setSaving(false);
  }

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-4xl">
      <div>
        <h1 className="text-3xl font-extrabold text-white mb-2 flex items-center gap-3">
          <FileText className="w-8 h-8 text-blue-500" /> 
          Site Settings
        </h1>
        <p className="text-slate-400 font-medium">Manage legal pages and general company information.</p>
      </div>

      <div className="flex space-x-2 border-b border-slate-800">
        <button
          onClick={() => setActiveTab('terms_and_conditions')}
          className={`px-4 py-2 font-semibold text-sm transition-colors border-b-2 ${
            activeTab === 'terms_and_conditions' 
              ? 'border-blue-500 text-blue-500' 
              : 'border-transparent text-slate-400 hover:text-slate-200 hover:border-slate-600'
          }`}
        >
          Terms & Conditions
        </button>
        <button
          onClick={() => setActiveTab('privacy_policy')}
          className={`px-4 py-2 font-semibold text-sm transition-colors border-b-2 ${
            activeTab === 'privacy_policy' 
              ? 'border-blue-500 text-blue-500' 
              : 'border-transparent text-slate-400 hover:text-slate-200 hover:border-slate-600'
          }`}
        >
          Privacy Policy
        </button>
        <button
          onClick={() => setActiveTab('company_details')}
          className={`px-4 py-2 font-semibold text-sm transition-colors border-b-2 ${
            activeTab === 'company_details' 
              ? 'border-blue-500 text-blue-500' 
              : 'border-transparent text-slate-400 hover:text-slate-200 hover:border-slate-600'
          }`}
        >
          Company &amp; Contact Info
        </button>
      </div>

      <div className="bg-[#050A15]/80 backdrop-blur-md border border-slate-800 rounded-2xl shadow-xl overflow-hidden p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            {activeTab === 'company_details' && <Building2 className="w-5 h-5 text-blue-400" />}
            {activeTab === 'terms_and_conditions' ? 'Terms & Conditions' : activeTab === 'privacy_policy' ? 'Privacy Policy' : 'Company Details'}
          </h2>
          <button
            onClick={handleSave}
            disabled={saving || loading}
            className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {saving ? (
              <>Saving...</>
            ) : saved ? (
              <><CheckCircle2 className="w-4 h-4" /> Saved!</>
            ) : (
              <><Save className="w-4 h-4" /> Save Changes</>
            )}
          </button>
        </div>

        {loading ? (
          <div className="h-96 flex items-center justify-center text-slate-500">
            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : activeTab === 'company_details' ? (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-bold text-slate-300">General Email (hello@...)</label>
                <input
                  type="email"
                  value={emailGeneral}
                  onChange={(e) => setEmailGeneral(e.target.value)}
                  placeholder="hello@zilogicx.com"
                  className="w-full bg-[#0B152A] border border-slate-700 rounded-xl p-4 text-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-bold text-slate-300">Sales Email (sales@...)</label>
                <input
                  type="email"
                  value={emailSales}
                  onChange={(e) => setEmailSales(e.target.value)}
                  placeholder="sales@zilogicx.com"
                  className="w-full bg-[#0B152A] border border-slate-700 rounded-xl p-4 text-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-bold text-slate-300">Company Phone Number</label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full bg-[#0B152A] border border-slate-700 rounded-xl p-4 text-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-bold text-slate-300">Business Hours</label>
                <input
                  type="text"
                  value={hours}
                  onChange={(e) => setHours(e.target.value)}
                  placeholder="Monday – Saturday, 9:00 AM – 7:00 PM IST"
                  className="w-full bg-[#0B152A] border border-slate-700 rounded-xl p-4 text-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-bold text-slate-300">Company Address</label>
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter company address here..."
                rows={4}
                className="w-full bg-[#0B152A] border border-slate-700 rounded-xl p-4 text-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 custom-scrollbar"
              />
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-sm text-slate-400">
              You can write your {activeTab.replace(/_/g, ' ')} here. This content is displayed exactly as written on the public <a href={activeTab === 'terms_and_conditions' ? '/terms' : '/privacy'} target="_blank" className="text-blue-400 hover:underline">{activeTab === 'terms_and_conditions' ? '/terms' : '/privacy'}</a> page.
            </p>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder={`Enter your ${activeTab.replace(/_/g, ' ')} here...`}
              className="w-full h-[500px] bg-[#0B152A] border border-slate-700 rounded-xl p-4 text-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 custom-scrollbar"
            />
          </div>
        )}
      </div>
    </div>
  );
}
