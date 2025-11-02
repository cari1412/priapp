// components/pricing/PricingSection.tsx - ОПТИМИЗИРОВАННАЯ ВЕРСИЯ
// ✅ Теперь Server Component (убрали 'use client')

import React from 'react';
import { PricingCard } from './PricingCard';
import { ComparisonTable } from './ComparisonTable';
import type { PricingPlan, ComparisonRow } from '@/types/pricing';

// ✅ Данные вынесены в константы (создаются один раз при сборке)
const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Для небольших проектов',
    price: 0,
    period: 'месяц',
    features: [
      { text: 'До 5 пользователей', included: true },
      { text: '10 GB хранилища', included: true },
      { text: 'Базовая поддержка', included: true },
      { text: 'API доступ', included: true },
      { text: 'Приоритетная поддержка', included: false },
    ],
    ctaText: 'Начать бесплатно',
    ctaVariant: 'outline',
    discount: 'Бесплатно навсегда',
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'Для растущих команд',
    price: 49,
    period: 'месяц',
    badge: {
      text: 'Самый популярный',
      type: 'popular',
    },
    features: [
      { text: 'До 50 пользователей', included: true, highlighted: true },
      { text: '500 GB хранилища', included: true, highlighted: true },
      { text: 'Приоритетная поддержка 24/7', included: true },
      { text: 'Расширенная аналитика', included: true },
      { text: 'Кастомные интеграции', included: true },
      { text: 'Командные воркспейсы', included: true },
    ],
    ctaText: 'Начать 14-дневный триал',
    ctaVariant: 'gradient',
    highlighted: true,
    discount: 'Оплата ежегодно: $470/год',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Для крупных организаций',
    price: 'custom',
    badge: {
      text: 'Premium',
      type: 'premium',
    },
    features: [
      { text: 'Неограниченно пользователей', included: true, highlighted: true },
      { text: 'Неограниченное хранилище', included: true, highlighted: true },
      { text: 'Выделенный аккаунт-менеджер', included: true },
      { text: 'On-premise решения', included: true },
      { text: 'SLA гарантии 99.99%', included: true },
      { text: 'Кастомная разработка', included: true },
    ],
    ctaText: 'Связаться с отделом продаж',
    ctaVariant: 'outline',
    discount: 'Индивидуальное предложение',
  },
];

const COMPARISON_DATA: ComparisonRow[] = [
  {
    feature: 'Пользователей',
    starter: '5',
    professional: '50',
    enterprise: 'Безлимит',
  },
  {
    feature: 'Хранилище',
    starter: '10 GB',
    professional: '500 GB',
    enterprise: 'Безлимит',
  },
  {
    feature: 'API лимит',
    starter: '1K запросов/день',
    professional: '100K запросов/день',
    enterprise: 'Безлимит',
  },
  {
    feature: 'Поддержка',
    starter: 'Email',
    professional: '24/7 Chat',
    enterprise: 'Dedicated Manager',
  },
  {
    feature: 'SSO',
    starter: false,
    professional: true,
    enterprise: true,
  },
  {
    feature: 'Кастомные интеграции',
    starter: false,
    professional: true,
    enterprise: true,
  },
  {
    feature: 'Advanced Analytics',
    starter: false,
    professional: true,
    enterprise: true,
  },
  {
    feature: 'On-premise',
    starter: false,
    professional: false,
    enterprise: true,
  },
];

interface PricingSectionProps {
  showComparison?: boolean;
}

// ✅ Server Component - рендерится на сервере
export function PricingSection({
  showComparison = true,
}: PricingSectionProps) {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* ✅ Статичный паттерн без анимаций */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      {/* Main Container */}
      <div className="relative container mx-auto px-4 py-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="gradient-text-purple text-sm font-semibold tracking-wider uppercase">
              Pricing Plans
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Выберите свой{' '}
            <span className="gradient-text-blue">идеальный план</span>
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Гибкие тарифы для команд любого размера. Начните бесплатно и
            масштабируйте по мере роста.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-24">
          {PRICING_PLANS.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>

        {/* Features Comparison Table */}
        {showComparison && (
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Сравнение всех возможностей
            </h2>
            <ComparisonTable data={COMPARISON_DATA} />
          </div>
        )}

        {/* FAQ Section */}
        <div className="mt-24 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Остались вопросы?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Свяжитесь с нашей командой, мы ответим на любые вопросы о тарифах
          </p>
          <button className="btn-gradient py-4 px-8 rounded-xl font-semibold text-white text-lg">
            Связаться с нами
          </button>
        </div>
      </div>
    </div>
  );
}

export default PricingSection;