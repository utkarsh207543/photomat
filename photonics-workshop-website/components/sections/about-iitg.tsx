'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function AboutIITG() {
  return (
    <section className="py-20 px-6 md:px-8 bg-card border-b border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                IITG-TIDF
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Technology Innovation Hub (TIH), IIT Guwahati Technology Innovation and Development Foundation (TIDF) is an independent Section-8 company operating under the National Mission on Interdisciplinary Cyber Physical Systems.
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">Government Mandate</h3>
                <p className="text-muted-foreground">
                  Operating under the Department of Science & Technology, Government of India, TIDF focuses on innovation and development.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">Key Initiatives</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Fostering interdisciplinary research and development</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Supporting cyber-physical systems innovation</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Building India's innovation ecosystem</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="https://iitg.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all duration-200"
              >
                Visit IIT Guwahati
                <span>→</span>
              </a>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IITG-O1uYxbK4Km7OREEEY4VTy9IpAMzETz.png"
              alt="IITG Campus"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
