'use client'

const features = [
  {
    id: 1,
    title: 'Premium Quality',
    bangla: 'প্রিমিয়াম কোয়ালিটি',
    description: 'সর্বোচ্চ মানের ফ্যাব্রিক এবং ডিজাইন নিশ্চিত করি',
    icon: '✨',
  },
  {
    id: 2,
    title: 'Trendy Collection',
    bangla: 'ট্রেন্ডি কালেকশন',
    description: 'সর্বশেষ ফ্যাশন ট্রেন্ড অনুযায়ী ডিজাইন করা পণ্য',
    icon: '👗',
  },
  {
    id: 3,
    title: 'Fast Delivery',
    bangla: 'দ্রুত ডেলিভারি',
    description: '২৪ ঘণ্টার মধ্যে আপনার দোরগোড়ায় পৌঁছে যায়',
    icon: '🚚',
  },
  {
    id: 4,
    title: 'Cash on Delivery',
    bangla: 'নগদ প্রদানে অর্থ প্রদান',
    description: 'নিরাপদ এবং সুবিধাজনক পেমেন্ট অপশন',
    icon: '💳',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4 text-balance">
            কেন আমাদের বেছে নিবেন
          </h2>
          <p className="text-muted-foreground text-lg">
            আমরা আপনার স্টাইলকে অগ্রাধিকার দিই
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group rounded-2xl bg-card p-8 border border-border hover:border-accent hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {feature.bangla}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="mt-12 md:mt-16 text-center">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            আমরা শুধু পণ্য বিক্রয় করি না, আমরা আপনার আত্মবিশ্বাসে বিশ্বাস করি এবং প্রতিটি গ্রাহকের সন্তুষ্টি আমাদের লক্ষ্য।
          </p>
        </div>
      </div>
    </section>
  )
}
