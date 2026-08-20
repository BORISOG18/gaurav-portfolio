import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Reveal, Section, SectionHeading } from "@/components/Section";
import { skillCategories, type SkillLevel } from "@/data/skills";

const levelStyles: Record<SkillLevel, string> = {
  Learning: "border-chart-2/40 text-chart-2",
  Familiar: "border-border text-muted-foreground",
  "Hands-on": "border-chart-3/40 text-chart-3",
  Academic: "border-chart-4/40 text-chart-4",
  "Project Experience": "border-primary/50 text-primary",
};

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const visible = useMemo(
    () =>
      activeCategory === "all"
        ? skillCategories
        : skillCategories.filter((c) => c.id === activeCategory),
    [activeCategory],
  );

  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="Capabilities"
        title="Technical Skills"
        description="Filter by category. Levels are labelled honestly — from academic coursework to hands-on project experience."
      />

      <Reveal delay={0.05}>
        <div className="mt-8 flex flex-wrap gap-2">
          {[{ id: "all", label: "All" }, ...skillCategories].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                activeCategory === cat.id
                  ? "border-primary/50 bg-primary/15 text-foreground"
                  : "border-border bg-secondary/40 text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {visible.map((cat, i) => (
          <motion.div
            key={cat.id}
            layout
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="glass-panel rounded-2xl p-6"
          >
            <h3 className="text-base font-semibold">{cat.label}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={`${cat.id}-${skill.name}`}
                  className={`inline-flex items-center gap-2 rounded-full border bg-card/60 px-3 py-1.5 text-xs ${levelStyles[skill.level]}`}
                >
                  <span className="text-foreground">{skill.name}</span>
                  <span className="opacity-80">{skill.level}</span>
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
