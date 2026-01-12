import { ButtonProps } from '@/types/components'

export default function Button({
  children,
  variant = 'primary',
  icon: Icon,
  iconPosition = 'right',
  className = '',
  onClick,
}: ButtonProps) {

  const base = 'inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-black font-semibold transition hover:-translate-y-0.5'

  const variants = {
    primary: 'bg-[#5dbfc1] text-black hover:bg-[#4fb3b6]',
    secondary: 'bg-white text-black hover:bg-gray-100',
    outline: 'bg-transparent text-black hover:bg-gray-100',
  }

  return (
    <button
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4" />}
    </button>
  )
}
