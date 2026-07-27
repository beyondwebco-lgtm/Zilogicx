'use client';

import React, { useState, useEffect } from 'react';
import { createClient } from '@/utils/supabase/client';
import { FileText, Save, CheckCircle2 } from 'lucide-react';

export default function LegalAdminPage() {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const supabase = createClient();

  useEffect(() => {
    fetchContent();
  }, []);

  async function fetchContent() {
    setLoading(true);
    const { data, error } = await supabase
      .from('site_content')
      .select('content')
      .eq('key', 'terms_and_conditions')
      .single();

    if (!error && data) {
      setContent(data.content || '');
    } else {
      setContent('');
    }
    setLoading(false);
  }

  async function handleSave() {
    setSaving(true);
    setSaved(false);

    // Upsert the content
    const { error } = await supabase
      .from('site_content')
      .upsert({ 
        key: 'terms_and_conditions', 
        content: content,
        updated_at: new Date().toISOString()
      }, { onConflict: 'key' });

    if (!error) {
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } else {
      alert('Failed to save content. Please check console.');
      console.error(error);
    }
    setSaving(false);
  }

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-4xl">
      <div>
        <h1 className="text-3xl font-extrabold text-white mb-2 flex items-center gap-3">
          <FileText className="w-8 h-8 text-blue-500" /> 
          Legal Pages
        </h1>
        <p className="text-slate-400 font-medium">Manage the content for your public legal pages like Terms & Conditions.</p>
      </div>

      <div className="bg-[#050A15]/80 backdrop-blur-md border border-slate-800 rounded-2xl shadow-xl overflow-hidden p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white">Terms & Conditions</h2>
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
        ) : (
          <div className="space-y-4">
            <p className="text-sm text-slate-400">
              You can write your terms and conditions here. This content is displayed exactly as written on the public <a href="/terms" target="_blank" className="text-blue-400 hover:underline">/terms</a> page.
            </p>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Enter your terms and conditions here..."
              className="w-full h-[500px] bg-[#0B152A] border border-slate-700 rounded-xl p-4 text-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 custom-scrollbar whitespace-pre-wrap"
            />
          </div>
        )}
      </div>
    </div>
  );
}
