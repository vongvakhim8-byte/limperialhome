"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"

export function PromotionBanner() {
  const { t } = useLanguage()

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
          alt="Luxury interior"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/85" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block text-gold text-sm uppercase tracking-[0.3em] mb-4 animate-fade-up">
          {t("promoTitle")}
        </span>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-primary-foreground mb-6 animate-fade-up animation-delay-200">
          {t("promoSubtitle")}
        </h2>
        <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto mb-10 animate-fade-up animation-delay-400">
          Transform your space with our exclusive collection at unbeatable prices. Limited time only.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-gold text-primary hover:bg-gold-light px-10 animate-fade-up animation-delay-600"
        >
          <Link href="/products">
            {t("shopNow")}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
