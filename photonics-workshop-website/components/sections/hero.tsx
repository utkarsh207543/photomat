'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Download, Calendar, MapPin } from 'lucide-react'

export default function HeroSection() {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)

  const downloadICS = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//PHOTOMAT2026//EN',
      'BEGIN:VEVENT',
      'UID:photomat2026-event',
      'DTSTAMP:20260612T000000Z',
      'DTSTART;VALUE=DATE:20261007',
      'DTEND;VALUE=DATE:20261010',
      'SUMMARY:International Workshop on Photonics and Optical Materials (PHOTOMAT 2026)',
      'DESCRIPTION:International Workshop on Photonics and Optical Materials (PHOTOMAT 2026)',
      'LOCATION:Defence Institute of Advanced Technology (DIAT), Pune, India',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n')

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', 'PHOTOMAT-2026-Workshop.ics')
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20 px-6 md:px-8">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl"
          animate={{
            y: [0, 50, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl"
          animate={{
            y: [0, -50, 0],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center space-y-8 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo and Badge */}
        <motion.div variants={itemVariants} className="space-y-4">
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <Image
                src="/images/photomat26-logo.png"
                alt="PHOTOMAT26"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
            <p className="text-sm font-medium text-primary">International Workshop 2026</p>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.div variants={itemVariants} className="space-y-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground">
            Photonics &amp; Optical Materials
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A premier international workshop advancing research in optical science, photonic materials, and innovative technologies
          </p>
        </motion.div>

        {/* Event Details Cards */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto py-6"
        >
          {/* Card 1: Calendar */}
          <div className="relative">
            <button
              onClick={() => setIsCalendarOpen(!isCalendarOpen)}
              className="w-full flex items-start gap-4 p-5 rounded-xl border border-border bg-white/40 backdrop-blur-md hover:bg-white/80 hover:border-primary/30 hover:shadow-lg transition-all duration-300 text-left cursor-pointer focus:outline-none"
            >
              <div className="flex-shrink-0 p-3 rounded-lg bg-primary/10 text-primary">
                <Calendar className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <p className="font-bold text-foreground text-lg">October 7–9, 2026</p>
                <p className="text-sm text-muted-foreground leading-snug">3 Days of Innovation and networking</p>
                <p className="text-xs text-primary font-semibold pt-1">📅 Add to Calendar</p>
              </div>
            </button>

            {isCalendarOpen && (
              <div className="absolute top-full left-0 mt-2 w-full bg-white dark:bg-card border border-border rounded-xl shadow-xl z-20 overflow-hidden divide-y divide-border">
                <a
                  href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=International+Workshop+on+Photonics+and+Optical+Materials+(PHOTOMAT+2026)&dates=20261007/20261010&details=International+Workshop+on+Photonics+and+Optical+Materials+(PHOTOMAT+2026)&location=Defence+Institute+of+Advanced+Technology+(DIAT),+Pune,+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsCalendarOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-sm text-foreground hover:bg-primary/10 transition-colors"
                >
                  <span className="text-base">📅</span> Google Calendar
                </a>
                <a
                  href="https://outlook.live.com/calendar/0/deeplink/compose?path=/calendar/action/compose&rru=addevent&subject=International+Workshop+on+Photonics+and+Optical+Materials+(PHOTOMAT+2026)&startdt=2026-10-07&enddt=2026-10-10&body=International+Workshop+on+Photonics+and+Optical+Materials+(PHOTOMAT+2026)&location=Defence+Institute+of+Advanced+Technology+(DIAT),+Pune,+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsCalendarOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-sm text-foreground hover:bg-primary/10 transition-colors"
                >
                  <span className="text-base">✉️</span> Outlook Calendar
                </a>
                <button
                  onClick={() => {
                    downloadICS()
                    setIsCalendarOpen(false)
                  }}
                  className="w-full flex items-center gap-3 px-4 py-3 text-sm text-foreground hover:bg-primary/10 transition-colors text-left"
                >
                  <span className="text-base">💻</span> Apple Calendar (.ics)
                </button>
              </div>
            )}
          </div>

          {/* Card 2: Venue */}
          <a
            href="https://maps.app.goo.gl/JbDLfz3uYkfhxRoZ6"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 p-5 rounded-xl border border-border bg-white/40 backdrop-blur-md hover:bg-white/80 hover:border-primary/30 hover:shadow-lg transition-all duration-300 text-left cursor-pointer"
          >
            <div className="flex-shrink-0 p-3 rounded-lg bg-primary/10 text-primary">
              <MapPin className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <p className="font-bold text-foreground text-base leading-snug">Defence Institute of Advanced Technology (DIAT)</p>
              <p className="text-sm text-muted-foreground leading-normal">Pune, Maharashtra, India</p>
              <p className="text-xs text-primary font-semibold pt-1">📍 Open Google Maps</p>
            </div>
          </a>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
        >
          <a
            href="https://docs.google.com/forms/d/1aEwOE7AfHuu5s3RPGEr_yLUqFdJy91GAj2YuBwH7gdw/edit"
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-fit"
          >
            <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-200 hover:shadow-lg hover:scale-105 w-full sm:w-auto">
              Register Now
              <ArrowRight className="w-5 h-5" />
            </button>
          </a>
          <a
            href="/brochure/PHOTOMAT-2026.pdf"
            download="PHOTOMAT-2026.pdf"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary/10 transition-all duration-200"
          >
            Download Brochure
            <Download className="w-5 h-5" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
