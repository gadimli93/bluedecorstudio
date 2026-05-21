import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Blue Decor Interior Design" },
      { name: "description", content: "Full-service interior design, bespoke furniture, renovation, and art curation by Blue Decor." },
      { property: "og:title", content: "Services — Blue Decor" },
      { property: "og:description", content: "Full-service interior design, bespoke furniture, and renovation." },
    ],
  }),
  component: Services,
});

const services = [
  {
    n: "01",
    t: "Full-Service Interior Design",
    d: "Complete creative direction from first sketch to final styling. We assemble the team, draft every plan, specify every finish, and personally see the project through installation.",
    items: ["Concept & spatial planning", "Material & finish specification", "Furniture & lighting selection", "Project management & install"],
  },
  {
    n: "02",
    t: "Bespoke Furniture",
    d: "Pieces designed for the room they will live in. We collaborate with a network of European cabinetmakers, upholsterers, and metalworkers to realise furniture you will not find elsewhere.",
    items: ["Casegoods & cabinetry", "Upholstery & seating", "Bronze & brass detailing", "Stone & marquetry"],
  },
  {
    n: "03",
    t: "Renovation & Build",
    d: "Architectural reconfiguration handled with the same rigour as the soft layers. Walls, mouldings, joinery, and millwork detailed to the millimetre.",
    items: ["Architectural drawings", "Contractor coordination", "Custom millwork", "Lighting & MEP design"],
  },
  {
    n: "04",
    t: "Art & Curation",
    d: "Sourcing, commissioning, and placing art that anchors a home. We work with galleries, estates, and living artists worldwide.",
    items: ["Collection building", "Commissioned works", "Framing & installation", "Archival management"],
  },
];

function Services() {
  return (
    <PageShell>
      <PageHero
        eyebrow="What we do"
        title="Services"
        subtitle="Four disciplines, one studio. Every commission draws on the whole — there are no separate departments at Blue Decor."
      />

      <section className="py-24 px-6">
        <div className="mx-auto max-w-6xl space-y-24">
          {services.map((s) => (
            <div key={s.n} className="grid md:grid-cols-12 gap-10 items-start border-t border-border pt-12">
              <div className="md:col-span-2 text-gold font-display text-4xl">{s.n}</div>
              <div className="md:col-span-5">
                <h2 className="text-3xl md:text-4xl font-display">{s.t}</h2>
              </div>
              <div className="md:col-span-5">
                <p className="text-muted-foreground leading-relaxed">{s.d}</p>
                <ul className="mt-6 space-y-2">
                  {s.items.map((i) => (
                    <li key={i} className="text-sm text-foreground/80 flex gap-3">
                      <span className="text-gold">—</span>{i}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-32 px-6 border-t border-border">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl md:text-5xl font-display">Curious where to begin?</h2>
          <p className="mt-6 text-muted-foreground">
            A short conversation is the best way to know if we're the right studio for your project.
          </p>
          <Link to="/contact" className="btn-gold mt-10">Get in touch</Link>
        </div>
      </section>
    </PageShell>
  );
}
