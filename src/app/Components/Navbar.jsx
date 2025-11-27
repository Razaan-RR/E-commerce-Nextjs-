'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          ShopEase
        </Link>

        <div className="hidden md:flex items-center gap-4 font-medium">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link href="/products" className="hover:text-blue-600">
            All Products
          </Link>
          <Link href="/dashboard/addProducts" className="hover:text-blue-600">
            Add Products
          </Link>
          <Link href="/about" className="hover:text-blue-600">
            About Us
          </Link>

          <Link
            href="/auth/login"
            className="px-4 py-1 border border-blue-600 rounded-md hover:bg-blue-600 hover:text-white"
          >
            Login
          </Link>
          <Link
            href="/auth/register"
            className="px-4 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Register
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col gap-4 px-4 py-3">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <Link href="/products" className="hover:text-blue-600">
              Products
            </Link>
            <Link href="/about" className="hover:text-blue-600">
              About
            </Link>
            <Link href="/contact" className="hover:text-blue-600">
              Contact
            </Link>

            <Link
              href="/login"
              className="px-4 py-1 border border-blue-600 rounded-md"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="px-4 py-1 bg-blue-600 text-white rounded-md"
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
