import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { motion } from "framer-motion";
import { Trophy, Target, Heart, Shield } from "lucide-react";
import { stats, gallery } from "@/lib/cricket-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Greenfield Cricket Academy" },
      { name: "description", content: "Two decades of cricket excellence. Learn about our history, facilities and championship-winning approach." },
    ],
  }),
  component: About,
});

const timeline = [
  { year: "2003", text: "Greenfield Cricket Academy founded with 18 students" },
  { year: "2008", text: "Opened world-class indoor training facility" },
  { year: "2014", text: "First national team selection from our ranks" },
  { year: "2019", text: "Won inaugural Regional Championship title" },
  { year: "2024", text: "Crossed 1,000 trained athletes milestone" },
];

const values = [
  { icon: Trophy, t: "Excellence", d: "We chase the highest standard in every session and every match." },
  { icon: Target, t: "Discipline", d: "Hard work, on time, every day. Champions are built in the small habits." },
  { icon: Heart, t: "Character", d: "Sportsmanship and respect for the game above all results." },
  { icon: Shield, t: "Safety", d: "Certified coaching staff, modern equipment, and welfare-first culture." },
];

function About() {
  return (
    <Layout>
      <PageHero title="About the Academy" subtitle="Two decades of building champions, character and a love for the game." />
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-4xl tracking-wide">Our <span className="text-gradient-gold">Story</span></h2>
            <p className="text-muted-foreground mt-5 leading-relaxed">
              Greenfield was founded in 2003 with a simple belief: cricket talent thrives when technique, strength and mindset are coached together. Over 20 years we've grown into one of the country's most respected academies — without ever losing the personal mentorship that defines us.
            </p>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              From dawn nets to floodlit match nights, our players train where they will one day compete: real grounds, real conditions, real pressure.
            </p>
          </motion.div>
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            src={gallery[3]} alt="Aerial of academy facility"
            loading="lazy"
            className="rounded-2xl border border-border w-full h-80 object-cover"
          />
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-4xl tracking-wide text-center mb-14">Timeline</h2>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
            {timeline.map((t, i) => (
              <motion.div
                key={t.year}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`relative flex items-center mb-10 ${i % 2 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 size-3 rounded-full bg-gold shadow-glow" />
                <div className={`pl-12 md:pl-0 md:w-1/2 ${i % 2 ? "md:pl-10" : "md:pr-10 md:text-right"}`}>
                  <div className="font-display text-3xl text-gold">{t.year}</div>
                  <p className="text-muted-foreground mt-1">{t.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-4xl tracking-wide text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.t} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-gold/40 transition-colors"
              >
                <v.icon className="size-8 text-gold mb-4" />
                <h3 className="font-display text-xl tracking-wide">{v.t}</h3>
                <p className="text-sm text-muted-foreground mt-2">{v.d}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            {stats.map((s) => (
              <div key={s.label} className="p-6 rounded-xl bg-gradient-green border border-border text-center">
                <div className="font-display text-4xl text-gradient-gold">{s.value}+</div>
                <div className="text-xs tracking-widest text-muted-foreground uppercase mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
