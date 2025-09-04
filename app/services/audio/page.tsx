import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Volume2, Mic, Speaker, Headphones, Settings, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Professional Audio Services - Sound Systems & Equipment Hire | Sound360 Cape Town",
  description:
    "Professional audio equipment rental in Cape Town. Digital mixing consoles, line array systems, wireless microphones, and complete sound solutions for events of all sizes.",
  keywords: [
    "professional audio Cape Town",
    "sound system rental",
    "audio equipment hire",
    "digital mixing console",
    "wireless microphones",
    "line array speakers",
    "corporate audio",
    "wedding sound systems",
    "concert audio",
    "event sound rental",
  ].join(", "),
  openGraph: {
    title: "Professional Audio Services | Sound360 Cape Town",
    description: "Professional audio equipment rental in Cape Town. Complete sound solutions for events of all sizes.",
    url: "https://sound360.co.za/services/audio",
    siteName: "Sound360",
    images: [
      {
        url: "/images/audio.jpeg",
        width: 1200,
        height: 630,
        alt: "Professional Audio Equipment - Sound360",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Audio Services | Sound360 Cape Town",
    description: "Professional audio equipment rental in Cape Town. Complete sound solutions for events of all sizes.",
    images: ["/images/audio.jpeg"],
  },
  alternates: {
    canonical: "https://sound360.co.za/services/audio",
  },
}

export default function AudioPage() {
  const equipment = [
    {
      name: "Digital Mixing Consoles",
      description: "State-of-the-art digital mixing boards for precise audio control",
      icon: Settings,
    },
    {
      name: "Line Array Systems",
      description: "Professional speaker arrays for large venue coverage",
      icon: Speaker,
    },
    {
      name: "Wireless Microphones",
      description: "High-quality wireless mic systems for freedom of movement",
      icon: Mic,
    },
    {
      name: "In-Ear Monitoring",
      description: "Professional monitoring systems for performers",
      icon: Headphones,
    },
  ]

  const applications = [
    "Corporate Conferences",
    "Live Concerts",
    "Wedding Ceremonies",
    "Product Launches",
    "Awards Ceremonies",
    "Festival Main Stages",
  ]

  const features = [
    "24-bit/96kHz digital processing",
    "Redundant system backup",
    "Real-time frequency analysis",
    "Wireless coordination",
    "Multi-zone audio distribution",
    "Professional acoustic treatment",
  ]

  return (
    <>
      <Header />
      <main className="pt-32">
        {/* Hero Section */}
        <section className="py-24 bg-black text-white relative overflow-hidden bg-[url('/images/section-background.png')] bg-cover bg-cente">
          <div className="absolute inset-0">
            <Image
              src="/images/download (2).jpeg"
              alt="Professional Audio Console"
              fill
              className="object-cover filter grayscale opacity-30"
            />
            <div className="absolute inset-0 bg-black/70" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-sound360/20 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Volume2 className="w-10 h-10 text-sound360" />
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">Professional Audio</h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Crystal-clear sound systems and acoustic solutions that ensure every word and note is heard with perfect
                clarity, regardless of venue size or complexity.
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
                  <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Exceptional Audio Quality</h2>
                  <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                    Our professional audio services combine cutting-edge technology with expert engineering to deliver
                    pristine sound quality for any event type or venue size.
                  </p>
                  <p className="text-gray-700 mb-8 leading-relaxed">
                    From intimate boardroom presentations to large-scale outdoor festivals, we provide comprehensive
                    audio solutions that ensure your message is heard clearly by every audience member.
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
                    src="/images/download (2).jpeg"
                    alt="Professional Audio Setup"
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
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Professional Equipment</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  We use only the finest professional audio equipment from industry-leading manufacturers to ensure
                  exceptional sound quality.
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

        {/* Applications Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/event-crowd.png"
                    alt="Live Event Audio"
                    width={600}
                    height={450}
                    className="w-full h-full object-cover filter grayscale"
                  />
                </div>
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Perfect for Any Event</h2>
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    Our professional audio services are designed to meet the unique requirements of various event types
                    and venues.
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready for Perfect Audio?</h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Let our audio experts design a custom sound solution that ensures your event sounds as good as it looks.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-sound360 text-white hover:bg-sound360-dark px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    Get Audio Quote
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
