export type Category = {
  slug: string;
  name: string;
  description?: string;
};

export const categories: Category[] = [
  {
    slug: "acne-care",
    name: "Acne Care",
    description: "Solutions for acne, oil control, and blemish-prone skin.",
  },
  {
    slug: "moisturizer",
    name: "Moisturizers",
  },
  {
    slug: "sun-protection",
    name: "Sun Protection",
  },
  {
    slug: "serums",
    name: "Serums",
  },
];

/* ✅ helper functions */
export function getCategoryBySlug(slug: string): Category | null {
  return categories.find((c) => c.slug === slug) || null;
}

export function getAllCategories(): Category[] {
  return categories;
}
