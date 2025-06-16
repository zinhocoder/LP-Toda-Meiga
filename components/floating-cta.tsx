"use client"

import { useState, useEffect } from "react"
import { ShoppingBag, X } from "lucide-react"

export default function FloatingCta() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isMinimized ? (
        <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-500/30 shadow-2xl rounded-2xl p-6 max-w-sm">
          <button
            onClick={() => setIsMinimized(true)}
            className="absolute -top-2 -right-2 bg-gray-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-gray-700 transition-colors"
          >
            <X className="h-3 w-3" />
          </button>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
            <span className="font-semibold text-white">Oferta Especial</span>
          </div>

          <p className="text-gray-300 mb-4">
            <strong className="text-white">Kit Rainha</strong> com 24% de desconto
            <br />
            <span className="text-xl font-bold text-yellow-400">R$ 189,00</span>
          </p>

          <a
            href="#kits"
            className="block w-full text-center py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-lg font-bold hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300"
          >
            Ver Oferta
          </a>
        </div>
      ) : (
        <button
          onClick={() => setIsMinimized(false)}
          className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black p-4 rounded-full shadow-2xl hover:scale-110 transition-transform"
        >
          <ShoppingBag className="h-6 w-6" />
        </button>
      )}
    </div>
  )
}
