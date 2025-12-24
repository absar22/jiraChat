import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconBgColor: string;
  cardGradient: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  iconBgColor,
  cardGradient,
}: FeatureCardProps) {
  return (
    <div className={`p-6 rounded-xl bg-linear-to-br ${cardGradient} hover:shadow-lg transition`}>
      <div className={`w-12 h-12 ${iconBgColor} rounded-lg flex items-center justify-center mb-4`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

