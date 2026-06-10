'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const activities = [
  {
    day: 'Day 1',
    title: 'Photonics',
    date: 'October 7',
    description: 'Exploring the fundamentals and advanced applications of fiber optics and laser technologies',
    topics: [
      'CW fiber lasers',
      'Ultrafast fiber lasers',
      'Fiber sensors and communications',
      'Industrial applications of fiber lasers',
    ],
    format: 'Expert talks & Laboratory sessions',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    day: 'Day 2',
    title: 'Optical Communication & Underwater Testing',
    date: 'October 8',
    description: 'Advancing communication technologies through free-space and underwater optical systems',
    topics: [
      'Free-space optical communication',
      'Underwater optical communication',
      'Acoustic communication systems',
      'State-of-the-art protocols',
    ],
    format: 'Lectures & Hands-on demonstrations',
    color: 'from-purple-500 to-pink-500',
  },
  {
    day: 'Day 3',
    title: 'Optical Materials',
    date: 'October 9',
    description: 'Discovering advanced materials and their applications in modern photonic devices',
    topics: [
      'Photodetectors and LEDs',
      'Optical sensors',
      'Metamaterials',
      'Advanced optical materials',
    ],
    format: 'Concluding with valedictory session',
    color: 'from-orange-500 to-red-500',
  },
]

export default function WorkshopActivities() {
  return (
    <section id="schedule" className="py-20 px-6 md:px-8 bg-card border-b border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Workshop Activities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three days of intensive learning, collaboration, and hands-on experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              {/* Day Badge */}
              <div className={`mb-4 inline-block px-4 py-2 rounded-full text-white font-semibold text-sm bg-gradient-to-r ${activity.color}`}>
                {activity.day} • {activity.date}
              </div>

              {/* Card */}
              <div className="bg-background border-2 border-border rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all duration-300 h-full">
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {activity.title}
                </h3>

                <p className="text-muted-foreground mb-6">
                  {activity.description}
                </p>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 text-sm">Topics Covered:</h4>
                    <ul className="space-y-2">
                      {activity.topics.map((topic, idx) => (
                        <li key={idx} className="flex gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm font-semibold text-primary">
                    {activity.format}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline Note */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 p-6 bg-primary/5 border border-primary/20 rounded-lg text-center"
        >
          <p className="text-muted-foreground">
            <span className="font-semibold text-foreground">Full Schedule Coming Soon</span> — Detailed timetables with speaker sessions and laboratory timings will be available after registration opens.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
