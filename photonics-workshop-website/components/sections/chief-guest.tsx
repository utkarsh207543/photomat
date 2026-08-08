'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const chiefGuests = [
  {
    id: 2,
    name: 'Dr. Jagannath Nayak',
    title: 'Director General',
    institution: 'Missiles and Strategic Systems (DG MSS), DRDO',
    expertise: 'Directed Energy Weapon (DEW) Systems, Advanced Avionics',
    image: '/images/speakers/DrJNayak.jpeg',
  },
]

export default function ChiefGuests() {
  return (
    <section
      id="chief-guests"
      className="py-20 px-6 md:px-8 bg-card border-b border-border"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Chief Guests
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Distinguished guests and research leaders in photonics and optical materials
          </p>
        </motion.div>

        <div className="flex justify-center items-center">
          {chiefGuests.map((guest, index) => (
            <motion.div
              key={guest.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group bg-background border border-border rounded-lg overflow-hidden hover:border-primary hover:shadow-lg transition-all duration-300 w-full max-w-md mx-auto"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                <Image
                  src={guest.image}
                  alt={guest.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {guest.name}
                  </h3>

                  <p className="text-sm font-semibold text-primary">
                    {guest.title}
                  </p>
                </div>

                <p className="text-sm text-muted-foreground">
                  {guest.institution}
                </p>

                <div className="pt-3 border-t border-border">
                  <p className="text-xs font-semibold text-muted-foreground">
                    <span className="text-foreground">Expertise:</span>{' '}
                    {guest.expertise}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
