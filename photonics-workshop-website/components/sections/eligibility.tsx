'use client'

import { motion } from 'framer-motion'
import { Users, GraduationCap, Briefcase } from 'lucide-react'

const eligibility = [
  {
    icon: GraduationCap,
    category: 'Students',
    description: 'Final-year undergraduate and postgraduate students',
    details: [
      'BSc/BE final year',
      'MSc/M.Tech students',
      'PhD scholars',
      'DIAT-AP students at special rates',
    ],
  },
  {
    icon: Users,
    category: 'Researchers',
    description: 'Project staff and research scholars in related fields',
    details: [
      'Physics',
      'Electronics & Electrical Engineering',
      'Instrumentation',
      'Quantum Technologies & Related Areas',
    ],
  },
  {
    icon: Briefcase,
    category: 'Faculty & Industry',
    description: 'Faculty members and industry professionals',
    details: [
      'University faculty',
      'Industry professionals',
      'Research scientists',
      'Technical experts',
    ],
  },
]

export default function Eligibility() {
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
            Who Can Apply?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            PHOTOMAT 2026 welcomes researchers, students, and professionals from diverse backgrounds
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {eligibility.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Card */}
                <div className="relative bg-card border border-border rounded-lg p-8 hover:border-primary transition-all duration-300 h-full">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {item.category}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {item.description}
                  </p>

                  {/* Details */}
                  <ul className="space-y-3">
                    {item.details.map((detail, idx) => (
                      <li key={idx} className="flex gap-3 text-sm">
                        <span className="text-primary font-bold flex-shrink-0">✓</span>
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Don&apos;t see your category? <span className="font-semibold text-foreground">Contact us</span> to discuss your eligibility.
          </p>
          <a href="#contact" className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-200">
            Get More Information
          </a>
        </motion.div>
      </div>
    </section>
  )
}
