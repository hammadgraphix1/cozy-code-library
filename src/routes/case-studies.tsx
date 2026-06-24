import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/case-studies")({
  component: CaseStudiesPage,
  head: () => ({
    meta: [
      { title: "Case Studies — Hammad Alvi · Brand Design Deep Dives" },
      { name: "description", content: "In-depth case studies covering research, strategy, design process and measurable results behind selected Hammad Alvi projects." },
      { property: "og:title", content: "Case Studies — Hammad Alvi" },
      { property: "og:description", content: "Deep dives into research, strategy and results of selected branding projects." },
    ],
  }),
});

function CaseStudiesPage() {
  const cases = projects.filter((p) => p.caseStudy);
  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen">
      <Header />
      <section className="pt-40 pb-20">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-10">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#DFFF00]">Case Studies</span>
          <h1 className="mt-4 font-display text-[14vw] sm:text-[10vw] leading-[0.88] tracking-[-0.04em]">
            Process,<br/><em className="not-italic text-white/30">measured.</em>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-white/60">
            Selected projects with the full story — challenge, research, strategy, design process, solution and result.
          </p>
        </div>
      </section>

      <section className="pb-32">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-10 space-y-6">
          {cases.map((p, i) => (
            <Link key={p.slug} to="/work/$slug" params={{ slug: p.slug }} className="group block">
              <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] rounded-3xl border border-white/8 bg-[#111] p-6 sm:p-10 hover:border-[#DFFF00]/30 transition-colors">
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-[#0A0A0A]">
                  <img src={p.image} alt={p.title} className="absolute inset-0 h-full w-full object-contain transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-white/50">
                      <span className="text-[#DFFF00]">Case 0{i + 1}</span>
                      <span>·</span>
                      <span>{p.category}</span>
                    </div>
                    <h2 className="mt-5 font-display text-4xl sm:text-6xl leading-[0.95] group-hover:text-[#DFFF00] transition-colors">{p.title}</h2>
                    <p className="mt-5 text-white/65 leading-relaxed">{p.caseStudy!.overview}</p>
                  </div>
                  <div className="mt-8 rounded-2xl bg-[#DFFF00] text-black p-5">
                    <span className="text-[9px] uppercase tracking-[0.25em] font-bold">Result</span>
                    <p className="mt-2 font-display text-xl leading-tight">{p.caseStudy!.result}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
