import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Settings, Wifi, Zap, Wrench, Users, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function ProductionPage() {
  const services = [
    {
      name: "Rigging & Trussing",
      description: "Safe and secure structural solutions for hanging equipment and creating elevated stages",
      icon: Wrench,
    },
    {
      name: "Livestreaming",
      description: "Professional broadcast-quality streaming solutions to reach global audiences",
      icon: Wifi,
    },
    {
      name: "Power Distribution",
      description: "Reliable power systems and backup solutions to keep your event running smoothly",
      icon: Zap,
    },
    {
      name: "Project Management",
      description: "Dedicated project managers ensuring seamless coordination and execution",
      icon: Users,
    },
  ]

  const applications = [
    "Festival Productions",
    "Corporate Events",
    "Concert Tours",
    "Trade Shows",
    "Outdoor Events",
    "Multi-Day Conferences",
  ]

  const features = [
    "Certified rigging professionals",
    "Multi-platform streaming",
    "Redundant power systems",
    "24/7 technical support",
    "Weather-resistant solutions",
    "Complete project coordination",
  ]

  return (
    <>
      <Header />
      <main className="pt-32">
        {/* Hero Section */}
        <section className="py-24 bg-black text-white relative overflow-hidden bg-[url('/images/section-background.png')] bg-cover bg-cente">
          <div className="absolute inset-0">
            <Image
              src="/images/rigging-setup.png"
              alt="Event Production Setup"
              fill
              className="object-cover filter grayscale opacity-30"
            />
            <div className="absolute inset-0 bg-black/70" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-sound360/20 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Settings className="w-10 h-10 text-sound360" />
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">Event Production</h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Complete event production services including rigging, trussing, livestreaming, and power solutions for
                seamless event execution.
              </p>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Complete Production Solutions</h2>
                  <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                    Our comprehensive event production services handle every technical aspect of your event, from
                    structural support to power distribution and live streaming capabilities.
                  </p>
                  <p className="text-gray-700 mb-8 leading-relaxed">
                    With certified professionals and state-of-the-art equipment, we ensure your event runs smoothly from
                    setup to breakdown, allowing you to focus on what matters most - your audience and message.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-sound360 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/rigging-setup.png"
                    alt="Professional Event Production Setup"
                    width={600}
                    height={450}
                    className="w-full h-full object-cover filter grayscale"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Production Services</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Our comprehensive production services cover every technical aspect needed for successful event
                  execution.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {services.map((service, index) => {
                  const Icon = service.icon
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                    >
                      <div className="bg-sound360 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-black mb-4">{service.name}</h3>
                      <p className="text-gray-600 leading-relaxed">{service.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Our Production Process</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  We follow a systematic approach to ensure every aspect of your event production is handled
                  professionally.
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-sound360">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">Planning</h3>
                  <p className="text-gray-600">
                    Detailed site surveys and technical planning to ensure optimal equipment placement and safety.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-sound360">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">Setup</h3>
                  <p className="text-gray-600">
                    Professional installation and rigging by certified technicians following strict safety protocols.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-sound360">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">Operation</h3>
                  <p className="text-gray-600">
                    On-site technical support throughout your event to ensure everything runs smoothly.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-sound360">4</span>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">Breakdown</h3>
                  <p className="text-gray-600">
                    Efficient and safe removal of all equipment, leaving your venue in pristine condition.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/event-crowd.png"
                    alt="Event Production"
                    width={600}
                    height={450}
                    className="w-full h-full object-cover filter grayscale"
                  />
                </div>
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Versatile Solutions</h2>
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    Our production services are designed to handle events of all sizes and complexities, from intimate
                    gatherings to large-scale productions.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {applications.map((application, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-sound360 rounded-full mr-3" />
                        <span className="text-gray-700">{application}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-black text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Complete Production Support</h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Let our experienced production team handle all the technical details while you focus on creating an
                unforgettable event experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-sound360 text-white hover:bg-sound360-dark px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    Get Production Quote
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-sound360 hover:text-black px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 bg-transparent"
                  >
                    View All Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
