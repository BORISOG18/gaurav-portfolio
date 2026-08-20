import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { navItems, profile } from "@/data/profile";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0.01, 0.2, 0.5] },
    );
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "glass-panel border-b shadow-[var(--shadow-card)]" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto grid w-full max-w-[78rem] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3.5">
        <button
          onClick={() => go("home")}
          className="min-w-0 text-left text-lg font-bold tracking-tight"
          aria-label="Go to home"
        >
          <span className="text-gradient">{profile.initials}</span>
        </button>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className={`rounded-full px-3 py-1.5 text-sm transition-colors ${
                active === item.id
                  ? "bg-secondary text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </button>
          ))}
          <a
            href={profile.resumeUrl}
            download
            className="ml-2 inline-flex shrink-0 items-center gap-2 rounded-full border border-primary/40 bg-primary/15 px-4 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-primary/25"
          >
            <Download className="h-3.5 w-3.5" /> Resume
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-secondary/60 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div className="glass-panel border-t lg:hidden">
          <div className="mx-auto flex max-w-[78rem] flex-col gap-1 px-5 py-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className={`rounded-xl px-3 py-2.5 text-left text-sm ${
                  active === item.id
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
            <a
              href={profile.resumeUrl}
              download
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl border border-primary/40 bg-primary/15 px-4 py-2.5 text-sm font-medium"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
