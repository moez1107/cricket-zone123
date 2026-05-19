import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { matches } from "@/lib/cricket-data";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

export const Route = createFileRoute("/matches")({
  head: () => ({
    meta: [
      { title: "Matches — Greenfield Cricket Academy" },
      { name: "description", content: "Upcoming fixtures, recent results and tournament standings for the Greenfield squad." },
    ],
  }),
  component: Matches,
});

const table = [
  { team: "Greenfield CA", p: 8, w: 7, l: 1, pts: 14 },
  { team: "Northern Knights", p: 8, w: 6, l: 2, pts: 12 },
  { team: "Royal Strikers", p: 8, w: 5, l: 3, pts: 10 },
  { team: "Coastal Tigers", p: 8, w: 3, l: 5, pts: 6 },
  { team: "Mountain Lions", p: 8, w: 2, l: 6, pts: 4 },
];

function Matches() {
  const upcoming = matches.filter((m) => m.status === "Upcoming");
  const results = matches.filter((m) => m.status !== "Upcoming");

  return (
    <Layout>
      <PageHero title="Matches & Results" subtitle="Live scores, fixtures and standings." />
      <section className="py-16 md:py-24 space-y-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-3xl tracking-wide mb-6">Upcoming Fixtures</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {upcoming.map((m, i) => (
              <motion.div key={m.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-gold/40 transition-colors">
                <div className="flex justify-between text-xs tracking-widest text-muted-foreground mb-5">
                  <span className="flex items-center gap-1"><Calendar className="size-3" /> {m.date}</span>
                  <span className="flex items-center gap-1"><MapPin className="size-3" /> {m.venue}</span>
                </div>
                <div className="grid grid-cols-3 items-center text-center">
                  <div className="font-display text-xl">{m.home}</div>
                  <div className="font-display text-gold">VS</div>
                  <div className="font-display text-xl">{m.away}</div>
                </div>
                <div className="mt-5 text-center">
                  <span className="text-[10px] tracking-widest px-3 py-1 rounded-full bg-gold/15 text-gold">LIVE SCORE PLACEHOLDER · API READY</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-3xl tracking-wide mb-6">Recent Results</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {results.map((m) => (
              <div key={m.id} className="p-6 rounded-2xl bg-card border border-border">
                <div className="flex justify-between text-xs tracking-widest text-muted-foreground mb-5">
                  <span>{m.date} · {m.venue}</span>
                  <span className="text-gold">{m.status.toUpperCase()}</span>
                </div>
                <div className="grid grid-cols-3 items-center text-center gap-2">
                  <div>
                    <div className="font-display text-lg">{m.home}</div>
                    <div className="font-display text-3xl text-gold mt-1">{m.scoreA}</div>
                  </div>
                  <div className="font-display text-muted-foreground">VS</div>
                  <div>
                    <div className="font-display text-lg">{m.away}</div>
                    <div className="font-display text-3xl mt-1">{m.scoreB}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-3xl tracking-wide mb-6">Points Table</h2>
          <div className="rounded-2xl overflow-hidden border border-border bg-card">
            <table className="w-full text-sm">
              <thead className="bg-secondary/60 text-xs tracking-widest text-muted-foreground">
                <tr>
                  <th className="text-left p-4">TEAM</th>
                  <th className="p-4">P</th>
                  <th className="p-4">W</th>
                  <th className="p-4">L</th>
                  <th className="p-4 text-right pr-6">PTS</th>
                </tr>
              </thead>
              <tbody>
                {table.map((t, i) => (
                  <tr key={t.team} className={`border-t border-border ${i === 0 ? "bg-gold/5" : ""}`}>
                    <td className="p-4 font-medium">{i === 0 && <span className="text-gold mr-2">★</span>}{t.team}</td>
                    <td className="p-4 text-center text-muted-foreground">{t.p}</td>
                    <td className="p-4 text-center text-muted-foreground">{t.w}</td>
                    <td className="p-4 text-center text-muted-foreground">{t.l}</td>
                    <td className="p-4 text-right pr-6 font-display text-gold">{t.pts}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </Layout>
  );
}
