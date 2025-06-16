"use client"

import { useState, useEffect } from "react"

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 47,
    minutes: 23,
    seconds: 45,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex justify-center items-center gap-2 text-xl md:text-2xl font-bold">
      <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 min-w-[80px] text-center border border-white/30">
        <div className="text-2xl md:text-3xl font-black">{String(timeLeft.hours).padStart(2, "0")}</div>
        <div className="text-xs opacity-75 font-normal mt-1">HORAS</div>
      </div>
      <div className="text-3xl font-black animate-pulse">:</div>
      <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 min-w-[80px] text-center border border-white/30">
        <div className="text-2xl md:text-3xl font-black">{String(timeLeft.minutes).padStart(2, "0")}</div>
        <div className="text-xs opacity-75 font-normal mt-1">MIN</div>
      </div>
      <div className="text-3xl font-black animate-pulse">:</div>
      <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 min-w-[80px] text-center border border-white/30">
        <div className="text-2xl md:text-3xl font-black">{String(timeLeft.seconds).padStart(2, "0")}</div>
        <div className="text-xs opacity-75 font-normal mt-1">SEG</div>
      </div>
    </div>
  )
}
