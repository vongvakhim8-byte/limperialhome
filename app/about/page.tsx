"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, Gem, Heart, Shield } from "lucide-react"
import { LanguageProvider, useLanguage } from "@/lib/language-context"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

function AboutContent() {
  const { t } = useLanguage()

  const values = [
    { icon: Gem, label: t("quality") },
    { icon: Heart, label: t("elegance") },
    { icon: Shield, label: t("integrity") },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1920&q=80"
            alt="Luxury craftsmanship"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-primary-foreground mb-6 animate-fade-up">
            {t("aboutTitle")}
          </h1>
          <div className="w-20 h-px bg-gold mx-auto" />
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-gold text-sm uppercase tracking-widest mb-4 block">
                Our Beginning
              </span>
              <h2 className="text-3xl sm:text-4xl font-light mb-6">
                A Legacy of Luxury
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t("aboutDesc")}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our journey began with a passion for beautiful design and a commitment to bringing world-class furniture to Cambodia. 
                Today, we continue to curate collections that reflect the finest in craftsmanship and style.
              </p>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/products">
                  {t("exploreCollection")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="order-1 lg:order-2 relative aspect-[4/5] overflow-hidden rounded-sm">
              <Image
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80"
                alt="Luxury interior design"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                alt="Luxury home"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-gold text-sm uppercase tracking-widest mb-4 block">
                {t("ourMission")}
              </span>
              <h2 className="text-3xl sm:text-4xl font-light mb-6">
                Transforming Spaces
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t("ourMissionDesc")}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every piece in our collection is thoughtfully selected to ensure it meets our exacting standards of quality, 
                design excellence, and enduring value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold text-sm uppercase tracking-widest mb-4 block">
              {t("ourValues")}
            </span>
            <h2 className="text-3xl sm:text-4xl font-light mb-4">
              What We Stand For
            </h2>
            <div className="w-20 h-px bg-gold mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value, index) => (
              <div
                key={value.label}
                className="text-center animate-fade-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full border border-gold mb-6">
                  <value.icon className="h-8 w-8 text-gold" />
                </div>
                <h3 className="text-2xl font-light">{value.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-light text-primary-foreground mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-primary-foreground/70 mb-10">
            Visit our showroom or contact us to discover how Limperial can elevate your home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gold text-primary hover:bg-gold-light px-8">
              <Link href="/products">{t("shopNow")}</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8">
              <Link href="/contact">{t("contact")}</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

export default function AboutPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-16 md:pt-20">
          <AboutContent />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
