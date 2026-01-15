'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Play } from 'lucide-react';

export function VideoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-guardian-steel relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 blueprint-bg opacity-30" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[150px] translate-x-1/2 -translate-y-1/2" />

      <div className="container-lg relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-gold text-sm font-semibold uppercase tracking-wider mb-4">
            See How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-headline font-bold uppercase tracking-tight text-white mb-6">
            Watch Our Explainer
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            See how Contractor Guardians makes your interactions with clients and 
            contractors organized, professional, and secure.
          </p>
        </motion.div>

        {/* Video Embed */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Video Container */}
          <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl group">
            <iframe
              src="https://www.youtube.com/embed/lO6joot_qtg"
              title="Contractor Guardians: Smarter Hiring, Safer Projects"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
            
            {/* Border Glow on Hover */}
            <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-gold/30 transition-colors duration-500 pointer-events-none" />
          </div>
          
          {/* Glow Effects */}
          <div className="absolute inset-0 bg-gold/10 rounded-xl blur-3xl -z-10 scale-105 opacity-50" />
          <div className="absolute -inset-4 bg-gradient-to-r from-gold/20 via-transparent to-gold/20 rounded-2xl blur-2xl -z-20 opacity-30" />
        </motion.div>

        {/* Optional Stats Below Video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
        >
          {[
            { value: '2,000+', label: 'Projects/Year' },
            { value: '100%', label: 'Protected' },
            { value: '50+', label: 'States' },
            { value: '24/7', label: 'Support' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-gold mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
