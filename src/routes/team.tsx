import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { motion } from "framer-motion";
import { useState } from "react";
import { players, type Role } from "@/lib/cricket-data";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — Greenfield Cricket Academy" },
      { name: "description", content: "Meet the full Greenfield squad — batsmen, bowlers, all-rounders and wicketkeepers." },
    ],
  }),
  component: Team,
});

const roles: ("All" | Role)[] = ["All", "Batsman", "Bowler", "All-rounder", "Wicketkeeper"];

function Team() {
  const [filter, setFilter] = useState<"All" | Role>("All");
  const list = filter === "All" ? players : players.filter((p) => p.role === filter);

  return (
    <Layout>
      <PageHero title="The Squad" subtitle="The athletes carrying Greenfield colours into competition." />
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {roles.map((r) => (
              <button
                key={r}
                onClick={() => setFilter(r)}
                className={`px-5 py-2 rounded-full text-sm tracking-wide transition-all ${
                  filter === r
                    ? "bg-gradient-gold text-gold-foreground font-semibold"
                    : "bg-card border border-border text-muted-foreground hover:text-gold hover:border-gold/40"
                }`}
              >
                {r}
              </button>
            ))}
          </div>

          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {list.map((p) => (
              <motion.div
                layout
                key={p.id}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-gold/50 transition-all"
              >
                {p.captain && (
                  <div className="absolute top-4 right-4 z-10 px-2.5 py-1 rounded-full bg-gold text-gold-foreground text-[10px] font-bold tracking-widest">
                    CAPTAIN
                  </div>
                )}
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={p.image} alt={p.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                </div>
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-background/70 backdrop-blur text-gold text-xs font-semibold tracking-wider">
                  {p.role.toUpperCase()}
                </div>
                <div className="absolute bottom-0 inset-x-0 p-6">
                  <h3 className="font-display text-2xl tracking-wide">{p.name}</h3>
                  <div className="text-xs text-muted-foreground mt-1">{p.batting} · {p.bowling}</div>
                  <div className="mt-4 flex gap-5">
                    <div><span className="font-display text-2xl text-gold">{p.runs}</span> <span className="text-[10px] tracking-widest text-muted-foreground block">RUNS</span></div>
                    <div><span className="font-display text-2xl text-gold">{p.wickets}</span> <span className="text-[10px] tracking-widest text-muted-foreground block">WICKETS</span></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
