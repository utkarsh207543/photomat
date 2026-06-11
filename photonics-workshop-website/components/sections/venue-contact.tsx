'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail } from 'lucide-react'

const coordinators = [
  {
    name: 'Naveen Kumar',
    phone: '+91 7428964562',
    role: 'Coordinator',
  },
  {
    name: 'Dhanush Devappa',
    phone: '+91 7259319442',
    role: 'Coordinator',
  },
  {
    name: 'Abhinav C.',
    phone: '+91 7025002744',
    role: 'Coordinator',
  },
]

const convenors = [
  {
    name: 'Dr. Shyamal Mondal',
    phone: '+91 6289100852',
    role: 'Convenor',
  },
  {
    name: 'Dr. A. V. R Murthy',
    phone: '+91 9049407613',
    role: 'Convenor',
  },
]

export default function VenueContact() {
  return (
    <section id="contact" className="py-20 px-6 md:px-8 bg-card border-b border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Venue & Contact
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get in touch with us for more information
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Venue Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-foreground">Workshop Venue</h3>

            {/* Venue Card */}
            <div className="p-6 bg-background border-2 border-primary/20 rounded-lg">
              <div className="flex gap-4 mb-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground text-lg mb-2">
                    Defence Institute of Advanced Technology
                  </h4>
                  <p className="text-muted-foreground">
                    Department of Applied Physics
                  </p>
                  <p className="text-muted-foreground mt-1">
                    CQF5+7QF, Gorhe BK
                  </p>
                  <p className="text-muted-foreground">
                    Girinagar, Pune – 411025
                  </p>
                  <p className="text-muted-foreground">
                    Maharashtra, India
                  </p>
                </div>
              </div>
            </div>

            {/* Accommodation */}
            <div className="p-6 bg-primary/5 border border-primary/20 rounded-lg">
              <h4 className="font-semibold text-foreground mb-2">Accommodation</h4>
              <p className="text-muted-foreground">
                No accommodation will be provided. No separate Travel Allowance (TA) or Daily Allowance (DA) will be provided.
              </p>
            </div>

            {/* Map */}
            <div className="relative h-80 rounded-lg overflow-hidden border border-border shadow-lg">
              <iframe
                src="https://maps.google.com/maps?q=18.423414502093404,73.75942873260523&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Email */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Get in Touch</h3>
              <div className="p-6 bg-background border-2 border-primary/20 rounded-lg">
                <div className="flex gap-4">
                  <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <a
                      href="mailto:opticastudentchapter@diat.ac.in"
                      className="text-primary hover:underline"
                    >
                      opticastudentchapter@diat.ac.in
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Coordinators */}
            <div>
              <h4 className="text-lg font-bold text-foreground mb-3">Coordinators</h4>
              <div className="space-y-3">
                {coordinators.map((coord, index) => (
                  <div
                    key={index}
                    className="p-4 bg-background border border-border rounded-lg hover:border-primary transition-all duration-300"
                  >
                    <p className="font-semibold text-foreground">{coord.name}</p>
                    <p className="text-sm text-muted-foreground">{coord.role}</p>
                    <a
                      href={`tel:${coord.phone}`}
                      className="text-sm text-primary font-medium hover:underline"
                    >
                      {coord.phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Convenors */}
            <div>
              <h4 className="text-lg font-bold text-foreground mb-3">Convenors</h4>
              <div className="space-y-3">
                {convenors.map((convenor, index) => (
                  <div
                    key={index}
                    className="p-4 bg-background border border-border rounded-lg hover:border-primary transition-all duration-300"
                  >
                    <p className="font-semibold text-foreground">{convenor.name}</p>
                    <p className="text-sm text-muted-foreground">{convenor.role}</p>
                    <a
                      href={`tel:${convenor.phone}`}
                      className="text-sm text-primary font-medium hover:underline"
                    >
                      {convenor.phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
