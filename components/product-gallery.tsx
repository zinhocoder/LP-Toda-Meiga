"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Cormorant_Garamond } from "next/font/google"

const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] })

export default function ProductGallery() {
  const [activeTab, setActiveTab] = useState("gold")

  const images = {
    gold: ["/images/gold-collection-1.png", "/images/gold-collection-2.png"],
    silver: ["/images/silver-collection-1.png", "/images/silver-collection-2.png"],
  }

  return (
    <div className="space-y-12">
      <div className="flex justify-center space-x-6">
        <button
          onClick={() => setActiveTab("gold")}
          className={`px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 ${
            activeTab === "gold"
              ? "bg-gradient-to-r from-[#C8A657] to-[#D4B76A] text-white shadow-lg transform scale-105"
              : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-[#C8A657]/30"
          }`}
        >
          <span className={cormorant.className}>Coleção Ouro</span>
        </button>
        <button
          onClick={() => setActiveTab("silver")}
          className={`px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 ${
            activeTab === "silver"
              ? "bg-gradient-to-r from-gray-400 to-gray-500 text-white shadow-lg transform scale-105"
              : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-gray-400/30"
          }`}
        >
          <span className={cormorant.className}>Coleção Prata</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {images[activeTab as keyof typeof images].map((src, index) => (
          <motion.div
            key={`${activeTab}-${index}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="relative group"
          >
            {/* Golden Background Effects */}
            <div className="absolute inset-0 -m-6">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-500/30 via-yellow-400/20 to-yellow-600/30 rounded-full blur-3xl animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute top-1/4 right-1/4 w-3/4 h-3/4 bg-gradient-to-tl from-yellow-500/25 via-transparent to-yellow-400/25 rounded-full blur-2xl animate-pulse delay-500 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute bottom-1/4 left-1/4 w-2/3 h-2/3 bg-gradient-to-tr from-yellow-600/20 via-yellow-500/15 to-transparent rounded-full blur-xl animate-pulse delay-1000 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>

            {/* Main Image Container */}
            <div className="aspect-[4/5] relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 border-2 border-yellow-500/20 group-hover:border-yellow-500/40">
              <Image
                src={src || "/placeholder.svg"}
                alt={`${activeTab === "gold" ? "Mulher empoderada com pulseiras douradas" : "Mulher empoderada com pulseiras prateadas"} ${index + 1}`}
                fill
                className="object-cover hover:scale-110 transition-transform duration-700"
              />

              {/* Golden Overlay Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-yellow-600/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Floating Badge */}
              <div className="absolute top-6 right-6 bg-gradient-to-r from-yellow-500/90 to-yellow-600/90 backdrop-blur-sm text-black px-4 py-2 rounded-full text-sm font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                {activeTab === "gold" ? "Ouro 18k" : "Prata Refinada"}
              </div>
            </div>

            {/* Floating Golden Particles Effect */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-60 transition-all duration-1000 animate-pulse delay-200"></div>
              <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-yellow-500 rounded-full opacity-0 group-hover:opacity-80 transition-all duration-1000 animate-pulse delay-700"></div>
              <div className="absolute bottom-1/3 left-2/3 w-1.5 h-1.5 bg-yellow-300 rounded-full opacity-0 group-hover:opacity-70 transition-all duration-1000 animate-pulse delay-1200"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
