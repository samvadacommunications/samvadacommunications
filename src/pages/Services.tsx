import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Code, TrendingUp, Palette, Film, MessageCircle, Package, ArrowRight } from "lucide-react";
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
    description: "We develop websites that are fast, secure, responsive, and made to match your brand's personality — turning your ideas into digital reality. From concept to launch, we ensure every detail delivers an exceptional user experience that drives results.",
    features: [
      "Custom Website Design",
      "E-commerce Development",
      "Responsive Mobile Design",
      "SEO Optimization",
      "Fast Loading Speed",
      "Secure & Reliable"
    ],
    image: webDev,
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "We specialize in delivering powerful digital marketing solutions that help businesses connect with their audience, boost engagement, and drive measurable growth. From social media and search engine marketing to email campaigns and content strategy — we help you build a strong online presence that gets real results.",
    features: [
      "Social Media Marketing",
      "Search Engine Marketing",
      "Content Strategy",
      "Email Campaigns",
      "Analytics & Reporting",
      "Brand Management"
    ],
    image: digitalMarketing,
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "From bold brand identities to stunning visuals that tell your story, we craft designs that captivate and convert. Our creative team brings your vision to life with designs that stand out and leave a lasting impression.",
    features: [
      "Brand Identity Design",
      "Logo & Branding",
      "Marketing Materials",
      "Social Media Graphics",
      "Infographics",
      "Print Design"
    ],
    image: graphicDesign,
  },
  {
    icon: Film,
    title: "Social Media & Film Promotions",
    description: "We promote films and brands across digital platforms with creativity and strategy that deliver real impact. Our campaigns captivate audiences, spark conversations, and drive measurable results.",
    features: [
      "Social Media Campaigns",
      "Film Marketing",
      "Video Content Creation",
      "Influencer Marketing",
      "Viral Campaigns",
      "Audience Engagement"
    ],
    image: socialMedia,
  },
  {
    icon: MessageCircle,
    title: "WhatsApp API",
    description: "Connect with customers instantly and professionally using the WhatsApp API — automate, engage, and grow your business like never before. With seamless integration and personalized messaging, build stronger relationships and deliver exceptional experiences at scale.",
    features: [
      "Automated Messages",
      "Customer Support",
      "Broadcasting",
      "Order Notifications",
      "Two-Way Communication",
      "Integration Support"
    ],
    image: whatsappApi,
  },
  {
    icon: Package,
    title: "Offline Marketing",
    description: "We bring your brand to life in the real world with impactful offline marketing — from packaging and banners to billboards and sticker stamping. Our creative touch ensures your brand stands out and leaves a lasting impression wherever it appears.",
    features: [
      "Banner Design",
      "Packaging Design",
      "Billboard Advertising",
      "Sticker & Labels",
      "Brochures & Flyers",
      "Event Marketing"
    ],
    image: offlineMarketing,
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <span className="text-secondary font-semibold text-sm bg-secondary/10 px-4 py-2 rounded-full">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-6 mb-6">
              Complete Digital Solutions for Your{" "}
              <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
                Business Growth
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From web development to digital marketing, we offer comprehensive services 
              to help your business thrive in the digital world.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group bg-card rounded-2xl overflow-hidden shadow-lg border border-border hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Service Image */}
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
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
                  
                  <div className="space-y-2">
                    {service.features.slice(0, 4).map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <ArrowRight size={14} className="text-secondary flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link to="/contact">
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
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 mt-20">
          <div className="bg-gradient-to-r from-primary to-navy rounded-3xl p-12 text-center text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="bg-secondary hover:bg-secondary/90">
                  Contact Us Now
                </Button>
              </Link>
              <a href="tel:+917619394676">
                <Button size="lg" className="text-white hover:opacity-90" style={{ backgroundColor: '#9480E0' }}>
                  📞 Call +91 7619394676
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
