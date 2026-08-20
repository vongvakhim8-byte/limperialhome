"use client"

import { use, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Heart, MessageCircle, Phone } from "lucide-react"
import { LanguageProvider, useLanguage } from "@/lib/language-context"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getProductById } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"

function ProductDetailContent({ productId }: { productId: string }) {
  const { language, t } = useLanguage()
  const [selectedImage, setSelectedImage] = useState(0)
  const [isWishlisted, setIsWishlisted] = useState(false)

  const product = getProductById(productId)

  if (!product) {
    notFound()
  }

  return (
    <section className="py-12 lg:py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/products"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-gold transition-colors mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t("backToProducts")}
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square overflow-hidden rounded-sm bg-card">
              <Image
                src={product.images[selectedImage]}
                alt={product.name[language]}
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Thumbnail Gallery */}
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative w-20 h-20 overflow-hidden rounded-sm border-2 transition-colors ${
                      selectedImage === index ? "border-gold" : "border-transparent hover:border-border"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name[language]} view ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-widest text-gold mb-3">
              {t(product.category)}
            </span>
            <h1 className="text-3xl sm:text-4xl font-light mb-4">
              {product.name[language]}
            </h1>
            <p className="text-3xl font-medium text-foreground mb-6">
              ${product.price.toLocaleString()}
            </p>
            
            {/* Description */}
            <div className="mb-8">
              <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-3">
                {t("description")}
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                {product.description[language]}
              </p>
            </div>

            {/* Features */}
            <div className="mb-10">
              <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-3">
                {t("features")}
              </h3>
              <ul className="space-y-2">
                {product.features[language].map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-4 mt-auto">
              <div className="flex gap-3">
                <Button
                  asChild
                  size="lg"
                  className="flex-1 bg-[#25D366] hover:bg-[#20BA5A] text-white"
                >
                  <a
                    href={`https://wa.me/85512345678?text=Hi, I'm interested in ${product.name.en}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    {t("contactWhatsApp")}
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`px-4 ${isWishlisted ? "border-gold text-gold" : "border-border"}`}
                >
                  <Heart className={`h-5 w-5 ${isWishlisted ? "fill-gold" : ""}`} />
                </Button>
              </div>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-[#0088cc] text-[#0088cc] hover:bg-[#0088cc] hover:text-white"
              >
                <a
                  href={`https://t.me/limperial?text=Hi, I'm interested in ${product.name.en}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  {t("contactTelegram")}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-16 md:pt-20">
          <ProductDetailContent productId={id} />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
