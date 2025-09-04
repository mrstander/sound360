import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Monitor, Camera, Projector, Tv, Settings, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function VisualPage() {
  const equipment = [
    {
      name: "LED Video Walls",
      description: "High-resolution modular LED displays for stunning visual impact",
      icon: Tv,
    },
    {
      name: "Projection Mapping",
      description: "3D projection technology that transforms any surface",
      icon: Projector,
    },
    {
      name: "Live Camera Systems",
      description: "Multi-camera setups with professional switching capabilities",
      icon: Camera,
    },
    {
      name: "Content Management",
      description: "Professional media servers and content distribution systems",
      icon: Settings,
    },
  ]

  const applications = [
    "Corporate Presentations",
    "Product Launches",
    "Trade Show Displays",
    "Concert Visuals",
    "Architectural Projection",
    "Interactive Installations",
  ]

  const features = [
    "4K and 8K resolution support",
    "Seamless video wall configurations",
    "Real-time content switching",
    "Interactive touch capabilities",
    "Wireless content sharing",
    "Professional color calibration",
  ]

  return (
    <>
      <Header />
      <main className="pt-32">
        {/* Hero Section */}
        <section className="py-24 bg-black text-white relative overflow-hidden bg-[url('/images/section-background.png')] bg-cover bg-cente">
          <div className="absolute inset-0">
            <Image
              src="/images/led-wall.png"
              alt="LED Video Wall Display"
              fill
              className="object-cover filter grayscale opacity-30"
            />
            <div className="absolute inset-0 bg-black/70" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-sound360/20 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Monitor className="w-10 h-10 text-sound360" />
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">Visual Solutions</h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                High-resolution LED displays and projection systems that create impactful visual presentations and
                immersive brand experiences.
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
                  <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Stunning Visual Impact</h2>
                  <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                    Our visual solutions combine cutting-edge display technology with creative content management to
                    deliver breathtaking visual experiences that engage and captivate your audience.
                  </p>
                  <p className="text-gray-700 mb-8 leading-relaxed">
                    From crystal-clear LED video walls to immersive projection mapping, we provide comprehensive visual
                    solutions that transform any space into a dynamic, engaging environment.
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
                    src="/images/led-wall.png"
                    alt="Professional Visual Display Setup"
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
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Advanced Display Technology</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  We utilize the latest in display technology and content management systems to create stunning visual
                  experiences.
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

        {/* Technology Showcase */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Cutting-Edge Technology</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Our visual solutions leverage the latest technology to deliver exceptional image quality and seamless
                  performance.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Tv className="w-8 h-8 text-sound360" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">Ultra-High Resolution</h3>
                  <p className="text-gray-600">
                    Support for 4K and 8K content with pixel-perfect clarity and vibrant color reproduction.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Camera className="w-8 h-8 text-sound360" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">Live Production</h3>
                  <p className="text-gray-600">
                    Multi-camera systems with real-time switching and live streaming capabilities for dynamic content.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Projector className="w-8 h-8 text-sound360" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">Projection Mapping</h3>
                  <p className="text-gray-600">
                    Transform any surface into a dynamic display with precise 3D projection mapping technology.
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
                    alt="Visual Display at Event"
                    width={600}
                    height={450}
                    className="w-full h-full object-cover filter grayscale"
                  />
                </div>
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Perfect for Every Application</h2>
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    Our visual solutions are designed to meet the unique requirements of various event types and
                    presentation needs.
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Bring Your Vision to Life</h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Create stunning visual experiences that captivate your audience and elevate your event to new heights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-sound360 text-white hover:bg-sound360-dark px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    Get Visual Quote
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
