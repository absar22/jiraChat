import React from 'react';

interface StepCardProps {
  stepNumber: number;
  title: string;
  description: string;
  bgColor: string;
}

export default function StepCard({ stepNumber, title, description, bgColor }: StepCardProps) {
  return (
    <div className="text-center">
      <div className={`w-16 h-16 ${bgColor} text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4`}>
        {stepNumber}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

