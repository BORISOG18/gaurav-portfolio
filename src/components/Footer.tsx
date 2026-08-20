import { Download, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid w-full max-w-[78rem] gap-6 px-5 py-10 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
        <div className="min-w-0">
          <p className="text-base font-semibold">{profile.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Data Science · AI/ML · Full-Stack Development
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <a
            href="https://github.com/BORISOG18"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-foreground"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/gaurav-joshi-068782332/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-foreground"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <a
            href= "mailto:kolhapurnp@gmail.com"
            className="inline-flex items-center gap-1.5 hover:text-foreground"
          >
            <Mail className="h-4 w-4" /> Email
          </a>
          <a
            href={profile.resumeUrl}
            download
            className="inline-flex items-center gap-1.5 hover:text-foreground"
          >
            <Download className="h-4 w-4" /> Resume
          </a>
        </div>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto w-full max-w-[78rem] px-5 py-5 text-xs text-muted-foreground">
          © 2026 {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
