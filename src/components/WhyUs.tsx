import { Award, Users, FlaskConical, Heart } from "lucide-react";

const WhyUs = () => {
  const stats = [
    { icon: Award, value: "25+", label: "Years in Industry" },
    { icon: Users, value: "500K+", label: "Happy Customers" },
    { icon: FlaskConical, value: "100+", label: "Products Developed" },
    { icon: Heart, value: "50+", label: "Countries Served" },
  ];

  return (
    <section id="why-us" className="section-padding bg-primary text-primary-foreground">
      <div className="container-narrow mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <p className="text-sm font-medium uppercase tracking-wider mb-4 opacity-90">
            Why Choose Us
          </p>
          <h2 className="text-3xl lg:text-4xl font-semibold mb-4">
            A Legacy of Dermatological Excellence
          </h2>
          <p className="opacity-90 leading-relaxed">
            Our commitment to quality, innovation, and patient outcomes has made us 
            a trusted name in dermatological care across the globe.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="w-14 h-14 bg-primary-foreground/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-7 w-7" />
              </div>
              <p className="text-4xl font-bold mb-2">{stat.value}</p>
              <p className="text-sm opacity-80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
