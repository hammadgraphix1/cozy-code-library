import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { services, WHATSAPP_URL } from "@/data/projects";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — Hammad Alvi · Branding, Advertising, Social Design" },
      { name: "description", content: "Brand identity systems, advertising creatives, and social media design services by Hammad Alvi." },
      { property: "og:title", content: "Services — Hammad Alvi" },
      { property: "og:description", content: "Brand identity, advertising, and social media design services." },
    ],
  }),
});

function ServicesPage() {
  return (
    <div className="bg-[#0A0A0A] text-white">
      <Header />
      <section className="pt-40 pb-20">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-10">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#DFFF00]">Services</span>
          <h1 className="mt-4 font-display text-[14vw] sm:text-[10vw] leading-[0.88] tracking-[-0.04em]">
            Built to be<br/><em className="not-italic text-[#DFFF00]">remembered.</em>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-white/60">
            Three focused disciplines. Every engagement runs through research, strategy, and execution — no template, no shortcut.
          </p>
        </div>
      </section>

      <section className="pb-32">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-10 space-y-6">
          {services.map((s, i) => (
            <div key={s.title} className="group relative overflow-hidden rounded-3xl border border-white/8 bg-[#111] p-8 sm:p-12 lg:p-16 hover:border-[#DFFF00]/30 transition-colors">
              <div className="pointer-events-none absolute -right-40 -top-40 h-[400px] w-[400px] rounded-full bg-[#DFFF00]/[0.04] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative grid gap-10 lg:grid-cols-[1fr_2fr] lg:items-start">
                <div className="flex items-center gap-6">
                  <span className="font-display text-7xl sm:text-8xl text-white/15">0{i + 1}</span>
                  {s.comingSoon && (
                    <span className="inline-flex items-center gap-2 rounded-full bg-[#DFFF00] text-black px-3 py-1.5 text-[9px] uppercase tracking-[0.22em] font-bold">
                      Coming Soon
                    </span>
                  )}
                </div>
                <div>
                  <h2 className="font-display text-5xl sm:text-7xl leading-[0.9]">{s.title}</h2>
                  <p className="mt-6 text-lg text-white/65 leading-relaxed max-w-2xl">{s.description}</p>
                  <div className="mt-10 flex flex-wrap gap-2">
                    {s.deliverables.map((d) => (
                      <span key={d} className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.15em] text-white/65">
                        {d}
                      </span>
                    ))}
                  </div>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#DFFF00] text-black px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] hover:scale-105 transition-transform"
                  >
                    Free Consultation →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
