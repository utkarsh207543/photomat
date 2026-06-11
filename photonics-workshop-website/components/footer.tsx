'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-16 h-16">
                <Image
                  src="/photomat/images/photomat26-logo.png"
                  alt="PHOTOMAT26"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-lg font-bold text-foreground">PHOTOMAT26</span>
            </div>
            <p className="text-sm text-muted-foreground">
              A premier international workshop on photonics materials and advanced optics research.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About DIAT</a></li>
              <li><a href="#speakers" className="text-muted-foreground hover:text-foreground transition-colors">Speakers</a></li>
              <li><a href="#schedule" className="text-muted-foreground hover:text-foreground transition-colors">Activities</a></li>
              <li><a href="https://docs.google.com/forms/d/1aEwOE7AfHuu5s3RPGEr_yLUqFdJy91GAj2YuBwH7gdw/edit" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">Register</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0 text-primary" />
                <a href="mailto:opticastudentchapter@diat.ac.in" className="text-muted-foreground hover:text-foreground transition-colors">opticastudentchapter@diat.ac.in</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-primary" />
                <a
                  href="https://maps.app.goo.gl/JbDLfz3uYkfhxRoZ6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Pune, Maharashtra, India
                </a>
              </li>
            </ul>
          </div>

          {/* Partners */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Sponsors</h4>
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center h-10">
                <Image
                  src="/photomat/images/optica-logo.png"
                  alt="OPTICA"
                  width={100}
                  height={40}
                  className="object-contain h-full"
                />
              </div>
              <div className="flex items-center h-10">
                <Image
                  src="/photomat/images/iitg-tidf-logo.webp"
                  alt="IITG TIDF"
                  width={120}
                  height={40}
                  className="object-contain h-full"
                />
              </div>
              <div className="flex items-center h-10">
                <Image
                  src="/photomat/images/diat-logo.png"
                  alt="DIAT"
                  width={120}
                  height={40}
                  className="object-contain h-full"
                />
              </div>
              <div className="flex items-center h-10">
                <Image
                  src="/photomat/images/drdo-logo.svg"
                  alt="DRDO"
                  width={120}
                  height={40}
                  className="object-contain h-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8 space-y-4">

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground pt-4">
            <p>&copy; 2026 PHOTOMAT26. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
