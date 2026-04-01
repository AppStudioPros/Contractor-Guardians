'use client';

import { motion } from 'framer-motion';
import { Home, Check, DollarSign, Users, TrendingUp, Shield, ArrowRight } from 'lucide-react';

const steps = [
  { num: '1', title: 'You Close the Deal', desc: 'Buyer purchases their new home through you.' },
  { num: '2', title: 'Refer to CG', desc: 'Share your unique referral link. "Need contractors? Use Contractor Guardians."' },
  { num: '3', title: 'They Hire', desc: 'Your buyer posts projects, matches with contractors, hires through the platform.' },
  { num: '4', title: 'You Earn', desc: '5% of CG\'s platform fee on every project your referral generates. Passive. Ongoing.' },
];

const whyItWorks = [
  { icon: DollarSign, title: 'Passive Income', desc: 'Earn on every project your referrals do — not just the first one. Kitchen remodel today, roof repair next year. You earn on both.' },
  { icon: Users, title: 'Client Retention', desc: 'Stay connected with buyers long after closing. "My realtor recommended this" = ongoing relationship.' },
  { icon: Shield, title: 'Protected Referrals', desc: 'Your clients get verified contractors, escrow protection, and guaranteed work. You look good recommending us.' },
  { icon: TrendingUp, title: 'Zero Risk', desc: 'Free to join. No monthly fees for the referral program. You only earn — you never pay.' },
];

export function RealEstateContent() {
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
              <Home className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium text-gold uppercase tracking-wider">For Real Estate Professionals</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-headline font-bold uppercase text-white mb-6 leading-[0.95]">
              Earn After<br /><span className="text-gold">Every Close.</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Every buyer needs contractors within 6 months of closing. Refer them to Contractor Guardians and <strong className="text-white">earn a referral fee on every project they do — for life.</strong> Free to join. Zero risk.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How the Referral Program Works */}
      <section className="py-20 bg-guardian-steel">
        <div className="container-lg">
          <h2 className="text-3xl md:text-4xl font-headline font-bold uppercase text-white text-center mb-12">
            How It <span className="text-gold">Works</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {steps.map((s, i) => (
              <motion.div key={s.num} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center relative">
                {i < steps.length - 1 && <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-gold/30 to-transparent" />}
                <div className="w-16 h-16 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gold">{s.num}</span>
                </div>
                <h3 className="text-lg font-headline font-bold uppercase text-white mb-2">{s.title}</h3>
                <p className="text-sm text-gray-400">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Works */}
      <section className="py-20 bg-guardian-black relative">
        <div className="absolute inset-0 blueprint-bg opacity-20" />
        <div className="container-lg relative z-10">
          <div className="grid md:grid-cols-2 gap-6">
            {whyItWorks.map((w, i) => {
              const Icon = w.icon;
              return (
                <motion.div key={w.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="p-8 rounded-2xl border border-white/[0.06] bg-guardian-graphite/50 hover:border-gold/20 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-headline font-bold uppercase text-white mb-2">{w.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{w.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-guardian-steel">
        <div className="container-lg">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 rounded-2xl border border-gold/30 bg-gold/5">
              <h3 className="text-lg font-headline font-bold uppercase text-white mb-2">Referral Partner</h3>
              <div className="text-3xl font-bold text-gold mb-4">Free</div>
              <p className="text-sm text-gray-400 mb-6">Zero cost. Zero risk. Just revenue.</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-sm text-gray-300"><Check className="w-4 h-4 text-gold" /> Unique referral link</li>
                <li className="flex items-center gap-2 text-sm text-gray-300"><Check className="w-4 h-4 text-gold" /> 5% of CG platform fee on all referral projects</li>
                <li className="flex items-center gap-2 text-sm text-gray-300"><Check className="w-4 h-4 text-gold" /> Lifetime attribution — earn on every project, forever</li>
                <li className="flex items-center gap-2 text-sm text-gray-300"><Check className="w-4 h-4 text-gold" /> Referral dashboard with analytics</li>
              </ul>
              <a href="/contact" className="block w-full text-center bg-gold text-guardian-black font-bold uppercase py-3 rounded-sm hover:bg-gold-hover transition-all">Join Free</a>
            </div>
            <div className="p-8 rounded-2xl border border-white/[0.06] bg-guardian-graphite/50">
              <h3 className="text-lg font-headline font-bold uppercase text-white mb-2">Premium Partner</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-3xl font-bold text-gold">$199</span>
                <span className="text-sm text-gray-500">/mo</span>
              </div>
              <p className="text-sm text-gray-400 mb-6">For agents who want the full suite.</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-sm text-gray-300"><Check className="w-4 h-4 text-gold" /> Everything in Referral Partner</li>
                <li className="flex items-center gap-2 text-sm text-gray-300"><Check className="w-4 h-4 text-gold" /> Branded &quot;Recommended by [Your Name]&quot; page</li>
                <li className="flex items-center gap-2 text-sm text-gray-300"><Check className="w-4 h-4 text-gold" /> White-label contractor recommendations for clients</li>
                <li className="flex items-center gap-2 text-sm text-gray-300"><Check className="w-4 h-4 text-gold" /> Client activity analytics</li>
              </ul>
              <a href="/contact" className="block w-full text-center border border-white/20 text-white font-bold uppercase py-3 rounded-sm hover:border-gold hover:text-gold transition-all">Apply</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
