'use client'

import { CheckCircle2, Target, Zap, Users, Code2, Rocket } from 'lucide-react'
import technologies from '@/utils/data/technologies.json'
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
    <div className="min-h-screen bg-[#f7f3f1] px-6 py-20">
      <div className="max-w-7xl mx-auto space-y-24">

        {/* Hero Section */}
        <section className="text-center space-y-4">
          <div className="inline-block px-4 py-1 rounded-full bg-indigo-100 text-indigo-600 text-sm font-semibold">
            📖 About Us
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-black">
            About JiraChat
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            JiraChat is a modern collaboration platform that merges task
            management with real-time chat — keeping conversations directly
            tied to the work that matters.
          </p>
        </section>

        {/* Problem + Solution */}
        <section className="grid md:grid-cols-2 gap-12 items-center">

          {/* Why JiraChat */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center">
                <Target className="w-6 h-6 text-indigo-600" />
              </div>
              <h2 className="text-3xl font-bold text-black">Why JiraChat Exists</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Teams constantly switch between tools like Jira for tasks and Slack or WhatsApp for communication. This breaks focus, scatters decisions, and causes important context to get lost.
            </p>
            <p className="text-gray-700 leading-relaxed">
              JiraChat removes this friction by embedding conversations directly inside boards and issues.
            </p>
          </div>

          {/* What it fixes */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-black">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-black">What JiraChat Fixes</h3>
            </div>
            <ul className="space-y-4">
              {fixes.map((fix, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-indigo-600 mt-0.5 shrink-0" />
                  <span className="text-gray-700 text-lg">{fix}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <div className="inline-block px-4 py-1 rounded-full bg-purple-100 text-purple-600 text-sm font-semibold">
              🛠️ Built With
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-black">Technology Stack</h2>
            <p className="text-gray-700">Modern technologies powering seamless collaboration</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {technologiesList.map((tech) => (
              <div
                key={tech.name}
                className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center border-2 border-black hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-xl bg-gray-100 flex items-center justify-center mb-4">
                  <Image src={tech.logo} alt={tech.name} width={36} height={36} className="w-9 h-9 object-contain" />
                </div>
                <span className="font-semibold text-gray-700 text-center">{tech.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Vision */}
        <section className="bg-indigo-600 rounded-3xl p-12 md:p-16 text-center text-white shadow-lg">
          <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-4 mx-auto">
            <Rocket className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">The Vision</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            JiraChat is built as a real-world, scalable product that focuses on reducing noise, preserving context, and enabling teams to collaborate more effectively — without switching tools.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20">
              <Users className="w-5 h-5 text-white" />
              <span className="font-medium">Team Focused</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20">
              <Code2 className="w-5 h-5 text-white" />
              <span className="font-medium">Developer First</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20">
              <Zap className="w-5 h-5 text-white" />
              <span className="font-medium">Lightning Fast</span>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
