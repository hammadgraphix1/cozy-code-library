import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { projects, services, stats, WHATSAPP_URL, categories } from "@/data/projects";
import profile from "@/assets/profile.jpg.asset.json";
import { useCountUp } from "@/hooks/useCountUp";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "hammadgraphix — Hammad Alvi · Brand Identity & Logo Designer" },
      {
        name: "description",
        content:
          "Hammad Alvi — Brand Identity Designer, Logo Designer and Social Media Designer with 4+ years building visual identities for brands worldwide. Based in Karachi.",
      },
      { property: "og:title", content: "hammadgraphix — Design Brands People Remember" },
      { property: "og:description", content: "Brand identity, logo and social media design by Hammad Alvi." },
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
      <ProcessDiagram />
      <FeaturedWork projects={featured} />
      <ServicesPreview />
      <Tools />
      <About />
      <StatsBlock />
      <CTA />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden grain noise flex items-center">
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#C8FF00]/[0.08] blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[#C8FF00]/[0.05] blur-[120px]" />

      <div className="relative mx-auto max-w-[1400px] w-full px-5 sm:px-10">
        <div className="grid gap-12 lg:grid-cols-[auto_1fr] lg:items-center">
          {/* Full uncropped profile */}
          <div className="reveal-up flex justify-center lg:justify-start" style={{ animationDelay: "80ms" }}>
            <div className="relative">
              <div
                className="relative overflow-hidden rounded-full ring-4 ring-[#C8FF00]/40 breathe bg-[#111]"
                style={{ width: 200, height: 200 }}
              >
                <img
                  src={profile.url}
                  alt="Hammad Alvi"
                  className="absolute inset-0 h-full w-full object-contain"
                  style={{ objectPosition: "center center" }}
                />
              </div>
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 rounded-full bg-[#0A0A0A] border border-[#C8FF00]/40 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[#C8FF00]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C8FF00] animate-pulse" />
                Available
              </span>
            </div>
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-white/50 mb-6 reveal-up">
              <span>Karachi, Pakistan</span>
              <span className="text-white/20">/</span>
              <span>Available Worldwide · Remote</span>
            </div>

            <h1 className="font-display text-[12vw] sm:text-[8vw] lg:text-[6.5vw] leading-[0.92] tracking-[-0.04em]">
              <span className="block overflow-hidden">
                <span className="inline-block reveal-up" style={{ animationDelay: "160ms" }}>
                  Hi, I'm Hammad.
                </span>
              </span>
              <span className="block overflow-hidden mt-2">
                <span className="inline-block reveal-up text-white/40" style={{ animationDelay: "320ms" }}>
                  I design <em className="not-italic text-[#C8FF00]">brands</em> people remember.
                </span>
              </span>
            </h1>

            <p
              className="mt-8 max-w-xl text-lg sm:text-xl text-white/65 leading-relaxed reveal-up"
              style={{ animationDelay: "520ms" }}
            >
              Brand Identity Designer · Logo Designer · Social Media Designer with{" "}
              <span className="text-white">4+ years</span> helping businesses build memorable visual identities.
            </p>

            <div
              className="mt-10 flex flex-wrap items-center gap-4 reveal-up"
              style={{ animationDelay: "680ms" }}
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-[#C8FF00] text-black px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] glow-yellow hover:scale-105 transition-transform"
              >
                Free Consultation
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-black text-[#C8FF00] group-hover:rotate-45 transition-transform">
                  <svg width="10" height="10" viewBox="0 0 14 14" fill="none">
                    <path d="M3 11L11 3M11 3H4M11 3V10" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </span>
              </a>
              <Link
                to="/work"
                className="group inline-flex items-center gap-3 rounded-full border border-white/15 text-white px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] hover:border-white/40 transition-colors"
              >
                View Work
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/20 group-hover:bg-white group-hover:text-black transition-all">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [...categories, "Visual Identity", "Creative Direction", "4+ Years"];
  return (
    <section className="relative border-y border-white/5 bg-[#0A0A0A] overflow-hidden py-8">
      <div className="marquee items-center font-display text-5xl sm:text-7xl tracking-tight whitespace-nowrap">
        {[0, 1].map((k) => (
          <div key={k} className="flex items-center gap-14">
            {items.map((it) => (
              <span key={it + k} className="flex items-center gap-14 text-white/80">
                {it}
                <span className="inline-block h-3 w-3 rounded-full bg-[#C8FF00]" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

function ProcessDiagram() {
  const steps = [
    { n: "01", label: "Brief", desc: "Discovery & goals" },
    { n: "02", label: "Research", desc: "Market & audience" },
    { n: "03", label: "Concept", desc: "Direction & moodboard" },
    { n: "04", label: "Design", desc: "Iterate & refine" },
    { n: "05", label: "Deliver", desc: "Launch & support" },
  ];
  return (
    <section className="relative py-24 sm:py-32 border-t border-white/5 overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-10">
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#C8FF00]">The Process</span>
          <h2 className="mt-4 font-display text-5xl sm:text-7xl leading-[0.9]">
            From brief to <em className="not-italic text-[#C8FF00]">brand.</em>
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-white/55">
            A clear five-step process designed to turn ambiguous ideas into memorable visual systems.
          </p>
        </div>

        {/* Connecting line (desktop) */}
        <div className="relative">
          <svg
            className="hidden md:block absolute left-0 right-0 top-10 mx-auto pointer-events-none"
            height="2"
            width="100%"
            preserveAspectRatio="none"
            viewBox="0 0 1000 2"
          >
            <line
              x1="50"
              y1="1"
              x2="950"
              y2="1"
              stroke="#C8FF00"
              strokeOpacity="0.6"
              strokeWidth="1.5"
              className="dash-flow"
            />
          </svg>

          <ol className="relative grid gap-8 md:grid-cols-5 stagger">
            {steps.map((s) => (
              <li key={s.n} className="relative flex flex-col items-center text-center">
                <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[#111] border border-[#C8FF00]/40">
                  <span className="absolute inset-0 rounded-full bg-[#C8FF00]/10 pulse-dot" />
                  <span className="font-display text-2xl text-[#C8FF00]">{s.n}</span>
                </span>
                <h3 className="mt-6 font-display text-2xl">{s.label}</h3>
                <p className="mt-2 text-sm text-white/55">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function FeaturedWork({ projects }: { projects: typeof import("@/data/projects").projects }) {
  return (
    <section className="relative py-24 sm:py-32 border-t border-white/5">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C8FF00]">Selected · 2024 — 2025</span>
            <h2 className="mt-4 font-display text-5xl sm:text-7xl leading-[0.9]">Featured Work</h2>
          </div>
          <Link to="/work" className="group inline-flex items-center gap-3 text-sm text-white/70 hover:text-white">
            All Projects
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 group-hover:bg-[#C8FF00] group-hover:border-[#C8FF00] group-hover:text-black transition-all">
              →
            </span>
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
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C8FF00]">What I Do</span>
            <h2 className="mt-4 font-display text-5xl sm:text-7xl leading-[0.9]">
              Services<br />
              <span className="text-white/30">that scale brands.</span>
            </h2>
          </div>
          <p className="max-w-md text-white/60 text-lg leading-relaxed lg:justify-self-end">
            Logos, identity systems, and social media design — built end-to-end, from research to launch.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="relative rounded-3xl border border-white/8 bg-[#111] p-8 sm:p-10 overflow-hidden group hover:border-[#C8FF00]/40 hover:shadow-[0_0_60px_-20px_rgba(200,255,0,0.35)] transition-all duration-500"
            >
              <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-[#C8FF00]/[0.05] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative">
                <div className="flex items-center justify-between mb-8">
                  <span className="font-display text-5xl text-white/15">0{i + 1}</span>
                  {s.comingSoon && (
                    <span className="inline-flex items-center gap-2 rounded-full bg-[#C8FF00] text-black px-3 py-1 text-[9px] uppercase tracking-[0.2em] font-bold">
                      Coming Soon
                    </span>
                  )}
                </div>
                <h3 className="font-display text-3xl sm:text-4xl">{s.title}</h3>
                <p className="mt-4 text-white/60 leading-relaxed text-sm">{s.description}</p>
                <ul className="mt-8 space-y-2 text-xs uppercase tracking-[0.15em] text-white/45">
                  {s.deliverables.map((d) => (
                    <li key={d} className="flex items-center gap-3">
                      <span className="inline-block h-px w-6 bg-[#C8FF00]/60" />
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

function Tools() {
  const tools: { name: string; logo: JSX.Element }[] = [
    {
      name: "Adobe Photoshop",
      logo: (
        <svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <rect width="64" height="64" rx="12" fill="#001E36" />
          <text
            x="50%"
            y="54%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontFamily="'Helvetica Neue', Arial, sans-serif"
            fontWeight="800"
            fontSize="30"
            fill="#31A8FF"
          >
            Ps
          </text>
        </svg>
      ),
    },
    {
      name: "Adobe Illustrator",
      logo: (
        <svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <rect width="64" height="64" rx="12" fill="#1C0A00" />
          <text
            x="50%"
            y="54%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontFamily="'Helvetica Neue', Arial, sans-serif"
            fontWeight="800"
            fontSize="30"
            fill="#FF9A00"
          >
            Ai
          </text>
        </svg>
      ),
    },
    {
      name: "Canva",
      logo: (
        <svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <circle cx="32" cy="32" r="32" fill="#00C4CC" />
          <text
            x="50%"
            y="55%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontFamily="'Helvetica Neue', Arial, sans-serif"
            fontWeight="700"
            fontSize="36"
            fill="#ffffff"
          >
            C
          </text>
        </svg>
      ),
    },
    {
      name: "Figma",
      logo: (
        <svg width="64" height="64" viewBox="0 0 38 57" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE" />
          <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83" />
          <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#FF7262" />
          <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E" />
          <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF" />
        </svg>
      ),
    },
  ];
  return (
    <section className="relative py-24 sm:py-32 border-t border-white/5">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-10">
        <div className="mb-14 text-center">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#C8FF00]">My Creative Arsenal</span>
          <h2 className="mt-4 font-display text-5xl sm:text-7xl leading-[0.9]">Tools I Work With</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 stagger">
          {tools.map((t) => (
            <div
              key={t.name}
              className="group relative rounded-3xl border border-white/8 bg-[#111] p-8 flex flex-col items-center justify-center text-center hover:border-[#C8FF00]/30 transition-colors"
            >
              <div className="transition-transform duration-500 group-hover:scale-110">
                {t.logo}
              </div>
              <p className="mt-5 text-sm uppercase tracking-[0.18em] text-white/80">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="relative py-24 sm:py-32 border-t border-white/5 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-10 h-2 w-2 rounded-full bg-[#C8FF00]/40 pulse-dot" />
        <div className="absolute top-2/3 right-20 h-3 w-3 rounded-full bg-[#C8FF00]/30 pulse-dot" style={{ animationDelay: "0.6s" }} />
        <div className="absolute bottom-12 left-1/3 h-1.5 w-1.5 rounded-full bg-[#C8FF00]/50 pulse-dot" style={{ animationDelay: "1.2s" }} />
        <div className="absolute -left-40 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#C8FF00]/[0.04] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-10 grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-center">
        <div className="relative justify-self-center lg:justify-self-start">
          <div
            className="relative overflow-hidden rounded-full ring-2 ring-[#C8FF00]/40 float-slow bg-[#111]"
            style={{ width: 320, height: 320 }}
          >
            <img
              src={profile.url}
              alt="Hammad Alvi portrait"
              className="absolute inset-0 h-full w-full object-contain"
              style={{ objectPosition: "center center" }}
            />
          </div>
          <div className="absolute -bottom-4 -right-2 rotate-3 rounded-2xl bg-[#C8FF00] text-black px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] glow-yellow">
            4+ Years · 230 Projects
          </div>
        </div>
        <div>
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#C8FF00]">About</span>
          <h2 className="mt-4 font-display text-5xl sm:text-7xl leading-[0.9]">
            Hi, I'm <span className="text-[#C8FF00]">Hammad.</span>
          </h2>
          <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-xl">
            I help businesses and brands stand out through strategic design. With 4+ years of experience
            in logo design, brand identity, and social media visuals, I craft designs that don't just
            look good — they work.
          </p>
          <Link
            to="/about"
            className="mt-10 inline-flex items-center gap-3 rounded-full border border-white/15 px-6 py-3 text-xs uppercase tracking-[0.18em] hover:border-[#C8FF00] hover:text-[#C8FF00] transition-colors"
          >
            More About Me
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function StatItem({ value, label }: { value: string; label: string }) {
  const numeric = parseFloat(value.replace(/[^0-9.]/g, "")) || 0;
  const suffix = value.replace(/[0-9.]/g, "");
  const isFloat = value.includes(".");
  const { ref, value: v } = useCountUp(numeric);
  const display = isFloat ? v.toFixed(1) : Math.floor(v).toString();
  return (
    <div className="rounded-2xl border border-white/8 bg-[#111] py-10 px-6 text-center">
      <p ref={ref as React.RefObject<HTMLParagraphElement>} className="font-display text-6xl sm:text-7xl text-[#C8FF00]">
        {display}
        {suffix}
      </p>
      <p className="mt-4 text-xs uppercase tracking-[0.2em] text-white/55">{label}</p>
    </div>
  );
}

function StatsBlock() {
  return (
    <section className="relative py-24 sm:py-32 border-t border-white/5 overflow-hidden">
      <div className="pointer-events-none absolute -left-40 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#C8FF00]/[0.05] blur-[120px]" />
      <div className="mx-auto max-w-[1400px] px-5 sm:px-10 text-center">
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#C8FF00]">Track Record</span>
        <h2 className="mt-4 font-display text-[12vw] sm:text-[8vw] leading-[0.9] tracking-[-0.04em]">
          Numbers don't<br />
          <em className="not-italic text-white/30">whisper.</em>
        </h2>
        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {stats.map((s) => (
            <StatItem key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative py-32 sm:py-40 overflow-hidden border-t border-white/5">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 h-[500px] bg-gradient-to-b from-[#C8FF00]/[0.04] via-[#C8FF00]/[0.02] to-transparent" />
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-10 text-center">
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#C8FF00]">Let's Build</span>
        <h2 className="mt-6 font-display text-[12vw] sm:text-[9vw] leading-[0.88] tracking-[-0.04em]">
          Got a brand<br />worth <em className="not-italic text-[#C8FF00]">remembering?</em>
        </h2>
        <p className="mt-8 text-lg text-white/55 max-w-xl mx-auto">
          Book a free consultation and let's build a visual identity that works for your business.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-12 inline-flex items-center gap-4 rounded-full bg-[#C8FF00] text-black px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] glow-yellow hover:scale-105 transition-transform"
        >
          Free Consultation
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-black text-[#C8FF00]">→</span>
        </a>
      </div>
    </section>
  );
}
