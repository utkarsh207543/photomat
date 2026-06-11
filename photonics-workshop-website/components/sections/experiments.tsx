'use client'

import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export default function ExperimentsSection() {
  const experiments = [
    {
      id: 1,
      title: 'OLED Devices',
      description: 'Advanced optoelectronic devices for next-generation displays and lighting systems.',
      image: '/photomat/images/experiments/oled.jpg',
      alt: 'OLED display technology experiment'
    },
    {
      id: 2,
      title: 'Quantum Dots',
      description: 'Laser-assisted synthesis and characterization of semiconductor quantum dots.',
      image: '/photomat/images/experiments/quantum-dots.jpg',
      alt: 'Quantum dots laser-assisted synthesis'
    },
    {
      id: 3,
      title: 'Pulsed Laser Deposition',
      description: 'Thin-film fabrication using high-energy pulsed laser deposition techniques.',
      image: '/photomat/images/experiments/pulsed-laser-deposition.png',
      alt: 'Thin-film PLD chamber setup'
    },
    {
      id: 4,
      title: 'Photodetectors',
      description: 'Development and characterization of high-performance optical sensing devices.',
      image: '/photomat/images/experiments/photodetectors.jpg',
      alt: 'High-performance optical sensing device'
    },
    {
      id: 5,
      title: 'Smart Home Lighting Solutions',
      description: 'Energy-efficient intelligent lighting systems using advanced photonic technologies.',
      image: '/photomat/images/experiments/home-lighting-solution.jpg',
      alt: 'Intelligent lighting systems demonstration'
    }
  ]

  const scrollRef = useRef<HTMLDivElement>(null)
  const [isDown, setIsDown] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDown(true)
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0))
    setScrollLeft(scrollRef.current?.scrollLeft || 0)
  }

  const handleMouseLeave = () => {
    setIsDown(false)
  }

  const handleMouseUp = () => {
    setIsDown(false)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown) return
    e.preventDefault()
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0)
    const walk = (x - startX) * 1.5 // Scroll speed multiplier
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk
    }
  }

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const container = scrollRef.current
      const card = container.firstElementChild as HTMLElement
      const cardWidth = card ? card.clientWidth : 300
      const gap = 24 // gap-6 is 24px
      const scrollAmount = cardWidth + gap

      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="experiments" className="py-20 px-6 md:px-8 bg-background border-b border-border relative overflow-hidden">
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-4 md:space-y-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4 max-w-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Research Experiments &amp; Demonstrations
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore cutting-edge photonic prototypes and advanced optical systems developed in our laboratories.
            </p>
          </motion.div>

          {/* Simple controls for header on desktop */}
          <div className="hidden md:flex gap-3">
            <button
              onClick={() => scroll('left')}
              className="flex items-center justify-center w-12 h-12 rounded-full border border-border bg-white/70 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground hover:border-primary shadow-sm hover:shadow transition-all duration-200"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="flex items-center justify-center w-12 h-12 rounded-full border border-border bg-white/70 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground hover:border-primary shadow-sm hover:shadow transition-all duration-200"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative group/carousel">
          <div
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            style={{
              scrollSnapType: 'x mandatory',
              scrollBehavior: isDown ? 'auto' : 'smooth'
            }}
            className="flex overflow-x-auto gap-6 pb-8 pt-2 select-none no-scrollbar cursor-grab active:cursor-grabbing"
          >
            {experiments.map((experiment) => (
              <div
                key={experiment.id}
                style={{ scrollSnapAlign: 'center' }}
                className="w-[85%] sm:w-[48%] md:w-[31%] lg:w-[23%] flex-shrink-0 group flex flex-col rounded-xl overflow-hidden border border-border/60 bg-white/40 backdrop-blur-md hover:bg-white/80 hover:border-primary/20 hover:shadow-xl transition-all duration-300"
              >
                {/* Image Frame */}
                <div className="relative h-48 sm:h-56 overflow-hidden bg-muted">
                  <Image
                    src={experiment.image}
                    alt={experiment.alt}
                    fill
                    loading="lazy"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-w-700px) 100vw, 30vw"
                  />
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {experiment.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {experiment.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Floating Next/Prev Arrow Overlay Buttons for desktop */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-white/90 border border-border shadow-md hover:bg-primary hover:text-primary-foreground opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300"
            aria-label="Scroll left"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-white/90 border border-border shadow-md hover:bg-primary hover:text-primary-foreground opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300"
            aria-label="Scroll right"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
