import { CheckCircle } from "lucide-react";

const About = () => {
  const highlights = [
    "FDA-approved formulations",
    "Dermatologist recommended",
    "Clinically tested ingredients",
    "Sustainable manufacturing",
  ];

  return (
    <section id="about" className="section-padding bg-secondary">
      <div className="container-narrow mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="bg-muted rounded-lg aspect-square flex items-center justify-center overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
                alt="Laboratory research"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              About Palsons Derma
            </p>
            <h2 className="text-3xl lg:text-4xl font-semibold text-foreground mb-6">
              Science-Driven Skincare You Can Trust
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Founded with a commitment to dermatological excellence, Palsons Derma has been 
              at the forefront of skincare innovation for over two decades. Our research-backed 
              formulations are developed in collaboration with leading dermatologists and 
              pharmaceutical experts.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We believe that effective skincare should be accessible to everyone. That's why 
              we invest heavily in research and development to create products that deliver 
              real, visible results.
            </p>
            <ul className="space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
