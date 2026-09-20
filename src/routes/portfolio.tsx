import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { PageShell, PageHero } from "@/components/PageShell";

const galleryUrls = (folder: string) =>
  Object.entries(
    import.meta.glob("/src/assets/*/*", { eager: true, import: "default", query: "?url" }),
  )
    .filter(([path]) => path.startsWith(`/src/assets/${folder}/`))
    .sort(([pathA], [pathB]) => pathA.localeCompare(pathB, undefined, { numeric: true }))
    .map(([, url]) => url as string);

const livingroomImages = galleryUrls("livingroom");
const bedroomImages = galleryUrls("bedroom");
const kitchenImages = galleryUrls("kitchen");
const bathroomImages = galleryUrls("bathroom");

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Blue Decor" },
      {
        name: "description",
        content: "A selection of bespoke residential and hospitality interiors by Blue Decor.",
      },
      { property: "og:title", content: "Portfolio — Blue Decor" },
      { property: "og:description", content: "Recent residential and hospitality interiors." },
    ],
  }),
  component: Portfolio,
});

const projects = [
  {
    images: livingroomImages,
    title: "Living Room",
    place: "London",
    year: "2022",
    type: "Residential",
    description:
      "An elegant living space where timeless design, refined details, and warm ambience come together. This inviting living room combines timeless elegance with contemporary comfort. Carefully selected artworks, warm fireplace, and carefully layered textures create a sophisticated space designed for relaxation and effortless luxury.",
  },
  {
    images: bedroomImages,
    title: "Bedroom",
    place: "London",
    year: "2019",
    type: "Residential",
    description:
      "Combining graceful proportions with luxurious finishes, these beautifully crafted bedrooms blend timeless elegance with contemporary design. Soft tones, bespoke details, and carefully layered lighting create a serene and sophisticated retreat designed for comfort and relaxation.",
  },
  {
    images: kitchenImages,
    title: "Kitchens",
    place: "London",
    year: "2025",
    type: "Residential",
    description:
      "Combining clean lines, natural materials, and carefully considered lighting, these contemporary kitchen interiors create a seamless balance between form and function. In open layouts and refined finishes enhance both everyday living and entertaining.",
  },
  {
    images: bathroomImages,
    title: "Bathrooms",
    place: "London",
    year: "2024",
    type: "Residential",
    description:
      "Blending sophisticated materials with refined detailing. Our bathrooms are thoughtfully designed to combine luxury, comfort, and practicality. From bespoke finishes and premium materials to carefully layered lighting, every detail is considered to create a relaxing and beautifully balanced space.",
  },
];

function ProjectGallery({ images, title }: { images: string[]; title: string }) {
  const [slide, setSlide] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [paused, setPaused] = useState(false);
  const slideCount = images.length;
  const visibleImages = [...images, ...images.slice(0, 2)];

  const shouldLoadImage = (index: number) => index >= Math.max(0, slide - 1) && index <= slide + 3;

  useEffect(() => {
    if (paused || slideCount < 2) return;
    const timer = window.setInterval(() => setSlide((current) => (current + 1) % slideCount), 4500);
    return () => window.clearInterval(timer);
  }, [paused, slideCount]);

  useEffect(() => {
    if (!lightboxImage) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightboxImage(null);
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightboxImage]);

  const move = (direction: number) => {
    setPaused(false);
    setSlide((current) => (current + direction + slideCount) % slideCount);
  };

  return (
    <>
      <div
        className="relative overflow-hidden select-none touch-pan-y"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="flex gap-3 transition-transform duration-700 ease-out"
          style={{
            transform: `translateX(calc(-${slide * 33.333}% - ${slide * 0.75}rem))`,
          }}
        >
          {visibleImages.map((image, index) => (
            <button
              type="button"
              key={`${image}-${index}`}
              className="relative min-w-[calc((100%-1.5rem)/3)] flex-1 overflow-hidden bg-navy-soft text-left"
              onClick={() => setLightboxImage(image)}
              aria-label={`Open ${title} image ${(index % slideCount) + 1}`}
            >
              <img
                src={shouldLoadImage(index) ? image : undefined}
                alt={`${title} ${(index % slideCount) + 1}`}
                loading={index === slide ? "eager" : "lazy"}
                decoding="async"
                fetchPriority={index === slide ? "high" : "low"}
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={() => move(-1)}
          aria-label="Previous images"
          className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center border border-white/40 bg-navy-deep/70 text-foreground transition hover:border-gold hover:text-gold"
        >
          <ArrowLeft size={16} />
        </button>
        <button
          type="button"
          onClick={() => move(1)}
          aria-label="Next images"
          className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center border border-white/40 bg-navy-deep/70 text-foreground transition hover:border-gold hover:text-gold"
        >
          <ArrowRight size={16} />
        </button>
      </div>
      <div className="mt-5 flex justify-center gap-2" aria-label={`${title} gallery pagination`}>
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            onClick={() => {
              setSlide(index);
              setPaused(false);
            }}
            aria-label={`Go to ${title} image ${index + 1}`}
            className={`h-1.5 transition-all ${index === slide ? "w-6 bg-gold" : "w-1.5 bg-muted-foreground/50"}`}
          />
        ))}
      </div>
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-10"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} image preview`}
          onClick={(event) => {
            if (event.target === event.currentTarget) setLightboxImage(null);
          }}
        >
          <button
            type="button"
            onClick={() => setLightboxImage(null)}
            aria-label="Close image preview"
            className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center text-3xl text-white transition hover:text-gold"
          >
            <X size={28} />
          </button>
          <img
            src={lightboxImage}
            alt={title}
            decoding="async"
            className="max-h-full max-w-full object-contain"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}

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
            <div
              key={p.title}
              className={`grid md:grid-cols-12 gap-10 items-center ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="md:col-span-8 overflow-hidden">
                <ProjectGallery images={p.images} title={p.title} />
              </div>
              <div className="md:col-span-4">
                <div className="text-[10px] tracking-[0.3em] uppercase text-gold mb-4">
                  {p.type} · {p.year}
                </div>
                <h2 className="text-4xl font-display mb-3">{p.title}</h2>
                <p className="text-muted-foreground text-sm tracking-wide">{p.place}</p>
                <p className="mt-6 text-muted-foreground leading-relaxed text-sm">
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
