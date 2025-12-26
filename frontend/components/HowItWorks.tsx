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
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-indigo-50/50 to-transparent dark:via-indigo-900/10"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm font-semibold mb-4">
            📋 How It Works
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-slate-800 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent mb-6">
            How JiraChat Works
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            Get started in 3 simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {steps.map((step) => (
            <StepCard key={step.stepNumber} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}

