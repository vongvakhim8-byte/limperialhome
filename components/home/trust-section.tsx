"use client"

import { Award, Gem, Shield } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function TrustSection() {
  const { t } = useLanguage()

  const trustItems = [
    {
      icon: Gem,
      titleKey: "premiumQuality",
      descKey: "premiumQualityDesc"
    },
    {
      icon: Award,
      titleKey: "expertCraftsmanship",
      descKey: "expertCraftsmanshipDesc"
    },
    {
      icon: Shield,
      titleKey: "exclusiveDesign",
      descKey: "exclusiveDesignDesc"
    }
  ]

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-light mb-4">{t("trustTitle")}</h2>
          <div className="w-20 h-px bg-gold mx-auto" />
        </div>

        {/* Trust Items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {trustItems.map((item, index) => (
            <div
              key={item.titleKey}
              className="text-center animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-gold mb-6">
                <item.icon className="h-7 w-7 text-gold" />
              </div>
              <h3 className="text-xl font-medium mb-3">{t(item.titleKey)}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {t(item.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
