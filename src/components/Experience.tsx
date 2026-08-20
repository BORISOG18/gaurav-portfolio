import { Briefcase, Palette, Terminal } from "lucide-react";
import { Reveal, Section, SectionHeading } from "@/components/Section";
import { experience, programmingExperience } from "@/data/profile";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        eyebrow="Journey"
        title="Experience & Learning"
        description="As a first-year student, my experience comes from academic projects and independent creative work — not corporate employment."
      />

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {experience.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.08}>
            <div className="glass-panel h-full rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  {i === 0 ? <Briefcase className="h-5 w-5" /> : <Palette className="h-5 w-5" />}
                </span>
                <span className="rounded-full border border-primary/40 bg-primary/10 px-2.5 py-1 text-[11px] text-primary">
                  {item.label}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
              {item.items.length ? (
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {item.items.map((entry) => (
                    <span
                      key={entry}
                      className="rounded-md border border-border bg-secondary/50 px-2 py-1 text-[11px] text-muted-foreground"
                    >
                      {entry}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-14">
        <SectionHeading
          title="Programming Experience"
          description="Topics I have actually worked through in coursework and personal practice."
        />
        <Reveal delay={0.05}>
          <div className="glass-panel mt-8 rounded-2xl px-5 py-2">
            <Accordion type="single" collapsible defaultValue="C">
              {programmingExperience.map((lang) => (
                <AccordionItem key={lang.language} value={lang.language} className="border-border">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="flex min-w-0 items-center gap-3">
                      <Terminal className="h-4 w-4 shrink-0 text-primary" />
                      <span className="truncate font-semibold">{lang.language}</span>
                      <span className="shrink-0 text-xs text-muted-foreground">
                        {lang.topics.length} topics
                      </span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-wrap gap-1.5 pb-2">
                      {lang.topics.map((topic) => (
                        <span
                          key={topic}
                          className="rounded-md border border-border bg-secondary/50 px-2 py-1 text-[11px] text-muted-foreground"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
