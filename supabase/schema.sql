-- ZILOGICX SUPABASE SCHEMA
-- Run this entire script in your Supabase SQL Editor

-- 1. Create Inquiries Table
CREATE TABLE public.inquiries (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  type text NOT NULL CHECK (type IN ('general', 'demo', 'security')),
  status text NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'in_progress', 'resolved')),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text,
  company_name text,
  role text,
  industry text,
  monthly_volume text,
  preferred_date date,
  preferred_time text,
  message text,
  notes text
);

-- 2. Create Partner Applications Table
CREATE TABLE public.partner_applications (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  business_name text NOT NULL,
  contact_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  business_type text NOT NULL,
  industry text NOT NULL,
  monthly_volume text NOT NULL,
  operating_cities text NOT NULL,
  current_provider text,
  website_url text,
  additional_notes text
);

-- 3. Set up Row Level Security (RLS)
-- Enable RLS on all tables
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.partner_applications ENABLE ROW LEVEL SECURITY;

-- Allow public to INSERT inquiries (anyone can fill the form on the website)
CREATE POLICY "Allow public insert to inquiries" 
ON public.inquiries FOR INSERT 
TO public 
WITH CHECK (true);

-- Allow public to INSERT partner applications
CREATE POLICY "Allow public insert to partner_applications" 
ON public.partner_applications FOR INSERT 
TO public 
WITH CHECK (true);

-- Allow ONLY authenticated admins to SELECT, UPDATE, DELETE inquiries
CREATE POLICY "Allow authenticated full access to inquiries" 
ON public.inquiries FOR ALL 
TO authenticated 
USING (true) 
WITH CHECK (true);

-- Allow ONLY authenticated admins to SELECT, UPDATE, DELETE partner applications
CREATE POLICY "Allow authenticated full access to partner_applications" 
ON public.partner_applications FOR ALL 
TO authenticated 
USING (true) 
WITH CHECK (true);
