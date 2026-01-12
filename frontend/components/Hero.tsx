import { ArrowRight } from 'lucide-react'
import Button from './Button'

export default function Hero() {
  return (
    <section className="py-24 px-6 bg-[#f7f3f1]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        <div>
          <h1 className="text-5xl font-bold mb-6">
            Work together.<br />Stay aligned.
          </h1>

          <p className="text-lg text-gray-700 mb-8">
            JiraChat brings tasks and conversations together so teams never lose context.
          </p>

          <div className="flex gap-4">
            <Button icon={ArrowRight}>Get Started</Button>
            <Button variant="secondary">See Demo</Button>
          </div>
        </div>

        <div className="border-2 border-black rounded-2xl bg-[#e8f0f2] h-80 flex items-center justify-center">
          <p className="font-medium">App Preview</p>
        </div>

      </div>
    </section>
  )
}
