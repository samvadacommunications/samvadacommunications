import { Button } from "@/components/ui/button";
import { CheckCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import teamHero from "@/assets/team-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Work With Our Full Time{" "}
              <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
                Experts
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed">
              Work with our full-time experts who turn ideas into impact. Backed by deep industry 
              knowledge and a passion for perfection, we ensure every project is delivered with 
              precision, professionalism, and excellence you can trust.
            </p>

            {/* CTA Card */}
            <div className="bg-card rounded-2xl p-6 shadow-lg border border-border space-y-4 animate-scale-in">
              <div className="flex items-center space-x-2 text-foreground">
                <CheckCircle className="text-secondary" size={20} />
                <span className="font-medium">The best agency solution 2022</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/about">
                  <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                    Learn More
                  </Button>
                </Link>
                
                <a href="tel:+917619394676" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="w-full group">
                    <Phone className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                    <span className="font-semibold">+91 7619394676</span>
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={teamHero} 
                alt="Expert team working together" 
                className="w-full h-auto object-cover block"
              />
              
              {/* Experience Badge */}
              <div className="absolute bottom-2 right-4 md:bottom-4 md:right-8 bg-secondary text-secondary-foreground rounded-full w-24 h-24 md:w-32 md:h-32 flex flex-col items-center justify-center shadow-xl animate-scale-in">
                <span className="text-2xl md:text-4xl font-bold">3+</span>
                <span className="text-xs md:text-sm font-medium text-center">Years of<br />Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
