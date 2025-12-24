'use client'

import Image from 'next/image'

const technologies = [
  { name: 'Next.js', src: '/tech/nextjs.svg' },
  { name: 'TypeScript', src: '/tech/typescript.svg' },
  { name: 'Tailwind CSS', src: '/tech/tailwind.svg' },
  { name: 'Node.js', src: '/tech/nodejs.svg' },
  { name: 'Express', src: '/tech/express.svg' },
  { name: 'MongoDB', src: '/tech/mongodb.svg' },
  { name: 'WebSockets', src: '/tech/websocket.svg' },
  
]

export default function About() {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 px-6 py-20">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* Hero */}
        <section className="text-center space-y-6">
          <h1 className="text-5xl font-bold text-gray-900">
            About JiraChat
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            JiraChat is a modern collaboration platform that merges task
            management with real-time chat — keeping conversations directly
            tied to the work that matters.
          </p>
        </section>

        {/* Problem + Solution */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <h2 className="text-3xl font-semibold text-gray-900">
              Why JiraChat Exists
            </h2>
            <p className="text-gray-600 text-lg">
              Teams constantly switch between tools like Jira for tasks and
              Slack or WhatsApp for communication. This breaks focus, scatters
              decisions, and causes important context to get lost.
            </p>
            <p className="text-gray-600 text-lg">
              JiraChat removes this friction by embedding conversations
              directly inside boards and issues.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 space-y-4">
            <h3 className="text-xl font-semibold">What JiraChat Fixes</h3>
            <ul className="space-y-2 text-gray-600">
              <li>✔ Context switching between tools</li>
              <li>✔ Lost task-related discussions</li>
              <li>✔ Unclear decisions & ownership</li>
              <li>✔ Fragmented collaboration</li>
            </ul>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="space-y-8">
          <h2 className="text-3xl font-semibold text-center text-gray-900">
            Technology Stack
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center justify-center hover:shadow-xl transition"
              >
                <Image
                  src={tech.src}
                  alt={tech.name}
                  width={60}
                  height={60}
                  className="mb-4"
                />
                <span className="font-medium text-gray-700">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Vision */}
        <section className="bg-black rounded-3xl p-12 text-center space-y-4">
          <h2 className="text-3xl font-semibold text-white">
            The Vision
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            JiraChat is built as a real-world, scalable product that focuses on
            reducing noise, preserving context, and enabling teams to
            collaborate more effectively — without switching tools.
          </p>
        </section>

      </div>
    </div>
  )
}
