import { FeatureCardProps } from '@/types/components'

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  iconBgColor,
}: FeatureCardProps) {
  return (
    <div className="border-2 border-black rounded-2xl p-8 bg-white">
      <div className={`w-12 h-12 ${iconBgColor} rounded-xl flex items-center justify-center mb-6`}>
        <Icon className="w-6 h-6 text-white" />
      </div>

      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  )
}
