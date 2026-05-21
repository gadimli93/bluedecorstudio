import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHero({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <section className="pt-40 pb-20 px-6 border-b border-border">
      <div className="mx-auto max-w-5xl text-center">
        <span className="gold-rule">{eyebrow}</span>
        <h1 className="mt-6 text-5xl md:text-7xl font-display text-foreground">{title}</h1>
        {subtitle && <p className="mt-6 max-w-2xl mx-auto text-muted-foreground leading-relaxed">{subtitle}</p>}
      </div>
    </section>
  );
}
