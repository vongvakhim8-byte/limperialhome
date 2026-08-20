"use client"

import { createContext, useContext, useState, ReactNode } from "react"

type Language = "en" | "km"

interface Translations {
  [key: string]: {
    en: string
    km: string
  }
}

export const translations: Translations = {
  // Navigation
  home: { en: "Home", km: "ទំព័រដើម" },
  products: { en: "Products", km: "ផលិតផល" },
  about: { en: "About Us", km: "អំពីយើង" },
  contact: { en: "Contact", km: "ទំនាក់ទំនង" },
  
  // Hero
  heroTitle: { en: "Timeless Luxury, Crafted to Perfection", km: "ភាពប្រណីតអចិន្ត្រៃយ៍ រចនាដោយភាពល្អឥតខ្ចោះ" },
  heroSubtitle: { en: "Discover our exquisite collection of premium furniture and lighting, designed to transform your living spaces into masterpieces.", km: "រកឃើញបណ្តុំគ្រឿងសង្ហារិមនិងពិដានដ៏ប្រណីតរបស់យើង ដែលរចនាឡើងដើម្បីផ្លាស់ប្តូរកន្លែងរស់នៅរបស់អ្នកទៅជាស្នាដៃសិល្បៈ។" },
  exploreCollection: { en: "Explore Collection", km: "ស្វែងរកបណ្តុំ" },
  viewCatalog: { en: "View Catalog", km: "មើលកាតាឡុក" },
  
  // Categories
  categories: { en: "Our Categories", km: "ប្រភេទរបស់យើង" },
  sofa: { en: "Sofas", km: "សាឡុង" },
  cabinet: { en: "Cabinets", km: "ទូ" },
  tvStand: { en: "TV Stands", km: "ទូទូរទស្សន៍" },
  lighting: { en: "Lighting", km: "ភ្លើង" },
  viewAll: { en: "View All", km: "មើលទាំងអស់" },
  
  // Promotion
  promoTitle: { en: "Exclusive Sale", km: "ការលក់ពិសេស" },
  promoSubtitle: { en: "Up to 70% Off Selected Items", km: "បញ្ចុះតម្លៃរហូតដល់ ៧០% លើទំនិញដែលបានជ្រើសរើស" },
  shopNow: { en: "Shop Now", km: "ទិញឥឡូវ" },
  
  // Trust
  trustTitle: { en: "Why Choose Limperial", km: "ហេតុអ្វីជ្រើសរើស Limperial" },
  premiumQuality: { en: "Premium Quality", km: "គុណភាពខ្ពស់" },
  premiumQualityDesc: { en: "Crafted with the finest materials for lasting elegance", km: "រចនាដោយសម្ភារៈល្អបំផុតសម្រាប់ភាពប្រណីតយូរអង្វែង" },
  expertCraftsmanship: { en: "Expert Craftsmanship", km: "ជំនាញវិជ្ជមាន" },
  expertCraftsmanshipDesc: { en: "Each piece is meticulously handcrafted by skilled artisans", km: "គ្រប់ដុំត្រូវបានរចនាដោយជាងជំនាញដោយប្រុងប្រយ័ត្ន" },
  exclusiveDesign: { en: "Exclusive Design", km: "ការរចនាផ្តាច់មុខ" },
  exclusiveDesignDesc: { en: "Unique pieces that define sophisticated living", km: "ដុំពិសេសដែលកំណត់ការរស់នៅប្រណីត" },
  
  // Products
  allProducts: { en: "All Products", km: "ផលិតផលទាំងអស់" },
  filterBy: { en: "Filter by", km: "ត្រងដោយ" },
  sortBy: { en: "Sort by", km: "តម្រៀបដោយ" },
  newest: { en: "Newest", km: "ថ្មីបំផុត" },
  priceLowHigh: { en: "Price: Low to High", km: "តម្លៃ: ទាបទៅខ្ពស់" },
  priceHighLow: { en: "Price: High to Low", km: "តម្លៃ: ខ្ពស់ទៅទាប" },
  
  // Product Detail
  description: { en: "Description", km: "ការពណ៌នា" },
  features: { en: "Features", km: "លក្ខណៈពិសេស" },
  contactWhatsApp: { en: "Contact via WhatsApp", km: "ទាក់ទងតាម WhatsApp" },
  contactTelegram: { en: "Contact via Telegram", km: "ទាក់ទងតាម Telegram" },
  
  // About
  aboutTitle: { en: "Our Story", km: "រឿងរ៉ាវរបស់យើង" },
  aboutDesc: { en: "Limperial Luxury was founded with a singular vision: to bring the finest furniture and lighting to Cambodia. We believe that every home deserves pieces that combine exceptional craftsmanship with timeless design.", km: "Limperial Luxury ត្រូវបានបង្កើតឡើងដោយចក្ខុវិស័យតែមួយ៖ ដើម្បីនាំមកនូវគ្រឿងសង្ហារិមនិងភ្លើងល្អបំផុតមកកម្ពុជា។ យើងជឿជាក់ថាផ្ទះគ្រប់ផ្ទះសមនឹងមានដុំដែលរួមបញ្ចូលជំនាញដ៏អស្ចារ្យជាមួយការរចនាអចិន្ត្រៃយ៍។" },
  ourMission: { en: "Our Mission", km: "បេសកកម្មរបស់យើង" },
  ourMissionDesc: { en: "To curate and deliver premium furniture that transforms houses into homes, creating spaces where memories are made and luxury is lived.", km: "ដើម្បីរៀបចំនិងផ្តល់គ្រឿងសង្ហារិមដ៏ប្រណីតដែលផ្លាស់ប្តូរផ្ទះទៅជាផ្ទះសម្រាប់រស់នៅ បង្កើតកន្លែងដែលការចងចាំត្រូវបានធ្វើឡើង ហើយភាពប្រណីតត្រូវបានរស់នៅ។" },
  ourValues: { en: "Our Values", km: "តម្លៃរបស់យើង" },
  quality: { en: "Quality", km: "គុណភាព" },
  elegance: { en: "Elegance", km: "ភាពឆើតឆាយ" },
  integrity: { en: "Integrity", km: "សុចរិតភាព" },
  
  // Contact
  contactTitle: { en: "Get in Touch", km: "ទាក់ទងមកយើង" },
  contactDesc: { en: "We'd love to hear from you. Reach out to us through any of these channels.", km: "យើងចង់ស្តាប់ពីអ្នក។ ទាក់ទងមកយើងតាមបណ្តាញណាមួយខាងក្រោម។" },
  phone: { en: "Phone", km: "ទូរស័ព្ទ" },
  address: { en: "Address", km: "អាសយដ្ឋាន" },
  addressValue: { en: "Phnom Penh, Cambodia", km: "ភ្នំពេញ កម្ពុជា" },
  followUs: { en: "Follow Us", km: "តាមដានយើង" },
  
  // Footer
  copyright: { en: "© 2024 Limperial Luxury. All rights reserved.", km: "© ២០២៤ Limperial Luxury។ រក្សាសិទ្ធិគ្រប់យ៉ាង។" },
  quickLinks: { en: "Quick Links", km: "តំណរហ័ស" },
  customerService: { en: "Customer Service", km: "សេវាកម្មអតិថិជន" },
  privacyPolicy: { en: "Privacy Policy", km: "គោលការណ៍ឯកជន" },
  termsOfService: { en: "Terms of Service", km: "លក្ខខណ្ឌនៃសេវាកម្ម" },
  
  // Blog
  blog: { en: "Blog", km: "ប្លុក" },
  blogTitle: { en: "Our Blog", km: "ប្លុករបស់យើង" },
  blogSubtitle: { en: "Discover design tips, trends, and inspiration for your home", km: "រកឃើញគន្លឹះរចនា និន្នាការ និងការបំផុសគំនិតសម្រាប់ផ្ទះរបស់អ្នក" },
  readMore: { en: "Read More", km: "អានបន្ថែម" },
  recentPosts: { en: "Recent Posts", km: "អត្ថបទថ្មីៗ" },
  relatedPosts: { en: "Related Posts", km: "អត្ថបទពាក់ព័ន្ធ" },
  backToBlog: { en: "Back to Blog", km: "ត្រឡប់ទៅប្លុក" },
  publishedOn: { en: "Published on", km: "បោះពុម្ពនៅ" },
  
  // Common
  learnMore: { en: "Learn More", km: "ស្វែងយល់បន្ថែម" },
  backToProducts: { en: "Back to Products", km: "ត្រឡប់ទៅផលិតផល" },
  price: { en: "Price", km: "តម្លៃ" },
  addToWishlist: { en: "Add to Wishlist", km: "បន្ថែមទៅបញ្ជីប្រាថ���នា" },
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")
  
  const t = (key: string): string => {
    return translations[key]?.[language] || key
  }
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
