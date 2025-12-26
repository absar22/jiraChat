import React from 'react';
import { FeatureCardProps } from '@/types/components';

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  iconBgColor,
  cardGradient,
}: FeatureCardProps) {
  return (
    <div className={`group relative p-8 rounded-2xl bg-linear-to-br ${cardGradient} border border-white/50 dark:border-white/10 hover:shadow-2xl hover:shadow-indigo-500/20 hover:-translate-y-2 transition-all duration-300 overflow-hidden`}>
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative z-10">
        <div className={`w-14 h-14 ${iconBgColor} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
          <Icon className="w-7 h-7 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

