import React, { useRef, useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

type Testimonial = {
  id: number;
  name: string;
  product: string;
  review: string;
  rating: number;
  avatar?: string;
  platform: "amazon" | "custom";
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Beauty M.",
    product: "Sunmate",
    review: "I had an acne breakout, my dermatologist recommended me this sunscreen. Since then I have been using it for around 4years. Now i don't have...",
    rating: 5,
    platform: "amazon",
  },
  {
    id: 2,
    name: "Tanisha",
    product: "Ridacne",
    review: "Its a great face wash. Has significantly reduced my acne. Was recommended by my Dermatologist and have been using this since then.",
    rating: 5,
    platform: "amazon",
  },
  {
    id: 3,
    name: "Leeza",
    product: "Ridacne",
    review: "A very good face wash indeed....a must buy for pimple and acne prone skin.It completely removes the oilyness from your skin but wont make you feel...",
    rating: 5,
    platform: "amazon",
  },
  {
    id: 4,
    name: "Somya Snigdha Rath",
    product: "Q-Sera Hair Serum",
    review: "I used to lose 20 strands of hair for each time I combed my hair. After using this product and using it for 2 weeks I see my hair turning softer, scalp staying...",
    rating: 5,
    avatar: "/assets/testimonial-avatar.jpg",
    platform: "custom",
  },
];

const Testimonials: React.FC = () => {
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
  }, []);

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
    <section className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl lg:text-3xl font-semibold text-foreground mb-2">
            Words from our Customers
          </h2>
        </div>

        {/* Testimonials Slider */}
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

          {/* Testimonials Container */}
          <div
            ref={scrollContainerRef}
            onScroll={checkScrollButtons}
            className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide pb-2"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="w-[85%] sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] flex-shrink-0 border border-border bg-muted/30 hover:shadow-md transition-shadow"
              >
                <CardContent className="p-6">
                  {/* Review Text */}
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-4 min-h-[80px]">
                    {testimonial.review}
                  </p>

                  {/* Star Rating */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  {/* Customer Info */}
                  <div className="flex items-center gap-3">
                    {/* Avatar */}
                    <div className="flex-shrink-0">
                      {testimonial.platform === "amazon" ? (
                        <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center">
                          <svg
                            className="w-8 h-8"
                            viewBox="0 0 100 100"
                            fill="currentColor"
                          >
                            <path d="M63.5 77.5c-11.6 8.6-28.4 13.2-42.9 13.2-20.3 0-38.6-7.5-52.4-20 -1.1-.9-.1-2.2 1.2-1.5 14.8 8.6 33.1 13.8 52 13.8 12.7 0 26.7-2.6 39.6-8.1 1.9-.8 3.5 1.3 1.6 2.6z" />
                            <path d="M67.8 72.3c-1.5-1.9-9.8-.9-13.5-.5-1.1.1-1.3-0.8-.3-1.5 6.6-4.7 17.5-3.3 18.8-1.8 1.3 1.6-.3 12.5-6.6 17.7-1 .8-1.9.4-1.5-.7 1.4-3.5 4.5-11.3 3.1-13.2z" />
                            <path d="M61 20v-3.8c0-.6.4-1 1-1h17.7c.6 0 1 .4 1 1V20c0 .6-.5 1.3-1.3 2.5L69 37.7c2.6-.1 5.4.3 7.8 1.6.5.3.6.7.7 1.1v4c0 .6-.6 1.2-1.3.9-5.5-2.9-12.8-3.2-18.9.1-.6.3-1.2-.3-1.2-.9v-3.8c0-.7 0-1.8.7-2.9L68.5 21H62c-.6 0-1-.4-1-1z" />
                          </svg>
                        </div>
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-red-400 flex items-center justify-center">
                          <span className="text-white font-semibold text-lg">
                            {testimonial.name.charAt(0)}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Name and Product */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-foreground text-sm truncate">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-muted-foreground truncate">
                        {testimonial.product}
                      </p>
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

export default Testimonials;