'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/a-propos', label: 'A propos' },
  { href: '/services', label: 'Services' },
  { href: '/location-rdt', label: 'Location de RDT' },
  { href: '/realisations', label: 'Realisations' },
  { href: '/carriere', label: 'Carriere' },
  { href: '/faq', label: 'FAQ' },
  { href: '/nous-joindre', label: 'Nous joindre' },
]

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white/80 backdrop-blur-xl sticky top-0 z-50 border-b border-gray-100/80">
      <nav className="container-custom mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="ReVolt Electrique Inc."
              width={240}
              height={80}
              className="h-16 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-revolt-dark/80 hover:text-revolt-red transition-colors duration-200 font-semibold text-[15px]"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://portail.revoltelectrique.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-revolt-dark text-white px-5 py-2.5 rounded-xl hover:bg-revolt-red transition-all duration-300 font-bold text-sm flex items-center gap-2 active:scale-[0.98]"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Espace client
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-revolt-dark p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-6 border-t border-gray-100 mt-2 pt-4">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-revolt-dark hover:text-revolt-red hover:bg-gray-50 transition-all duration-200 font-semibold py-3 px-4 rounded-xl"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://portail.revoltelectrique.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-revolt-dark text-white px-5 py-3 rounded-xl hover:bg-revolt-red transition-all duration-300 font-bold flex items-center gap-2 w-fit mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Espace client
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
