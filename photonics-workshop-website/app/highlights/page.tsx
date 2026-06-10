import Header from '@/components/header'
import Footer from '@/components/footer'
import { Award, Zap, Globe, BookOpen, Users, Microscope } from 'lucide-react'

export default function Highlights() {
  const highlights = [
    {
      icon: Award,
      title: 'Prestigious Keynote Speakers',
      description: 'Renowned researchers and industry leaders sharing their latest breakthroughs and insights in photonics and advanced materials science.'
    },
    {
      icon: Microscope,
      title: 'Research Presentations',
      description: 'Cutting-edge research papers and experimental findings from leading institutions worldwide. Interactive poster sessions and demonstrations.'
    },
    {
      icon: Globe,
      title: 'International Networking',
      description: 'Connect with 50+ researchers and professionals from 15+ countries. Build lasting collaborations and partnerships in your field.'
    },
    {
      icon: BookOpen,
      title: 'Technical Workshops',
      description: 'Hands-on workshops on advanced photonic characterization techniques, simulation methods, and emerging technologies.'
    },
    {
      icon: Zap,
      title: 'Innovation Showcase',
      description: 'Latest advances in quantum photonics, integrated photonics, and photonic applications in AI and quantum computing.'
    },
    {
      icon: Users,
      title: 'Collaborative Sessions',
      description: 'Roundtable discussions and brainstorming sessions to foster research collaborations and interdisciplinary projects.'
    }
  ]

  const topics = [
    'Advanced Photonic Materials',
    'Quantum Photonics',
    'Optical Engineering & Design',
    'Nanophotonics & Metamaterials',
    'Integrated Photonic Circuits',
    'Photonic Applications in AI',
    'Characterization Techniques',
    'Emerging Optical Technologies'
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-16 px-6 bg-gradient-to-b from-secondary/10 to-background">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">Workshop Highlights</h1>
            <p className="text-xl text-muted-foreground">
              Experience an exciting three-day program filled with cutting-edge research, innovation, and global collaboration.
            </p>
          </div>
        </section>

        {/* Main Highlights */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">What to Expect</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {highlights.map((highlight, idx) => {
                const Icon = highlight.icon
                return (
                  <div key={idx} className="p-6 rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all bg-white space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{highlight.title}</h3>
                    <p className="text-muted-foreground">{highlight.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Program Overview */}
        <section className="py-20 px-6 bg-secondary/5">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">3-Day Program Overview</h2>
            
            <div className="space-y-8">
              {/* Day 1 */}
              <div className="border-l-4 border-primary pl-6 py-4">
                <h3 className="text-2xl font-bold text-foreground mb-3">Day 1: Foundations & Innovations</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                    Opening ceremony and keynote address
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                    Plenary sessions on photonic materials
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                    Research paper presentations
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                    Welcome reception and networking dinner
                  </li>
                </ul>
              </div>

              {/* Day 2 */}
              <div className="border-l-4 border-accent pl-6 py-4">
                <h3 className="text-2xl font-bold text-foreground mb-3">Day 2: Technical Deep Dives</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0"></span>
                    Technical workshops and hands-on sessions
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0"></span>
                    Parallel sessions on specialized topics
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0"></span>
                    Interactive poster sessions
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0"></span>
                    Innovation showcase and demonstrations
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0"></span>
                    Gala dinner with industry leaders
                  </li>
                </ul>
              </div>

              {/* Day 3 */}
              <div className="border-l-4 border-primary pl-6 py-4">
                <h3 className="text-2xl font-bold text-foreground mb-3">Day 3: Collaboration & Future</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                    Roundtable discussions and collaborative sessions
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                    Panel discussions on future directions
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                    Lab tours and facility visits
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                    Closing ceremony and award presentations
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Research Topics */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Research Topics Covered</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {topics.map((topic, idx) => (
                <div key={idx} className="p-4 rounded-lg border border-primary/30 bg-primary/5 hover:bg-primary/10 transition-colors">
                  <p className="font-medium text-foreground">{topic}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Venue & Logistics */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Venue & Logistics</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground">Location</h3>
                <p className="text-muted-foreground">
                  IIT Guwahati Technology Innovation Hub<br/>
                  Guwahati, Assam, India
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground">Accommodation</h3>
                <p className="text-muted-foreground">
                  No accommodation is provided. Participants must arrange their own lodging.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground">Connectivity</h3>
                <p className="text-muted-foreground">
                  Direct flights available. Ground transportation arranged from airport to venue
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
