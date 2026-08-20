import { useState } from "react";
import { Award, ExternalLink, FileText } from "lucide-react";
import { Reveal, Section, SectionHeading } from "@/components/Section";
import { certifications, type Certification } from "@/data/certifications";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export function Certifications() {
  const [selected, setSelected] = useState<Certification | null>(null);

  return (
    <Section id="certifications">
      <SectionHeading
        eyebrow="Credentials"
        title="Certifications"
        description="Industry programs completed through Google for Developers, Siemens and EduSkills Academy. Click a card to view the certificate."
      />

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {certifications.map((cert, i) => (
          <Reveal key={cert.id} delay={i * 0.07}>
            <button
              onClick={() => setSelected(cert)}
              className="glass-panel group h-full w-full rounded-2xl p-6 text-left transition-all hover:border-primary/40 hover:shadow-[var(--shadow-card)]"
            >
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                <div className="min-w-0">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <Award className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{cert.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{cert.organization}</p>
                </div>
                <span className="shrink-0 rounded-full border border-chart-3/40 px-2.5 py-1 text-[11px] text-chart-3">
                  {cert.status}
                </span>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-md border border-border bg-secondary/50 px-2.5 py-1 text-[11px] text-muted-foreground">
                  {cert.cohort}
                </span>
                <span className="rounded-md border border-primary/40 bg-primary/10 px-2.5 py-1 text-[11px] text-primary">
                  Grade {cert.grade}
                </span>
              </div>

              {cert.includes ? (
                <p className="mt-4 text-xs text-muted-foreground">
                  Includes: {cert.includes.join(" · ")}
                </p>
              ) : null}

              <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-primary">
                <FileText className="h-3.5 w-3.5" /> View certificate
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="glass-panel max-h-[88vh] w-[calc(100vw-2rem)] max-w-3xl overflow-y-auto rounded-2xl">
          {selected ? (
            <>
              <DialogHeader className="pr-8 text-left">
                <DialogTitle className="text-xl">{selected.title}</DialogTitle>
                <p className="text-sm text-muted-foreground">{selected.organization}</p>
              </DialogHeader>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-md border border-border bg-secondary/50 px-2.5 py-1 text-[11px] text-muted-foreground">
                  {selected.cohort}
                </span>
                <span className="rounded-md border border-primary/40 bg-primary/10 px-2.5 py-1 text-[11px] text-primary">
                  Grade {selected.grade}
                </span>
                <span className="rounded-md border border-chart-3/40 px-2.5 py-1 text-[11px] text-chart-3">
                  {selected.status}
                </span>
              </div>

              <div className="overflow-hidden rounded-xl border border-border bg-secondary/30">
                {selected.fileType === "pdf" ? (
                  <object
                    data={selected.file}
                    type="application/pdf"
                    className="h-[55vh] w-full"
                    aria-label={`${selected.title} certificate`}
                  >
                    <div className="p-6 text-sm text-muted-foreground">
                      This certificate file hasn’t been uploaded yet. Add it at
                      <code className="mx-1 rounded bg-secondary px-1.5 py-0.5 text-xs">
                        public{selected.file}
                      </code>
                      to display it here.
                    </div>
                  </object>
                ) : (
                  <img
                    src={selected.file}
                    alt={`${selected.title} certificate`}
                    className="max-h-[55vh] w-full object-contain"
                  />
                )}
              </div>

              <a
                href={selected.file}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/40 bg-primary/15 px-4 py-2 text-sm font-medium transition-colors hover:bg-primary/25"
              >
                <ExternalLink className="h-4 w-4" /> Open full certificate
              </a>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </Section>
  );
}
