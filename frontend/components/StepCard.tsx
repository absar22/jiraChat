import React from 'react';
import { StepCardProps } from '@/types/components';

export default function StepCard({ stepNumber, title, description, bgColor }: StepCardProps) {
  return (
    <div className="group text-center relative">
      {/* Connecting line (hidden on mobile) */}
      {stepNumber < 3 && (
        <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-linear-to-r from-indigo-200 to-purple-200 dark:from-indigo-800 dark:to-purple-800 transform translate-x-1/2"></div>
      )}
      
      <div className={`relative w-20 h-20 ${bgColor} text-white rounded-2xl flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 group-hover:shadow-2xl`}>
        <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <span className="relative z-10">{stepNumber}</span>
      </div>
      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
        {title}
      </h3>
      <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">{description}</p>
    </div>
  );
}

