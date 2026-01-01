export type Product = {
  slug: string;
  name: string;
  category: string;
  brand?: string;
  image: string;
  benefits?: string;
  description?: string;
  highlights?: string[];
  ingredients?: string[];
  howToUse?: string;
  faqs?: { q: string; a: string }[];
  specs?: { key: string; value: string }[];
  related?: string[];
  size?: string;
  rating?: number;
  reviews?: number;
  price?: number;
  oldPrice?: number;
  collection?: "bestsellers" | "new" | "all";
  // New properties for filtering
  skinTypes?: ("dry" | "oily" | "combination" | "sensitive" | "normal")[];
  skinConcerns?: ("acne" | "aging" | "hyperpigmentation" | "dryness" | "sensitivity")[];
};

function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export const products: Product[] = [
  {
    name: "2% Sali-Cinamide Anti-Acne Face Wash",
    slug: slugify("2% Sali-Cinamide Anti-Acne Face Wash"),
    category: "Acne Care",
    image: "/assets/product1.webp",
    brand: "neolayrpro",
    benefits: "Fights Acne & Marks, Controls Excess Oil",
    size: "150ml",
    rating: 4.8,
    reviews: 66,
    price: 377,
    oldPrice: 449,
    collection: "bestsellers",
    skinTypes: ["oily", "combination", "normal"],
    skinConcerns: ["acne"],
    description: "A gentle foaming wash with 2% salicylic acid and niacinamide to reduce breakouts and soothe inflammation.",
    ingredients: ["Salicylic Acid 2%", "Niacinamide", "Glycerin", "Aloe Vera"],
    howToUse: "Wet face, lather a small amount, massage onto face for 30 seconds, rinse. Use twice daily.",
    faqs: [
      { q: "Is it suitable for sensitive skin?", a: "Patch test first; discontinue if irritation occurs." },
      { q: "Can I use with retinol?", a: "Use alternate nights or consult with your dermatologist." },
    ],
    specs: [{ key: "Volume", value: "150ml" }, { key: "Formulation", value: "Gel" }],
    related: [slugify("Hydra Boost Moisturizer"), slugify("Clear Skin Gel")],
  },
  {
    name: "Hydra Boost Moisturizer",
    slug: slugify("Hydra Boost Moisturizer"),
    category: "Moisturizers",
    image: "/assets/product2.webp",
    brand: "isdin",
    benefits: "Deep hydration, strengthens skin barrier",
    size: "50ml",
    rating: 4.8,
    reviews: 66,
    price: 399,
    oldPrice: 499,
    collection: "bestsellers",
    skinTypes: ["dry", "normal", "combination"],
    skinConcerns: ["dryness"],
    description: "A lightweight moisturizer with hyaluronic acid to deliver long-lasting hydration.",
    ingredients: ["Hyaluronic Acid", "Ceramides", "Glycerin"],
    howToUse: "Apply morning and night after cleansing and serums.",
    faqs: [{ q: "Is it non-comedogenic?", a: "Yes, formulated to be non-comedogenic." }],
    specs: [{ key: "Volume", value: "50ml" }],
    related: [slugify("Clear Skin Gel")],
  },
  {
    name: "Clear Skin Gel",
    slug: slugify("Clear Skin Gel"),
    category: "Acne Care",
    image: "/assets/product3.jpeg",
    brand: "nmfe",
    benefits: "Fights acne and controls excess oil",
    size: "150ml",
    rating: 4.6,
    reviews: 48,
    price: 299,
    oldPrice: 349,
    collection: "bestsellers",
    skinTypes: ["oily", "combination"],
    skinConcerns: ["acne"],
    description: "A lightweight gel formulated with benzoyl peroxide and soothing agents to target breakouts.",
    ingredients: ["Benzoyl Peroxide", "Niacinamide"],
    howToUse: "Apply a thin layer to affected areas once daily initially.",
    faqs: [{ q: "Will it bleach clothes?", a: "Avoid contact with fabrics until product is fully absorbed/dry." }],
    specs: [{ key: "Volume", value: "150ml" }],
    related: [slugify("2% Sali-Cinamide Anti-Acne Face Wash")],
  },
  {
    name: "UV Shield SPF 50",
    slug: slugify("UV Shield SPF 50"),
    category: "Sunscreens",
    image: "/assets/product4.jpeg",
    brand: "renewderm",
    benefits: "Broad-spectrum protection, lightweight",
    size: "75ml",
    rating: 4.7,
    reviews: 102,
    price: 499,
    collection: "bestsellers",
    skinTypes: ["oily", "combination", "normal"],
    skinConcerns: ["aging"],
    description: "A broad-spectrum SPF50 with a non-greasy finish suitable under makeup.",
    ingredients: ["Zinc Oxide", "Octisalate"],
    howToUse: "Apply liberally 15 minutes before sun exposure and reapply every 2 hours.",
    faqs: [{ q: "Is it water resistant?", a: "It is water resistant for up to 40 minutes." }],
    specs: [{ key: "SPF", value: "50" }],
    related: [],
  },
  {
    name: "Ultra Matte Sunscreen SPF 50",
    slug: slugify("Ultra Matte Sunscreen SPF 50"),
    category: "Sunscreens",
    image: "/assets/product4.jpeg",
    brand: "q-sera",
    benefits: "Broad-spectrum protection, lightweight",
    size: "75ml",
    rating: 4.7,
    reviews: 102,
    price: 499,
    collection: "bestsellers",
    skinTypes: ["oily", "combination"],
    skinConcerns: ["aging", "acne"],
    description: "A broad-spectrum SPF50 with a non-greasy finish suitable under makeup.",
    ingredients: ["Zinc Oxide", "Octisalate"],
    howToUse: "Apply liberally 15 minutes before sun exposure and reapply every 2 hours.",
    faqs: [{ q: "Is it water resistant?", a: "It is water resistant for up to 40 minutes." }],
    specs: [{ key: "SPF", value: "50" }],
    related: [],
  },

  // New launches
  {
    name: "Vitamin C Brightening Serum",
    slug: slugify("Vitamin C Brightening Serum"),
    category: "Serums",
    image: "/assets/K-ox-1.webp",
    brand: "neolayrpro",
    benefits: "Brightens skin tone & reduces dark spots",
    size: "30ml",
    rating: 4.7,
    reviews: 42,
    price: 549,
    oldPrice: 649,
    collection: "new",
    skinTypes: ["dry", "oily", "combination", "normal"],
    skinConcerns: ["hyperpigmentation", "aging"],
    description: "A stabilized vitamin C serum that helps reduce pigmentation and improve radiance.",
    ingredients: ["Vitamin C", "Ferulic Acid"],
    howToUse: "Apply 2-3 drops in the morning after cleansing and before moisturizer.",
    faqs: [{ q: "Can I use it with retinol?", a: "Use in the morning and retinol at night to avoid irritation." }],
    specs: [{ key: "Volume", value: "30ml" }],
    related: [],
  },
  {
    name: "Gentle Exfoliating Cleanser",
    slug: slugify("Gentle Exfoliating Cleanser"),
    category: "Cleansers",
    image: "/assets/NMFe-moisturising-cream-2.webp",
    brand: "isdin",
    benefits: "Removes dead skin cells without irritation",
    size: "100ml",
    rating: 4.5,
    reviews: 30,
    price: 299,
    collection: "new",
    skinTypes: ["dry", "normal", "combination", "sensitive"],
    skinConcerns: ["dryness", "aging"],
    description: "A gentle exfoliant with PHA/AHA blend to promote cell turnover gently.",
    ingredients: ["PHA", "AHA", "Glycerin"],
    howToUse: "Use 2-3 times a week at night.",
    faqs: [],
    specs: [{ key: "Volume", value: "100ml" }],
    related: [],
  },
  {
    name: "Hyaluronic Acid Booster",
    slug: slugify("Hyaluronic Acid Booster"),
    category: "Serums",
    image: "/assets/micellar-water.jpg",
    brand: "nmfe",
    benefits: "Intense hydration and plumping",
    size: "30ml",
    rating: 4.8,
    reviews: 58,
    price: 699,
    oldPrice: 799,
    collection: "new",
    skinTypes: ["dry", "normal", "sensitive"],
    skinConcerns: ["dryness", "aging"],
    description: "A concentrated hyaluronic serum for instant plump and lasting hydration.",
    ingredients: ["Hyaluronic Acid", "Glycerin"],
    howToUse: "Apply a few drops to damp skin before moisturizer.",
    faqs: [],
    specs: [{ key: "Volume", value: "30ml" }],
    related: [],
  },
  {
    name: "Barrier Repair Cream",
    slug: slugify("Barrier Repair Cream"),
    category: "Moisturizers",
    image: "/assets/Ridacne SA Foaming Face Wash.webp",
    brand: "renewderm",
    benefits: "Restores moisture barrier and soothes",
    size: "50ml",
    rating: 4.6,
    reviews: 21,
    price: 449,
    collection: "new",
    skinTypes: ["dry", "sensitive"],
    skinConcerns: ["dryness", "sensitivity"],
    description: "Rich, nourishing cream to restore and protect the skin barrier.",
    ingredients: ["Ceramides", "Niacinamide"],
    howToUse: "Use nightly or as needed for dry patches.",
    faqs: [],
    specs: [{ key: "Volume", value: "50ml" }],
    related: [],
  },

  // Additional Products - Cleansers
  {
    name: "Micellar Cleansing Water",
    slug: slugify("Micellar Cleansing Water"),
    category: "Cleansers",
    image: "/assets/product1.webp",
    brand: "isdin",
    benefits: "Removes makeup & impurities without rinsing",
    size: "200ml",
    rating: 4.6,
    reviews: 89,
    price: 349,
    collection: "all",
    skinTypes: ["dry", "sensitive", "normal"],
    skinConcerns: ["sensitivity"],
    description: "Gentle micellar water that removes makeup and cleanses without stripping skin.",
    ingredients: ["Micellar Technology", "Glycerin", "Panthenol"],
    howToUse: "Apply to cotton pad and gently wipe face and eyes. No rinsing needed.",
    faqs: [{ q: "Can it remove waterproof makeup?", a: "Yes, effective on waterproof makeup." }],
    specs: [{ key: "Volume", value: "200ml" }],
    related: [],
  },
  {
    name: "Foaming Gel Cleanser",
    slug: slugify("Foaming Gel Cleanser"),
    category: "Cleansers",
    image: "/assets/product2.webp",
    brand: "neolayrpro",
    benefits: "Deep cleansing for oily and acne-prone skin",
    size: "150ml",
    rating: 4.7,
    reviews: 74,
    price: 279,
    collection: "all",
    skinTypes: ["oily", "combination"],
    skinConcerns: ["acne"],
    description: "Gentle foaming cleanser that removes excess oil and unclogs pores.",
    ingredients: ["Salicylic Acid", "Tea Tree Oil", "Zinc PCA"],
    howToUse: "Massage onto wet face, rinse thoroughly. Use morning and evening.",
    faqs: [],
    specs: [{ key: "Volume", value: "150ml" }],
    related: [],
  },

  // Additional Products - Moisturizers
  {
    name: "Oil-Free Mattifying Gel",
    slug: slugify("Oil-Free Mattifying Gel"),
    category: "Moisturizers",
    image: "/assets/product3.jpeg",
    brand: "q-sera",
    benefits: "Controls oil and provides matte finish",
    size: "50ml",
    rating: 4.5,
    reviews: 52,
    price: 425,
    collection: "all",
    skinTypes: ["oily", "combination"],
    skinConcerns: ["acne"],
    description: "Lightweight gel moisturizer that hydrates without adding shine.",
    ingredients: ["Niacinamide", "Hyaluronic Acid", "Witch Hazel"],
    howToUse: "Apply to clean face morning and night.",
    faqs: [],
    specs: [{ key: "Volume", value: "50ml" }],
    related: [],
  },
  {
    name: "Rich Nourishing Night Cream",
    slug: slugify("Rich Nourishing Night Cream"),
    category: "Moisturizers",
    image: "/assets/product4.jpeg",
    brand: "nmfe",
    benefits: "Overnight repair and deep nourishment",
    size: "50ml",
    rating: 4.8,
    reviews: 95,
    price: 599,
    oldPrice: 699,
    collection: "all",
    skinTypes: ["dry", "normal"],
    skinConcerns: ["dryness", "aging"],
    description: "Intensive night cream with peptides and ceramides for overnight repair.",
    ingredients: ["Peptides", "Ceramides", "Shea Butter", "Vitamin E"],
    howToUse: "Apply generously to face and neck before bed.",
    faqs: [],
    specs: [{ key: "Volume", value: "50ml" }],
    related: [],
  },

  // Additional Products - Serums
  {
    name: "Retinol Renewal Serum",
    slug: slugify("Retinol Renewal Serum"),
    category: "Serums",
    image: "/assets/K-ox-1.webp",
    brand: "renewderm",
    benefits: "Reduces fine lines and improves texture",
    size: "30ml",
    rating: 4.7,
    reviews: 68,
    price: 799,
    oldPrice: 899,
    collection: "all",
    skinTypes: ["normal", "combination", "dry"],
    skinConcerns: ["aging"],
    description: "Time-release retinol serum that minimizes irritation while delivering results.",
    ingredients: ["Retinol 0.5%", "Vitamin E", "Bisabolol"],
    howToUse: "Apply 2-3 drops at night. Start with 2-3 times weekly, gradually increase.",
    faqs: [{ q: "Can I use during pregnancy?", a: "Not recommended during pregnancy or breastfeeding." }],
    specs: [{ key: "Volume", value: "30ml" }],
    related: [],
  },
  {
    name: "Niacinamide 10% Serum",
    slug: slugify("Niacinamide 10% Serum"),
    category: "Serums",
    image: "/assets/micellar-water.jpg",
    brand: "q-sera",
    benefits: "Minimizes pores and evens skin tone",
    size: "30ml",
    rating: 4.6,
    reviews: 112,
    price: 475,
    collection: "bestsellers",
    skinTypes: ["oily", "combination", "normal"],
    skinConcerns: ["acne", "hyperpigmentation"],
    description: "High-strength niacinamide serum to reduce pore appearance and brighten skin.",
    ingredients: ["Niacinamide 10%", "Zinc PCA"],
    howToUse: "Apply 4-5 drops to face morning and evening.",
    faqs: [],
    specs: [{ key: "Volume", value: "30ml" }],
    related: [],
  },

  // Additional Products - Sunscreens
  {
    name: "Tinted Mineral Sunscreen SPF 50",
    slug: slugify("Tinted Mineral Sunscreen SPF 50"),
    category: "Sunscreens",
    image: "/assets/product1.webp",
    brand: "isdin",
    benefits: "Natural coverage with sun protection",
    size: "50ml",
    rating: 4.8,
    reviews: 145,
    price: 649,
    oldPrice: 749,
    collection: "bestsellers",
    skinTypes: ["dry", "normal", "combination"],
    skinConcerns: ["aging", "hyperpigmentation"],
    description: "100% mineral sunscreen with light tint for natural-looking coverage.",
    ingredients: ["Zinc Oxide 20%", "Iron Oxides", "Vitamin E"],
    howToUse: "Apply as last step of skincare. Reapply every 2 hours.",
    faqs: [{ q: "Does it leave a white cast?", a: "No, the tint prevents white cast on most skin tones." }],
    specs: [{ key: "SPF", value: "50" }],
    related: [],
  },
  {
    name: "Hydrating Sunscreen Lotion SPF 30",
    slug: slugify("Hydrating Sunscreen Lotion SPF 30"),
    category: "Sunscreens",
    image: "/assets/product2.webp",
    brand: "nmfe",
    benefits: "Daily protection with hydration boost",
    size: "100ml",
    rating: 4.5,
    reviews: 67,
    price: 399,
    collection: "all",
    skinTypes: ["dry", "sensitive", "normal"],
    skinConcerns: ["dryness", "sensitivity"],
    description: "Gentle sunscreen with added moisturizers for dry and sensitive skin.",
    ingredients: ["Chemical Filters", "Hyaluronic Acid", "Glycerin"],
    howToUse: "Apply generously 15 minutes before sun exposure.",
    faqs: [],
    specs: [{ key: "SPF", value: "30" }],
    related: [],
  },

  // Additional Products - Masks
  {
    name: "Purifying Clay Mask",
    slug: slugify("Purifying Clay Mask"),
    category: "Masks",
    image: "/assets/product3.jpeg",
    brand: "neolayrpro",
    benefits: "Deep cleansing and pore refinement",
    size: "75ml",
    rating: 4.6,
    reviews: 58,
    price: 449,
    collection: "all",
    skinTypes: ["oily", "combination"],
    skinConcerns: ["acne"],
    description: "Kaolin clay mask that draws out impurities and minimizes pores.",
    ingredients: ["Kaolin Clay", "Charcoal", "Tea Tree Oil"],
    howToUse: "Apply thin layer to clean face, leave for 10-15 minutes, rinse. Use 2-3x weekly.",
    faqs: [],
    specs: [{ key: "Volume", value: "75ml" }],
    related: [],
  },
  {
    name: "Hydrating Sheet Mask - 5 Pack",
    slug: slugify("Hydrating Sheet Mask - 5 Pack"),
    category: "Masks",
    image: "/assets/product4.jpeg",
    brand: "isdin",
    benefits: "Instant hydration and glow",
    size: "5 sheets",
    rating: 4.7,
    reviews: 89,
    price: 599,
    collection: "new",
    skinTypes: ["dry", "normal", "sensitive"],
    skinConcerns: ["dryness"],
    description: "Intensive hydration sheet masks infused with hyaluronic acid and aloe.",
    ingredients: ["Hyaluronic Acid", "Aloe Vera", "Panthenol"],
    howToUse: "Apply to clean face for 15-20 minutes. Massage remaining essence into skin.",
    faqs: [],
    specs: [{ key: "Quantity", value: "5 sheets" }],
    related: [],
  },
  {
    name: "Brightening Vitamin C Mask",
    slug: slugify("Brightening Vitamin C Mask"),
    category: "Masks",
    image: "/assets/K-ox-1.webp",
    brand: "q-sera",
    benefits: "Brightens and evens skin tone",
    size: "60ml",
    rating: 4.5,
    reviews: 42,
    price: 525,
    collection: "all",
    skinTypes: ["normal", "combination", "dry"],
    skinConcerns: ["hyperpigmentation", "dryness"],
    description: "Vitamin C enriched mask for radiant, even-toned skin.",
    ingredients: ["Vitamin C", "Niacinamide", "Licorice Extract"],
    howToUse: "Apply for 15 minutes, rinse. Use 2x weekly for best results.",
    faqs: [],
    specs: [{ key: "Volume", value: "60ml" }],
    related: [],
  },

  // Additional Products - Acne Care
  {
    name: "Spot Treatment Gel",
    slug: slugify("Spot Treatment Gel"),
    category: "Acne Care",
    image: "/assets/NMFe-moisturising-cream-2.webp",
    brand: "renewderm",
    benefits: "Fast-acting acne spot treatment",
    size: "15ml",
    rating: 4.7,
    reviews: 134,
    price: 299,
    collection: "bestsellers",
    skinTypes: ["oily", "combination", "normal"],
    skinConcerns: ["acne"],
    description: "Concentrated spot treatment with 2% salicylic acid for targeted acne control.",
    ingredients: ["Salicylic Acid 2%", "Sulfur", "Zinc Oxide"],
    howToUse: "Apply directly to blemishes 1-2 times daily.",
    faqs: [],
    specs: [{ key: "Volume", value: "15ml" }],
    related: [],
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug) || null;
}

export const getProductsByCategory = (categorySlug: string) => {
  // Handle skin type categories
  if (categorySlug.startsWith("skin-type-")) {
    const skinType = categorySlug.replace("skin-type-", "") as Product["skinTypes"][number];
    return products.filter(product => 
      product.skinTypes?.includes(skinType)
    );
  }
  
  // Handle concern categories
  if (categorySlug.startsWith("concern-")) {
    const concern = categorySlug.replace("concern-", "") as Product["skinConcerns"][number];
    return products.filter(product => 
      product.skinConcerns?.includes(concern)
    );
  }
  
  // Handle regular product categories
  return products.filter(product => {
    const productCategory = product.category.toLowerCase().replace(/\s+/g, '-');
    return productCategory === categorySlug;
  });
};

export function getProductsByCollection(collection: "bestsellers" | "new") {
  return products.filter((p) => p.collection === collection);
}

// Helper function to get products by skin type
export function getProductsBySkinType(skinType: Product["skinTypes"][number]) {
  return products.filter(product => 
    product.skinTypes?.includes(skinType)
  );
}

// Add this helper function to products.ts:
export function getProductsByBrand(brandSlug: string) {
  return products.filter(product => product.brand === brandSlug);
}

// Helper function to get products by concern
export function getProductsByConcern(concern: Product["skinConcerns"][number]) {
  return products.filter(product => 
    product.skinConcerns?.includes(concern)
  );
}