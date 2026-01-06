'use client'

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Button from "./Button"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = ["Dashboard", "Chat"]

  return (
    <header className="sticky top-0 z-50 bg-[#f7f3f1] border-b-2 border-black shadow-sm">
      <nav className="max-w-7xl mx-auto px-6">
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-xl border-2 border-black bg-[#5dbfc1] flex items-center justify-center font-bold text-black text-lg">
              J
            </div>
            <span className="text-xl font-bold text-black">JiraChat</span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-8 font-medium text-black">
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  href={`/${item.toLowerCase()}`}
                  className="relative group hover:text-[#5dbfc1] transition-colors"
                >
                  {item}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#5dbfc1] transition-all group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden md:flex gap-3">
            <Link href="/signin/user">
              <Button variant="secondary">Login</Button>
            </Link>
            <Link href="/signUp/user">
              <Button>Sign Up</Button>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded-md border-2 border-black flex items-center justify-center text-black"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 border-t-2 border-black bg-white rounded-xl shadow-lg p-4 space-y-4">
            <ul className="flex flex-col gap-4 font-medium text-black">
              {navItems.map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 rounded-md hover:bg-[#5dbfc1] hover:text-white transition"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3 mt-2">
              <Link href="/signin/user">
                <Button variant="secondary" className="w-full">
                  Login
                </Button>
              </Link>
              <Link href="/signUp/user">
                <Button className="w-full">Sign Up</Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
