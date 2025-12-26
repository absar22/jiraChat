import React from 'react';
import { Kanban, MessageSquare, Users, Zap, CheckCircle, Shield } from 'lucide-react';
import FeatureCard from './FeatureCard';

const features = [
  {
    icon: Kanban,
    title: 'Kanban Boards',
    description: 'Visual task management with drag-and-drop. Organize work your way with customizable columns.',
    iconBgColor: 'bg-indigo-600',
    cardGradient: 'from-indigo-50 to-purple-50',
  },
  {
    icon: MessageSquare,
    title: 'Real-time Chat',
    description: 'Instant messaging with channels, threads, and direct messages. Keep conversations organized.',
    iconBgColor: 'bg-purple-600',
    cardGradient: 'from-purple-50 to-pink-50',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Assign tasks, mention teammates, and collaborate seamlessly in one unified workspace.',
    iconBgColor: 'bg-blue-600',
    cardGradient: 'from-blue-50 to-indigo-50',
  },
  {
    icon: Zap,
    title: 'Smart Integrations',
    description: 'Link tasks in chat messages, get notified of updates, and keep everything connected.',
    iconBgColor: 'bg-green-600',
    cardGradient: 'from-green-50 to-emerald-50',
  },
  {
    icon: CheckCircle,
    title: 'Task Management',
    description: 'Create, assign, and track tasks with priorities, due dates, labels, and custom fields.',
    iconBgColor: 'bg-orange-600',
    cardGradient: 'from-orange-50 to-red-50',
  },
  {
    icon: Shield,
    title: 'Secure & Private',
    description: 'Enterprise-grade security with role-based access control and private workspaces.',
    iconBgColor: 'bg-teal-600',
    cardGradient: 'from-teal-50 to-cyan-50',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-white via-indigo-50/30 to-purple-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-semibold mb-4">
            ✨ Features
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-slate-800 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent mb-6">
            Everything Your Team Needs
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Powerful features designed to boost productivity and streamline collaboration
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

