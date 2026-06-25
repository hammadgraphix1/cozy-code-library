import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { projects, type Category } from "@/data/projects";

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
      { property: "og:title", content: "Work — Hammad Alvi" },
      { property: "og:description", content: "Selected branding, advertising, and social media design projects." },
    ],
  }),
});

function WorkPage() {
  const [active, setActive] = useState<"All" | Category>("All");
  const [openFolder, setOpenFolder] = useState<Category | null>(null);

  const showFolders = active === "All" && openFolder === null;
  const activeCategory: Category | null =
    active !== "All" ? (active as Category) : openFolder;

  const filtered = activeCategory
    ? projects.filter((p) => p.category === activeCategory)
    : projects;

  const logoComing = activeCategory === "Logo Design";

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
          {(["All", ...filterCategories] as const).map((c) => (
            <button
              key={c}
              onClick={() => {
                setActive(c);
                setOpenFolder(null);
              }}
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
          {showFolders ? (
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 stagger">
              {filterCategories.map((cat) => {
                const items = projects.filter((p) => p.category === cat);
                const preview = items[0];
                return (
                  <FolderCard
                    key={cat}
                    category={cat}
                    count={items.length}
                    previewImage={preview?.image}
                    onOpen={() => setOpenFolder(cat)}
                  />
                );
              })}
            </div>
          ) : (
            <>
              {active === "All" && openFolder && (
                <button
                  onClick={() => setOpenFolder(null)}
                  className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-xs uppercase tracking-[0.18em] text-white/70 hover:border-[#C8FF00] hover:text-[#C8FF00] transition-colors"
                >
                  ← Back to folders
                </button>
              )}
              {activeCategory && (
                <h2 className="mb-10 font-display text-4xl sm:text-6xl tracking-[-0.02em]">
                  {activeCategory}
                  <span className="ml-3 text-white/30 text-2xl sm:text-3xl">/ {filtered.length}</span>
                </h2>
              )}
              {logoComing ? (
                <Link to="/work/logo-design" className="block">
                  <ComingSoonCard />
                </Link>
              ) : (
                <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 animate-fade-in">
                  {filtered.map((p, i) => (
                    <ProjectCard key={p.slug} project={p} index={i} />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

function FolderCard({
  category,
  count,
  previewImage,
  onOpen,
}: {
  category: Category;
  count: number;
  previewImage?: string;
  onOpen: () => void;
}) {
  return (
    <button
      onClick={onOpen}
      className="group relative text-left overflow-hidden rounded-3xl border border-white/10 bg-[#111] transition-all duration-500 hover:border-[#C8FF00] hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_20px_60px_-15px_rgba(200,255,0,0.35)]"
    >
      {/* Folder tab */}
      <div className="absolute top-0 left-6 h-3 w-24 rounded-b-lg bg-[#C8FF00]/70 group-hover:bg-[#C8FF00] transition-colors" />

      <div className="relative aspect-[4/3] overflow-hidden bg-[#0A0A0A]">
        {previewImage && (
          <img
            src={previewImage}
            alt={`${category} preview`}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/30 to-transparent" />
        <span className="absolute top-6 right-5 inline-flex items-center gap-1.5 rounded-full bg-[#C8FF00] text-black px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em]">
          {count} {count === 1 ? "design" : "designs"}
        </span>
      </div>

      <div className="p-7 flex items-center justify-between gap-4">
        <div>
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#C8FF00]/80">Folder</span>
          <h3 className="mt-2 font-display text-2xl sm:text-3xl tracking-[-0.02em]">
            {category}
          </h3>
        </div>
        <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/60 group-hover:text-[#C8FF00] transition-colors">
          View All
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </span>
      </div>
    </button>
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
