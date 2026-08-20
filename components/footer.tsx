"use client"

import Link from "next/link"
import { Facebook, Instagram, MessageCircle, Phone } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-semibold tracking-wider">
                <span className="text-gold">L</span>IMPERIAL
              </span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              {t("heroSubtitle").slice(0, 100)}...
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm uppercase tracking-widest mb-6 text-gold">
              {t("quickLinks")}
            </h4>
            <nav className="flex flex-col gap-3">
              <Link href="/" className="text-sm text-primary-foreground/70 hover:text-gold transition-colors">
                {t("home")}
              </Link>
              <Link href="/products" className="text-sm text-primary-foreground/70 hover:text-gold transition-colors">
                {t("products")}
              </Link>
              <Link href="/about" className="text-sm text-primary-foreground/70 hover:text-gold transition-colors">
                {t("about")}
              </Link>
              <Link href="/contact" className="text-sm text-primary-foreground/70 hover:text-gold transition-colors">
                {t("contact")}
              </Link>
            </nav>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-sm uppercase tracking-widest mb-6 text-gold">
              {t("customerService")}
            </h4>
            <nav className="flex flex-col gap-3">
              <Link href="#" className="text-sm text-primary-foreground/70 hover:text-gold transition-colors">
                {t("privacyPolicy")}
              </Link>
              <Link href="#" className="text-sm text-primary-foreground/70 hover:text-gold transition-colors">
                {t("termsOfService")}
              </Link>
            </nav>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-sm uppercase tracking-widest mb-6 text-gold">
              {t("followUs")}
            </h4>
            <div className="flex gap-4 mb-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://t.me/limperial"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
                aria-label="Telegram"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
            <a
              href="tel:+85512345678"
              className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-gold transition-colors"
            >
              <Phone className="h-4 w-4" />
              +855 12 345 678
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <p className="text-center text-sm text-primary-foreground/50">
            {t("copyright")}
          </p>
        </div>
      </div>
    </footer>
  )
}
