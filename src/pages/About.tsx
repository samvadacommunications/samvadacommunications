import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Target, Users, Award, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { useCounter } from "@/hooks/use-counter";

const About = () => {
  const stats = [
    { icon: Users, value: 100, suffix: "+", label: "Happy Clients" },
    { icon: Award, value: 3, suffix: "+", label: "Years Experience" },
    { icon: Target, value: 500, suffix: "+", label: "Projects Completed" },
    { icon: TrendingUp, value: 98, suffix: "%", label: "Client Satisfaction" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">Samvada Communications</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Since 2022, Samvada Communications has been on a mission to redefine digital marketing 
              with purpose, passion, and performance.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <img 
                src={logo} 
                alt="Samvada Communications Logo" 
                className="w-64 h-64 mx-auto rounded-3xl shadow-2xl bg-gradient-to-br from-primary/10 to-secondary/10 p-8"
              />
            </div>
            
            <div className="space-y-6 animate-slide-in-right">
              <h2 className="text-3xl md:text-4xl font-bold">
                We Create Digital Ideas That Are Bigger, Bolder, and Built to Make an Impact
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Samvada Communications, every strategy is rooted in purpose, driven by creativity, 
                and designed to deliver measurable results. We think beyond trends, beyond platforms — 
                because your brand deserves more than ordinary.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We're not just another digital marketing company — we're your creative partners in 
                building a bold, lasting digital presence. From local roots to national reach, we craft 
                ideas that are bigger, bolder, and built to make an impact.
              </p>
              <div className="flex gap-4">
                <Link to="/services">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                    Our Services
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-gradient-to-r from-primary to-navy py-20 mb-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const { count, ref } = useCounter(stat.value);
                return (
                  <div 
                    key={stat.label} 
                    ref={ref}
                    className="text-center animate-scale-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-secondary/20 flex items-center justify-center">
                      <stat.icon size={32} className="text-secondary" />
                    </div>
                    <div className="text-4xl font-bold text-primary-foreground mb-2">
                      {count}{stat.suffix}
                    </div>
                    <div className="text-primary-foreground/80">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Leadership</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The visionary minds behind Samvada Communications, driving innovation and excellence in digital solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Founder */}
            <div className="bg-card rounded-3xl p-8 shadow-lg border border-border text-center animate-fade-in hover:shadow-xl transition-all duration-300">
              <div className="relative mb-6">
                <img 
                  src="/founder_SC.jpg" 
                  alt="Mithun Kumar Mendon" 
                  className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-secondary/20 shadow-lg"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">Mithun Kumar Mendon</h3>
              <p className="text-secondary font-semibold mb-4">Founder</p>
              <p className="text-muted-foreground leading-relaxed">
                Visionary leader and founder of Samvada Communications with extensive experience in digital marketing and business strategy. 
                Passionate about empowering businesses through innovative digital solutions and strategic growth.
              </p>
            </div>

            {/* Co-Founder */}
            <div className="bg-card rounded-3xl p-8 shadow-lg border border-border text-center animate-fade-in hover:shadow-xl transition-all duration-300" style={{ animationDelay: '0.2s' }}>
              <div className="relative mb-6">
                <img 
                  src="/co_founder_SC.jpg" 
                  alt="Swasthik Althar" 
                  className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-secondary/20 shadow-lg"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">Swasthik Althar</h3>
              <p className="text-secondary font-semibold mb-4">Co-Founder & CEO</p>
              <p className="text-muted-foreground leading-relaxed">
                Co-founder and CEO of Samvada Communications, specializing in business development and digital innovation. 
                Drives excellence in client relationships and cutting-edge business strategies.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border animate-fade-in">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground mb-6">
                <Target size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower businesses with innovative digital solutions that drive growth, enhance 
                brand visibility, and create lasting connections with their audience. We are committed 
                to delivering excellence through creativity, strategy, and measurable results.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border animate-fade-in">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground mb-6">
                <TrendingUp size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become the most trusted digital marketing partner for businesses across India, 
                recognized for our bold creativity, ethical practices, and commitment to transforming 
                brands into powerful digital experiences that resonate and inspire.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
