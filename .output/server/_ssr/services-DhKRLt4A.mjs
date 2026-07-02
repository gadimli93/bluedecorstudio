import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { P as PageShell, a as PageHero } from "./PageShell-9R6eRNGR.mjs";

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
  t: "Full-Service Interior Design",
  d: "Complete creative direction from first sketch to final styling. We assemble the team, draft every plan, specify every finish, and personally see the project through installation.",
  items: ["Concept & spatial planning", "Material & finish specification", "Furniture & lighting selection", "Project management & install"]
}, {
  n: "02",
  t: "Bespoke Furniture",
  d: "Pieces designed for the room they will live in. We collaborate with a network of European cabinetmakers, upholsterers, and metalworkers to realise furniture you will not find elsewhere.",
  items: ["Casegoods & cabinetry", "Upholstery & seating", "Bronze & brass detailing", "Stone & marquetry"]
}, {
  n: "03",
  t: "Renovation & Build",
  d: "Architectural reconfiguration handled with the same rigour as the soft layers. Walls, mouldings, joinery, and millwork detailed to the millimetre.",
  items: ["Architectural drawings", "Contractor coordination", "Custom millwork", "Lighting & MEP design"]
}, {
  n: "04",
  t: "Art & Curation",
  d: "Sourcing, commissioning, and placing art that anchors a home. We work with galleries, estates, and living artists worldwide.",
  items: ["Collection building", "Commissioned works", "Framing & installation", "Archival management"]
}];
function Services() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "What we do", title: "Services", subtitle: "Four disciplines, one studio. Every commission draws on the whole — there are no separate departments at Blue Decor." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-6xl space-y-24", children: services.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-12 gap-10 items-start border-t border-border pt-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-2 text-gold font-display text-4xl", children: s.n }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-display", children: s.t }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: s.d }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-2", children: s.items.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "text-sm text-foreground/80 flex gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "—" }),
          i
        ] }, i)) })
      ] })
    ] }, s.n)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-32 px-6 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl md:text-5xl font-display", children: "Curious where to begin?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-muted-foreground", children: "A short conversation is the best way to know if we're the right studio for your project." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "btn-gold mt-10", children: "Get in touch" })
    ] }) })
  ] });
}
export {
  Services as component
};
