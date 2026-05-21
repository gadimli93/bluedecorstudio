import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Blue Decor" },
      { name: "description", content: "A selection of bespoke residential and hospitality interiors by Blue Decor." },
      { property: "og:title", content: "Portfolio — Blue Decor" },
      { property: "og:description", content: "Recent residential and hospitality interiors." },
    ],
  }),
  component: Portfolio,
});

const projects = [
  { img: hero, title: "Salon Vermeil", place: "Manhattan", year: "2025", type: "Residential" },
  { img: p1, title: "Chambord Residence", place: "Upper East Side", year: "2024", type: "Residential" },
  { img: p2, title: "Maison Étoile", place: "Paris 7ᵉ", year: "2024", type: "Pied-à-terre" },
  { img: p3, title: "Harbor Pied-à-Terre", place: "Tribeca", year: "2023", type: "Residential" },
  { img: p4, title: "Linwood Library", place: "Hudson Valley", year: "2023", type: "Private Study" },
];

function Portfolio() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Selected Work"
        title="Portfolio"
        subtitle="A curated selection of recent commissions. Each project is documented in greater detail upon inquiry."
      />

      <section className="py-24 px-6">
        <div className="mx-auto max-w-7xl space-y-24">
          {projects.map((p, i) => (
            <div key={p.title} className={`grid md:grid-cols-12 gap-10 items-center ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}>
              <div className="md:col-span-8 overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" width={1200} height={900}
                  className="w-full aspect-[4/3] object-cover" />
              </div>
              <div className="md:col-span-4">
                <div className="text-[10px] tracking-[0.3em] uppercase text-gold mb-4">{p.type} · {p.year}</div>
                <h2 className="text-4xl font-display mb-3">{p.title}</h2>
                <p className="text-muted-foreground text-sm tracking-wide">{p.place}</p>
                <p className="mt-6 text-muted-foreground leading-relaxed text-sm">
                  A considered renovation balancing the original architecture with a contemporary palette
                  of deep pigments, brass, and tactile linen. Bespoke joinery throughout.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
