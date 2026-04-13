'use client'

import { Button } from '@/components/ui/button'

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Main Heading */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground text-balance">
              এখনই অর্ডার করুন
            </h2>
            <p className="text-lg text-muted-foreground">
              আপনার স্টাইলিশ পোশাক এখন মাত্র একটি ক্লিক দূরে। আমরা নিশ্চিত করি সর্বোচ্চ মানের পণ্য এবং দ্রুততম সেবা।
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 min-w-48"
              asChild
            >
              <a
                href="https://wa.me/8801742787523?text=আমি%20Nadia%20Fashion%20থেকে%20একটি%20পণ্য%20অর্ডার%20করতে%20আগ্রহী।"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp এ যোগাযোগ করুন
              </a>
            </Button>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 min-w-48"
              asChild
            >
              <a href="tel:+8801742787523">
                এখনই কল করুন
              </a>
            </Button>
          </div>

          {/* Contact Info */}
          <div className="border-t border-b border-border py-6 space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">
                আমাদের সাথে যোগাযোগ করুন
              </p>
              <a 
                href="tel:+8801742787523"
                className="text-xl font-semibold text-foreground hover:text-primary transition-colors"
              >
                +880 1742-787523
              </a>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">
                ইমেইল পাঠান
              </p>
              <a 
                href="mailto:mithilaakterkalpana@gmail.com"
                className="text-xl font-semibold text-foreground hover:text-primary transition-colors"
              >
                mithilaakterkalpana@gmail.com
              </a>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
            <div className="text-center">
              <p className="text-2xl mb-2">✓</p>
              <p className="text-sm text-muted-foreground">
                সর্বোচ্চ মানের পণ্য নিশ্চিত
              </p>
            </div>
            <div className="text-center">
              <p className="text-2xl mb-2">🚚</p>
              <p className="text-sm text-muted-foreground">
                দ্রুত এবং নিরাপদ ডেলিভারি
              </p>
            </div>
            <div className="text-center">
              <p className="text-2xl mb-2">💳</p>
              <p className="text-sm text-muted-foreground">
                নিরাপদ পেমেন্ট অপশন
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
