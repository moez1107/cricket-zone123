import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { FaWhatsapp, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Greenfield Cricket Academy" },
      { name: "description", content: "Get in touch with the Greenfield Cricket Academy team." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <Layout>
      <PageHero title="Contact" subtitle="We'd love to hear from you. Reach out and we'll respond within one business day." />
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="p-7 rounded-2xl bg-card border border-border">
              <h3 className="font-display text-2xl tracking-wide mb-5">Get in Touch</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3"><MapPin className="size-5 text-gold mt-0.5" /> 42 Pavilion Road, Greenfield Oval</li>
                <li className="flex items-center gap-3"><Phone className="size-5 text-gold" /> +1 (555) 040-1188</li>
                <li className="flex items-center gap-3"><Mail className="size-5 text-gold" /> hello@greenfieldcricket.com</li>
                <li className="flex items-center gap-3"><FaWhatsapp className="size-5 text-gold" /> WhatsApp: +1 (555) 040-1188</li>
              </ul>
              <div className="flex gap-3 mt-6">
                {[FaInstagram, FaTwitter, FaFacebook].map((Icon, i) => (
                  <a key={i} href="#" className="size-10 grid place-items-center rounded-full bg-secondary border border-border hover:border-gold hover:text-gold transition-colors">
                    <Icon className="size-4" />
                  </a>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-border h-72">
              <iframe
                title="Academy location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-0.18%2C51.49%2C-0.15%2C51.51&layer=mapnik"
                className="w-full h-full grayscale-[40%]"
              />
            </div>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 3000); (e.target as HTMLFormElement).reset(); }}
            className="p-7 md:p-10 rounded-2xl bg-card border border-border space-y-5"
          >
            <h3 className="font-display text-2xl tracking-wide">Send a Message</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <input required placeholder="Your name" className="px-4 py-3 rounded-md bg-input border border-border focus:outline-none focus:ring-2 focus:ring-gold" />
              <input required type="email" placeholder="Email" className="px-4 py-3 rounded-md bg-input border border-border focus:outline-none focus:ring-2 focus:ring-gold" />
            </div>
            <input placeholder="Subject" className="w-full px-4 py-3 rounded-md bg-input border border-border focus:outline-none focus:ring-2 focus:ring-gold" />
            <textarea required rows={6} placeholder="How can we help?" className="w-full px-4 py-3 rounded-md bg-input border border-border focus:outline-none focus:ring-2 focus:ring-gold resize-none" />
            <button className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-gradient-gold text-gold-foreground font-semibold hover:shadow-glow transition-shadow">
              <Send className="size-4" /> {sent ? "Sent ✓" : "Send Message"}
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
