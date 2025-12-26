import { LucideIcon } from 'lucide-react';
import React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  className?: string;
  onClick?: () => void;
}

export interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconBgColor: string;
  cardGradient: string;
}

export interface StepCardProps {
  stepNumber: number;
  title: string;
  description: string;
  bgColor: string;
}

export interface OTPInputProps {
  value: string;
  onChange: (value: string) => void;
  onCompleted: () => void;
  index: number;
}

export type OtpArray = string[]

