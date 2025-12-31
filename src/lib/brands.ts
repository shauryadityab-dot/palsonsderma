export type Brand = {
  slug: string;
  name: string;
  logo?: string;
  description?: string;
  bannerImage?: string;
  story?: string;
  featured?: boolean;
  website?: string;
};

function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export const brands: Brand[] = [
  {
    slug: slugify("NeolayrPro"),
    name: "NeolayrPro",
    description: "Advanced dermatological solutions for professional skincare",
    bannerImage: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1600&q=80",
    story: "NeolayrPro combines cutting-edge science with dermatological expertise to deliver professional-grade skincare solutions.",
    featured: true,
  },
  {
    slug: slugify("Isdin"),
    name: "Isdin",
    description: "European skincare innovation with proven results",
    bannerImage: "https://images.unsplash.com/photo-1556228852-80176d8e8c83?auto=format&fit=crop&w=1600&q=80",
    story: "Isdin is a leading European pharmaceutical company specializing in dermatology, with over 40 years of experience.",
    featured: true,
  },
  {
    slug: slugify("Nmfe"),
    name: "Nmfe",
    description: "Natural moisture factor enhanced formulations",
    bannerImage: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=1600&q=80",
    story: "Nmfe focuses on maintaining and enhancing the skin's natural moisture barrier through scientifically-backed formulations.",
    featured: true,
  },
  {
    slug: slugify("Renewderm"),
    name: "Renewderm",
    description: "Skin renewal and regeneration specialists",
    bannerImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1600&q=80",
    story: "Renewderm specializes in advanced skin renewal treatments that promote cellular regeneration and healthy skin aging.",
    featured: true,
  },
  {
    slug: slugify("Q-Sera"),
    name: "Q-Sera",
    description: "Premium serums for targeted skin concerns",
    bannerImage: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1600&q=80",
    story: "Q-Sera develops highly concentrated serums that deliver powerful active ingredients deep into the skin for visible results.",
    featured: true,
  },
];

// Helper functions
export function getBrandBySlug(slug: string): Brand | null {
  return brands.find((b) => b.slug === slug) || null;
}

export function getAllBrands(): Brand[] {
  return brands;
}

export function getFeaturedBrands(): Brand[] {
  return brands.filter((b) => b.featured);
}