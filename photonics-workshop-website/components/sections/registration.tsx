'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const categories = [
  {
    category: 'UG/PG/PhD Scholars',
    fee: '₹2,360',
    color: 'from-blue-500 to-cyan-500',
    description: 'Undergraduate, postgraduate, and doctoral students',
  },
  {
    category: 'DIAT-AP Students',
    fee: '₹1,180',
    color: 'from-green-500 to-emerald-500',
    description: 'DIAT affiliated program students',
  },
  {
    category: 'Academia/Faculty',
    fee: '₹3,540',
    color: 'from-purple-500 to-pink-500',
    description: 'University faculty and researchers',
  },
  {
    category: 'Industry Professionals',
    fee: '₹4,700',
    color: 'from-orange-500 to-red-500',
    description: 'Industry experts and professionals',
  },
]

const includes = [
  'Workshop kit with materials',
  'Lunch and refreshments',
  'Certificate of participation',
  'Access to all sessions',
  'Hands-on laboratory experience',
  'Networking opportunities',
]

export default function Registration() {
  return (
    <section id="registration" className="py-20 px-6 md:px-8 bg-card border-b border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-red-100 border border-red-300 mb-4">
            <p className="text-sm font-semibold text-red-700">Only 50 Seats Available</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Registration Fees
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Affordable participation for all academics and professionals
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categories.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Gradient Border */}
              <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg p-0.5`}>
                <div className="inset-0 bg-background rounded-lg" />
              </div>

              {/* Card Content */}
              <div className="relative bg-background border border-border rounded-lg p-6 hover:border-primary transition-all duration-300 h-full">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                      {item.category}
                    </p>
                    <p className="text-3xl font-bold text-foreground mt-2">
                      {item.fee}
                    </p>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>

                  <div className="pt-4">
                    <a
                      href="https://forms.gle/rZN8bn5nfXNauseh7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full text-center px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-all duration-200"
                    >
                      Register Now
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* What's Included */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-background border-2 border-primary/20 rounded-lg p-8"
        >
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Registration Fee Includes
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {includes.map((item, index) => (
              <div key={index} className="flex gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <p className="text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Registration Link */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 p-8 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-lg text-center"
        >
          <h3 className="text-2xl font-bold text-foreground mb-3">Ready to Join?</h3>
          <p className="text-muted-foreground mb-6">
            Registration closes on <span className="font-semibold text-foreground">September 10, 2026</span>
          </p>
          <a
            href="https://forms.gle/rZN8bn5nfXNauseh7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-200 hover:scale-105"
          >
            Complete Your Registration
          </a>
        </motion.div>
      </div>
    </section>
  )
}
