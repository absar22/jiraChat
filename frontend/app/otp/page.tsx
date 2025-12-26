'use client'

import { useRef, useState } from 'react'
import { toast } from 'sonner'
import { Shield, Mail, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function OtpPage() {
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const inputsRef = useRef<HTMLInputElement[]>([])

  function handleChange(value: string, index: number) {
    // Allow only numbers
    if (isNaN(Number(value))) return

    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    // Move to next input automatically
    if (value && index < 5) {
      inputsRef.current[index + 1].focus()
    }
  }

  function handleKeyDown(e: React.KeyboardEvent, index: number) {
    // Handle backspace
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus()
    }
  }

  function handlePaste(e: React.ClipboardEvent) {
    e.preventDefault()
    const pastedData = e.clipboardData.getData('text').slice(0, 6)
    if (/^\d+$/.test(pastedData)) {
      const newOtp = [...otp]
      pastedData.split('').forEach((char, i) => {
        if (i < 6) newOtp[i] = char
      })
      setOtp(newOtp)
      // Focus the last filled input or the next empty one
      const nextIndex = Math.min(pastedData.length, 5)
      inputsRef.current[nextIndex]?.focus()
    }
  }

  function handleVerify() {
    const enteredOtp = otp.join('')

    if (enteredOtp.length < 6) {
      toast.error('Please enter complete OTP')
      return
    }

    console.log('OTP:', enteredOtp)
    toast.success('OTP Verified (demo)')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 px-4 py-12 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Card */}
      <div className="w-full max-w-md rounded-2xl bg-white/70 backdrop-blur-xl shadow-2xl border border-white/10 dark:bg-slate-900/70 dark:border-white/10 p-8 relative z-10">
        
        {/* Back button */}
        <Link 
          href="/signUp/user" 
          className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors mb-6 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to Sign Up</span>
        </Link>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-100 dark:bg-indigo-900/30 mb-4">
            <Shield className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
          </div>
          <h1 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">
            Verify Your Account
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Enter the 6-digit OTP sent to your email
          </p>
        </div>

        {/* OTP Input */}
        <div className="mb-8">
          <div className="flex gap-3 justify-center" onPaste={handlePaste}>
            {otp.map((digit, index) => (
              <input
                key={index}
                autoFocus={index === 0}
                ref={(el) => {
                  if (el) inputsRef.current[index] = el
                }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-14 h-14 text-center text-2xl font-bold border-2 border-slate-300 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-indigo-500 dark:focus:border-indigo-400 transition-all hover:border-indigo-400 dark:hover:border-indigo-500"
              />
            ))}
          </div>
        </div>

        {/* Verify Button */}
        <button
          onClick={handleVerify}
          className="w-full rounded-lg bg-indigo-600 dark:bg-indigo-500 text-white py-3 font-semibold hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-all shadow-lg shadow-indigo-500/30 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transform hover:scale-[1.02] active:scale-[0.98]"
        >
          Verify OTP
        </button>

        {/* Resend OTP */}
        <div className="mt-6 text-center">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Didn't receive the code?{' '}
            <button className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline transition-colors">
              Resend OTP
            </button>
          </p>
        </div>

        {/* Info */}
        <div className="mt-6 p-4 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 flex items-start gap-3">
          <Mail className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mt-0.5 shrink-0" />
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Check your email inbox (and spam folder) for the verification code. The code expires in 10 minutes.
          </p>
        </div>
      </div>
    </div>
  )
}
