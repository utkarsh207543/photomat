'use client'

import { motion } from 'framer-motion'
import { Calendar, AlertCircle } from 'lucide-react'

const dates = [
  {
    date: 'September 10, 2026',
    event: 'Registration Deadline',
    description: 'Last date to register for the workshop',
    priority: true,
    icon: '🔴',
  },
  {
    date: 'September 21, 2026',
    event: 'Selection Intimation',
    description: 'Shortlisted participants will be notified via email',
    priority: false,
    icon: '📧',
  },
  {
    date: 'October 7-9, 2026',
    event: 'Workshop Dates',
    description: 'Three days of intensive learning and collaboration',
    priority: false,
    icon: '📅',
  },
]

export default function ImportantDates() {
  return (
    <section className="py-20 px-6 md:px-8 bg-card border-b border-border">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Important Dates
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mark your calendar with these key dates
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-6">
          {dates.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline Line */}
              {index !== dates.length - 1 && (
                <div className="absolute left-8 top-24 w-0.5 h-16 bg-gradient-to-b from-primary to-transparent" />
              )}

              {/* Card */}
              <div className="flex gap-6">
                {/* Timeline Dot */}
                <div className="flex flex-col items-center gap-4">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl ${
                    item.priority
                      ? 'bg-red-500/20 text-red-600 border-2 border-red-500'
                      : 'bg-primary/20 text-primary border-2 border-primary'
                  }`}>
                    {item.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <div className={`p-6 rounded-lg border-2 transition-all duration-300 ${
                    item.priority
                      ? 'bg-red-500/5 border-red-500/30 hover:border-red-500 hover:shadow-lg'
                      : 'bg-card border-border hover:border-primary hover:shadow-lg'
                  }`}>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <p className={`text-sm font-semibold uppercase tracking-wider ${
                          item.priority ? 'text-red-600' : 'text-primary'
                        }`}>
                          {item.date}
                        </p>
                        <h3 className="text-2xl font-bold text-foreground mt-2">
                          {item.event}
                        </h3>
                        <p className="text-muted-foreground mt-2">
                          {item.description}
                        </p>
                      </div>
                      {item.priority && (
                        <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 p-6 bg-primary/5 border border-primary/20 rounded-lg"
        >
          <div className="flex gap-4">
            <Calendar className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-foreground mb-2">Note</h4>
              <p className="text-muted-foreground text-sm">
                Limited seats available. Early registration is recommended. Please note that no accommodation will be provided.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
