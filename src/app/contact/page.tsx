'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Logo } from '@/components/Logo';
import { WaveBackground } from '@/components/WaveBackground';
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Users, 
  Zap, 
  ArrowRight,
  CheckCircle2,
  ShieldCheck
} from 'lucide-react';

const TwitterXIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.72a1.47 1.47 0 1 0 0 2.94 1.47 1.47 0 0 0 0-2.94z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4 stroke-current fill-none stroke-[2]" viewBox="0 0 24 24">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

import { HeaderNav } from '@/components/HeaderNav';

function ContactContent() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<'general' | 'partner' | 'demo' | 'security'>('general');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam === 'general' || tabParam === 'partner' || tabParam === 'demo' || tabParam === 'security') {
      setActiveTab(tabParam as 'general' | 'partner' | 'demo' | 'security');
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="relative min-h-screen bg-[#070e1b] text-slate-100 selection:bg-[#FFC700] selection:text-black">
      
      {/* Sticky Header Nav */}
      <HeaderNav activePage="Contact" />

      {/* ----------------- Hero Section (Screenshot 1) ----------------- */}
      <section className="relative pt-20 pb-20 md:pt-32 md:pb-24 overflow-hidden bg-[#070e1b] hero-glow-container text-center">
        <WaveBackground toColor="to-[#F8FAFC]" />

        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Badge Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/40 bg-yellow-500/10 px-4 py-1.5 text-xs sm:text-sm font-semibold text-[#FFC700] mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#FFC700]" />
            <span>Get in Touch</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Let&apos;s Build Something Fast Together
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Whether you&apos;re a brand looking to partner, an investor, or just want to learn more — we&apos;d love to hear from you.
          </p>

        </div>
      </section>

      {/* ----------------- Main Contact Grid Section (Screenshots 2, 3, 4) ----------------- */}
      <section className="py-20 bg-[#F8FAFC] text-slate-900 border-t border-slate-200">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Contact Cards & Blue Feature Box */}
            <div className="lg:col-span-4 space-y-4">
              
              {/* Card 1: General */}
              <div className="bg-white border border-slate-200 rounded-2xl p-5 flex items-center gap-4 custom-shadow-sm transition-all duration-300 hover:border-[#FFC700] hover:shadow-xl hover:shadow-yellow-500/10 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                  <Mail className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block font-mono">GENERAL</span>
                  <a href="mailto:hello@zilogicx.com" className="text-sm font-extrabold text-slate-900 hover:text-blue-600 transition-colors">
                    hello@zilogicx.com
                  </a>
                </div>
              </div>

              {/* Card 2: Sales */}
              <div className="bg-white border border-slate-200 rounded-2xl p-5 flex items-center gap-4 custom-shadow-sm transition-all duration-300 hover:border-[#FFC700] hover:shadow-xl hover:shadow-yellow-500/10 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                  <Mail className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block font-mono">SALES</span>
                  <a href="mailto:sales@zilogicx.com" className="text-sm font-extrabold text-slate-900 hover:text-blue-600 transition-colors">
                    sales@zilogicx.com
                  </a>
                </div>
              </div>

              {/* Card 3: Phone */}
              <div className="bg-white border border-slate-200 rounded-2xl p-5 flex items-center gap-4 custom-shadow-sm transition-all duration-300 hover:border-[#FFC700] hover:shadow-xl hover:shadow-yellow-500/10 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                  <Phone className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block font-mono">PHONE</span>
                  <a href="tel:+919876543210" className="text-sm font-extrabold text-slate-900 hover:text-blue-600 transition-colors">
                    +91 98765 43210
                  </a>
                </div>
              </div>

              {/* Card 4: Address */}
              <div className="bg-white border border-slate-200 rounded-2xl p-5 flex items-center gap-4 custom-shadow-sm transition-all duration-300 hover:border-[#FFC700] hover:shadow-xl hover:shadow-yellow-500/10 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                  <MapPin className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block font-mono">ADDRESS</span>
                  <p className="text-xs font-bold text-slate-800 leading-snug">
                    ZILOGICX Technologies Pvt. Ltd., Bengaluru, Karnataka, India
                  </p>
                </div>
              </div>

              {/* Card 5: Hours */}
              <div className="bg-white border border-slate-200 rounded-2xl p-5 flex items-center gap-4 custom-shadow-sm transition-all duration-300 hover:border-[#FFC700] hover:shadow-xl hover:shadow-yellow-500/10 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                  <Clock className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block font-mono">HOURS</span>
                  <p className="text-xs font-bold text-slate-800 leading-snug">
                    Monday – Saturday, 9:00 AM – 7:00 PM IST
                  </p>
                </div>
              </div>

              {/* Blue Feature Card */}
              <div className="rounded-3xl bg-gradient-to-br from-[#1249C7] via-[#0E3FAE] to-[#0A2E85] p-7 text-white shadow-xl space-y-4 border border-transparent transition-all duration-300 hover:border-[#FFC700] hover:shadow-yellow-500/10 hover:-translate-y-1">
                <h3 className="text-lg font-extrabold text-[#FFC700]">Why Partner with ZILOGICX?</h3>
                <ul className="space-y-3 text-xs font-bold text-slate-100">
                  {[
                    '24-hour delivery guarantee',
                    'AI-powered route optimization',
                    'Real-time tracking dashboard',
                    'Dedicated account manager',
                    'Pan-India network coverage'
                  ].map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2.5">
                      <span className="w-4 h-4 rounded-full border border-yellow-400 flex items-center justify-center text-[10px] text-[#FFC700]">
                        ✓
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Right Column: 3-Tab Interactive Form */}
            <div className="lg:col-span-8 bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-xl">
              
              {/* Tab Navigation Header */}
              <div className="flex flex-wrap border-b border-slate-200 bg-slate-50/50">
                {[
                  { id: 'general', label: 'General', icon: <Mail className="w-4 h-4" /> },
                  { id: 'partner', label: 'Partner', icon: <Users className="w-4 h-4" /> },
                  { id: 'demo', label: 'Demo', icon: <Zap className="w-4 h-4" /> },
                  { id: 'security', label: 'Security', icon: <ShieldCheck className="w-4 h-4" /> },
                ].map((t) => {
                  const isActive = activeTab === t.id;
                  return (
                    <button
                      key={t.id}
                      onClick={() => setActiveTab(t.id as 'general' | 'partner' | 'demo' | 'security')}
                      className={`flex-1 flex items-center justify-center gap-2 py-4 px-3 text-xs sm:text-sm font-extrabold transition-all relative ${
                        isActive
                          ? 'bg-white text-slate-900 border-t-2 border-t-[#FFC700]'
                          : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100/50'
                      }`}
                    >
                      <span className={isActive ? 'text-[#D9A300]' : 'text-slate-400'}>{t.icon}</span>
                      <span>{t.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Form Content */}
              <div className="p-6 sm:p-8">
                
                {submitted && (
                  <div className="mb-6 p-4 rounded-2xl bg-green-50 border border-green-200 flex items-center gap-3 text-green-800 text-sm font-bold">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>Thank you! Your inquiry has been received. Our team will get back to you within 2 hours.</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* TAB 1: GENERAL INQUIRY */}
                  {activeTab === 'general' && (
                    <>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-extrabold text-slate-700 mb-1.5">Full Name *</label>
                          <input 
                            required 
                            type="text" 
                            placeholder="Priya Sharma" 
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/20 text-slate-900 font-medium"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-extrabold text-slate-700 mb-1.5">Email Address *</label>
                          <input 
                            required 
                            type="email" 
                            placeholder="priya@brand.com" 
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/20 text-slate-900 font-medium"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-extrabold text-slate-700 mb-1.5">Phone Number</label>
                          <input 
                            type="tel" 
                            placeholder="+91 98765 43210" 
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/20 text-slate-900 font-medium"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-extrabold text-slate-700 mb-1.5">Company Name</label>
                          <input 
                            type="text" 
                            placeholder="Your Brand Pvt. Ltd." 
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/20 text-slate-900 font-medium"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-extrabold text-slate-700 mb-1.5">Inquiry Type *</label>
                          <select required className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/20 text-slate-900 font-medium bg-white">
                            <option value="General Inquiry">General Inquiry</option>
                            <option value="Sales Inquiry">Sales Inquiry</option>
                            <option value="Partnership">Partnership</option>
                            <option value="Support">Support</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-extrabold text-slate-700 mb-1.5">Industry</label>
                          <select className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/20 text-slate-900 font-medium bg-white">
                            <option value="">Select industry</option>
                            <option value="Fashion">Fashion & Lifestyle</option>
                            <option value="Electronics">Electronics & Gadgets</option>
                            <option value="Beauty">Beauty & Personal Care</option>
                            <option value="FMCG">FMCG & Grocery</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-extrabold text-slate-700 mb-1.5">Monthly Shipment Volume</label>
                        <select className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/20 text-slate-900 font-medium bg-white">
                          <option value="">Select volume</option>
                          <option value="1-500">1 - 500 shipments/month</option>
                          <option value="500-2000">500 - 2,000 shipments/month</option>
                          <option value="2000-10000">2,000 - 10,000 shipments/month</option>
                          <option value="10000+">10,000+ shipments/month</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-extrabold text-slate-700 mb-1.5">Message *</label>
                        <textarea 
                          required 
                          rows={4} 
                          placeholder="Tell us about your logistics needs..." 
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/20 text-slate-900 font-medium resize-none"
                        />
                      </div>

                      <button 
                        type="submit" 
                        className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#FFC700] hover:bg-[#e5b300] py-4 text-base font-extrabold text-black transition-all shadow-lg shadow-yellow-500/20 active:scale-[0.99]"
                      >
                        Send Inquiry <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                      </button>
                    </>
                  )}

                  {/* TAB 2: BECOME A PARTNER */}
                  {activeTab === 'partner' && (
                    <>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-extrabold text-slate-700 mb-1.5">Business Name *</label>
                          <input 
                            required 
                            type="text" 
                            placeholder="Your Brand Pvt. Ltd." 
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/20 text-slate-900 font-medium"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-extrabold text-slate-700 mb-1.5">Contact Name *</label>
                          <input 
                            required 
                            type="text" 
                            placeholder="Rahul Mehta" 
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/20 text-slate-900 font-medium"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-extrabold text-slate-700 mb-1.5">Email Address *</label>
                          <input 
                            required 
                            type="email" 
                            placeholder="rahul@brand.com" 
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/20 text-slate-900 font-medium"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-extrabold text-slate-700 mb-1.5">Phone Number *</label>
                          <input 
                            required 
                            type="tel" 
                            placeholder="+91 98765 43210" 
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/20 text-slate-900 font-medium"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-extrabold text-slate-700 mb-1.5">Business Type *</label>
                          <select required className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/20 text-slate-900 font-medium bg-white">
                            <option value="">Select type</option>
                            <option value="Brand">D2C Brand</option>
                            <option value="Retailer">Retail Store / Chain</option>
                            <option value="Delivery">Delivery Partner</option>
                            <option value="Tech">Technology Partner</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-extrabold text-slate-700 mb-1.5">Industry *</label>
                          <select required className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/20 text-slate-900 font-medium bg-white">
                            <option value="">Select industry</option>
                            <option value="Fashion">Fashion & Lifestyle</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Beauty">Beauty & Care</option>
                            <option value="Retail">Retail Chain</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-extrabold text-slate-700 mb-1.5">Monthly Shipment Volume *</label>
                          <select required className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/20 text-slate-900 font-medium bg-white">
                            <option value="">Select volume</option>
                            <option value="1-500">1 - 500</option>
                            <option value="500-2000">500 - 2,000</option>
                            <option value="2000+">2,000+</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-extrabold text-slate-700 mb-1.5">Operating Cities *</label>
                          <input 
                            required 
                            type="text" 
                            placeholder="Mumbai, Delhi, Bangalore..." 
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/20 text-slate-900 font-medium"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-extrabold text-slate-700 mb-1.5">Current Logistics Provider</label>
                          <input 
                            type="text" 
                            placeholder="Delhivery, Bluedart, etc." 
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/20 text-slate-900 font-medium"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-extrabold text-slate-700 mb-1.5">Website</label>
                          <input 
                            type="url" 
                            placeholder="https://yourbrand.com" 
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/20 text-slate-900 font-medium"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-extrabold text-slate-700 mb-1.5">Additional Notes</label>
                        <textarea 
                          rows={4} 
                          placeholder="Any specific requirements or questions..." 
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/20 text-slate-900 font-medium resize-none"
                        />
                      </div>

                      <button 
                        type="submit" 
                        className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#FFC700] hover:bg-[#e5b300] py-4 text-base font-extrabold text-black transition-all shadow-lg shadow-yellow-500/20 active:scale-[0.99]"
                      >
                        Register as Partner <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                      </button>
                    </>
                  )}

                  {/* TAB 3: REQUEST A DEMO */}
                  {activeTab === 'demo' && (
                    <>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-extrabold text-slate-700 mb-1.5">Full Name *</label>
                          <input 
                            required 
                            type="text" 
                            placeholder="Ananya Patel" 
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/20 text-slate-900 font-medium"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-extrabold text-slate-700 mb-1.5">Email Address *</label>
                          <input 
                            required 
                            type="email" 
                            placeholder="ananya@brand.com" 
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/20 text-slate-900 font-medium"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-extrabold text-slate-700 mb-1.5">Phone Number *</label>
                          <input 
                            required 
                            type="tel" 
                            placeholder="+91 98765 43210" 
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/20 text-slate-900 font-medium"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-extrabold text-slate-700 mb-1.5">Company Name *</label>
                          <input 
                            required 
                            type="text" 
                            placeholder="Your Brand Pvt. Ltd." 
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/20 text-slate-900 font-medium"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-extrabold text-slate-700 mb-1.5">Your Role *</label>
                          <input 
                            required 
                            type="text" 
                            placeholder="Head of Operations" 
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/20 text-slate-900 font-medium"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-extrabold text-slate-700 mb-1.5">Industry *</label>
                          <select required className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/20 text-slate-900 font-medium bg-white">
                            <option value="">Select industry</option>
                            <option value="Fashion">Fashion & Lifestyle</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Beauty">Beauty & Care</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-extrabold text-slate-700 mb-1.5">Monthly Shipment Volume *</label>
                        <select required className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/20 text-slate-900 font-medium bg-white">
                          <option value="">Select volume</option>
                          <option value="1-500">1 - 500</option>
                          <option value="500-2000">500 - 2,000</option>
                          <option value="2000+">2,000+</option>
                        </select>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-extrabold text-slate-700 mb-1.5">Preferred Date</label>
                          <input 
                            type="date" 
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/20 text-slate-900 font-medium"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-extrabold text-slate-700 mb-1.5">Preferred Time</label>
                          <select className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/20 text-slate-900 font-medium bg-white">
                            <option value="">Select time slot</option>
                            <option value="Morning">10:00 AM - 1:00 PM IST</option>
                            <option value="Afternoon">2:00 PM - 5:00 PM IST</option>
                            <option value="Evening">5:00 PM - 7:00 PM IST</option>
                          </select>
                        </div>
                      </div>

                      <button 
                        type="submit" 
                        className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#FFC700] hover:bg-[#e5b300] py-4 text-base font-extrabold text-black transition-all shadow-lg shadow-yellow-500/20 active:scale-[0.99]"
                      >
                        Book My Demo <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                      </button>
                    </>
                  )}

                  {/* TAB 4: SECURITY INQUIRY */}
                  {activeTab === 'security' && (
                    <>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-extrabold text-slate-700 mb-1.5">Full Name *</label>
                          <input 
                            required 
                            type="text" 
                            placeholder="Your Name" 
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/20 text-slate-900 font-medium"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-extrabold text-slate-700 mb-1.5">Email Address *</label>
                          <input 
                            required 
                            type="email" 
                            placeholder="you@company.com" 
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/20 text-slate-900 font-medium"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-extrabold text-slate-700 mb-1.5">Company Name *</label>
                          <input 
                            required 
                            type="text" 
                            placeholder="Company Pvt. Ltd." 
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/20 text-slate-900 font-medium"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-extrabold text-slate-700 mb-1.5">Your Role</label>
                          <input 
                            type="text" 
                            placeholder="CISO, CTO, etc." 
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/20 text-slate-900 font-medium"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-extrabold text-slate-700 mb-1.5">Security Question or Requirement *</label>
                        <textarea 
                          required 
                          rows={4} 
                          placeholder="Tell us about your security requirements, compliance needs, or specific questions..." 
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/20 text-slate-900 font-medium resize-none"
                        />
                      </div>

                      <button 
                        type="submit" 
                        className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#FFC700] hover:bg-[#e5b300] py-4 text-base font-extrabold text-black transition-all shadow-lg shadow-yellow-500/20 active:scale-[0.99]"
                      >
                        Contact Security Team <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                      </button>
                    </>
                  )}

                </form>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ----------------- Multi-Column Footer ----------------- */}
      <footer className="border-t border-slate-800/80 bg-[#060B18] py-16 text-sm text-slate-400">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
            
            {/* Col 1: Brand Info */}
            <div className="lg:col-span-1 space-y-4">
              <Logo />
              <p className="text-xs text-slate-400 leading-relaxed">
                India&apos;s next-generation logistics technology platform. Delivering products, processing returns, exchanges, and refunds — all within 24 hours.
              </p>
              <div className="text-xs font-bold text-[#FFC700]">
                Doorstep in 24 Hours.
              </div>
              <div className="flex items-center gap-2 pt-2">
                {[
                  { icon: <LinkedinIcon />, label: 'LinkedIn' },
                  { icon: <TwitterXIcon />, label: 'X' },
                  { icon: <InstagramIcon />, label: 'Instagram' },
                  { icon: <FacebookIcon />, label: 'Facebook' },
                  { icon: <YoutubeIcon />, label: 'YouTube' },
                ].map((s, idx) => (
                  <a key={idx} href="/" className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-[#FFC700] hover:border-yellow-500/30 transition-colors">
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Col 2: Company */}
            <div>
              <h4 className="text-xs font-extrabold text-[#FFC700] uppercase tracking-wider mb-4 font-mono">COMPANY</h4>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="/services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>

            {/* Col 3: Services */}
            <div>
              <h4 className="text-xs font-extrabold text-[#FFC700] uppercase tracking-wider mb-4 font-mono">SERVICES</h4>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li><a href="/services" className="hover:text-white transition-colors">24H Delivery</a></li>
                <li><a href="/services" className="hover:text-white transition-colors">Returns</a></li>
                <li><a href="/services" className="hover:text-white transition-colors">Exchanges</a></li>
                <li><a href="/services" className="hover:text-white transition-colors">Open Box Verification</a></li>
              </ul>
            </div>

            {/* Col 4: Industries */}
            <div>
              <h4 className="text-xs font-extrabold text-[#FFC700] uppercase tracking-wider mb-4 font-mono">INDUSTRIES</h4>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li><a href="/industries" className="hover:text-white transition-colors">Fashion & Lifestyle</a></li>
                <li><a href="/industries" className="hover:text-white transition-colors">Electronics</a></li>
                <li><a href="/industries" className="hover:text-white transition-colors">Beauty & Care</a></li>
                <li><a href="/industries" className="hover:text-white transition-colors">FMCG & Grocery</a></li>
              </ul>
            </div>

            {/* Col 5: Legal */}
            <div>
              <h4 className="text-xs font-extrabold text-[#FFC700] uppercase tracking-wider mb-4 font-mono">LEGAL</h4>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li><a href="/contact" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Terms & Conditions</a></li>
                <li><a href="/partners" className="hover:text-white transition-colors">Partner Program</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Contact Sales</a></li>
              </ul>
            </div>

          </div>

          <div className="pt-8 text-center text-xs text-slate-500">
            © 2026 ZILOGICX Technologies Private Limited. All rights reserved.
          </div>

        </div>
      </footer>

    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#070e1b] flex items-center justify-center text-white">Loading...</div>}>
      <ContactContent />
    </Suspense>
  );
}

