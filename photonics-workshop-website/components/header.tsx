'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#speakers', label: 'Speakers' },
    { href: '#schedule', label: 'Activities' },
    { href: '#registration', label: 'Registration' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0">
              <Image
                src="/images/photomat26-logo.png"
                alt="PHOTOMAT26"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-base md:text-lg font-bold text-foreground">PHOTOMAT 2026</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-foreground rounded-md hover:bg-primary/10 hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Desktop CTA */}
            <a
              href="https://docs.google.com/forms/d/1aEwOE7AfHuu5s3RPGEr_yLUqFdJy91GAj2YuBwH7gdw/edit"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block"
            >
              <button className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors duration-200">
                Register Now
              </button>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden pb-4 space-y-2 border-t border-border pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-sm font-medium text-foreground rounded-lg hover:bg-primary/10 hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://docs.google.com/forms/d/1aEwOE7AfHuu5s3RPGEr_yLUqFdJy91GAj2YuBwH7gdw/edit"
              target="_blank"
              rel="noopener noreferrer"
              className="block pt-2"
              onClick={() => setIsOpen(false)}
            >
              <button className="w-full inline-flex items-center justify-center px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors duration-200">
                Register Now
              </button>
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
