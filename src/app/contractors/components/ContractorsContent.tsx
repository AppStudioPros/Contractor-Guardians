'use client';

import { motion } from 'framer-motion';
import { Shield, Check, X, Wrench, TrendingUp, Users, BadgeCheck, Zap, DollarSign } from 'lucide-react';

const cgAdvantages = [
  'AI-matched leads — homeowners who fit YOUR specialties',
  'Flat monthly rate — no per-lead surprise bills',
  'Escrow-committed homeowners — they\'re serious, not shopping',
  'Exclusive matches — not shared with 5 other contractors',
  'Guaranteed work program — Elite contractors get backup crew projects',
  'Verified Pro badge builds instant trust with homeowners',
];

const angiProblems = [
  'Pay $15-80 per lead — whether they hire you or not',
  'Leads shared with 3-5 competitors',
  'Tire-kickers and price-shoppers',
  'Monthly bills that surprise you',
  'No project protection or guarantees',
  'Your reputation doesn\'t travel with you',
];

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    period: '',
    description: 'Get discovered. Zero risk.',
    features: ['Basic profile listing', 'Show up in search results', 'Receive organic inquiries', 'Customer reviews & ratings', 'No credit card required'],
    cta: 'Create Free Profile',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$199',
    period: '/mo',
    description: 'The Angi killer. Better leads, flat rate.',
    features: ['Everything in Starter', 'Verified Pro badge', 'Priority in AI matching', 'Respond to project posts', 'Analytics dashboard', 'No per-lead charges — ever'],
    cta: 'Go Pro',
    highlighted: true,
  },
  {
    name: 'Elite',
    price: '$399',
    period: '/mo',
    description: 'For contractors who want the best.',
    features: ['Everything in Pro', 'Featured placement in results', 'CG Certified badge', 'Guaranteed job eligibility', 'Backup crew program access', 'Dedicated support line'],
    cta: 'Go Elite',
    highlighted: false,
  },
  {
    name: 'Enterprise',
    price: '$799',
    period: '/mo',
    description: 'Multi-location operations.',
    features: ['Everything in Elite', 'Multiple team accounts', 'Custom company branding', 'Volume lead routing', 'API access', 'Priority onboarding'],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

const categories = [
  'General Contracting', 'Roofing', 'Plumbing', 'Electrical',
  'HVAC', 'Painting', 'Flooring', 'Landscaping',
  'Remodeling', 'Fencing', 'Pool Services', 'Handyman',
];

export function ContractorsContent() {
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
              <Wrench className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium text-gold uppercase tracking-wider">For Contractors & Service Providers</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-headline font-bold uppercase text-white mb-6 leading-[0.95]">
              Stop Paying<br /><span className="text-gold">Per Lead.</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              You&apos;re spending $500/mo on Angi for shared leads from people who are still shopping. Contractor Guardians gives you AI-matched homeowners who&apos;ve already committed money to escrow. <strong className="text-white">Flat rate. Better leads. Zero surprises.</strong>
            </p>
          </motion.div>
        </div>
      </section>

      {/* CG vs Angi/Thumbtack Comparison */}
      <section className="py-20 bg-guardian-steel">
        <div className="container-lg">
          <h2 className="text-3xl md:text-4xl font-headline font-bold uppercase text-white text-center mb-12">
            Contractor Guardians vs <span className="text-gold">Everyone Else</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* CG Column */}
            <div className="p-8 rounded-2xl border border-gold/30 bg-gold/5">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-8 h-8 text-gold" />
                <h3 className="text-xl font-headline font-bold uppercase text-white">Contractor Guardians</h3>
              </div>
              <ul className="space-y-4">
                {cgAdvantages.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-4 border-t border-gold/20 text-center">
                <span className="text-gold font-bold">From $199/mo flat</span>
              </div>
            </div>

            {/* Angi/Thumbtack Column */}
            <div className="p-8 rounded-2xl border border-red-500/20 bg-red-500/5">
              <div className="flex items-center gap-3 mb-6">
                <X className="w-8 h-8 text-red-400" />
                <h3 className="text-xl font-headline font-bold uppercase text-gray-400">The Other Guys</h3>
              </div>
              <ul className="space-y-4">
                {angiProblems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-500 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-4 border-t border-red-500/10 text-center">
                <span className="text-red-400 font-bold">$15-80 per lead (adds up fast)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 bg-guardian-black relative">
        <div className="absolute inset-0 blueprint-bg opacity-20" />
        <div className="container-lg relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold uppercase text-white mb-4">
              Choose Your <span className="text-gold">Plan</span>
            </h2>
            <p className="text-lg text-gray-400">Start free. Upgrade when you see the value.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`p-6 rounded-2xl border transition-all ${
                  plan.highlighted
                    ? 'border-gold/40 bg-gold/5 shadow-[0_0_40px_rgba(248,171,32,0.1)] relative'
                    : 'border-white/[0.06] bg-guardian-graphite/50 hover:border-gold/20'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-guardian-black text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="text-lg font-headline font-bold uppercase text-white">{plan.name}</h3>
                <div className="flex items-baseline gap-1 my-3">
                  <span className="text-3xl font-bold text-gold">{plan.price}</span>
                  {plan.period && <span className="text-sm text-gray-500">{plan.period}</span>}
                </div>
                <p className="text-sm text-gray-400 mb-6">{plan.description}</p>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-gray-300">
                      <Check className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`block w-full text-center text-sm font-bold uppercase tracking-wide py-3 rounded-sm transition-all ${
                    plan.highlighted
                      ? 'bg-gold text-guardian-black hover:bg-gold-hover'
                      : 'border border-white/20 text-white hover:border-gold hover:text-gold'
                  }`}
                >
                  {plan.cta}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories We Serve */}
      <section className="py-20 bg-guardian-steel">
        <div className="container-lg">
          <h2 className="text-3xl md:text-4xl font-headline font-bold uppercase text-white text-center mb-8">
            Categories We <span className="text-gold">Serve</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <span key={cat} className="bg-guardian-graphite border border-white/[0.06] rounded-lg px-5 py-3 text-sm text-gray-300 hover:border-gold/30 hover:text-gold transition-colors">
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
