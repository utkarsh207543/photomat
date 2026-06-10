'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-16 px-6 bg-gradient-to-b from-secondary/10 to-background">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">Get in Touch</h1>
            <p className="text-xl text-muted-foreground">
              Have questions about PHOTOMAT26? We&apos;re here to help. Contact us today.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Contact Info Card 1 */}
              <div className="p-6 rounded-lg border border-border bg-white space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Email</h3>
                <p className="text-muted-foreground">
                  For general inquiries and registrations
                </p>
                <a href="mailto:info@photomat26.com" className="text-primary font-medium hover:underline">
                  info@photomat26.com
                </a>
              </div>

              {/* Contact Info Card 2 */}
              <div className="p-6 rounded-lg border border-border bg-white space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Phone</h3>
                <p className="text-muted-foreground">
                  Call us during business hours (IST)
                </p>
                <a href="tel:+919876543210" className="text-primary font-medium hover:underline">
                  +91 987 654 3210
                </a>
              </div>

              {/* Contact Info Card 3 */}
              <div className="p-6 rounded-lg border border-border bg-white space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Address</h3>
                <p className="text-muted-foreground">
                  IIT Guwahati Technology Innovation Hub
                </p>
                <address className="text-primary font-medium not-italic">
                  Guwahati, Assam 781039, India
                </address>
              </div>
            </div>

            {/* Office Hours */}
            <div className="mb-12 p-6 rounded-lg border border-border bg-secondary/5">
              <div className="flex items-start gap-3">
                <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Office Hours</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>Monday - Friday: 9:00 AM - 6:00 PM IST</li>
                    <li>Saturday: 10:00 AM - 2:00 PM IST</li>
                    <li>Sunday: Closed</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-4xl font-bold text-foreground">Send us a Message</h2>
                <p className="text-lg text-muted-foreground">
                  Fill out the form below and we&apos;ll get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 bg-background p-8 rounded-lg border border-border">
                {/* Name Field */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-foreground">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-border bg-white focus:border-primary focus:outline-none transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-foreground">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-border bg-white focus:border-primary focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Subject Field */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-border bg-white focus:border-primary focus:outline-none transition-colors"
                    placeholder="What is this about?"
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-foreground">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-white focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  We respect your privacy. Your information will not be shared with third parties.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-6 bg-secondary/5">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">When and where is PHOTOMAT26?</h3>
                <p className="text-muted-foreground">
                  PHOTOMAT26 will be held January 15-17, 2026, at the Technology Innovation Hub, IIT Guwahati, Assam, India.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">How do I register?</h3>
                <p className="text-muted-foreground">
                  You can register online through our registration page. Early bird discounts are available for registrations before December 15, 2025.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Are travel scholarships available?</h3>
                <p className="text-muted-foreground">
                  Limited travel scholarships are available for students and early-career researchers. Contact us for more information.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Can I present my research?</h3>
                <p className="text-muted-foreground">
                  Yes! We welcome oral presentations and poster submissions. Check the Speakers page for submission guidelines and deadlines.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Will proceedings be published?</h3>
                <p className="text-muted-foreground">
                  Yes, selected presentations will be published in conference proceedings. Details will be available after registration.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Is accommodation provided?</h3>
                <p className="text-muted-foreground">
                  No accommodation will be provided by the organizers. Participants must arrange their own lodging.
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
