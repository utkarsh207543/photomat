import Image from 'next/image'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Check } from 'lucide-react'

export default function About() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-16 px-6 bg-gradient-to-b from-secondary/10 to-background">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">About PHOTOMAT26</h1>
            <p className="text-xl text-muted-foreground">
              Bringing together the brightest minds in photonics and materials science for groundbreaking research and collaboration.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto space-y-16">
            {/* Overview */}
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-foreground">Workshop Overview</h2>
              <div className="prose prose-lg max-w-none space-y-4 text-muted-foreground">
                <p>
                  PHOTOMAT26 is a premier international workshop dedicated to advancing research and innovation in photonics materials and advanced optical technologies. Hosted at the Technology Innovation Hub at IIT Guwahati, this workshop brings together leading researchers, scientists, and industry professionals from across the globe.
                </p>
                <p>
                  The workshop provides a unique platform for knowledge exchange, collaborative research discussions, and networking opportunities. Participants will explore cutting-edge developments in photonic materials, optical physics, quantum photonics, and their applications in emerging technologies.
                </p>
                <p>
                  With support from OPTICA (formerly OSA), DIAT, DRDO, and other leading research institutions, PHOTOMAT26 represents a significant milestone in international scientific collaboration and technological advancement.
                </p>
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4 p-8 rounded-lg border border-border bg-white">
                <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                <p className="text-muted-foreground">
                  To foster international collaboration and innovation in photonics materials through comprehensive research discussions, knowledge sharing, and networking opportunities that drive technological advancement.
                </p>
              </div>
              <div className="space-y-4 p-8 rounded-lg border border-border bg-white">
                <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
                <p className="text-muted-foreground">
                  To establish PHOTOMAT as a leading global platform for photonics research, creating lasting connections between academia and industry while accelerating breakthrough discoveries in optical materials.
                </p>
              </div>
            </div>

            {/* Key Focus Areas */}
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-foreground">Key Focus Areas</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  'Advanced Photonic Materials',
                  'Quantum Photonics & Optics',
                  'Optical Physics & Engineering',
                  'Emerging Applications',
                  'Nanophotonics',
                  'Integrated Photonics'
                ].map((area) => (
                  <div key={area} className="flex items-start gap-4 p-4 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-semibold text-foreground">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Statistics */}
            <div className="grid md:grid-cols-4 gap-6 py-12 border-t border-b border-border">
              <div className="text-center space-y-2">
                <p className="text-4xl font-bold text-primary">50+</p>
                <p className="text-muted-foreground">Researchers</p>
              </div>
              <div className="text-center space-y-2">
                <p className="text-4xl font-bold text-primary">20+</p>
                <p className="text-muted-foreground">Institutions</p>
              </div>
              <div className="text-center space-y-2">
                <p className="text-4xl font-bold text-primary">15+</p>
                <p className="text-muted-foreground">Countries</p>
              </div>
              <div className="text-center space-y-2">
                <p className="text-4xl font-bold text-primary">3</p>
                <p className="text-muted-foreground">Days</p>
              </div>
            </div>

            {/* Organizing Partners */}
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-foreground">Organizing Partners</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 rounded-lg border border-border bg-white space-y-4">
                  <div className="relative h-16 w-full">
                    <Image
                      src="/photomat/images/iitg-tidf-logo.webp"
                      alt="IITG TIDF"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">IITG TIDF</h4>
                    <p className="text-sm text-muted-foreground">
                      Technology Innovation Hub at Indian Institute of Technology Guwahati, fostering innovation and entrepreneurship in advanced technologies.
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-lg border border-border bg-white space-y-4">
                  <div className="relative h-16 w-full">
                    <Image
                      src="/photomat/images/optica-logo.png"
                      alt="OPTICA"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">OPTICA</h4>
                    <p className="text-sm text-muted-foreground">
                      Global leader in photonics research and professional development, advancing optical science through innovation and collaboration.
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-lg border border-border bg-white space-y-4">
                  <div className="relative h-16 w-full">
                    <Image
                      src="/photomat/images/diat-logo.png"
                      alt="DIAT"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">DIAT</h4>
                    <p className="text-sm text-muted-foreground">
                      Defence Institute of Advanced Technology, a premier research institution focused on cutting-edge defense and advanced technologies.
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-lg border border-border bg-white space-y-4">
                  <div className="relative h-16 w-full">
                    <Image
                      src="/photomat/images/drdo-logo.svg"
                      alt="DRDO"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">DRDO</h4>
                    <p className="text-sm text-muted-foreground">
                      Defence Research and Development Organisation, India&apos;s premier defense research and development agency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
