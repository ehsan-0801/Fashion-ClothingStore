'use client'

import { Button } from '@/components/ui/button'

export default function CampaignSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 p-8 md:p-16 border border-primary/20">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-accent opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary opacity-10 rounded-full blur-3xl"></div>

          {/* Content */}
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-block mb-6">
              <span className="px-4 py-2 rounded-full bg-accent/20 text-accent font-medium text-sm">
                বিশেষ অফার চলছে
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-4xl md:text-6xl font-serif text-foreground mb-4 text-balance">
              ঈদ স্পেশাল অফার
            </h2>

            {/* Discount Badge */}
            <div className="mb-8">
              <p className="text-6xl md:text-7xl font-bold text-accent mb-2">
                Flat 20% OFF
              </p>
              <p className="text-lg text-muted-foreground">
                সকল পণ্যে বিশেষ ছাড়
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              এই সীমিত সময়ের অফারে আপনার পছন্দের সব পণ্যে ২০% ছাড় পান। এখনই অর্ডার করুন এবং সুন্দর হয়ে উঠুন!
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8"
              >
                এখনই শপিং করুন
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/5 rounded-full px-8"
              >
                অফার বিস্তারিত
              </Button>
            </div>

            {/* Footer Text */}
            <p className="text-sm text-muted-foreground mt-8">
              অফার শেষ হওয়ার আগে অর্ডার করুন। সীমিত সময়ের জন্য উপলব্ধ।
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
