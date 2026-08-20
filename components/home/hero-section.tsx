"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-[90vh] flex items-center bg-secondary overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80"
          alt="Luxury living room"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight mb-6 animate-fade-up text-balance">
            {t("heroTitle")}
          </h1>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed animate-fade-up animation-delay-200 text-pretty">
            {t("heroSubtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animation-delay-400">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">
              <Link href="/products">
                {t("exploreCollection")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-gold text-foreground hover:bg-gold hover:text-primary-foreground px-8">
              <Link href="/about">
                {t("learnMore")}
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
