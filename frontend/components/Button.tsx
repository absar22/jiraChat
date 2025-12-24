import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  variant = 'primary',
  icon: Icon,
  iconPosition = 'right',
  className = '',
  onClick,
}: ButtonProps) {
  const baseStyles = 'px-8 py-4 rounded-lg text-lg font-semibold transition';
  
  const variantStyles = {
    primary: 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-xl',
    secondary: 'bg-white text-indigo-600 hover:shadow-xl',
    outline: 'border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50',
  };

  const iconStyles = Icon ? 'flex items-center justify-center space-x-2' : '';

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${iconStyles} ${className}`}
      onClick={onClick}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-5 h-5" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-5 h-5" />}
    </button>
  );
}

