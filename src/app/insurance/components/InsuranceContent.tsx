'use client';

import { motion } from 'framer-motion';
import { Shield, Check, TrendingUp, DollarSign, Users, Zap } from 'lucide-react';

const benefits = [
  { icon: Zap, title: 'Perfect Timing', desc: 'Reach homeowners at the exact moment they need coverage — they\'re actively starting a project and hiring a contractor.' },
  { icon: Users, title: 'Warm Leads Only', desc: 'No cold calling. Every homeowner on the platform is in the process of hiring. They need insurance — they just don\'t know it yet.' },
  { icon: TrendingUp, title: 'Referral Revenue', desc: 'Earn 10-15% commission on every policy sold through the platform. Plus monthly listing visibility to thousands of active homeowners.' },
  { icon: DollarSign, title: 'Predictable Cost', desc: 'Flat monthly listing fee. No per-lead charges, no surprise bills. Your ROI is clear from day one.' },
];

const insuranceTypes = [
  'Builder\'s Risk / Project Insurance',
  'General Liability (homeowner during construction)',
  'Warranty Protection Plans',
  'Home Warranty (post-project)',
  'Contractor Bonds',
  'Property Insurance Adjustments',
];

export function InsuranceContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-guardian-black" />
        <div className="absolute inset-0 blueprint-bg opacity-30" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3" />

        <div className="container-lg relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-2 mb-6">
              <Shield className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium text-gold uppercase tracking-wider">For Insurance Professionals</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-headline font-bold uppercase text-white mb-6 leading-[0.95]">
              Homeowners Need<br /><span className="text-gold">Your Coverage.</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Every construction project needs insurance. Most homeowners don&apos;t know until something goes wrong. <strong className="text-white">List on Contractor Guardians and get matched with homeowners at the perfect moment</strong> — when they&apos;re signing a contract and need coverage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-guardian-steel">
        <div className="container-lg">
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div key={b.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="p-8 rounded-2xl border border-white/[0.06] bg-guardian-graphite/50 hover:border-gold/20 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-headline font-bold uppercase text-white mb-2">{b.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{b.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-guardian-black relative">
        <div className="absolute inset-0 blueprint-bg opacity-20" />
        <div className="container-lg relative z-10">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 rounded-2xl border border-white/[0.06] bg-guardian-graphite/50">
              <h3 className="text-lg font-headline font-bold uppercase text-white mb-2">Partner</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-3xl font-bold text-gold">$299</span>
                <span className="text-sm text-gray-500">/mo</span>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-sm text-gray-300"><Check className="w-4 h-4 text-gold" /> Listed during project creation flow</li>
                <li className="flex items-center gap-2 text-sm text-gray-300"><Check className="w-4 h-4 text-gold" /> Shown to homeowners in your service area</li>
                <li className="flex items-center gap-2 text-sm text-gray-300"><Check className="w-4 h-4 text-gold" /> Profile with agency details + specialties</li>
                <li className="flex items-center gap-2 text-sm text-gray-300"><Check className="w-4 h-4 text-gold" /> 10-15% referral commission on policies sold</li>
              </ul>
              <a href="/contact" className="block w-full text-center border border-white/20 text-white font-bold uppercase py-3 rounded-sm hover:border-gold hover:text-gold transition-all">Apply</a>
            </div>
            <div className="p-8 rounded-2xl border border-gold/30 bg-gold/5 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-guardian-black text-xs font-bold uppercase px-4 py-1 rounded-full">Recommended</div>
              <h3 className="text-lg font-headline font-bold uppercase text-white mb-2">Preferred</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-3xl font-bold text-gold">$599</span>
                <span className="text-sm text-gray-500">/mo</span>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-sm text-gray-300"><Check className="w-4 h-4 text-gold" /> Everything in Partner</li>
                <li className="flex items-center gap-2 text-sm text-gray-300"><Check className="w-4 h-4 text-gold" /> &quot;CG Recommended&quot; badge</li>
                <li className="flex items-center gap-2 text-sm text-gray-300"><Check className="w-4 h-4 text-gold" /> Notified on every new project in your area</li>
                <li className="flex items-center gap-2 text-sm text-gray-300"><Check className="w-4 h-4 text-gold" /> Co-branded protection packages</li>
                <li className="flex items-center gap-2 text-sm text-gray-300"><Check className="w-4 h-4 text-gold" /> Featured placement</li>
              </ul>
              <a href="/contact" className="block w-full text-center bg-gold text-guardian-black font-bold uppercase py-3 rounded-sm hover:bg-gold-hover transition-all">Apply</a>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Types */}
      <section className="py-20 bg-guardian-steel">
        <div className="container-lg">
          <h2 className="text-3xl font-headline font-bold uppercase text-white text-center mb-8">Coverage Types on the <span className="text-gold">Platform</span></h2>
          <div className="flex flex-wrap justify-center gap-3">
            {insuranceTypes.map((t) => (
              <span key={t} className="bg-guardian-graphite border border-white/[0.06] rounded-lg px-5 py-3 text-sm text-gray-300">{t}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
