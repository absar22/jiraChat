'use client'

import { useRef, useState } from 'react'
import { toast } from 'sonner'
import { useSearchParams, useRouter } from 'next/navigation'
import { AxiosError } from 'axios'
import api from '@/components/lib/api'
import Cookies from 'js-cookie'

export default function OtpPage() {
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const inputsRef = useRef<HTMLInputElement[]>([])

  const searchParams = useSearchParams()
  const router = useRouter()
  const email = searchParams.get('email')
  const verificationId = searchParams.get('verificationId')

  function handleChange(value: string, index: number) {
    if (isNaN(Number(value))) return

    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus()
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>, index: number) {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus()
    }
  }

  async function handleVerify() {
    const enteredOtp = otp.map(d => d.trim()).join('')
    if (enteredOtp.length < 6) {
      toast.error('Please enter complete OTP')
      return
    }
    if (!email || !verificationId) {
      toast.error('Missing email or verification ID')
      return
    }

    try {
      const { data } = await api.post( '/api/auth/verify-otp',
        {
          email,
          verificationId,
          otp: enteredOtp,
        }
      )

        if(!data.token) {
          toast.error('Invalid OTP')
          return
        }

        Cookies.set('token', data.token, {
           expires: 7,
           secure: process.env.NODE_ENV === 'production',
           sameSite: 'strict',
        })

      

      toast.success(data.message || 'Account verified successfully')
      router.push('/dashboard')

    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message || 'OTP verification failed')
      } else {
        toast.error('Something went wrong')
      }
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-soft px-6">
      <div className="w-full max-w-md bg-white border-2 border-black rounded-2xl p-8 shadow-lg">

        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-black">Verify OTP</h1>
          <p className="text-sm text-gray-700 mt-2">
            Enter the 6-digit OTP sent to your email
          </p>
        </div>

        {/* OTP Inputs */}
        <div className="flex justify-center gap-3 mt-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              autoFocus={index === 0}
              ref={(el) => {
                if (el) inputsRef.current[index] = el
              }}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="
                w-12 h-12 text-center text-xl font-semibold
                border-2 border-black rounded-lg
                focus:outline-none focus:ring-2 focus:ring-brand
              "
            />
          ))}
        </div>
        <button
          onClick={handleVerify}
          className="
            w-full mt-8 py-3 rounded-xl
            bg-brand border-2 border-black
            font-semibold text-black
            hover:bg-[#4fb3b6] transition
          "
        >
          Verify OTP
        </button>
        <p className="text-center text-sm text-gray-600 mt-6">
          Didn’t receive the code? Try again in a few seconds.
        </p>
      </div>
    </div>
  )
}
