import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/team", label: "Team" },
  { to: "/coaches", label: "Coaches" },
  { to: "/programs", label: "Programs" },
  { to: "/matches", label: "Matches" },
  { to: "/gallery", label: "Gallery" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (r) => r.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [path]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/85 backdrop-blur-xl border-b border-border shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-16 md:h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="size-9 rounded-lg bg-gradient-gold grid place-items-center font-display font-black text-gold-foreground text-lg shadow-glow">
            G
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg tracking-wider">GREENFIELD</div>
            <div className="text-[10px] tracking-[0.3em] text-muted-foreground -mt-1">CRICKET ACADEMY</div>
          </div>
        </Link>

        <ul className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className={`relative px-3 py-2 text-sm font-medium tracking-wide transition-colors ${
                  path === l.to ? "text-gold" : "text-foreground/80 hover:text-gold"
                }`}
              >
                {l.label}
                {path === l.to && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-3 right-3 -bottom-0.5 h-0.5 bg-gradient-gold rounded-full"
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Link
            to="/register"
            className="inline-flex items-center px-5 py-2.5 rounded-md bg-gradient-gold text-gold-foreground font-semibold text-sm hover:shadow-glow transition-shadow"
          >
            Register
          </Link>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden size-10 grid place-items-center rounded-md border border-border bg-card/50"
          aria-label="Menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <ul className="px-4 py-4 space-y-1">
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className={`block px-4 py-3 rounded-md text-sm font-medium ${
                      path === l.to ? "bg-card text-gold" : "text-foreground/85 hover:bg-card"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/register"
                  className="block text-center mt-2 px-4 py-3 rounded-md bg-gradient-gold text-gold-foreground font-semibold"
                >
                  Register Now
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
