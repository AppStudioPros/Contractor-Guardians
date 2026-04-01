import type { Metadata } from 'next';
import { HomeownersContent } from './components/HomeownersContent';
import { CTASection } from '@/components/sections';

export const metadata: Metadata = {
  title: 'For Homeowners | Contractor Guardians',
  description: 'Find verified contractors, post projects, and get matched — completely free. Add escrow protection, guaranteed work, and real-time monitoring when you need them.',
};

export default function HomeownersPage() {
  return (
    <>
      <HomeownersContent />
      <CTASection
        title="Your Project. Protected."
        description="Browse verified contractors, post your project, and get matched — all completely free. Add protection when you're ready."
        primaryCta={{ label: 'Find a Contractor', href: '/contact' }}
        secondaryCta={{ label: 'How It Works', href: '/#how-it-works' }}
      />
    </>
  );
}
