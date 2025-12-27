import { Card, CardContent } from "@/components/ui/card";
import { Droplets, Sun, Shield, Sparkles } from "lucide-react";

const Products = () => {
  const categories = [
    {
      icon: Droplets,
      title: "Moisturizers",
      description: "Hydrating formulas for all skin types, from lightweight gels to rich creams.",
    },
    {
      icon: Sun,
      title: "Sun Protection",
      description: "Broad-spectrum SPF products that protect without leaving residue.",
    },
    {
      icon: Shield,
      title: "Acne Care",
      description: "Targeted treatments to clear and prevent breakouts effectively.",
    },
    {
      icon: Sparkles,
      title: "Anti-Aging",
      description: "Advanced formulations with retinoids and peptides for youthful skin.",
    },
  ];

  return (
    <section id="products" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
            Our Product Range
          </p>
          <h2 className="text-3xl lg:text-4xl font-semibold text-foreground mb-4">
            Comprehensive Dermatological Solutions
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            From daily essentials to specialized treatments, our product range addresses 
            every skincare concern with clinical precision.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card key={category.title} className="border border-border bg-card hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                  <category.icon className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {category.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {category.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
