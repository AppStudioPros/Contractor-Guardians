import type { Metadata } from 'next';
import { RealEstateContent } from './components/RealEstateContent';
import { CTASection } from '@/components/sections';

export const metadata: Metadata = {
  title: 'For Real Estate Professionals | Contractor Guardians',
  description: 'Earn passive income from every buyer you refer. Your clients get trusted contractors, you get a referral fee — for life.',
};

export default function RealEstatePage() {
  return (
    <>
      <RealEstateContent />
      <CTASection
        title="Your Buyers Need Contractors. You Need Revenue."
        description="Refer your buyers to Contractor Guardians and earn a referral fee on every project they do — for life. Free to join."
        primaryCta={{ label: 'Join Free', href: '/contact' }}
        secondaryCta={{ label: 'Learn More', href: '/about' }}
      />
    </>
  );
}
