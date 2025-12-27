import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

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
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {skinTypes.map((s) => (
                <Card key={s.id} className="border border-border bg-card overflow-hidden">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={s.image} alt={s.label} className="w-full h-full object-cover" />
                  </div>
                  <CardContent className="p-4 text-center">
                    <h4 className="font-medium text-foreground mb-2">{s.label}</h4>
                    <a href={`#skin-type-${s.id}`}>
                      <Button variant="default" size="sm" className="w-full">Shop {s.label}</Button>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="concerns">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {concerns.map((c) => (
                <Card key={c.id} className="border border-border bg-card overflow-hidden">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={c.image} alt={c.label} className="w-full h-full object-cover" />
                  </div>
                  <CardContent className="p-4 text-center">
                    <h4 className="font-medium text-foreground mb-2">{c.label}</h4>
                    <a href={`#concern-${c.id}`}>
                      <Button variant="default" size="sm" className="w-full">Shop {c.label}</Button>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ShopBy;
