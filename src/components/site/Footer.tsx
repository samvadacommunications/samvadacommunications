import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-[oklch(0.22_0.04_260)] text-white/85">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="container-x py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2 max-w-sm">
          <div className="flex items-center gap-3">
            <img src="/Logo.png" alt="Samvada" className="h-12 w-12 rounded-full ring-2 ring-white/20" />
            <div>
              <div className="font-display font-extrabold text-lg text-white">Samvada Communications</div>
              <div className="text-xs text-white/60">Complete Digital Solutions</div>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-white/70">
            Since 2022, we've helped brands grow with digital marketing, web development, branding, creative design and promotional services. Bigger, bolder, built for impact.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Linkedin, Facebook].map((Icon, i) => (
              <a key={i} href="#" className="size-9 grid place-items-center rounded-full bg-white/10 hover:bg-white/20 transition">
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="font-display font-bold text-white mb-4">Explore</div>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/" className="hover:text-white transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-white transition">About</Link></li>
            <li><Link to="/services" className="hover:text-white transition">Services</Link></li>
            <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>

        <div>
          <div className="font-display font-bold text-white mb-4">Reach Us</div>
          <ul className="space-y-3 text-sm text-white/75">
            <li className="flex gap-3"><Phone className="size-4 mt-0.5 text-[color:var(--brand-3)]" /> +91 7619394676</li>
            <li className="flex gap-3"><Mail className="size-4 mt-0.5 text-[color:var(--brand-3)]" /> Officesamvada@gmail.com</li>
            <li className="flex gap-3"><MapPin className="size-4 mt-0.5 text-[color:var(--brand-3)]" /> Udupi and Bangalore</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/60">
          <div>© {new Date().getFullYear()} Samvada Communications. All rights reserved.</div>
          <div>Crafted with care · Built to make impact.</div>
        </div>
      </div>
    </footer>
  );
}
