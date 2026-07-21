import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Create a single supabase client for interacting with your database
export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey) 
  : null;

// Mock database helper to use when Supabase is not configured yet
export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  message?: string;
  status: string;
  created_at: string;
}

export const getMockLeads = (): Lead[] => {
  if (typeof window !== 'undefined') {
    const leads = localStorage.getItem('mock_leads');
    return leads ? JSON.parse(leads) : [
      {
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        phone: '+91 98765 43210',
        company: 'D2C Fashion Hub',
        message: 'Looking for 24-hour delivery in Mumbai.',
        status: 'New',
        created_at: new Date(Date.now() - 3600000 * 2).toISOString(),
      },
      {
        id: '2',
        name: 'Sarah Smith',
        email: 'sarah@shop.com',
        phone: '+91 99999 88888',
        company: 'E-com Retailer',
        message: 'Interested in open box verification setup.',
        status: 'Contacted',
        created_at: new Date(Date.now() - 3600000 * 24).toISOString(),
      }
    ];
  }
  return [];
};

export const saveMockLead = (lead: Omit<Lead, 'id' | 'created_at' | 'status'>): Lead => {
  const newLead: Lead = {
    id: Math.random().toString(36).substring(2, 9),
    created_at: new Date().toISOString(),
    status: 'New',
    ...lead
  };
  if (typeof window !== 'undefined') {
    const leads = getMockLeads();
    leads.unshift(newLead);
    localStorage.setItem('mock_leads', JSON.stringify(leads));
  }
  return newLead;
};

export const updateMockLeadStatus = (id: string, status: string): Lead | null => {
  if (typeof window !== 'undefined') {
    const leads = getMockLeads();
    const index = leads.findIndex(l => l.id === id);
    if (index !== -1) {
      leads[index].status = status;
      localStorage.setItem('mock_leads', JSON.stringify(leads));
      return leads[index];
    }
  }
  return null;
};
