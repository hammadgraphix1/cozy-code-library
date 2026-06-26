import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { projects, type Category, WHATSAPP_URL } from "@/data/projects";

const filterCategories: Category[] = [
  "Logo Design",
  "Brand Identity Design",
  "Social Media Design",
  "Advertising Design",
  "Poster Design",
];

export const Route = createFileRoute("/work")({
  component: WorkPage,
  head: () => ({
    meta: [
      { title: "Work — Hammad Alvi · Brand Identity & Visual Design" },
      { name: "description", content: "Selected branding, advertising, social and poster design projects by Hammad Alvi." },
    ],
  }),
});

function WorkPage() {
  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen">
      <Header />

      {/* Page Header */}
      <section className="pt-40 pb-12">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-10">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#C8FF00]">Portfolio</span>
          <h1 className="mt-4 font-display text-[14vw] sm:text-[10vw] leading-[0.88] tracking-[-0.04em]">
            Selected<br /><em className="not-italic text-white/30">Work.</em>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-white/60">
            A curated set of brand identity, advertising and editorial design projects — each crafted to be remembered.
          </p>
        </div>
      </section>

      {/* All Categories */}
      <section className="pb-32">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-10 space-y-28">
          {filterCategories.map((cat) => {
            const items = projects.filter((p) => p.category === cat);
            const isLogoDesign = cat === "Logo Design";

            return (
              <div key={cat}>
                {/* Category Heading */}
                <div className="flex items-end justify-between mb-10 border-b border-white/8 pb-6">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-[#C8FF00]">Category</span>
                    <h2 className="mt-2 font-display text-4xl sm:text-6xl tracking-[-0.03em]">{cat}</h2>
                  </div>
                  <span className="font-display text-6xl sm:text-8xl text-white/5 leading-none">
                    {isLogoDesign ? "00" : `0${items.length}`}
                  </span>
                </div>

                {/* Designs Grid or Coming Soon */}
                {isLogoDesign ? (
                  <Link to="/work/logo-design" className="block group">
                    <div className="relative overflow-hidden rounded-3xl border border-[#C8FF00]/20 bg-[#111] p-16 sm:p-24 text-center hover:border-[#C8FF00]/50 transition-all duration-500 hover:shadow-[0_0_80px_-20px_rgba(200,255,0,0.3)]">
                      <div className="pointer-events-none absolute inset-0 bg-[#C8FF00]/[0.03] opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="inline-flex items-center gap-2 rounded-full bg-[#C8FF00] text-black px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-bold animate-pulse">
                        ✦ Coming Soon
                      </span>
                      <h3 className="mt-8 font-display text-[12vw] sm:text-[7vw] leading-[0.88] tracking-[-0.04em]">
                        Logo<br /><em className="not-italic text-[#C8FF00]">Collection.</em>
                      </h3>
                      <p className="mt-6 text-white/50 max-w-md mx-auto">
                        Professional logo collection in progress — drop coming soon.
                      </p>
                      <span className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C8FF00]/70 group-hover:text-[#C8FF00] transition-colors">
                        View Collection Page →
                      </span>
                    </div>
                  </Link>
                ) : (
                  <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {items.map((p, i) => (
                      <ProjectCard key={p.slug} project={p} index={i} />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-white/5 text-center">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-3 rounded-full bg-[#C8FF00] text-black px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] glow-yellow hover:scale-105 transition-transform"
        >
          Free Consultation →
        </a>
      </section>

      <Footer />
    </div>
  );
}
