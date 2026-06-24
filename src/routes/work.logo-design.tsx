import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WHATSAPP_URL } from "@/data/projects";

export const Route = createFileRoute("/work/logo-design")({
  component: LogoDesignPage,
  head: () => ({
    meta: [
      { title: "Logo Design — Coming Soon · Hammad Alvi" },
      { name: "description", content: "Professional Logo Collection In Progress — by Hammad Alvi." },
    ],
  }),
});

function LogoDesignPage() {
  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen">
      <Header />
      <section className="pt-40 pb-32 relative overflow-hidden">
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#C8FF00]/[0.08] blur-[140px]" />
        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-10 text-center">
          <Link to="/work" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/50 hover:text-[#C8FF00] mb-12">← Back to Work</Link>
          <span className="inline-flex items-center gap-2 rounded-full bg-[#C8FF00] text-black px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-bold">
            <span className="h-1.5 w-1.5 rounded-full bg-black animate-pulse" />
            Coming Soon
          </span>
          <h1 className="mt-10 font-display text-[18vw] sm:text-[14vw] leading-[0.88] tracking-[-0.05em]">
            COMING<br/><em className="not-italic text-[#C8FF00]">SOON.</em>
          </h1>
          <p className="mt-10 text-xl sm:text-2xl text-white/65 max-w-2xl mx-auto">
            Professional Logo Collection In Progress.
          </p>
          <p className="mt-4 text-base text-white/45 max-w-xl mx-auto">
            A new body of custom marks, wordmarks and full logo systems is being prepared for release. In the meantime, brand identity and advertising work is live in the portfolio.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="rounded-full bg-[#C8FF00] text-black px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] glow-yellow hover:scale-105 transition-transform">
              Request Early Access
            </a>
            <Link to="/work" className="rounded-full border border-white/15 px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] hover:border-white/40 transition-colors">
              Browse Other Work
            </Link>
          </div>

          <div className="mt-24 grid gap-4 sm:grid-cols-4 max-w-3xl mx-auto">
            {[1,2,3,4].map((i) => (
              <div key={i} className="aspect-square rounded-2xl border border-white/8 bg-[#111] flex items-center justify-center text-white/15 font-display text-5xl">
                ?
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
