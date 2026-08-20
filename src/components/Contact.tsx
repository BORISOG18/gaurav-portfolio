import { Check, Copy, Download, Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Reveal, Section, SectionHeading } from "@/components/Section";
import { profile } from "@/data/profile";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.contact.email);
      setCopied(true);
      toast.success("Email copied to clipboard");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Couldn’t copy — please copy manually");
    }
  };

  return (
    <Section id="contact">
      <SectionHeading eyebrow="Contact" title="Let’s Connect" />
      <Reveal delay={0.05}>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          I’m open to internships, projects, learning opportunities and collaborations in Data
          Science, AI/ML and Full-Stack Development.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <Reveal>
          <div className="glass-panel h-full rounded-2xl p-6">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
              <Mail className="h-5 w-5" />
            </span>
            <h3 className="mt-4 text-base font-semibold">Email</h3>
            <p className="mt-1 truncate text-sm text-muted-foreground">{profile.contact.email}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href={`mailto:${profile.contact.email}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/15 px-3.5 py-2 text-xs font-medium hover:bg-primary/25"
              >
                <Mail className="h-3.5 w-3.5" /> Send email
              </a>
              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-2 text-xs text-muted-foreground hover:text-foreground"
              >
                {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                {copied ? "Copied" : "Copy email"}
              </button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="glass-panel h-full rounded-2xl p-6">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
              <Linkedin className="h-5 w-5" />
            </span>
            <h3 className="mt-4 text-base font-semibold">Profiles & Resume</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Connect with me or download my resume.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href={profile.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-2 text-xs text-muted-foreground hover:text-foreground"
              >
                <Linkedin className="h-3.5 w-3.5" /> LinkedIn
              </a>
              <a
                href={profile.contact.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-2 text-xs text-muted-foreground hover:text-foreground"
              >
                <Github className="h-3.5 w-3.5" /> GitHub
              </a>
              <a
                href={profile.resumeUrl}
                download
                className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/15 px-3.5 py-2 text-xs font-medium hover:bg-primary/25"
              >
                <Download className="h-3.5 w-3.5" /> Download Resume
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
