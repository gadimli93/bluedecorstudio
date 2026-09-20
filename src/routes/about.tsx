import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Blue Decor" },
      {
        name: "description",
        content: "Blue Decor is a focused interior design studio led by founder Cagri Buyukkaya.",
      },
      { property: "og:title", content: "About — Blue Decor" },
      { property: "og:description", content: "A focused interior design studio." },
    ],
  }),
  component: About,
});

const principles = [
  {
    t: "Restraint",
    d: "We subtract before we add. Negative space is a material we use deliberately.",
  },
  { t: "Craft", d: "Every piece is sourced, commissioned, or made by hands we know and trust." },
  {
    t: "Patience",
    d: "We give each commission the time it needs to reach clarity, refinement, and a resolved material expression.",
  },
];

function About() {
  return (
    <PageShell>
      <PageHero eyebrow="The Studio" title="About Blue Decor" />

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-2xl md:text-3xl font-display leading-snug">
            Blue Decor was established in 2019 by <span className="text-gold">Cagri Buyukkaya</span>
            , bringing together over <span className="text-gold">20 years of experience</span> in
            architecture, interior design, and engineering across Istanbul, Brisbane, and London.
          </p>
          <div className="mt-8 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              The studio operates as an intentionally focused team, with our founder leading the
              design process alongside a dedicated project manager. We work with clients nationwide
              and collaborate with a network of bespoke and well-established brands. Every project
              is crafted with the client's vision at its core and delivered with exceptional
              attention to detail.
            </p>
            <p></p>
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
          <Link to="/contact" className="btn-gold mt-10">
            Begin a Project
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
