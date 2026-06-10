'use client'

import Image from 'next/image'

export default function InstitutionShowcase() {
  const institutions = [
    {
      image: '/images/diat-logo.png',
      title: 'Defence Institute of Advanced Technology',
      subtitle: 'Premier Defence Research University',
      alt: 'DIAT Campus'
    },
    {
      image: '/images/iitg-tidf-logo.webp',
      title: 'IITG-TIDF',
      subtitle: 'Technology Innovation Hub',
      alt: 'IITG TIDF'
    },
    {
      image: '/images/optica-logo.png',
      title: 'DIAT Optica Student Chapter',
      subtitle: 'Official Optica Student Chapter',
      alt: 'DIAT Optica Student Chapter'
    }
  ]

  return (
    <section id="institutions" className="py-20 md:py-28 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Our Partners</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Strategic collaborations with leading academic and research institutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {institutions.map((inst, idx) => (
            <div
              key={idx}
              className="group rounded-xl overflow-hidden border border-border hover:border-primary hover:shadow-lg transition-all duration-300 bg-card"
            >
              <div className="relative w-full h-64 overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                <Image
                  src={inst.image}
                  alt={inst.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-foreground text-center">{inst.title}</h3>
                <p className="text-sm text-muted-foreground text-center">{inst.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
