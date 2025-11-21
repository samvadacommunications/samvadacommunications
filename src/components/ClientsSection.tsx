const clients = [
  { name: "TagSkills", logo: "/tagskills.jpg" },
  { name: "Skillyuvam Academy", logo: "/skill yuvam logo.jpg" },
  { name: "Adugemane catring pvt. Ltd", logo: "/aduge mane logo.jpg" },
  { name: "Ashrith College", logo: "/ashrith clg logo.jpg" },
  { name: "Gayatri", logo: "/gaythri logo.jpg" },
  { name: "Liya", logo: "/liya.jpg" },
  { name: "Paneer", logo: "/paneer.jpg" },
  { name: "Sano", logo: "/sano.jpg" },
  { name: "Saligrama Kayaking Point", logo: "/Saligrama kayaking point.jpg" },
];

import { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ClientsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const scrollAmount = 1;
        
        if (scrollLeft <= 0) {
          scrollRef.current.scrollLeft = scrollWidth / 2;
        } else {
          scrollRef.current.scrollLeft -= scrollAmount;
        }
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="bg-card rounded-3xl p-8 shadow-lg border border-border overflow-hidden">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold animate-fade-in">
              Trusted by Leading Brands
            </h2>
          </div>

          {/* Scrolling Container */}
          <div className="relative">
            <div 
              ref={scrollRef}
              className="flex overflow-x-auto scrollbar-hide gap-6 px-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="flex-shrink-0 flex flex-col items-center justify-center p-6 bg-background rounded-xl shadow-sm border border-border hover:shadow-md transition-all duration-300 min-w-[140px]"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-12 w-auto object-contain mb-3"
                  />
                  <span className="text-xs font-medium text-muted-foreground text-center">{client.name}</span>
                </div>
              ))}
            </div>

            {/* Gradient overlays */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-card to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-card to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
