'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Heart, Star, Zap } from 'lucide-react'
import { useState } from 'react'

const products = [
  {
    id: 1,
    name: 'Classic Elegance Dress',
    bangla: 'ক্লাসিক এলিগ্যান্স ড্রেস',
    price: '2,500',
    image: '/product-1.jpg',
  },
  {
    id: 2,
    name: 'Summer Collection Saree',
    bangla: 'গ্রীষ্মকালীন কালেকশন শাড়ি',
    price: '3,200',
    image: '/product-2.jpg',
  },
  {
    id: 3,
    name: 'Modern Fusion Top',
    bangla: 'আধুনিক ফিউশন টপ',
    price: '1,800',
    image: '/product-3.jpg',
  },
  {
    id: 4,
    name: 'Casual Day Dress',
    bangla: 'ক্যাজুয়াল ডে ড্রেস',
    price: '2,200',
    image: '/product-4.jpg',
  },
]

export default function FeaturedProducts() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-4 border border-accent/20">
            <Zap size={16} className="text-accent" />
            <span className="text-sm font-medium text-accent">নতুন আগমন</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4 text-balance">
            নতুন কালেকশন
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            আমাদের সর্বশেষ এবং সবচেয়ে জনপ্রিয় ফ্যাশন কালেকশন দেখুন
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group h-full rounded-3xl overflow-hidden bg-card border border-border hover:border-primary/50 hover:shadow-2xl transition-all duration-500 flex flex-col"
              style={{
                animation: `slideUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Product Image Container */}
              <div className="relative aspect-square bg-muted overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <div className="bg-accent text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    নতুন
                  </div>
                </div>

                {/* Heart Button */}
                <button className="absolute bottom-4 right-4 z-20 p-3 rounded-full bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-accent hover:text-primary-foreground">
                  <Heart size={20} />
                </button>

                {/* Star Rating */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-1 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={i < 4 ? 'fill-accent text-accent' : 'text-muted-foreground'}
                    />
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    {product.bangla}
                  </p>
                </div>

                <div className="flex items-end justify-between pt-2">
                  <div>
                    <p className="text-2xl font-bold text-primary">
                      ৳{product.price}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">সহ সব ট্যাক্স</p>
                  </div>
                </div>

                <Button
                  className={`w-full text-primary-foreground rounded-xl font-medium transition-all duration-300 ${
                    hoveredId === product.id
                      ? 'bg-primary hover:bg-primary/90 shadow-lg'
                      : 'bg-primary/80 hover:bg-primary'
                  }`}
                  size="sm"
                >
                  অর্ডার করুন
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/5 rounded-full px-8"
          >
            সব পণ্য দেখুন
          </Button>
        </div>
      </div>
    </section>
  )
}
