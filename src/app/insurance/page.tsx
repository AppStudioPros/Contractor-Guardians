import type { Metadata } from 'next';
import { InsuranceContent } from './components/InsuranceContent';
import { CTASection } from '@/components/sections';

export const metadata: Metadata = {
  title: 'For Insurance Agents | Contractor Guardians',
  description: 'Get matched with homeowners who need project insurance at the exact moment they\'re hiring a contractor. Stop cold calling. Start converting.',
};

export default function InsurancePage() {
  return (
    <>
      <InsuranceContent />
      <CTASection
        title="Stop Cold Calling. Start Converting."
        description="Get matched with homeowners who need project insurance right now — they're already hiring a contractor."
        primaryCta={{ label: 'Apply to List', href: '/contact' }}
        secondaryCta={{ label: 'Learn More', href: '/about' }}
      />
    </>
  );
}
