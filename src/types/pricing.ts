// types/pricing.ts

export interface PricingFeature {
  text: string;
  included: boolean;
  highlighted?: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: number | 'custom';
  period?: string;
  badge?: {
    text: string;
    type: 'popular' | 'premium';
  };
  features: PricingFeature[];
  ctaText: string;
  ctaVariant: 'outline' | 'gradient';
  highlighted?: boolean;
  discount?: string;
}

export interface ComparisonRow {
  feature: string;
  starter: string | boolean;
  professional: string | boolean;
  enterprise: string | boolean;
}