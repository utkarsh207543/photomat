'use client'

import { motion } from 'framer-motion'
import { Lightbulb, Zap, Microscope, Radio, Beaker, Eye } from 'lucide-react'

const topics = [
  {
    icon: Zap,
    title: 'Quantum Dots',
    description: 'Green synthesis of quantum dots via laser ablation',
  },
  {
    icon: Microscope,
    title: 'LED Characterization',
    description: 'Advanced optoelectronic characterization of LEDs',
  },
  {
    icon: Radio,
    title: 'Biomedical Sensing',
    description: 'Non-invasive optoelectronic gadget for hemoglobin estimation',
  },
  {
    icon: Beaker,
    title: 'Optical Films',
    description: 'Pulsed laser deposition for functional optical films',
  },
  {
    icon: Eye,
    title: 'Fiber Lasers',
    description: 'Fiber lasers: CW to ultrafast regime',
  },
  {
    icon: Lightbulb,
    title: 'Fiber Sensing',
    description: 'Ultra-precise sensing using fiber optics',
  },
]

const additionalTopics = [
  'Underwater wireless optical communication (UWOC)',
  'Halide perovskite synthesis and flexible photodetectors',
  'Laser modulation assisted QEPAS gas sensing',
  'Underwater object detection and tracking',
]

export default function KeyTopics() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-20 px-6 md:px-8 bg-card border-b border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Key Research Topics
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore cutting-edge research areas at the forefront of photonics and optical materials
          </p>
        </motion.div>

        {/* Main Topics Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {topics.map((topic, index) => {
            const Icon = topic.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group p-6 rounded-lg border border-border bg-card hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-4 transition-colors">
                  <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {topic.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {topic.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Additional Topics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-card rounded-lg p-8 border border-border"
        >
          <h3 className="text-2xl font-semibold text-foreground mb-6">
            Additional Focus Areas
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {additionalTopics.map((topic, index) => (
              <div key={index} className="flex gap-3">
                <span className="text-primary font-bold flex-shrink-0">•</span>
                <p className="text-muted-foreground">{topic}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
