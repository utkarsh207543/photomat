'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'

export default function HeroSection() {
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
                src="/photomat/images/photomat26-logo.png"
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

        {/* Event Details */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-6 py-4">
          <div className="flex items-center gap-2 text-foreground">
            <span className="text-2xl">📅</span>
            <div>
              <p className="font-semibold">October 7-9, 2026</p>
              <p className="text-sm text-muted-foreground">3 Days of Innovation</p>
            </div>
          </div>
          <div className="h-12 w-px bg-border" />
          <div className="flex items-center gap-2 text-foreground">
            <span className="text-2xl">📍</span>
            <div>
              <p className="font-semibold">DIAT, Pune</p>
              <p className="text-sm text-muted-foreground">Defence Institute</p>
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
        >
          <Link href="#registration" className="min-w-fit">
            <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-200 hover:shadow-lg hover:scale-105">
              Register Now
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
          <a
            href="/photomat/brochure/PHOTOMAT-2026.pdf"
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
