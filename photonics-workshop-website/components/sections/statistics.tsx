'use client'

import { useEffect, useState } from 'react'

export default function StatisticsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const stats = [
    {
      number: '50',
      label: 'Limited Participants',
      description: 'Exclusive workshop experience'
    },
    {
      number: '7+',
      label: 'Distinguished Speakers',
      description: 'Global research leaders'
    },
    {
      number: '6',
      label: 'Research Fields',
      description: 'Cutting-edge photonics topics'
    },
    {
      number: '3',
      label: 'Days Workshop',
      description: 'October 7-9, 2026'
    }
  ]

  return (
    <section id="statistics" className="py-16 md:py-24 bg-gradient-to-r from-primary/5 to-accent/5 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`text-center space-y-2 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-primary">{stat.number}</div>
              <div className="text-lg md:text-xl font-semibold text-foreground">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
