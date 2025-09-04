import { Volume2, Lightbulb, Monitor, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function ServicesSection() {
  const services = [
    {
      name: "Professional Audio",
      icon: Volume2,
      description: "Crystal-clear sound systems, mixing consoles, and acoustic solutions for any venue size.",
      features: ["Digital Console Mixing", "High quality Audio", "Wireless Microphones", "Recording & Playback"],
      image: "/images/audio.jpeg",
      href: "/services/audio",
    },
    {
      name: "Stage Lighting",
      icon: Lightbulb,
      description: "Dynamic lighting design that transforms your event with spectacular visual effects.",
      features: ["LED Moving Lights", "Intelligent Fixtures", "Haze & Fog Effects", "DMX Control Systems"],
      image: "/images/concert-crowd-lighting.png",
      href: "/services/lighting",
    },
    {
      name: "Visual Solutions",
      icon: Monitor,
      description: "High-resolution LED displays and projection systems for impactful visual presentations.",
      features: ["LED Video Walls", "Projection Mapping", "Live Camera Systems", "Content Management"],
      image: "/images/visual-solutions.png",
      href: "/services/visual",
    },
    {
      name: "Event Production",
      icon: Settings,
      description: "Complete event production including rigging, trussing, livestreaming, and power solutions.",
      features: ["Rigging & Trussing", "Livestreaming", "Power Distribution", "Project Management"],
      image: "/images/wedding-venue-projection.png",
      href: "/services/production",
    },
    {
      name: "Dance Floor",
      icon: Settings,
      description:
        "Create the perfect space with premium flooring solutions to elevate your exhibition or dance the night away, often enhanced by lighting and effects to create the desired atmosphere.",
      features: [""],
      image: "/images/visual-solutions.png",
      href: "/services/dancefloor",
    },
  ]

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">Our Services</h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive event production services, tailored to your vision and powered by professional-grade
              equipment and expert execution.
            </p>
          </div>

          {/* Services Grid - First 4 services */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.slice(0, 4).map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
                >
                  {/* Service Image */}
                  <div className="aspect-[16/9] relative overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
                    <div className="absolute top-4 left-4">
                      <div className="bg-sound360/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center">
                        <Icon className="w-8 h-8 text-sound360" />
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    {/* Content */}
                    <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-gray-700 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-sound360 rounded-full mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Link href={service.href}>
                      <Button
                        variant="outline"
                        className="group-hover:bg-sound360 group-hover:text-white group-hover:border-sound360 transition-all duration-300 bg-transparent border-gray-300 w-full"
                      >
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>

          {/* 5th Service - Full Width Layout on Desktop, Card Layout on Mobile */}
          {services.length > 4 && (
            <>
              {/* Desktop Layout - Full Width */}
              <div className="hidden lg:block bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
                <div className="grid lg:grid-cols-2 gap-0 items-center">
                  {/* Text Content - Left Side */}
                  <div className="p-12 text-center lg:text-left flex flex-col justify-center">
                    <div className="bg-sound360 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto lg:mx-0">
                      <Settings className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-black mb-6">{services[4].name}</h3>
                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">{services[4].description}</p>

                    {/* Features */}
                    {services[4].features[0] && (
                      <ul className="space-y-3 mb-8">
                        {services[4].features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center text-gray-600 justify-center lg:justify-start"
                          >
                            <div className="w-2 h-2 bg-sound360 rounded-full mr-3" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* CTA Button - Under Text */}
                    <div className="mt-auto">
                      <Link href={services[4].href}>
                        <Button
                        variant="outline"
                        className="group-hover:bg-sound360 group-hover:text-white group-hover:border-sound360 transition-all duration-300 bg-transparent border-gray-300 w-full"
                      >
                        Learn More
                      </Button>
                      </Link>
                    </div>
                  </div>

                  {/* Image - Right Side */}
                  <div className="aspect-[4/3] lg:aspect-auto lg:h-full relative overflow-hidden">
                    <Image
                      src={services[4].image || "/placeholder.svg"}
                      alt={services[4].name}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* Mobile Layout - Same as Other Services */}
              <div className="lg:hidden">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                    {/* Service Image */}
                    <div className="aspect-[16/9] relative overflow-hidden">
                      <Image
                        src={services[4].image || "/placeholder.svg"}
                        alt={services[4].name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
                      <div className="absolute top-4 left-4">
                        <div className="bg-sound360/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center">
                          <Settings className="w-8 h-8 text-sound360" />
                        </div>
                      </div>
                    </div>

                    <div className="p-8">
                      {/* Content */}
                      <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-gray-700 transition-colors">
                        {services[4].name}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{services[4].description}</p>

                      {/* Features */}
                      {services[4].features[0] && (
                        <ul className="space-y-2 mb-6">
                          {services[4].features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                              <div className="w-2 h-2 bg-sound360 rounded-full mr-3" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* CTA */}
                      <Link href={services[4].href}>
                        <Button
                          variant="outline"
                          className="group-hover:bg-sound360 group-hover:text-white group-hover:border-sound360 transition-all duration-300 bg-transparent border-gray-300 w-full"
                        >
                          Learn More
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
