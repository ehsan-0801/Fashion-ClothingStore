'use client'

import { useEffect, useRef, useState } from 'react'

const steps = [
  {
    id: 1,
    number: '১',
    title: 'পছন্দের ড্রেস সিলেক্ট করুন',
    description: 'আমাদের কালেকশন থেকে আপনার পছন্দের পোশাক খুঁজে নিন',
    icon: '👗',
  },
  {
    id: 2,
    number: '২',
    title: 'অর্ডার বাটনে ক্লিক করুন',
    description: 'পণ্য নির্বাচন করে অর্ডার বাটনে ক্লিক করুন',
    icon: '🖱️',
  },
  {
    id: 3,
    number: '३',
    title: 'আপনার তথ্য দিন',
    description: 'আপনার নাম, ঠিকানা এবং যোগাযোগ নম্বর প্রদান করুন',
    icon: '📋',
  },
  {
    id: 4,
    number: '४',
    title: 'বাসায় ডেলিভারি নিন',
    description: '২৪ ঘণ্টার মধ্যে আপনার দোরগোড়ায় পণ্য পৌঁছে যাবে',
    icon: '🚚',
  },
]

export default function HowToOrder() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    cardRefs.current.forEach((card, index) => {
      if (!card) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleCards((prev) => {
                if (!prev.includes(index)) {
                  return [...prev, index]
                }
                return prev
              })
            }
          })
        },
        { threshold: 0.2 }
      )

      observer.observe(card)
      observers.push(observer)
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4 text-balance">
            কিভাবে অর্ডার করবেন
          </h2>
          <p className="text-muted-foreground text-lg">
            মাত্র ৪টি সহজ ধাপে আপনার পছন্দের পণ্য অর্ডার করুন
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
            {steps.map((step, index) => {
              const isVisible = visibleCards.includes(index)

              return (
                <div
                  key={step.id}
                  ref={(el) => { cardRefs.current[index] = el }}
                  className="relative"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible
                      ? 'translateY(0) scale(1)'
                      : 'translateY(50px) scale(0.9)',
                    transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
                  }}
                >
                  {/* Step Card */}
                  <div className="bg-card rounded-2xl p-8 border border-border h-full text-center hover:shadow-lg transition-shadow duration-300 relative overflow-hidden">
                    {/* Dark Pink background animation */}
                    <div
                      className="absolute inset-0 bg-pink-700/50"
                      style={{
                        transform: isVisible ? 'translateX(0)' : 'translateX(-100%)',
                        transition: 'transform 1s ease-out 0.3s',
                      }}
                    />

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Step Number Circle */}
                      <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                        {step.number}
                      </div>

                      {/* Icon */}
                      <div className="text-4xl mb-4">{step.icon}</div>

                      {/* Content */}
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Connector Arrow (hidden on mobile) */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                      <div className="text-2xl text-primary">→</div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 md:mt-16">
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            কোনো প্রশ্ন আছে? আমাদের WhatsApp এ যোগাযোগ করুন এবং তাৎক্ষণিক সহায়তা পান।
          </p>
        </div>
      </div>
    </section>
  )
}
