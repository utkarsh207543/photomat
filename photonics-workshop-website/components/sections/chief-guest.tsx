'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const chiefGuests = [
  {
    id: 2,
    role: 'Chief Guest',
    name: 'Dr. Jagannath Nayak',
    title: 'Director General',
    institution: 'Missiles and Strategic Systems (DG MSS), DRDO',
    expertise: 'Directed Energy Weapon (DEW) Systems, Advanced Avionics',
    image: '/images/speakers/DrJNayak.jpeg',
  },
  {
    id: 3,
    role: 'Guest of Honour',
    name: 'Dr. Gaurav Singhal',
    title: 'Scientist-G & Director, CHESS',
    institution: 'DRDO-CHESS, Hyderabad, India',
    expertise: 'High power lasers, high speed unsteady flows, turbulent mixing, laser diagnostics, CFD techniques',
    image: '/images/speakers/DrGauravSinghal.jpeg',
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
            Chief Guest &amp; Guest of Honour
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Distinguished guests and research leaders in photonics and optical materials
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {chiefGuests.map((guest, index) => (
            <motion.div
              key={guest.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group bg-background border border-border rounded-lg overflow-hidden hover:border-primary hover:shadow-lg transition-all duration-300 w-full"
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
                  <p className="text-sm font-semibold text-primary uppercase tracking-wide">
                    {guest.role}
                  </p>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mt-1">
                    {guest.name}
                  </h3>

                  <p className="text-sm font-semibold text-primary">
                    {guest.title}
                  </p>
                </div>

                <p className="text-sm text-muted-foreground">
                  {guest.institution}
                </p>

                {guest.bio && (
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {guest.bio}
                  </p>
                )}

                <div className="pt-3 border-t border-border">
                  <p className="text-xs font-semibold text-muted-foreground leading-relaxed">
                    <span className="text-foreground">Research Interests:</span>{' '}
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
