import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { getProductsByCollection } from "@/lib/products";
import { useRef, useState, useEffect } from "react";

const NewLaunches = () => {
  const products = getProductsByCollection("new");
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

  return (
    <section className="section-padding bg-secondary">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl lg:text-3xl font-semibold text-foreground mb-2">
            New Launches
          </h2>
          <p className="text-muted-foreground">
            Discover our latest dermatological innovations
          </p>
        </div>

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

          {/* Grid Container with Horizontal Scroll */}
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
                  <div className="aspect-square bg-muted overflow-hidden relative">
                    <Badge className="absolute top-3 left-3 z-10 bg-primary text-primary-foreground">
                      New
                    </Badge>
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
      </div>
    </section>
  );
};

export default NewLaunches;