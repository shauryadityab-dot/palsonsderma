export type Product = {
  slug: string;
  name: string;
  category: string;
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
    benefits: "Fights Acne & Marks, Controls Excess Oil",
    size: "150ml",
    rating: 4.8,
    reviews: 66,
    price: 377,
    oldPrice: 449,
    collection: "bestsellers",
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
    category: "Moisturizer",
    image: "/assets/product2.webp",
    benefits: "Deep hydration, strengthens skin barrier",
    size: "50ml",
    rating: 4.8,
    reviews: 66,
    price: 399,
    oldPrice: 499,
    collection: "bestsellers",
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
    benefits: "Fights acne and controls excess oil",
    size: "150ml",
    rating: 4.6,
    reviews: 48,
    price: 299,
    oldPrice: 349,
    collection: "bestsellers",
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
    category: "Sun Protection",
    image: "/assets/product4.jpeg",
    benefits: "Broad-spectrum protection, lightweight",
    size: "75ml",
    rating: 4.7,
    reviews: 102,
    price: 499,
    collection: "bestsellers",
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
    benefits: "Brightens skin tone & reduces dark spots",
    size: "30ml",
    rating: 4.7,
    reviews: 42,
    price: 549,
    oldPrice: 649,
    collection: "new",
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
    category: "Cleanser",
    image: "/assets/NMFe-moisturising-cream-2.webp",
    benefits: "Removes dead skin cells without irritation",
    size: "100ml",
    rating: 4.5,
    reviews: 30,
    price: 299,
    collection: "new",
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
    category: "Treatment",
    image: "/assets/micellar-water.jpg",
    benefits: "Intense hydration and plumping",
    size: "30ml",
    rating: 4.8,
    reviews: 58,
    price: 699,
    oldPrice: 799,
    collection: "new",
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
    category: "Moisturizer",
    image: "/assets/Ridacne SA Foaming Face Wash.webp",
    benefits: "Restores moisture barrier and soothes",
    size: "50ml",
    rating: 4.6,
    reviews: 21,
    price: 449,
    collection: "new",
    description: "Rich, nourishing cream to restore and protect the skin barrier.",
    ingredients: ["Ceramides", "Niacinamide"],
    howToUse: "Use nightly or as needed for dry patches.",
    faqs: [],
    specs: [{ key: "Volume", value: "50ml" }],
    related: [],
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug) || null;
}

export function getProductsByCollection(collection: "bestsellers" | "new") {
  return products.filter((p) => p.collection === collection);
}
