import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { gallery } from "@/lib/cricket-data";
import { motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog & News — Greenfield Cricket Academy" },
      { name: "description", content: "Match reports, cricket tips, and the latest news from the academy." },
    ],
  }),
  component: Blog,
});

const posts = [
  { id: 1, title: "5 Drills to Sharpen Your Cover Drive", cat: "Tips", date: "May 18, 2026", img: gallery[0], excerpt: "Build a fluent, repeatable cover drive with these proven nets routines." },
  { id: 2, title: "Match Report: Greenfield Beats Royal Strikers", cat: "Match Report", date: "May 14, 2026", img: gallery[1], excerpt: "A dominant batting display sealed a 36-run win at Greenfield Oval." },
  { id: 3, title: "Welcoming Three New Junior Coaches", cat: "News", date: "May 09, 2026", img: gallery[2], excerpt: "Three certified coaches join our junior pathway this summer." },
  { id: 4, title: "Pre-Season Strength Programming", cat: "Training", date: "Apr 28, 2026", img: gallery[5], excerpt: "How to ramp up your pre-season conditioning safely." },
  { id: 5, title: "Inside the Greenfield Pavilion Upgrade", cat: "News", date: "Apr 21, 2026", img: gallery[3], excerpt: "Our new pavilion opens with players-first design." },
  { id: 6, title: "Mindset for Big-Match Pressure", cat: "Tips", date: "Apr 14, 2026", img: gallery[4], excerpt: "Visualisation and routines that turn pressure into performance." },
];

const cats = ["All", "Tips", "Match Report", "News", "Training"];

function Blog() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const filtered = posts.filter(
    (p) => (cat === "All" || p.cat === cat) && p.title.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <Layout>
      <PageHero title="Blog & News" subtitle="Match reports, tips and academy updates." />
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-[1fr_240px] gap-10">
          <div>
            <div className="relative mb-8">
              <Search className="size-4 absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                value={q} onChange={(e) => setQ(e.target.value)}
                placeholder="Search articles..."
                className="w-full pl-11 pr-4 py-3 rounded-md bg-card border border-border focus:outline-none focus:ring-2 focus:ring-gold"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {filtered.map((p, i) => (
                <motion.article
                  key={p.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                  className="rounded-2xl overflow-hidden bg-card border border-border hover:border-gold/40 transition-colors group"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs tracking-widest text-muted-foreground">
                      <span className="text-gold">{p.cat.toUpperCase()}</span>
                      <span>·</span>
                      <span>{p.date}</span>
                    </div>
                    <h3 className="font-display text-xl tracking-wide mt-2">{p.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{p.excerpt}</p>
                    <a href="#" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold group-hover:gap-2 transition-all">
                      Read more <ArrowRight className="size-4" />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          <aside className="space-y-6">
            <div className="p-6 rounded-2xl bg-card border border-border">
              <h4 className="text-xs tracking-widest text-gold mb-4">CATEGORIES</h4>
              <ul className="space-y-2">
                {cats.map((c) => (
                  <li key={c}>
                    <button
                      onClick={() => setCat(c)}
                      className={`w-full text-left text-sm py-1.5 transition-colors ${cat === c ? "text-gold" : "text-muted-foreground hover:text-foreground"}`}
                    >
                      → {c}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  );
}
