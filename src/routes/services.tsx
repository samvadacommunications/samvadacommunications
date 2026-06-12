import { Link } from "react-router-dom";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import {
  ArrowRight, CheckCircle2, Globe, Megaphone, Palette, Video, MessageCircle, Printer,
} from "lucide-react";

import webDev from "@/assets/web-dev.jpg";
import digitalMarketing from "@/assets/digital-marketing.jpg";
import graphicDesign from "@/assets/graphic-design.jpg";
import socialMedia from "@/assets/social-media.jpg";
import whatsappApi from "@/assets/whatsapp-api.jpg";
import offlineMarketing from "@/assets/offline-marketing.jpg";

const services = [
  {
    img: webDev,
    icon: Globe, title: "Web Development",
    benefit: "Websites that look premium, load fast and convert visitors into customers.",
    features: ["Custom Website Design", "Responsive Development", "Fast Loading Speed", "E-commerce Development", "SEO Optimization", "Secure Websites"],
    process: ["Discovery & Wireframes", "Design System & Mockups", "Development & QA", "Launch & Support"],
  },
  {
    img: digitalMarketing,
    icon: Megaphone, title: "Digital Marketing",
    benefit: "Strategy-led marketing across search, social and email that delivers real ROI.",
    features: ["Social Media Marketing", "Content Strategy", "Analytics & Reporting", "Search Engine Marketing", "Email Campaigns", "Brand Management"],
    process: ["Audit & Goal Setting", "Channel Strategy", "Creative & Campaigns", "Optimise & Scale"],
  },
  {
    img: graphicDesign,
    icon: Palette, title: "Graphic Design",
    benefit: "Distinct visual identities and assets that make your brand impossible to ignore.",
    features: ["Brand Identity Design", "Marketing Materials", "Infographics", "Logo Design", "Social Media Graphics", "Print Design"],
    process: ["Brand Discovery", "Concept Directions", "Refinement", "Brand Guidelines"],
  },
  {
    img: socialMedia,
    icon: Video, title: "Social Media & Film Promotion",
    benefit: "Campaigns and short-form films engineered to build awareness and momentum.",
    features: ["Social Media Campaigns", "Video Content Creation", "Viral Campaigns", "Film Marketing", "Influencer Marketing", "Audience Engagement"],
    process: ["Idea & Script", "Production", "Post & Distribution", "Performance Review"],
  },
  {
    img: whatsappApi,
    icon: MessageCircle, title: "WhatsApp API",
    benefit: "Turn WhatsApp into a 24/7 sales and support engine with official Business API.",
    features: ["Automated Messaging", "Broadcasting", "Customer Support", "Order Notifications", "Two-Way Communication", "Integration Support"],
    process: ["Account Setup", "Flow Design", "Integration", "Training & Handover"],
  },
  {
    img: offlineMarketing,
    icon: Printer, title: "Offline Marketing",
    benefit: "Premium print, packaging and out-of-home that complement your digital presence.",
    features: ["Banner Design", "Billboard Advertising", "Brochures & Flyers", "Packaging Design", "Stickers & Labels", "Event Marketing"],
    process: ["Brief & Concepts", "Design", "Print Production", "Delivery & Install"],
  },
];

export default function Services() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,oklch(0.70_0.15_285/0.22),transparent_60%)]" />
        <div className="container-x py-16 md:py-24 text-center max-w-3xl mx-auto">
          <Reveal>
            <span className="chip mx-auto">Services</span>
            <h1 className="mt-5 text-4xl md:text-6xl font-display font-extrabold tracking-tight">
              Premium digital services, <span className="gradient-text">crafted to scale.</span>
            </h1>
            <p className="mt-5 text-muted-foreground text-lg">
              Choose a single service or partner with us as your end-to-end growth team.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x space-y-8">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <div className="soft-card overflow-hidden">
                <div className={`grid lg:grid-cols-2 gap-0 items-stretch ${i % 2 !== 0 ? "lg:[&>*:first-child]:order-last" : ""}`}>
                  <div className="relative min-h-[300px] lg:min-h-full">
                    <img src={s.img} alt={s.title} className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                  <div className="p-8 md:p-10 flex flex-col justify-center bg-white">
                    <div className="size-12 rounded-2xl gradient-brand text-white grid place-items-center shadow-glow mb-6"><s.icon className="size-6" /></div>
                    <h2 className="text-2xl md:text-3xl font-display font-extrabold text-foreground">{s.title}</h2>
                    <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{s.benefit}</p>
                    
                    <div className="mt-8 grid sm:grid-cols-2 gap-8">
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-[color:var(--brand-2)]">What's Included</div>
                        <ul className="mt-3 space-y-2.5 text-sm">
                          {s.features.slice(0,4).map((f) => (
                            <li key={f} className="flex gap-2"><CheckCircle2 className="size-4 text-[color:var(--brand-2)] mt-0.5" />{f}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-[color:var(--brand-2)]">Our Process</div>
                        <ol className="mt-3 space-y-2.5 text-sm">
                          {s.process.map((p, idx) => (
                            <li key={p} className="flex gap-3">
                              <span className="size-6 rounded-full bg-secondary text-foreground grid place-items-center text-[11px] font-bold">{idx + 1}</span>
                              {p}
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                    
                    <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full gradient-brand text-white px-5 py-2.5 text-sm font-semibold w-fit shadow-glow">
                      Start a project <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-[2rem] gradient-brand text-white p-10 md:p-14 text-center shadow-glow">
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white">Not sure which service you need?</h2>
            <p className="mt-3 max-w-xl mx-auto text-white/85">Book a free consultation. We'll listen, audit and recommend the right path — no pressure.</p>
            <Link to="/contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-white text-[color:var(--brand)] px-6 py-3.5 text-sm font-semibold">
              Book Free Consultation <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
