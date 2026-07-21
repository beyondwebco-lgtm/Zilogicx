'use client';

import React, { useState } from 'react';
import { Logo } from '@/components/Logo';
import { HeaderNav } from '@/components/HeaderNav';
import { WaveBackground } from '@/components/WaveBackground';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { 
  Building2, 
  Store, 
  Truck, 
  Code, 
  Check, 
  ChevronDown, 
  Star, 
  ArrowRight,
  ShieldCheck,
  Zap
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

interface PartnerModel {
  id: string;
  name: string;
  subtitle: string;
  icon: React.ReactNode;
  activeIcon: React.ReactNode;
  description: string;
  idealFor: string[];
  ctaText: string;
  features: string[];
}

export default function PartnersPage() {
  const [activeModel, setActiveModel] = useState('brand');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Industries', href: '/industries' },
    { name: 'Technology', href: '/technology' },
    { name: 'Partners', href: '/partners', active: true },
    { name: 'Contact', href: '/contact' },
  ];

  const modelsData: PartnerModel[] = [
    {
      id: 'brand',
      name: 'Brand Partner',
      subtitle: 'Deliver faster, grow bigger.',
      icon: <Building2 className="w-5 h-5 text-blue-600" />,
      activeIcon: <Building2 className="w-5 h-5 text-[#FFC700]" />,
      description: 'D2C brands, e-commerce businesses, and product companies partner with ZILOGICX to offer 24-hour delivery, seamless returns, and exchange logistics to their customers — without building their own logistics infrastructure.',
      idealFor: ['D2C Brands', 'E-commerce Stores', 'Marketplace Sellers', 'Manufacturers'],
      ctaText: 'Become a Brand Partner',
      features: [
        '24-hour delivery across 50+ cities',
        'Dedicated account manager',
        'Real-time tracking dashboard',
        'Automated return & exchange processing',
        'AI-powered route optimization',
        'Volume-based pricing tiers',
        'API & platform integrations',
        'Monthly performance reports'
      ]
    },
    {
      id: 'retail',
      name: 'Retail Partner',
      subtitle: 'Turn stores into fulfillment hubs.',
      icon: <Store className="w-5 h-5 text-blue-600" />,
      activeIcon: <Store className="w-5 h-5 text-[#FFC700]" />,
      description: 'Retail chains and local store owners partner with ZILOGICX to offer store-to-door delivery, same-day returns, and hyperlocal fulfillment using existing store inventory.',
      idealFor: ['Retail Chains', 'Shopping Malls', 'Boutiques', 'Supermarket Stores'],
      ctaText: 'Become a Retail Partner',
      features: [
        'Store-to-door fast delivery',
        'Inventory synchronization API',
        'Hyperlocal pickup network',
        'Intra-city store transfers',
        'POS system integration',
        'Off-peak replenishment',
        'In-store pickup management',
        'Dedicated retail support'
      ]
    },
    {
      id: 'delivery',
      name: 'Delivery Partner',
      subtitle: 'Earn more with 24-hour delivery.',
      icon: <Truck className="w-5 h-5 text-blue-600" />,
      activeIcon: <Truck className="w-5 h-5 text-[#FFC700]" />,
      description: 'Independent fleet operators and delivery agents join India\'s fastest-growing logistics network with guaranteed daily payouts, optimized routes, and full agent insurance.',
      idealFor: ['Fleet Owners', 'Independent Couriers', 'Logistics Agents', 'EV Fleet Operators'],
      ctaText: 'Join as a Delivery Partner',
      features: [
        'Daily guaranteed payouts',
        'AI turn-by-turn navigation app',
        'Flexible working hours',
        'Personal & vehicle insurance',
        'Performance incentive bonuses',
        'EV charging support',
        '24/7 partner helpline',
        'Dedicated hub support'
      ]
    },
    {
      id: 'tech',
      name: 'Technology Partner',
      subtitle: 'Integrate & build together.',
      icon: <Code className="w-5 h-5 text-blue-600" />,
      activeIcon: <Code className="w-5 h-5 text-[#FFC700]" />,
      description: 'Software platforms, WMS providers, ERPs, and e-commerce tech developers integrate with ZILOGICX\'s open APIs to offer seamless logistics capabilities to joint clients.',
      idealFor: ['E-commerce Platforms', 'ERP Systems', 'WMS Software', 'Payment Gateways'],
      ctaText: 'Become a Tech Partner',
      features: [
        'Full RESTful API access',
        'Sandbox dev environment',
        'Co-marketing opportunities',
        'Joint client onboarding',
        'Dedicated dev support',
        'Webhook event triggers',
        'Custom SLA connectors',
        'Revenue share program'
      ]
    }
  ];

  const currentModel = modelsData.find(m => m.id === activeModel) || modelsData[0];

  const faqs = [
    {
      q: 'What is the minimum shipment volume to become a Brand Partner?',
      a: 'We welcome businesses of all sizes! Whether you ship 10 orders a day or 10,000+ orders a day, ZILOGICX provides scalable logistics tiers tailored to your volume.'
    },
    {
      q: 'How long does the onboarding process take?',
      a: 'Onboarding typically takes between 24 to 48 hours. Our team assists with API integration, account setup, and staff training so you can go live immediately.'
    },
    {
      q: 'Do you offer a trial period?',
      a: 'Yes! We offer a 14-day risk-free pilot program allowing you to experience our 24-hour delivery and return SLA with no long-term commitment.'
    },
    {
      q: 'What cities does ZILOGICX currently cover?',
      a: 'ZILOGICX covers 50+ major metro and tier-1/tier-2 cities across India, including Mumbai, Delhi NCR, Bangalore, Hyderabad, Chennai, Kolkata, Pune, and Ahmedabad.'
    },
    {
      q: 'How does the pricing model work?',
      a: 'Our pricing is transparent and volume-based. You pay per successful delivery, exchange, or return pickup, with no hidden maintenance fees or setup costs.'
    },
    {
      q: 'Can I integrate ZILOGICX with my existing e-commerce platform?',
      a: 'Absolutely! We offer pre-built plugins for Shopify, WooCommerce, Magento, and Unicommerce, as well as a robust REST API for custom store setups.'
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#070e1b] text-slate-100 selection:bg-[#FFC700] selection:text-black">
      
      {/* Sticky Header Nav */}
      <HeaderNav activePage="Partners" />

      {/* ----------------- Hero Section (Screenshot 1) ----------------- */}
      <section className="relative pt-20 pb-24 md:pt-32 md:pb-32 overflow-hidden bg-[#070e1b] hero-glow-container text-center">
        <WaveBackground />

        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Badge Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/40 bg-yellow-500/10 px-4 py-1.5 text-xs sm:text-sm font-semibold text-[#FFC700] mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#FFC700]" />
            <span>Partner Program</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Grow Your Business with ZILOGICX
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal mb-10">
            Join India&apos;s fastest-growing logistics network. Whether you&apos;re a brand, retailer, delivery partner, or technology provider — there&apos;s a partnership model built for you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a 
              href="/#contact" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-[#FFC700] hover:bg-[#e5b300] px-8 py-3.5 text-base font-extrabold text-black transition-all shadow-xl shadow-yellow-500/20"
            >
              Apply Now <ArrowRight className="w-5 h-5 stroke-[2.5]" />
            </a>
            <a 
              href="/#contact" 
              className="w-full sm:w-auto rounded-lg border border-slate-700 bg-slate-900/80 hover:bg-slate-800 px-8 py-3.5 text-base font-bold text-white transition-all"
            >
              Talk to Partnerships Team
            </a>
          </div>

          {/* 4 Hero Stat Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <div className="bg-[#0B152A]/90 border border-slate-800/80 rounded-2xl p-6 text-center transition-all duration-300 hover:border-[#FFC700] hover:shadow-xl hover:shadow-yellow-500/10 hover:-translate-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#FFC700]">
                <AnimatedCounter target={500} suffix="+" />
              </div>
              <div className="text-xs font-semibold text-slate-400 mt-2">Active Brand Partners</div>
            </div>
            <div className="bg-[#0B152A]/90 border border-slate-800/80 rounded-2xl p-6 text-center transition-all duration-300 hover:border-[#FFC700] hover:shadow-xl hover:shadow-yellow-500/10 hover:-translate-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#FFC700]">
                <AnimatedCounter target={50} suffix="+" />
              </div>
              <div className="text-xs font-semibold text-slate-400 mt-2">Cities Covered</div>
            </div>
            <div className="bg-[#0B152A]/90 border border-slate-800/80 rounded-2xl p-6 text-center transition-all duration-300 hover:border-[#FFC700] hover:shadow-xl hover:shadow-yellow-500/10 hover:-translate-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#FFC700]">
                <AnimatedCounter target={24} suffix=" Hrs" />
              </div>
              <div className="text-xs font-semibold text-slate-400 mt-2">Delivery SLA</div>
            </div>
            <div className="bg-[#0B152A]/90 border border-slate-800/80 rounded-2xl p-6 text-center transition-all duration-300 hover:border-[#FFC700] hover:shadow-xl hover:shadow-yellow-500/10 hover:-translate-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#FFC700]">
                <AnimatedCounter target={99.9} suffix="%" decimals={1} />
              </div>
              <div className="text-xs font-semibold text-slate-400 mt-2">On-Time Rate</div>
            </div>
          </div>

        </div>
      </section>

      {/* ----------------- Four Ways to Partner with ZILOGICX (Screenshot 2) ----------------- */}
      <section className="py-20 bg-white text-slate-900 border-t border-slate-200">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-extrabold tracking-widest text-[#D9A300] uppercase font-mono">
              PARTNERSHIP MODELS
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-2 mb-3">
              Four Ways to Partner with ZILOGICX
            </h2>
          </div>

          {/* 4 Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {modelsData.map((m) => {
              const isActive = activeModel === m.id;
              return (
                <button
                  key={m.id}
                  onClick={() => setActiveModel(m.id)}
                  className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-extrabold transition-all border ${
                    isActive
                      ? 'bg-[#070e1b] text-white border-yellow-500/40 shadow-lg ring-2 ring-yellow-400/20'
                      : 'bg-[#F8FAFC] text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100'
                  }`}
                >
                  {isActive ? m.activeIcon : m.icon}
                  <span>{m.name}</span>
                </button>
              );
            })}
          </div>

          {/* Split Container (2 Columns) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Blue Card */}
            <div className="lg:col-span-5 rounded-3xl bg-gradient-to-br from-[#1249C7] via-[#0E3FAE] to-[#0A2E85] p-8 text-white flex flex-col justify-between shadow-xl">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#070e1b]/40 border border-yellow-500/30 flex items-center justify-center mb-6">
                  {currentModel.activeIcon}
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold mb-1">{currentModel.name}</h3>
                <p className="text-sm font-extrabold text-[#FFC700] mb-6">{currentModel.subtitle}</p>

                <p className="text-sm sm:text-base text-slate-100 leading-relaxed font-normal mb-8">
                  {currentModel.description}
                </p>

                <div className="mb-8">
                  <span className="text-[11px] font-extrabold text-slate-300 uppercase tracking-widest block mb-3 font-mono">
                    IDEAL FOR
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {currentModel.idealFor.map((item, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-full bg-[#070e1b]/60 border border-slate-700 text-xs font-bold text-slate-200">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <a 
                href="/#contact" 
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#FFC700] hover:bg-[#e5b300] py-3.5 text-sm font-extrabold text-black transition-all shadow-md shadow-yellow-500/15"
              >
                {currentModel.ctaText} <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </a>
            </div>

            {/* Right Column: What You Get (8 Feature Cards) */}
            <div className="lg:col-span-7 bg-[#F8FAFC] border border-slate-200 rounded-3xl p-8 flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-widest mb-6 font-mono">
                  WHAT YOU GET
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {currentModel.features.map((feature, idx) => (
                    <div key={idx} className="bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-3 custom-shadow-sm transition-all duration-300 hover:border-[#FFC700] hover:shadow-md hover:shadow-yellow-500/10 hover:-translate-y-0.5">
                      <div className="w-5 h-5 rounded-full bg-yellow-500/15 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5 text-[#D9A300] stroke-[3]" />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-slate-800">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ----------------- Onboarding Process (Screenshot 3) ----------------- */}
      <section className="py-20 bg-[#F8FAFC] text-slate-900 border-t border-slate-200">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold tracking-widest text-[#D9A300] uppercase font-mono">
              ONBOARDING PROCESS
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-2 mb-3">
              From Application to Live in 5 Steps
            </h2>
          </div>

          {/* 5 Step Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                step: '01',
                title: 'Apply Online',
                desc: 'Fill out the partner registration form with your business details and requirements.'
              },
              {
                step: '02',
                title: 'Discovery Call',
                desc: 'Our partnerships team schedules a 30-minute call to understand your needs and fit.'
              },
              {
                step: '03',
                title: 'Custom Proposal',
                desc: 'We create a tailored partnership proposal with pricing, SLAs, and integration plan.'
              },
              {
                step: '04',
                title: 'Onboarding',
                desc: 'Dedicated onboarding support to integrate systems, train your team, and go live.'
              },
              {
                step: '05',
                title: 'Go Live',
                desc: 'Start delivering in 24 hours with full support from your dedicated account manager.'
              }
            ].map((s, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between text-left custom-shadow-sm transition-all duration-300 hover:border-[#FFC700] hover:shadow-xl hover:shadow-yellow-500/10 hover:-translate-y-1 min-h-[220px]"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#070e1b] text-[#FFC700] font-black text-sm flex items-center justify-center mb-6 shadow-md border border-yellow-500/30">
                    {s.step}
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 mb-2 leading-snug">{s.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ----------------- What Our Partners Say (Screenshot 4) ----------------- */}
      <section className="py-24 bg-[#060c1e] text-white border-t border-slate-800">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold tracking-widest text-[#FFC700] uppercase font-mono">
              PARTNER STORIES
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-2 mb-3">
              What Our Partners Say
            </h2>
          </div>

          {/* 3 Review Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: `"ZILOGICX transformed our delivery operations. Our customers now expect 24-hour delivery as standard — and we deliver on that promise every single day."`,
                initial: 'V',
                name: 'Vikram Nair',
                role: 'Head of Operations, StyleForward India'
              },
              {
                quote: `"The exchange and return process used to be our biggest pain point. With ZILOGICX, it's completely automated. Our return rate dropped by 40% in the first quarter."`,
                initial: 'P',
                name: 'Priya Mehta',
                role: 'Founder & CEO, GlowUp Beauty'
              },
              {
                quote: `"As a retail chain, turning our stores into fulfillment centers was a game-changer. We're now competing with pure-play e-commerce on delivery speed."`,
                initial: 'A',
                name: 'Arjun Kapoor',
                role: 'VP Supply Chain, TrendZone Retail'
              }
            ].map((t, idx) => (
              <div 
                key={idx} 
                className="bg-[#0B152A]/90 border border-slate-800/80 rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#FFC700] hover:shadow-xl hover:shadow-yellow-500/10 hover:-translate-y-1"
              >
                <div>
                  <div className="flex gap-1 mb-6 text-[#FFC700]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FFC700] stroke-none" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-8">
                    {t.quote}
                  </p>
                </div>

                <div className="flex items-center gap-3.5 pt-6 border-t border-slate-800">
                  <div className="w-10 h-10 rounded-full bg-[#FFC700] text-black font-extrabold flex items-center justify-center text-sm flex-shrink-0">
                    {t.initial}
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-white leading-tight">{t.name}</h4>
                    <p className="text-xs text-slate-400 font-medium">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ----------------- Frequently Asked Questions (Screenshot 5) ----------------- */}
      <section className="py-20 bg-white text-slate-900 border-t border-slate-200">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6">
          
          <div className="text-center mb-14">
            <span className="text-xs font-extrabold tracking-widest text-[#D9A300] uppercase font-mono">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-2 mb-3">
              Frequently Asked Questions
            </h2>
          </div>

          {/* Accordion List */}
          <div className="space-y-4 mb-12">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx} 
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden custom-shadow-sm transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                  >
                    <span className="text-sm sm:text-base font-extrabold text-slate-900">
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${isOpen ? 'rotate-180 text-blue-600' : ''}`} />
                  </button>
                  
                  {isOpen && (
                    <div className="px-6 pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center space-y-4">
            <p className="text-sm font-medium text-slate-600">
              Still have questions? Our team is happy to help.
            </p>
            <a 
              href="/#contact" 
              className="inline-flex items-center gap-2 rounded-xl bg-[#1249C7] hover:bg-[#0A2E85] text-white font-extrabold px-7 py-3 text-sm transition-all shadow-md shadow-blue-600/20"
            >
              Contact Us <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </a>
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
                <li><a href="/#contact" className="hover:text-white transition-colors">Careers</a></li>
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
                <li><a href="/#contact" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/#contact" className="hover:text-white transition-colors">Terms & Conditions</a></li>
                <li><a href="/partners" className="hover:text-white transition-colors">Partner Program</a></li>
                <li><a href="/#contact" className="hover:text-white transition-colors">Contact Sales</a></li>
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
