import { BrainCircuit, Code2, Layers } from "lucide-react";
import { Reveal, Section, SectionHeading, Tag } from "@/components/Section";
import { aboutCards, aboutParagraphs, profile } from "@/data/profile";

const icons = [BrainCircuit, Layers, Code2];

export function About() {
  return (
    <Section id="about">
      <SectionHeading eyebrow="Profile" title="About Me" />
      <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5">
          {aboutParagraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <p className="text-base leading-relaxed text-muted-foreground">{p}</p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <div className="glass-panel rounded-2xl p-6">
            <h3 className="text-sm font-semibold tracking-[0.16em] text-primary uppercase">
              Career Objective
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{profile.objective}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              <Tag>{profile.year}</Tag>
              <Tag>{profile.location}</Tag>
              <Tag>{profile.status}</Tag>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {aboutCards.map((card, i) => {
          const Icon = icons[i] ?? Code2;
          return (
            <Reveal key={card.title} delay={i * 0.08}>
              <div className="glass-panel h-full rounded-2xl p-6 transition-colors hover:border-primary/40">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{card.title}</h3>
                <p className="mt-1 text-xs tracking-wide text-primary uppercase">{card.subtitle}</p>
                <ul className="mt-4 space-y-2">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
