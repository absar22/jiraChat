'use client'

import { CheckCircle2, Target, Zap, Users, Code2, Rocket } from 'lucide-react'
import  technologies  from '@/utils/data/technologies.json'
import Image from 'next/image'


type Technology = {
  name: string
  logo: string
}
const technologiesList = technologies as Technology[]

const fixes = [
  'Context switching between tools',
  'Lost task-related discussions',
  'Unclear decisions & ownership',
  'Fragmented collaboration',
]

export default function About() {
  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 space-y-24 relative z-10">
        {/* Hero Section */}
        <section className="text-center space-y-8 pt-12">
          <div className="inline-block px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-semibold mb-4 animate-fade-in">
            📖 About Us
          </div>
          <h1 className="text-6xl md:text-7xl font-extrabold bg-linear-to-r from-slate-900 via-indigo-600 to-purple-600 dark:from-white dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent mb-6">
            About JiraChat
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            JiraChat is a modern collaboration platform that merges task
            management with real-time chat — keeping conversations directly
            tied to the work that matters.
          </p>
        </section>

        {/* Problem + Solution */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                <Target className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
                Why JiraChat Exists
              </h2>
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Teams constantly switch between tools like Jira for tasks and
              Slack or WhatsApp for communication. This breaks focus, scatters
              decisions, and causes important context to get lost.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              JiraChat removes this friction by embedding conversations
              directly inside boards and issues.
            </p>
          </div>

          <div className="group relative animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="absolute inset-0 bg-linear-to-r from-indigo-600 to-purple-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/50 dark:border-white/10 group-hover:shadow-indigo-500/20 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">What JiraChat Fixes</h3>
              </div>
              <ul className="space-y-4">
                {fixes.map((fix, index) => (
                  <li key={index} className="flex items-start gap-3 group/item">
                    <CheckCircle2 className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mt-0.5 shrink-0 group-hover/item:scale-110 transition-transform" />
                    <span className="text-slate-700 dark:text-slate-300 text-lg">{fix}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <div className="inline-block px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm font-semibold">
              🛠️ Built With
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-slate-800 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
              Technology Stack
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Modern technologies powering seamless collaboration
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {technologiesList.map((tech, index) => {
              return (
                <div
                  key={tech.name}
                  className="group relative bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center hover:shadow-2xl hover:shadow-indigo-500/20 hover:-translate-y-2 transition-all duration-300 border border-slate-200/50 dark:border-white/10 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-linear-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative z-10 w-full flex flex-col items-center">
                    <div className="mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                     <div className="w-16 h-16 rounded-xl bg-linear-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 flex items-center justify-center transition-all">
                      <Image
                        src={tech.logo}
                        alt={tech.name}
                        width={36}
                        height={36}
                        className="w-9 h-9 object-contain grayscale group-hover:grayscale-0 transition"
                      />
                    </div>

                    </div>
                    <span className="font-semibold text-slate-700 dark:text-slate-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors text-center">
                      {tech.name}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Vision */}
        <section className="relative group">
          <div className="absolute inset-0 bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-40 transition-opacity"></div>
          <div className="relative bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-700 dark:via-purple-700 dark:to-pink-700 rounded-3xl p-12 md:p-16 text-center space-y-6 shadow-2xl">
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 mx-auto">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              The Vision
            </h2>
            <p className="text-xl md:text-2xl text-indigo-100 dark:text-indigo-200 max-w-3xl mx-auto leading-relaxed">
              JiraChat is built as a real-world, scalable product that focuses on
              reducing noise, preserving context, and enabling teams to
              collaborate more effectively — without switching tools.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm">
                <Users className="w-5 h-5 text-white" />
                <span className="text-white font-medium">Team Focused</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm">
                <Code2 className="w-5 h-5 text-white" />
                <span className="text-white font-medium">Developer First</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm">
                <Zap className="w-5 h-5 text-white" />
                <span className="text-white font-medium">Lightning Fast</span>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
