import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import hero from "@/assets/hero.jpg";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Blue Decor — Bespoke Interior Design Studio" },
      { name: "description", content: "Blue Decor is a bespoke interior design studio crafting timeless, layered residential and hospitality interiors." },
      { property: "og:title", content: "Blue Decor — Bespoke Interior Design" },
      { property: "og:description", content: "Bespoke interiors crafted with quiet confidence." },
    ],
  }),
  component: Index,
});

const services = [
  { n: "01", t: "Full-Service Design", d: "End-to-end direction from concept through final styling, managed in-house." },
  { n: "02", t: "Bespoke Furniture", d: "Custom pieces designed for the room, built by trusted European workshops." },
  { n: "03", t: "Renovation & Build", d: "Architectural reconfiguration with rigorous attention to material and proportion." },
  { n: "04", t: "Art & Curation", d: "Sourcing, commissioning, and placement of art that anchors the home." },
];

const projects = [
  { img: p1, title: "Chambord Residence", place: "LONDON" },
  { img: p2, title: "Maison Étoile", place: "LONDON" },
  { img: p3, title: "Harbor Pied-à-Terre", place: "LONDON" },
  { img: p4, title: "Linwood Library", place: "LONDON" },
];

function Index() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative h-screen min-h-[720px] w-full overflow-hidden">
        <img src={hero} alt="Luxurious navy interior with brass accents" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/80 via-navy-deep/40 to-navy-deep" />
        <div className="relative h-full flex items-center">
          <div className="mx-auto max-w-7xl px-6 w-full">
            <div className="max-w-3xl animate-fade-up">
              <span className="gold-rule">EST. 2019 · LONDON</span>
              <h1 className="mt-8 text-6xl md:text-8xl font-display leading-[0.95] text-foreground">
                Interiors of <em className="text-gold not-italic font-display italic">quiet</em> consequence.
              </h1>
              <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
                Blue Decor is a bespoke interior design studio shaping considered residences,
                pied-à-terres, and intimate hospitality projects across the world.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link to="/portfolio" className="btn-gold">View Portfolio</Link>
                <Link to="/contact" className="btn-outline-gold">Begin a Project</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.4em] uppercase text-gold/80">
          Scroll
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="py-32 px-6">
        <div className="mx-auto max-w-6xl grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-4">
            <span className="gold-rule">Philosophy</span>
          </div>
          <div className="md:col-span-8">
            <p className="text-3xl md:text-4xl font-display leading-tight text-foreground">
              We design rooms that feel <span className="text-gold italic">inevitable</span> — where every
              fabric, finish, and shadow has been weighed against the architecture, the light,
              and the life unfolding within.
            </p>
            <p className="mt-8 text-muted-foreground leading-relaxed max-w-2xl">
              We approach each project with measured care and dedicated attention from concept
              to completion, creating space for precision, thoughtful refinement, and a material
              identity tailored to its character.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-6 border-t border-border">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <span className="gold-rule">Services</span>
            <h2 className="mt-6 text-4xl md:text-5xl font-display">A discipline of detail</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {services.map((s) => (
              <div key={s.n} className="bg-background p-10 hover:bg-navy transition-colors">
                <div className="text-gold font-display text-2xl mb-6">{s.n}</div>
                <h3 className="text-xl mb-3 text-foreground">{s.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO PREVIEW */}
      <section className="py-32 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
            <div>
              <span className="gold-rule">Selected Work</span>
              <h2 className="mt-6 text-4xl md:text-5xl font-display">Recent projects</h2>
            </div>
            <Link to="/portfolio" className="text-xs uppercase tracking-[0.25em] text-gold border-b border-gold pb-1 hover:opacity-70">
              All projects
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((p, i) => (
              <Link to="/portfolio" key={p.title} className={`group block ${i % 3 === 0 ? "md:mt-16" : ""}`}>
                <div className="overflow-hidden">
                  <img src={p.img} alt={p.title} loading="lazy" width={1200} height={1500}
                    className="w-full aspect-[4/5] object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
                </div>
                <div className="mt-6 flex justify-between items-baseline">
                  <h3 className="text-2xl font-display text-foreground group-hover:text-gold transition-colors">{p.title}</h3>
                  <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">{p.place}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 border-t border-border">
        <div className="mx-auto max-w-3xl text-center">
          <span className="gold-rule">Inquiries</span>
          <h2 className="mt-6 text-4xl md:text-6xl font-display">
            Begin with a <em className="text-gold not-italic italic">conversation</em>.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            We review new commissions seasonally. Tell us about your project — we respond
            personally within two business days.
          </p>
          <div className="mt-10">
            <Link to="/contact" className="btn-gold">Book a Consultation</Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
