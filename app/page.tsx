"use client"

import { LanguageProvider } from "@/lib/language-context"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { CategoriesSection } from "@/components/home/categories-section"
import { FeaturedProducts } from "@/components/home/featured-products"
import { PromotionBanner } from "@/components/home/promotion-banner"
import { TrustSection } from "@/components/home/trust-section"
import { ChatbotWidget } from "@/components/chatbot-widget"

export default function HomePage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-16 md:pt-20">
          <HeroSection />
          <CategoriesSection />
          <FeaturedProducts />
          <PromotionBanner />
          <TrustSection />
        </main>
        <Footer />
        <ChatbotWidget />
      </div>
    </LanguageProvider>
  )
}
