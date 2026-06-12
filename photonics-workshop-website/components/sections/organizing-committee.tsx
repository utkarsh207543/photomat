'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const chiefPatrons = [
  {
    name: 'Dr. B. H. V. S. Narayana Murthy',
    title: 'Vice Chancellor, DIAT Pune',
    image: '/images/patrons/murthy.jpg',
  },
  {
    name: 'Dr. Jagannath Nayak',
    title: 'Director, CHESS Hyderabad',
    image: '/images/patrons/nayak.jpg',
  },
]

const committee = [
  'Prof. Tejashree Bhave (HoD & Professor)',
  'Prof. Sangeeta Kale (Senior Professor)',
  'Prof. Suwarna Datar (Professor)',
  'Dr. Devnath Dhirhe (Associate Professor)',
  'Dr. Shyamal Mondal (Assistant Professor)',
  'Dr. A. V. R Murthy (Assistant Professor)',
  'Dr. Pooja Agarwal (Assistant Professor)',
]

export default function OrganizingCommittee() {
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
            Organizing Committee
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Led by distinguished faculty and research leaders
          </p>
        </motion.div>

        {/* Chief Patrons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-bold text-foreground">Chief Patrons</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {chiefPatrons.map((patron, index) => (
              <div
                key={index}
                className="p-6 bg-card border border-border rounded-lg hover:border-primary hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row gap-6 items-center text-center sm:text-left"
              >
                <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border border-primary/20 bg-muted">
                  <Image
                    src={patron.image}
                    alt={patron.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <p className="font-semibold text-lg text-foreground">
                    {patron.name}
                  </p>
                  <p className="text-sm text-primary font-medium mt-1">
                    {patron.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Committee Members */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 p-8 bg-card border border-border rounded-lg"
        >
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Committee Members
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {committee.map((member, index) => (
              <div key={index} className="flex gap-3">
                <span className="text-primary font-bold flex-shrink-0">•</span>
                <p className="text-muted-foreground">{member}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
