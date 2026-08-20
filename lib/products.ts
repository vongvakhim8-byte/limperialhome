export interface Product {
  id: string
  name: {
    en: string
    km: string
  }
  category: "sofa" | "cabinet" | "tvStand" | "lighting"
  price: number
  description: {
    en: string
    km: string
  }
  features: {
    en: string[]
    km: string[]
  }
  image: string
  images: string[]
}

export const products: Product[] = [
  {
    id: "elegance-sofa",
    name: {
      en: "Elegance Velvet Sofa",
      km: "សាឡុង Elegance Velvet"
    },
    category: "sofa",
    price: 2499,
    description: {
      en: "A masterpiece of comfort and style, the Elegance Velvet Sofa features premium Italian velvet upholstery with gold-finished legs. Perfect for sophisticated living rooms.",
      km: "ស្នាដៃនៃភាពផាសុកភាពនិងរចនាប័ទ្ម សាឡុង Elegance Velvet មានការបិទជ្រុលវេលវេតអ៊ីតាលីដ៏ល្អបំផុតជាមួយជើងមានការបញ្ចប់មាស។ ល្អឥតខ្ចោះសម្រាប់បន្ទប់ទទួលភ្ញៀវប្រណីត។"
    },
    features: {
      en: ["Italian velvet upholstery", "Gold-finished metal legs", "High-density foam cushions", "Dimensions: 240cm x 95cm x 85cm"],
      km: ["ការបិទជ្រុលវេលវេតអ៊ីតាលី", "ជើងលោហៈមានការបញ្ចប់មាស", "ខ្នើយផូមដង់ស៊ីតេខ្ពស់", "វិមាត្រ: ២៤០សម x ៩៥សម x ៨៥សម"]
    },
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=80",
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&q=80"
    ]
  },
  {
    id: "monarch-sofa",
    name: {
      en: "Monarch Leather Sofa",
      km: "សាឡុងស្បែក Monarch"
    },
    category: "sofa",
    price: 3299,
    description: {
      en: "The Monarch Leather Sofa embodies luxury with its full-grain Italian leather and hand-stitched details. A statement piece for the discerning homeowner.",
      km: "សាឡុងស្បែក Monarch បង្ហាញភាពប្រណីតជាមួយស្បែកអ៊ីតាលីពេញគុណភាពនិងព័ត៌មានលម្អិតដែលដេរដោយដៃ។ ដុំសម្រាប់ម្ចាស់ផ្ទះដែលប្រុងប្រយ័ត្ន។"
    },
    features: {
      en: ["Full-grain Italian leather", "Hand-stitched details", "Solid oak frame", "Dimensions: 260cm x 100cm x 90cm"],
      km: ["ស្បែកអ៊ីតាលីពេញគុណភាព", "ព័ត៌មានលម្អិតដេរដោយដៃ", "ស៊ុមឈើអូកដោះស្រាយ", "វិមាត្រ: ២៦០សម x ១០០សម x ៩០សម"]
    },
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=80",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80"
    ]
  },
  {
    id: "aria-cabinet",
    name: {
      en: "Aria Display Cabinet",
      km: "ទូបង្ហាញ Aria"
    },
    category: "cabinet",
    price: 1899,
    description: {
      en: "The Aria Display Cabinet combines functionality with elegance. Features tempered glass shelves and LED lighting to showcase your treasures.",
      km: "ទូបង្ហាញ Aria រួមបញ្ចូលមុខងារជាមួយភាពឆើតឆាយ។ មានធ្នើរកញ្ចក់ tempered និងភ្លើង LED ដើម្បីបង្ហាញរបស់មានតម្លៃរបស់អ្នក។"
    },
    features: {
      en: ["Tempered glass doors", "Built-in LED lighting", "Adjustable shelves", "Dimensions: 120cm x 40cm x 200cm"],
      km: ["ទ្វារកញ្ចក់ tempered", "ភ្លើង LED ដែលភ្ជាប់មកជាមួយ", "ធ្នើរអាចកែតម្រូវបាន", "វិមាត្រ: ១២០សម x ៤០សម x ២០០សម"]
    },
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80"
    ]
  },
  {
    id: "imperial-cabinet",
    name: {
      en: "Imperial Storage Cabinet",
      km: "ទូផ្ទុក Imperial"
    },
    category: "cabinet",
    price: 1599,
    description: {
      en: "A stunning storage solution with brass hardware and walnut veneer finish. The Imperial Cabinet offers both beauty and practicality.",
      km: "ដំណោះស្រាយផ្ទុកដ៏អស្ចារ្យជាមួយផ្នែករឹងលង់ហ្សំនិងការបញ្ចប់ veneer walnut។ ទូ Imperial ផ្តល់ភាពស្រស់ស្អាតនិងការប្រើប្រាស់ជាក់ស្តែង។"
    },
    features: {
      en: ["Walnut veneer finish", "Brass hardware", "Soft-close doors", "Dimensions: 150cm x 45cm x 180cm"],
      km: ["ការបញ្ចប់ veneer walnut", "ផ្នែករឹងលង់ហ្សំ", "ទ្វារបិទទន់", "វិមាត្រ: ១៥០សម x ៤៥សម x ១៨០សម"]
    },
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
    ]
  },
  {
    id: "luxe-tv-stand",
    name: {
      en: "Luxe Media Console",
      km: "ទូមេឌៀ Luxe"
    },
    category: "tvStand",
    price: 1299,
    description: {
      en: "The Luxe Media Console features a minimalist design with hidden cable management and a floating aesthetic. Perfect for modern entertainment setups.",
      km: "ទូមេឌៀ Luxe មានការរចនា minimalist ជាមួយការគ្រប់គ្រងខ្សែដែលលាក់និងសោភ័ណភាពអណ្តែត។ ល្អឥតខ្ចោះសម្រាប់ការដំឡើងកម្សាន្តទំនើប។"
    },
    features: {
      en: ["Hidden cable management", "Floating mount design", "Matte black finish", "Dimensions: 180cm x 40cm x 50cm"],
      km: ["ការគ្រប់គ្រងខ្សែដែលលាក់", "ការរចនាភ្ជាប់អណ្តែត", "ការបញ្ចប់ខ្មៅមាត់", "វិមាត្រ: ១៨០សម x ៤០សម x ៥០សម"]
    },
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80"
    ]
  },
  {
    id: "noble-tv-stand",
    name: {
      en: "Noble Entertainment Unit",
      km: "ឯកតាកម្សាន្ត Noble"
    },
    category: "tvStand",
    price: 1699,
    description: {
      en: "A sophisticated entertainment unit combining marble top with oak base. The Noble features ample storage for all your media needs.",
      km: "ឯកតាកម្សាន្តប្រណីតដែលរួមបញ្ចូលផ្ទៃថ្មម៉ាបជាមួយមូលដ្ឋានឈើអូក។ Noble មានកន្លែងផ្ទុកគ្រប់គ្រាន់សម្រាប់តម្រូវការមេឌៀទាំងអស់របស់អ្នក។"
    },
    features: {
      en: ["Marble top surface", "Oak wood base", "Multiple compartments", "Dimensions: 200cm x 45cm x 60cm"],
      km: ["ផ្ទៃផ្ទៃថ្មម៉ាប", "មូលដ្ឋានឈើអូក", "ថតច្រើន", "វិមាត្រ: ២០០សម x ៤៥សម x ៦០សម"]
    },
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80"
    ]
  },
  {
    id: "celestial-chandelier",
    name: {
      en: "Celestial Crystal Chandelier",
      km: "ចង្កៀងគ្រីស្តាល់ Celestial"
    },
    category: "lighting",
    price: 2899,
    description: {
      en: "A breathtaking centerpiece featuring hand-cut crystal pendants and gold-plated frame. The Celestial Chandelier transforms any room into a palace.",
      km: "ចំណុចកណ្តាលដ៏អស្ចារ្យដែលមានគ្រីស្តាល់កាត់ដោយដៃនិងស៊ុមប៉ូលមាស។ ចង្កៀង Celestial ផ្លាស់ប្តូរបន្ទប់ណាមួយទៅជាវាំង។"
    },
    features: {
      en: ["Hand-cut crystal pendants", "Gold-plated frame", "Dimmable LED compatible", "Dimensions: 80cm diameter x 100cm height"],
      km: ["គ្រីស្តាល់កាត់ដោយដៃ", "ស៊ុមប៉ូលមាស", "អាចប្រើជាមួយ LED បន្ថយបាន", "វិមាត្រ: អង្កត់ផ្ចិត ៨០សម x កម្ពស់ ១០០សម"]
    },
    image: "https://images.unsplash.com/photo-1543198126-a8ad8e47fb22?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1543198126-a8ad8e47fb22?w=800&q=80"
    ]
  },
  {
    id: "aurora-lamp",
    name: {
      en: "Aurora Table Lamp",
      km: "ចង្កៀងតុ Aurora"
    },
    category: "lighting",
    price: 599,
    description: {
      en: "An elegant table lamp with sculptural marble base and brass accents. The Aurora brings a warm, ambient glow to any space.",
      km: "ចង្កៀងតុប្រណីតជាមួយមូលដ្ឋានថ្មម៉ាបចម្លាក់និងការបន្ថែមលង់ហ្សំ។ Aurora នាំមកពន្លឺក្តៅអណ្តែតទៅកន្លែងណាមួយ។"
    },
    features: {
      en: ["Marble base", "Brass accents", "Fabric shade", "Height: 55cm"],
      km: ["មូលដ្ឋានថ្មម៉ាប", "ការបន្ថែមលង់ហ្សំ", "ស្រមោលក្រណាត់", "កម្ពស់: ៥៥សម"]
    },
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80"
    ]
  }
]

export const categories = [
  { id: "sofa", name: { en: "Sofas", km: "សាឡុង" } },
  { id: "cabinet", name: { en: "Cabinets", km: "ទូ" } },
  { id: "tvStand", name: { en: "TV Stands", km: "ទូទូរទស្សន៍" } },
  { id: "lighting", name: { en: "Lighting", km: "ភ្លើង" } },
] as const

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(p => p.category === category)
}
