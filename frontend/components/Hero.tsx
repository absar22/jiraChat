import React from 'react';
import { ArrowRight, Kanban } from 'lucide-react';
import Button from './Button';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          Where Teams
          <span className="block bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Plan & Chat
          </span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          The only platform that combines powerful project management with seamless team communication. 
          Stop switching between apps and get work done faster.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button icon={ArrowRight} iconPosition="right">
            Start Free Trial
          </Button>
          <Button variant="outline">
            Watch Demo
          </Button>
        </div>

        {/* Hero Image Placeholder */}
        <div className="mt-16 relative">
          <div className="bg-white rounded-2xl shadow-2xl p-4 border border-gray-200">
            <div className="bg-linear-to-br from-indigo-100 to-purple-100 rounded-xl h-96 flex items-center justify-center">
              <div className="text-center">
                <Kanban className="w-24 h-24 text-indigo-600 mx-auto mb-4" />
                <p className="text-gray-600 text-lg">  App Screenshot / Demo Here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

