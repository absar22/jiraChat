'use client'

import { useRef, useState } from 'react'
import { toast } from 'sonner'


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
    //  backspace
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus()
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
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-4xl font-bold">Verify OTP</h1>
      <p className="text-slate-500 text-center">
        Enter the 6 digit OTP sent to your mobile number
      </p>

            <div className="flex gap-3 mt-4">
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
            className="w-12 h-12 text-center text-xl border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        ))}
      </div>

      <button
        onClick={handleVerify}
        className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md"
      >
        Verify
      </button>
    </div>
  )
}
