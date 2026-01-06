'use client'

export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7f3f1] px-6 py-12">

      {/* Card */}
      <div className="w-full max-w-lg rounded-2xl border-2 border-black bg-white p-8 shadow-lg">

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-black">
            Contact Jira<span className="text-[#5dbfc1]">Chat</span>
          </h1>
          <p className="text-sm text-gray-700 mt-2">
            Have a question or feedback? We’d love to hear from you.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">

          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Your Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full rounded-lg border-2 border-black bg-white px-4 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@email.com"
              className="w-full rounded-lg border-2 border-black bg-white px-4 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Message
            </label>
            <textarea
              rows={4}
              placeholder="Your message here..."
              className="w-full rounded-lg border-2 border-black bg-white px-4 py-2.5 text-sm placeholder:text-gray-400 resize-none focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl border-2 border-black bg-[#5dbfc1] py-3 font-semibold text-black hover:bg-[#4fb3b6] transition disabled:opacity-60"
          >
            Send Message
          </button>
        </form>

        <p className="text-center text-sm text-gray-700 mt-6">
          We usually respond within 24 hours.
        </p>
      </div>
    </div>
  )
}
