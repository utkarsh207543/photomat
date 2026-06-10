'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ExperimentsSection() {
  const experiments = [
    {
      id: 1,
      title: 'Fiber Optic Splicer',
      description: 'Advanced fiber optic splicing technology demonstrating high-precision light transmission and beam generation in optical communications.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/splicer-kWRA2c3MWjQroNXPeGXXU74xyColRx.png',
    },
    {
      id: 2,
      title: 'Underwater Communication',
      description: 'Cutting-edge underwater optical communication systems enabling reliable data transmission through water using advanced fiber optics.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/underwater%20link-SYZRAHDxcaXVuxZuROZcQr38lWl73v.png',
    },
  ]

  return (
    <section className="py-20 px-6 md:px-8 bg-background border-b border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Research Experiments
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing cutting-edge photonics and optical communication technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {experiments.map((experiment, index) => (
            <motion.div
              key={experiment.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-card border border-border"
            >
              {/* Image Container */}
              <div className="relative h-64 md:h-72 overflow-hidden bg-muted">
                <Image
                  src={experiment.image}
                  alt={experiment.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-foreground">
                  {experiment.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {experiment.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
