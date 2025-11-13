const clients = [
  { name: "tagskills", logo: "/tagskills.jpg" },
  { name: "skillyuvam", logo: "/skillyuvam.jpg" },
  { name: "aduge", logo: "/aduge.jpg" },
  { name: "ashrith-new-logo", logo: "/ashrith-new-logo.jpeg.jpg" },
  { name: "gayatri-log-new", logo: "/gayatri-log-new.jpg" },
  { name: "liya", logo: "/liya.jpg" },
  { name: "paneer", logo: "/paneer.jpg" },
  { name: "sano", logo: "/sano.jpg" },
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
        const isMobile = window.innerWidth < 768;
        const scrollAmount = isMobile ? 150 : 200;
        
        if (scrollLeft + clientWidth >= scrollWidth) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }
    }, isMobile ? 2000 : 3000);

    return () => clearInterval(interval);
  }, []);

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <section className="py-16 bg-background border-y border-border overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl md:text-4xl font-bold animate-fade-in">
            Trusted by Leading Brands
          </h2>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => scroll('left')}
              className="h-10 w-10 p-0"
            >
              <ChevronLeft size={16} />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => scroll('right')}
              className="h-10 w-10 p-0"
            >
              <ChevronRight size={16} />
            </Button>
          </div>
        </div>
      </div>

      {/* Scrolling Container */}
      <div className="relative">
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide gap-6 px-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {clients.map((client, index) => (
            <div
              key={client.name}
              className="flex-shrink-0 flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 min-w-[140px]"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-12 w-auto object-contain mb-3"
              />
              <span className="text-xs font-medium text-gray-600 text-center">{client.name}</span>
            </div>
          ))}
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

export default ClientsSection;
