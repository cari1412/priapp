'use client';

import React from 'react';
import { Check } from 'lucide-react';
import type { ComparisonRow } from '@/types/pricing';

interface ComparisonTableProps {
  data: ComparisonRow[];
}

// ✅ Убрали memo - React Compiler оптимизирует автоматически
export function ComparisonTable({ data }: ComparisonTableProps) {
  // ✅ Упростили функцию рендера (без useCallback)
  const renderCell = (value: string | boolean) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="w-5 h-5 text-green-400 mx-auto" strokeWidth={2} />
      ) : (
        <span className="text-gray-600">—</span>
      );
    }

    // Check if it's a special value (unlimited, etc)
    if (value.toLowerCase().includes('безлимит') || value.toLowerCase().includes('unlimited')) {
      return <span className="font-semibold gradient-text-blue">{value}</span>;
    }

    // Check if it's a highlighted value
    if (value.includes('K') || value.includes('GB') || value.includes('Manager')) {
      return <span className="font-semibold">{value}</span>;
    }

    return <span>{value}</span>;
  };

  return (
    <div className="glass-card rounded-2xl p-8 overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-white/10">
            <th className="pb-4 pr-4 font-semibold text-gray-300 min-w-[200px]">Функция</th>
            <th className="pb-4 px-4 font-semibold text-center min-w-[120px]">Starter</th>
            <th className="pb-4 px-4 font-semibold text-center min-w-[120px]">Professional</th>
            <th className="pb-4 pl-4 font-semibold text-center min-w-[120px]">Enterprise</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10">
          {data.map((row, index) => (
            <tr key={index} className="hover:bg-white/5 transition-colors">
              <td className="py-4 pr-4 text-gray-300">{row.feature}</td>
              <td className="py-4 px-4 text-center">{renderCell(row.starter)}</td>
              <td className="py-4 px-4 text-center">{renderCell(row.professional)}</td>
              <td className="py-4 pl-4 text-center">{renderCell(row.enterprise)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}