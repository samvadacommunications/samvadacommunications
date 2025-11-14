import { Code, TrendingUp, Palette, Film, MessageCircle, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import webDev from "@/assets/web-dev.jpg";
import digitalMarketing from "@/assets/digital-marketing.jpg";
import graphicDesign from "@/assets/graphic-design.jpg";
import socialMedia from "@/assets/social-media.jpg";
import whatsappApi from "@/assets/whatsapp-api.jpg";
import offlineMarketing from "@/assets/offline-marketing.jpg";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "We develop websites that are fast, secure, responsive, and made to match your brand's personality — turning your ideas into digital reality.",
    image: webDev,
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "We specialize in delivering powerful digital marketing solutions that help businesses connect with their audience and drive measurable growth.",
    image: digitalMarketing,
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "From bold brand identities to stunning visuals that tell your story, we craft designs that captivate and convert.",
    image: graphicDesign,
  },
  {
    icon: Film,
    title: "Social Media & Film Promotions",
    description: "We promote films and brands across digital platforms with creativity and strategy that deliver real impact.",
    image: socialMedia,
  },
  {
    icon: MessageCircle,
    title: "WhatsApp API",
    description: "Connect with customers instantly and professionally using the WhatsApp API — automate, engage, and grow your business.",
    image: whatsappApi,
  },
  {
    icon: Package,
    title: "Offline Marketing",
    description: "We bring your brand to life in the real world with impactful offline marketing — from packaging to billboards.",
    image: offlineMarketing,
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Service Area
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl overflow-hidden shadow-lg border border-border hover:shadow-xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Service Image */}
              {service.image && (
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              )}
              
              {/* Service Content */}
              <div className="p-6 space-y-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground">
                  <service.icon size={28} />
                </div>
                
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                
                <Link to="/services">
                  <Button 
                    variant="ghost" 
                    className="group-hover:text-secondary transition-colors p-0"
                  >
                    Get Started →
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/services">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
