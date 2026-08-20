"use client"

import Link from "next/link"
import { Facebook, Instagram, MapPin, MessageCircle, Phone } from "lucide-react"
import { LanguageProvider, useLanguage } from "@/lib/language-context"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

function ContactContent() {
  const { t } = useLanguage()

  const contactMethods = [
    {
      icon: Phone,
      label: t("phone"),
      value: "+855 12 345 678",
      href: "tel:+85512345678",
      color: "text-foreground"
    },
    {
      icon: MessageCircle,
      label: "Telegram",
      value: "@LimperialLuxury",
      href: "https://t.me/limperial",
      color: "text-[#0088cc]"
    },
    {
      icon: Facebook,
      label: "Facebook",
      value: "Limperial Luxury",
      href: "https://facebook.com/limperial",
      color: "text-[#1877F2]"
    }
  ]

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/limperial", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com/limperial", label: "Instagram" },
    { icon: MessageCircle, href: "https://t.me/limperial", label: "Telegram" },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="py-24 lg:py-32 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6 animate-fade-up">
            {t("contactTitle")}
          </h1>
          <div className="w-20 h-px bg-gold mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up animation-delay-200">
            {t("contactDesc")}
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <a
                key={method.label}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group bg-card border border-border rounded-sm p-8 text-center hover:border-gold transition-colors animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full border border-border group-hover:border-gold transition-colors mb-6 ${method.color}`}>
                  <method.icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-medium mb-2">{method.label}</h3>
                <p className="text-muted-foreground group-hover:text-gold transition-colors">
                  {method.value}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gold text-sm uppercase tracking-widest mb-4 block">
                {t("address")}
              </span>
              <h2 className="text-3xl sm:text-4xl font-light mb-6">
                Visit Our Showroom
              </h2>
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="text-foreground mb-1">Limperial Luxury Showroom</p>
                  <p className="text-muted-foreground">
                    Street 271, Sangkat Toul Tum Poung 2<br />
                    Khan Chamkarmon, Phnom Penh<br />
                    Cambodia
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground mb-8">
                <strong>Opening Hours:</strong><br />
                Monday - Saturday: 9:00 AM - 7:00 PM<br />
                Sunday: 10:00 AM - 5:00 PM
              </p>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <a
                  href="https://maps.google.com/?q=Phnom+Penh+Cambodia"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin className="mr-2 h-4 w-4" />
                  Get Directions
                </a>
              </Button>
            </div>
            
            {/* Map Embed */}
            <div className="relative aspect-square lg:aspect-[4/3] rounded-sm overflow-hidden bg-muted">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250152.02837959654!2d104.7548573765625!3d11.556350599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109513dc76a6be3%3A0x9c010ee85ab525bb!2sPhnom%20Penh%2C%20Cambodia!5e0!3m2!1sen!2s!4v1699000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Limperial Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-light mb-8">{t("followUs")}</h2>
          <div className="flex justify-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full border border-border flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
                aria-label={social.label}
              >
                <social.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-light text-primary-foreground mb-6">
            Need Immediate Assistance?
          </h2>
          <p className="text-primary-foreground/70 mb-10">
            Our team is ready to help you find the perfect piece for your home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#20BA5A] text-white px-8">
              <a href="https://wa.me/85512345678" target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-4 w-4" />
                WhatsApp Now
              </a>
            </Button>
            <Button asChild size="lg" className="bg-[#0088cc] hover:bg-[#006699] text-white px-8">
              <a href="https://t.me/limperial" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />
                Telegram
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

export default function ContactPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-16 md:pt-20">
          <ContactContent />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
