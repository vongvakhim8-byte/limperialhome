"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { products } from "@/lib/products"
import { Button } from "@/components/ui/button"

export function FeaturedProducts() {
  const { language, t } = useLanguage()
  const featuredProducts = products.slice(0, 4)

  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-light mb-4">Featured Collection</h2>
            <div className="w-20 h-px bg-gold" />
          </div>
          <Button asChild variant="ghost" className="mt-4 sm:mt-0 text-foreground hover:text-gold">
            <Link href="/products">
              {t("viewAll")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="group animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-square overflow-hidden rounded-sm bg-card mb-4">
                <Image
                  src={product.image}
                  alt={product.name[language]}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
              </div>
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-gold">
                  {t(product.category)}
                </span>
                <h3 className="font-medium text-foreground group-hover:text-gold transition-colors">
                  {product.name[language]}
                </h3>
                <p className="text-muted-foreground">
                  ${product.price.toLocaleString()}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
