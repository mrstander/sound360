"use client"

import { useState } from "react"
import { MessageCircle, X } from "lucide-react"

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false)

  // Sound360's WhatsApp number (replace with actual number)
  const whatsappNumber = "27671114362" // Format: country code + number without +

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hi Sound360! I'm interested in your event production services. Could you please provide more information?",
    )
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <>
      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          {/* Chat Preview Bubble */}
          {isOpen && (
            <div className="absolute bottom-16 right-0 mb-2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-fade-in">
              {/* Header */}
              <div className="bg-[#25D366] text-white p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Sound360</h3>
                    <p className="text-xs opacity-90">Typically replies instantly</p>
                  </div>
                </div>
                <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Message Content */}
              <div className="p-4 space-y-4">
                <div className="bg-gray-100 rounded-2xl rounded-tl-sm p-3 max-w-[85%]">
                  <p className="text-sm text-gray-800">👋 Hi there! Welcome to Sound360!</p>
                </div>
                <div className="bg-gray-100 rounded-2xl rounded-tl-sm p-3 max-w-[85%]">
                  <p className="text-sm text-gray-800">
                    We're here to help with all your event production needs - from professional audio and lighting to
                    complete event management.
                  </p>
                </div>
                <div className="bg-gray-100 rounded-2xl rounded-tl-sm p-3 max-w-[85%]">
                  <p className="text-sm text-gray-800">How can we make your event unforgettable? 🎵✨</p>
                </div>

                {/* CTA Button */}
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-[#25D366] text-white py-3 px-4 rounded-xl font-medium hover:bg-[#20B954] transition-colors flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Start Chat on WhatsApp</span>
                </button>

                {/* Quick Options */}
                <div className="space-y-2">
                  <p className="text-xs text-gray-500 font-medium">Quick Questions:</p>
                  <div className="space-y-1">
                    {[
                      "💰 Get a quote",
                      "🎵 Audio services",
                      "💡 Lighting design",
                      "📺 Visual solutions",
                      "🎪 Event production",
                    ].map((option, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          const message = encodeURIComponent(`Hi Sound360! I'd like to know more about: ${option}`)
                          const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`
                          window.open(whatsappUrl, "_blank")
                        }}
                        className="w-full text-left text-sm text-gray-600 hover:text-sound360 hover:bg-gray-50 p-2 rounded-lg transition-colors"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Main WhatsApp Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-[#25D366] text-white w-14 h-14 rounded-full shadow-2xl hover:bg-[#20B954] transition-all duration-300 hover:scale-110 flex items-center justify-center group relative"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="w-7 h-7" />

            {/* Pulse Animation */}
            <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></div>

            {/* Notification Badge */}
            {!isOpen && (
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                1
              </div>
            )}
          </button>
        </div>
      </div>
    </>
  )
}
