import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Lightbulb, Zap, Palette, Eye, Settings, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function LightingPage() {
  const equipment = [
    {
      name: "LED Moving Lights",
      description: "Intelligent moving head fixtures with full color mixing capabilities",
      icon: Lightbulb,
    },
    {
      name: "Intelligent Fixtures",
      description: "Programmable lighting with advanced effects and control",
      icon: Settings,
    },
    {
      name: "Haze & Fog Effects",
      description: "Atmospheric effects to enhance lighting visibility and drama",
      icon: Eye,
    },
    {
      name: "DMX Control Systems",
      description: "Professional lighting control consoles and software",
      icon: Zap,
    },
  ]

  const applications = [
    "Concert Productions",
    "Corporate Events",
    "Wedding Receptions",
    "Fashion Shows",
    "Theatrical Productions",
    "Architectural Lighting",
  ]

  const features = [
    "Full RGB+W color mixing",
    "Wireless DMX control",
    "Automated programming",
    "Real-time visualization",
    "Energy-efficient LED technology",
    "Weather-resistant fixtures",
  ]

  return (
    <>
      <Header />
      <main className="pt-32">
        {/* Hero Section */}
        <section className="py-24 bg-black text-white relative overflow-hidden bg-[url('/images/section-background.png')] bg-cover bg-cente">
          <div className="absolute inset-0">
            <Image
              src="/images/stage-lighting.png"
              alt="Professional Stage Lighting"
              fill
              className="object-cover filter grayscale opacity-30"
            />
            <div className="absolute inset-0 bg-black/70" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-sound360/20 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Lightbulb className="w-10 h-10 text-sound360" />
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">Stage Lighting</h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Dynamic lighting design that transforms your event with spectacular visual effects, creating the perfect
                atmosphere for any occasion.
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
                  <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Illuminate Your Vision</h2>
                  <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                    Our professional lighting services combine artistic vision with technical expertise to create
                    stunning visual experiences that captivate and inspire your audience.
                  </p>
                  <p className="text-gray-700 mb-8 leading-relaxed">
                    From subtle ambient lighting to dramatic stage productions, we design and execute lighting solutions
                    that enhance your event's atmosphere and support your creative vision.
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
                    src="/images/stage-lighting.png"
                    alt="Professional Lighting Setup"
                    width={600}
                    height={450}
                    className="w-full h-full object-cover filter grayscale"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Equipment Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Advanced Lighting Technology</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  We utilize the latest in LED technology and intelligent lighting systems to create stunning visual
                  effects and perfect ambiance.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {equipment.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                    >
                      <div className="bg-sound360 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-black mb-4">{item.name}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Design Process Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Our Design Process</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  We work closely with you to understand your vision and create lighting designs that perfectly
                  complement your event.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Palette className="w-8 h-8 text-sound360" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">1. Consultation</h3>
                  <p className="text-gray-600">
                    We discuss your vision, venue requirements, and creative goals to understand your lighting needs.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Eye className="w-8 h-8 text-sound360" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">2. Design</h3>
                  <p className="text-gray-600">
                    Our designers create detailed lighting plans and visualizations to bring your vision to life.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Zap className="w-8 h-8 text-sound360" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">3. Execution</h3>
                  <p className="text-gray-600">
                    Professional installation and programming ensure flawless execution of your lighting design.
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
                    alt="Event Lighting"
                    width={600}
                    height={450}
                    className="w-full h-full object-cover filter grayscale"
                  />
                </div>
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Perfect for Every Occasion</h2>
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    Our lighting solutions are tailored to enhance the unique atmosphere and requirements of your
                    specific event type.
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Light Up Your Event</h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Transform your venue with professional lighting design that creates the perfect atmosphere for your
                event.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-sound360 text-white hover:bg-sound360-dark px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    Get Lighting Quote
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
