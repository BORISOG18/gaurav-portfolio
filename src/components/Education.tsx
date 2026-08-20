import { GraduationCap, Sparkles, Target } from "lucide-react";
import { Reveal, Section, SectionHeading } from "@/components/Section";
import { education, interests, profile, softSkills } from "@/data/profile";

export function Education() {
  return (
    <Section id="education">
      <SectionHeading eyebrow="Background" title="Education" />

      <div className="mt-8 space-y-5 border-l border-border pl-6 sm:pl-8">
        {education.map((item, i) => (
          <Reveal key={item.school} delay={i * 0.08}>
            <div className="relative">
              <span className="absolute top-6 -left-[2.1rem] h-3 w-3 rounded-full border-2 border-primary bg-background sm:-left-[2.6rem]" />
              <div className="glass-panel rounded-2xl p-6">
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold sm:text-lg">{item.school}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{item.degree}</p>
                  </div>
                  <span className="shrink-0 rounded-full border border-primary/40 bg-primary/10 px-2.5 py-1 text-[11px] text-primary">
                    {item.status}
                  </span>
                </div>
                {item.year ? (
                  <p className="mt-3 text-xs text-muted-foreground">{item.year}</p>
                ) : null}
                {item.subjects.length ? (
                  <>
                    <p className="mt-4 text-[11px] font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                      Relevant subjects
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {item.subjects.map((s) => (
                        <span
                          key={s}
                          className="rounded-md border border-border bg-secondary/50 px-2 py-1 text-[11px] text-muted-foreground"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </>
                ) : null}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-16 grid gap-10 lg:grid-cols-2">
        <div>
          <SectionHeading title="Soft Skills" />
          <Reveal delay={0.05}>
            <div className="mt-6 flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="glass-panel rounded-full px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
        <div>
          <SectionHeading title="Areas of Interest" />
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {interests.map((interest, i) => (
              <Reveal key={interest} delay={i * 0.03}>
                <div className="glass-panel flex items-center gap-2.5 rounded-xl px-4 py-3 text-sm transition-colors hover:border-primary/40">
                  <Sparkles className="h-4 w-4 shrink-0 text-primary" />
                  <span className="min-w-0 truncate">{interest}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <Reveal delay={0.05}>
        <div
          className="glass-panel mt-16 rounded-2xl p-8"
          style={{ backgroundImage: "var(--gradient-surface)" }}
        >
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
              <Target className="h-5 w-5" />
            </span>
            <h3 className="text-xl font-bold sm:text-2xl">What I’m working toward</h3>
          </div>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
            {profile.careerGoal}
          </p>
          <p className="mt-5 inline-flex items-center gap-2 text-sm text-primary">
            <GraduationCap className="h-4 w-4" /> {profile.education} · {profile.year}
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
