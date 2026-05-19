import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { coaches } from "@/lib/cricket-data";
import { motion } from "framer-motion";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Calendar } from "lucide-react";

export const Route = createFileRoute("/coaches")({
  head: () => ({
    meta: [
      { title: "Coaches — Greenfield Cricket Academy" },
      { name: "description", content: "Meet the certified professional coaches guiding every Greenfield athlete." },
    ],
  }),
  component: Coaches,
});

function Coaches() {
  return (
    <Layout>
      <PageHero title="Our Coaches" subtitle="Decades of professional and international experience shaping every session." />
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          {coaches.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className={`grid md:grid-cols-2 gap-8 items-center rounded-2xl overflow-hidden bg-card border border-border ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <img src={c.image} alt={c.name} loading="lazy" className="w-full aspect-[4/3] object-cover" />
              <div className="p-8 md:p-10">
                <div className="text-xs tracking-[0.3em] text-gold">{c.role.toUpperCase()}</div>
                <h2 className="font-display text-4xl tracking-wide mt-2">{c.name}</h2>
                <p className="text-muted-foreground mt-4">Specialty: <span className="text-foreground">{c.specialty}</span></p>
                <p className="text-muted-foreground">Experience: <span className="text-foreground">{c.experience}</span></p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {c.certifications.map((x) => (
                    <span key={x} className="text-xs tracking-wider px-3 py-1.5 rounded bg-secondary border border-border">{x}</span>
                  ))}
                </div>
                <div className="flex items-center gap-3 mt-6">
                  {[FaInstagram, FaTwitter, FaLinkedin].map((Icon, k) => (
                    <a key={k} href="#" className="size-9 grid place-items-center rounded-full bg-secondary border border-border hover:border-gold hover:text-gold transition-colors">
                      <Icon className="size-4" />
                    </a>
                  ))}
                  <button className="ml-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-gradient-gold text-gold-foreground font-semibold text-sm">
                    <Calendar className="size-4" /> Book a Session
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
