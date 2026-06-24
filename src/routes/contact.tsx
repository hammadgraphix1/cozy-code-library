import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EMAIL, INSTAGRAM, LINKEDIN, WHATSAPP_URL } from "@/data/projects";
import profile from "@/assets/profile.jpg.asset.json";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Hammad Alvi · Brand Identity Designer" },
      { name: "description", content: "Get in touch with Hammad Alvi for brand identity, advertising and social design projects. Based in Karachi, available worldwide." },
      { property: "og:title", content: "Contact — Hammad Alvi" },
      { property: "og:description", content: "Reach out via WhatsApp, email, Instagram, or LinkedIn." },
    ],
  }),
});

const channels = [
  { label: "WhatsApp", value: "+92 318 2957713", href: WHATSAPP_URL, badge: "Fastest" },
  { label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  { label: "Instagram", value: "@hammad.graphix", href: INSTAGRAM },
  { label: "LinkedIn", value: "Hammad Alvi", href: LINKEDIN },
];

function ContactPage() {
  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen">
      <Header />
      <section className="pt-40 pb-16">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-10">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#C8FF00]">Contact</span>
          <h1 className="mt-4 font-display text-[14vw] sm:text-[10vw] leading-[0.88] tracking-[-0.04em]">
            Let's make<br/>something<br/><em className="not-italic text-[#C8FF00]">memorable.</em>
          </h1>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-10 grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-3">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-6 rounded-3xl border border-white/8 bg-[#111] p-6 sm:p-10 hover:border-[#C8FF00]/40 hover:bg-[#141414] transition-colors"
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-white/45">{c.label}</span>
                    {c.badge && <span className="rounded-full bg-[#C8FF00] text-black text-[9px] font-bold uppercase tracking-[0.2em] px-2 py-0.5">{c.badge}</span>}
                  </div>
                  <p className="mt-3 font-display text-3xl sm:text-5xl leading-tight truncate group-hover:text-[#C8FF00] transition-colors">{c.value}</p>
                </div>
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/15 group-hover:bg-[#C8FF00] group-hover:border-[#C8FF00] group-hover:text-black transition-all">↗</span>
              </a>
            ))}
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-white/8 bg-[#111] p-8">
              <div className="flex items-center gap-4">
                <span className="relative h-14 w-14 overflow-hidden rounded-full ring-2 ring-[#C8FF00]">
                  <img src={profile.url} alt="Hammad Alvi" className="h-full w-full object-cover" />
                </span>
                <div>
                  <p className="font-display text-xl">Hammad Alvi</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/55">Brand Identity Designer</p>
                </div>
              </div>
              <p className="mt-6 text-sm text-white/60 leading-relaxed">
                Independent studio working on a small number of brand identity & advertising projects per quarter.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.2em]">
                <span className="rounded-full border border-white/10 px-3 py-1.5 text-white/65">Karachi, PK</span>
                <span className="rounded-full border border-white/10 px-3 py-1.5 text-white/65">Available 2026</span>
                <span className="rounded-full border border-[#C8FF00]/30 px-3 py-1.5 text-[#C8FF00]">Booking Now</span>
              </div>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="block rounded-3xl bg-[#C8FF00] text-black p-8 glow-yellow hover:scale-[1.02] transition-transform"
            >
              <span className="text-[10px] uppercase tracking-[0.25em] font-bold">Fastest Response</span>
              <p className="mt-3 font-display text-4xl leading-tight">Book a free consultation on WhatsApp →</p>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
