// app/pricing/page.tsx

import { PricingSection } from '@/components/pricing/PricingSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing Plans',
  description: 'Choose the perfect plan for your team. Flexible pricing for teams of all sizes.',
  openGraph: {
    title: 'Pricing Plans - SaaS App',
    description: 'Choose the perfect plan for your team',
    type: 'website',
  },
};

export default function PricingPage() {
  return (
    <main>
      <PricingSection showComparison={true} />
    </main>
  );
}