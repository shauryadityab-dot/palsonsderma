const PromoBanner = () => {
  return (
    <section className="bg-background">
      <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="bg-accent rounded-lg overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="p-8 lg:p-12">
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
                Expert Formulations
              </p>
              <h2 className="text-2xl lg:text-3xl font-semibold text-foreground mb-4">
                Developed with Dermatologists
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Every Palsons Derma product is formulated in collaboration with 
                board-certified dermatologists, ensuring clinical efficacy and 
                safety for all skin types.
              </p>
            </div>
            <div className="h-64 lg:h-80">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80"
                alt="Dermatology laboratory"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
