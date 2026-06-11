import Header from '@/components/header'
import Footer from '@/components/footer'
import { Mail, Globe } from 'lucide-react'
import Image from 'next/image'

export default function Speakers() {
  const speakers = [
    {
      name: 'Prof. Pavel Peterka',
      title: 'Director, UFE',
      institution: 'Institute of Photonics and Electronics, Czech Academy of Sciences',
      expertise: 'Fiber Optics, Photonics',
      bio: 'Leading researcher in active fiber devices, fiber lasers, and amplifiers with extensive contributions to optical physics.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pavel%20Peterka-9lUGAGLQGwcF3bBQIKWwjSDHebaoRq.jpg'
    },
    {
      name: 'Prof. Satishchandra B. Ogale',
      title: 'Director, RISE',
      institution: 'TCG-CREST, Kolkata',
      expertise: 'Materials Science, Energy',
      bio: 'Distinguished scientist with pioneering contributions to clean energy materials, functional oxides, and nanotechnology applications.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Satischandra%20B.%20Ogale-FEgVjJxcMl9GUursYjl0y3hYnt2M7h.jpg'
    },
    {
      name: 'Prof. Rakesh R. Warrier',
      title: 'Assistant Professor',
      institution: 'Electrical Engineering, NIT Calicut',
      expertise: 'Optical Engineering',
      bio: 'Expert in design and implementation of advanced optoelectronic sensors, optical networks, and instrumentation systems.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rakesh%20warrier-vlrwjWNIifHCZD2bQ7wCpwmHqAeYbn.jpg'
    },
    {
      name: 'Dr. Deepa Venkitesh',
      title: 'Professor',
      institution: 'Electrical Engineering, IIT Madras',
      expertise: 'Optoelectronics, Materials',
      bio: 'Leading researcher in fiber-optic communications, nonlinear optical processing, and high-speed optoelectronic devices.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dr%20Deepa%20Venkitesh-2KUYrKf7kKAMmNaOGT82OQITFH55GQ.jpg'
    },
    {
      name: 'Dr. P. K. Mukhopadhyay',
      title: 'Scientific Officer H',
      institution: 'RRCAT, Indore',
      expertise: 'Advanced Research',
      bio: 'Pioneered research in diode-pumped solid-state lasers, high-power lasers, and applications in defense and science.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dr%20p%20k%20mukhopadhyay-CF8QSkUSu8w4VeoFbNVWwZQ8789d40.jpg'
    },
    {
      name: 'Dr. Aditya Dharmadhikari',
      title: 'Scientific Officer G',
      institution: 'Nuclear and Atomic Physics, TIFR Mumbai',
      expertise: 'Photonics, Physics',
      bio: 'Prominent physicist researching ultra-short pulse laser interactions, nonlinear optics, and plasma diagnostics.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Aditya%20Dharmadhikari-H4hS3m816OQieqmPWRqSLwYWgIDXdy.jpg'
    },
    {
      name: 'Prof. Shailendra K. Varshney',
      title: 'Professor',
      institution: 'Department of Electronics & ECE, IIT Kharagpur',
      expertise: 'Optics, Photonics, Optical Communication',
      bio: 'Acclaimed researcher in photonic crystal fibers, optical microresonators, Kerr frequency combs, and integrated nanophotonics.',
      image: '/photomat/images/speakers/shailendra-varshney.jpg'
    }
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-16 px-6 bg-gradient-to-b from-secondary/10 to-background">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">Distinguished Speakers</h1>
            <p className="text-xl text-muted-foreground">
              Learn from world-class researchers and industry leaders at the forefront of photonics innovation.
            </p>
          </div>
        </section>

        {/* Speakers Grid */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {speakers.map((speaker, idx) => (
                <div key={idx} className="rounded-lg border border-border bg-white overflow-hidden hover:shadow-lg transition-shadow">
                  {/* Card Header (Image) */}
                  <div className="relative h-64 bg-gradient-to-br from-primary/10 to-accent/10">
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Card Content */}
                  <div className="p-6 space-y-4">
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold text-foreground">{speaker.name}</h3>
                      <p className="text-sm font-semibold text-primary">{speaker.title}</p>
                      <p className="text-sm text-muted-foreground">{speaker.institution}</p>
                    </div>

                    <div className="space-y-2">
                      <p className="text-xs font-medium text-primary uppercase tracking-wide">Expertise</p>
                      <p className="text-sm font-medium text-foreground">{speaker.expertise}</p>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed">{speaker.bio}</p>

                    <div className="flex gap-2 pt-4 border-t border-border">
                      <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg hover:bg-primary/10 transition-colors text-sm font-medium text-primary">
                        <Mail className="w-4 h-4" />
                        Contact
                      </button>
                      <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg hover:bg-primary/10 transition-colors text-sm font-medium text-primary">
                        <Globe className="w-4 h-4" />
                        Profile
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Speaker Categories */}
        <section className="py-20 px-6 bg-secondary/5">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Speaker Categories</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 rounded-lg border border-border bg-white space-y-4">
                <h3 className="text-2xl font-bold text-primary">Keynote Speakers</h3>
                <p className="text-muted-foreground">
                  Distinguished leaders presenting groundbreaking research and insights on the future of photonics materials and advanced optics.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-white space-y-4">
                <h3 className="text-2xl font-bold text-primary">Invited Lecturers</h3>
                <p className="text-muted-foreground">
                  Expert researchers sharing specialized knowledge in niche areas of photonic science and technology applications.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-white space-y-4">
                <h3 className="text-2xl font-bold text-primary">Industry Experts</h3>
                <p className="text-muted-foreground">
                  Professionals from leading companies showcasing practical applications and commercial advances in photonics.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call for Presentations */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-foreground">Call for Presentations</h2>
              <p className="text-lg text-muted-foreground">
                Interested in presenting your research? We welcome submissions for oral presentations and poster sessions.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg border-2 border-primary/30 bg-primary/5 space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Oral Presentations</h3>
                <ul className="text-left space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>15-minute presentation + Q&A</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Ideal for completed research</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Proceedings publication available</span>
                  </li>
                </ul>
              </div>
              <div className="p-6 rounded-lg border-2 border-accent/30 bg-accent/5 space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Poster Sessions</h3>
                <ul className="text-left space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold">•</span>
                    <span>Visual poster display format</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold">•</span>
                    <span>One-on-one expert discussions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold">•</span>
                    <span>Potential awards for best posters</span>
                  </li>
                </ul>
              </div>
            </div>
            <button className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
              Submit Your Paper
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
