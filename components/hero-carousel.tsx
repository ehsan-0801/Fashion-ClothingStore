'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react'

const slides = [
  {
    id: 1,
    title: 'আপনার স্টাইল, আপনার আত্মবিশ্বাস',
    subtitle: 'Premium Quality | Cash on Delivery Available',
    description: 'প্রিমিয়াম মানের ফ্যাশন পণ্য সাশ্রয়ী মূল্যে',
    image: '/hero-model.jpg',
    color: 'from-primary/10 to-accent/10',
  },
  {
    id: 2,
    title: 'গ্রীষ্মকালীন কালেকশন',
    subtitle: '৩০% পর্যন্ত ছাড় পাবেন এই সিজনে',
    description: 'আপনার প্রিয় ড্রেস এবং শাড়ি খুঁজে পান',
    image: '/hero-slide-2.jpg',
    color: 'from-accent/15 to-primary/5',
  },
  {
    id: 3,
    title: 'নতুন কালেকশন আসছে',
    subtitle: 'ট্রেন্ডি এবং আধুনিক ডিজাইন',
    description: 'দ্রুত ডেলিভারি এবং সহজ রিটার্ন নীতি',
    image: '/hero-slide-3.jpg',
    color: 'from-primary/5 to-accent/20',
  },
]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    // Always autoplay with infinite loop
    autoplayRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // 5 seconds per slide

    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current)
    }
  }, []) // Remove autoplay dependency to keep it always running

  const goToSlide = (index: number) => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      setCurrentSlide(index)
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      timeoutRef.current = setTimeout(() => setIsTransitioning(false), 700)
    }
  }

  const nextSlide = () => {
    setAutoplay(false)
    goToSlide((currentSlide + 1) % slides.length)
  }

  const prevSlide = () => {
    setAutoplay(false)
    goToSlide((currentSlide - 1 + slides.length) % slides.length)
  }

  const toggleAutoplay = () => {
    setAutoplay(!autoplay)
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      if (autoplayRef.current) clearInterval(autoplayRef.current)
    }
  }, [])

  return (
    <div
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Slides Container */}
      <div className="relative w-full h-screen max-w-7xl mx-auto px-8 md:px-16">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-700 ease-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Background gradient with image */}
            <div className="absolute inset-0 bg-linear-to-br from-background via-secondary to-background">
              <div className={`absolute inset-0 bg-linear-to-br ${slide.color} mix-blend-multiply`}></div>
            </div>

            {/* Decorative flowing elements matching logo style */}
            <div className="absolute top-10 right-0 w-96 h-96 bg-primary opacity-5 rounded-full blur-3xl mix-blend-screen"></div>
            <div className="absolute -bottom-32 left-0 w-full h-full bg-accent opacity-3 rounded-full blur-3xl mix-blend-screen"></div>

            {/* Content with padding */}
            <div className="relative z-10 h-full flex items-center px-6 md:px-12 py-12 md:py-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center w-full">
                {/* Left Content */}
                <div
                  className={`flex flex-col justify-center space-y-6 transition-all duration-700 ${
                    index === currentSlide
                      ? 'translate-x-0 opacity-100'
                      : 'translate-x-[-50px] opacity-0'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full w-fit border border-accent/20">
                      <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                      <span className="text-sm font-medium text-accent">নতুন কালেকশন</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground leading-tight text-balance">
                      {slide.title}
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground">
                      {slide.subtitle}
                    </p>
                    <p className="text-base text-muted-foreground hidden sm:block">
                      {slide.description}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 shadow-lg hover:shadow-xl transition-all"
                      asChild
                    >
                      <a href="#products">
                        অর্ডার করুন
                      </a>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary/5 rounded-full px-8"
                      asChild
                    >
                      <a
                        href="https://wa.me/8801742787523?text=আমি%20Nadia%20Fashion%20থেকে%20একটি%20পণ্য%20অর্ডার%20করতে%20আগ্রহী।"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        WhatsApp করুন
                      </a>
                    </Button>
                  </div>

                  <div className="flex items-center gap-4 pt-4">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="w-10 h-10 rounded-full bg-accent/20 border-2 border-background flex items-center justify-center"
                        >
                          <div className="text-sm font-medium text-accent">{i}</div>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      ৫০০০+ সন্তুষ্ট গ্রাহক
                    </p>
                  </div>
                </div>

                {/* Right Image */}
                <div
                  className={`relative h-96 md:h-full min-h-96 transition-all duration-700 ${
                    index === currentSlide
                      ? 'translate-x-0 opacity-100'
                      : 'translate-x-[50px] opacity-0'
                  }`}
                >
                  <div className="absolute inset-0 bg-linear-to-br from-accent/20 to-primary/20 rounded-3xl blur-2xl"></div>
                  <div className="relative h-full w-full rounded-3xl overflow-hidden bg-muted shadow-2xl">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-cover"
                      priority={index === currentSlide}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons - Inside carousel section */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 md:p-4 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-110 group"
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} className="group-hover:-translate-x-1 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 md:p-4 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-110 group"
        aria-label="Next slide"
      >
        <ChevronRight size={28} className="group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-background/40 backdrop-blur-md px-4 py-3 rounded-full border border-primary/20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? 'bg-primary w-10 h-3 shadow-lg'
                : 'bg-primary/40 hover:bg-primary/60 w-3 h-3'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter - Remove autoplay toggle */}
      <div className="absolute top-8 right-8 z-20">
        <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md shadow-lg">
          {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </div>
      </div>
    </div>
  )
}
