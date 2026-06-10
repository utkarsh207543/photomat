import Header from '@/components/header'
import Footer from '@/components/footer'
import { Clock, MapPin } from 'lucide-react'

export default function Schedule() {
  const days = [
    {
      date: 'Day 1 - January 15, 2026',
      events: [
        { time: '08:00 - 09:00', title: 'Registration & Welcome Coffee', location: 'Main Hall', type: 'registration' },
        { time: '09:00 - 09:30', title: 'Opening Ceremony', location: 'Auditorium', type: 'plenary' },
        { time: '09:30 - 10:30', title: 'Keynote: Future of Photonic Materials', location: 'Auditorium', speaker: 'Dr. Rajesh Kumar', type: 'keynote' },
        { time: '10:30 - 11:00', title: 'Coffee Break', location: 'Foyer', type: 'break' },
        { time: '11:00 - 12:30', title: 'Parallel Session: Quantum Photonics', location: 'Hall A', type: 'session' },
        { time: '11:00 - 12:30', title: 'Parallel Session: Advanced Materials', location: 'Hall B', type: 'session' },
        { time: '12:30 - 13:30', title: 'Lunch Break', location: 'Cafeteria', type: 'break' },
        { time: '13:30 - 15:00', title: 'Research Paper Presentations', location: 'Hall A & B', type: 'session' },
        { time: '15:00 - 15:30', title: 'Tea Break', location: 'Foyer', type: 'break' },
        { time: '15:30 - 17:00', title: 'Interactive Poster Session', location: 'Main Hall', type: 'session' },
        { time: '17:00 - 18:00', title: 'Industry Showcase', location: 'Exhibition Area', type: 'session' },
        { time: '19:00 - 21:00', title: 'Welcome Reception & Dinner', location: 'Banquet Hall', type: 'dinner' }
      ]
    },
    {
      date: 'Day 2 - January 16, 2026',
      events: [
        { time: '08:00 - 09:00', title: 'Breakfast', location: 'Cafeteria', type: 'break' },
        { time: '09:00 - 10:00', title: 'Keynote: Integrated Photonics Revolution', location: 'Auditorium', speaker: 'Prof. Maria Santos', type: 'keynote' },
        { time: '10:00 - 10:30', title: 'Coffee Break', location: 'Foyer', type: 'break' },
        { time: '10:30 - 12:00', title: 'Technical Workshop: Photonic Characterization', location: 'Lab 1', type: 'workshop' },
        { time: '10:30 - 12:00', title: 'Technical Workshop: Optical Design Software', location: 'Lab 2', type: 'workshop' },
        { time: '12:00 - 13:00', title: 'Lunch Break', location: 'Cafeteria', type: 'break' },
        { time: '13:00 - 14:30', title: 'Parallel Session: Nanophotonics', location: 'Hall A', type: 'session' },
        { time: '13:00 - 14:30', title: 'Parallel Session: Device Applications', location: 'Hall B', type: 'session' },
        { time: '14:30 - 15:00', title: 'Tea Break', location: 'Foyer', type: 'break' },
        { time: '15:00 - 17:00', title: 'Innovation Showcase & Demonstrations', location: 'Exhibition Area', type: 'session' },
        { time: '17:00 - 18:30', title: 'Lab Tours & Facility Visits', location: 'Campus', type: 'tour' },
        { time: '19:00 - 21:30', title: 'Gala Dinner with Industry Leaders', location: 'Banquet Hall', type: 'dinner' }
      ]
    },
    {
      date: 'Day 3 - January 17, 2026',
      events: [
        { time: '08:00 - 09:00', title: 'Breakfast', location: 'Cafeteria', type: 'break' },
        { time: '09:00 - 10:00', title: 'Panel Discussion: Future Directions', location: 'Auditorium', type: 'panel' },
        { time: '10:00 - 10:30', title: 'Coffee Break', location: 'Foyer', type: 'break' },
        { time: '10:30 - 12:00', title: 'Roundtable: Collaboration Opportunities', location: 'Hall A', type: 'session' },
        { time: '10:30 - 12:00', title: 'Roundtable: Emerging Applications', location: 'Hall B', type: 'session' },
        { time: '12:00 - 13:00', title: 'Lunch Break', location: 'Cafeteria', type: 'break' },
        { time: '13:00 - 14:30', title: 'Final Research Presentations', location: 'Auditorium', type: 'session' },
        { time: '14:30 - 15:00', title: 'Tea Break', location: 'Foyer', type: 'break' },
        { time: '15:00 - 16:00', title: 'Award Presentations & Closing Remarks', location: 'Auditorium', type: 'plenary' },
        { time: '16:00 - 17:00', title: 'Networking & Farewell', location: 'Main Hall', type: 'break' }
      ]
    }
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'keynote': return 'border-primary bg-primary/5'
      case 'plenary': return 'border-primary bg-primary/5'
      case 'session': return 'border-accent bg-accent/5'
      case 'workshop': return 'border-secondary bg-secondary/5'
      case 'break': return 'border-border bg-muted/5'
      case 'dinner': return 'border-primary bg-primary/10'
      case 'tour': return 'border-accent bg-accent/5'
      case 'panel': return 'border-primary bg-primary/5'
      default: return 'border-border'
    }
  }

  const getTypeLabel = (type: string) => {
    const labels: { [key: string]: string } = {
      keynote: 'Keynote',
      plenary: 'Plenary',
      session: 'Session',
      workshop: 'Workshop',
      break: 'Break',
      dinner: 'Dinner',
      tour: 'Tour',
      panel: 'Panel',
      registration: 'Registration'
    }
    return labels[type] || 'Event'
  }

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-16 px-6 bg-gradient-to-b from-secondary/10 to-background">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">Workshop Schedule</h1>
            <p className="text-xl text-muted-foreground">
              Three days of cutting-edge presentations, workshops, and networking opportunities.
            </p>
          </div>
        </section>

        {/* Schedule */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto space-y-12">
            {days.map((day, dayIdx) => (
              <div key={dayIdx} className="space-y-6">
                <div className="space-y-2 pb-4 border-b-2 border-primary">
                  <h2 className="text-3xl font-bold text-foreground">{day.date}</h2>
                </div>

                <div className="space-y-3">
                  {day.events.map((event, eventIdx) => (
                    <div
                      key={eventIdx}
                      className={`p-4 md:p-6 rounded-lg border-l-4 ${getTypeColor(event.type)} transition-all hover:shadow-md`}
                    >
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div className="flex-1 space-y-2">
                          <div className="flex flex-wrap items-center gap-3">
                            <div className="flex items-center gap-2 text-sm font-semibold">
                              <Clock className="w-4 h-4 text-primary" />
                              <span className="text-foreground">{event.time}</span>
                            </div>
                            <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/20 text-primary">
                              {getTypeLabel(event.type)}
                            </span>
                          </div>
                          <h3 className="text-lg font-semibold text-foreground">{event.title}</h3>
                          {event.speaker && (
                            <p className="text-sm text-muted-foreground italic">Speaker: {event.speaker}</p>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground md:text-right">
                          <MapPin className="w-4 h-4 flex-shrink-0" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Legend */}
        <section className="py-12 px-6 bg-secondary/5">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8">Event Types</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4 rounded-lg border border-primary bg-primary/5">
                <p className="font-semibold text-foreground">Keynote & Plenary</p>
                <p className="text-sm text-muted-foreground mt-1">Featured talks and opening sessions</p>
              </div>
              <div className="p-4 rounded-lg border border-accent bg-accent/5">
                <p className="font-semibold text-foreground">Sessions & Workshops</p>
                <p className="text-sm text-muted-foreground mt-1">Research presentations and hands-on learning</p>
              </div>
              <div className="p-4 rounded-lg border border-primary bg-primary/10">
                <p className="font-semibold text-foreground">Special Events</p>
                <p className="text-sm text-muted-foreground mt-1">Networking dinners and facility tours</p>
              </div>
            </div>
          </div>
        </section>

        {/* Download */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-bold text-foreground">Download Full Schedule</h2>
            <p className="text-lg text-muted-foreground">
              Get the complete event schedule with detailed descriptions and speaker information.
            </p>
            <button className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
              Download PDF Schedule
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
