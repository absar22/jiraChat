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
    <section className="py-24 px-6 bg-[#f7f3f1]">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-16">
          Everything your team needs
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <FeatureCard key={i} {...f} />
          ))}
        </div>

      </div>
    </section>
  )
}
