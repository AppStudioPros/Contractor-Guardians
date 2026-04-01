'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Search, FileText, GitCompare, ShieldCheck } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Browse or Post',
    description: 'Search contractors by category and location, or post your project and let our AI match you with the best professionals.',
  },
  {
    number: '02',
    icon: GitCompare,
    title: 'Compare & Choose',
    description: 'Review verified profiles, ratings, and bids. Every contractor is background-checked and licensed — no surprises.',
  },
  {
    number: '03',
    icon: FileText,
    title: 'Sign & Protect',
    description: 'Digital contracts lock in scope, milestones, and cost. Add escrow protection and guaranteed work coverage à la carte.',
  },
  {
    number: '04',
    icon: ShieldCheck,
    title: 'Monitor & Pay',
    description: 'Track progress with real-time updates. Milestone-based payments release from escrow only when work is verified and approved.',
  },
];

export function HowItWorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} id="how-it-works" className="py-24 md:py-32 bg-guardian-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 blueprint-bg opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px]" />

      <div className="container-lg relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-headline font-bold uppercase text-white mb-4">
            How It <span className="text-gold">Works</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Four steps from project idea to protected completion. Simple for homeowners, fair for contractors.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 * index, duration: 0.5 }}
                className="relative text-center group"
              >
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-[60%] w-[80%] h-px bg-gradient-to-r from-gold/30 to-transparent" />
                )}

                {/* Number + Icon */}
                <div className="relative mx-auto w-24 h-24 mb-6">
                  <div className="absolute inset-0 rounded-2xl bg-gold/10 border border-gold/20 group-hover:bg-gold/20 transition-colors" />
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gold flex items-center justify-center">
                    <span className="text-xs font-bold text-guardian-black">{step.number}</span>
                  </div>
                  <div className="relative flex items-center justify-center h-full">
                    <Icon className="w-10 h-10 text-gold" />
                  </div>
                </div>

                <h3 className="text-lg font-headline font-bold uppercase text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
