'use client';

import React, { useState } from 'react';
import { Logo } from '@/components/Logo';
import { WaveBackground } from '@/components/WaveBackground';
import { 
  Shirt, 
  Cpu, 
  Sparkles, 
  ShoppingCart, 
  Home, 
  Heart, 
  Footprints, 
  Star, 
  Box, 
  Store,
  Check,
  AlertCircle,
  ArrowRight
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

interface IndustryDetail {
  id: string;
  name: string;
  subtitle: string;
  icon: React.ReactNode;
  activeIcon: React.ReactNode;
  description: string;
  statNumber: string;
  statText: string;
  challenges: string[];
  solutions: string[];
}

import { HeaderNav } from '@/components/HeaderNav';

export default function IndustriesPage() {
  const [activeTab, setActiveTab] = useState('fashion');

  const industriesData: IndustryDetail[] = [
    {
      id: 'fashion',
      name: 'Fashion & Lifestyle',
      subtitle: 'Fast fashion needs fast logistics.',
      icon: <Shirt className="w-5 h-5 text-blue-600" />,
      activeIcon: <Shirt className="w-5 h-5 text-[#FFC700]" />,
      description: 'Fashion brands live and die by speed. ZILOGICX\'s 24-hour delivery and exchange network ensures your customers receive their orders — and process size exchanges — faster than any competitor.',
      statNumber: '60%',
      statText: 'Reduction in return disputes',
      challenges: [
        'High return and exchange rates',
        'Size and variant complexity',
        'Seasonal demand spikes',
        'Customer experience expectations'
      ],
      solutions: [
        '24-hour delivery and exchange',
        'Open box verification reduces disputes',
        'Scalable capacity for peak seasons',
        'White-label delivery experience'
      ]
    },
    {
      id: 'electronics',
      name: 'Electronics & Gadgets',
      subtitle: 'High-value items need ultra-secure logistics.',
      icon: <Cpu className="w-5 h-5 text-blue-600" />,
      activeIcon: <Cpu className="w-5 h-5 text-[#FFC700]" />,
      description: 'Deliver delicate and premium tech electronics with Open Box Verification to ensure transit integrity and eliminate fake return claims.',
      statNumber: '99.9%',
      statText: 'Safe delivery guarantee',
      challenges: [
        'High-value transit risk',
        'Fraudulent return claims',
        'Damage in transit',
        'Serial number tracking'
      ],
      solutions: [
        'Open box OTP verification',
        'Insured transit protection',
        'Serial number scanning',
        'Secure tamper-evident packing'
      ]
    },
    {
      id: 'beauty',
      name: 'Beauty & Personal Care',
      subtitle: 'Rapid delivery for impulse beauty buys.',
      icon: <Sparkles className="w-5 h-5 text-blue-600" />,
      activeIcon: <Sparkles className="w-5 h-5 text-[#FFC700]" />,
      description: 'Boost customer repeat purchases with 24-hour delivery and climate-controlled storage for cosmetics, skincare, and fragrance products.',
      statNumber: '45%',
      statText: 'Increase in repeat orders',
      challenges: [
        'Temperature sensitivity',
        'Expiry date management',
        'Impulse buy cancellation risk',
        'Leakage prevention'
      ],
      solutions: [
        'Climate-controlled transit',
        'FEFO inventory management',
        'Same-day hyper-fast delivery',
        'Leak-proof packaging guidelines'
      ]
    },
    {
      id: 'fmcg',
      name: 'FMCG & Grocery',
      subtitle: 'Essential goods delivered in hours.',
      icon: <ShoppingCart className="w-5 h-5 text-blue-600" />,
      activeIcon: <ShoppingCart className="w-5 h-5 text-[#FFC700]" />,
      description: 'Supply urban households and retail outlets with high-frequency, same-day delivery of daily consumables and packaged foods.',
      statNumber: 'Sub-2H',
      statText: 'Intra-city delivery speed',
      challenges: [
        'Low profit margins',
        'High delivery frequency',
        'Perishability windows',
        'Bulk weight handling'
      ],
      solutions: [
        'Hyperlocal micro-hubs',
        'Route bundling & density',
        'Same-day scheduled slots',
        'Dedicated EV fleet delivery'
      ]
    },
    {
      id: 'home',
      name: 'Home & Living',
      subtitle: 'Heavy and bulky items handled with care.',
      icon: <Home className="w-5 h-5 text-blue-600" />,
      activeIcon: <Home className="w-5 h-5 text-[#FFC700]" />,
      description: 'Deliver decor, furniture, and kitchenware safely with specialized two-man delivery teams and appointment scheduling.',
      statNumber: '98.5%',
      statText: 'First-attempt delivery rate',
      challenges: [
        'Bulky & heavy packaging',
        'Appointment coordination',
        'Higher transit damage risk',
        'Complex assembly needs'
      ],
      solutions: [
        'Two-man white-glove delivery',
        'Scheduled delivery slots',
        'Unboxing & packaging disposal',
        'Heavy-duty transport vehicles'
      ]
    },
    {
      id: 'pharma',
      name: 'Healthcare & Pharma',
      subtitle: 'Critical medicines delivered reliably.',
      icon: <Heart className="w-5 h-5 text-blue-600" />,
      activeIcon: <Heart className="w-5 h-5 text-[#FFC700]" />,
      description: 'Urgent delivery of pharmaceuticals, wellness products, and diagnostic equipment with strict temperature monitoring.',
      statNumber: '100%',
      statText: 'Temperature compliance',
      challenges: [
        'Strict SLA compliance',
        'Cold-chain maintenance',
        'Regulatory tracking',
        'Emergency delivery demands'
      ],
      solutions: [
        'Cold-chain insulated boxes',
        '24/7 priority routing',
        'Batch & expiry tracking',
        'Verified delivery handoff'
      ]
    },
    {
      id: 'footwear',
      name: 'Footwear',
      subtitle: 'Instant size exchanges at the doorstep.',
      icon: <Footprints className="w-5 h-5 text-blue-600" />,
      activeIcon: <Footprints className="w-5 h-5 text-[#FFC700]" />,
      description: 'Eliminate shoe sizing hesitation with single-trip doorstep size exchanges and instant open-box trial.',
      statNumber: '70%',
      statText: 'Faster size exchange turnaround',
      challenges: [
        'High return rate due to fit',
        'Double shipping costs',
        'Inventory holding delay',
        'Packaging damage'
      ],
      solutions: [
        'Single-trip doorstep exchanges',
        'On-the-spot size trial',
        'Automated warehouse restock',
        'Protection box packaging'
      ]
    },
    {
      id: 'luxury',
      name: 'Lifestyle & Luxury',
      subtitle: 'White-glove delivery for premium brands.',
      icon: <Star className="w-5 h-5 text-blue-600" />,
      activeIcon: <Star className="w-5 h-5 text-[#FFC700]" />,
      description: 'Deliver high-end luxury products with discreet, uniformed couriers and VIP delivery verification.',
      statNumber: '100%',
      statText: 'VIP customer satisfaction',
      challenges: [
        'High theft risk',
        'Brand image preservation',
        'Exclusive delivery expectations',
        'Secure payment collection'
      ],
      solutions: [
        'Discreet unbranded transit',
        'Hand-delivered white-glove SLA',
        'OTP & ID verification',
        'Encrypted COD handling'
      ]
    },
    {
      id: 'goods',
      name: 'Consumer Goods',
      subtitle: 'High-volume distribution across India.',
      icon: <Box className="w-5 h-5 text-blue-600" />,
      activeIcon: <Box className="w-5 h-5 text-[#FFC700]" />,
      description: 'Move bulk goods from manufacturers to distributors, retailers, and direct customers with complete end-to-end visibility.',
      statNumber: '500+',
      statText: 'City coverage across India',
      challenges: [
        'Multi-channel supply complexity',
        'Pan-India reach requirements',
        'LTL vs FTL optimization',
        'Tracking fragmentation'
      ],
      solutions: [
        'Unified multi-channel dashboard',
        'Nationwide hub network',
        'Flexible LTL & FTL options',
        'Sub-minute GPS tracking'
      ]
    },
    {
      id: 'retail',
      name: 'Retail Chains & Malls',
      subtitle: 'Omnichannel fulfillment for physical stores.',
      icon: <Store className="w-5 h-5 text-blue-600" />,
      activeIcon: <Store className="w-5 h-5 text-[#FFC700]" />,
      description: 'Turn physical retail stores into fulfillment hubs with store-to-door delivery and intra-store inventory transfers.',
      statNumber: '30%',
      statText: 'Reduction in store inventory lockup',
      challenges: [
        'Store stock synchronization',
        'Inter-store transfer delays',
        'Omnichannel order routing',
        'Peak mall traffic hours'
      ],
      solutions: [
        'Store-to-door direct dispatch',
        'Intra-city store transfers',
        'POS system API integration',
        'Off-peak replenishment'
      ]
    }
  ];

  const currentIndustry = industriesData.find(i => i.id === activeTab) || industriesData[0];

  return (
    <div className="relative min-h-screen bg-[#070e1b] text-slate-100 selection:bg-[#FFC700] selection:text-black">
      
      {/* Sticky Header Nav */}
      <HeaderNav activePage="Industries" />

      {/* ----------------- Hero Section (Screenshot 1) ----------------- */}
      <section className="relative pt-20 pb-24 md:pt-32 md:pb-32 overflow-hidden bg-[#070e1b] hero-glow-container text-center">
        <WaveBackground />

        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Badge Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/40 bg-yellow-500/10 px-4 py-1.5 text-xs sm:text-sm font-semibold text-[#FFC700] mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#FFC700]" />
            <span>Industries</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Logistics Built for Every Industry
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            ZILOGICX delivers specialized logistics solutions tailored to the unique needs of each industry vertical.
          </p>

        </div>
      </section>

      {/* ----------------- Industry Spotlight Section (Screenshots 1 & 2) ----------------- */}
      <section className="py-20 bg-white text-slate-900 border-t border-slate-200">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Filter Pills Row (Top Horizontal Scrollable Badges) */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
            {industriesData.map((ind) => {
              const isActive = activeTab === ind.id;
              return (
                <button
                  key={ind.id}
                  onClick={() => setActiveTab(ind.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-extrabold transition-all border ${
                    isActive
                      ? 'bg-[#070e1b] text-[#FFC700] border-yellow-500/40 shadow-md ring-2 ring-yellow-400/20'
                      : 'bg-[#F8FAFC] text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100'
                  }`}
                >
                  {isActive ? ind.activeIcon : ind.icon}
                  <span>{ind.name}</span>
                </button>
              );
            })}
          </div>

          {/* Split Spotlight Container (2 Columns) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
            
            {/* Left Column: Blue Stat Card */}
            <div className="lg:col-span-6 rounded-3xl bg-gradient-to-br from-[#1249C7] via-[#0E3FAE] to-[#0A2E85] p-8 text-white flex flex-col justify-between shadow-xl">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#070e1b]/40 border border-yellow-500/30 flex items-center justify-center mb-6">
                  {currentIndustry.activeIcon}
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold mb-1">{currentIndustry.name}</h3>
                <p className="text-sm font-extrabold text-[#FFC700] mb-6">{currentIndustry.subtitle}</p>

                <p className="text-sm sm:text-base text-slate-100 leading-relaxed font-normal mb-8">
                  {currentIndustry.description}
                </p>
              </div>

              {/* Highlight Stat Box */}
              <div className="rounded-xl bg-[#070e1b]/50 border border-slate-700/60 p-4 inline-flex items-center gap-4">
                <span className="text-2xl sm:text-3xl font-black text-[#FFC700]">{currentIndustry.statNumber}</span>
                <span className="text-xs sm:text-sm font-semibold text-slate-200">{currentIndustry.statText}</span>
              </div>
            </div>

            {/* Right Column: Challenges, Solutions & CTA */}
            <div className="lg:col-span-6 flex flex-col justify-between gap-6">
              
              {/* Industry Challenges Card */}
              <div className="rounded-2xl bg-[#FFFBEB] border border-[#FDE68A] p-6">
                <h4 className="text-xs font-extrabold text-[#D9A300] uppercase tracking-widest mb-4 font-mono">
                  INDUSTRY CHALLENGES
                </h4>
                <div className="space-y-2.5">
                  {currentIndustry.challenges.map((c, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-amber-500/20 text-[#D9A300] font-black text-xs flex items-center justify-center flex-shrink-0">
                        !
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-slate-800">{c}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ZILOGICX Solutions Card */}
              <div className="rounded-2xl bg-[#F0FDF4] border border-[#BBF7D0] p-6">
                <h4 className="text-xs font-extrabold text-emerald-700 uppercase tracking-widest mb-4 font-mono">
                  ZILOGICX SOLUTIONS
                </h4>
                <div className="space-y-2.5">
                  {currentIndustry.solutions.map((s, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-600 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-slate-800">{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Full-Width Yellow CTA Button */}
              <a 
                href="/#contact" 
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#FFC700] hover:bg-[#e5b300] py-4 text-sm font-extrabold text-black transition-all shadow-md shadow-yellow-500/15"
              >
                Get a Custom Quote for {currentIndustry.name} <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </a>

            </div>

          </div>

        </div>
      </section>

      {/* ----------------- All 10 Industry Verticals Grid (Screenshot 3) ----------------- */}
      <section className="py-20 bg-[#F8FAFC] text-slate-900 border-t border-slate-200">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              All 10 Industry Verticals
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {industriesData.map((ind) => {
              const isActive = activeTab === ind.id;
              return (
                <button
                  key={ind.id}
                  onClick={() => setActiveTab(ind.id)}
                  className={`flex flex-col items-center justify-center p-6 rounded-2xl border text-center transition-all min-h-[140px] ${
                    isActive
                      ? 'bg-[#FFFBEB] border-[#FFC700] shadow-md ring-2 ring-yellow-400/20'
                      : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-sm'
                  }`}
                >
                  <div className={`p-3 rounded-2xl mb-3 flex items-center justify-center ${isActive ? 'bg-[#FFC700]/20' : 'bg-blue-50'}`}>
                    {ind.icon}
                  </div>
                  <span className="text-xs sm:text-sm font-extrabold text-slate-900 leading-snug">{ind.name}</span>
                  {isActive && (
                    <span className="text-[10px] font-bold text-[#D9A300] mt-1 uppercase font-mono">Active</span>
                  )}
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* ----------------- Your Industry, Our Expertise CTA Banner (Screenshot 4) ----------------- */}
      <section className="py-20 bg-gradient-to-r from-[#1249C7] via-[#1658E8] to-[#0A2E85] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_0)] [background-size:20px_20px] pointer-events-none" />

        <div className="container mx-auto max-w-5xl px-4 sm:px-6 relative z-10">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Your Industry, Our Expertise
          </h2>
          <p className="text-base sm:text-xl text-blue-100 max-w-2xl mx-auto mb-10 font-normal">
            Get a custom logistics solution built for your specific industry needs.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="/#contact" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-[#FFC700] hover:bg-[#e5b300] px-8 py-4 text-base font-extrabold text-black transition-all shadow-xl shadow-yellow-500/20"
            >
              Get a Custom Quote <ArrowRight className="w-5 h-5 stroke-[2.5]" />
            </a>
            <a 
              href="/services" 
              className="w-full sm:w-auto rounded-lg border border-white/40 bg-white/10 hover:bg-white/20 px-8 py-4 text-base font-bold text-white transition-all backdrop-blur-sm"
            >
              View All Services
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
                <li><a href="/#contact" className="hover:text-white transition-colors">Partner Program</a></li>
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
