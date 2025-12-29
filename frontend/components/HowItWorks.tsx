import React from 'react';
import StepCard from './StepCard';

const steps = [
  {
    stepNumber: 1,
    title: 'Create Workspace',
    description: 'Set up your team workspace in seconds. Invite members and get started.',
    bgColor: 'bg-indigo-600',
  },
  {
    stepNumber: 2,
    title: 'Organize Projects',
    description: 'Create projects, set up boards, and start adding tasks to get organized.',
    bgColor: 'bg-purple-600',
  },
  {
    stepNumber: 3,
    title: 'Collaborate & Ship',
    description: 'Chat, manage tasks, and ship faster with your team all in one place.',
    bgColor: 'bg-pink-600',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4">
            How JiraChat Works
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Get started in 3 simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step) => (
            <StepCard key={step.stepNumber} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}

