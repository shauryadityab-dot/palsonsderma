import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "123 Derma Street, Medical District, Mumbai 400001, India",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 22 1234 5678",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@palsonsderma.com",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-secondary">
      <div className="container-narrow mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div>
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Get in Touch
            </p>
            <h2 className="text-3xl lg:text-4xl font-semibold text-foreground mb-6">
              We'd Love to Hear From You
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Have questions about our products or interested in partnering with us? 
              Our team is here to help. Reach out and we'll respond as soon as possible.
            </p>
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-lg p-6 lg:p-8 border border-border">
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    First Name
                  </label>
                  <Input placeholder="John" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Last Name
                  </label>
                  <Input placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Email
                </label>
                <Input type="email" placeholder="john@example.com" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Phone (Optional)
                </label>
                <Input type="tel" placeholder="+91 98765 43210" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Message
                </label>
                <Textarea 
                  placeholder="How can we help you?" 
                  rows={4}
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
