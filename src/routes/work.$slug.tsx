import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { projects, WHATSAPP_URL } from "@/data/projects";

export const Route = createFileRoute("/work/$slug")({
  component: ProjectDetailPage,
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return project;
  },
  notFoundComponent: () => (
    <div className="bg-[#0A0A0A] text-white min-h-screen">
      <Header />
      <div className="pt-40 pb-20 text-center px-5">
        <h1 className="font-display text-6xl">Project Not Found</h1>
        <Link to="/work" className="mt-8 inline-block rounded-full bg-[#C8FF00] text-black px-6 py-3 text-xs uppercase tracking-[0.2em] font-bold">Back to Work</Link>
      </div>
      <Footer />
    </div>
  ),
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — Hammad Alvi` },
          { name: "description", content: loaderData.description },
          { property: "og:title", content: `${loaderData.title} — Hammad Alvi` },
          { property: "og:description", content: loaderData.description },
          { property: "og:image", content: loaderData.image },
        ]
      : [{ title: "Project — Hammad Alvi" }],
  }),
});

function ProjectDetailPage() {
  const project = Route.useLoaderData();
  const cs = project.caseStudy;
  const idx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <div className="bg-[#0A0A0A] text-white">
      <Header />

      <section className="pt-36 pb-16">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-10">
          <Link to="/work" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/50 hover:text-[#C8FF00] transition-colors mb-10">
            ← Back to Work
          </Link>
          <div className="flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-white/50 mb-6">
            <span className="rounded-full bg-[#C8FF00]/10 text-[#C8FF00] px-3 py-1">{project.category}</span>
            <span>·</span>
            <span>{project.year}</span>
            <span>·</span>
            <span>{project.client}</span>
          </div>
          <h1 className="font-display text-[12vw] sm:text-[8vw] leading-[0.9] tracking-[-0.04em]">{project.title}</h1>
          <p className="mt-8 max-w-2xl text-lg sm:text-xl text-white/65 leading-relaxed">{project.description}</p>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-10">
          <div className="relative rounded-3xl bg-[#111] border border-white/8 overflow-hidden p-4 sm:p-8">
            <img src={project.image} alt={project.title} className="w-full h-auto object-contain max-h-[80vh] mx-auto" />
          </div>
        </div>
      </section>

      {cs && (
        <section className="py-20 border-t border-white/5">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-10">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C8FF00]">Case Study</span>
            <h2 className="mt-4 font-display text-5xl sm:text-7xl leading-[0.9]">Deep Dive.</h2>

            <div className="mt-16 grid gap-12 md:grid-cols-2">
              <CSBlock n="01" label="Overview" body={cs.overview} />
              <CSBlock n="02" label="Challenge" body={cs.challenge} />
              <CSBlock n="03" label="Research" body={cs.research} />
              <CSBlock n="04" label="Strategy" body={cs.strategy} />
              <CSBlock n="05" label="Design Process" body={cs.process} />
              <CSBlock n="06" label="Solution" body={cs.solution} />
              <div className="md:col-span-2 rounded-3xl bg-[#C8FF00] text-black p-10 sm:p-14">
                <span className="text-[10px] uppercase tracking-[0.3em]">07 · Result</span>
                <p className="mt-6 font-display text-3xl sm:text-5xl leading-tight">{cs.result}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-24 border-t border-white/5">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-10 text-center">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#C8FF00]">Next Project</span>
          <Link to="/work/$slug" params={{ slug: next.slug }} className="mt-6 block group">
            <h3 className="font-display text-[10vw] sm:text-[6vw] leading-[0.9] tracking-[-0.04em] group-hover:text-[#C8FF00] transition-colors">
              {next.title} →
            </h3>
          </Link>
        </div>
      </section>

      <section className="py-20 border-t border-white/5 text-center">
        <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-full bg-[#C8FF00] text-black px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] glow-yellow hover:scale-105 transition-transform">
          Free Consultation →
        </a>
      </section>

      <Footer />
    </div>
  );
}

function CSBlock({ n, label, body }: { n: string; label: string; body: string }) {
  return (
    <div className="rounded-3xl border border-white/8 bg-[#111] p-8 sm:p-10">
      <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-white/40">
        <span className="text-[#C8FF00]">{n}</span>
        <span>{label}</span>
      </div>
      <p className="mt-4 text-white/75 leading-relaxed">{body}</p>
    </div>
  );
}
