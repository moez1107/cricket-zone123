import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Play, Trophy, Calendar, MapPin, Star, Users, Award, Clock } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import hero from "@/assets/hero-stadium.jpg";
import { players, coaches, programs, matches, gallery, testimonials, stats } from "@/lib/cricket-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Greenfield Cricket Academy — Train Like Champions" },
      { name: "description", content: "Elite cricket coaching for juniors, seniors and professionals. Join the academy producing tomorrow's champions." },
    ],
  }),
  component: Home,
});

function Counter({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / 1500);
      setN(Math.floor(p * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return <span ref={ref}>{n.toLocaleString()}</span>;
}

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <section className={`py-20 md:py-28 ${className}`}>{children}</section>;
}

function SectionTitle({ eyebrow, title, desc }: { eyebrow: string; title: string; desc?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      className="text-center max-w-3xl mx-auto mb-14"
    >
      <div className="inline-flex items-center gap-2 text-xs tracking-[0.3em] text-gold mb-3">
        <span className="h-px w-8 bg-gold" /> {eyebrow} <span className="h-px w-8 bg-gold" />
      </div>
      <h2 className="font-display text-3xl md:text-5xl tracking-wide">{title}</h2>
      {desc && <p className="mt-4 text-muted-foreground">{desc}</p>}
    </motion.div>
  );
}

function Home() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={hero} alt="Cricket stadium at night" className="w-full h-full object-cover" width={1920} height={1280} />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full pt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs tracking-[0.25em] mb-6">
              <span className="size-1.5 rounded-full bg-gold animate-pulse" />
              ENROLLMENT OPEN · SUMMER 2026
            </div>
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-wide">
              TRAIN LIKE
              <br />
              <span className="text-gradient-gold">CHAMPIONS</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-foreground/85 max-w-xl">
              Professional cricket coaching from world-class mentors. Forge your game at one of the country's most respected academies.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/register" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-gradient-gold text-gold-foreground font-semibold hover:shadow-glow transition-all">
                Join Academy
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/matches" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md border border-foreground/20 backdrop-blur hover:border-gold hover:text-gold transition-colors">
                <Play className="size-4" /> View Matches
              </Link>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-6 max-w-xl">
              {stats.slice(0, 3).map((s) => (
                <div key={s.label}>
                  <div className="font-display text-3xl md:text-4xl text-gold"><Counter to={s.value} />+</div>
                  <div className="text-xs tracking-widest text-muted-foreground mt-1 uppercase">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs tracking-[0.3em] text-muted-foreground hidden md:block">
          SCROLL ↓
        </div>
      </section>

      {/* ABOUT */}
      <Section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="text-xs tracking-[0.3em] text-gold mb-3">— ABOUT THE ACADEMY</div>
            <h2 className="font-display text-4xl md:text-5xl tracking-wide leading-tight">Where Cricket Meets <span className="text-gradient-gold">Excellence</span></h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Founded in 2003, Greenfield Cricket Academy has trained over 1,200 athletes — including 38 first-class players and 6 national team members. Our holistic approach blends technique, strength, strategy and mindset.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-5">
              {[
                { icon: Trophy, t: "Our Mission", d: "Develop disciplined, confident cricketers ready for the highest level." },
                { icon: Award, t: "Our Vision", d: "To be the premier pathway for cricket talent in the region." },
              ].map((b) => (
                <div key={b.t} className="p-5 rounded-xl bg-card border border-border">
                  <b.icon className="size-6 text-gold mb-3" />
                  <h3 className="font-display tracking-wider">{b.t}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{b.d}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-5"
          >
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`p-6 rounded-2xl border border-border bg-gradient-green relative overflow-hidden ${i % 2 ? "translate-y-6" : ""}`}
              >
                <div className="absolute -right-6 -top-6 size-24 rounded-full bg-gold/10 blur-2xl" />
                <div className="font-display text-5xl text-gradient-gold relative"><Counter to={s.value} />+</div>
                <div className="mt-2 text-sm tracking-wider text-muted-foreground uppercase relative">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* PLAYERS */}
      <Section className="bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle eyebrow="OUR SQUAD" title="Featured Players" desc="Meet the athletes carrying the Greenfield colours into competition." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {players.slice(0, 6).map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-gold/50 transition-all duration-500"
              >
                <div className="aspect-[4/5] overflow-hidden bg-background">
                  <img src={p.image} alt={p.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                </div>
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gold text-gold-foreground text-xs font-semibold tracking-wider">
                  {p.role.toUpperCase()}
                </div>
                <div className="absolute bottom-0 inset-x-0 p-5">
                  <h3 className="font-display text-2xl tracking-wide">{p.name}</h3>
                  <div className="text-xs text-muted-foreground mt-1">{p.batting} · {p.bowling}</div>
                  <div className="mt-3 flex gap-4 text-sm">
                    <div><span className="text-gold font-display text-xl">{p.runs}</span> <span className="text-muted-foreground text-xs">RUNS</span></div>
                    <div><span className="text-gold font-display text-xl">{p.wickets}</span> <span className="text-muted-foreground text-xs">WKTS</span></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* COACHES */}
      <Section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle eyebrow="LEADERSHIP" title="Our Coaches" desc="Decades of pro experience guiding every session." />
          <div className="grid md:grid-cols-3 gap-6">
            {coaches.map((c, i) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl overflow-hidden bg-card border border-border hover:border-gold/40 transition-colors"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={c.image} alt={c.name} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="text-xs tracking-[0.25em] text-gold">{c.role.toUpperCase()}</div>
                  <h3 className="font-display text-2xl tracking-wide mt-1">{c.name}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{c.specialty} · {c.experience}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {c.certifications.map((x) => (
                      <span key={x} className="text-[10px] tracking-wider px-2 py-1 rounded bg-secondary text-muted-foreground border border-border">{x}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* PROGRAMS */}
      <Section className="bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle eyebrow="TRAINING" title="Programs" desc="Pathways built for every age, level and ambition." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group p-7 rounded-2xl bg-card border border-border hover:border-gold transition-all relative overflow-hidden"
              >
                <div className="absolute -right-10 -top-10 size-32 rounded-full bg-gold/0 group-hover:bg-gold/10 blur-3xl transition-all" />
                <div className="relative">
                  <div className="text-xs tracking-widest text-gold">{p.level.toUpperCase()}</div>
                  <h3 className="font-display text-2xl tracking-wide mt-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{p.desc}</p>
                  <div className="flex justify-between items-center mt-6 pt-5 border-t border-border">
                    <div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground"><Clock className="size-3" /> {p.duration}</div>
                      <div className="font-display text-xl text-gold mt-1">{p.fees}</div>
                    </div>
                    <Link to="/register" className="inline-flex items-center gap-1 text-sm font-semibold text-gold hover:gap-2 transition-all">
                      Enroll <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* MATCHES */}
      <Section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle eyebrow="FIXTURES" title="Upcoming & Recent Matches" />
          <div className="grid md:grid-cols-2 gap-5">
            {matches.map((m, i) => (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-gold/40 transition-colors"
              >
                <div className="flex justify-between items-start mb-5">
                  <div className="text-xs tracking-widest text-muted-foreground flex items-center gap-2">
                    <Calendar className="size-3" /> {m.date}
                    <span className="ml-2 flex items-center gap-1"><MapPin className="size-3" /> {m.venue}</span>
                  </div>
                  <span className={`text-[10px] tracking-widest px-2.5 py-1 rounded-full ${
                    m.status === "Upcoming" ? "bg-gold/15 text-gold" : "bg-primary/30 text-foreground"
                  }`}>{m.status.toUpperCase()}</span>
                </div>
                <div className="grid grid-cols-3 items-center gap-2">
                  <div className="text-center">
                    <div className="font-display text-lg tracking-wide">{m.home}</div>
                    {m.scoreA && <div className="text-2xl font-display text-gold mt-1">{m.scoreA}</div>}
                  </div>
                  <div className="text-center font-display text-muted-foreground">VS</div>
                  <div className="text-center">
                    <div className="font-display text-lg tracking-wide">{m.away}</div>
                    {m.scoreB && <div className="text-2xl font-display mt-1">{m.scoreB}</div>}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* GALLERY */}
      <Section className="bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle eyebrow="MOMENTS" title="From the Field" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {gallery.map((g, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`relative overflow-hidden rounded-xl group ${
                  i === 0 ? "col-span-2 row-span-2" : i === 3 ? "md:col-span-2" : ""
                }`}
              >
                <img src={g} alt="" loading="lazy" className="w-full h-full object-cover aspect-square group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/gallery" className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border hover:border-gold hover:text-gold transition-colors">
              View Full Gallery <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle eyebrow="VOICES" title="What People Say" />
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-7 rounded-2xl bg-card border border-border relative"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, k) => (
                    <Star key={k} className="size-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-foreground/90 leading-relaxed italic">"{t.quote}"</p>
                <div className="mt-5 pt-5 border-t border-border">
                  <div className="font-display tracking-wide">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={hero} alt="" className="w-full h-full object-cover opacity-30" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-green opacity-95" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center"
        >
          <Users className="size-12 text-gold mx-auto mb-6" />
          <h2 className="font-display text-4xl md:text-6xl tracking-wide">
            Join Our <span className="text-gradient-gold">Cricket Academy</span> Today
          </h2>
          <p className="mt-5 text-lg text-foreground/85 max-w-2xl mx-auto">
            Start your journey at the academy producing tomorrow's champions. Limited spots for the 2026 intake.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/register" className="px-8 py-4 rounded-md bg-gradient-gold text-gold-foreground font-semibold hover:shadow-glow transition-shadow">
              Register Now
            </Link>
            <Link to="/contact" className="px-8 py-4 rounded-md border border-foreground/30 backdrop-blur hover:border-gold transition-colors">
              Contact Us
            </Link>
          </div>
        </motion.div>
      </section>
    </Layout>
  );
}
