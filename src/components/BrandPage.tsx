import React, { useRef, useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { getProductsByBrand } from "@/lib/products";
import { getBrandBySlug } from "@/lib/brands";
import Header from "@/components/Header";

const BrandPage: React.FC = () => {
  const { brandSlug } = useParams<{ brandSlug: string }>();
  const brand = brandSlug ? getBrandBySlug(brandSlug) : null;
  const products = brandSlug ? getProductsByBrand(brandSlug) : [];
  
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

  if (!brand) {
    return (
      <>
        <Header />
        <section className="section-padding bg-background pt-28">
          <div className="container-narrow mx-auto text-center">
            <h1 className="text-3xl font-semibold text-foreground mb-4">Brand Not Found</h1>
            <p className="text-muted-foreground mb-6">The brand you're looking for doesn't exist.</p>
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
        {/* Brand Banner Section */}
        <div className="relative h-[300px] md:h-[400px] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={brand.bannerImage}
              alt={brand.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          
          <div className="relative container-narrow mx-auto h-full flex flex-col justify-center text-white px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {brand.name}
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mb-4">
              {brand.description}
            </p>
            {brand.story && (
              <p className="text-base max-w-3xl opacity-90">
                {brand.story}
              </p>
            )}
          </div>
        </div>

        {/* Products Section */}
        <div className="section-padding">
          <div className="container-narrow mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl lg:text-3xl font-semibold text-foreground mb-2">
                {brand.name} Products
              </h2>
              <p className="text-muted-foreground">
                Explore our complete collection from {brand.name}
              </p>
            </div>

            {products.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-4">No products available from this brand yet.</p>
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

export default BrandPage;