'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function DiatOpticaChapter() {
  return (
    <section className="py-20 px-6 md:px-8 bg-card border-b border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            DIAT Optica Student Chapter
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connecting with the global optics and photonics community
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[350px] rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/diat%20optica%20student%20chapter-YlMYlT0o9zqNjwV4TBpRPxhnnHMVyW.png"
              alt="Student Chapter"
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
            <p className="text-lg text-muted-foreground leading-relaxed">
              The DIAT Optica Student Chapter is an outreach initiative founded by students with the goal of connecting with the global optics and photonics research community.
            </p>

            <div className="space-y-3">
              <h3 className="text-2xl font-semibold text-foreground">Our Mission</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-primary">✓</span>
                  <span className="text-muted-foreground">Promote awareness of optics and photonics</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">✓</span>
                  <span className="text-muted-foreground">Foster collaboration among researchers</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">✓</span>
                  <span className="text-muted-foreground">Enable knowledge exchange across institutions</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">✓</span>
                  <span className="text-muted-foreground">Engage students in cutting-edge research</span>
                </li>
              </ul>
            </div>

            <p className="text-muted-foreground">
              Serving as a bridge between DIAT and the wider community, we foster collaboration, knowledge exchange, and a shared passion for photonics.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
