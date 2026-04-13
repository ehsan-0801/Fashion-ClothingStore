'use client'

import { useEffect, useState } from 'react'

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show button after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  const whatsappNumber = '8801742787523'
  const message = 'আমি Nadia Fashion থেকে একটি পণ্য অর্ডার করতে আগ্রহী।'
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 animate-bounce"
      aria-label="Chat on WhatsApp"
    >
      <div className="w-14 h-14 md:w-16 md:h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center text-white text-2xl md:text-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110">
        💬
      </div>
      <div className="absolute -top-12 right-0 bg-foreground text-background px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg opacity-0 hover:opacity-100 transition-opacity pointer-events-none">
        WhatsApp এ চ্যাট করুন
      </div>
    </a>
  )
}
