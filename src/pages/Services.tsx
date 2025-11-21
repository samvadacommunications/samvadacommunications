import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Code, TrendingUp, Palette, Film, MessageCircle, Package } from "lucide-react";
import { Link } from "react-router-dom";
import webDev from "@/assets/web-dev.jpg";
import graphicDesign from "@/assets/graphic-design.jpg";
import socialMedia from "@/assets/social-media.jpg";
import whatsappApi from "@/assets/whatsapp-api.jpg";


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
    image: "/digital_marketing.jpg",
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
    image: "/image.webp",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Complete Digital Solutions for Your{" "}
            <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
              Business Growth
            </span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            From web development to digital marketing, we offer comprehensive services 
            to help your business thrive in the digital world.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto">
          <div className="space-y-10 sm:space-y-12 md:space-y-16">
            {services.map((service, index) => (
              <Card 
                key={service.title} 
                className={`overflow-hidden animate-fade-in hover:shadow-xl transition-shadow duration-300 ${index % 2 === 0 ? "" : "bg-muted/50"}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`grid md:grid-cols-2 gap-8 ${index % 2 === 0 ? "" : "md:grid-flow-dense"}`}>
                  
                  {/* Image Column */}
                  <div className={`relative h-56 sm:h-64 md:h-auto ${index % 2 === 0 ? "" : "md:col-start-2"}`}>
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
                  </div>

                  {/* Content Column */}
                  <CardContent className={`p-6 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 0 ? "" : "md:col-start-1 md:row-start-1"}`}>
                    
                    {/* Icon + Title */}
                    <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
                      <div className="p-2 sm:p-3 bg-primary/10 rounded-lg">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold">{service.title}</h2>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-5 sm:mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="mb-5 sm:mb-6">
                      <h3 className="text-lg font-semibold mb-3">What We Offer:</h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <Link to="/contact">
                      <Button className="w-fit">Get Started</Button>
                    </Link>
                    
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
