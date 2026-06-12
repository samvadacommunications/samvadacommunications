
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, ArrowRight, Plus, Minus } from "lucide-react";

const faqs = [
  { q: "How quickly will you respond?", a: "Most messages get a reply within a few hours during business hours. Maximum response time is 48 hours." },
  { q: "Do you work with clients outside India?", a: "Yes — we work with brands across regions. All collaboration happens over email, calls and shared workspaces." },
  { q: "What does a free consultation include?", a: "A 30-minute call to understand your goals, share an honest opinion and outline a roadmap. No obligation." },
];

export default function Contact() {
  const [open, setOpen] = useState(0);
  return (
    <SiteLayout>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,oklch(0.70_0.15_285/0.22),transparent_60%)]" />
        <div className="container-x py-16 md:py-24 text-center max-w-3xl mx-auto">
          <Reveal>
            <span className="chip mx-auto">Contact</span>
            <h1 className="mt-5 text-4xl md:text-6xl font-display font-extrabold tracking-tight">
              Let's build something <span className="gradient-text">impactful.</span>
            </h1>
            <p className="mt-5 text-muted-foreground text-lg">
              Tell us about your brand, and we'll get back within 48 hours with ideas.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-x grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: Phone, label: "Call", value: "+91 7619394676" },
            { icon: Mail, label: "Email", value: "Officesamvada@gmail.com" },
            { icon: MapPin, label: "Visit", value: "Saibrakatte, Shiriyara 576210" },
            { icon: Clock, label: "Hours", value: "Mon – Sat · 9–6" },
          ].map((c) => (
            <Reveal key={c.label} className="h-full">
              <div className="soft-card soft-card-hover p-6 h-full flex flex-col justify-center">
                <div className="size-11 rounded-xl gradient-brand text-white grid place-items-center shrink-0"><c.icon className="size-5" /></div>
                <div className="mt-4 text-xs uppercase tracking-wide font-semibold text-muted-foreground">{c.label}</div>
                <div className="mt-1 font-semibold">{c.value}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x max-w-4xl mx-auto">
          <Reveal>
            <div className="soft-card overflow-hidden h-[420px] lg:h-[500px]">
              <iframe
                title="Samvada Location"
                src="https://maps.google.com/maps?q=13.5127448,74.7745609&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x max-w-3xl">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold">Quick answers.</h2>
          </Reveal>
          <div className="mt-8 space-y-3">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={f.q} delay={i * 60}>
                  <div className={`soft-card ${isOpen ? "border-[color:var(--brand-2)]/40" : ""}`}>
                    <button onClick={() => setOpen(isOpen ? -1 : i)} className="w-full flex items-center justify-between gap-4 px-5 py-5 text-left">
                      <span className="font-display font-bold">{f.q}</span>
                      <span className="size-8 grid place-items-center rounded-full bg-secondary">{isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}</span>
                    </button>
                    <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                      <div className="overflow-hidden">
                        <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
