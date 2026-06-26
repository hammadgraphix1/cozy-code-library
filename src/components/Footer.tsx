import { Link } from "@tanstack/react-router";
import profile from "@/assets/profile.jpg.asset.json";
import { EMAIL, INSTAGRAM, LINKEDIN, WHATSAPP_URL } from "@/data/projects";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[#0A0A0A] overflow-hidden">
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[480px] w-[1200px] rounded-full bg-[#C8FF00]/[0.06] blur-[120px]" />

      <div className="relative mx-auto max-w-[1600px] px-5 sm:px-10 py-20 lg:py-28">
        <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-4">
              <span className="relative inline-block h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-[#C8FF00]/40">
                <img src={profile.url} alt="Hammad Alvi" className="absolute inset-0 h-full w-full object-cover" style={{ objectPosition: "center top" }} />
              </span>
              <div>
                <p className="font-display text-xl">Hammad Alvi</p>
                <p className="text-xs uppercase tracking-[0.2em] text-white/50">I solve brand problems visually.</p>
              </div>
            </div>
            <p className="mt-6 max-w-md text-sm text-white/60 leading-relaxed">
              Independent designer building memorable visual identities for ambitious brands worldwide. Based in Karachi · available globally.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#C8FF00] text-black px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] hover:scale-105 transition-transform"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-black animate-pulse" />
              Free Consultation
            </a>
          </div>

          <FooterCol title="Navigate" items={[
            { label: "Home", to: "/" },
            { label: "Work", to: "/work" },
            { label: "Services", to: "/services" },
            { label: "About", to: "/about" },
            { label: "Contact", to: "/contact" },
          ]} />

          <FooterCol title="Connect" external items={[
            { label: "LinkedIn", to: LINKEDIN },
            { label: "Instagram", to: INSTAGRAM },
            { label: "Email", to: `mailto:${EMAIL}` },
            { label: "WhatsApp", to: WHATSAPP_URL },
          ]} />

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.25em] text-white/40 mb-5">Studio</h4>
            <p className="text-sm text-white/70 leading-relaxed">
              Karachi, Pakistan<br/>
              Available worldwide
            </p>
            <p className="mt-6 text-sm text-white/70 leading-relaxed break-all">
              {EMAIL}<br/>
              +92 318 2957713
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col-reverse gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="text-xs text-white/40">
            © 2026 hammadgraphix. All Rights Reserved.
          </div>
          <div className="text-xs uppercase tracking-[0.25em] text-white/40">
            Design · Branding · Advertising
          </div>
        </div>

        <div className="mt-12 -mx-5 sm:-mx-10 overflow-hidden border-t border-white/5 pt-12">
          <div className="marquee font-display text-[14vw] leading-none text-white/[0.04] whitespace-nowrap select-none">
            <span>HAMMAD ALVI — DESIGN THAT REMEMBERS — HAMMAD ALVI — DESIGN THAT REMEMBERS —&nbsp;</span>
            <span>HAMMAD ALVI — DESIGN THAT REMEMBERS — HAMMAD ALVI — DESIGN THAT REMEMBERS —&nbsp;</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items, external }: { title: string; items: { label: string; to: string }[]; external?: boolean }) {
  return (
    <div>
      <h4 className="text-[10px] uppercase tracking-[0.25em] text-white/40 mb-5">{title}</h4>
      <ul className="space-y-3">
        {items.map((it) => (
          <li key={it.label}>
            {external ? (
              <a href={it.to} target="_blank" rel="noreferrer" className="text-sm text-white/70 hover:text-[#C8FF00] transition-colors">
                {it.label} ↗
              </a>
            ) : (
              <Link to={it.to} className="text-sm text-white/70 hover:text-[#C8FF00] transition-colors">
                {it.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
