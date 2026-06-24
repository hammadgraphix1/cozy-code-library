import { Link } from "@tanstack/react-router";
import type { Project } from "@/data/projects";

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <Link
      to="/work/$slug"
      params={{ slug: project.slug }}
      className="group block"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="relative overflow-hidden rounded-2xl bg-[#111] border border-white/5 transition-all duration-500 group-hover:border-[#C8FF00]/30">
        <div className="relative aspect-square overflow-hidden bg-[#0A0A0A]">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-contain transition-transform duration-[1200ms] ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-white/80">
            {project.category}
          </div>
          <div className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full bg-black/50 backdrop-blur px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-white/70">
            {project.year}
          </div>
        </div>
        <div className="p-5 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-display text-xl sm:text-2xl leading-tight group-hover:text-[#C8FF00] transition-colors">
              {project.title}
            </h3>
            <span className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 group-hover:bg-[#C8FF00] group-hover:border-[#C8FF00] group-hover:text-black transition-all">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 11L11 3M11 3H4M11 3V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </div>
          <p className="mt-3 text-sm text-white/55 leading-relaxed line-clamp-2">{project.description}</p>
          <div className="mt-5 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-white/40">
            <span>Client · {project.client}</span>
            {project.caseStudy && <span className="text-[#C8FF00]/80">Case Study →</span>}
          </div>
        </div>
      </div>
    </Link>
  );
}
