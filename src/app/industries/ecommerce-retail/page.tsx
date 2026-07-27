'use client';

import React from 'react';
import { HeaderNav } from '@/components/HeaderNav';
import { WaveBackground } from '@/components/WaveBackground';
import { ArrowRight, ShoppingCart, Store, Package, Zap, BarChart, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function EcommerceRetailPage() {
  return (
    <div className="relative min-h-screen bg-[#070e1b] text-slate-100 selection:bg-[#FFC700] selection:text-black">
      {/* Sticky Header Nav */}
      <HeaderNav activePage="Industries" />

      {/* Hero Section */}
      <section className="relative pt-20 pb-20 md:pt-32 md:pb-24 overflow-hidden bg-[#070e1b] hero-glow-container text-center">
        <WaveBackground toColor="to-[#F8FAFC]" />
        
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/40 bg-yellow-500/10 px-4 py-1.5 text-xs sm:text-sm font-semibold text-[#FFC700] mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#FFC700]" />
            <span>Industries We Serve</span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Next-Gen Logistics for <span className="text-[#FFC700]">D2C, E-commerce & Retail</span>
          </h1>
          
          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Whether you run a fast-growing D2C brand, scale an e-commerce platform, or manage retail chains, we deliver the speed, reliability, and technology you need to wow your customers.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-[#F8FAFC] text-slate-900 border-t border-slate-200">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            {/* D2C & Ecommerce */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-200 hover:border-[#FFC700] transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                <ShoppingCart className="w-8 h-8 stroke-[2]" />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-4">D2C & E-commerce</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Empower your online brand with our 24-hour delivery guarantee. We integrate seamlessly with your platform to provide real-time tracking, automated returns, and an unboxing experience your customers will love.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Same-day and next-day delivery',
                  'Seamless Shopify & WooCommerce integration',
                  'Branded tracking pages',
                  'Hassle-free reverse logistics'
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-800">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link 
                href="/contact?tab=d2c" 
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 hover:bg-slate-800 px-6 py-3.5 text-sm font-extrabold text-white transition-all w-full sm:w-auto shadow-lg"
              >
                Get D2C Solutions <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Retail */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-200 hover:border-[#FFC700] transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center mb-6">
                <Store className="w-8 h-8 stroke-[2]" />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-4">Retail Chains & Stores</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Keep your shelves stocked and your customers happy. Our intelligent routing and pan-India network ensure your inventory is always where it needs to be, right on time.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'B2B inventory distribution',
                  'Store-to-door consumer delivery',
                  'Omnichannel logistics support',
                  'Secure and compliant transport'
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-800">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link 
                href="/contact?tab=retail" 
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#FFC700] hover:bg-[#e5b300] px-6 py-3.5 text-sm font-extrabold text-black transition-all w-full sm:w-auto shadow-lg"
              >
                Get Retail Solutions <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>
      
    </div>
  );
}

function CheckCircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
