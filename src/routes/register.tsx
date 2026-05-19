import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { CheckCircle2, Upload } from "lucide-react";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Register — Greenfield Cricket Academy" },
      { name: "description", content: "Apply to join the Greenfield Cricket Academy. Enrollment now open for 2026." },
    ],
  }),
  component: Register,
});

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="text-xs tracking-widest text-muted-foreground">{label.toUpperCase()}</span>
      <input
        {...props}
        className="mt-1.5 w-full px-4 py-3 rounded-md bg-input border border-border focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition"
      />
    </label>
  );
}

function Register() {
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const e2: Record<string, string> = {};
    if (!String(fd.get("name") ?? "").trim()) e2.name = "Required";
    if (!/.+@.+\..+/.test(String(fd.get("email") ?? ""))) e2.email = "Invalid email";
    if (!String(fd.get("phone") ?? "").trim()) e2.phone = "Required";
    setErrors(e2);
    if (Object.keys(e2).length === 0) {
      setDone(true);
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setDone(false), 4000);
    }
  };

  return (
    <Layout>
      <PageHero title="Academy Registration" subtitle="Submit your application — our team will reach out within 48 hours." />
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <form onSubmit={submit} className="p-8 md:p-10 rounded-2xl bg-card border border-border space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <Field label="Full Name" name="name" placeholder="Jane Doe" />
                {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
              </div>
              <Field label="Age" name="age" type="number" placeholder="18" min={5} max={70} />
              <div>
                <Field label="Phone" name="phone" type="tel" placeholder="+1 555 010 1188" />
                {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
              </div>
              <div>
                <Field label="Email" name="email" type="email" placeholder="you@email.com" />
                {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
              </div>
            </div>

            <Field label="Address" name="address" placeholder="Street, City, Postcode" />

            <div className="grid sm:grid-cols-2 gap-5">
              <label className="block">
                <span className="text-xs tracking-widest text-muted-foreground">CRICKET ROLE</span>
                <select name="role" className="mt-1.5 w-full px-4 py-3 rounded-md bg-input border border-border focus:outline-none focus:ring-2 focus:ring-gold">
                  <option>Batsman</option><option>Bowler</option><option>All-rounder</option><option>Wicketkeeper</option>
                </select>
              </label>
              <label className="block">
                <span className="text-xs tracking-widest text-muted-foreground">EXPERIENCE LEVEL</span>
                <select name="level" className="mt-1.5 w-full px-4 py-3 rounded-md bg-input border border-border focus:outline-none focus:ring-2 focus:ring-gold">
                  <option>Beginner</option><option>Intermediate</option><option>Advanced</option>
                </select>
              </label>
            </div>

            <label className="block">
              <span className="text-xs tracking-widest text-muted-foreground">PREFERRED PROGRAM</span>
              <select name="program" className="mt-1.5 w-full px-4 py-3 rounded-md bg-input border border-border focus:outline-none focus:ring-2 focus:ring-gold">
                <option>Junior Cricket Training</option>
                <option>Senior Cricket Training</option>
                <option>Fitness & Conditioning</option>
                <option>Summer Cricket Camp</option>
                <option>1-on-1 Coaching</option>
                <option>Elite Pathway</option>
              </select>
            </label>

            <label className="block">
              <span className="text-xs tracking-widest text-muted-foreground">PROFILE IMAGE</span>
              <div className="mt-1.5 flex items-center gap-3 px-4 py-3 rounded-md bg-input border border-dashed border-border">
                <Upload className="size-4 text-gold" />
                <input type="file" accept="image/*" className="text-sm text-muted-foreground flex-1" />
              </div>
            </label>

            <button type="submit" className="w-full py-4 rounded-md bg-gradient-gold text-gold-foreground font-semibold hover:shadow-glow transition-shadow">
              Submit Application
            </button>
          </form>
        </div>
      </section>

      <AnimatePresence>
        {done && (
          <motion.div
            initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-6 py-4 rounded-xl bg-card border border-gold shadow-glow flex items-center gap-3"
          >
            <CheckCircle2 className="text-gold" />
            <span>Application submitted! We'll be in touch shortly.</span>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}
