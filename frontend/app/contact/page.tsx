'use client'

export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 px-4">
      <div className="w-full max-w-lg bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl p-8">
        
        {/* Heading */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-gray-900">
            Contact Jira<span className="text-blue-500">Chat</span>
          </h1>
          <p className="text-gray-600 mt-2">
            Have a question or feedback? We'd love to hear from you.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
          />

          <textarea
            rows={4}
            placeholder="Your Message"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-black"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-black text-white font-semibold hover:bg-gray-900 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
        <p className="text-center text-sm text-gray-500 mt-6">
          We usually respond within 24 hours.
        </p>
      </div>
    </div>
  )
}
