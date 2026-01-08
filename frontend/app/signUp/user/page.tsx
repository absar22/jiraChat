"use client"

import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import api from "@/components/lib/api"
import { SignUpRequest, SignupResponse } from "@/types/auth"
import { AxiosError } from "axios"

export default function SignUpUserPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const router = useRouter()
  
 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  try {
    const payload: SignUpRequest = {
      username,
      email,
      password,
      confirmPassword,
    }

    const { data } = await api.post<SignupResponse>('/api/auth/signup', payload)

    if (data.success === true) {
      toast.success(data.message)
      const verificationId = data.data?.verificationId
      if (!verificationId) {
        toast.error('Verification ID missing')
        return
      }

      router.push(
        `/otp?email=${encodeURIComponent(email)}&verificationId=${verificationId}`
      )
    } else {
      toast.error(data.message || 'Signup failed')
    }

  } catch (error) {
    if (error instanceof AxiosError) {
      toast.error(error.response?.data.message || "Something went wrong")
    }
  }
}

  
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7f3f1] px-6 py-12">
      <div className="w-full max-w-md rounded-2xl border-2 border-black bg-white p-8">
        
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-black">
            Create an account
          </h1>
          <p className="text-sm text-gray-700 mt-2">
            Join JiraChat and start collaborating smarter
          </p>
        </div>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Username
            </label>
            <input
              type="text"
              placeholder="absar22"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full rounded-lg border-2 border-black bg-white px-4 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none"
            />
          </div>
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
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-black"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full rounded-lg border-2 border-black bg-white px-4 py-2.5 pr-10 text-sm placeholder:text-gray-400 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-black"
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full rounded-xl border-2 border-black bg-[#5dbfc1] py-3 font-semibold text-black hover:bg-[#4fb3b6] transition"
          >
            Create account
          </button>
        </form>
        <p className="text-center text-sm text-gray-700 mt-6">
          Already have an account?{" "}
          <Link
            href="/signin/user"
            className="font-medium underline hover:no-underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}
