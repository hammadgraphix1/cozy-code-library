import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { stats, WHATSAPP_URL } from "@/data/projects";
import profile from "@/assets/profile.jpg.asset.json";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — Hammad Alvi · Brand Identity Designer in Karachi" },
      { name: "description", content: "Hammad Alvi is a brand identity and visual branding specialist based in Karachi, helping businesses build memorable visual systems." },
      { property: "og:title", content: "About — Hammad Alvi" },
      { property: "og:description", content: "Brand identity & visual branding specialist based in Karachi." },
    ],
  }),
});

function AboutPage() {
  return (
    <div className="bg-[#0A0A0A] text-white">
      <Header />
      <section className="pt-40 pb-20">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-10">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-center">
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-[#111] border border-white/8">
                <img src={profile.url} alt="Hammad Alvi" className="h-full w-full object-cover" />
              </div>
              <div className="absolute -top-4 -left-4 rotate-[-4deg] rounded-full bg-[#DFFF00] text-black px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] glow-yellow">
                Karachi, PK
              </div>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#DFFF00]">About</span>
              <h1 className="mt-4 font-display text-[12vw] sm:text-[7vw] leading-[0.9] tracking-[-0.04em]">
                Hi, I'm<br/><span className="text-[#DFFF00]">Hammad Alvi.</span>
              </h1>
              <p className="mt-8 text-xl text-white/75 leading-relaxed max-w-xl">
                I help businesses create memorable visual identities through strategic design, advertising creatives, social media content, and branding systems.
              </p>
              <p className="mt-5 text-base text-white/55 leading-relaxed max-w-xl">
                My focus is creating visuals that attract attention, strengthen brand presence, and communicate messages effectively.
              </p>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#DFFF00] text-black px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] glow-yellow hover:scale-105 transition-transform">
                Free Consultation →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-10 grid gap-6 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-white/8 bg-[#111] py-10 px-6 text-center">
              <p className="font-display text-6xl text-[#DFFF00]">{s.value}</p>
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-white/55">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 border-t border-white/5">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-10">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#DFFF00]">Approach</span>
          <h2 className="mt-4 font-display text-5xl sm:text-7xl leading-[0.9]">How I work.</h2>
          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "01", t: "Listen", b: "Understanding the business, the audience, and what 'memorable' actually means to you." },
              { n: "02", t: "Research", b: "Studying competitors, references, and the visual systems your audience already trusts." },
              { n: "03", t: "Design", b: "Iterating on strategic concepts — never one-shot deliveries, always reasoned variants." },
              { n: "04", t: "Launch", b: "Shipping assets ready for production, plus systems so your brand stays consistent." },
            ].map((p) => (
              <div key={p.n} className="rounded-3xl border border-white/8 bg-[#111] p-8">
                <span className="font-display text-5xl text-[#DFFF00]">{p.n}</span>
                <h3 className="mt-6 font-display text-2xl">{p.t}</h3>
                <p className="mt-3 text-sm text-white/60 leading-relaxed">{p.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
