import { Reveal } from "@/components/Section";
import { stats } from "@/data/profile";

export function Stats() {
  return (
    <div className="mx-auto w-full max-w-[78rem] px-5 pb-8">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.08}>
            <div className="glass-panel h-full rounded-2xl p-5 transition-colors hover:border-primary/40">
              <p className="text-3xl font-bold text-gradient sm:text-4xl">{stat.value}</p>
              <p className="mt-2 text-xs leading-snug text-muted-foreground sm:text-sm">
                {stat.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
