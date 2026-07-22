'use client';

import React from 'react';
import { Logo } from '@/components/Logo';
import { WaveBackground } from '@/components/WaveBackground';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { 
  GitBranch, 
  Brain, 
  Radio, 
  Zap, 
  TrendingUp, 
  BarChart3, 
  Building2, 
  Store, 
  Smartphone, 
  MapPin, 
  Activity, 
  Code,
  Shield,
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

import { HeaderNav } from '@/components/HeaderNav';

export default function TechnologyPage() {
  return (
    <div className="relative min-h-screen bg-[#070e1b] text-slate-100 selection:bg-[#FFC700] selection:text-black">
      
      {/* Sticky Header Nav */}
      <HeaderNav activePage="Technology" />

      {/* ----------------- Hero Section (Screenshot 1) ----------------- */}
      <section className="relative pt-20 pb-24 md:pt-32 md:pb-32 overflow-hidden bg-[#070e1b] hero-glow-container text-center">
        <WaveBackground />

        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Badge Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/40 bg-yellow-500/10 px-4 py-1.5 text-xs sm:text-sm font-semibold text-[#FFC700] mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#FFC700]" />
            <span>Technology</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            AI-Powered Logistics Intelligence
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Our proprietary technology stack makes 24-hour delivery possible at scale — combining machine learning, real-time data, and intelligent automation.
          </p>

        </div>
      </section>

      {/* ----------------- Built for Speed, Scale & Reliability (Screenshots 1 & 3) ----------------- */}
      <section className="py-20 bg-white text-slate-900 border-t border-slate-200">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6">
            Built for Speed, Scale & Reliability
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            ZILOGICX is not just a logistics company — we are a technology company that happens to move packages. Every delivery, return, and exchange in our network is powered by a sophisticated AI engine that makes thousands of decisions per second to ensure your shipment arrives on time, every time.
          </p>
        </div>
      </section>

      {/* ----------------- Six Pillars of Logistics Intelligence (Screenshot 4) ----------------- */}
      <section className="py-20 bg-[#F8FAFC] text-slate-900 border-t border-slate-200">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold tracking-widest text-[#D9A300] uppercase font-mono">
              CORE AI CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-2 mb-3">
              Six Pillars of Logistics Intelligence
            </h2>
          </div>

          {/* 6 Pillar Cards (3 Cols x 2 Rows) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <GitBranch className="w-6 h-6 text-blue-600" />,
                statVal: 40,
                statSuffix: '%',
                statLabel: 'Faster Delivery',
                title: 'AI Route Optimization',
                desc: 'Our machine learning engine analyzes real-time traffic, weather, delivery density, and historical patterns to calculate the optimal delivery route for every shipment — updated dynamically as conditions change.',
                highlighted: false
              },
              {
                icon: <Brain className="w-6 h-6 text-blue-600" />,
                statVal: 99.9,
                statSuffix: '%',
                statDecimals: 1,
                statLabel: 'On-Time Rate',
                title: 'Delivery Intelligence',
                desc: 'Predictive models anticipate delays before they happen and automatically reroute shipments to maintain the 24-hour promise. Our system learns from every delivery to continuously improve accuracy.',
                highlighted: false
              },
              {
                icon: <Radio className="w-6 h-6 text-blue-600" />,
                statVal: 30,
                statSuffix: 's',
                statLabel: 'Update Interval',
                title: 'Real-Time Tracking',
                desc: 'Sub-minute GPS updates for every shipment in our network. Brands and customers get live visibility into exactly where their package is at every moment.',
                highlighted: false
              },
              {
                icon: <Zap className="w-6 h-6 text-blue-600" />,
                statVal: 95,
                statSuffix: '%',
                statLabel: 'Automation Rate',
                title: 'Automated Operations',
                desc: 'From order intake to final delivery confirmation, our automation layer eliminates manual touchpoints — reducing errors, speeding up processing, and scaling effortlessly.',
                highlighted: false
              },
              {
                icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
                statVal: 3,
                statSuffix: 'x',
                statLabel: 'Capacity Efficiency',
                title: 'Predictive Logistics',
                desc: 'Demand forecasting models predict shipment volumes by city, day, and time — allowing us to pre-position delivery partners and vehicles for maximum efficiency.',
                highlighted: true
              },
              {
                icon: <BarChart3 className="w-6 h-6 text-blue-600" />,
                statVal: 50,
                statSuffix: '+',
                statLabel: 'KPI Metrics',
                title: 'Enterprise Analytics',
                desc: 'Comprehensive dashboards give brands deep visibility into delivery performance, return rates, customer satisfaction, and operational efficiency — with actionable insights.',
                highlighted: false
              }
            ].map((p, idx) => (
              <div 
                key={idx} 
                className={`rounded-2xl p-8 bg-white border custom-shadow-sm flex flex-col justify-between transition-all duration-300 hover:border-[#FFC700] hover:shadow-xl hover:shadow-yellow-500/10 hover:-translate-y-1 ${
                  p.highlighted 
                    ? 'border-[#FFC700] ring-2 ring-yellow-400/20 shadow-md' 
                    : 'border-slate-200'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-3 bg-[#EBF3FE] rounded-xl">
                      {p.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-xl sm:text-2xl font-black text-[#D9A300]">
                        <AnimatedCounter target={p.statVal} suffix={p.statSuffix} decimals={p.statDecimals || 0} />
                      </div>
                      <div className="text-[11px] font-bold text-slate-400">{p.statLabel}</div>
                    </div>
                  </div>

                  <h3 className="text-lg font-extrabold text-slate-900 mb-2 leading-tight">{p.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ----------------- Six Powerful Platforms (Screenshots 2 & 5) ----------------- */}
      <section className="py-24 bg-[#060c1e] text-white border-t border-slate-800">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold tracking-widest text-[#FFC700] uppercase font-mono">
              PLATFORM SUITE
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-2 mb-3">
              Six Powerful Platforms
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Every stakeholder in the logistics chain has a dedicated, purpose-built platform.
            </p>
          </div>

          {/* 6 Platform Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Building2 className="w-5 h-5 text-black" />,
                title: 'Brand Dashboard',
                desc: 'A unified control panel for brands to manage shipments, track deliveries, view analytics, and configure logistics settings.',
                highlighted: false
              },
              {
                icon: <Store className="w-5 h-5 text-black" />,
                title: 'Retail Store Dashboard',
                desc: 'Store-level logistics management for retail chains — manage pickups, track deliveries, and monitor store performance.',
                highlighted: true
              },
              {
                icon: <Smartphone className="w-5 h-5 text-black" />,
                title: 'Delivery Partner App',
                desc: 'Mobile app for field delivery agents with turn-by-turn navigation, delivery confirmation, and real-time communication.',
                highlighted: false
              },
              {
                icon: <MapPin className="w-5 h-5 text-black" />,
                title: 'Customer Tracking Portal',
                desc: 'Real-time shipment tracking for end customers with live map view, delivery updates, and communication tools.',
                highlighted: false
              },
              {
                icon: <Activity className="w-5 h-5 text-black" />,
                title: 'Operations Control Center',
                desc: 'Live ops monitoring dashboard for ZILOGICX operations teams — real-time network visibility and exception management.',
                highlighted: false
              },
              {
                icon: <Code className="w-5 h-5 text-black" />,
                title: 'API & Integrations',
                desc: 'RESTful APIs and pre-built integrations for Shopify, WooCommerce, Magento, and custom e-commerce platforms.',
                highlighted: false
              }
            ].map((plat, idx) => (
              <div 
                key={idx} 
                className={`bg-[#0B152A]/90 rounded-2xl p-8 border transition-all duration-300 hover:border-[#FFC700] hover:shadow-xl hover:shadow-yellow-500/10 hover:-translate-y-1 flex flex-col justify-between ${
                  plat.highlighted 
                    ? 'border-[#FFC700] ring-1 ring-yellow-400/30 shadow-xl' 
                    : 'border-slate-800/80'
                }`}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#FFC700] flex items-center justify-center mb-6 shadow-md shadow-yellow-500/10">
                    {plat.icon}
                  </div>
                  <h3 className="text-lg font-extrabold text-white mb-2 leading-tight">{plat.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">{plat.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ----------------- Connects with Your Stack (New Screenshot) ----------------- */}
      <section className="py-20 bg-[#F8FAFC] text-slate-900 border-t border-slate-200">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">
            Connects with Your Stack
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mb-12 font-normal">
            Pre-built integrations with the tools you already use — plus a full REST API for custom connections.
          </p>

          {/* 12 Integration Pill Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 max-w-5xl mx-auto">
            {[
              'Shopify',
              'WooCommerce',
              'Magento',
              'Unicommerce',
              'Vinculum',
              'Razorpay',
              'PayU',
              'WhatsApp Business',
              'Salesforce',
              'SAP',
              'Zoho',
            ].map((tool, idx) => (
              <span 
                key={idx} 
                className="px-5 py-2.5 rounded-full bg-white text-slate-800 border border-slate-200 text-sm font-extrabold custom-shadow-sm hover:border-[#FFC700] hover:shadow-md hover:shadow-yellow-500/10 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
              >
                {tool}
              </span>
            ))}

            {/* Dark Active Pill for Custom API */}
            <span className="px-6 py-2.5 rounded-full bg-[#070e1b] text-white border border-yellow-500/40 text-sm font-extrabold shadow-md hover:border-[#FFC700] hover:shadow-lg hover:shadow-yellow-500/20 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">
              Custom API
            </span>
          </div>

        </div>
      </section>

      {/* ----------------- Enterprise-Grade Security (New Screenshot) ----------------- */}
      <section className="py-20 bg-white text-slate-900 border-t border-slate-200">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-extrabold tracking-widest text-[#D9A300] uppercase font-mono">
                SECURITY & COMPLIANCE
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Enterprise-Grade Security
              </h2>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                All data in the ZILOGICX platform is encrypted in transit and at rest. We comply with India&apos;s data protection regulations and maintain SOC 2 Type II standards.
              </p>

              <a 
                href="/contact?tab=security" 
                className="inline-flex items-center gap-2 rounded-xl bg-[#1249C7] hover:bg-[#0A2E85] text-white font-extrabold px-6 py-3.5 transition-all shadow-md shadow-blue-600/20 hover:border-[#FFC700] border border-transparent"
              >
                Talk to Our Security Team <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </a>
            </div>

            {/* Right Column: 6 Security Feature Cards (2 Cols x 3 Rows) */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'AES-256 data encryption',
                'TLS 1.3 in transit',
                'Role-based access control',
                'Audit logs for all actions',
                '99.99% platform uptime SLA',
                'GDPR & PDPB compliant'
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-4.5 flex items-center gap-3.5 custom-shadow-sm transition-all duration-300 hover:border-[#FFC700] hover:shadow-md hover:shadow-yellow-500/10 hover:-translate-y-0.5"
                >
                  <div className="p-2 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                    <Shield className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <span className="text-xs sm:text-sm font-extrabold text-slate-800">{item}</span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* ----------------- CTA Banner ----------------- */}
      <section className="py-20 bg-gradient-to-r from-[#1249C7] via-[#1658E8] to-[#0A2E85] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_0)] [background-size:20px_20px] pointer-events-none" />

        <div className="container mx-auto max-w-5xl px-4 sm:px-6 relative z-10">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Power Your Logistics with AI
          </h2>
          <p className="text-base sm:text-xl text-blue-100 max-w-2xl mx-auto mb-10 font-normal">
            Integrate with ZILOGICX in minutes and unlock 24-hour deliveries across India.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="/contact?tab=general" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-[#FFC700] hover:bg-[#e5b300] px-8 py-4 text-base font-extrabold text-black transition-all shadow-xl shadow-yellow-500/20"
            >
              Get Started <ArrowRight className="w-5 h-5 stroke-[2.5]" />
            </a>
            <a 
              href="/contact?tab=general" 
              className="w-full sm:w-auto rounded-lg border border-white/40 bg-white/10 hover:bg-white/20 px-8 py-4 text-base font-bold text-white transition-all backdrop-blur-sm"
            >
              Contact Sales
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
                <li><a href="/contact?tab=general" className="hover:text-white transition-colors">Careers</a></li>
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
                <li><a href="/contact?tab=general" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/contact?tab=general" className="hover:text-white transition-colors">Terms & Conditions</a></li>
                <li><a href="/contact?tab=general" className="hover:text-white transition-colors">Partner Program</a></li>
                <li><a href="/contact?tab=general" className="hover:text-white transition-colors">Contact Sales</a></li>
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
