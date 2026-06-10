'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { Check, Users, BookOpen, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export default function Registration() {
  const [selectedCategory, setSelectedCategory] = useState('academic')

  const categories = [
    {
      id: 'academic',
      title: 'Academic Researcher',
      price: '₹5,000',
      originalPrice: '₹7,000',
      icon: BookOpen,
      features: [
        'Full conference access (3 days)',
        'Coffee breaks and lunch',
        'Welcome reception & dinner',
        'Gala dinner on Day 2',
        'Workshop participation',
        'Proceedings',
        'Certificate of attendance'
      ]
    },
    {
      id: 'industry',
      title: 'Industry Professional',
      price: '₹8,000',
      originalPrice: '₹10,000',
      icon: Zap,
      features: [
        'Full conference access (3 days)',
        'Coffee breaks and lunch',
        'Welcome reception & dinner',
        'Gala dinner on Day 2',
        'Workshop participation',
        'Exhibition access',
        'Networking sessions',
        'Proceedings',
        'Certificate of attendance'
      ]
    },
    {
      id: 'student',
      title: 'Student',
      price: '₹2,500',
      originalPrice: '₹4,000',
      icon: Users,
      features: [
        'Full conference access (3 days)',
        'Coffee breaks and lunch',
        'Welcome reception & dinner',
        'Workshop participation',
        'Proceedings',
        'Student networking events',
        'Certificate of attendance'
      ]
    }
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-16 px-6 bg-gradient-to-b from-secondary/10 to-background">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">Registration</h1>
            <p className="text-xl text-muted-foreground">
              Secure your spot at PHOTOMAT26. Early bird discounts available until December 15, 2025.
            </p>
          </div>
        </section>

        {/* Registration Info */}
        <section className="py-12 px-6 bg-primary/5 border-y border-primary/30">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <p className="text-3xl font-bold text-primary">January 15-17, 2026</p>
                <p className="text-muted-foreground">Workshop Dates</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-bold text-primary">₹2,500 - ₹8,000</p>
                <p className="text-muted-foreground">Registration Fees (Early Bird)</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-bold text-primary">December 31, 2025</p>
                <p className="text-muted-foreground">Final Registration Deadline</p>
              </div>
            </div>
          </div>
        </section>

        {/* Registration Packages */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Choose Your Package</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {categories.map((category) => {
                const Icon = category.icon
                const isSelected = selectedCategory === category.id
                
                return (
                  <div
                    key={category.id}
                    className={`rounded-lg border-2 overflow-hidden transition-all ${
                      isSelected
                        ? 'border-primary shadow-xl scale-105'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    {/* Header */}
                    <div className={`p-6 ${isSelected ? 'bg-primary text-primary-foreground' : 'bg-gradient-to-r from-primary/10 to-accent/10'}`}>
                      <div className="flex items-center gap-3 mb-3">
                        <Icon className={`w-6 h-6 ${isSelected ? '' : 'text-primary'}`} />
                        <h3 className={`text-xl font-bold ${isSelected ? '' : 'text-foreground'}`}>
                          {category.title}
                        </h3>
                      </div>
                      <div className="space-y-1">
                        <p className={`text-3xl font-bold ${isSelected ? '' : 'text-foreground'}`}>
                          {category.price}
                        </p>
                        <p className={`text-sm line-through ${isSelected ? 'opacity-70' : 'text-muted-foreground'}`}>
                          {category.originalPrice}
                        </p>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="p-6 space-y-4">
                      <ul className="space-y-3">
                        {category.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${isSelected ? 'text-primary' : 'text-primary/60'}`} />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Button
                        onClick={() => setSelectedCategory(category.id)}
                        variant={isSelected ? 'default' : 'outline'}
                        className="w-full mt-6"
                      >
                        {isSelected ? 'Selected' : 'Select'}
                      </Button>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Registration Form CTA */}
            <div className="mt-12 p-8 rounded-lg bg-primary/10 border border-primary/30 text-center space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Ready to Join PHOTOMAT26?</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Complete your registration for the {categories.find(c => c.id === selectedCategory)?.title} package and secure your spot today.
              </p>
              <Button size="lg" className="px-8">
                Proceed to Payment
              </Button>
            </div>
          </div>
        </section>

        {/* What&apos;s Included */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">What&apos;s Included</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Conference Access</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                    Three full days of sessions and workshops
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                    All keynote speeches and plenary sessions
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                    Technical workshops and breakout sessions
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                    Poster exhibition and innovation showcase
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Materials & Meals</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                    Conference proceedings and materials
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                    Daily coffee breaks and lunches
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                    Welcome reception and networking dinners
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                    Gala dinner on Day 2 (select packages)
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Networking</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                    Access to participant directory
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                    Networking sessions with researchers
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                    Industry collaboration opportunities
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                    Lab tours and facility visits
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Certification</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                    Certificate of attendance
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                    Digital copies of presentations
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                    Post-conference resources
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                    Alumni network access
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Important Information */}
        <section className="py-20 px-6 bg-secondary/5">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-8 text-center">Important Information</h2>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-white border border-border">
                <h4 className="font-semibold text-foreground mb-2">Refund Policy</h4>
                <p className="text-muted-foreground">
                  Full refunds will be provided for cancellations made before January 1, 2026. Partial refunds (50%) for cancellations between January 1-10, 2026. No refunds after January 10, 2026.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-white border border-border">
                <h4 className="font-semibold text-foreground mb-2">Payment Options</h4>
                <p className="text-muted-foreground">
                  We accept online payment methods including credit cards, debit cards, UPI, and bank transfers. All transactions are secure and encrypted.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-white border border-border">
                <h4 className="font-semibold text-foreground mb-2">Group Discounts</h4>
                <p className="text-muted-foreground">
                  Organizations registering 5 or more participants receive a 15% discount. Contact us for details.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
