"use client"

import { useState, useEffect } from "react"

export default function SocialProof() {
  const [salesCount, setSalesCount] = useState(127)
  const [clientsCount, setClientsCount] = useState(5247)

  useEffect(() => {
    // Simular vendas em tempo real
    const salesTimer = setInterval(() => {
      setSalesCount((prev) => prev + Math.floor(Math.random() * 3) + 1)
    }, 45000) // A cada 45 segundos

    // Simular crescimento de clientes
    const clientsTimer = setInterval(() => {
      setClientsCount((prev) => prev + Math.floor(Math.random() * 2) + 1)
    }, 120000) // A cada 2 minutos

    return () => {
      clearInterval(salesTimer)
      clearInterval(clientsTimer)
    }
  }, [])

  const stats = [
    { number: clientsCount.toLocaleString(), label: "Clientes Satisfeitas" },
    { number: "4.9", label: "Avaliação Média" },
    { number: salesCount.toString(), label: "Vendas nas Últimas 24h" },
    { number: "98%", label: "Recomendariam" },
  ]

  return (
    <section className="py-16 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold">
                {index === 2 ? (
                  <span className="inline-flex items-center gap-1">
                    {stat.number}
                    <span className="w-2 h-2 bg-black rounded-full animate-pulse"></span>
                  </span>
                ) : (
                  stat.number
                )}
              </div>
              <div className="text-sm font-semibold opacity-80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
