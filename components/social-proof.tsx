'use client'

const reviews = [
  {
    id: 1,
    name: 'রিনা আক্তার',
    review: 'ড্রেসটা অনেক সুন্দর ছিল, কোয়ালিটি অসাধারণ। সবাইকে রেকমেন্ড করছি।',
    rating: 5,
    avatar: '👩',
  },
  {
    id: 2,
    name: 'ফাতিমা বেগম',
    review: 'ডেলিভারি খুব দ্রুত ছিল এবং পণ্যের প্যাকেজিং অসাধারণ।',
    rating: 5,
    avatar: '👩‍🦰',
  },
  {
    id: 3,
    name: 'সায়মা খান',
    review: 'দাম অনুযায়ী কোয়ালিটি বেস্ট। ঈদে অর্ডার করেছিলাম, সবাই পছন্দ করেছে।',
    rating: 5,
    avatar: '👩‍🦱',
  },
]

const stats = [
  { label: 'সন্তুষ্ট গ্রাহক', value: '৫০০০+' },
  { label: 'বছর ধরে সেবা', value: '3+' },
  { label: 'প্রিমিয়াম কালেকশন', value: '১০০+' },
  { label: 'দ্রুত ডেলিভারি', value: '২৪ ঘণ্টা' },
]

export default function SocialProof() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-24">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </p>
              <p className="text-sm md:text-base text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-border my-12 md:my-16"></div>

        {/* Reviews Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4 text-balance">
            আমাদের গ্রাহকরা কী বলেন
          </h2>
          <p className="text-muted-foreground text-lg">
            বাস্তব গ্রাহক, বাস্তব প্রতিক্রিয়া
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-card rounded-2xl p-6 md:p-8 border border-border hover:shadow-lg transition-shadow duration-300"
            >
              {/* Avatar and Name */}
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">{review.avatar}</div>
                <div>
                  <p className="font-semibold text-foreground">
                    {review.name}
                  </p>
                  <div className="flex gap-1 text-yellow-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Review Text */}
              <p className="text-foreground leading-relaxed">
                "{review.review}"
              </p>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-12 md:mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-background border border-border">
            <span className="text-xl">✓</span>
            <span className="text-sm font-medium text-foreground">
              Trusted Since 2021
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
