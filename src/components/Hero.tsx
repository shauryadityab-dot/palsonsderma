import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import banner1 from "../../public/assets/Q-Sera-Category-page-banner-1149x400.png";
import banner2 from "../../public/assets/Winter-banner-1149x400.jpeg";
import banner3 from "../../public/assets/Home-Page-Banner-2-scaled-1149x400.webp";
const Hero = () => {
  const banners = [
    {
      id: 1,
      image: banner1,
      title: "New Launches",
      subtitle: "Discover our latest dermatologist-backed formulas",
      cta: "Shop Now",
      href: "/new-launches",
    },
    {
      id: 2,
      image: banner2,
      title: "Best Sellers",
      subtitle: "Customer favorites for every skin type",
      cta: "Explore",
      href: "/products",
    },
    {
      id: 3,
      image: banner3,
      title: "Sensitive Care",
      subtitle: "Gentle, effective skincare for sensitive skin",
      cta: "Learn More",
      href: "/collections/sensitive",
    },
  ];

  return (
    <section className="pt-20 lg:pt-12">
      <div className="relative bg-secondary overflow-hidden">
        <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-12">
          <div className="-mx-4 sm:-mx-6 lg:-mx-8">
            <div className="w-full">
              <Carousel opts={{ loop: true }}>
                <CarouselContent>
                  {banners.map((b) => (
                    <CarouselItem key={b.id}>
                      <div className="relative w-full overflow-hidden rounded-lg" style={{ aspectRatio: 1149 / 400 }}>
                        <img src={b.image} alt={b.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                          <div className="max-w-2xl">
                            {/* <h3 className="text-white font-semibold text-2xl md:text-3xl">{b.title}</h3>
                            <p className="text-sm md:text-base text-white/90">{b.subtitle}</p> */}
                            <a href={b.href} className="mt-3 inline-block text-sm font-medium text-primary bg-white/10 px-4 py-2 rounded">
                              {b.cta}
                            </a>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
