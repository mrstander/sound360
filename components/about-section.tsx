import { Award, Users, Zap } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
              About 
              Sound360
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Cape Town's trusted experts in audio,lighting, and visual solutions - powering unforgettable events with adavnced technology and proven skill.
            </p>
          </div>

          {/* 3 Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 text-center">
              <div className="aspect-square w-24 h-24 bg-sound360 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-12 h-12 text-sky-600" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Seamless Experiences</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We Handle every detail so you can focus on enjoying the event.
              </p>
              
            </div>

            <div className="bg-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 text-center">
              <div className="aspect-square w-24 h-24 bg-sound360 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-12 h-12 text-sky-600" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Trusteded by Top Brands</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                From corporate events to live shoes, Sound360 is the partner behind successful productions across south africa.
              </p>
            
            </div>

            <div className="bg-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 text-center">
              <div className="aspect-square w-24 h-24 bg-sound360 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-12 h-12 text-sky-600" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Scalable Solutions</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Whether 50 Guests or 5000 we tailor our sound,lighting, and AV to fit your event perfectly.
              </p>
            
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
