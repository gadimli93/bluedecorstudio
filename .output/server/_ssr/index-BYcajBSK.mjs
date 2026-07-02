import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { P as PageShell } from "./PageShell-9R6eRNGR.mjs";
import { h as hero, p as p1, a as p2, b as p3, c as p4 } from "./hero-BUFv-OPc.mjs";

import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/unenv.mjs";


import "../_libs/seroval-plugins.mjs";


import "../_libs/react-dom.mjs";
import "../_libs/isbot.mjs";
import "../_libs/lucide-react.mjs";
const services = [{
  n: "01",
  t: "Full-Service Design",
  d: "End-to-end direction from concept through final styling, managed in-house."
}, {
  n: "02",
  t: "Bespoke Furniture",
  d: "Custom pieces designed for the room, built by trusted European workshops."
}, {
  n: "03",
  t: "Renovation & Build",
  d: "Architectural reconfiguration with rigorous attention to material and proportion."
}, {
  n: "04",
  t: "Art & Curation",
  d: "Sourcing, commissioning, and placement of art that anchors the home."
}];
const projects = [{
  img: p1,
  title: "Chambord Residence",
  place: "LONDON"
}, {
  img: p2,
  title: "Maison Étoile",
  place: "LONDON"
}, {
  img: p3,
  title: "Harbor Pied-à-Terre",
  place: "LONDON"
}, {
  img: p4,
  title: "Linwood Library",
  place: "LONDON"
}];
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-screen min-h-[720px] w-full overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: hero, alt: "Luxurious navy interior with brass accents", className: "absolute inset-0 w-full h-full object-cover", width: 1920, height: 1080 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-navy-deep/80 via-navy-deep/40 to-navy-deep" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-full flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl animate-fade-up", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-rule", children: "EST. 2019 · LONDON" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-8 text-6xl md:text-8xl font-display leading-[0.95] text-foreground", children: [
          "Interiors of ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "text-gold not-italic font-display italic", children: "quiet" }),
          " consequence."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed", children: "Blue Decor is a bespoke interior design studio shaping considered residences, pied-à-terres, and intimate hospitality projects across the world." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/portfolio", className: "btn-gold", children: "View Portfolio" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "btn-outline-gold", children: "Begin a Project" })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.4em] uppercase text-gold/80", children: "Scroll" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-32 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl grid md:grid-cols-12 gap-12 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-rule", children: "Philosophy" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-3xl md:text-4xl font-display leading-tight text-foreground", children: [
          "We design rooms that feel ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold italic", children: "inevitable" }),
          " — where every fabric, finish, and shadow has been weighed against the architecture, the light, and the life unfolding within."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-muted-foreground leading-relaxed max-w-2xl", children: "We approach each project with measured care and dedicated attention from concept to completion, creating space for precision, thoughtful refinement, and a material identity tailored to its character." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 px-6 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-rule", children: "Services" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-6 text-4xl md:text-5xl font-display", children: "A discipline of detail" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border", children: services.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background p-10 hover:bg-navy transition-colors", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gold font-display text-2xl mb-6", children: s.n }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl mb-3 text-foreground", children: s.t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: s.d })
      ] }, s.n)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-32 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end justify-between gap-6 mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-rule", children: "Selected Work" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-6 text-4xl md:text-5xl font-display", children: "Recent projects" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/portfolio", className: "text-xs uppercase tracking-[0.25em] text-gold border-b border-gold pb-1 hover:opacity-70", children: "All projects" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-8", children: projects.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/portfolio", className: `group block ${i % 3 === 0 ? "md:mt-16" : ""}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.img, alt: p.title, loading: "lazy", width: 1200, height: 1500, className: "w-full aspect-[4/5] object-cover transition-transform duration-[1200ms] group-hover:scale-105" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex justify-between items-baseline", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-display text-foreground group-hover:text-gold transition-colors", children: p.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] tracking-[0.3em] uppercase text-muted-foreground", children: p.place })
        ] })
      ] }, p.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-32 px-6 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-rule", children: "Inquiries" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-6 text-4xl md:text-6xl font-display", children: [
        "Begin with a ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "text-gold not-italic italic", children: "conversation" }),
        "."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-muted-foreground leading-relaxed", children: "We review new commissions seasonally. Tell us about your project — we respond personally within two business days." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "btn-gold", children: "Book a Consultation" }) })
    ] }) })
  ] });
}
export {
  Index as component
};
