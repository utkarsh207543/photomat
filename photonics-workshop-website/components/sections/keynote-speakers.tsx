'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const speakers = [
  {
    id: 1,
    name: 'Prof. Pavel Peterka',
    title: 'Director, UFE',
    institution: 'Institute of Photonics and Electronics, Czech Academy of Sciences',
    expertise: 'Fiber Optics, Photonics',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pavel%20Peterka-9lUGAGLQGwcF3bBQIKWwjSDHebaoRq.jpg',
  },
  {
    id: 2,
    name: 'Prof. Satishchandra B. Ogale',
    title: 'Director, RISE',
    institution: 'TCG-CREST, Kolkata',
    expertise: 'Materials Science, Energy',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Satischandra%20B.%20Ogale-FEgVjJxcMl9GUursYjl0y3hYnt2M7h.jpg',
  },
  {
    id: 3,
    name: 'Prof. Rakesh R. Warrier',
    title: 'Assistant Professor',
    institution: 'Electrical Engineering, NIT Calicut',
    expertise: 'Optical Engineering',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rakesh%20warrier-vlrwjWNIifHCZD2bQ7wCpwmHqAeYbn.jpg',
  },
  {
    id: 4,
    name: 'Dr. Deepa Venkitesh',
    title: 'Professor',
    institution: 'Electrical Engineering, IIT Madras',
    expertise: 'Optoelectronics, Materials',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dr%20Deepa%20Venkitesh-2KUYrKf7kKAMmNaOGT82OQITFH55GQ.jpg',
  },
  {
    id: 5,
    name: 'Dr. P. K. Mukhopadhyay',
    title: 'Scientific Officer H',
    institution: 'RRCAT, Indore',
    expertise: 'Advanced Research',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dr%20p%20k%20mukhopadhyay-CF8QSkUSu8w4VeoFbNVWwZQ8789d40.jpg',
  },
  {
    id: 6,
    name: 'Dr. Aditya Dharmadhikari',
    title: 'Scientific Officer G',
    institution: 'Nuclear and Atomic Physics, TIFR Mumbai',
    expertise: 'Photonics, Physics',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Aditya%20Dharmadhikari-H4hS3m816OQieqmPWRqSLwYWgIDXdy.jpg',
  },
  {
    id: 7,
    name: 'Prof. Shailendra K. Varshney',
    title: 'Professor',
    institution: 'Department of Electronics & ECE, IIT Kharagpur',
    expertise: 'Optics, Photonics, Optical Communication',
    image: '/images/speakers/shailendra-varshney.jpg',
  },
]

export default function KeynoteSpeakers() {
  return (
    <section id="speakers" className="py-20 px-6 md:px-8 bg-card border-b border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Keynote Speakers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn from world-renowned experts and research leaders in photonics and optical materials
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: (index % 3) * 0.15 }}
              viewport={{ once: true }}
              className="group bg-background border border-border rounded-lg overflow-hidden hover:border-primary hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {speaker.name}
                  </h3>
                  <p className="text-sm font-semibold text-primary">
                    {speaker.title}
                  </p>
                </div>

                <p className="text-sm text-muted-foreground">
                  {speaker.institution}
                </p>

                <div className="pt-3 border-t border-border">
                  <p className="text-xs font-semibold text-muted-foreground">
                    <span className="text-foreground">Expertise:</span> {speaker.expertise}
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
