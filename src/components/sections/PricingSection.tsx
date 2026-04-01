'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Shield, Home, Wrench } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const homeownerFeatures = [
  'Browse all contractors — free',
  'Post unlimited projects — free',
  'AI-powered matching — free',
  'Read reviews & ratings — free',
  'Get multiple bids — free',
];

const premiumAddOns = [
  { name: 'Escrow Payment Protection', desc: 'Milestone-based, funds held until verified' },
  { name: 'Guaranteed Work Coverage', desc: 'Backup crew if contractor doesn\'t deliver' },
  { name: 'Project Insurance', desc: 'Via our insurance partner network' },
  { name: 'Real-Time Monitoring', desc: 'Camera access + progress updates' },
];

const contractorPlans = [
  {
    name: 'Starter',
    price: 'Free',
    description: 'Get discovered on the platform',
    features: [
      'Basic profile listing',
      'Show up in search results',
      'Receive organic inquiries',
      'Customer reviews & ratings',
    ],
    isPopular: false,
    ctaLabel: 'Create Profile',
    ctaHref: '/contractors',
  },
  {
    name: 'Pro',
    price: '$199',
    period: '/mo',
    description: 'Quality leads, no per-lead fees',
    features: [
      'Everything in Starter',
      'Verified Pro badge',
      'Priority in AI matching',
      'Respond to project posts',
      'Analytics dashboard',
      'No per-lead charges — ever',
    ],
    isPopular: true,
    ctaLabel: 'Go Pro',
    ctaHref: '/contractors',
  },
  {
    name: 'Elite',
    price: '$399',
    period: '/mo',
    description: 'The serious contractor\'s advantage',
    features: [
      'Everything in Pro',
      'Featured placement',
      'CG Certified badge',
      'Guaranteed job eligibility',
      'Backup crew program access',
      'Dedicated support',
    ],
    isPopular: false,
    ctaLabel: 'Go Elite',
    ctaHref: '/contractors',
  },
];

export function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} id="pricing" className="py-24 md:py-32 bg-guardian-steel relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[150px]" />

      <div className="container-lg relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-headline font-bold uppercase text-white mb-4">
            Simple <span className="text-gold">Pricing</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Free for homeowners. Fair for contractors. No hidden fees, no per-lead charges, no surprises.
          </p>
        </motion.div>

        {/* Homeowner Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <Home className="w-6 h-6 text-gold" />
            <h3 className="text-2xl font-headline font-bold uppercase text-white">For Homeowners</h3>
            <span className="bg-gold/20 text-gold text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">Always Free</span>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Free Features */}
            <div className="p-8 rounded-2xl border border-gold/20 bg-gold/5">
              <div className="text-3xl font-bold text-gold mb-2">$0</div>
              <p className="text-sm text-gray-400 mb-6">Find and hire contractors at no cost</p>
              <ul className="space-y-3">
                {homeownerFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-gold flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Premium Add-Ons */}
            <div className="p-8 rounded-2xl border border-white/[0.06] bg-guardian-graphite/50">
              <div className="text-lg font-bold text-white mb-2">Premium Protection</div>
              <p className="text-sm text-gray-400 mb-6">Add protection à la carte — only pay for what you need</p>
              <ul className="space-y-4">
                {premiumAddOns.map((addon) => (
                  <li key={addon.name} className="flex items-start gap-3">
                    <Shield className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-sm font-semibold text-white">{addon.name}</span>
                      <p className="text-xs text-gray-500">{addon.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Contractor Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Wrench className="w-6 h-6 text-gold" />
            <h3 className="text-2xl font-headline font-bold uppercase text-white">For Contractors</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {contractorPlans.map((plan, index) => (
              <div
                key={plan.name}
                className={cn(
                  'p-8 rounded-2xl border transition-all duration-300',
                  plan.isPopular
                    ? 'border-gold/40 bg-gold/5 shadow-[0_0_40px_rgba(248,171,32,0.1)] relative'
                    : 'border-white/[0.06] bg-guardian-graphite/50 hover:border-gold/20'
                )}
              >
                {plan.isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-guardian-black text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <h4 className="text-lg font-headline font-bold uppercase text-white">{plan.name}</h4>
                  <div className="flex items-baseline gap-1 my-2">
                    <span className="text-3xl font-bold text-gold">{plan.price}</span>
                    {plan.period && <span className="text-sm text-gray-500">{plan.period}</span>}
                  </div>
                  <p className="text-sm text-gray-400">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-gray-300">
                      <Check className="w-4 h-4 text-gold flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.ctaHref}
                  className={cn(
                    'block w-full text-center font-bold uppercase tracking-wide py-3 rounded-sm transition-all duration-300',
                    plan.isPopular
                      ? 'bg-gold text-guardian-black hover:bg-gold-hover shadow-[0_0_20px_rgba(248,171,32,0.2)]'
                      : 'border border-white/20 text-white hover:border-gold hover:text-gold'
                  )}
                >
                  {plan.ctaLabel}
                </Link>
              </div>
            ))}
          </div>

          {/* Anti-Angi pitch */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Tired of paying $15-80 per lead on Angi or Thumbtack? Our flat-rate plans mean <span className="text-gold font-semibold">no per-lead charges, ever.</span> Better leads. Better value.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
