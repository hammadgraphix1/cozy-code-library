import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { projects, type Category } from "@/data/projects";

const filterCategories: Category[] = ["Logo Design", "Brand Identity Design", "Social Media Design"];

export const Route = createFileRoute("/work")({
  component: WorkPage,
  head: () => ({
    meta: [
      { title: "Work — Hammad Alvi · Brand Identity & Visual Design" },
      { name: "description", content: "Selected branding, advertising, social and poster design projects by Hammad Alvi." },
      { property: "og:title", content: "Work — Hammad Alvi" },
      { property: "og:description", content: "Selected branding, advertising, and social media design projects." },
    ],
  }),
});

function WorkPage() {
  const [active, setActive] = useState<"All" | Category>("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);
  const logoComing = active === "Logo Design";

  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen">
      <Header />
      <section className="pt-40 pb-12">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-10">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#C8FF00]">Portfolio</span>
          <h1 className="mt-4 font-display text-[14vw] sm:text-[10vw] leading-[0.88] tracking-[-0.04em]">
            Selected<br/><em className="not-italic text-white/30">Work.</em>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-white/60">
            A curated set of brand identity, advertising and editorial design projects — each crafted to be remembered.
          </p>
        </div>
      </section>

      <section className="border-y border-white/5 sticky top-20 z-40 backdrop-blur bg-[#0A0A0A]/80">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-10 flex gap-2 overflow-x-auto py-4 scrollbar-hide">
          {(["All", ...categories] as const).map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`shrink-0 rounded-full px-5 py-2.5 text-xs uppercase tracking-[0.18em] transition-all ${
                active === c
                  ? "bg-[#C8FF00] text-black font-semibold"
                  : "border border-white/10 text-white/70 hover:border-white/30"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-10">
          {logoComing ? (
            <Link to="/work/logo-design" className="block">
              <ComingSoonCard />
            </Link>
          ) : (
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p, i) => (
                <ProjectCard key={p.slug} project={p} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

function ComingSoonCard() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-[#C8FF00]/20 bg-gradient-to-br from-[#111] to-[#0A0A0A] p-10 sm:p-20 text-center group hover:border-[#C8FF00]/50 transition-colors">
      <div className="pointer-events-none absolute inset-0 bg-[#C8FF00]/[0.04] opacity-0 group-hover:opacity-100 transition-opacity" />
      <span className="inline-flex items-center gap-2 rounded-full bg-[#C8FF00] text-black px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-bold">
        Coming Soon
      </span>
      <h2 className="mt-8 font-display text-[14vw] sm:text-[9vw] leading-[0.88] tracking-[-0.04em]">
        Logo<br/><em className="not-italic text-[#C8FF00]">Collection.</em>
      </h2>
      <p className="mt-6 text-white/55 max-w-md mx-auto">
        Professional Logo Collection In Progress — drop coming soon.
      </p>
      <span className="mt-10 inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/60">
        Visit Collection Page →
      </span>
    </div>
  );
}
