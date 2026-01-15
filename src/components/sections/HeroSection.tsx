'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, ArrowRight, CheckCircle2 } from 'lucide-react';

const highlights = [
  'Verified & Background-Checked Contractors',
  'Escrow-Protected Payments',
  'Real-Time Project Monitoring',
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-guardian-black" />
      
      {/* Blueprint Pattern Overlay */}
      <div className="absolute inset-0 blueprint-bg opacity-50" />
      
      {/* Gold Gradient Glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-shield-blue/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/3" />

      {/* Shield Decorative Elements */}
      <div className="absolute top-32 left-8 w-24 h-32 opacity-[0.03]">
        <Shield className="w-full h-full text-gold" strokeWidth={1} />
      </div>
      <div className="absolute bottom-32 right-12 w-40 h-52 opacity-[0.03]">
        <Shield className="w-full h-full text-gold" strokeWidth={1} />
      </div>

      <div className="container-lg relative z-10 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-2 mb-8"
            >
              <Shield className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium text-gold uppercase tracking-wider">
                Trusted Protection
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-headline font-bold uppercase tracking-tight text-white mb-6 leading-[0.95]"
            >
              Verified Contractors.
              <br />
              <span className="text-gold">Protected Projects.</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg md:text-xl text-gray-400 mb-8 max-w-xl leading-relaxed"
            >
              Contractor Guardians protects homeowners from fraud while 
              empowering contractors with credibility. Our platform uses 
              smart contracts, escrow payments, and backup crews to ensure 
              every project succeeds.
            </motion.p>

            {/* Highlights */}
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-3 mb-10"
            >
              {highlights.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </motion.ul>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link 
                href="/contact" 
                className="group inline-flex items-center gap-2 bg-gold text-guardian-black font-bold uppercase tracking-wide px-8 py-4 rounded-sm hover:bg-gold-hover transition-all duration-300 shadow-[0_0_30px_rgba(248,171,32,0.25)]"
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/about" 
                className="inline-flex items-center gap-2 border border-white/20 text-white font-semibold uppercase tracking-wide px-8 py-4 rounded-sm hover:border-gold hover:text-gold transition-all duration-300"
              >
                Learn More
              </Link>
            </motion.div>

            {/* App Store Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex items-center gap-4 mt-10 pt-8 border-t border-white/10"
            >
              <span className="text-sm text-gray-500 uppercase tracking-wide">Coming Soon:</span>
              <div className="flex items-center gap-3 opacity-60 cursor-not-allowed">
                <div className="flex items-center gap-2 bg-guardian-graphite border border-white/10 rounded-lg px-3 py-2">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <span className="text-xs text-white font-medium">App Store</span>
                </div>
                <div className="flex items-center gap-2 bg-guardian-graphite border border-white/10 rounded-lg px-3 py-2">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <span className="text-xs text-white font-medium">Google Play</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative aspect-[4/5] max-w-md mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="https://cdn.prod.website-files.com/66c71f539ad0e77e2e7bf4dd/68b7821e3d1e11cd19a663a9_header.png"
                  alt="Contractor Guardians App"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              
              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -right-8 top-1/4 bg-guardian-graphite/90 backdrop-blur-xl border border-white/10 rounded-xl p-4 shadow-xl"
              >
                <div className="text-2xl font-bold text-gold">2,000+</div>
                <div className="text-sm text-gray-400">Projects Annually</div>
              </motion.div>

              {/* Floating Trust Card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="absolute -left-8 bottom-1/4 bg-guardian-graphite/90 backdrop-blur-xl border border-white/10 rounded-xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-gold" />
                  <span className="text-sm font-semibold text-white">100% Protected</span>
                </div>
              </motion.div>

              {/* Glow Effect */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gold/15 rounded-full blur-[100px] -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
