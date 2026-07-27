'use client';

import React, { useState } from 'react';
import { Logo } from '@/components/Logo';
import { WaveBackground } from '@/components/WaveBackground';
import { 
  Truck, 
  RotateCcw, 
  RefreshCw, 
  CreditCard, 
  ShieldCheck, 
  ArrowUpRight, 
  Warehouse, 
  MapPin, 
  Building2,
  Check,
  ArrowRight,
  Clock,
  Globe
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

interface ServiceDetail {
  id: string;
  name: string;
  subtitle: string;
  icon: React.ReactNode;
  activeIcon: React.ReactNode;
  description: string;
  sla: string;
  coverage: string;
  features: string[];
}

import { HeaderNav } from '@/components/HeaderNav';

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState('delivery');

  const servicesData: ServiceDetail[] = [
    {
      id: 'delivery',
      name: '24-Hour Delivery',
      subtitle: 'Doorstep in 24 Hours. Guaranteed.',
      icon: <Truck className="w-5 h-5 text-blue-600" />,
      activeIcon: <Truck className="w-5 h-5 text-[#FFC700]" />,
      description: 'Our flagship service delivers products from brand warehouses or retail stores directly to customers\' doorsteps within 24 hours. Powered by AI route optimization and a nationwide network of trained delivery partners.',
      sla: 'SLA: 24 Hours',
      coverage: 'Pan-India',
      features: [
        'Same-day and next-day delivery options',
        'AI-optimized route planning',
        'Real-time GPS tracking',
        'Proof of delivery with photo confirmation',
        'Contactless delivery support',
        'Delivery to 500+ cities across India'
      ]
    },
    {
      id: 'returns',
      name: '24-Hour Returns',
      subtitle: 'Returns picked up within 24 hours.',
      icon: <RotateCcw className="w-5 h-5 text-blue-600" />,
      activeIcon: <RotateCcw className="w-5 h-5 text-[#FFC700]" />,
      description: 'Customer-initiated returns are picked up from the customer\'s doorstep within 24 hours of the return request. Our return process is seamless, tracked, and fully automated — reducing friction for customers and brands alike.',
      sla: 'SLA: 24 Hours',
      coverage: 'Pan-India',
      features: [
        'Doorstep pickup within 24 hours',
        'Real-time return tracking',
        'Quality check at pickup',
        'Automated refund trigger on pickup',
        'Return analytics dashboard',
        'Reverse logistics to brand warehouse'
      ]
    },
    {
      id: 'exchanges',
      name: '24-Hour Exchanges',
      subtitle: 'Pick up the old, deliver the new — in one trip.',
      icon: <RefreshCw className="w-5 h-5 text-blue-600" />,
      activeIcon: <RefreshCw className="w-5 h-5 text-[#FFC700]" />,
      description: 'ZILOGICX handles exchanges in a single synchronized trip — picking up the original item while delivering the replacement product, all within 24 hours. This dramatically improves customer satisfaction and reduces logistics costs.',
      sla: 'SLA: 24 Hours',
      coverage: 'Pan-India',
      features: [
        'Simultaneous pickup and delivery',
        'Single-trip exchange logistics',
        'Size and variant exchange support',
        'Exchange tracking for customers',
        'Automated inventory sync',
        'Reduced double-handling costs'
      ]
    },
    {
      id: 'refunds',
      name: '24-Hour Refund Processing',
      subtitle: 'Refunds initiated the moment we pick up.',
      icon: <CreditCard className="w-5 h-5 text-blue-600" />,
      activeIcon: <CreditCard className="w-5 h-5 text-[#FFC700]" />,
      description: 'Our integrated logistics-to-refund workflow automatically triggers refund initiation the moment our delivery partner picks up the returned item. This eliminates the traditional 7-10 day refund wait and builds customer trust.',
      sla: 'SLA: 24 Hours',
      coverage: 'Pan-India',
      features: [
        'Automated refund trigger on pickup',
        'Integration with payment gateways',
        'Real-time refund status updates',
        'Refund analytics and reporting',
        'Dispute resolution support',
        'Audit trail for every transaction'
      ]
    },
    {
      id: 'openbox',
      name: 'Open Box Verification',
      subtitle: 'Verify before accepting.',
      icon: <ShieldCheck className="w-5 h-5 text-blue-600" />,
      activeIcon: <ShieldCheck className="w-5 h-5 text-[#FFC700]" />,
      description: 'Customers inspect products at delivery before confirming acceptance, eliminating transit damages disputes and building instant customer brand trust.',
      sla: 'SLA: Instant',
      coverage: 'Pan-India',
      features: [
        'In-person product inspection',
        'Real-time OTP confirmation',
        'Reduced fraud & disputes',
        'Instant photo proof',
        'Customer satisfaction boost',
        'Zero return disputes'
      ]
    },
    {
      id: 'reverse',
      name: 'Reverse Logistics',
      subtitle: 'Seamless return supply chain.',
      icon: <ArrowUpRight className="w-5 h-5 text-blue-600" />,
      activeIcon: <ArrowUpRight className="w-5 h-5 text-[#FFC700]" />,
      description: 'Streamlined return inventory flow from customer doorsteps directly back to regional fulfillment hubs or brand warehouses.',
      sla: 'SLA: 24 Hours',
      coverage: 'Pan-India',
      features: [
        'Automated return routing',
        'Inventory quality grading',
        'Hub consolidation',
        'Warehouse restocking sync',
        'Damage inspection logs',
        'Cost-optimized transport'
      ]
    },
    {
      id: 'warehouse',
      name: 'Warehouse & Fulfillment',
      subtitle: 'Smart storage & rapid dispatch.',
      icon: <Warehouse className="w-5 h-5 text-blue-600" />,
      activeIcon: <Warehouse className="w-5 h-5 text-[#FFC700]" />,
      description: 'End-to-end warehousing, inventory management, pick-pack operations, and same-day dispatch from strategic urban micro-hubs.',
      sla: 'Same-Day Dispatch',
      coverage: 'Pan-India',
      features: [
        'Micro-fulfillment hubs',
        'Automated order picking',
        'Real-time inventory sync',
        'Same-day order dispatch',
        'Temperature-controlled storage',
        'Scalable storage tiers'
      ]
    },
    {
      id: 'hyperlocal',
      name: 'Hyperlocal Distribution',
      subtitle: 'Intra-city rapid delivery.',
      icon: <MapPin className="w-5 h-5 text-blue-600" />,
      activeIcon: <MapPin className="w-5 h-5 text-[#FFC700]" />,
      description: 'Ultra-fast intra-city delivery networks optimizing last-mile routes for immediate fulfillment within urban centers.',
      sla: 'Sub-2 Hours',
      coverage: '50+ Metro Cities',
      features: [
        'Sub-2 hour city delivery',
        'AI route bundling',
        'EV fleet support',
        'High-density urban coverage',
        'Dynamic rider allocation',
        'Live store-to-door tracking'
      ]
    },
    {
      id: 'enterprise',
      name: 'Enterprise Logistics',
      subtitle: 'Tailored SLAs for high-volume brands.',
      icon: <Building2 className="w-5 h-5 text-blue-600" />,
      activeIcon: <Building2 className="w-5 h-5 text-[#FFC700]" />,
      description: 'Custom logistics architectures, dedicated account managers, and guaranteed custom SLAs designed for large e-commerce platforms and retail chains.',
      sla: 'Custom Enterprise SLA',
      coverage: 'Pan-India',
      features: [
        'Custom enterprise SLAs',
        'Dedicated account manager',
        'Custom API integrations',
        'High-volume priority routing',
        'Customized branding options',
        '24/7 priority support'
      ]
    }
  ];

  const currentService = servicesData.find(s => s.id === activeTab) || servicesData[0];

  return (
    <div className="relative min-h-screen bg-[#070e1b] text-slate-100 selection:bg-[#FFC700] selection:text-black">
      
      {/* Sticky Header Nav */}
      <HeaderNav activePage="Services" />

      {/* ----------------- Hero Section (Screenshot 1) ----------------- */}
      <section className="relative pt-20 pb-24 md:pt-32 md:pb-32 overflow-hidden bg-[#070e1b] hero-glow-container text-center">
        <WaveBackground />

        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Badge Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/40 bg-yellow-500/10 px-4 py-1.5 text-xs sm:text-sm font-semibold text-[#FFC700] mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#FFC700]" />
            <span>Our Services</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Complete Logistics in 24 Hours
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            From first delivery to final return — every step of the post-purchase journey handled within 24 hours.
          </p>

        </div>
      </section>

      {/* ----------------- Explore Our Full Service Suite (Screenshots 2 - 5) ----------------- */}
      <section className="py-20 bg-white text-slate-900 border-t border-slate-200">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-extrabold tracking-widest text-[#D9A300] uppercase font-mono">
              ALL SERVICES
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-2 mb-3">
              Explore Our Full Service Suite
            </h2>
          </div>

          {/* 2-Column Tabbed Service Suite */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Vertical Tab Menu (9 Tabs) */}
            <div className="lg:col-span-4 space-y-2.5">
              {servicesData.map((service) => {
                const isActive = activeTab === service.id;
                return (
                  <button
                    key={service.id}
                    onClick={() => setActiveTab(service.id)}
                    className={`w-full flex items-center justify-between p-4 rounded-xl text-left transition-all border ${
                      isActive
                        ? 'bg-[#070e1b] text-white border-yellow-500/40 shadow-lg ring-1 ring-yellow-500/20'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div className={`p-2 rounded-lg ${isActive ? 'bg-[#FFC700]/15' : 'bg-blue-50'}`}>
                        {isActive ? service.activeIcon : service.icon}
                      </div>
                      <span className={`text-sm font-extrabold ${isActive ? 'text-white' : 'text-slate-800'}`}>
                        {service.name}
                      </span>
                    </div>

                    {isActive && (
                      <span className="text-[#FFC700] text-sm font-bold">›</span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Right Active Detail Card */}
            <div className="lg:col-span-8 bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-xl">
              
              {/* Top Banner (Gradient Blue) */}
              <div className="bg-gradient-to-r from-[#1249C7] via-[#1658E8] to-[#0A2E85] p-8 text-white">
                <div className="w-14 h-14 rounded-2xl bg-[#070e1b]/40 border border-yellow-500/30 flex items-center justify-center mb-6">
                  {currentService.activeIcon}
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold mb-1">{currentService.name}</h3>
                <p className="text-sm font-extrabold text-[#FFC700] mb-5">{currentService.subtitle}</p>

                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#070e1b]/60 border border-slate-700 px-3.5 py-1 text-xs font-bold text-slate-200">
                    <Clock className="w-3.5 h-3.5 text-[#FFC700]" />
                    {currentService.sla}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#070e1b]/60 border border-slate-700 px-3.5 py-1 text-xs font-bold text-slate-200">
                    <Globe className="w-3.5 h-3.5 text-[#FFC700]" />
                    {currentService.coverage}
                  </span>
                </div>
              </div>

              {/* Bottom White Card Body */}
              <div className="p-8 space-y-8">
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {currentService.description}
                </p>

                <div>
                  <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-widest mb-4 font-mono">
                    KEY FEATURES
                  </h4>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {currentService.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-yellow-500/15 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3.5 h-3.5 text-[#D9A300] stroke-[3]" />
                        </div>
                        <span className="text-xs sm:text-sm font-semibold text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 border-t border-slate-100">
                  <a 
                    href="/contact?tab=general" 
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-[#FFC700] hover:bg-[#e5b300] px-7 py-3 text-sm font-extrabold text-black transition-all shadow-md shadow-yellow-500/15"
                  >
                    Get Started <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </a>
                  <a 
                    href="/contact?tab=demo" 
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50 px-7 py-3 text-sm font-bold transition-all"
                  >
                    Request a Demo
                  </a>
                </div>

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
                  { icon: <LinkedinIcon />, label: 'LinkedIn', href: 'https://www.linkedin.com/company/135278550/admin/dashboard/' },
                  { icon: <InstagramIcon />, label: 'Instagram', href: 'https://www.instagram.com/zilogicx_official?igsh=MTFiY2VheTJrZGRnMA==' },
                  { icon: <YoutubeIcon />, label: 'YouTube', href: 'https://youtube.com/@zilogicx?si=KLGr5ywbtZfcpmT6' },
                ].map((s, idx) => (
                  <a key={idx} href={s.href} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-[#FFC700] hover:border-yellow-500/30 transition-colors">
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
                <li><a href="/#industries" className="hover:text-white transition-colors">Fashion & Lifestyle</a></li>
                <li><a href="/#industries" className="hover:text-white transition-colors">Electronics</a></li>
                <li><a href="/#industries" className="hover:text-white transition-colors">Beauty & Care</a></li>
                <li><a href="/#industries" className="hover:text-white transition-colors">FMCG & Grocery</a></li>
              </ul>
            </div>

            {/* Col 5: Legal */}
            <div>
              <h4 className="text-xs font-extrabold text-[#FFC700] uppercase tracking-wider mb-4 font-mono">LEGAL</h4>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li><a href="/contact" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Partner Program</a></li>
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
