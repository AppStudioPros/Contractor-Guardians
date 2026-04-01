'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, ArrowRight, CheckCircle2, Home, Wrench } from 'lucide-react';

const highlights = [
  'Always Free for Homeowners — Browse, Post, Match',
  'Verified & Background-Checked Contractors',
  'Escrow-Protected Payments & Guaranteed Work',
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
                Every Home Project. Protected.
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-headline font-bold uppercase tracking-tight text-white mb-6 leading-[0.95]"
            >
              Find. Hire.
              <br />
              <span className="text-gold">Protect.</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg md:text-xl text-gray-400 mb-8 max-w-xl leading-relaxed"
            >
              The home services platform that protects both sides. Homeowners get verified contractors, escrow-protected payments, and guaranteed work — <strong className="text-white">always free to use.</strong> Contractors get quality leads, fair pay, and a reputation that matters.
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

            {/* Dual Path CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link 
                href="/homeowners" 
                className="group inline-flex items-center gap-2 bg-gold text-guardian-black font-bold uppercase tracking-wide px-8 py-4 rounded-sm hover:bg-gold-hover transition-all duration-300 shadow-[0_0_30px_rgba(248,171,32,0.25)]"
              >
                <Home className="w-5 h-5" />
                I Need a Contractor
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/contractors" 
                className="inline-flex items-center gap-2 border border-white/20 text-white font-semibold uppercase tracking-wide px-8 py-4 rounded-sm hover:border-gold hover:text-gold transition-all duration-300"
              >
                <Wrench className="w-5 h-5" />
                I&apos;m a Professional
              </Link>
            </motion.div>

            {/* Ecosystem Partners Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap items-center gap-4 mt-10 pt-8 border-t border-white/10"
            >
              <span className="text-sm text-gray-500 uppercase tracking-wide">Also on the platform:</span>
              <div className="flex flex-wrap items-center gap-3">
                {['Insurance Agents', 'Home Inspectors', 'Real Estate Pros', 'Architects'].map((partner) => (
                  <span key={partner} className="text-xs text-gray-500 bg-white/5 border border-white/10 rounded-full px-3 py-1">
                    {partner}
                  </span>
                ))}
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
                  alt="Contractor Guardians Platform"
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
                <div className="text-2xl font-bold text-gold">12+</div>
                <div className="text-sm text-gray-400">Service Categories</div>
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
                  <span className="text-sm font-semibold text-white">Escrow Protected</span>
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
