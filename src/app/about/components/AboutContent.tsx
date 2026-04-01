'use client';

import { motion } from 'framer-motion';
import { Shield, Users, Eye, Heart, Target, Zap } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Protection First',
    description: 'Every feature we build starts with one question: does this protect the homeowner and the contractor? Escrow payments, verified credentials, backup crews — protection isn\'t an add-on. It\'s the foundation.',
  },
  {
    icon: Eye,
    title: 'Radical Transparency',
    description: 'Real-time monitoring, digital contracts with clear milestones, verified reviews. Both sides see everything. No hidden fees, no surprise charges, no fine print that changes the deal.',
  },
  {
    icon: Users,
    title: 'Fair for Both Sides',
    description: 'Homeowners use the platform free. Contractors pay a flat monthly rate — not per-lead charges that punish success. We make money when the ecosystem works, not when people click.',
  },
  {
    icon: Heart,
    title: 'Community Impact',
    description: 'Our trade school program trains the next generation of skilled professionals — with a focus on veterans, underserved communities, and people rebuilding their lives through honest work.',
  },
];

const stats = [
  { number: '12+', label: 'Service Categories' },
  { number: '$0', label: 'Cost for Homeowners' },
  { number: '100%', label: 'Contractors Verified' },
  { number: '50', label: 'States (Goal)' },
];

const ecosystem = [
  { title: 'Homeowners', desc: 'Browse, post projects, get matched — always free' },
  { title: 'Contractors', desc: 'Verified listings, quality leads, fair pricing' },
  { title: 'Insurance Agents', desc: 'Matched with homeowners at the moment they need coverage' },
  { title: 'Real Estate Pros', desc: 'Referral partnerships that earn passive income' },
  { title: 'Home Inspectors', desc: 'Turn inspection findings into contractor matches' },
  { title: 'Architects & Designers', desc: 'Design it — we\'ll make sure it gets built right' },
];

export function AboutContent() {
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
              <Shield className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium text-gold uppercase tracking-wider">Our Mission</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-headline font-bold uppercase text-white mb-6 leading-[0.95]">
              More Than a<br /><span className="text-gold">Marketplace.</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Contractor Guardians is the home services ecosystem — connecting homeowners with verified contractors, and surrounding every project with the insurance, inspections, and support that make it succeed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-guardian-steel border-y border-white/[0.06]">
        <div className="container-lg py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gold mb-2">{stat.number}</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 bg-guardian-black relative">
        <div className="absolute inset-0 blueprint-bg opacity-20" />
        <div className="container-lg relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-headline font-bold uppercase text-white mb-6">
              The Problem We <span className="text-gold">Solve</span>
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              Americans lose <strong className="text-white">billions annually</strong> to contractor fraud, abandoned projects, and payment disputes. On the other side, honest contractors compete against bottom-feeders and pay through the nose for shared leads on platforms that don&apos;t care if the job gets done.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              We built Contractor Guardians because both sides deserve better. Homeowners deserve protection. Contractors deserve fairness. And every project deserves the support ecosystem to succeed — from insurance to inspections to permits.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-guardian-steel relative">
        <div className="container-lg relative z-10">
          <h2 className="text-3xl md:text-4xl font-headline font-bold uppercase text-white text-center mb-12">
            What We <span className="text-gold">Stand For</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="p-8 rounded-2xl border border-white/[0.06] bg-guardian-graphite/50 hover:border-gold/20 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-headline font-bold uppercase text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Ecosystem */}
      <section className="py-20 bg-guardian-black relative">
        <div className="absolute inset-0 blueprint-bg opacity-20" />
        <div className="container-lg relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold uppercase text-white mb-4">
              The <span className="text-gold">Ecosystem</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Every home project involves more than just a contractor. We connect all the professionals who make projects succeed.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ecosystem.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="p-6 rounded-xl border border-white/[0.06] bg-guardian-graphite/30 hover:border-gold/20 transition-colors"
              >
                <h3 className="text-lg font-bold text-gold mb-1">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
