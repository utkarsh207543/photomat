'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function SensorsResearchSociety() {
  return (
    <section id="srs" className="py-20 px-6 md:px-8 bg-background border-b border-border">
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
                Sensors Research Society (SRS)
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Formed as a follow-up to the landmark conference on &quot;Advances in Sensors for Aerospace Applications, Sensors 2007&quot; held at Research Centre Imarat in December 2007.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-muted-foreground">
                The society was established to synergise and accelerate the research and development of various sensors, driving the nation towards self-reliance in this critical technological domain.
              </p>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">Aims & Initiatives</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Promote and foster advanced sensor development</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Encourage widespread dissemination of technical information</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Organize seminars, publications, and audio-visual presentations</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Facilitate collaborative research and specialized training courses</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Images Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-1 md:order-2 pb-6 pr-6"
          >
            {/* Main Group Photo Container */}
            <div className="relative h-[300px] sm:h-[350px] md:h-[380px] w-full rounded-xl overflow-hidden shadow-2xl border border-border bg-muted">
              <Image
                src="/images/srs-group.jpg"
                alt="Sensors Research Society Group Photo"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>

            {/* Logo Badge Overlay */}
            <div className="absolute -bottom-4 -left-4 w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-background bg-white shadow-2xl flex items-center justify-center p-2 overflow-hidden z-10">
              <div className="relative w-full h-full">
                <Image
                  src="/images/srs-logo.jpg"
                  alt="SRS Logo"
                  fill
                  className="object-contain rounded-full"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
