import type { Metadata } from 'next';
import { CTASection } from '@/components/sections';
import { AboutContent } from './components/AboutContent';

export const metadata: Metadata = {
  title: 'About Contractor Guardians',
  description: 'The home services ecosystem that protects homeowners, empowers contractors, and connects the professionals who make projects possible.',
};

export default function AboutPage() {
  return (
    <>
      <AboutContent />
      <CTASection
        title="Join the Ecosystem"
        description="Whether you're a homeowner, contractor, insurance agent, or real estate professional — there's a place for you on Contractor Guardians."
        primaryCta={{ label: "I Need a Contractor", href: '/homeowners' }}
        secondaryCta={{ label: "I'm a Professional", href: '/contractors' }}
      />
    </>
  );
}
