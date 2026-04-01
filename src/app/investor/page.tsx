import type { Metadata } from 'next';
import { InvestorContent } from './components/InvestorContent';

export const metadata: Metadata = {
  title: 'Investor | Contractor Guardians',
  description: 'Investment opportunity in Contractor Guardians — the home services ecosystem capturing revenue at every stage of a project.',
};

export default function InvestorPage() {
  return <InvestorContent />;
}
