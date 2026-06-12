import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "@/assets/samvada-logo.png.asset.json";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-border/60 shadow-[0_4px_24px_-12px_rgba(47,59,117,0.18)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-18 items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-3 group">
          <img src="/Logo.png" alt="Samvada Communications" className="h-11 w-11 rounded-full ring-2 ring-white shadow-soft transition-transform group-hover:scale-105" />
          <div className="leading-tight">
            <div className="font-display font-extrabold text-[15px] tracking-tight text-foreground">Samvada</div>
            <div className="text-[11px] text-muted-foreground font-medium -mt-0.5">Communications</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1 rounded-full border border-border/70 bg-white/70 backdrop-blur px-2 py-1.5 shadow-soft">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: true }}
              activeProps={{ className: "bg-foreground text-white" }}
              inactiveProps={{ className: "text-foreground/80 hover:text-foreground hover:bg-secondary" }}
              className="px-4 py-1.5 rounded-full text-sm font-medium transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex">
          <Link
            to="/contact"
            className="gradient-brand text-white text-sm font-semibold rounded-full px-5 py-2.5 shadow-glow hover:brightness-110 transition"
          >
            Get Free Consultation
          </Link>
        </div>

        <button
          className="md:hidden p-2 rounded-lg border border-border bg-white"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-white">
          <div className="container-x py-4 flex flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-secondary"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 gradient-brand text-white text-sm font-semibold rounded-full px-5 py-3 text-center shadow-glow"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
