import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import profile from "@/assets/profile.jpg.asset.json";
import { WHATSAPP_URL } from "@/data/projects";

const nav = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8">
        <div
          className={`flex items-center justify-between rounded-full px-4 py-3 transition-all duration-500 ${
            scrolled ? "glass" : ""
          }`}
        >
          <Link to="/" className="flex items-center gap-3 group">
            <span className="relative inline-block h-10 w-10 shrink-0 overflow-hidden rounded-full ring-2 ring-[#C8FF00]/40 transition-all group-hover:ring-[#C8FF00]">
              <img
                src={profile.url}
                alt="Hammad Alvi"
                className="absolute inset-0 h-full w-full object-cover"
                style={{ objectPosition: "center 25%" }}
              />
            </span>
            <span className="hidden sm:flex flex-col leading-none">
              <span className="font-display text-base lowercase tracking-tight">hammadgraphix</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                Brand Identity Design
              </span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="px-4 py-2 text-sm text-white/70 hover:text-white transition-colors relative group"
                activeProps={{ className: "text-white" }}
              >
                {n.label}
                <span className="absolute left-4 right-4 bottom-1 h-px bg-[#C8FF00] scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-[#C8FF00] text-black px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] hover:scale-105 transition-transform"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-black animate-pulse" />
              Free Consultation
            </a>
            <button
              onClick={() => setOpen(!open)}
              aria-label="Menu"
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15"
            >
              <span className="flex flex-col gap-1.5">
                <span className={`block h-px w-5 bg-white transition-all ${open ? "translate-y-[3px] rotate-45" : ""}`} />
                <span className={`block h-px w-5 bg-white transition-all ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
              </span>
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden mt-3 rounded-3xl glass p-6">
            <nav className="flex flex-col">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="font-display text-3xl py-2 text-white/80 hover:text-[#C8FF00] transition-colors"
                >
                  {n.label}
                </Link>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center justify-center rounded-full bg-[#C8FF00] text-black px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em]"
              >
                Free Consultation
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
