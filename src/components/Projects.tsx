import { useState } from "react";
import { Lightbulb } from "lucide-react";
import { Reveal, Section, SectionHeading } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { otherConcepts, projects, type Project } from "@/data/projects";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Work"
        title="Featured Projects"
        description="Projects built through coursework and self-directed learning. Concepts are labelled clearly and are not presented as deployed products."
      />

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.id} delay={i * 0.06}>
            <ProjectCard project={project} onOpen={setSelected} />
          </Reveal>
        ))}
      </div>

      <div className="mt-16">
        <SectionHeading
          title="Other Academic Concepts"
          description="Early-stage ideas explored as academic concepts — not built or deployed."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {otherConcepts.map((concept, i) => (
            <Reveal key={concept.title} delay={i * 0.06}>
              <div className="glass-panel h-full rounded-2xl p-6">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15 text-primary">
                    <Lightbulb className="h-4 w-4" />
                  </span>
                  <span className="rounded-full border border-chart-2/40 px-2.5 py-1 text-[11px] text-chart-2">
                    Project Concept
                  </span>
                </div>
                <h3 className="mt-4 text-base font-semibold">{concept.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{concept.description}</p>
                <ul className="mt-4 space-y-1.5">
                  {concept.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="glass-panel max-h-[85vh] w-[calc(100vw-2rem)] max-w-2xl overflow-y-auto rounded-2xl">
          {selected ? (
            <>
              <DialogHeader className="pr-8 text-left">
                <DialogTitle className="text-xl">{selected.title}</DialogTitle>
                <p className="text-xs text-primary">{selected.category}</p>
              </DialogHeader>
              <p className="text-sm leading-relaxed text-muted-foreground">{selected.description}</p>

              <div>
                <p className="text-[11px] font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                  {selected.featuresLabel}
                </p>
                <ul className="mt-2 grid gap-1.5 sm:grid-cols-2">
                  {selected.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              {selected.extra ? (
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                    {selected.extra.label}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {selected.extra.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-border bg-secondary/50 px-2 py-1 text-[11px] text-muted-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}
              {selected.objective ? (
                <div className="rounded-xl border border-border bg-secondary/40 p-4">
                  <p className="text-[11px] font-semibold tracking-[0.16em] text-primary uppercase">
                    Objective
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">{selected.objective}</p>
                </div>
              ) : null}
              <div>
                <p className="text-[11px] font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                  Technology
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {selected.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-border bg-secondary/50 px-2 py-1 text-[11px] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-xs text-muted-foreground">Status: {selected.status}</p>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </Section>
  );
}
