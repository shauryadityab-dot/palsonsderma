import { Shield, Award, FlaskConical, Users } from "lucide-react";

const TrustSection = () => {
  const trustPoints = [
    {
      icon: Shield,
      title: "Clinically Tested",
      description: "All products undergo rigorous clinical trials",
    },
    {
      icon: Award,
      title: "Dermatologist Approved",
      description: "Recommended by skin specialists worldwide",
    },
    {
      icon: FlaskConical,
      title: "Science-Backed",
      description: "Formulations based on latest research",
    },
    {
      icon: Users,
      title: "Trusted by Millions",
      description: "25+ years of dermatological excellence",
    },
  ];

  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-3">
            Trust in Dermatology
          </h2>
          <p className="opacity-90 max-w-xl mx-auto">
            Palsons Derma is committed to delivering safe, effective skincare 
            solutions backed by science and trusted by healthcare professionals.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustPoints.map((point) => (
            <div key={point.title} className="text-center">
              <div className="w-12 h-12 bg-primary-foreground/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <point.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">{point.title}</h3>
              <p className="text-sm opacity-80">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
