import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageShell, a as PageHero } from "./PageShell-9R6eRNGR.mjs";
import { h as hero, p as p1, a as p2, b as p3, c as p4 } from "./hero-BUFv-OPc.mjs";

import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/unenv.mjs";


import "../_libs/seroval-plugins.mjs";


import "../_libs/react-dom.mjs";
import "../_libs/isbot.mjs";
import "../_libs/lucide-react.mjs";
const projects = [{
  img: hero,
  title: "Salon Vermeil",
  place: "London",
  year: "2025",
  type: "Residential"
}, {
  img: p1,
  title: "Chambord Residence",
  place: "London",
  year: "2020",
  type: "RESIDENTIAL"
}, {
  img: p2,
  title: "Maison Étoile",
  place: "London",
  year: "2024",
  type: "Pied-à-terre"
}, {
  img: p3,
  title: "Harbor Pied-à-Terre",
  place: "London",
  year: "2023",
  type: "Residential"
}, {
  img: p4,
  title: "Linwood Library",
  place: "London",
  year: "2023",
  type: "Private Study"
}];
function Portfolio() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Selected Work", title: "Portfolio", subtitle: "A curated selection of recent commissions. Each project is documented in greater detail upon inquiry." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl space-y-24", children: projects.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `grid md:grid-cols-12 gap-10 items-center ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-8 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.img, alt: p.title, loading: "lazy", width: 1200, height: 900, className: "w-full aspect-[4/3] object-cover" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] tracking-[0.3em] uppercase text-gold mb-4", children: [
          p.type,
          " · ",
          p.year
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-display mb-3", children: p.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm tracking-wide", children: p.place }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-muted-foreground leading-relaxed text-sm", children: "A considered renovation balancing the original architecture with a contemporary palette of deep pigments, brass, and tactile linen. Bespoke joinery throughout." })
      ] })
    ] }, p.title)) }) })
  ] });
}
export {
  Portfolio as component
};
