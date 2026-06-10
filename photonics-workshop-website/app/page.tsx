'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import HeroSection from '@/components/sections/hero'
import StatisticsSection from '@/components/sections/statistics'
import AboutDiat from '@/components/sections/about-diat'
import AboutIITG from '@/components/sections/about-iitg'
import DiatOpticaChapter from '@/components/sections/diat-optica-chapter'
import KeyTopics from '@/components/sections/key-topics'
import ExperimentsSection from '@/components/sections/experiments'
import WorkshopActivities from '@/components/sections/workshop-activities'
import Eligibility from '@/components/sections/eligibility'
import KeynoteSpeakers from '@/components/sections/keynote-speakers'
import OrganizingCommittee from '@/components/sections/organizing-committee'
import Registration from '@/components/sections/registration'
import ImportantDates from '@/components/sections/important-dates'
import VenueContact from '@/components/sections/venue-contact'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="overflow-hidden">
        <HeroSection />
        <StatisticsSection />
        <AboutDiat />
        <AboutIITG />
        <DiatOpticaChapter />
        <KeyTopics />
        <ExperimentsSection />
        <WorkshopActivities />
        <Eligibility />
        <KeynoteSpeakers />
        <OrganizingCommittee />
        <Registration />
        <ImportantDates />
        <VenueContact />
      </main>

      <Footer />
    </div>
  )
}
