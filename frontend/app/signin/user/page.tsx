"use client"

import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import Cookies from 'js-cookie'

import { AxiosError } from 'axios'
import api from "@/components/lib/api"

export default function SignInUserPage() {
  const router = useRouter()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

const handleLogin = async () => {
  if(!email || !password) {
    toast.error('Please enter your email and password')
    return
  }
  setLoading(true)
  try {
    const { data } = await api.post('/api/auth/login', {
      email,
      password,
    })

    Cookies.set('token', data.token, {
      expires: 7,
      sameSite: 'strict',
      secure: process.env.NODE_ENV === 'production',
    })

    toast.success(data.message)
    router.push('/dashboard')

  } catch (error) {
    if (error instanceof AxiosError) {
      toast.error(error.response?.data.message || 'Login failed')
    }
  }
}

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7f3f1] px-6 py-12">
      <div className="w-full max-w-md rounded-2xl border-2 border-black bg-white p-8">

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-black">
            Welcome back
          </h1>
          <p className="text-sm text-gray-700 mt-2">
            Sign in to continue using JiraChat
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={(e)=>{
          e.preventDefault()
          handleLogin()}
         }>
          
          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border-2 border-black bg-white px-4 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border-2 border-black bg-white px-4 py-2.5 pr-10 text-sm placeholder:text-gray-400 focus:outline-none"
              />
              <button
                type="submit"
                disabled={loading}
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-black"
              >
                {loading ? 'signning in...' : 'sign in'}
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl border-2 border-black bg-[#5dbfc1] py-3 font-semibold text-black hover:bg-[#4fb3b6] transition disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-700 mt-6">
          Don’t have an account?{" "}
          <Link
            href="/signUp/user"
            className="font-medium underline hover:no-underline"
          >
            Create one
          </Link>
        </p>
      </div>
    </div>
  )
}
