"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const images = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jun%2015%2C%202025%2C%2009_40_25%20PM-rsEqvgbJm2eqNFNnuy7tghCpbOI8zK.png",
      alt: "Mulher elegante usando pulseiras douradas Toda Meiga",
      badge: "Ouro 18k",
    },
    {
      src: "/images/gold-collection-1.png",
      alt: "Mulher empoderada com pulseiras douradas",
      badge: "Coleção Premium",
    },
    {
      src: "/images/gold-collection-2.png",
      alt: "Elegância em pulseiras douradas",
      badge: "Luxo Acessível",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
    }, 4000)

    return () => clearInterval(timer)
  }, [images.length])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  return (
    <div className="relative">
      {/* Golden Background Effects for Mobile */}
      <div className="absolute inset-0 -m-6">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-500/30 via-yellow-400/20 to-yellow-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 right-1/4 w-3/4 h-3/4 bg-gradient-to-tl from-yellow-500/25 via-transparent to-yellow-400/25 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/4 w-2/3 h-2/3 bg-gradient-to-tr from-yellow-600/20 via-yellow-500/15 to-transparent rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      {/* Carousel Container */}
      <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-yellow-500/20 to-transparent border-2 border-yellow-500/40 backdrop-blur-sm shadow-2xl shadow-yellow-500/20">
        <div
          className="flex transition-transform duration-700 ease-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0 relative">
              <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />

              {/* Golden Overlay Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-yellow-600/10 mix-blend-overlay"></div>

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                {image.badge}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 backdrop-blur-sm rounded-full p-2 shadow-md hover:bg-black/70 transition-colors"
          aria-label="Imagem anterior"
        >
          <ChevronLeft className="h-5 w-5 text-white" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 backdrop-blur-sm rounded-full p-2 shadow-md hover:bg-black/70 transition-colors"
          aria-label="Próxima imagem"
        >
          <ChevronRight className="h-5 w-5 text-white" />
        </button>

        {/* Discount Badge */}
        <div className="absolute top-6 right-6 bg-black/80 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold border border-yellow-500/30">
          Até 25% OFF
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-4 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentIndex === index ? "bg-yellow-400 w-6" : "bg-gray-400"
            }`}
            aria-label={`Ir para imagem ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
