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
  const baseStyles = 'px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 relative overflow-hidden group';
  
  const variantStyles = {
    primary: 'bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 text-white hover:shadow-2xl hover:shadow-indigo-500/50',
    secondary: 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 hover:shadow-2xl hover:bg-indigo-50 dark:hover:bg-slate-700',
    outline: 'border-2 border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:border-indigo-700 dark:hover:border-indigo-300',
  };

  const iconStyles = Icon ? 'flex items-center justify-center gap-2' : '';

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${iconStyles} ${className}`}
      onClick={onClick}
    >
      {/* Shimmer effect */}
      <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
      
      {Icon && iconPosition === 'left' && <Icon className="w-5 h-5 group-hover:translate-x-[-4px] transition-transform" />}
      <span className="relative z-10">{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
    </button>
  );
}

