import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/logo-initials.png.asset.json";
const logo = logoAsset.url;

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-navy-deep mt-32">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="Blue Decor" className="h-12 w-12 object-cover rounded-sm" />
            <div>
              <div className="font-display text-xl text-gold">Blue Decor</div>
              <div className="text-[10px] tracking-wider-xl text-muted-foreground uppercase">Interior Design</div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
            Bespoke interiors crafted with quiet confidence. We design spaces that feel inevitable —
            considered, layered, and entirely your own.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-gold mb-4">Studio</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-gold">About</Link></li>
            <li><Link to="/services" className="hover:text-gold">Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-gold">Portfolio</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-gold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>info@bluedecor.co.uk</li>
            <li>+44 7 767 137665</li>
            <li>By appointment only</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row justify-between gap-2 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
          <span>© {new Date().getFullYear()} Blue Decor Studio</span>
          <span>Crafted with intention</span>
        </div>
      </div>
    </footer>
  );
}
