'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function AboutDiat() {
  return (
    <section id="about" className="py-20 px-6 md:px-8 bg-card border-b border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DIAT-D97QrzUGhIJrhCPO8zsrEOXTcseqXN.avif"
              alt="DIAT Campus"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                About DIAT
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Defence Institute of Advanced Technology (DIAT) is the premier engineering training institute under the Department of Defence Research & Development, Ministry of Defence, Government of India.
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">Specialized Training</h3>
                <p className="text-muted-foreground">
                  DIAT specializes in advanced training for officers of Defence Research Organizations, Defence PSUs, and armed forces.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">Expertise Areas</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Master's and PhD programs in specialized fields</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Research in advanced technologies</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Collaboration with national research organizations</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="https://www.diat.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-200"
              >
                Learn more about DIAT
                <span>→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
