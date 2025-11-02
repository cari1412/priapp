'use client';

import React from 'react';
import { Check, X } from 'lucide-react';
import type { PricingPlan } from '@/types/pricing';

interface PricingCardProps {
  plan: PricingPlan;
  onCtaClick?: (planId: string) => void;
}

export const PricingCard: React.FC<PricingCardProps> = ({ plan, onCtaClick }) => {
  const handleClick = () => {
    if (onCtaClick) {
      onCtaClick(plan.id);
    }
  };

  const getCardClasses = () => {
    const baseClasses = 'glass-card glass-card-hover shine-effect rounded-2xl p-8 relative';
    
    if (plan.highlighted) {
      return `${baseClasses} border-gradient-animated glow-pulse`;
    }
    
    return baseClasses;
  };

  const getButtonClasses = () => {
    if (plan.ctaVariant === 'gradient') {
      return 'btn-gradient w-full py-3 px-6 rounded-xl font-semibold text-white shadow-lg';
    }
    return 'btn-outline-gradient w-full py-3 px-6 rounded-xl font-semibold text-white';
  };

  return (
    <div className={getCardClasses()}>
      {/* Badge */}
      {plan.badge && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span
            className={
              plan.badge.type === 'popular'
                ? 'badge-popular text-white'
                : 'badge-premium text-slate-900'
            }
          >
            {plan.badge.type === 'popular' ? '⭐ ' : '👑 '}
            {plan.badge.text}
          </span>
        </div>
      )}

      {/* Premium gradient overlay */}
      {plan.id === 'enterprise' && (
        <div className="absolute inset-0 gradient-premium opacity-10 pointer-events-none rounded-2xl" />
      )}

      {/* Content */}
      <div className={`${plan.badge ? 'mt-2' : ''} relative z-10`}>
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
          <p className="text-gray-400">{plan.description}</p>
        </div>

        {/* Price */}
        <div className="mb-8">
          <div className="flex items-baseline">
            {typeof plan.price === 'number' ? (
              <>
                <span
                  className={`text-5xl font-bold ${
                    plan.highlighted ? 'gradient-text-purple' : ''
                  } ${plan.id === 'enterprise' ? 'gradient-text-blue' : ''}`}
                >
                  ${plan.price}
                </span>
                <span className="text-gray-400 ml-2">/{plan.period || 'месяц'}</span>
              </>
            ) : (
              <span className="text-5xl font-bold gradient-text-blue">Custom</span>
            )}
          </div>
          {plan.discount && (
            <p className="text-sm text-gray-400 mt-2">{plan.discount}</p>
          )}
        </div>

        {/* Features */}
        <ul className="space-y-4 mb-8">
          {plan.features.map((feature, index) => (
            <li key={index} className={`flex items-start ${!feature.included ? 'opacity-50' : ''}`}>
              <span
                className={`${
                  feature.included
                    ? 'inline-flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-br from-green-400 to-emerald-500'
                    : 'inline-flex items-center justify-center w-5 h-5 rounded-full bg-gray-600'
                } mr-3 mt-1 flex-shrink-0`}
              >
                {feature.included ? (
                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                ) : (
                  <X className="w-3 h-3 text-white" strokeWidth={3} />
                )}
              </span>
              <span className={feature.highlighted ? 'font-semibold' : ''}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button onClick={handleClick} className={getButtonClasses()}>
          {plan.ctaText}
        </button>
      </div>
    </div>
  );
};