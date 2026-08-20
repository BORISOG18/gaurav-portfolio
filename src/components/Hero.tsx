import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "@/data/profile";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-10 sm:pt-32">
      <div className="pointer-events-none absolute inset-0 grid-backdrop" aria-hidden />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full opacity-30 blur-[120px]"
        style={{ background: "var(--gradient-primary)" }}
        aria-hidden
      />

      <div className="relative mx-auto grid w-full max-w-[78rem] items-center gap-12 px-5 py-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="min-w-0">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/35 bg-primary/10 px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.16em] uppercase"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Open to Internship Opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-6 text-4xl leading-[1.05] font-bold sm:text-5xl lg:text-6xl"
          >
            Turning ideas into <span className="text-gradient">data-driven products.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {profile.heroText}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <button
              onClick={() => scrollTo("projects")}
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
              style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
            >
              View My Projects <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-5 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <button
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4" /> Contact Me
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-muted-foreground"
          >
            <a
              href= "https://github.com/BORISOG18"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:text-foreground"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href= "https://www.linkedin.com/in/gaurav-joshi-068782332/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:text-foreground"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" /> {profile.location}
            </span>
          </motion.div>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3.5 py-1.5 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-glow" />
            Currently learning • Building • Exploring
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div
            className="absolute -inset-6 rounded-[2.5rem] opacity-40 blur-3xl"
            style={{ background: "var(--gradient-primary)" }}
            aria-hidden
          />
          <div className="glass-panel relative rounded-[2rem] p-4">
            <div className="overflow-hidden rounded-[1.4rem] border border-border">
              <img
                src="/gaurav-portrait.jpg"
                alt="Portrait of Gaurav Yogesh Joshi"
                className="aspect-[4/5] w-full object-cover object-top"
                width={740}
                height={925}
              />
            </div>
            <div className="mt-4 px-1 pb-1">
              <p className="text-base font-semibold">{profile.name}</p>
              <p className="mt-1 text-xs text-muted-foreground">{profile.headline}</p>
              <p className="mt-2 text-xs text-primary">{profile.secondaryHeadline}</p>
            </div>
          </div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="glass-panel absolute -left-10 top-1/3 hidden rounded-xl px-3 py-2 text-xs text-muted-foreground xl:block"
          >
            Python · React · MongoDB
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="glass-panel absolute -right-10 top-2/3 hidden rounded-xl px-3 py-2 text-xs text-muted-foreground xl:block"
          >
            AI/ML · Data Analysis
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
