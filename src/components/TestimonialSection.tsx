import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    text: "I am really really happy with the kind of service you guys provide every single time. There is an event that I give you or a small photo shoot or video editing or Digital Marketing. Every single thing is done so smoothly. You are always available, just a call away with lot of patience. You help and resolve each doubt of mine. Long way to go to you and your team. Let's continue to work together for many more years team.",
    author: "Anushree Chandrashekar",
    position: "Founder & CEO at Skillyuvam Academy",
    avatar: "/Founder_and_CEO_at SkillyuvamAcademy.jpg",
  },
  {
    text: "When we decided to launch our new TagSkills Center in Udupi, we knew we needed more than just design, we needed storytelling. That's exactly what Samvada Communications delivered. From the banners to the posters and promotional content, every piece reflected our vision, values, and local connection. Their designs were crisp, culturally relevant, and aligned perfectly with our brand. The on-time delivery and responsiveness made the entire experience smooth and collaborative. Samvada didn't just create marketing material, they helped bring the TagSkills Udupi story to life. Grateful for their creativity, professionalism, and support throughout our launch. Looking forward to many more collaborations ahead.",
    author: "Prashun Shetty",
    position: "Founder & CEO at TagSkills",
    avatar: "/Founder_and_CEO_at_TagSkills.jpg",
  },
  {
    text: "I have been collaborating with Samvada Communications for the past year for my Adugemane Catering digital marketing, and their support has been outstanding. Their creative ideas, professional approach, and consistent delivery have helped my business grow. They have also handled the digital communications for Vara Siddhi Vinayaka PU College with impressive results. I've recommended them to many others, all of whom have been equally satisfied. Highly recommended for impactful and dependable digital marketing & marketing support.",
    author: "Pradeep Shetty Bellala",
    position: "Adugemane catring pvt. Ltd",
    avatar: "/PRADEEP SHETTY K.jpg",
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Auto-scroll every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-b from-primary to-navy relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <p className="text-secondary font-medium mb-2">Our Testimonial</p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground">
            Customer Feedbacks
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-2xl relative animate-scale-in">
            {/* Quote Icon */}
            <Quote className="text-secondary/20 absolute top-8 left-8" size={80} />
            


            {/* Testimonial Content */}
            <div className="relative z-10 pt-12">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 italic">
                "{currentTestimonial.text}"
              </p>

              <div className="border-t border-border pt-6 flex items-center space-x-4">
                <img 
                  src={currentTestimonial.avatar} 
                  alt={currentTestimonial.author}
                  className={`w-16 h-16 rounded-full object-cover border-2 border-secondary/20 ${
                    currentTestimonial.author === "Prashun Shetty" ? "object-top" : ""
                  }`}
                />
                <div>
                  <h4 className="text-xl font-bold text-foreground">
                    {currentTestimonial.author}
                  </h4>
                  <p className="text-muted-foreground">
                    {currentTestimonial.position}
                  </p>
                </div>
              </div>
            </div>

            {/* Indicator Dots */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-secondary w-8"
                      : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
