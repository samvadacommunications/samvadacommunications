import { Link } from "react-router-dom";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { ArrowRight, Target, Eye, Sparkles } from "lucide-react";
import about from "@/assets/about-illustration.png";

export default function About() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,oklch(0.70_0.15_285/0.25),transparent_60%)]" />
        <div className="container-x py-16 md:py-24 text-center max-w-3xl mx-auto">
          <Reveal>
            <span className="chip mx-auto">Our Story</span>
            <h1 className="mt-5 text-4xl md:text-6xl font-display font-extrabold tracking-tight">
              We build brands that <span className="gradient-text">refuse to blend in.</span>
            </h1>
            <p className="mt-5 text-muted-foreground text-lg">
              Since 2022, Samvada Communications has helped ambitious businesses scale through strategy, creative and technology — under one accountable roof.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="rounded-[2rem] bg-gradient-to-br from-[oklch(0.96_0.02_285)] to-white border border-border p-6 md:p-10 shadow-soft">
              <img src={about} alt="Samvada team collaborating" loading="lazy" width={1024} height={1024} className="w-full" />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold">From a small idea, to a growing creative force.</h2>
            <p className="mt-4 text-muted-foreground">
              Samvada Communications was founded in 2022 with one belief: brands deserve a partner who genuinely cares about their growth. What started as a small studio quickly grew into a multi-disciplinary team blending strategy, design, marketing and technology — serving clients across India.
            </p>
            <p className="mt-3 text-muted-foreground">
              Today, we help 100+ brands turn their vision into measurable digital outcomes.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-[oklch(0.98_0.005_250)]">
        <div className="container-x">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="chip mx-auto">Leadership</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-display font-extrabold">The people behind the brand.</h2>
          </Reveal>
          <div className="mt-12 max-w-3xl mx-auto">
            <Reveal>
              <div className="soft-card soft-card-hover p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <img 
                  src="/Founder_02.jpeg" 
                  alt="Swasthik Althar" 
                  className="size-48 md:size-64 rounded-full object-cover ring-8 ring-white shadow-glow shrink-0" 
                />
                <div className="text-center md:text-left">
                  <div className="font-display font-extrabold text-2xl md:text-4xl">Swasthik Althar</div>
                  <div className="text-sm md:text-base text-[color:var(--brand-2)] font-semibold uppercase tracking-wider mt-2">Founder & CEO</div>
                  <p className="mt-5 text-muted-foreground leading-relaxed text-base md:text-lg">
                    With a passion for digital innovation and strategic growth, Swasthik founded Samvada Communications to bridge the gap between creative storytelling and measurable business results. Under his leadership, the agency has rapidly grown to empower over 100 brands, transforming their digital presence and driving meaningful impact across various industries.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid md:grid-cols-2 gap-6">
          {[
            { icon: Target, title: "Our Mission", text: "To empower every business — big or small — with digital solutions that drive measurable growth and lasting impact." },
            { icon: Eye, title: "Our Vision", text: "To be South India's most trusted creative growth partner, known for ideas that are bigger, bolder and built to last." },
          ].map((m, i) => (
            <Reveal key={m.title} delay={i * 100}>
              <div className="soft-card p-8 h-full">
                <div className="size-12 rounded-2xl gradient-brand text-white grid place-items-center shadow-glow"><m.icon className="size-5" /></div>
                <h3 className="mt-5 text-2xl font-display font-extrabold">{m.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{m.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section bg-[oklch(0.98_0.005_250)]">
        <div className="container-x">
          <Reveal className="text-center max-w-xl mx-auto">
            <span className="chip mx-auto"><Sparkles className="size-3.5" /> Achievements</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-display font-extrabold">Numbers that tell our story.</h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { v: 100, s: "+", l: "Happy Clients" },
              { v: 500, s: "+", l: "Projects Delivered" },
              { v: 3, s: "+", l: "Years of Craft" },
              { v: 98, s: "%", l: "Satisfaction Rate" },
            ].map((k, i) => (
              <Reveal key={k.l} delay={i * 60}>
                <div className="soft-card p-6 text-center">
                  <div className="font-display font-extrabold text-3xl md:text-4xl gradient-text"><Counter to={k.v} suffix={k.s} /></div>
                  <div className="mt-2 text-sm text-muted-foreground">{k.l}</div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 text-center">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full gradient-brand text-white px-6 py-3.5 text-sm font-semibold shadow-glow">
              Work with us <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
