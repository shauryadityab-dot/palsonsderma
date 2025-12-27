import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { getProductBySlug } from "@/lib/products";

export type ProductVariant = {
  id: string;
  label: string;
  price: number;
  oldPrice?: number;
};

export type Product = {
  id: string;
  title: string;
  category?: string;
  images: string[];
  benefits?: string;
  description?: string;
  highlights?: string[];
  ingredients?: string[];
  howToUse?: string;
  faqs?: { q: string; a: string }[];
  specs?: { key: string; value: string }[];
  related?: string[];
  rating?: number;
  reviews?: number;
  variants?: ProductVariant[];
};

function generateHighlights(p: Product) {
  // If the product already provides highlights, use them
  if (p.highlights && p.highlights.length) return p.highlights;

  const highlights: string[] = [];

  // Ingredient-forward headline
  if (p.ingredients && p.ingredients.length) {
    const firstThree = p.ingredients.slice(0, 3).join(", ");
    highlights.push(`Specially formulated with ${firstThree} to help improve skin resilience and comfort.`);
  }

  // Benefits summary
  if (p.benefits) {
    highlights.push(`${p.benefits}.`);
  } else if (p.category) {
    highlights.push(`Lightweight ${p.category.toLowerCase()} formulated to be gentle on sensitive skin.`);
  }

  // Hydration / performance statement
  highlights.push(`Lightweight texture that soothes and provides lasting hydration.`);

  // Gentle / dermatologist note
  highlights.push(`Dermatologist tested and suitable for sensitive skin.`);

  return highlights;
}

const ProductPage: React.FC<{ product?: Product }> = ({
  product = {
    id: "p-1",
    title: "2% Sali-Cinamide Anti-Acne Face Wash",
    category: "Acne Care",
    images: ["/assets/product1.webp", "/assets/product2.webp", "/assets/product3.jpeg"],
    benefits: "Fights Acne & Marks, Controls Excess Oil",
    rating: 4.8,
    reviews: 66,
    variants: [
      { id: "150ml", label: "150ml", price: 377, oldPrice: 449 },
      { id: "100ml", label: "100ml", price: 299 },
    ],
  },
}) => {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | undefined>(product.variants?.[0]);
  const [qty, setQty] = useState(1);
  const [adding, setAdding] = useState(false);

  function addToCart() {
    setAdding(true);
    // Mock add-to-cart
    setTimeout(() => {
      setAdding(false);
      toast({ title: "Added to cart", description: `${product.title} (${selectedVariant?.label}) x ${qty} added` });
    }, 500);
  }

  return (
    <section className="section-padding bg-background pt-28">
      <div className="container-narrow mx-auto">
        <div className="grid gap-8 lg:grid-cols-2 items-start">
          {/* Images column */}
          <div>
            <Card className="p-4">
              <div className="w-full rounded-md overflow-hidden mb-4">
                <img src={selectedImage} alt={product.title} className="w-full h-[420px] object-contain bg-white" />
              </div>

              <div className="flex gap-3">
                {product.images.map((img) => (
                  <button
                    key={img}
                    onClick={() => setSelectedImage(img)}
                    className={`w-20 h-20 rounded-md overflow-hidden border ${selectedImage === img ? "border-primary" : "border-border"}`}
                  >
                    <img src={img} alt="thumb" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </Card>
          </div>

          {/* Info column */}
          <div>
            <div className="mb-4">
              <p className="text-xs text-primary uppercase tracking-wider">{product.category}</p>
              <h1 className="text-2xl font-semibold text-foreground mt-2">{product.title}</h1>

              <div className="mt-3 flex items-center gap-3">
                <div className="inline-flex items-center gap-1 text-amber-400">
                  <Star className="h-4 w-4" /> {product.rating}
                </div>
                <div className="text-sm text-muted-foreground">• {product.reviews} reviews</div>
              </div>

              <p className="mt-4 text-sm text-muted-foreground">{product.benefits}</p>

              <div className="mt-4">
                <Card className="p-3">
                  <div className="text-sm font-medium mb-2">Highlights</div>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground">
                    {generateHighlights(product).map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </Card>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-muted-foreground block mb-2">Variant</label>
                <Tabs value={selectedVariant?.id} onValueChange={(v) => setSelectedVariant(product.variants?.find((x) => x.id === v))}>
                  <TabsList className="rounded-md border p-1 inline-flex">
                    {product.variants?.map((v) => (
                      <TabsTrigger key={v.id} value={v.id} className="px-3 py-1 rounded-sm">
                        <div className="flex items-center gap-2">
                          <span>{v.label}</span>
                          <span className="text-sm text-muted-foreground">₹ {v.price}</span>
                        </div>
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </Tabs>
              </div>

              <div className="flex items-center gap-4">
                <div>
                  <label className="text-sm text-muted-foreground block mb-2">Quantity</label>
                  <div className="flex items-center gap-2">
                    <button className="px-3 py-1 border rounded" onClick={() => setQty((q) => Math.max(1, q - 1))}>-</button>
                    <input className="w-14 text-center border rounded py-1" value={qty} onChange={(e) => setQty(Math.max(1, Number(e.target.value || 1)))} />
                    <button className="px-3 py-1 border rounded" onClick={() => setQty((q) => q + 1)}>+</button>
                  </div>
                </div>

                <div className="ml-auto text-right">
                  <div className="text-xl font-semibold">₹ {selectedVariant?.price}</div>
                  {selectedVariant?.oldPrice && <div className="text-sm text-muted-foreground line-through">₹ {selectedVariant.oldPrice}</div>}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Button onClick={addToCart} disabled={adding} className="flex-1">{adding ? "Adding..." : "Add to cart"}</Button>
                <Button variant="outline">Buy now</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed tabs */}
        <div className="mt-8">
          <Tabs defaultValue="description">
            <TabsList>
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
              <TabsTrigger value="howto">How to use</TabsTrigger>
              <TabsTrigger value="faqs">FAQs</TabsTrigger>
              <TabsTrigger value="related">Related</TabsTrigger>
            </TabsList>

            <TabsContent value="description">
              <div className="prose max-w-none text-sm text-muted-foreground">
                {product.benefits && <p className="mb-2">{product.benefits}</p>}
                {product.description && <p>{product.description}</p>}
              </div>
            </TabsContent>

            <TabsContent value="ingredients">
              <div className="text-sm text-muted-foreground">
                <ul className="list-disc pl-5">
                  {(product as any).ingredients?.map((i: string) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="howto">
              <div className="text-sm text-muted-foreground">
                <p>{(product as any).howToUse}</p>
              </div>
            </TabsContent>

            <TabsContent value="faqs">
              <Accordion type="single">
                {(product as any).faqs?.map((f: any, idx: number) => (
                  <AccordionItem key={idx} value={`faq-${idx}`} title={f.q}>
                    <div className="text-sm text-muted-foreground">{f.a}</div>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>

            <TabsContent value="related">
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {((product as any).related || []).map((slug: string) => {
                  const p = getProductBySlug(slug);
                  if (!p) return null;
                  return (
                    <Card key={p.slug} className="border border-border">
                      <a href={`/product/${p.slug}`} className="block">
                        <div className="aspect-square overflow-hidden">
                          <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="p-3">
                          <div className="text-sm font-medium text-foreground">{p.name}</div>
                          <div className="text-sm text-muted-foreground">₹ {p.price}</div>
                        </div>
                      </a>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
