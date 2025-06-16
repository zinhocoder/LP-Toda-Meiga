"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function StyleCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const maxIndex = 3 // 0-indexed, so 4 slides total

  const images = [
    {
      src: "/placeholder.svg?height=600&width=900",
      alt: "Mulher elegante usando pulseiras douradas com vestido de noite",
      caption: "Perfeito para ocasiões especiais",
    },
    {
      src: "/placeholder.svg?height=600&width=900",
      alt: "Mulher de negócios com pulseiras prateadas em ambiente de escritório",
      caption: "Elegância para o ambiente profissional",
    },
    {
      src: "/placeholder.svg?height=600&width=900",
      alt: "Mulher com estilo casual chique usando mix de pulseiras douradas e prateadas",
      caption: "Versatilidade para o dia a dia",
    },
    {
      src: "/placeholder.svg?height=600&width=900",
      alt: "Mulher na praia com pulseiras douradas delicadas",
      caption: "Leveza para momentos de lazer",
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === maxIndex ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? maxIndex : prevIndex - 1))
  }

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <div className="relative aspect-[16/9]">
                <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
              </div>
              <div className="bg-white p-4 text-center">
                <p className="text-gray-700">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-colors"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-colors"
        aria-label="Próximo slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="flex justify-center mt-4 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full ${currentIndex === index ? "bg-[#C8A657]" : "bg-gray-300"}`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
