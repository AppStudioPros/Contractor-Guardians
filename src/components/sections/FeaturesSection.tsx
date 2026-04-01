'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Eye, FileText, Users, BadgeCheck, DollarSign } from 'lucide-react';

const features = [
  {
    icon: BadgeCheck,
    title: 'Verified Contractors',
    description:
      'Every contractor is background-checked, licensed, and insured. No guesswork — we\'ve already done the vetting so you can hire with confidence.',
    size: 'large',
  },
  {
    icon: Shield,
    title: 'Escrow Protection',
    description:
      'Your money is held in escrow until work is verified and approved. Milestone-based payments mean you only pay for completed work.',
    size: 'small',
  },
  {
    icon: FileText,
    title: 'Digital Contracts',
    description:
      'Legally binding digital contracts with clear milestones, timelines, and deliverables. Both sides know exactly what\'s expected.',
    size: 'small',
  },
  {
    icon: Eye,
    title: 'Real-Time Monitoring',
    description:
      'Live camera access and photo/video updates from your job site. See progress as it happens — no more wondering what\'s going on at your property.',
    size: 'small',
  },
  {
    icon: Users,
    title: 'Backup Crew Guarantee',
    description:
      'If a contractor fails to deliver, our backup crews step in to complete your project. That\'s the Contractor Guardians guarantee.',
    size: 'small',
  },
  {
    icon: DollarSign,
    title: 'Always Free for Homeowners',
    description:
      'Browse contractors, post projects, and get matched — completely free. Premium protection features like escrow and guaranteed work are available à la carte when you need them.',
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-headline font-bold uppercase text-white mb-4">
            Why <span className="text-gold">Contractor Guardians?</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            We built the platform we wished existed when hiring contractors. Protection for homeowners, fair opportunities for professionals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className={`group p-8 rounded-2xl border border-white/[0.06] bg-guardian-graphite/50 hover:border-gold/30 transition-all duration-300 ${
                  feature.size === 'large' ? 'lg:col-span-1' : ''
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                  <Icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-xl font-headline font-bold uppercase text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
