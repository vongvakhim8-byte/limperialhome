"use client"

import { Suspense } from "react"
import { LanguageProvider } from "@/lib/language-context"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductsGrid } from "@/components/products/products-grid"

export default function ProductsPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-16 md:pt-20">
          <Suspense fallback={<ProductsLoadingSkeleton />}>
            <ProductsGrid />
          </Suspense>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

function ProductsLoadingSkeleton() {
  return (
    <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="h-8 w-48 bg-muted rounded mb-8 animate-pulse" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="aspect-square bg-muted rounded mb-4" />
            <div className="h-4 w-20 bg-muted rounded mb-2" />
            <div className="h-5 w-40 bg-muted rounded mb-2" />
            <div className="h-4 w-24 bg-muted rounded" />
          </div>
        ))}
      </div>
    </div>
  )
}
