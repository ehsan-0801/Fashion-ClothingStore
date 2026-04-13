'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary to-background overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-accent opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary opacity-5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground leading-tight text-balance">
                আপনার স্টাইল, আপনার আত্মবিশ্বাস
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Premium Quality | Cash on Delivery Available
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8"
              >
                অর্ডার করুন
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/5 rounded-full px-8"
              >
                WhatsApp করুন
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
          <div className="relative h-96 md:h-full min-h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl blur-2xl"></div>
            <div className="relative h-full w-full rounded-3xl overflow-hidden bg-muted">
              <Image
                src="/hero-model.jpg"
                alt="Beautiful model wearing elegant dress"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
