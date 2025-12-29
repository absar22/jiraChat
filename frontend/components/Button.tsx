import React from 'react';
import { ButtonProps } from '@/types/components';

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
    primary: 'bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 text-white hover:shadow-xl hover:shadow-indigo-500/30',
    secondary: 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 hover:shadow-xl',
    outline: 'border-2 border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20',
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

