import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { gallery } from "@/lib/cricket-data";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Greenfield Cricket Academy" },
      { name: "description", content: "Photos from training sessions, tournaments and academy life at Greenfield." },
    ],
  }),
  component: Gallery,
});

function Gallery() {
  const [active, setActive] = useState<string | null>(null);
  const items = [...gallery, ...gallery];

  return (
    <Layout>
      <PageHero title="Gallery" subtitle="Moments captured on the pitch and in the nets." />
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {items.map((g, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: (i % 8) * 0.04 }}
                onClick={() => setActive(g)}
                className="block w-full break-inside-avoid rounded-xl overflow-hidden border border-border group relative"
              >
                <img src={g} alt="" loading="lazy" className="w-full group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[60] bg-background/90 backdrop-blur grid place-items-center p-4"
          >
            <button className="absolute top-4 right-4 size-10 grid place-items-center rounded-full bg-card border border-border">
              <X />
            </button>
            <motion.img
              initial={{ scale: 0.9 }} animate={{ scale: 1 }}
              src={active} alt="" className="max-h-[90vh] max-w-full rounded-xl border border-border"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}
