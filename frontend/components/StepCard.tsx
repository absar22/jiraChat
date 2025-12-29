import React from 'react';
import { StepCardProps } from '@/types/components';

export default function StepCard({ stepNumber, title, description, bgColor }: StepCardProps) {
  return (
    <div className="text-center">
      <div className={`w-16 h-16 ${bgColor} text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg`}>
        {stepNumber}
      </div>
      <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{title}</h3>
      <p className="text-slate-600 dark:text-slate-300">{description}</p>
    </div>
  );
}

