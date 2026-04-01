'use client';

import { motion } from 'framer-motion';
import { Shield, Home, Check, DollarSign, Eye, FileText, Users, Search, Star } from 'lucide-react';

const freeFeatures = [
  { icon: Search, title: 'Browse Contractors', desc: 'Search by category, location, ratings, and specialties' },
  { icon: FileText, title: 'Post Projects', desc: 'Describe your project and let AI match you with the right pros' },
  { icon: Users, title: 'Get Multiple Bids', desc: 'Compare quotes from verified contractors side by side' },
  { icon: Star, title: 'Read Real Reviews', desc: 'Verified ratings from homeowners who actually hired them' },
];

const premiumFeatures = [
  {
    icon: DollarSign,
    title: 'Escrow Payment Protection',
    desc: 'Your money is held in escrow. Milestone-based payments release only when work is verified and approved. Never overpay for incomplete work again.',
    pricing: '% of contract value',
  },
  {
    icon: Shield,
    title: 'Guaranteed Work',
    desc: 'If your contractor doesn\'t deliver, our backup crews step in to finish the job. That\'s the Contractor Guardians guarantee — your project gets done, period.',
    pricing: '% of contract value',
  },
  {
    icon: Eye,
    title: 'Real-Time Monitoring',
    desc: 'Live camera access and photo/video updates from your job site. See progress as it happens from anywhere. No more wondering what\'s going on at your property.',
    pricing: 'Per project fee',
  },
  {
    icon: FileText,
    title: 'Digital Contracts',
    desc: 'Legally binding contracts with clear scope, milestones, and deliverables. Both sides sign digitally. No ambiguity, no "that wasn\'t in the agreement" disputes.',
    pricing: 'Included with escrow',
  },
];

const painPoints = [
  { problem: 'Hired a contractor who disappeared mid-job', solution: 'Backup crew guarantee finishes what they started' },
  { problem: 'Paid upfront and got ghosted', solution: 'Escrow holds funds until work is verified' },
  { problem: 'No idea if the contractor is actually licensed', solution: 'Every contractor is background-checked and verified' },
  { problem: 'Ended up paying way more than quoted', solution: 'Digital contracts lock in scope and price' },
  { problem: 'Couldn\'t see what was happening at the job site', solution: 'Real-time cameras and progress updates' },
];

export function HomeownersContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-guardian-black" />
        <div className="absolute inset-0 blueprint-bg opacity-30" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3" />

        <div className="container-lg relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-2 mb-6">
              <Home className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium text-gold uppercase tracking-wider">For Homeowners & Business Owners</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-headline font-bold uppercase text-white mb-6 leading-[0.95]">
              Always Free.<br /><span className="text-gold">Always Protected.</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Find verified contractors, post projects, and get AI-matched with the right professionals — <strong className="text-white">at zero cost.</strong> When you want extra protection, add escrow payments, guaranteed work, and real-time monitoring à la carte.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Free Features */}
      <section className="py-20 bg-guardian-steel">
        <div className="container-lg">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold uppercase text-white mb-4">
              Free. <span className="text-gold">Forever.</span>
            </h2>
            <p className="text-lg text-gray-400">No signup fees. No hidden charges. No credit card required.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {freeFeatures.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="p-6 rounded-2xl border border-gold/20 bg-gold/5 text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-lg font-headline font-bold uppercase text-white mb-2">{f.title}</h3>
                  <p className="text-sm text-gray-400">{f.desc}</p>
                  <div className="mt-3 text-xs font-bold text-gold">$0</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 bg-guardian-black relative">
        <div className="absolute inset-0 blueprint-bg opacity-20" />
        <div className="container-lg relative z-10">
          <h2 className="text-3xl md:text-4xl font-headline font-bold uppercase text-white text-center mb-12">
            Sound <span className="text-gold">Familiar?</span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {painPoints.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="grid md:grid-cols-2 gap-4 p-4 rounded-xl border border-white/[0.06] bg-guardian-graphite/30"
              >
                <div className="flex items-center gap-3">
                  <span className="text-red-400 text-lg">✗</span>
                  <span className="text-gray-400 text-sm">&quot;{p.problem}&quot;</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-white text-sm font-medium">{p.solution}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Protection */}
      <section className="py-20 bg-guardian-steel">
        <div className="container-lg">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold uppercase text-white mb-4">
              Premium <span className="text-gold">Protection</span>
            </h2>
            <p className="text-lg text-gray-400">Only pay for what you need. Add protection à la carte per project.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {premiumFeatures.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="p-8 rounded-2xl border border-white/[0.06] bg-guardian-graphite/50 hover:border-gold/20 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-lg font-headline font-bold uppercase text-white mb-2">{f.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-3">{f.desc}</p>
                      <span className="text-xs text-gold font-semibold uppercase tracking-wider">{f.pricing}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
