'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Heart, Star, ShoppingBag, Zap } from 'lucide-react'
import { useState } from 'react'

const products = [
  {
    id: 1,
    name: 'Classic Elegance Dress',
    bangla: 'ক্লাসিক এলিগ্যান্স ড্রেস',
    price: 2500,
    originalPrice: 3500,
    image: '/product-1.jpg',
    rating: 4.8,
    reviews: 245,
    badge: 'নতুন',
    category: 'dresses',
  },
  {
    id: 2,
    name: 'Summer Collection Saree',
    bangla: 'গ্রীষ্মকালীন কালেকশন শাড়ি',
    price: 3200,
    originalPrice: 4500,
    image: '/product-2.jpg',
    rating: 4.9,
    reviews: 189,
    badge: 'বিক্রয়',
    category: 'sarees',
  },
  {
    id: 3,
    name: 'Modern Fusion Top',
    bangla: 'আধুনিক ফিউশন টপ',
    price: 1800,
    originalPrice: 2400,
    image: '/product-3.jpg',
    rating: 4.7,
    reviews: 156,
    badge: 'জনপ্রিয়',
    category: 'tops',
  },
  {
    id: 4,
    name: 'Casual Day Dress',
    bangla: 'ক্যাজুয়াল ডে ড্রেস',
    price: 2200,
    originalPrice: 3000,
    image: '/product-4.jpg',
    rating: 4.6,
    reviews: 234,
    badge: 'নতুন',
    category: 'dresses',
  },
  {
    id: 5,
    name: 'Premium Saree Collection',
    bangla: 'প্রিমিয়াম শাড়ি সংগ্রহ',
    price: 4200,
    originalPrice: 5800,
    image: '/product-1.jpg',
    rating: 4.9,
    reviews: 198,
    badge: 'সীমিত',
    category: 'sarees',
  },
  {
    id: 6,
    name: 'Elegant Blouse',
    bangla: 'মার্জিত ব্লাউজ',
    price: 1500,
    originalPrice: 2200,
    image: '/product-2.jpg',
    rating: 4.5,
    reviews: 142,
    badge: 'নতুন',
    category: 'tops',
  },
  {
    id: 7,
    name: 'Festival Special',
    bangla: 'উৎসব বিশেষ',
    price: 3800,
    originalPrice: 5200,
    image: '/product-3.jpg',
    rating: 4.8,
    reviews: 267,
    badge: 'বিক্রয়',
    category: 'traditional',
  },
  {
    id: 8,
    name: 'Everyday Comfort Dress',
    bangla: 'প্রতিদিনের আরামদায়ক ড্রেস',
    price: 1900,
    originalPrice: 2800,
    image: '/product-4.jpg',
    rating: 4.7,
    reviews: 203,
    badge: 'জনপ্রিয়',
    category: 'dresses',
  },
]

export default function ShopGrid() {
  const [wishlist, setWishlist] = useState<number[]>([])
  const [sortBy, setSortBy] = useState('featured')

  const toggleWishlist = (id: number) => {
    setWishlist(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    )
  }

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'rating':
        return b.rating - a.rating
      default:
        return 0
    }
  })

  const discount = (original: number, current: number) => {
    return Math.round(((original - current) / original) * 100)
  }

  return (
    <div className="space-y-8">
      {/* Shop Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-card p-4 rounded-xl border border-border">
        <div className="flex items-center gap-2">
          <Zap size={20} className="text-accent" />
          <span className="text-sm font-medium text-foreground">
            {products.length} পণ্য উপলব্ধ
          </span>
        </div>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="featured">বৈশিষ্ট্যযুক্ত</option>
          <option value="price-low">কম দাম প্রথম</option>
          <option value="price-high">বেশি দাম প্রথম</option>
          <option value="rating">সর্বোচ্চ রেটিং</option>
        </select>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {sortedProducts.map((product, index) => (
          <div
            key={product.id}
            className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
            style={{
              animation: `slideUp 0.6s ease-out ${index * 0.05}s both`,
            }}
          >
            {/* Product Image Container */}
            <div className="relative aspect-square bg-secondary overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Badge */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
                  {product.badge}
                </div>
                {discount(product.originalPrice, product.price) > 0 && (
                  <div className="bg-accent text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
                    -{discount(product.originalPrice, product.price)}%
                  </div>
                )}
              </div>

              {/* Heart Button */}
              <button
                onClick={() => toggleWishlist(product.id)}
                className="absolute bottom-4 right-4 z-20 p-3 rounded-full bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-primary-foreground shadow-lg"
              >
                <Heart
                  size={20}
                  className={wishlist.includes(product.id) ? 'fill-current' : ''}
                />
              </button>

              {/* Rating */}
              <div className="absolute top-4 right-4 z-20 flex items-center gap-1 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={
                        i < Math.floor(product.rating)
                          ? 'fill-accent text-accent'
                          : 'text-muted-foreground'
                      }
                    />
                  ))}
                </div>
                <span className="text-xs font-medium text-foreground ml-1">
                  {product.rating}
                </span>
              </div>
            </div>

            {/* Product Info */}
            <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
              {/* Name and Description */}
              <div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {product.bangla}
                </p>
                <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
                  <span>({product.reviews} পর্যালোচনা)</span>
                </div>
              </div>

              {/* Price */}
              <div className="flex items-end gap-2 pt-2">
                <div>
                  <p className="text-2xl font-bold text-primary">
                    ৳{product.price.toLocaleString('bn-BD')}
                  </p>
                  {product.originalPrice > product.price && (
                    <p className="text-sm text-muted-foreground line-through">
                      ৳{product.originalPrice.toLocaleString('bn-BD')}
                    </p>
                  )}
                </div>
              </div>

              {/* Button */}
              <Button
                className="w-full text-primary-foreground rounded-xl font-medium transition-all duration-300 bg-primary hover:bg-primary/90 flex items-center justify-center gap-2 group/btn"
                size="sm"
              >
                <ShoppingBag size={18} className="group-hover/btn:scale-110 transition-transform" />
                অর্ডার করুন
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="flex justify-center pt-8">
        <Button
          variant="outline"
          className="px-8 py-3 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
        >
          আরও পণ্য দেখুন
        </Button>
      </div>
    </div>
  )
}
