import React, { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const skinTypes = [
  { id: "dry", label: "Dry", image: "https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=800&q=80" },
  { id: "oily", label: "Oily", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80" },
  { id: "combination", label: "Combination", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80" },
  { id: "sensitive", label: "Sensitive", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80" },
  { id: "normal", label: "Normal", image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=800&q=80" },
];

const concerns = [
  { id: "acne", label: "Acne", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80" },
  { id: "aging", label: "Aging", image: "https://images.unsplash.com/photo-1513116476489-7635e79feb27?auto=format&fit=crop&w=800&q=80" },
  { id: "hyperpigmentation", label: "Hyperpigmentation", image: "https://images.unsplash.com/photo-1535914254981-b5012eebbd15?auto=format&fit=crop&w=800&q=80" },
  { id: "dryness", label: "Dryness", image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80" },
  { id: "sensitivity", label: "Sensitivity", image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80" },
];

const SliderSection: React.FC<{ items: typeof skinTypes; urlPrefix: string }> = ({ items, urlPrefix }) => {
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
  }, [items]);

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

      {/* Slider Container */}
      <div
        ref={scrollContainerRef}
        onScroll={checkScrollButtons}
        className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide pb-2"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {items.map((item) => (
          <Card
            key={item.id}
            className="w-[calc(50%-8px)] sm:w-[calc(33.333%-16px)] lg:w-[calc(20%-19.2px)] flex-shrink-0 border border-border bg-card overflow-hidden"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img src={item.image} alt={item.label} className="w-full h-full object-cover" />
            </div>
            <CardContent className="p-4 text-center">
              <h4 className="font-medium text-foreground mb-2">{item.label}</h4>
              <Link to={`/category/${urlPrefix}-${item.id}`}>
                <Button variant="default" size="sm" className="w-full">
                  Shop {item.label}
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

const ShopBy: React.FC = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl lg:text-3xl font-semibold text-foreground mb-2">Shop by</h2>
          <p className="text-muted-foreground">Browse products by skin type or skin concern</p>
        </div>

        <Tabs defaultValue="skin-types">
          <TabsList className="max-w-md mx-auto mb-6">
            <TabsTrigger value="skin-types">By Skin Type</TabsTrigger>
            <TabsTrigger value="concerns">By Concern</TabsTrigger>
          </TabsList>

          <TabsContent value="skin-types">
            <SliderSection items={skinTypes} urlPrefix="skin-type" />
          </TabsContent>

          <TabsContent value="concerns">
            <SliderSection items={concerns} urlPrefix="concern" />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ShopBy;