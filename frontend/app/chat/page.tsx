'use client'

import Link from "next/link"

export default function Chat() {
  // TODO: Replace with actual user state / session
  const user = false

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#f7f3f1] px-6">
        <div className="bg-white rounded-2xl border-2 border-black p-8 text-center shadow-lg">
          <h1 className="text-3xl font-bold text-black mb-4">You are not logged in</h1>
          <p className="text-gray-700 mb-6">Please sign in to access your chat.</p>
          <Link href="/signin/user">
            <button className="px-6 py-3 bg-[#5dbfc1] rounded-xl font-semibold text-black hover:bg-[#4fb3b6] transition">
              Login In
            </button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#f7f3f1] p-6">
      <h1 className="text-4xl font-bold text-black mb-6">Chat</h1>
      {/* Your dashboard content goes here */}
      <p className="text-gray-700">Welcome back, user!</p>
    </div>
  )
}
