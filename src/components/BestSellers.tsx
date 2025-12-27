import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import product1 from "../../public/assets/product1.webp";
import product2 from "../../public/assets/product2.webp";
import product3 from "../../public/assets/product3.jpeg";
import product4 from "../../public/assets/product4.jpeg";

import { getProductsByCollection } from "@/lib/products";

const BestSellers = () => {
  const products = getProductsByCollection("bestsellers");

  return (
    <section className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl lg:text-3xl font-semibold text-foreground mb-2">
            Best Sellers
          </h2>
          <p className="text-muted-foreground">
            Our most trusted products recommended by dermatologists
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.slug} className="border border-border bg-card overflow-hidden group cursor-pointer">
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

                <p className="text-sm text-muted-foreground mt-2 truncate">{product.benefits}</p>

                <div className="mt-3 flex items-center justify-between text-sm text-muted-foreground">
                  <span>{product.size}</span>
                  <span className="inline-flex items-center gap-1 text-amber-400">
                    <Star className="h-4 w-4" /> {product.rating} <span className="text-xs text-muted-foreground">• {product.reviews} reviews</span>
                  </span>
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <div className="text-left">
                    <div className="text-lg font-semibold text-foreground">₹ {product.price}</div>
                    {product.oldPrice && (
                      <div className="text-sm text-muted-foreground line-through">₹ {product.oldPrice}</div>
                    )}
                  </div>

                  <div className="w-28">
                    <Button variant="default" size="sm" className="w-full" aria-label={`Add ${product.name} to cart`}>
                      Add to cart
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
