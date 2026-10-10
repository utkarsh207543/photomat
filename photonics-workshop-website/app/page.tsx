'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import HeroSection from '@/components/sections/hero'
import StatisticsSection from '@/components/sections/statistics'
import AboutDiat from '@/components/sections/about-diat'
import AboutAppliedPhysics from '@/components/sections/about-applied-physics'
import AboutIITG from '@/components/sections/about-iitg'
import SensorsResearchSociety from '@/components/sections/sensors-research-society'
import DiatOpticaChapter from '@/components/sections/diat-optica-chapter'
import ChiefGuests from '@/components/sections/chief-guest'
import KeynoteSpeakers from '@/components/sections/keynote-speakers'
import OrganizingCommittee from '@/components/sections/organizing-committee'
import ImportantDates from '@/components/sections/important-dates'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="overflow-hidden">
        <HeroSection />
        <StatisticsSection />
        <AboutDiat />
        <AboutAppliedPhysics />
        <AboutIITG />
        <SensorsResearchSociety />
        <DiatOpticaChapter />
        <ChiefGuests />
        <KeynoteSpeakers />
        <OrganizingCommittee />
        <ImportantDates />
      </main>

      <Footer />
    </div>
  )
}
