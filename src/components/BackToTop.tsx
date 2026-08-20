import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="glass-panel animate-fade-in fixed right-5 bottom-5 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full text-foreground transition-colors hover:border-primary/50"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
