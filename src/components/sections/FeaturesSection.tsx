'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Smartphone, Eye, FileText, Shield, Users, BadgeCheck } from 'lucide-react';

const features = [
  {
    icon: Smartphone,
    title: 'All-in-One Platform',
    description:
      'Vetted contractors, secure contracts, milestone payments, and live monitoring—all in one app.',
    size: 'large',
  },
  {
    icon: Eye,
    title: 'Live Transparency',
    description:
      'Real-time camera access, photo and video updates from contractors.',
    size: 'small',
  },
  {
    icon: FileText,
    title: 'Smart Contracts',
    description:
      'Digital contracts with milestone-based payments ensure accountability.',
    size: 'small',
  },
  {
    icon: Shield,
    title: 'Escrow Protection',
    description:
      'Your funds are protected until work is verified and approved.',
    size: 'small',
  },
  {
    icon: Users,
    title: 'Backup Crew Service',
    description:
      'If a contractor fails to deliver, we have backup crews ready to complete your project.',
    size: 'small',
  },
  {
    icon: BadgeCheck,
    title: 'Verified Contractors',
    description:
      'Every contractor is background-checked, licensed, and insured.',
    size: 'large',
  },
];

export function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} id="features" className="py-24 md:py-32 bg-guardian-steel relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[150px]" />
      
      <div className="container-lg relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-gold text-sm font-semibold uppercase tracking-wider mb-4">
            Platform Features
          </span>
          <h2 className="text-4xl md:text-5xl font-headline font-bold uppercase tracking-tight text-white mb-6">
            Everything You Need
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A comprehensive platform designed to protect homeowners and empower contractors
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`group relative bg-guardian-graphite border border-white/5 rounded-xl p-8 hover:border-gold/30 transition-all duration-500 ${
                feature.size === 'large' ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-xl bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-xl">
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
