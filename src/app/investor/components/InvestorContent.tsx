'use client';

import { motion } from 'framer-motion';
import { Shield, TrendingUp, DollarSign, Users, Target, Layers, ArrowRight, Check, Building2, Briefcase, Mail } from 'lucide-react';
import Link from 'next/link';

const marketStats = [
  { number: '$1T+', label: 'U.S. Home Services Market', sub: 'by 2030' },
  { number: '12+', label: 'Service Categories', sub: 'at launch' },
  { number: '6', label: 'Revenue Streams', sub: 'from day one' },
  { number: '$0', label: 'Cost for Homeowners', sub: 'always free' },
];

const revenueStreams = [
  { source: 'Contractor Subscriptions', model: '$199-799/mo per contractor', icon: Building2, potential: 'Primary recurring revenue' },
  { source: 'À La Carte Protection', model: '% of contract value', icon: Shield, potential: 'High-margin per project' },
  { source: 'Insurance Referrals', model: '10-15% commission + $299-599/mo listing', icon: DollarSign, potential: 'Passive referral income' },
  { source: 'Real Estate Referrals', model: '5% of platform fees, lifetime attribution', icon: TrendingUp, potential: 'Compounding distribution' },
  { source: 'Inspector & Architect Listings', model: '$149-299/mo per professional', icon: Layers, potential: 'Ecosystem density' },
  { source: 'Material Supplier Marketplace', model: 'Commission per transaction', icon: Target, potential: 'Future expansion' },
];

const competitorComparison = [
  { feature: 'Pricing Model', cg: 'Flat monthly rate', others: 'Pay-per-lead ($15-80 each)' },
  { feature: 'Lead Quality', cg: 'AI-matched, escrow-committed', others: 'Shared with 3-5 competitors' },
  { feature: 'Contractor Verification', cg: 'Background-checked, licensed, insured', others: 'Minimal or self-reported' },
  { feature: 'Payment Protection', cg: 'Escrow with milestone verification', others: 'None — handle it yourself' },
  { feature: 'Work Guarantee', cg: 'Backup crew completes the job', others: 'Not offered' },
  { feature: 'Ecosystem Partners', cg: 'Insurance, inspectors, realtors, architects', others: 'Contractors only' },
  { feature: 'Revenue per User', cg: 'Multiple touchpoints per project', others: 'Single lead fee' },
];

const milestones = [
  { phase: 'Phase 1', title: 'Platform Launch', items: ['Core marketplace live', 'Contractor onboarding', 'Escrow payment system', 'AI matching engine'], status: 'current' },
  { phase: 'Phase 2', title: 'Ecosystem Expansion', items: ['Insurance partner program', 'Real estate referral network', 'Inspector integration', 'Mobile apps (iOS/Android)'], status: 'next' },
  { phase: 'Phase 3', title: 'National Scale', items: ['50-state coverage', 'Material supplier marketplace', 'Lending partnerships', 'Enterprise contractor tools'], status: 'future' },
  { phase: 'Phase 4', title: 'Market Leadership', items: ['Trade school network', 'Government contracting integration', 'International expansion', 'IPO preparation'], status: 'future' },
];

const team = [
  { name: 'Corey Strange', role: 'CEO & Founder', bio: '20+ years in technology, construction, and government contracting. Built enterprise platforms for the VA. Oxford-educated strategist.' },
  { name: 'William Mocas', role: 'CFO', bio: 'Financial strategy and operations. Results-driven with deep experience in scaling service businesses.' },
  { name: 'Tonya Mocas', role: 'VP, Organizational Intelligence', bio: 'Operations, team building, and organizational design. The engine that makes the machine run.' },
];

export function InvestorContent() {
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
              <TrendingUp className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium text-gold uppercase tracking-wider">Investment Opportunity</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-headline font-bold uppercase text-white mb-6 leading-[0.95]">
              The Home Services<br /><span className="text-gold">Ecosystem.</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              Angi sells leads. Thumbtack sells clicks. <strong className="text-white">Contractor Guardians captures revenue at every stage of a home project</strong> — from contractor matching to insurance to inspections to payments. One platform, six revenue streams, a trillion-dollar market.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a href="#contact" className="group inline-flex items-center gap-2 bg-gold text-guardian-black font-bold uppercase tracking-wide px-8 py-4 rounded-sm hover:bg-gold-hover transition-all shadow-[0_0_30px_rgba(248,171,32,0.25)]">
                Request Pitch Deck
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#model" className="inline-flex items-center gap-2 border border-white/20 text-white font-semibold uppercase tracking-wide px-8 py-4 rounded-sm hover:border-gold hover:text-gold transition-all">
                Revenue Model
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Market Stats */}
      <section className="bg-guardian-steel border-y border-white/[0.06]">
        <div className="container-lg py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {marketStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gold mb-1">{stat.number}</div>
                <div className="text-sm text-white font-medium">{stat.label}</div>
                <div className="text-xs text-gray-500 mt-1">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem / Opportunity */}
      <section className="py-20 bg-guardian-black relative">
        <div className="absolute inset-0 blueprint-bg opacity-20" />
        <div className="container-lg relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-headline font-bold uppercase text-white mb-6">
              A Broken <span className="text-gold">Industry</span>
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              The home services market exceeds <strong className="text-white">$1 trillion</strong> and growing. Yet the dominant platforms — Angi, Thumbtack, Houzz — operate on a model that frustrates both sides: homeowners get unvetted contractors, contractors get overpriced shared leads, and nobody provides project protection. <strong className="text-white">Angi was sued by the FTC</strong> for deceptive practices. The market is ready for disruption.
            </p>
          </div>

          {/* Competitor Comparison Table */}
          <div className="max-w-4xl mx-auto rounded-2xl border border-white/[0.06] overflow-hidden">
            <div className="grid grid-cols-3 bg-guardian-graphite/80">
              <div className="p-4 text-sm font-bold text-gray-400 uppercase tracking-wider">Feature</div>
              <div className="p-4 text-sm font-bold text-gold uppercase tracking-wider text-center">Contractor Guardians</div>
              <div className="p-4 text-sm font-bold text-gray-500 uppercase tracking-wider text-center">Angi / Thumbtack</div>
            </div>
            {competitorComparison.map((row, i) => (
              <div key={row.feature} className={`grid grid-cols-3 ${i % 2 === 0 ? 'bg-guardian-graphite/30' : 'bg-guardian-graphite/10'}`}>
                <div className="p-4 text-sm text-gray-300 font-medium">{row.feature}</div>
                <div className="p-4 text-sm text-white text-center flex items-center justify-center gap-2">
                  <Check className="w-4 h-4 text-gold flex-shrink-0" />
                  {row.cg}
                </div>
                <div className="p-4 text-sm text-gray-500 text-center">{row.others}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue Model */}
      <section id="model" className="py-20 bg-guardian-steel">
        <div className="container-lg">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold uppercase text-white mb-4">
              Six Revenue <span className="text-gold">Streams</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Unlike single-revenue platforms, CG monetizes every participant in the home services ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {revenueStreams.map((stream, i) => {
              const Icon = stream.icon;
              return (
                <motion.div
                  key={stream.source}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="p-6 rounded-2xl border border-white/[0.06] bg-guardian-graphite/50 hover:border-gold/20 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="text-lg font-headline font-bold uppercase text-white mb-1">{stream.source}</h3>
                  <p className="text-sm text-gold font-medium mb-2">{stream.model}</p>
                  <p className="text-xs text-gray-500">{stream.potential}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-20 bg-guardian-black relative">
        <div className="absolute inset-0 blueprint-bg opacity-20" />
        <div className="container-lg relative z-10">
          <h2 className="text-3xl md:text-4xl font-headline font-bold uppercase text-white text-center mb-12">
            Growth <span className="text-gold">Roadmap</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, i) => (
              <motion.div
                key={m.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`p-6 rounded-2xl border ${
                  m.status === 'current' ? 'border-gold/40 bg-gold/5' : 'border-white/[0.06] bg-guardian-graphite/30'
                }`}
              >
                {m.status === 'current' && (
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gold bg-gold/20 px-2 py-1 rounded-full">Current Phase</span>
                )}
                <div className="text-xs text-gray-500 uppercase tracking-wider mt-3">{m.phase}</div>
                <h3 className="text-lg font-headline font-bold uppercase text-white mt-1 mb-4">{m.title}</h3>
                <ul className="space-y-2">
                  {m.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-gray-400">
                      <Check className="w-3 h-3 text-gold flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-guardian-steel">
        <div className="container-lg">
          <h2 className="text-3xl md:text-4xl font-headline font-bold uppercase text-white text-center mb-12">
            Leadership <span className="text-gold">Team</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="p-6 rounded-2xl border border-white/[0.06] bg-guardian-graphite/50 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-gold/10 border-2 border-gold/30 flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-lg font-headline font-bold uppercase text-white">{member.name}</h3>
                <p className="text-sm text-gold font-medium mb-3">{member.role}</p>
                <p className="text-xs text-gray-400 leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Ecosystem Advantage */}
      <section className="py-20 bg-guardian-black relative">
        <div className="absolute inset-0 blueprint-bg opacity-20" />
        <div className="container-lg relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-headline font-bold uppercase text-white mb-6">
              The <span className="text-gold">Moat</span>
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              Competitors can copy our UI. They can match our pricing. What they can&apos;t replicate is the <strong className="text-white">ecosystem lock-in</strong> — when a homeowner&apos;s insurance agent, inspector, realtor, AND contractor are all on the same platform, switching costs become enormous. Every new participant makes the platform more valuable for everyone else. <strong className="text-white">That&apos;s the network effect competitors can&apos;t buy.</strong>
            </p>
            <div className="inline-flex items-center gap-4 bg-gold/10 border border-gold/20 rounded-xl px-8 py-4">
              <Shield className="w-8 h-8 text-gold" />
              <div className="text-left">
                <div className="text-sm font-bold text-white">Ecosystem Network Effect</div>
                <div className="text-xs text-gray-400">Each new provider type makes the platform exponentially more valuable</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Request Deck */}
      <section id="contact" className="py-20 bg-guardian-steel">
        <div className="container-lg">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-headline font-bold uppercase text-white mb-4">
                Let&apos;s <span className="text-gold">Talk</span>
              </h2>
              <p className="text-gray-400">Interested in the opportunity? Request the full pitch deck or schedule a conversation.</p>
            </div>
            <form className="space-y-4 p-8 rounded-2xl border border-white/[0.06] bg-guardian-graphite/50">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-gray-400 mb-1 block">Your Name *</label>
                  <input type="text" required className="w-full bg-guardian-black/50 border border-white/[0.1] rounded-lg px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:border-gold/50 focus:outline-none" placeholder="Name" />
                </div>
                <div>
                  <label className="text-xs text-gray-400 mb-1 block">Email *</label>
                  <input type="email" required className="w-full bg-guardian-black/50 border border-white/[0.1] rounded-lg px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:border-gold/50 focus:outline-none" placeholder="you@firm.com" />
                </div>
              </div>
              <div>
                <label className="text-xs text-gray-400 mb-1 block">Firm / Organization</label>
                <input type="text" className="w-full bg-guardian-black/50 border border-white/[0.1] rounded-lg px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:border-gold/50 focus:outline-none" placeholder="Investment firm or organization" />
              </div>
              <div>
                <label className="text-xs text-gray-400 mb-1 block">Message</label>
                <textarea rows={4} className="w-full bg-guardian-black/50 border border-white/[0.1] rounded-lg px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:border-gold/50 focus:outline-none resize-none" placeholder="Tell us about your interest..." />
              </div>
              <button type="submit" className="w-full bg-gold text-guardian-black font-bold uppercase tracking-wide py-4 rounded-sm hover:bg-gold-hover transition-all shadow-[0_0_20px_rgba(248,171,32,0.2)]">
                Request Pitch Deck
              </button>
              <p className="text-[10px] text-gray-600 text-center">By submitting, you agree to our privacy policy. We&apos;ll respond within 24 hours.</p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
