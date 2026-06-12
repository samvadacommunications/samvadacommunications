import { Link } from "react-router-dom";
import {
  ArrowRight, Sparkles, Globe, Megaphone, Palette, Video,
  MessageCircle, Printer, CheckCircle2, Clock, MessageSquare, Target,
  GraduationCap, Stethoscope, Building2, UtensilsCrossed, ShoppingBag, Rocket, Store, Briefcase,
  Compass, Map, PenTool, Send, TrendingUp, Star, Phone, Mail, MapPin, Plus, Minus,
} from "lucide-react";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import hero from "@/assets/hero-illustration.png";

export default function Index() {
  return (
    <SiteLayout>
      <Hero />
      <AboutPreview />
      <Services />
      <WhyUs />
      <Industries />
      <Process />
      <Testimonials />
      <Logos />
      <Contact />
      <FinalCTA />
    </SiteLayout>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-32 size-[560px] rounded-full bg-[radial-gradient(circle_at_center,oklch(0.70_0.15_285/0.35),transparent_60%)] blur-2xl" />
        <div className="absolute -bottom-40 -left-32 size-[520px] rounded-full bg-[radial-gradient(circle_at_center,oklch(0.58_0.16_285/0.25),transparent_60%)] blur-2xl" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,white,white,oklch(0.98_0.005_250))]" />
      </div>

      <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-10 items-center pt-10 md:pt-16 pb-16 md:pb-24">
        <Reveal>
          <span className="chip"><Sparkles className="size-3.5" /> Creative Growth Agency · Since 2022</span>
          <h1 className="mt-5 text-[40px] leading-[1.05] md:text-[64px] md:leading-[1.02] font-display font-extrabold tracking-tight">
            Your Partner in{" "}
            <span className="gradient-text">Digital Business Growth.</span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl">
            From web development to digital marketing, branding, design, and promotions — we help businesses scale with innovative digital solutions that are bigger, bolder and built to make an impact.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="group inline-flex items-center gap-2 gradient-brand text-white rounded-full px-6 py-3.5 text-sm font-semibold shadow-glow hover:brightness-110 transition">
              Get Free Consultation <ArrowRight className="size-4 group-hover:translate-x-0.5 transition" />
            </Link>
            <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3.5 text-sm font-semibold hover:bg-secondary transition">
              Explore Services
            </Link>
          </div>
          <div className="mt-8 flex items-center gap-4">
            <div className="flex -space-x-2">
              {["/tagskills.jpg", "/Saligrama kayaking point.jpg", "/aduge mane logo.jpg", "/ashrith clg logo.jpg"].map((src, i) => (
                <img key={i} src={src} alt="Client" className="size-9 rounded-full ring-2 ring-white object-contain bg-white shrink-0" />
              ))}
            </div>
            <div className="text-sm">
              <div className="font-semibold">100+ Happy Clients</div>
              <div className="text-muted-foreground">Trust us with their growth.</div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120} className="relative">
          <div className="relative aspect-[4/3] max-w-[560px] mx-auto overflow-hidden rounded-[2rem] shadow-soft">
            <img src="/herosectionimage.jpg" alt="Digital growth illustration" className="w-full h-full object-cover" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- LOGOS ---------- */
function Logos() {
  const brands = [
    "/tagskills.jpg",
    "/Saligrama kayaking point.jpg",
    "/aduge mane logo.jpg",
    "/ashrith clg logo.jpg",
    "/gaythri logo.jpg",
    "/liya.jpg",
    "/paneer.jpg",
    "/sano.jpg",
  ];
  return (
    <section className="py-16 border-y border-border bg-[oklch(0.98_0.005_250)] overflow-hidden">
      <div className="container-x mb-8">
        <Reveal>
          <p className="text-center text-xs uppercase tracking-[0.2em] font-semibold text-muted-foreground">Trusted by leading brands</p>
        </Reveal>
      </div>
      <div className="flex w-max gap-8 marquee">
        {[...brands, ...brands, ...brands, ...brands].map((b, i) => (
          <div key={i} className="flex-shrink-0 w-32 md:w-48 h-20 md:h-28 bg-white border border-border shadow-soft rounded-2xl p-3 flex items-center justify-center">
            <img src={b} alt="Client Logo" className="max-w-full max-h-full object-contain mix-blend-multiply" />
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- ABOUT PREVIEW ---------- */
function AboutPreview() {
  return (
    <section className="section">
      <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
        <Reveal className="relative order-2 lg:order-1">
          <div className="rounded-[2rem] bg-gradient-to-br from-[oklch(0.96_0.02_285)] to-white border border-border p-6 md:p-10 shadow-soft">
            <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80" alt="Team collaborating" loading="lazy" className="rounded-2xl w-full aspect-[4/3] object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-2 md:-right-6 glass-card rounded-2xl shadow-soft px-5 py-4 flex items-center gap-3">
            <div className="size-10 rounded-xl gradient-brand text-white grid place-items-center font-display font-extrabold">3+</div>
            <div>
              <div className="font-display font-extrabold text-sm">Years of Impact</div>
              <div className="text-xs text-muted-foreground">Since 2022</div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100} className="order-1 lg:order-2">
          <span className="chip">About Samvada</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-display font-extrabold tracking-tight">
            A creative growth agency built to make brands <span className="gradient-text">stand out.</span>
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Since 2022, Samvada Communications has helped businesses grow through digital marketing, web development, branding, creative design and promotional services. We create digital ideas that are bigger, bolder and built to make an impact.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Strategy + creative + tech under one roof",
              "Transparent process, measurable results",
              "Partnership mindset — your wins are ours",
            ].map((t) => (
              <li key={t} className="flex gap-3 text-sm">
                <CheckCircle2 className="size-5 text-[color:var(--brand-2)] mt-0.5" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <div className="mt-7 flex gap-3">
            <Link to="/about" className="rounded-full gradient-brand text-white px-5 py-3 text-sm font-semibold shadow-glow">About Us</Link>
            <Link to="/contact" className="rounded-full border border-border bg-white px-5 py-3 text-sm font-semibold hover:bg-secondary">Contact Us</Link>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { v: 100, s: "+", l: "Happy Clients" },
              { v: 500, s: "+", l: "Projects" },
              { v: 3, s: "+", l: "Years" },
              { v: 98, s: "%", l: "Satisfaction" },
            ].map((k) => (
              <div key={k.l} className="soft-card p-4 text-center">
                <div className="font-display font-extrabold text-2xl gradient-text"><Counter to={k.v} suffix={k.s} /></div>
                <div className="text-xs text-muted-foreground mt-1">{k.l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- SERVICES ---------- */
const services = [
  { icon: Globe, title: "Web Development", desc: "High-performance websites built to convert.", items: ["Custom Website Design", "Responsive Development", "Fast Loading Speed", "E-commerce Development", "SEO Optimization", "Secure Websites"] },
  { icon: Megaphone, title: "Digital Marketing", desc: "Reach the right people. Drive real results.", items: ["Social Media Marketing", "Content Strategy", "Analytics & Reporting", "Search Engine Marketing", "Email Campaigns", "Brand Management"] },
  { icon: Palette, title: "Graphic Design", desc: "Visual identity that demands attention.", items: ["Brand Identity Design", "Marketing Materials", "Infographics", "Logo Design", "Social Media Graphics", "Print Design"] },
  { icon: Video, title: "Social & Film Promotion", desc: "Campaigns and films built to go viral.", items: ["Social Media Campaigns", "Video Content Creation", "Viral Campaigns", "Film Marketing", "Influencer Marketing", "Audience Engagement"] },
  { icon: MessageCircle, title: "WhatsApp API", desc: "Automated conversations at scale.", items: ["Automated Messaging", "Broadcasting", "Customer Support", "Order Notifications", "Two-Way Communication", "Integration Support"] },
  { icon: Printer, title: "Offline Marketing", desc: "Premium print and out-of-home presence.", items: ["Banner Design", "Billboard Advertising", "Brochures & Flyers", "Packaging Design", "Stickers & Labels", "Event Marketing"] },
];

function Services() {
  return (
    <section id="services" className="section bg-[oklch(0.98_0.005_250)]">
      <div className="container-x">
        <Reveal className="max-w-2xl mx-auto text-center">
          <span className="chip mx-auto">Our Services</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-display font-extrabold tracking-tight">
            Everything your brand needs to <span className="gradient-text">grow online.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Full-service digital solutions, all under one roof.</p>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <div className="soft-card soft-card-hover p-6 h-full flex flex-col">
                <div className="size-12 rounded-2xl gradient-brand text-white grid place-items-center shadow-glow">
                  <s.icon className="size-5" />
                </div>
                <h3 className="mt-5 text-xl font-display font-extrabold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <ul className="mt-5 space-y-2 text-sm">
                  {s.items.slice(0, 4).map((it) => (
                    <li key={it} className="flex gap-2 text-foreground/80">
                      <CheckCircle2 className="size-4 text-[color:var(--brand-2)] mt-0.5" /> {it}
                    </li>
                  ))}
                </ul>
                <Link to="/services" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--brand)] hover:gap-2.5 transition-all">
                  Learn more <ArrowRight className="size-4" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- WHY US ---------- */
function WhyUs() {
  const main = [
    { icon: Sparkles, title: "Creative Excellence", desc: "Award-worthy ideas, executed with craft and care." },
    { icon: TrendingUp, title: "Data-Driven Marketing", desc: "Every decision backed by metrics that matter." },
    { icon: Rocket, title: "Fast Delivery", desc: "Tight timelines without compromising quality." },
    { icon: MessageSquare, title: "Dedicated Support", desc: "A real human, always one message away." },
  ];
  return (
    <section className="section">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <span className="chip">Why Samvada</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-display font-extrabold tracking-tight">
            Built like a growth partner, <span className="gradient-text">not just another agency.</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid lg:grid-cols-3 gap-5">
          <Reveal className="lg:col-span-2 grid sm:grid-cols-2 gap-5">
            {main.map((m) => (
              <div key={m.title} className="soft-card soft-card-hover p-6">
                <div className="size-11 rounded-xl bg-[color:var(--brand)]/8 text-[color:var(--brand)] grid place-items-center">
                  <m.icon className="size-5" />
                </div>
                <h3 className="mt-4 text-lg font-display font-extrabold">{m.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{m.desc}</p>
              </div>
            ))}
          </Reveal>
          <Reveal delay={120} className="flex flex-col gap-5">
            <div className="rounded-2xl gradient-brand text-white p-6 shadow-glow">
              <Clock className="size-6" />
              <div className="mt-3 font-display font-extrabold text-3xl">48 hrs</div>
              <div className="text-sm text-white/85">Support response, max. Most replies within an hour.</div>
            </div>
            <div className="soft-card p-6">
              <MessageSquare className="size-6 text-[color:var(--brand-2)]" />
              <div className="mt-2 font-display font-extrabold">Transparent Communication</div>
              <div className="text-sm text-muted-foreground">Weekly updates, shared dashboards, zero surprises.</div>
            </div>
            <div className="soft-card p-6">
              <Target className="size-6 text-[color:var(--brand-2)]" />
              <div className="mt-2 font-display font-extrabold">Result-Oriented Strategy</div>
              <div className="text-sm text-muted-foreground">We optimise for outcomes, not vanity metrics.</div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- INDUSTRIES ---------- */
function Industries() {
  const list = [
    { icon: GraduationCap, name: "Education" },
    { icon: Stethoscope, name: "Healthcare" },
    { icon: Building2, name: "Real Estate" },
    { icon: UtensilsCrossed, name: "Restaurants" },
    { icon: ShoppingBag, name: "Retail" },
    { icon: Rocket, name: "Startups" },
    { icon: Store, name: "Local Businesses" },
    { icon: Briefcase, name: "Professional Services" },
  ];
  return (
    <section className="section bg-[oklch(0.98_0.005_250)]">
      <div className="container-x">
        <Reveal className="max-w-2xl mx-auto text-center">
          <span className="chip mx-auto">Industries</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-display font-extrabold tracking-tight">
            Growth, tuned to <span className="gradient-text">your industry.</span>
          </h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {list.map((l, i) => (
            <Reveal key={l.name} delay={i * 50}>
              <div className="soft-card soft-card-hover p-5 flex items-center gap-3">
                <div className="size-10 rounded-xl gradient-brand text-white grid place-items-center"><l.icon className="size-5" /></div>
                <div className="font-semibold">{l.name}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- PROCESS ---------- */
function Process() {
  const steps = [
    { icon: Compass, n: "01", t: "Discovery", d: "Understanding business goals, audience and requirements." },
    { icon: Map, n: "02", t: "Strategy", d: "Crafting the perfect digital roadmap and creative direction." },
    { icon: PenTool, n: "03", t: "Content Creation", d: "Producing engaging content, design and assets." },
    { icon: Send, n: "04", t: "Execution", d: "Launching campaigns, websites and integrated solutions." },
    { icon: TrendingUp, n: "05", t: "Growth & Results", d: "Optimisation, scaling and transparent reporting." },
  ];
  return (
    <section className="section">
      <div className="container-x">
        <Reveal className="max-w-2xl mx-auto text-center">
          <span className="chip mx-auto">Process</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-display font-extrabold tracking-tight">
            A clear path from <span className="gradient-text">idea to impact.</span>
          </h2>
        </Reveal>

        <div className="mt-14 relative max-w-3xl mx-auto">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[color:var(--brand-2)]/40 to-transparent md:-translate-x-px" />
          <div className="space-y-8">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 80}>
                <div className={`relative grid md:grid-cols-2 gap-4 md:gap-10 items-center ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                  <div className={`pl-16 md:pl-0 ${i % 2 ? "md:text-left md:pl-10" : "md:text-right md:pr-10"}`}>
                    <div className="text-xs font-semibold tracking-[0.2em] text-[color:var(--brand-2)]">STEP {s.n}</div>
                    <h3 className="mt-1 text-2xl font-display font-extrabold">{s.t}</h3>
                    <p className="mt-2 text-sm text-muted-foreground max-w-sm md:inline-block">{s.d}</p>
                  </div>
                  <div className="hidden md:block" />
                  <div className="absolute left-0 md:left-1/2 top-1 md:-translate-x-1/2">
                    <div className="size-12 rounded-2xl gradient-brand text-white grid place-items-center shadow-glow ring-4 ring-white">
                      <s.icon className="size-5" />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- TESTIMONIALS ---------- */
const tests = [
  {
    name: "Anushree Chandrashekar",
    role: "Founder & CEO at Skillyuvam Academy",
    text: "I am really really happy with the kind of service you guys provide every single time. There is an event that I give you or a small photo shoot or video editing or Digital Marketing. Every single thing is done so smoothly. You are always available, just a call away with lot of patience. You help and resolve each doubt of mine. Long way to go to you and your team. Let's continue to work together for many more years team.",
    img: "/Founder_and_CEO_at SkillyuvamAcademy.jpg"
  },
  {
    name: "Prashun Shetty",
    role: "Founder & CEO at TagSkills",
    text: "When we decided to launch our new TagSkills Center in Udupi, we knew we needed more than just design, we needed storytelling. That's exactly what Samvada Communications delivered. From the banners to the posters and promotional content, every piece reflected our vision, values, and local connection. Their designs were crisp, culturally relevant, and aligned perfectly with our brand. The on-time delivery and responsiveness made the entire experience smooth and collaborative. Samvada didn't just create marketing material, they helped bring the TagSkills Udupi story to life. Grateful for their creativity, professionalism, and support throughout our launch. Looking forward to many more collaborations ahead.",
    img: "/Founder_and_CEO_at_TagSkills.jpg"
  },
  {
    name: "Pradeep Shetty Bellala",
    role: "Adugemane catering pvt. Ltd",
    text: "I have been collaborating with Samvada Communications for the past year for my Adugemane Catering digital marketing, and their support has been outstanding. Their creative ideas, professional approach, and consistent delivery have helped my business grow. They have also handled the digital communications for Vara Siddhi Vinayaka PU College with impressive results. I've recommended them to many others, all of whom have been equally satisfied. Highly recommended for impactful and dependable digital marketing & marketing support.",
    img: "/PRADEEP SHETTY K.jpg"
  }
];

function Testimonials() {
  const [i, setI] = useState(0);
  const t = tests[i];
  return (
    <section className="section bg-[oklch(0.98_0.005_250)]">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <span className="chip">Testimonials</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-display font-extrabold tracking-tight">
            Hear from our <span className="gradient-text">happy clients.</span>
          </h2>
        </Reveal>

        <Reveal delay={100} className="mt-10 max-w-4xl mx-auto">
          <div className="soft-card p-8 md:p-12 relative overflow-hidden">
            <div className="absolute -top-10 -left-6 text-[180px] leading-none font-display font-black text-[color:var(--brand-2)]/8 select-none">"</div>
            <div className="flex gap-1 text-[color:var(--brand-2)]">
              {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="size-4 fill-current" />)}
            </div>
            <p className="mt-5 text-lg md:text-xl leading-relaxed text-foreground/90">{t.text}</p>
            <div className="mt-8 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="size-14 rounded-full gradient-brand text-white grid place-items-center font-display font-extrabold overflow-hidden shrink-0">
                  {t.img ? <img src={t.img} alt={t.name} className="w-full h-full object-cover" /> : t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-display font-extrabold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
              <div className="flex gap-2">
                {tests.map((_, k) => (
                  <button key={k} onClick={() => setI(k)} aria-label={`Testimonial ${k + 1}`} className={`h-2 rounded-full transition-all ${i === k ? "w-8 gradient-brand" : "w-2 bg-border"}`} />
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}



/* ---------- CONTACT ---------- */
function Contact() {
  return (
    <section id="contact" className="section bg-[oklch(0.98_0.005_250)]">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <span className="chip">Contact</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-display font-extrabold tracking-tight">
            Let's grow your <span className="gradient-text">brand together.</span>
          </h2>
        </Reveal>

        <div className="mt-12 max-w-3xl mx-auto">
          <Reveal className="space-y-4">
            {[
              { icon: Phone, label: "Phone", value: "+91 7619394676" },
              { icon: Mail, label: "Email", value: "Officesamvada@gmail.com" },
              { icon: MapPin, label: "Address", value: "S S Complex, Saibrakatte, Shiriyara Village 576210" },
              { icon: Clock, label: "Working Hours", value: "Mon – Sat · 9:00 AM – 6:00 PM" },
            ].map((c) => (
              <div key={c.label} className="soft-card p-5 flex items-start gap-4">
                <div className="size-11 rounded-xl gradient-brand text-white grid place-items-center"><c.icon className="size-5" /></div>
                <div>
                  <div className="text-xs uppercase tracking-wide text-muted-foreground font-semibold">{c.label}</div>
                  <div className="font-semibold">{c.value}</div>
                </div>
              </div>
            ))}
            <div className="soft-card overflow-hidden">
              <iframe
                title="Samvada Location"
                src="https://maps.google.com/maps?q=13.5127448,74.7745609&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-[400px] border-0"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- FINAL CTA ---------- */
function FinalCTA() {
  return (
    <section className="section">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] gradient-brand text-white p-10 md:p-16 text-center shadow-glow">
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top_left,white_0%,transparent_50%),radial-gradient(ellipse_at_bottom_right,white_0%,transparent_50%)]" />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-wider uppercase">Let's collaborate</span>
              <h2 className="mt-5 text-3xl md:text-5xl font-display font-extrabold text-white">
                Let's discuss your next project.
              </h2>
              <p className="mt-4 max-w-xl mx-auto text-white/85">
                Ready to grow your business with creative digital solutions? Let's build something impactful together.
              </p>
              <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white text-[color:var(--brand)] px-6 py-3.5 text-sm font-semibold hover:bg-white/90 transition">
                Book Free Consultation <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
