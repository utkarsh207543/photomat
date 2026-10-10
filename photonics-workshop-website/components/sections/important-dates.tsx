'use client'

import { motion } from 'framer-motion'

export default function ImportantDates() {
  return (
    <section className="py-16 px-6 md:px-8 bg-card border-b border-border">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          See you next year..
        </h2>
      </motion.div>
    </section>
  )
}
