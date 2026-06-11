'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function AboutAppliedPhysics() {
  return (
    <section id="applied-physics" className="py-20 px-6 md:px-8 bg-background border-b border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 order-2 md:order-1"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Department of Applied Physics
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Established originally as the Faculty of Applied Physics in 1952 and designated as a full department in 1979, the Department of Applied Physics at DIAT is a hub of advanced scientific education and defense-oriented research.
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">Academic Programmes</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>M.Tech. in Laser &amp; Electro-Optics</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>M.Tech. in Sensors Technology</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>M.Sc. in Applied Physics (Photonics)</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">Research Frontiers</h3>
                <p className="text-muted-foreground">
                  The department drives leading-edge research and Ph.D. programs in Nanotechnology, Lasers &amp; Photonics, Materials Science, Sensors Technology, and Renewable Energy.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="https://www.diatphys.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-200"
              >
                Visit Department Website
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
            className="relative h-[400px] rounded-lg overflow-hidden shadow-lg order-1 md:order-2"
          >
            <Image
              src="/photomat/images/diat-applied-physics.jpg"
              alt="DIAT Applied Physics Department"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
