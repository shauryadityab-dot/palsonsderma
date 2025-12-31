import React, { useRef, useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { getProductsByCategory } from "@/lib/products";
import Header from "@/components/Header";

type CategoryInfo = {
  id: string;
  name: string;
  description: string;
  bannerImage: string;
  benefits?: string[];
};

const categories: Record<string, CategoryInfo> = {
  // Product Categories
  "acne-care": {
    id: "acne-care",
    name: "Acne Care",
    description: "Targeted solutions for clearer, healthier skin. Our dermatologist-tested acne care range helps control breakouts and reduce marks.",
    bannerImage: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1600&q=80",
    benefits: [
      "Controls excess oil",
      "Reduces acne marks",
      "Prevents future breakouts",
      "Gentle on sensitive skin"
    ]
  },
  "moisturizers": {
    id: "moisturizers",
    name: "Moisturizers",
    description: "Deep hydration for every skin type. Our moisturizers lock in moisture and strengthen your skin barrier.",
    bannerImage: "https://images.unsplash.com/photo-1556228852-80176d8e8c83?auto=format&fit=crop&w=1600&q=80",
    benefits: [
      "24-hour hydration",
      "Non-greasy formula",
      "Suitable for all skin types",
      "Dermatologist tested"
    ]
  },
  "sunscreens": {
    id: "sunscreens",
    name: "Sun Protection",
    description: "Broad-spectrum protection against harmful UV rays. Keep your skin safe and healthy with our advanced sunscreen formulas.",
    bannerImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1600&q=80",
    benefits: [
      "SPF 50+ PA++++",
      "Broad spectrum protection",
      "Lightweight & non-greasy",
      "Water resistant"
    ]
  },
  "cleansers": {
    id: "cleansers",
    name: "Cleansers",
    description: "Gentle yet effective cleansing for fresh, clean skin. Remove impurities without stripping natural oils.",
    bannerImage: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=1600&q=80",
    benefits: [
      "Deep cleansing",
      "Maintains pH balance",
      "Removes makeup & impurities",
      "Suitable for daily use"
    ]
  },
  "serums": {
    id: "serums",
    name: "Serums",
    description: "Concentrated formulas for targeted skin concerns. Our serums deliver active ingredients deep into your skin.",
    bannerImage: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1600&q=80",
    benefits: [
      "Concentrated actives",
      "Fast absorption",
      "Targeted treatment",
      "Visible results"
    ]
  },
  "masks": {
    id: "masks",
    name: "Face Masks",
    description: "Intensive treatment masks for instant skin transformation. Give your skin the extra care it deserves.",
    bannerImage: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=1600&q=80",
    benefits: [
      "Instant glow",
      "Deep nourishment",
      "Weekly treatment",
      "Spa-like experience"
    ]
  },
  
  // Skin Type Categories
  "skin-type-dry": {
    id: "skin-type-dry",
    name: "Products for Dry Skin",
    description: "Intensive hydration and nourishment for dry skin. Our specially formulated products restore moisture balance.",
    bannerImage: "https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=1600&q=80",
    benefits: [
      "Deep hydration",
      "Locks in moisture",
      "Soothes dryness",
      "Restores skin barrier"
    ]
  },
  "skin-type-oily": {
    id: "skin-type-oily",
    name: "Products for Oily Skin",
    description: "Oil control and mattifying solutions for oily skin. Balance your skin's natural oil production.",
    bannerImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1600&q=80",
    benefits: [
      "Controls excess oil",
      "Mattifies shine",
      "Minimizes pores",
      "Lightweight formulas"
    ]
  },
  "skin-type-combination": {
    id: "skin-type-combination",
    name: "Products for Combination Skin",
    description: "Balanced care for combination skin. Addresses both dry and oily areas effectively.",
    bannerImage: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1600&q=80",
    benefits: [
      "Balanced hydration",
      "Multi-zone care",
      "Controls T-zone oil",
      "Hydrates dry areas"
    ]
  },
  "skin-type-sensitive": {
    id: "skin-type-sensitive",
    name: "Products for Sensitive Skin",
    description: "Gentle, soothing care for sensitive skin. Hypoallergenic formulas that calm and protect.",
    bannerImage: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1600&q=80",
    benefits: [
      "Hypoallergenic",
      "Soothes irritation",
      "Fragrance-free options",
      "Dermatologist tested"
    ]
  },
  "skin-type-normal": {
    id: "skin-type-normal",
    name: "Products for Normal Skin",
    description: "Maintain your skin's natural balance. Keep your healthy skin looking its best.",
    bannerImage: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=1600&q=80",
    benefits: [
      "Maintains balance",
      "Enhances natural glow",
      "Prevention focused",
      "Daily maintenance"
    ]
  },
  
  // Skin Concern Categories
  "concern-acne": {
    id: "concern-acne",
    name: "Acne Solutions",
    description: "Clear and prevent breakouts with our acne-fighting products. Get the clear skin you deserve.",
    bannerImage: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1600&q=80",
    benefits: [
      "Fights active acne",
      "Prevents new breakouts",
      "Reduces inflammation",
      "Fades acne marks"
    ]
  },
  "concern-aging": {
    id: "concern-aging",
    name: "Anti-Aging Solutions",
    description: "Turn back time with our anti-aging range. Reduce fine lines and restore youthful radiance.",
    bannerImage: "https://images.unsplash.com/photo-1513116476489-7635e79feb27?auto=format&fit=crop&w=1600&q=80",
    benefits: [
      "Reduces fine lines",
      "Firms & lifts",
      "Boosts collagen",
      "Restores elasticity"
    ]
  },
  "concern-hyperpigmentation": {
    id: "concern-hyperpigmentation",
    name: "Brightening & Even Tone",
    description: "Even out skin tone and fade dark spots. Reveal your natural radiance.",
    bannerImage: "https://images.unsplash.com/photo-1535914254981-b5012eebbd15?auto=format&fit=crop&w=1600&q=80",
    benefits: [
      "Fades dark spots",
      "Evens skin tone",
      "Brightens complexion",
      "Reduces pigmentation"
    ]
  },
  "concern-dryness": {
    id: "concern-dryness",
    name: "Hydration Solutions",
    description: "Combat dryness and dehydration. Restore your skin's moisture balance.",
    bannerImage: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1600&q=80",
    benefits: [
      "Deep hydration",
      "Long-lasting moisture",
      "Soothes tightness",
      "Plumps skin"
    ]
  },
  "concern-sensitivity": {
    id: "concern-sensitivity",
    name: "Soothing & Calming",
    description: "Calm irritated skin and reduce redness. Gentle care for reactive skin.",
    bannerImage: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1600&q=80",
    benefits: [
      "Calms irritation",
      "Reduces redness",
      "Strengthens barrier",
      "Gentle formulas"
    ]
  }
};

const CategoryPage: React.FC = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const categoryInfo = categorySlug ? categories[categorySlug] : null;
  const products = categorySlug ? getProductsByCategory(categorySlug) : [];
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    window.addEventListener("resize", checkScrollButtons);
    return () => window.removeEventListener("resize", checkScrollButtons);
  }, [products]);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
      const newScrollLeft =
        direction === "left"
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });

      setTimeout(checkScrollButtons, 300);
    }
  };

  if (!categoryInfo) {
    return (
      <>
        <Header />
        <section className="section-padding bg-background pt-28">
          <div className="container-narrow mx-auto text-center">
            <h1 className="text-3xl font-semibold text-foreground mb-4">Category Not Found</h1>
            <p className="text-muted-foreground mb-6">The category you're looking for doesn't exist.</p>
            <Link to="/">
              <Button>Back to Home</Button>
            </Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <Header />
      <section className="bg-background pt-20">
      {/* Banner Section */}
      <div className="relative h-[300px] md:h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={categoryInfo.bannerImage}
            alt={categoryInfo.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative container-narrow mx-auto h-full flex flex-col justify-center text-white px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {categoryInfo.name}
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mb-6">
            {categoryInfo.description}
          </p>
          
          {categoryInfo.benefits && (
            <div className="flex flex-wrap gap-3">
              {categoryInfo.benefits.map((benefit, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm"
                >
                  {benefit}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Products Section */}
      <div className="section-padding">
        <div className="container-narrow mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl lg:text-3xl font-semibold text-foreground mb-2">
              All {categoryInfo.name} Products
            </h2>
            <p className="text-muted-foreground">
              Browse our complete collection of {categoryInfo.name.toLowerCase()} products
            </p>
          </div>

          {products.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">No products available in this category yet.</p>
              <Link to="/">
                <Button variant="outline">Continue Shopping</Button>
              </Link>
            </div>
          ) : (
            <div className="relative">
              {/* Navigation Buttons */}
              {canScrollLeft && (
                <button
                  onClick={() => scroll("left")}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 -translate-x-4 bg-background border border-border rounded-full p-2 shadow-lg hover:bg-muted transition-colors"
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
              )}

              {canScrollRight && (
                <button
                  onClick={() => scroll("right")}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 translate-x-4 bg-background border border-border rounded-full p-2 shadow-lg hover:bg-muted transition-colors"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              )}

              {/* Products Grid/Slider */}
              <div
                ref={scrollContainerRef}
                onScroll={checkScrollButtons}
                className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide pb-2"
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
              >
                {products.map((product) => (
                  <Card
                    key={product.slug}
                    className="w-[calc(50%-8px)] lg:w-[calc(25%-18px)] flex-shrink-0 border border-border bg-card overflow-hidden group cursor-pointer"
                  >
                    <Link to={`/product/${product.slug}`} className="block">
                      <div className="aspect-square bg-muted overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </Link>
                    <CardContent className="p-4 text-center">
                      <p className="text-xs text-primary uppercase tracking-wider mb-1">
                        {product.category}
                      </p>
                      <h3 className="font-medium text-foreground">
                        <Link to={`/product/${product.slug}`}>{product.name}</Link>
                      </h3>

                      <p className="text-sm text-muted-foreground mt-2 truncate">
                        {product.benefits}
                      </p>

                      <div className="mt-3 flex items-center justify-between text-sm text-muted-foreground">
                        <span>{product.size}</span>
                        <span className="inline-flex items-center gap-1 text-amber-400">
                          <Star className="h-4 w-4 fill-current" /> {product.rating}{" "}
                          <span className="text-xs text-muted-foreground">
                            • {product.reviews} reviews
                          </span>
                        </span>
                      </div>

                      <div className="mt-3 flex items-center justify-between">
                        <div className="text-left">
                          <div className="text-lg font-semibold text-foreground">
                            ₹ {product.price}
                          </div>
                          {product.oldPrice && (
                            <div className="text-sm text-muted-foreground line-through">
                              ₹ {product.oldPrice}
                            </div>
                          )}
                        </div>

                        <div className="w-28">
                          <Button
                            variant="default"
                            size="sm"
                            className="w-full"
                            aria-label={`Add ${product.name} to cart`}
                          >
                            Add to cart
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
    </>
  );
};

export default CategoryPage;