'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Mail, MapPin } from 'lucide-react'
import { Modal } from '@/components/ui/modal'

export default function Footer() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false)
  const [isTermsOpen, setIsTermsOpen] = useState(false)
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-16 h-16">
                <Image
                  src="/images/photomat26-logo.png"
                  alt="PHOTOMAT26"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-lg font-bold text-foreground">PHOTOMAT26</span>
            </div>
            <p className="text-sm text-muted-foreground">
              A premier international workshop on photonics materials and advanced optics research.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About DIAT</a></li>
              <li><a href="#speakers" className="text-muted-foreground hover:text-foreground transition-colors">Speakers</a></li>
              <li><a href="#schedule" className="text-muted-foreground hover:text-foreground transition-colors">Activities</a></li>
              <li><a href="https://docs.google.com/forms/d/1aEwOE7AfHuu5s3RPGEr_yLUqFdJy91GAj2YuBwH7gdw/edit" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">Register</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0 text-primary" />
                <a href="mailto:opticastudentchapter@diat.ac.in" className="text-muted-foreground hover:text-foreground transition-colors">opticastudentchapter@diat.ac.in</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-primary" />
                <a
                  href="https://maps.app.goo.gl/JbDLfz3uYkfhxRoZ6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Pune, Maharashtra, India
                </a>
              </li>
            </ul>
          </div>

          {/* Partners */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Sponsors</h4>
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center h-10">
                <Image
                  src="/images/optica-logo.png"
                  alt="OPTICA"
                  width={100}
                  height={40}
                  className="object-contain h-full"
                />
              </div>
              <div className="flex items-center h-10">
                <Image
                  src="/images/iitg-tidf-logo.webp"
                  alt="IITG TIDF"
                  width={120}
                  height={40}
                  className="object-contain h-full"
                />
              </div>
              <div className="flex items-center h-10">
                <Image
                  src="/images/diat-logo.png"
                  alt="DIAT"
                  width={120}
                  height={40}
                  className="object-contain h-full"
                />
              </div>
              <div className="flex items-center h-10">
                <Image
                  src="/images/drdo-logo.svg"
                  alt="DRDO"
                  width={120}
                  height={40}
                  className="object-contain h-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8 space-y-4">

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground pt-4">
            <p>&copy; 2026 PHOTOMAT26. All rights reserved.</p>
            <div className="flex gap-6">
              <button
                onClick={() => setIsPrivacyOpen(true)}
                className="hover:text-foreground transition-colors cursor-pointer text-left bg-transparent border-0 p-0 text-xs text-muted-foreground font-normal"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setIsTermsOpen(true)}
                className="hover:text-foreground transition-colors cursor-pointer text-left bg-transparent border-0 p-0 text-xs text-muted-foreground font-normal"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      <Modal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
        title="Privacy Policy"
      >
        <div className="space-y-6 text-foreground/80">
          <p>
            This Privacy Policy explains how the <strong>PHOTOMAT 2026 Organizing Committee</strong> (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) collects, uses, and protects your personal information when you register for and participate in the International Workshop on Photonics and Optical Materials (PHOTOMAT 2026) hosted at DIAT, Pune.
          </p>

          <div className="space-y-2">
            <h4 className="text-base font-semibold text-foreground">1. Information We Collect</h4>
            <p>
              During the registration process, we collect personal information necessary to facilitate your participation. This includes:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Contact Details: Name, email address, contact number, and academic or organization affiliation.</li>
              <li>Academic/Professional Details: Registration category (Student, Faculty, Industry Professional, or Affiliate).</li>
              <li>Transaction Information: Proof of payment, transaction reference number, and date of payment.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="text-base font-semibold text-foreground">2. How We Use Your Information</h4>
            <p>
              Your data is used solely for the administration of the workshop:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Processing and verifying your workshop registration.</li>
              <li>Sending essential event updates, schedules, and joining instructions.</li>
              <li>Generating personalized participation certificates, badges, and workshop kits.</li>
              <li>Coordinating food preferences, lodging, and logistical arrangements.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="text-base font-semibold text-foreground">3. Information Sharing and Disclosure</h4>
            <p>
              We respect your privacy. We do not sell, rent, or lease your personal information. Your details are shared only with the collaborating organizations (DIAT Pune, IITG TIDF, Optica Student Chapter, and DRDO) exclusively for compliance, funding reporting, and security purposes associated with hosting at a defense-affiliated campus.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-base font-semibold text-foreground">4. Data Security</h4>
            <p>
              We apply appropriate administrative, technical, and physical security measures to protect the confidentiality and integrity of your personal data. All registration transactions are carried out through verified official university payment channels.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-base font-semibold text-foreground">5. Your Rights &amp; Support</h4>
            <p>
              You have the right to request access to, correction of, or deletion of your registered data. If you have any questions about this policy or need to correct your registration records, please contact us at:
            </p>
            <p className="font-semibold text-foreground mt-2">
              Email: <a href="mailto:opticastudentchapter@diat.ac.in" className="text-primary hover:underline">opticastudentchapter@diat.ac.in</a>
            </p>
          </div>
        </div>
      </Modal>

      {/* Terms of Service Modal */}
      <Modal
        isOpen={isTermsOpen}
        onClose={() => setIsTermsOpen(false)}
        title="Terms of Service"
      >
        <div className="space-y-6 text-foreground/80">
          <p>
            Welcome to the International Workshop on Photonics and Optical Materials (<strong>PHOTOMAT 2026</strong>). By registering for, attending, or submitting content to this workshop, you agree to abide by the following terms and conditions.
          </p>

          <div className="space-y-2">
            <h4 className="text-base font-semibold text-foreground">1. Registration and Seat Allocation</h4>
            <p>
              Participation in PHOTOMAT 2026 is strictly subject to registration and confirmation of fee payment. Due to hands-on lab requirements, attendance is limited to <strong>50 seats</strong> overall. Seats are assigned on a first-come, first-served basis. The organizers reserve the right to close registrations early if capacity is reached.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-base font-semibold text-foreground">2. Payment and Refund Policy</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>All registration fees must be paid in full through the official university payment portal.</li>
              <li>Registrations are strictly non-refundable and non-transferable after payment confirmation.</li>
              <li>In the extreme case of event cancellation by the organizers, liability is limited strictly to a refund of the registration fee received.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="text-base font-semibold text-foreground">3. Host Campus Rules &amp; Access</h4>
            <p>
              The workshop is hosted at the <strong>Defense Institute of Advanced Technology (DIAT), Pune</strong>. All participants must strictly adhere to campus safety regulations and security guidelines. Carrying a valid national identity card (Aadhaar, Passport, etc.) and your official workshop confirmation email is mandatory for entry.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-base font-semibold text-foreground">4. Code of Conduct</h4>
            <p>
              We are committed to providing a safe, professional, and welcoming environment. All attendees, speakers, and staff must treat others with respect and maintain academic integrity. Harassment or disruptive behavior will not be tolerated and may result in immediate removal from the workshop without refund.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-base font-semibold text-foreground">5. Intellectual Property</h4>
            <p>
              All presentations, abstracts, and lab materials provided during the workshop are the intellectual property of the respective authors or PHOTOMAT 2026. Unauthorized audio or video recording of technical presentation sessions and hands-on laboratory sessions is strictly prohibited.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-base font-semibold text-foreground">6. Modifications to Program</h4>
            <p>
              While the agenda is planned carefully, the organizing committee reserves the right to modify technical sessions, speakers, schedule, or topics due to unforeseen availability or circumstances beyond our control.
            </p>
          </div>
        </div>
      </Modal>
    </footer>
  )
}
