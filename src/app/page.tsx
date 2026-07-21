'use client';

import React, { useState } from 'react';
import { Logo } from '@/components/Logo';
import { HeaderNav } from '@/components/HeaderNav';
import { WaveBackground } from '@/components/WaveBackground';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { saveMockLead, supabase } from '@/lib/supabase';
import { 
  ArrowRight, 
  Check, 
  Truck, 
  RotateCcw, 
  RefreshCw, 
  CreditCard, 
  ShieldCheck, 
  Package, 
  MapPin, 
  Building2, 
  ShoppingBag, 
  Globe, 
  Store, 
  Cpu, 
  Shirt, 
  Sparkles, 
  Star, 
  Box, 
  Briefcase,
  ChevronRight,
  Send,
  Building,
  Radio,
  GitBranch,
  BarChart3,
  TrendingUp,
  Warehouse,
  Bell,
  Activity,
  ShoppingCart,
  Home,
  Heart,
  Footprints,
  ArrowUpRight,
  Zap,
  Brain
} from 'lucide-react';

const LinkedinIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.72a1.47 1.47 0 1 0 0 2.94 1.47 1.47 0 0 0 0-2.94z"/>
  </svg>
);

const TwitterXIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
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

const YoutubeIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

export default function LandingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [activeNav, setActiveNav] = useState('Home');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      if (supabase) {
        const { error } = await supabase.from('leads').insert([formData]);
        if (error) throw error;
      } else {
        saveMockLead(formData);
      }
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Process', href: '/#process' },
    { name: 'Technology', href: '/technology' },
    { name: 'Industries', href: '/industries' },
    { name: 'Partners', href: '/partners' },
    { name: 'Testimonials', href: '/#testimonials' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div className="relative min-h-screen bg-[#070e1b] text-slate-100 selection:bg-[#FFC700] selection:text-black">
      
      {/* Sticky Header Nav */}
      <HeaderNav activePage="Home" />

      {/* ----------------- Hero Section (Image 2) ----------------- */}
      <section id="home" className="relative pt-16 pb-20 md:pt-28 md:pb-28 overflow-hidden bg-[#070e1b] hero-glow-container">
        <WaveBackground />

        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          {/* Badge Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/40 bg-yellow-500/10 px-4 py-1.5 text-xs sm:text-sm font-semibold text-[#FFC700] mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#FFC700] animate-ping" />
            <span>India&apos;s #1 24-Hour Logistics Network</span>
          </div>
          
          {/* Main Hero Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight max-w-5xl mx-auto leading-[1.15] mb-6 text-white">
            India&apos;s 24-Hour Logistics Network for <span className="text-[#FFC700]">D2C Brands</span>, E-commerce & Retail Stores
          </h1>

          {/* Hero Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
            Deliver products, process returns, exchanges, refunds, and verify every order through Open Box Verification—all within 24 hours.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a 
              href="#contact" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md bg-[#FFC700] hover:bg-[#e5b300] px-7 py-3.5 text-base font-extrabold text-black transition-all shadow-lg shadow-yellow-500/20"
            >
              Get Started <ArrowRight className="w-5 h-5 stroke-[2.5]" />
            </a>
            <a 
              href="#contact" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md border border-slate-700 bg-slate-900/80 hover:bg-slate-800 px-7 py-3.5 text-base font-bold text-white transition-all"
            >
              Partner with ZILOGICX
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-1 text-slate-300 hover:text-[#FFC700] transition-colors py-2 text-sm font-semibold"
            >
              Contact Sales <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Animated Stats Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto pt-8 border-t border-slate-800/80">
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#FFC700]">
                <AnimatedCounter target={500} suffix="+" />
              </div>
              <div className="text-sm font-medium text-slate-400 mt-1">Brand Partners</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#FFC700]">
                <AnimatedCounter target={24} suffix=" Hrs" />
              </div>
              <div className="text-sm font-medium text-slate-400 mt-1">Delivery Promise</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#FFC700]">Pan-India</div>
              <div className="text-sm font-medium text-slate-400 mt-1">Network Coverage</div>
            </div>
          </div>

        </div>
      </section>

      {/* ----------------- Redefining Logistics Section (Image 5) ----------------- */}
      <section id="about" className="py-20 bg-white text-slate-900 relative">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-6">
              Redefining Logistics for Modern India
            </h2>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              ZILOGICX is a next-generation logistics platform built to simplify deliveries for D2C brands, e-commerce platforms, retail stores, and omnichannel businesses. Our technology enables businesses to deliver products within 24 hours while also completing returns, exchanges, and refund pickups within the same 24-hour promise. We are creating India&apos;s fastest logistics ecosystem focused on customer trust, operational efficiency, and technology-driven fulfillment.
            </p>
          </div>

          {/* 4 Animated Blue Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-2xl bg-gradient-to-br from-[#1249C7] via-[#0E3FAE] to-[#0A2E85] p-8 text-center shadow-lg shadow-blue-900/15 border border-blue-500/20 transform transition-transform hover:-translate-y-1">
              <div className="text-3xl sm:text-4xl font-black text-[#FFC700] mb-2 tracking-tight">
                <AnimatedCounter target={24} suffix=" Hrs" />
              </div>
              <div className="text-sm font-semibold text-slate-100">Delivery Promise</div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-[#1249C7] via-[#0E3FAE] to-[#0A2E85] p-8 text-center shadow-lg shadow-blue-900/15 border border-blue-500/20 transform transition-transform hover:-translate-y-1">
              <div className="text-3xl sm:text-4xl font-black text-[#FFC700] mb-2 tracking-tight">
                <AnimatedCounter target={500} suffix="+" />
              </div>
              <div className="text-sm font-semibold text-slate-100">Brand Partners</div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-[#1249C7] via-[#0E3FAE] to-[#0A2E85] p-8 text-center shadow-lg shadow-blue-900/15 border border-blue-500/20 transform transition-transform hover:-translate-y-1">
              <div className="text-3xl sm:text-4xl font-black text-[#FFC700] mb-2 tracking-tight">
                Pan-India
              </div>
              <div className="text-sm font-semibold text-slate-100">Coverage</div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-[#1249C7] via-[#0E3FAE] to-[#0A2E85] p-8 text-center shadow-lg shadow-blue-900/15 border border-blue-500/20 transform transition-transform hover:-translate-y-1">
              <div className="text-3xl sm:text-4xl font-black text-[#FFC700] mb-2 tracking-tight">
                <AnimatedCounter target={99.9} suffix="%" decimals={1} />
              </div>
              <div className="text-sm font-semibold text-slate-100">On-Time Rate</div>
            </div>
          </div>

        </div>
      </section>

      {/* ----------------- Who We Serve Section (Image 1) ----------------- */}
      <section className="py-20 bg-[#F8FAFC] text-slate-900 border-t border-slate-200">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-extrabold tracking-widest text-[#D9A300] uppercase font-mono">
              WHO WE SERVE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 mb-3">
              Built for Every Business
            </h2>
            <p className="text-slate-600 text-base">
              From D2C startups to enterprise retail chains — ZILOGICX powers logistics for every business model.
            </p>
          </div>

          {/* 10 Industry Cards (5x2 Grid) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { icon: <ShoppingBag className="w-6 h-6 text-blue-600 stroke-[2]" />, title: 'D2C Brands' },
              { icon: <Globe className="w-6 h-6 text-blue-600 stroke-[2]" />, title: 'E-commerce Platforms' },
              { icon: <Store className="w-6 h-6 text-blue-600 stroke-[2]" />, title: 'Retail Stores' },
              { icon: <Building className="w-6 h-6 text-blue-600 stroke-[2]" />, title: 'Shopping Malls' },
              { icon: <Cpu className="w-6 h-6 text-blue-600 stroke-[2]" />, title: 'Electronics Stores' },
              { icon: <Shirt className="w-6 h-6 text-blue-600 stroke-[2]" />, title: 'Fashion Brands' },
              { icon: <Sparkles className="w-6 h-6 text-blue-600 stroke-[2]" />, title: 'Beauty & Personal Care' },
              { icon: <Star className="w-6 h-6 text-blue-600 stroke-[2]" />, title: 'Lifestyle Brands' },
              { icon: <Box className="w-6 h-6 text-blue-600 stroke-[2]" />, title: 'FMCG Companies' },
              { icon: <Briefcase className="w-6 h-6 text-blue-600 stroke-[2]" />, title: 'SMEs' }
            ].map((ind, idx) => (
              <div 
                key={idx} 
                className="flex flex-col items-center justify-center p-6 bg-white text-slate-900 rounded-2xl border border-slate-200 custom-shadow-sm hover:border-blue-300 hover:shadow-md transition-all text-center min-h-[140px]"
              >
                <div className="mb-4 p-3 bg-[#EBF3FE] rounded-2xl flex items-center justify-center">
                  {ind.icon}
                </div>
                <span className="text-sm font-extrabold text-slate-900 leading-snug">{ind.title}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ----------------- Why ZILOGICX Section (Image 3) ----------------- */}
      <section id="why-us" className="py-20 bg-white text-slate-900 border-t border-slate-200">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-5 text-left">
              <span className="text-xs font-extrabold tracking-widest text-[#D9A300] uppercase font-mono">
                WHY ZILOGICX
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 mb-5 leading-tight">
                Why 500+ Brands Choose ZILOGICX
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed text-base">
                We&apos;ve built India&apos;s most comprehensive 24-hour logistics ecosystem — combining AI-powered routing, real-time tracking, and enterprise-grade operations to deliver unmatched speed and reliability.
              </p>
              <a 
                href="/about" 
                className="inline-flex items-center gap-2 rounded-lg bg-[#1658E8] hover:bg-[#1147bf] text-white font-bold px-6 py-3.5 transition-colors shadow-md shadow-blue-600/20"
              >
                Learn About Us <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </a>
            </div>

            {/* Right Column Grid of 12 Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                '24-Hour Delivery',
                '24-Hour Returns',
                '24-Hour Exchanges',
                'Open Box Verification',
                'AI-Powered Logistics',
                'Live Shipment Tracking',
                'Faster Customer Experience',
                'Secure Deliveries',
                'Enterprise Dashboard',
                'Technology-Driven Operations',
                'Reduced Reverse Logistics Time',
                'Scalable Nationwide Network'
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center gap-3 bg-white text-slate-900 rounded-xl p-4 border border-slate-200 custom-shadow-sm hover:border-slate-300 transition-all"
                >
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-yellow-500/15 border border-yellow-500/30 flex items-center justify-center">
                    <Check className="w-4 h-4 text-[#D9A300] stroke-[3]" />
                  </div>
                  <span className="text-sm font-bold text-slate-800">{item}</span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* ----------------- Our Services Section (Image 4 & Screenshot 1) ----------------- */}
      <section id="services" className="py-20 bg-[#F8FAFC] text-slate-900 border-t border-slate-200">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-extrabold tracking-widest text-[#D9A300] uppercase font-mono">
              OUR SERVICES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 mb-3">
              Everything Delivered in 24 Hours
            </h2>
            <p className="text-slate-600 text-base">
              One platform for all your logistics needs — delivery, returns, exchanges, and more.
            </p>
          </div>

          {/* Row 1: 4 Dark Navy Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              {
                icon: <Truck className="w-6 h-6 text-black stroke-[2.5]" />,
                title: '24-Hour Delivery',
                desc: 'Fast, reliable delivery for D2C brands, e-commerce companies, and retail stores across India.'
              },
              {
                icon: <RotateCcw className="w-6 h-6 text-black stroke-[2.5]" />,
                title: '24-Hour Returns',
                desc: 'Quick return pickups with real-time tracking and seamless customer experience.'
              },
              {
                icon: <RefreshCw className="w-6 h-6 text-black stroke-[2.5]" />,
                title: '24-Hour Exchanges',
                desc: 'Fast replacement deliveries with synchronized pickup and delivery in a single trip.'
              },
              {
                icon: <CreditCard className="w-6 h-6 text-black stroke-[2.5]" />,
                title: '24-Hour Refund Processing',
                desc: 'Accelerate refund initiation through integrated logistics workflows and automation.'
              }
            ].map((srv, idx) => (
              <div 
                key={idx} 
                className="dark-service-card rounded-2xl p-6 flex flex-col items-start text-left text-white"
              >
                <div className="mb-5 p-3 bg-[#FFC700] rounded-xl shadow-md">
                  {srv.icon}
                </div>
                <h3 className="text-lg font-bold mb-3 text-white tracking-tight">{srv.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed font-normal">{srv.desc}</p>
              </div>
            ))}
          </div>

          {/* Row 2: 5 Light Cards with Detailed Descriptions (Screenshot 1) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { 
                icon: <ShieldCheck className="w-6 h-6 text-blue-600 stroke-[2]" />, 
                title: 'Open Box Verification',
                desc: 'Customers inspect products at delivery before confirming acceptance, reducing disputes and increasing trust.'
              },
              { 
                icon: <ArrowUpRight className="w-6 h-6 text-blue-600 stroke-[2]" />, 
                title: 'Reverse Logistics',
                desc: 'Efficient return movement from customers back to warehouses, brands, or retail stores.'
              },
              { 
                icon: <Warehouse className="w-6 h-6 text-blue-600 stroke-[2]" />, 
                title: 'Warehouse & Fulfillment',
                desc: 'Smart inventory storage, packing, and dispatch services for brands of all sizes.'
              },
              { 
                icon: <MapPin className="w-6 h-6 text-blue-600 stroke-[2]" />, 
                title: 'Hyperlocal Distribution',
                desc: 'Fast deliveries across cities using AI-optimized logistics routes and local hubs.'
              },
              { 
                icon: <Building2 className="w-6 h-6 text-blue-600 stroke-[2]" />, 
                title: 'Enterprise Logistics',
                desc: 'Dedicated logistics support for growing brands and retail chains with custom SLAs.'
              }
            ].map((sec, idx) => (
              <div 
                key={idx} 
                className="light-service-card flex flex-col items-start p-6 bg-white rounded-2xl border border-slate-200 custom-shadow-sm"
              >
                <div className="p-3 bg-[#EBF3FE] rounded-xl mb-4">
                  {sec.icon}
                </div>
                <h4 className="text-base font-extrabold text-slate-900 mb-2 leading-snug">{sec.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">{sec.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ----------------- How ZILOGICX Works Section (Screenshot 3) ----------------- */}
      <section id="process" className="py-24 bg-[#070e1b] text-white border-t border-slate-800 relative overflow-hidden">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          <span className="text-xs font-extrabold tracking-widest text-[#FFC700] uppercase font-mono">
            THE PROCESS
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-3 mb-4">
            How ZILOGICX Works
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mb-16">
            From booking to doorstep — our 6-step process ensures every delivery happens within 24 hours.
          </p>

          {/* Timeline Grid (6 Steps) */}
          <div className="relative">
            {/* Connecting Yellow Line */}
            <div className="hidden lg:block absolute top-[44px] left-[8%] right-[8%] h-[2px] bg-gradient-to-r from-yellow-500/20 via-[#FFC700] to-yellow-500/20 z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
              {[
                {
                  step: '01',
                  title: 'Business Books Shipment',
                  desc: 'Brand or retailer books a shipment via dashboard, API, or mobile app.'
                },
                {
                  step: '02',
                  title: 'Order is Picked Up',
                  desc: 'Our delivery partner picks up the package from your warehouse or store.'
                },
                {
                  step: '03',
                  title: 'AI Route Optimization',
                  desc: 'Our AI engine calculates the fastest, most efficient delivery route in real time.'
                },
                {
                  step: '04',
                  title: '24-Hour Delivery',
                  desc: "Package delivered to the customer's doorstep within 24 hours, guaranteed."
                },
                {
                  step: '05',
                  title: 'Open Box Verification',
                  desc: 'Customer inspects the product at delivery before confirming acceptance.'
                },
                {
                  step: '06',
                  title: 'Return / Exchange / Refund',
                  desc: 'If required, return or exchange pickup is completed within the same 24-hour window.'
                }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group">
                  {/* Glowing Circular Step Badge */}
                  <div className="w-20 h-20 rounded-full bg-[#FFC700] text-black font-black text-xl flex items-center justify-center shadow-lg shadow-yellow-500/25 border-4 border-[#070e1b] mb-6 transform group-hover:scale-110 transition-transform">
                    {item.step}
                  </div>
                  <h3 className="text-base font-extrabold text-white mb-2 leading-snug">{item.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ----------------- AI-Powered Logistics Intelligence Section (New Screenshot 1) ----------------- */}
      <section id="ai-tech" className="py-24 bg-[#060c1e] text-white border-t border-slate-800 relative">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left AI Orbit Graphic */}
            <div className="lg:col-span-5 flex justify-center items-center relative py-8">
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center">
                
                {/* Outer Orbit Circle */}
                <div className="absolute inset-0 rounded-full border border-slate-700/60 animate-[spin_40s_linear_infinite]">
                  <div className="absolute top-2 left-1/4 w-3.5 h-3.5 rounded-full bg-[#FFC700] shadow-md shadow-yellow-500/50" />
                  <div className="absolute bottom-4 right-1/4 w-3.5 h-3.5 rounded-full bg-[#2563EB] shadow-md shadow-blue-500/50" />
                  <div className="absolute top-1/2 -right-1.5 w-3 h-3 rounded-full bg-[#FFC700]" />
                </div>

                {/* Inner Orbit Circle */}
                <div className="absolute inset-6 rounded-full border border-yellow-500/30 animate-[spin_25s_linear_infinite_reverse]">
                  <div className="absolute top-1/2 -left-1.5 w-3 h-3 rounded-full bg-[#2563EB]" />
                  <div className="absolute bottom-2 left-1/3 w-3 h-3 rounded-full bg-[#FFC700]" />
                  <div className="absolute top-4 right-1/3 w-3 h-3 rounded-full bg-[#2563EB]" />
                </div>

                {/* Central AI CORE Badge */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 bg-[#FFC700] rounded-2xl flex flex-col items-center justify-center text-black shadow-2xl shadow-yellow-500/30 z-10 transform hover:scale-105 transition-transform cursor-pointer">
                  <Zap className="w-8 h-8 fill-black stroke-black mb-1" />
                  <span className="font-black text-xs tracking-wider uppercase">AI CORE</span>
                </div>

              </div>
            </div>

            {/* Right Tech Features */}
            <div className="lg:col-span-7">
              <span className="text-xs font-extrabold tracking-widest text-[#FFC700] uppercase font-mono">
                TECHNOLOGY
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-4">
                AI-Powered Logistics Intelligence
              </h2>
              <p className="text-slate-400 text-base mb-8 leading-relaxed">
                Our proprietary technology stack powers every delivery with intelligence, speed, and precision.
              </p>

              {/* 6 Dark Navy Cards (2 Cols x 3 Rows) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: <GitBranch className="w-5 h-5 text-[#FFC700]" />,
                    title: 'Smart Route Optimization',
                    desc: 'AI calculates optimal delivery paths in milliseconds, reducing time and fuel costs.'
                  },
                  {
                    icon: <Brain className="w-5 h-5 text-[#FFC700]" />,
                    title: 'Delivery Intelligence',
                    desc: 'Predictive models anticipate delays and reroute automatically for on-time delivery.'
                  },
                  {
                    icon: <Zap className="w-5 h-5 text-[#FFC700]" />,
                    title: 'Automated Operations',
                    desc: 'End-to-end automation from order intake to final delivery confirmation.'
                  },
                  {
                    icon: <Radio className="w-5 h-5 text-[#FFC700]" />,
                    title: 'Real-Time Tracking',
                    desc: 'Live GPS tracking with sub-minute updates for brands and customers.'
                  },
                  {
                    icon: <TrendingUp className="w-5 h-5 text-[#FFC700]" />,
                    title: 'Predictive Logistics',
                    desc: 'Demand forecasting and capacity planning powered by machine learning.'
                  },
                  {
                    icon: <BarChart3 className="w-5 h-5 text-[#FFC700]" />,
                    title: 'Enterprise Analytics',
                    desc: 'Comprehensive reporting dashboards with actionable business intelligence.'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-[#0B152A]/90 border border-slate-800/80 rounded-xl p-5 hover:border-yellow-500/30 transition-colors">
                    <div className="p-2.5 bg-yellow-500/10 rounded-lg w-fit mb-3 border border-yellow-500/20">
                      {item.icon}
                    </div>
                    <h3 className="text-sm font-extrabold text-white mb-1.5">{item.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-normal">{item.desc}</p>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ----------------- Testimonials Section (New Screenshot 2) ----------------- */}
      <section id="testimonials" className="py-24 bg-white text-slate-900 border-t border-slate-200">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold tracking-widest text-[#D9A300] uppercase font-mono">
              TESTIMONIALS
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-2 mb-3">
              Trusted by Growing Brands
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Hundreds of brands trust ZILOGICX to power their logistics.
            </p>
          </div>

          {/* 3 Review Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: `"ZILOGICX transformed our delivery operations. Our customers now receive orders within 24 hours and the open box verification has reduced our return disputes by 60%."`,
                initial: 'P',
                name: 'Priya Sharma',
                role: 'Founder · D2C Fashion Brand — Mumbai'
              },
              {
                quote: `"The AI-powered routing and real-time tracking have been game-changers for our e-commerce platform. We've seen a 40% improvement in customer satisfaction scores."`,
                initial: 'R',
                name: 'Rahul Mehta',
                role: 'Head of Operations · E-commerce Platform — Bangalore'
              },
              {
                quote: `"As a retail chain, managing returns was our biggest challenge. ZILOGICX's 24-hour return processing has completely solved that problem for us."`,
                initial: 'A',
                name: 'Anita Patel',
                role: 'Supply Chain Director · Retail Chain — Delhi NCR'
              }
            ].map((t, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-2xl p-8 border border-slate-200 custom-shadow-md flex flex-col justify-between hover:border-slate-300 transition-all"
              >
                <div>
                  {/* 5 Yellow Stars */}
                  <div className="flex gap-1 mb-6 text-[#FFC700]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#FFC700] stroke-none" />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal mb-8">
                    {t.quote}
                  </p>
                </div>

                <div className="flex items-center gap-3.5 pt-6 border-t border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-[#0B152A] text-white font-bold flex items-center justify-center text-sm flex-shrink-0">
                    {t.initial}
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-slate-900 leading-tight">{t.name}</h4>
                    <p className="text-xs text-slate-500 font-medium">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ----------------- Vibrant Blue CTA Banner (New Screenshot 3) ----------------- */}
      <section className="py-20 bg-gradient-to-r from-[#1249C7] via-[#1658E8] to-[#0A2E85] text-white text-center relative overflow-hidden">
        {/* Subtle Background Grid Lines */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_0)] [background-size:20px_20px] pointer-events-none" />

        <div className="container mx-auto max-w-5xl px-4 sm:px-6 relative z-10">
          
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-black/20 px-4 py-1.5 text-xs font-bold text-[#FFC700] mb-6 backdrop-blur-md">
            <Zap className="w-3.5 h-3.5 fill-[#FFC700]" />
            <span>Start Today</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Ready to Deliver in 24 Hours?
          </h2>
          <p className="text-base sm:text-xl text-blue-100 max-w-2xl mx-auto mb-10 font-normal">
            Join hundreds of brands delivering faster with ZILOGICX
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#contact" 
              className="w-full sm:w-auto rounded-lg bg-[#FFC700] hover:bg-[#e5b300] px-8 py-4 text-base font-extrabold text-black transition-all shadow-xl shadow-yellow-500/20"
            >
              Become a Partner
            </a>
            <a 
              href="#contact" 
              className="w-full sm:w-auto rounded-lg border border-white/40 bg-white/10 hover:bg-white/20 px-8 py-4 text-base font-bold text-white transition-all backdrop-blur-sm"
            >
              Talk to Sales
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-1.5 text-blue-100 hover:text-white transition-colors py-2 text-sm font-semibold"
            >
              Request a Demo
            </a>
          </div>

        </div>
      </section>

      {/* ----------------- Partnership / Contact Form Section ----------------- */}
      <section id="contact" className="py-20 bg-[#070e1b] text-white border-t border-slate-800">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-extrabold tracking-widest text-[#FFC700] uppercase font-mono">
              PARTNER WITH US
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
              Ready to Scale Your Logistics?
            </h2>
            <p className="text-slate-400 mt-3 text-base">
              Fill out the form below, and our onboarding team will contact you within 24 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-300 mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name"
                  required
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Vikramaditya Sharma" 
                  className="w-full rounded-lg bg-[#070e1b] border border-slate-700 px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-[#FFC700] transition-colors text-sm"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-300 mb-2">Work Email</label>
                <input 
                  type="email" 
                  id="email"
                  required
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. vikram@brand.com" 
                  className="w-full rounded-lg bg-[#070e1b] border border-slate-700 px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-[#FFC700] transition-colors text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-slate-300 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. +91 98765 43210" 
                  className="w-full rounded-lg bg-[#070e1b] border border-slate-700 px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-[#FFC700] transition-colors text-sm"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-slate-300 mb-2">Company Name</label>
                <input 
                  type="text" 
                  id="company"
                  required
                  value={formData.company}
                  onChange={e => setFormData({ ...formData, company: e.target.value })}
                  placeholder="e.g. D2C Fashion Store" 
                  className="w-full rounded-lg bg-[#070e1b] border border-slate-700 px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-[#FFC700] transition-colors text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-slate-300 mb-2">Requirements / Estimated Order Volume</label>
              <textarea 
                id="message"
                rows={4}
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                placeholder="Share your shipping volume and requirements (e.g., 500 orders/day in Metro cities)..." 
                className="w-full rounded-lg bg-[#070e1b] border border-slate-700 px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-[#FFC700] transition-colors text-sm"
              />
            </div>

            {status === 'success' && (
              <div className="p-4 bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 rounded-lg text-sm text-center font-medium">
                ✓ Success! Your request has been received. Our team will contact you within 24 hours.
              </div>
            )}

            {status === 'error' && (
              <div className="p-4 bg-rose-500/15 border border-rose-500/30 text-rose-300 rounded-lg text-sm text-center font-medium">
                ⚠️ Failed to submit. Please check your inputs and try again.
              </div>
            )}

            <button 
              type="submit" 
              disabled={status === 'submitting'}
              className="w-full py-4 bg-[#FFC700] hover:bg-[#e5b300] disabled:bg-slate-700 text-black font-extrabold rounded-lg transition-all flex items-center justify-center gap-2 text-base shadow-lg shadow-yellow-500/15"
            >
              {status === 'submitting' ? (
                'Submitting Request...'
              ) : (
                <>Submit Partnership Request <Send className="w-4 h-4 stroke-[2.5]" /></>
              )}
            </button>
          </form>
        </div>
      </section>

      {/* ----------------- Multi-Column Footer (New Screenshot 3) ----------------- */}
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
                  <a key={idx} href="#home" className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-[#FFC700] hover:border-yellow-500/30 transition-colors">
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
                <li><a href="/#ai-tech" className="hover:text-white transition-colors">Technology</a></li>
                <li><a href="/#contact" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>

            {/* Col 3: Services */}
            <div>
              <h4 className="text-xs font-extrabold text-[#FFC700] uppercase tracking-wider mb-4 font-mono">SERVICES</h4>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li><a href="/#services" className="hover:text-white transition-colors">24H Delivery</a></li>
                <li><a href="/#services" className="hover:text-white transition-colors">Returns</a></li>
                <li><a href="/#services" className="hover:text-white transition-colors">Exchanges</a></li>
                <li><a href="/#services" className="hover:text-white transition-colors">Open Box Verification</a></li>
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
