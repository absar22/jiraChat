import React from 'react';
import { ArrowRight, Kanban } from 'lucide-react';
import Button from './Button';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="inline-block px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-semibold mb-6 animate-fade-in">
          🚀 Welcome to JiraChat
        </div>
        <h1 className="text-6xl md:text-8xl font-extrabold text-slate-900 dark:text-white mb-8 leading-tight">
          Where Teams
          <span className="block bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
            Plan & Chat
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          The only platform that combines powerful project management with seamless team communication. 
          <span className="block mt-2 font-medium text-indigo-600 dark:text-indigo-400">Stop switching between apps and get work done faster.</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button icon={ArrowRight} iconPosition="right">
            Start Free Trial
          </Button>
          <Button variant="outline">
            Watch Demo
          </Button>
        </div>

        {/* Hero Image Placeholder */}
        <div className="mt-20 relative group">
          <div className="absolute inset-0 bg-linear-to-r from-indigo-600 to-purple-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
          <div className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl rounded-3xl shadow-2xl p-6 border border-white/50 dark:border-white/10 group-hover:shadow-indigo-500/20 transition-all duration-300">
            <div className="bg-linear-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-900/20 dark:via-purple-900/20 dark:to-pink-900/20 rounded-2xl h-[500px] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
              <div className="text-center relative z-10">
                <div className="mb-6 animate-bounce">
                  <Kanban className="w-32 h-32 text-indigo-600 dark:text-indigo-400 mx-auto drop-shadow-lg" />
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-xl font-medium">App Screenshot / Demo Here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

