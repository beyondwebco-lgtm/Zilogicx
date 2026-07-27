'use client';

import React, { useState, useEffect } from 'react';
import { createClient } from '@/utils/supabase/client';
import { FileCode2, Plus, Trash2, Save, ChevronDown, ChevronRight, GripVertical } from 'lucide-react';

type CustomField = {
  id: string;
  label: string;
  type: 'text' | 'number' | 'email' | 'textarea';
  required: boolean;
};

type FormCategory = {
  id: string;
  category: string;
  config: CustomField[];
};

function FormEditorCard({ 
  category, 
  onDelete, 
  onReload 
}: { 
  category: FormCategory, 
  onDelete: (catName: string) => void,
  onReload: () => void 
}) {
  const [fields, setFields] = useState<CustomField[]>(category.config || []);
  const [saving, setSaving] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const supabase = createClient();

  // Keep local state in sync if parent data changes
  useEffect(() => {
    setFields(category.config || []);
  }, [category.config]);

  const handleAddField = () => {
    const newField: CustomField = {
      id: `custom_${Date.now()}`,
      label: 'New Field',
      type: 'text',
      required: false
    };
    setFields([...fields, newField]);
    if (!expanded) setExpanded(true);
  };

  const handleRemoveField = (id: string) => {
    setFields(fields.filter(f => f.id !== id));
  };

  const updateField = (id: string, updates: Partial<CustomField>) => {
    setFields(fields.map(f => f.id === id ? { ...f, ...updates } : f));
  };

  const handleSaveFields = async () => {
    setSaving(true);
    const { error } = await supabase
      .from('form_configs')
      .upsert({ category: category.category, config: fields }, { onConflict: 'category' });
      
    if (error) {
      alert('Error saving configuration: ' + error.message);
    } else {
      // Show success silently or small toast
      onReload();
    }
    setSaving(false);
  };

  const hasChanges = JSON.stringify(fields) !== JSON.stringify(category.config || []);

  return (
    <div className="bg-[#050A15]/80 backdrop-blur-md border border-slate-800 rounded-2xl shadow-xl overflow-hidden mb-6 transition-all">
      {/* Header */}
      <div 
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 cursor-pointer hover:bg-slate-900/50 transition-colors"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-center gap-4 mb-4 sm:mb-0">
          <div className={`p-2 rounded-lg transition-colors ${expanded ? 'bg-blue-600/20 text-blue-500' : 'bg-slate-800 text-slate-400'}`}>
            {expanded ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
          </div>
          <div>
            <h3 className="text-xl font-bold text-white uppercase tracking-wider flex items-center gap-3">
              {category.category.replace(/_/g, ' ')}
            </h3>
            <p className="text-slate-500 text-sm mt-1">{fields.length} custom field(s)</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3" onClick={e => e.stopPropagation()}>
          <button
            onClick={handleAddField}
            className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-bold px-4 py-2 rounded-xl transition-all text-sm"
          >
            <Plus className="w-4 h-4" /> Add Field
          </button>
          <button
            onClick={() => onDelete(category.category)}
            className="flex items-center gap-2 bg-red-600/10 hover:bg-red-600/20 text-red-500 font-bold px-4 py-2 rounded-xl transition-all text-sm border border-red-500/10"
          >
            <Trash2 className="w-4 h-4" /> Delete Form
          </button>
        </div>
      </div>

      {/* Expanded Content */}
      {expanded && (
        <div className="p-6 pt-0 border-t border-slate-800 mt-4">
          {fields.length === 0 ? (
            <div className="py-12 mt-6 text-center text-slate-500 font-medium border-2 border-dashed border-slate-800 rounded-2xl">
              No custom fields configured for this form.<br/>
              Standard fields (Name, Email, Message) are automatically included.
            </div>
          ) : (
            <div className="space-y-4 mt-6">
              {fields.map((field) => (
                <div key={field.id} className="flex flex-col md:flex-row gap-4 p-5 bg-slate-900/50 border border-slate-800 rounded-xl items-start md:items-center">
                  
                  <div className="hidden md:flex items-center justify-center cursor-grab text-slate-600">
                    <GripVertical className="w-5 h-5" />
                  </div>

                  <div className="flex-1 w-full">
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Field Label</label>
                    <input
                      type="text"
                      value={field.label}
                      onChange={(e) => updateField(field.id, { label: e.target.value })}
                      placeholder="e.g. Expected Monthly Shipments"
                      className="w-full px-4 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-white text-sm focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                  
                  <div className="w-full md:w-56">
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Input Type</label>
                    <select
                      value={field.type}
                      onChange={(e) => updateField(field.id, { type: e.target.value as any })}
                      className="w-full px-4 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-white text-sm focus:border-blue-500 focus:outline-none"
                    >
                      <option value="text">Short Text</option>
                      <option value="textarea">Long Text</option>
                      <option value="number">Number</option>
                      <option value="email">Email</option>
                    </select>
                  </div>

                  <div className="w-full md:w-32 flex items-center h-full pt-4 md:pt-6">
                    <label className="flex items-center gap-2 cursor-pointer text-sm text-slate-300 font-medium select-none">
                      <input
                        type="checkbox"
                        checked={field.required}
                        onChange={(e) => updateField(field.id, { required: e.target.checked })}
                        className="w-4 h-4 rounded bg-slate-950 border-slate-700 text-blue-500 focus:ring-blue-500 focus:ring-offset-slate-900"
                      />
                      Required
                    </label>
                  </div>

                  <div className="pt-4 md:pt-6">
                    <button
                      onClick={() => handleRemoveField(field.id)}
                      className="p-2.5 text-slate-500 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-colors"
                      title="Remove Field"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-6 pt-6 flex justify-end">
            <button
              onClick={handleSaveFields}
              disabled={saving || !hasChanges}
              className="flex items-center gap-2 bg-[#FFC700] hover:bg-yellow-400 text-black font-bold px-8 py-3 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(255,199,0,0.2)] hover:shadow-[0_0_30px_rgba(255,199,0,0.4)]"
            >
              <Save className="w-5 h-5" /> 
              {saving ? 'Saving...' : hasChanges ? 'Save Changes' : 'Saved'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function AdminFormsPage() {
  const [categories, setCategories] = useState<FormCategory[]>([]);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const supabase = createClient();

  const loadAllConfigs = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('form_configs')
      .select('*')
      .order('created_at', { ascending: true });
      
    const coreCategories = ['general', 'demo', 'security', 'd2c', 'retail'];
    let loadedCategories = data || [];
    
    // Add any missing core categories to the list virtually so they can be edited
    coreCategories.forEach(coreCat => {
      if (!loadedCategories.find(c => c.category === coreCat)) {
        loadedCategories.push({
          id: `virtual_${coreCat}`,
          category: coreCat,
          config: []
        });
      }
    });

    setCategories(loadedCategories);
    setLoading(false);
  };

  useEffect(() => {
    loadAllConfigs();
  }, []);

  const handleCreateCategory = async () => {
    if (!newCategoryName.trim()) return;
    const formattedName = newCategoryName.trim().toLowerCase().replace(/\s+/g, '_');
    
    if (categories.find(c => c.category === formattedName)) {
      alert("This form already exists!");
      return;
    }

    setSaving(true);
    const { error } = await supabase
      .from('form_configs')
      .insert({ category: formattedName, config: [] });
      
    if (error) {
      alert('Error creating form: ' + error.message);
    } else {
      setNewCategoryName('');
      await loadAllConfigs();
    }
    setSaving(false);
  };

  const handleDeleteCategory = async (catName: string) => {
    if (!confirm(`Are you sure you want to completely delete the "${catName}" form? It will be removed from the public website.`)) return;

    const { error } = await supabase
      .from('form_configs')
      .delete()
      .eq('category', catName);
      
    if (error) {
      alert('Error deleting form: ' + error.message);
    } else {
      await loadAllConfigs();
    }
  };

  return (
    <div className="max-w-5xl space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      
      {/* Header */}
      <div>
        <h1 className="text-3xl font-extrabold text-white mb-2 flex items-center gap-3">
          <FileCode2 className="w-8 h-8 text-blue-500" /> Form Builder
        </h1>
        <p className="text-slate-400 font-medium text-lg">Manage all your public forms in one place.</p>
      </div>

      {/* Section 1: Add New Form */}
      <section className="bg-blue-600/10 border border-blue-500/20 rounded-3xl p-8 shadow-xl">
        <h2 className="text-xl font-bold text-white mb-4">Create New Form</h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="e.g. Investor Relations, Careers, Feedback..."
            value={newCategoryName}
            onChange={(e) => setNewCategoryName(e.target.value)}
            className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 shadow-inner"
          />
          <button 
            onClick={handleCreateCategory}
            disabled={saving || !newCategoryName.trim()}
            className="bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-bold px-8 py-4 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg"
          >
            <Plus className="w-5 h-5" /> Add Form
          </button>
        </div>
      </section>

      {/* Section 2: Current Forms */}
      <section>
        <h2 className="text-xl font-bold text-white mb-6">Current Forms</h2>
        
        {loading ? (
          <div className="py-12 text-center text-slate-500">
            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            Loading your forms...
          </div>
        ) : categories.length === 0 ? (
          <div className="py-16 text-center text-slate-500 border-2 border-dashed border-slate-800 rounded-3xl bg-slate-900/20">
            <p className="text-lg font-medium">No forms created yet.</p>
            <p className="text-sm mt-1">Create one above to get started.</p>
          </div>
        ) : (
          <div>
            {categories.map(cat => (
              <FormEditorCard 
                key={cat.id} 
                category={cat} 
                onDelete={handleDeleteCategory} 
                onReload={loadAllConfigs} 
              />
            ))}
          </div>
        )}
      </section>
      
    </div>
  );
}
