import Navbar from '@/components/navbar'
import ShopGrid from '@/components/shop-grid'
import ShopFilters from '@/components/shop-filters'
import Footer from '@/components/footer'
import FloatingWhatsApp from '@/components/floating-whatsapp'

export const metadata = {
  title: 'Shop - Nadia Fashion',
  description: 'Browse our collection of premium fashion items for women',
}

export default function ShopPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Shop Header */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-serif text-foreground text-balance">
                আমাদের সংগ্রহ
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                প্রিমিয়াম মানের ফ্যাশন আইটেম দেখুন এবং আপনার প্রিয় পণ্য খুঁজে পান
              </p>
            </div>
          </div>
        </section>

        {/* Shop Content */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <ShopFilters />
            </div>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              <ShopGrid />
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
