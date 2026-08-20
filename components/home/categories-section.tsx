"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const categoryData = [
  {
    id: "sofa",
    nameKey: "sofa",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
    count: 12
  },
  {
    id: "cabinet",
    nameKey: "cabinet",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&q=80",
    count: 8
  },
  {
    id: "tvStand",
    nameKey: "tvStand",
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=600&q=80",
    count: 6
  },
  {
    id: "lighting",
    nameKey: "lighting",
    image: "https://images.unsplash.com/photo-1543198126-a8ad8e47fb22?w=600&q=80",
    count: 15
  }
]

export function CategoriesSection() {
  const { t } = useLanguage()

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-light mb-4">{t("categories")}</h2>
          <div className="w-20 h-px bg-gold mx-auto" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoryData.map((category, index) => (
            <Link
              key={category.id}
              href={`/products?category=${category.id}`}
              className="group relative overflow-hidden rounded-sm aspect-[3/4] animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Image
                src={category.image}
                alt={t(category.nameKey)}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
              
              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <span className="text-xs text-gold uppercase tracking-widest mb-2">
                  {category.count} {t("products").toLowerCase()}
                </span>
                <h3 className="text-xl font-medium text-primary-foreground mb-3">
                  {t(category.nameKey)}
                </h3>
                <span className="inline-flex items-center text-sm text-primary-foreground/80 group-hover:text-gold transition-colors">
                  {t("viewAll")}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
