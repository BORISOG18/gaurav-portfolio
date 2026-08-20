import { ExternalLink, Github, Sparkles, ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

const statusStyles: Record<string, string> = {
  "Completed Project": "border-chart-3/40 text-chart-3",
  "Academic Project": "border-chart-4/40 text-chart-4",
  "Concept / In Development": "border-chart-2/40 text-chart-2",
};

export function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (project: Project) => void;
}) {
  return (
    <article className="glass-panel group flex h-full flex-col rounded-2xl p-6 transition-all hover:border-primary/40 hover:shadow-[var(--shadow-card)]">
      <div className="flex flex-wrap items-center gap-2">
        <span
          className={`rounded-full border bg-card/60 px-2.5 py-1 text-[11px] ${statusStyles[project.status] ?? "border-border text-muted-foreground"}`}
        >
          {project.status}
        </span>
        {project.featured ? (
          <span className="inline-flex items-center gap-1 rounded-full border border-primary/50 bg-primary/15 px-2.5 py-1 text-[11px] text-primary">
            <Sparkles className="h-3 w-3" /> Featured Project
          </span>
        ) : null}
      </div>

      <h3 className="mt-4 text-lg font-semibold">{project.title}</h3>
      <p className="mt-1 text-xs text-primary">{project.category}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

      <div className="mt-4">
        <p className="text-[11px] font-semibold tracking-[0.16em] text-muted-foreground uppercase">
          Key {project.featuresLabel}
        </p>
        <ul className="mt-2 space-y-1.5">
          {project.features.slice(0, 4).map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
              {f}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-md border border-border bg-secondary/50 px-2 py-1 text-[11px] text-muted-foreground"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-2 pt-2">
        <button
          onClick={() => onOpen(project)}
          className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/15 px-3.5 py-2 text-xs font-medium transition-colors hover:bg-primary/25"
        >
          View Details <ArrowUpRight className="h-3.5 w-3.5" />
        </button>
        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-2 text-xs text-muted-foreground hover:text-foreground"
          >
            <Github className="h-3.5 w-3.5" /> GitHub
          </a>
        ) : (
          <span
            aria-disabled
            title="Repository link not available yet"
            className="inline-flex cursor-not-allowed items-center gap-1.5 rounded-full border border-border px-3.5 py-2 text-xs text-muted-foreground/50"
          >
            <Github className="h-3.5 w-3.5" /> GitHub unavailable
          </span>
        )}
        {project.demo ? (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-2 text-xs text-muted-foreground hover:text-foreground"
          >
            <ExternalLink className="h-3.5 w-3.5" /> Live Demo
          </a>
        ) : (
          <span
            aria-disabled
            title="No live deployment"
            className="inline-flex cursor-not-allowed items-center gap-1.5 rounded-full border border-border px-3.5 py-2 text-xs text-muted-foreground/50"
          >
            <ExternalLink className="h-3.5 w-3.5" /> No live demo
          </span>
        )}
      </div>
    </article>
  );
}
