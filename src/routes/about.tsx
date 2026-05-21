import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import about from "@/assets/about.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Blue Decor" },
      { name: "description", content: "Blue Decor is a small, deliberately slow interior design studio led by founder Camille Auclair." },
      { property: "og:title", content: "About — Blue Decor" },
      { property: "og:description", content: "A small, deliberately slow interior design studio." },
    ],
  }),
  component: About,
});

const principles = [
  { t: "Restraint", d: "We subtract before we add. Negative space is a material we use deliberately." },
  { t: "Craft", d: "Every piece is sourced, commissioned, or made by hands we know personally." },
  { t: "Patience", d: "We accept a small number of commissions each year and refuse to rush them." },
];

function About() {
  return (
    <PageShell>
      <PageHero eyebrow="The Studio" title="About Blue Decor" />

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <img src={about} alt="Camille Auclair, founder of Blue Decor" loading="lazy" width={1200} height={1500}
              className="w-full aspect-[4/5] object-cover" />
          </div>
          <div className="md:col-span-7 md:pt-12">
            <p className="text-2xl md:text-3xl font-display leading-snug">
              Blue Decor was founded in 2014 by <span className="text-gold">Camille Auclair</span>,
              following a decade between architectural practices in Paris and Manhattan.
            </p>
            <div className="mt-8 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The studio is intentionally small — six designers, one founder, one project manager —
                so that each commission receives uncommon care. We do not chase scale; we chase depth.
              </p>
              <p>
                Our work has been recognised by Architectural Digest, AD France, and World of Interiors,
                though the recognition we value most comes from clients who, years later, still write
                to tell us how their home has held up.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 border-t border-border">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <span className="gold-rule">Principles</span>
            <h2 className="mt-6 text-4xl md:text-5xl font-display">Three things we hold to</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {principles.map((p, i) => (
              <div key={p.t} className="text-center">
                <div className="text-gold font-display text-2xl mb-4">0{i + 1}</div>
                <h3 className="text-2xl font-display mb-3">{p.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 border-t border-border">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl md:text-5xl font-display">Work with the studio</h2>
          <Link to="/contact" className="btn-gold mt-10">Begin a Project</Link>
        </div>
      </section>
    </PageShell>
  );
}
