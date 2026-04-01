import type { Metadata } from 'next';
import { ContractorsContent } from './components/ContractorsContent';
import { CTASection } from '@/components/sections';

export const metadata: Metadata = {
  title: 'For Contractors | Contractor Guardians',
  description: 'Join the platform that pays you fairly. Verified leads, flat-rate pricing, no per-lead charges. Free to list, Pro from $199/mo.',
};

export default function ContractorsPage() {
  return (
    <>
      <ContractorsContent />
      <CTASection
        title="Ready to Grow Your Business?"
        description="Stop paying per lead. Start getting matched with homeowners who are serious about hiring — and willing to pay for quality work."
        primaryCta={{ label: 'Create Free Profile', href: '/contact' }}
        secondaryCta={{ label: 'View Pricing', href: '/#pricing' }}
      />
    </>
  );
}
