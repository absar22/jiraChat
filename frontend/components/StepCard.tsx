import { StepCardProps } from '@/types/components'

export default function StepCard({
  stepNumber,
  title,
  description,
  bgColor,
}: StepCardProps) {
  return (
    <div className="border-2 border-black rounded-2xl p-8 bg-white text-center">
      <div
        className={`w-12 h-12 ${bgColor} rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-white`}
      >
        {stepNumber}
      </div>

      <h3 className="text-xl font-bold mb-3 text-black">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  )
}
