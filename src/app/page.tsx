import {
  HeroSection,
  FeaturesSection,
  HowItWorksSection,
  PricingSection,
  TestimonialsSection,
  CTASection,
} from '@/components/sections';

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Contractor Guardians',
  url: 'https://contractorguardians.com',
  email: 'info@contractorguardians.com',
  description: 'Contractor Guardians protects homeowners and empowers contractors with verified professionals, digital contracts, escrow payments, and project monitoring.',
  sameAs: [],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <PricingSection />
      <TestimonialsSection />
      <CTASection
        title="Ready to Get Started?"
        description="Whether you're a homeowner looking for trusted contractors or a professional looking to grow — Contractor Guardians has you covered."
        primaryCta={{ label: "I Need a Contractor", href: '/homeowners' }}
        secondaryCta={{ label: "I'm a Professional", href: '/contractors' }}
      />
    </>
  );
}
