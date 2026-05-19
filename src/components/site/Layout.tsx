import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function Layout({ children }: { children: ReactNode }) {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-1"
      >
        {children}
      </motion.main>
      <Footer />

      <a
        href="https://wa.me/15550401188"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 size-14 grid place-items-center rounded-full bg-[oklch(0.65_0.18_150)] text-white shadow-glow hover:scale-110 transition-transform"
        aria-label="WhatsApp"
      >
        <FaWhatsapp className="size-6" />
      </a>

      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-24 right-6 z-40 size-11 grid place-items-center rounded-full bg-card border border-border hover:border-gold hover:text-gold transition-colors"
          aria-label="Back to top"
        >
          <ArrowUp className="size-5" />
        </button>
      )}
    </div>
  );
}

export function PageHero({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-green border-b border-border overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: "radial-gradient(circle at 20% 30%, oklch(0.78 0.16 85 / 0.4), transparent 50%)"
      }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-4xl md:text-6xl tracking-wide"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-muted-foreground max-w-2xl"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
