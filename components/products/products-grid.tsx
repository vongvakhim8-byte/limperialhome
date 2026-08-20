"use client"

import { useState, useMemo } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { products, categories } from "@/lib/products"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type SortOption = "newest" | "price-low" | "price-high"

export function ProductsGrid() {
  const { language, t } = useLanguage()
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get("category")

  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam || "all")
  const [sortBy, setSortBy] = useState<SortOption>("newest")

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = selectedCategory === "all"
      ? products
      : products.filter(p => p.category === selectedCategory)

    switch (sortBy) {
      case "price-low":
        return [...filtered].sort((a, b) => a.price - b.price)
      case "price-high":
        return [...filtered].sort((a, b) => b.price - a.price)
      default:
        return filtered
    }
  }, [selectedCategory, sortBy])

  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4">{t("allProducts")}</h1>
          <div className="w-20 h-px bg-gold mx-auto" />
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12 pb-8 border-b border-border">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedCategory === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory("all")}
              className={selectedCategory === "all" ? "bg-primary text-primary-foreground" : "border-border hover:border-gold hover:text-gold"}
            >
              All
            </Button>
            {categories.map(cat => (
              <Button
                key={cat.id}
                variant={selectedCategory === cat.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(cat.id)}
                className={selectedCategory === cat.id ? "bg-primary text-primary-foreground" : "border-border hover:border-gold hover:text-gold"}
              >
                {cat.name[language]}
              </Button>
            ))}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">{t("sortBy")}:</span>
            <Select value={sortBy} onValueChange={(val) => setSortBy(val as SortOption)}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">{t("newest")}</SelectItem>
                <SelectItem value="price-low">{t("priceLowHigh")}</SelectItem>
                <SelectItem value="price-high">{t("priceHighLow")}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAndSortedProducts.map((product, index) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="group animate-fade-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="relative aspect-square overflow-hidden rounded-sm bg-card mb-4">
                <Image
                  src={product.image}
                  alt={product.name[language]}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
                
                {/* Quick View Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-primary text-primary-foreground px-6 py-2 text-sm uppercase tracking-wider">
                    View Details
                  </span>
                </div>
              </div>
              
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-gold">
                  {t(product.category)}
                </span>
                <h3 className="font-medium text-foreground group-hover:text-gold transition-colors">
                  {product.name[language]}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {product.description[language].slice(0, 80)}...
                </p>
                <p className="text-lg font-medium text-foreground">
                  ${product.price.toLocaleString()}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredAndSortedProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground">No products found in this category.</p>
          </div>
        )}
      </div>
    </section>
  )
}
