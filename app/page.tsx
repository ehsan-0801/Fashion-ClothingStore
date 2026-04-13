import Navbar from '@/components/navbar'
import HeroCarousel from '@/components/hero-carousel'
import FeaturedProducts from '@/components/featured-products'
import SocialProof from '@/components/social-proof'
import WhyChooseUs from '@/components/why-choose-us'
import HowToOrder from '@/components/how-to-order'
import CampaignSection from '@/components/campaign-section'
import CTASection from '@/components/cta-section'
import Footer from '@/components/footer'
import FloatingWhatsApp from '@/components/floating-whatsapp'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-background">
        <section id="home">
          <HeroCarousel />
        </section>
        <section id="products">
          <FeaturedProducts />
        </section>
        <SocialProof />
        <section id="about">
          <WhyChooseUs />
        </section>
        <HowToOrder />
        <CampaignSection />
        <section id="contact">
          <CTASection />
        </section>
        <Footer />
        <FloatingWhatsApp />
      </main>
    </>
  )
}
