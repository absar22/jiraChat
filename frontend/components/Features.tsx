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
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4">
            Everything Your Team Needs
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Powerful features designed to boost productivity
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

