import React from 'react'
import StepCard from './StepCard'

const steps = [
  {
    stepNumber: 1,
    title: 'Create Workspace',
    description: 'Set up your team workspace in seconds. Invite members and get started.',
    bgColor: 'bg-[#5dbfc1]',
  },
  {
    stepNumber: 2,
    title: 'Organize Projects',
    description: 'Create projects, set up boards, and start adding tasks to get organized.',
    bgColor: 'bg-[#e58b5c]',
  },
  {
    stepNumber: 3,
    title: 'Collaborate & Ship',
    description: 'Chat, manage tasks, and ship faster with your team all in one place.',
    bgColor: 'bg-[#3fa7d6]',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-[#f7f3f1]">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">
            How JiraChat Works
          </h2>
          <p className="text-lg text-gray-700">
            Get started in 3 simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step) => (
            <StepCard key={step.stepNumber} {...step} />
          ))}
        </div>

      </div>
    </section>
  )
}
