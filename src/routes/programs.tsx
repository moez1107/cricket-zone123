import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { programs } from "@/lib/cricket-data";
import { motion } from "framer-motion";
import { Clock, ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs — Greenfield Cricket Academy" },
      { name: "description", content: "Junior, senior, elite, fitness and 1-on-1 cricket training programs." },
    ],
  }),
  component: Programs,
});

const features = ["Certified coaches", "Modern equipment", "Match play included", "Performance tracking"];

function Programs() {
  return (
    <Layout>
      <PageHero title="Training Programs" subtitle="Choose the pathway that matches your level and ambition." />
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-6">
          {programs.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-8 rounded-2xl bg-card border border-border hover:border-gold/50 transition-all group"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-xs tracking-widest text-gold">{p.level.toUpperCase()}</div>
                  <h3 className="font-display text-3xl tracking-wide mt-2">{p.title}</h3>
                </div>
                <div className="font-display text-3xl text-gradient-gold">{p.fees}</div>
              </div>
              <p className="text-muted-foreground mt-4 leading-relaxed">{p.desc}</p>
              <div className="mt-5 grid sm:grid-cols-2 gap-2">
                {features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="size-4 text-gold" /> {f}
                  </div>
                ))}
              </div>
              <div className="flex justify-between items-center mt-6 pt-5 border-t border-border">
                <div className="flex items-center gap-1 text-xs text-muted-foreground"><Clock className="size-3" /> {p.duration}</div>
                <Link to="/register" className="inline-flex items-center gap-1 text-sm font-semibold text-gold group-hover:gap-2 transition-all">
                  Enroll <ArrowRight className="size-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
