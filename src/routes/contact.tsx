import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Blue Decor" },
      { name: "description", content: "Begin a project with Blue Decor. We respond to every inquiry personally within three business days." },
      { property: "og:title", content: "Contact — Blue Decor" },
      { property: "og:description", content: "Begin a project with Blue Decor." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <PageShell>
      <PageHero
        eyebrow="Inquiries"
        title="Let's begin"
        subtitle="Tell us a little about your project. We reply personally within three business days."
      />

      <section className="px-6 pb-32">
        <div className="mx-auto max-w-6xl grid md:grid-cols-12 gap-16">
          <div className="md:col-span-4 space-y-10">
            <div>
              <h3 className="text-xs uppercase tracking-[0.25em] text-gold mb-3">Studio</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                428 Greenwich Street, Floor 4<br />New York, NY 10013
              </p>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-[0.25em] text-gold mb-3">Direct</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                hello@bluedecor.studio<br />+1 (212) 555 0142
              </p>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-[0.25em] text-gold mb-3">Hours</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Tuesday – Friday<br />By appointment only
              </p>
            </div>
          </div>

          <div className="md:col-span-8">
            {sent ? (
              <div className="border border-gold/40 p-12 text-center">
                <h3 className="text-3xl font-display text-gold">Thank you.</h3>
                <p className="mt-4 text-muted-foreground">
                  Your message is with us. We'll respond within three business days.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="space-y-8"
              >
                <div className="grid sm:grid-cols-2 gap-8">
                  <Field label="Name" name="name" required />
                  <Field label="Email" name="email" type="email" required />
                </div>
                <div className="grid sm:grid-cols-2 gap-8">
                  <Field label="Phone" name="phone" />
                  <Field label="Location" name="location" placeholder="City, neighbourhood" />
                </div>
                <Field label="Project Type" name="type" placeholder="Residence, pied-à-terre, hospitality…" />
                <div>
                  <label className="block text-[10px] tracking-[0.3em] uppercase text-gold mb-3">Tell us about your project</label>
                  <textarea
                    name="message"
                    rows={6}
                    required
                    className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-foreground resize-none transition-colors"
                  />
                </div>
                <button type="submit" className="btn-gold">Send Inquiry</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function Field({ label, name, type = "text", required, placeholder }: {
  label: string; name: string; type?: string; required?: boolean; placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-[10px] tracking-[0.3em] uppercase text-gold mb-3">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-foreground transition-colors"
      />
    </div>
  );
}
