'use client';

import React from 'react';
import Image from 'next/image';
import { Logo } from '@/components/Logo';
import { WaveBackground } from '@/components/WaveBackground';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { 
  Rocket, 
  ShieldCheck, 
  Brain, 
  Heart, 
  CheckCircle2, 
  Lightbulb, 
  Target, 
  Eye, 
  Zap,
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

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-[#070e1b] text-slate-100 selection:bg-[#FFC700] selection:text-black">
      
      {/* Sticky Header Nav */}
      <HeaderNav activePage="About" />

      {/* ----------------- Hero Section (Screenshot 1) ----------------- */}
      <section className="relative pt-20 pb-24 md:pt-32 md:pb-32 overflow-hidden bg-[#070e1b] hero-glow-container text-center">
        <WaveBackground />

        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Badge Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/40 bg-yellow-500/10 px-4 py-1.5 text-xs sm:text-sm font-semibold text-[#FFC700] mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#FFC700]" />
            <span>Our Story</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Redefining Logistics for Modern India
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            ZILOGICX was built with one mission: to make 24-hour delivery, returns, and exchanges the new standard for every business in India.
          </p>

        </div>
      </section>

      {/* ----------------- Born from a Simple Frustration (Screenshot 2) ----------------- */}
      <section className="py-20 bg-white text-slate-900 border-t border-slate-200">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Story Content */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-extrabold tracking-widest text-[#D9A300] uppercase font-mono">
                OUR STORY
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Born from a Simple Frustration
              </h2>
              <p className="text-slate-600 leading-relaxed text-base">
                India&apos;s logistics industry was broken. Deliveries took days. Returns took weeks. Customers lost trust. Brands lost revenue. We saw this problem firsthand and decided to fix it — not with incremental improvements, but with a complete reimagination of how logistics should work.
              </p>
              <p className="text-slate-600 leading-relaxed text-base">
                ZILOGICX was founded to build India&apos;s first truly 24-hour logistics ecosystem — one that doesn&apos;t just deliver packages, but delivers trust. By combining AI-powered routing, real-time tracking, and a nationwide network of delivery partners, we&apos;ve made the 24-hour promise a reality for hundreds of brands across India.
              </p>

              {/* 4 Animated Stat Cards (2x2 Grid) */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-5 text-left">
                  <div className="text-2xl font-black text-blue-600">
                    <AnimatedCounter target={2023} duration={1500} />
                  </div>
                  <div className="text-xs font-semibold text-slate-500 mt-1">Founded</div>
                </div>
                <div className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-5 text-left">
                  <div className="text-2xl font-black text-blue-600">India</div>
                  <div className="text-xs font-semibold text-slate-500 mt-1">Headquarters</div>
                </div>
                <div className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-5 text-left">
                  <div className="text-2xl font-black text-blue-600">
                    <AnimatedCounter target={500} suffix="+" />
                  </div>
                  <div className="text-xs font-semibold text-slate-500 mt-1">Brand Partners</div>
                </div>
                <div className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-5 text-left">
                  <div className="text-2xl font-black text-blue-600">Pan-India</div>
                  <div className="text-xs font-semibold text-slate-500 mt-1">Network Coverage</div>
                </div>
              </div>
            </div>

            {/* Right Team Image */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                <Image 
                  src="/team.png" 
                  alt="ZILOGICX Team" 
                  width={700} 
                  height={500}
                  className="w-full h-auto object-cover"
                />
                
                {/* Floating Overlay Badge */}
                <div className="absolute bottom-6 left-6 inline-flex items-center gap-2 rounded-xl bg-[#070e1b]/90 border border-slate-700/80 px-4 py-2.5 text-xs font-bold text-white shadow-xl backdrop-blur-md">
                  <Zap className="w-4 h-4 fill-[#FFC700] stroke-none" />
                  <span>India&apos;s 24-Hour Logistics Network</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ----------------- Dark Stats Counter Row (Screenshot 3) ----------------- */}
      <section className="py-16 bg-[#060b18] text-white border-t border-b border-slate-800">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl sm:text-5xl font-black text-[#FFC700] tracking-tight">
                <AnimatedCounter target={24} suffix=" Hrs" />
              </div>
              <div className="text-sm font-semibold text-slate-400 mt-2">Delivery Promise</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-black text-[#FFC700] tracking-tight">
                <AnimatedCounter target={500} suffix="+" />
              </div>
              <div className="text-sm font-semibold text-slate-400 mt-2">Brand Partners</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-black text-[#FFC700] tracking-tight">
                <AnimatedCounter target={99.9} suffix="%" decimals={1} />
              </div>
              <div className="text-sm font-semibold text-slate-400 mt-2">On-Time Rate</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-black text-[#FFC700] tracking-tight">
                <AnimatedCounter target={9} suffix="+" />
              </div>
              <div className="text-sm font-semibold text-slate-400 mt-2">Service Types</div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- Why We're Different Section (New Screenshot 1) ----------------- */}
      <section className="py-20 bg-[#F8FAFC] text-slate-900 border-b border-slate-200">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-extrabold tracking-widest text-[#D9A300] uppercase font-mono">
              OUR DIFFERENCE
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-2 mb-3">
              Why We’re Different
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Most logistics companies focus on moving packages. We focus on building trust between brands and their customers.
            </p>
          </div>

          {/* 4 Cards (2x2 Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                num: '01',
                title: 'The 24-Hour Promise',
                desc: "We don't just aim for 24-hour delivery — we've built our entire infrastructure, technology, and operations around guaranteeing it."
              },
              {
                num: '02',
                title: 'Full-Cycle Logistics',
                desc: 'From delivery to returns, exchanges, refunds, and open box verification — we handle the complete post-purchase journey in one platform.'
              },
              {
                num: '03',
                title: 'AI at the Core',
                desc: 'Our proprietary AI engine optimizes every route, predicts delays, and automates operations — so humans can focus on what matters.'
              },
              {
                num: '04',
                title: 'Brand-First Approach',
                desc: "We're not just a courier service. We're a logistics partner that understands your brand's reputation is on the line with every delivery."
              }
            ].map((card, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-2xl p-8 border border-slate-200 custom-shadow-sm flex items-start gap-5 hover:border-slate-300 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-[#FFC700] text-black font-extrabold text-lg flex items-center justify-center flex-shrink-0 shadow-md">
                  {card.num}
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-slate-900 mb-2 leading-snug">{card.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ----------------- Leadership Team Section (New Screenshot 2) ----------------- */}
      <section className="py-24 bg-[#060c1e] text-white border-t border-slate-800">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold tracking-widest text-[#FFC700] uppercase font-mono">
              LEADERSHIP
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-2 mb-3">
              Leadership Team
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Built by logistics veterans, technology innovators, and business operators who&apos;ve lived the problem.
            </p>
          </div>

          {/* 4 Leadership Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                initial: 'A',
                name: 'Arjun Kapoor',
                role: 'Founder & CEO',
                desc: 'Former logistics executive with 15+ years building supply chains for India\'s largest e-commerce platforms.'
              },
              {
                initial: 'P',
                name: 'Priya Nair',
                role: 'Co-Founder & CTO',
                desc: 'AI and machine learning engineer who previously built route optimization systems for global logistics companies.'
              },
              {
                initial: 'V',
                name: 'Vikram Singh',
                role: 'Chief Operations Officer',
                desc: 'Operations leader with deep expertise in last-mile delivery networks across 50+ Indian cities.'
              },
              {
                initial: 'A',
                name: 'Ananya Sharma',
                role: 'Chief Business Officer',
                desc: 'Growth strategist who has helped 200+ D2C brands scale their logistics from startup to enterprise.'
              }
            ].map((leader, idx) => (
              <div 
                key={idx} 
                className="bg-[#0B152A]/90 border border-slate-800/80 rounded-2xl p-6 text-center hover:border-yellow-500/30 transition-all flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#FFC700] text-black font-black text-xl flex items-center justify-center mb-5 shadow-lg shadow-yellow-500/20">
                  {leader.initial}
                </div>
                <h3 className="text-lg font-extrabold text-white mb-1">{leader.name}</h3>
                <div className="text-xs font-bold text-[#FFC700] mb-3">{leader.role}</div>
                <p className="text-xs text-slate-400 leading-relaxed font-normal">{leader.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ----------------- Purpose / Mission, Vision & Values (Screenshots 3 & 4) ----------------- */}
      <section className="py-20 bg-white text-slate-900">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-extrabold tracking-widest text-[#D9A300] uppercase font-mono">
              PURPOSE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 mb-3">
              Mission, Vision & Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {/* Left Card: Our Mission */}
            <div className="rounded-3xl bg-gradient-to-br from-[#1249C7] via-[#0E3FAE] to-[#0A2E85] p-8 text-white shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-yellow-500/20 border border-yellow-500/30 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-[#FFC700]" />
              </div>
              <h3 className="text-xl font-extrabold mb-3 text-[#FFC700]">Our Mission</h3>
              <p className="text-sm sm:text-base text-slate-100 leading-relaxed font-normal">
                To make 24-hour delivery, returns, and exchanges the universal standard for every business in India — powered by technology, driven by trust.
              </p>
            </div>

            {/* Right Card: Our Vision */}
            <div className="rounded-3xl bg-[#F8FAFC] border border-slate-200 p-8 text-slate-900 custom-shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-extrabold mb-3 text-slate-900">Our Vision</h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                To become India&apos;s most trusted logistics technology platform, enabling every D2C brand, e-commerce company, and retail store to deliver exceptional customer experiences.
              </p>
            </div>
          </div>

          {/* Gold Highlight Banner */}
          <div className="rounded-2xl bg-[#FFFBEB] border border-[#FDE68A] p-6 text-center max-w-5xl mx-auto shadow-sm">
            <div className="text-xl sm:text-2xl font-black text-slate-900 flex items-center justify-center gap-2 mb-1">
              <Zap className="w-5 h-5 fill-[#FFC700] text-[#FFC700]" />
              <span>Doorstep in 24 Hours.</span>
              <Zap className="w-5 h-5 fill-[#FFC700] text-[#FFC700]" />
            </div>
            <p className="text-xs sm:text-sm font-medium text-slate-600">
              Our promise to every brand and every customer.
            </p>
          </div>

        </div>
      </section>

      {/* ----------------- What We Stand For / Our Core Values (Screenshot 5) ----------------- */}
      <section className="py-20 bg-[#F8FAFC] text-slate-900 border-t border-slate-200">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-extrabold tracking-widest text-[#D9A300] uppercase font-mono">
              WHAT WE STAND FOR
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 mb-3">
              Our Core Values
            </h2>
          </div>

          {/* 6 Value Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Rocket className="w-6 h-6 text-blue-600" />,
                title: 'Speed',
                desc: 'Every decision we make is optimized for speed — because in logistics, time is everything.',
                highlighted: false
              },
              {
                icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
                title: 'Trust',
                desc: 'We build trust through transparency, reliability, and consistent on-time delivery.',
                highlighted: true
              },
              {
                icon: <Brain className="w-6 h-6 text-blue-600" />,
                title: 'Technology',
                desc: 'AI and data drive every route, every decision, every delivery in our network.',
                highlighted: false
              },
              {
                icon: <Heart className="w-6 h-6 text-blue-600" />,
                title: 'Customer First',
                desc: "The end customer's experience is the ultimate measure of our success.",
                highlighted: false
              },
              {
                icon: <CheckCircle2 className="w-6 h-6 text-blue-600" />,
                title: 'Reliability',
                desc: "Our 24-hour promise is not a marketing claim — it's a commitment we keep every day.",
                highlighted: false
              },
              {
                icon: <Lightbulb className="w-6 h-6 text-blue-600" />,
                title: 'Innovation',
                desc: "We continuously push the boundaries of what's possible in logistics technology.",
                highlighted: false
              }
            ].map((v, idx) => (
              <div 
                key={idx} 
                className={`rounded-2xl p-8 bg-white border custom-shadow-sm flex flex-col items-start transition-all ${
                  v.highlighted 
                    ? 'border-[#FFC700] ring-2 ring-yellow-400/20 shadow-md' 
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="p-3 bg-[#EBF3FE] rounded-xl mb-5">
                  {v.icon}
                </div>
                <h3 className="text-lg font-extrabold text-slate-900 mb-2 leading-tight">{v.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">{v.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ----------------- Ready to Join the 24-Hour Revolution? CTA (New Screenshot 3) ----------------- */}
      <section className="py-20 bg-gradient-to-r from-[#1249C7] via-[#1658E8] to-[#0A2E85] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_0)] [background-size:20px_20px] pointer-events-none" />

        <div className="container mx-auto max-w-5xl px-4 sm:px-6 relative z-10">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Ready to Join the 24-Hour Revolution?
          </h2>
          <p className="text-base sm:text-xl text-blue-100 max-w-2xl mx-auto mb-10 font-normal">
            Partner with ZILOGICX and deliver faster than your competition.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="/contact?tab=general" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-[#FFC700] hover:bg-[#e5b300] px-8 py-4 text-base font-extrabold text-black transition-all shadow-xl shadow-yellow-500/20"
            >
              Become a Partner <ArrowRight className="w-5 h-5 stroke-[2.5]" />
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
                <li><a href="/#ai-tech" className="hover:text-white transition-colors">Technology</a></li>
                <li><a href="/contact?tab=general" className="hover:text-white transition-colors">Careers</a></li>
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
                <li><a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a></li>
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/contact?tab=partner" className="hover:text-white transition-colors">Partner Program</a></li>
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
