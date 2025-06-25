"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/placeholder.svg?height=40&width=40"
            alt="MediScan Logo"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
          <span className="text-xl font-bold text-teal-600">MediScan</span>
        </Link>

        {/* Mobile menu button */}
        <button className="block md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
          <Menu className="h-6 w-6" />
        </button>

        {/* Desktop menu */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <Link href="/" className="text-gray-700 hover:text-teal-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/centers" className="text-gray-700 hover:text-teal-600">
                Diagnostic Centers
              </Link>
            </li>
           
            <li>
              <Link href="/about" className="text-gray-700 hover:text-teal-600">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-700 hover:text-teal-600">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden">
            <ul className="flex flex-col p-4">
              <li className="py-2">
                <Link href="/" className="block text-gray-700 hover:text-teal-600" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li className="py-2">
                <Link href="/centers" className="block text-gray-700 hover:text-teal-600" onClick={toggleMenu}>
                  Diagnostic Centers
                </Link>
              </li>
              <li className="py-2">
                <Link href="#services" className="block text-gray-700 hover:text-teal-600" onClick={toggleMenu}>
                  Services
                </Link>
              </li>
              <li className="py-2">
                <Link href="#about" className="block text-gray-700 hover:text-teal-600" onClick={toggleMenu}>
                  About Us
                </Link>
              </li>
              <li className="py-2">
                <Link href="#contact" className="block text-gray-700 hover:text-teal-600" onClick={toggleMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}
