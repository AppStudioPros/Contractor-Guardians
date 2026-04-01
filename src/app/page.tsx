import {
  HeroSection,
  FeaturesSection,
  HowItWorksSection,
  PricingSection,
  TestimonialsSection,
  CTASection,
} from '@/components/sections';

export default function HomePage() {
  return (
    <>
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
