import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { projects, services, stats, WHATSAPP_URL, categories } from "@/data/projects";
import profile from "@/assets/profile.jpg.asset.json";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Hammad Alvi — Brand Identity Designer & Visual Branding Specialist" },
      {
        name: "description",
        content:
          "Independent designer building memorable brand identities, advertising creatives, and social media systems for ambitious brands worldwide. Based in Karachi.",
      },
      { property: "og:title", content: "Hammad Alvi — Design Brands People Remember" },
      { property: "og:description", content: "Brand identity, advertising, and social design from Karachi-based studio Hammad Graphix." },
    ],
  }),
});

function HomePage() {
  const featured = projects.filter((p) => p.featured);

  return (
    <div className="bg-[#0A0A0A] text-white">
      <Header />
      <Hero />
      <Marquee />
      <FeaturedWork projects={featured} />
      <ServicesPreview />
      <StatsBlock />
      <AboutTeaser />
      <CTA />
      <Footer />
    </div>
  );
}

function Hero() {
  const words = ["DESIGN", "BRANDS", "PEOPLE", "REMEMBER."];
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden grain noise">
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#DFFF00]/[0.08] blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[#DFFF00]/[0.05] blur-[120px]" />

      <div className="relative mx-auto max-w-[1600px] px-5 sm:px-10">
        <div className="flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-white/50 mb-10">
          <span className="inline-flex h-2 w-2 rounded-full bg-[#DFFF00] animate-pulse" />
          <span>Available for new projects · 2026</span>
          <span className="text-white/20">/</span>
          <span>Karachi, Pakistan</span>
        </div>

        <h1 className="font-display text-[18vw] sm:text-[14vw] lg:text-[11vw] leading-[0.88] tracking-[-0.05em]">
          {words.map((w, i) => (
            <span key={w} className="block overflow-hidden">
              <span
                className="inline-block reveal-up"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                {w === "BRANDS" ? <em className="not-italic text-[#DFFF00]">{w}</em> : w}
              </span>
            </span>
          ))}
        </h1>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <p className="max-w-xl text-lg sm:text-xl text-white/65 leading-relaxed reveal-up" style={{ animationDelay: "560ms" }}>
            Helping businesses build memorable visual identities through branding, advertising, and social media design.
          </p>

          <div className="flex flex-wrap items-center gap-4 reveal-up" style={{ animationDelay: "680ms" }}>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-[#DFFF00] text-black px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] glow-yellow hover:scale-105 transition-transform"
            >
              Free Consultation
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-black text-[#DFFF00] group-hover:rotate-45 transition-transform">
                <svg width="10" height="10" viewBox="0 0 14 14" fill="none"><path d="M3 11L11 3M11 3H4M11 3V10" stroke="currentColor" strokeWidth="1.5"/></svg>
              </span>
            </a>
            <Link
              to="/work"
              className="group inline-flex items-center gap-3 rounded-full border border-white/15 text-white px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] hover:border-white/40 transition-colors"
            >
              View Work
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/20 group-hover:bg-white group-hover:text-black transition-all">
                <svg width="10" height="10" viewBox="0 0 14 14" fill="none"><path d="M3 11L11 3M11 3H4M11 3V10" stroke="currentColor" strokeWidth="1.5"/></svg>
              </span>
            </Link>
          </div>
        </div>

        <div className="mt-20 grid gap-6 sm:grid-cols-3 reveal-up" style={{ animationDelay: "820ms" }}>
          {stats.map((s) => (
            <div key={s.label} className="relative rounded-2xl border border-white/8 bg-[#111] p-6 sm:p-8">
              <p className="font-display text-5xl sm:text-6xl text-[#DFFF00]">{s.value}</p>
              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-white/55">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="absolute right-5 sm:right-10 top-36 hidden md:flex flex-col items-center gap-3">
          <span className="relative h-20 w-20 rounded-full overflow-hidden ring-2 ring-[#DFFF00] glow-yellow float-slow">
            <img src={profile.url} alt="Hammad Alvi" className="h-full w-full object-cover"/>
          </span>
          <span className="text-[9px] uppercase tracking-[0.3em] text-white/50">Hammad Alvi</span>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [...categories, "Editorial Systems", "Visual Identity", "Creative Direction"];
  return (
    <section className="relative border-y border-white/5 bg-[#0A0A0A] overflow-hidden py-8">
      <div className="marquee items-center font-display text-5xl sm:text-7xl tracking-tight whitespace-nowrap">
        {[0, 1].map((k) => (
          <div key={k} className="flex items-center gap-14">
            {items.map((it) => (
              <span key={it + k} className="flex items-center gap-14 text-white/80">
                {it}
                <span className="inline-block h-3 w-3 rounded-full bg-[#DFFF00]" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

function FeaturedWork({ projects }: { projects: typeof import("@/data/projects").projects }) {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#DFFF00]">Selected · 2024 — 2025</span>
            <h2 className="mt-4 font-display text-5xl sm:text-7xl leading-[0.9]">Featured Work</h2>
          </div>
          <Link to="/work" className="group inline-flex items-center gap-3 text-sm text-white/70 hover:text-white">
            All Projects
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 group-hover:bg-[#DFFF00] group-hover:border-[#DFFF00] group-hover:text-black transition-all">→</span>
          </Link>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesPreview() {
  return (
    <section className="relative py-24 sm:py-32 border-t border-white/5">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-10">
        <div className="mb-16 grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#DFFF00]">What I Do</span>
            <h2 className="mt-4 font-display text-5xl sm:text-7xl leading-[0.9]">
              Services<br/>
              <span className="text-white/30">that scale brands.</span>
            </h2>
          </div>
          <p className="max-w-md text-white/60 text-lg leading-relaxed lg:justify-self-end">
            Identity systems, advertising creatives, and editorial social design built end-to-end — research to launch.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {services.map((s, i) => (
            <div key={s.title} className="relative rounded-3xl border border-white/8 bg-[#111] p-8 sm:p-10 overflow-hidden group hover:border-[#DFFF00]/30 transition-colors">
              <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-[#DFFF00]/[0.05] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative">
                <div className="flex items-center justify-between mb-8">
                  <span className="font-display text-5xl text-white/15">0{i + 1}</span>
                  {s.comingSoon && (
                    <span className="inline-flex items-center gap-2 rounded-full bg-[#DFFF00] text-black px-3 py-1 text-[9px] uppercase tracking-[0.2em] font-bold">
                      Coming Soon
                    </span>
                  )}
                </div>
                <h3 className="font-display text-3xl sm:text-4xl">{s.title}</h3>
                <p className="mt-4 text-white/60 leading-relaxed text-sm">{s.description}</p>
                <ul className="mt-8 space-y-2 text-xs uppercase tracking-[0.15em] text-white/45">
                  {s.deliverables.map((d) => (
                    <li key={d} className="flex items-center gap-3">
                      <span className="inline-block h-px w-6 bg-[#DFFF00]/60" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsBlock() {
  return (
    <section className="relative py-24 sm:py-32 border-t border-white/5 overflow-hidden">
      <div className="pointer-events-none absolute -left-40 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#DFFF00]/[0.05] blur-[120px]" />
      <div className="mx-auto max-w-[1400px] px-5 sm:px-10 text-center">
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#DFFF00]">Track Record</span>
        <h2 className="mt-4 font-display text-[12vw] sm:text-[8vw] leading-[0.9] tracking-[-0.04em]">
          Numbers don't<br/><em className="not-italic text-white/30">whisper.</em>
        </h2>
        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-white/8 bg-[#111] py-10 px-6">
              <p className="font-display text-6xl sm:text-7xl text-[#DFFF00]">{s.value}</p>
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-white/55">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutTeaser() {
  return (
    <section className="relative py-24 sm:py-32 border-t border-white/5">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-10 grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-center">
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-[#111] border border-white/8">
            <img src={profile.url} alt="Hammad Alvi" className="h-full w-full object-cover"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between glass rounded-2xl px-4 py-3">
              <div>
                <p className="font-display text-sm">Hammad Alvi</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/60">Brand Designer · Karachi</p>
              </div>
              <span className="inline-flex h-2 w-2 rounded-full bg-[#DFFF00] animate-pulse" />
            </div>
          </div>
          <div className="absolute -bottom-8 -right-4 rotate-3 rounded-2xl bg-[#DFFF00] text-black px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] glow-yellow">
            6+ Years · 230 Projects
          </div>
        </div>
        <div>
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#DFFF00]">About</span>
          <h2 className="mt-4 font-display text-5xl sm:text-7xl leading-[0.9]">
            Hi, I'm <span className="text-[#DFFF00]">Hammad.</span>
          </h2>
          <p className="mt-6 text-lg text-white/65 leading-relaxed max-w-xl">
            I help businesses create memorable visual identities through strategic design, advertising creatives, social media content, and branding systems.
          </p>
          <p className="mt-4 text-base text-white/50 leading-relaxed max-w-xl">
            My focus is creating visuals that attract attention, strengthen brand presence, and communicate messages effectively.
          </p>
          <Link to="/about" className="mt-10 inline-flex items-center gap-3 rounded-full border border-white/15 px-6 py-3 text-xs uppercase tracking-[0.18em] hover:border-[#DFFF00] hover:text-[#DFFF00] transition-colors">
            More About Me
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative py-32 sm:py-40 overflow-hidden border-t border-white/5">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 h-[500px] bg-gradient-to-b from-[#DFFF00]/[0.04] via-[#DFFF00]/[0.02] to-transparent" />
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-10 text-center">
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#DFFF00]">Let's Build</span>
        <h2 className="mt-6 font-display text-[14vw] sm:text-[10vw] leading-[0.88] tracking-[-0.04em]">
          Got a brand<br/>worth <em className="not-italic text-[#DFFF00]">remembering?</em>
        </h2>
        <p className="mt-8 text-lg text-white/55 max-w-xl mx-auto">
          Book a free consultation and let's map what a memorable identity looks like for your business.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-12 inline-flex items-center gap-4 rounded-full bg-[#DFFF00] text-black px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] glow-yellow hover:scale-105 transition-transform"
        >
          Free Consultation
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-black text-[#DFFF00]">→</span>
        </a>
      </div>
    </section>
  );
}
