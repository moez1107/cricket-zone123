import { Link } from "@tanstack/react-router";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary/40 border-t border-border mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="size-10 rounded-lg bg-gradient-gold grid place-items-center font-display font-black text-gold-foreground">G</div>
            <div>
              <div className="font-display text-lg tracking-wider">GREENFIELD</div>
              <div className="text-[10px] tracking-[0.3em] text-muted-foreground -mt-1">CRICKET ACADEMY</div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Forging the next generation of cricket champions through world-class coaching and elite facilities.
          </p>
          <div className="flex gap-3 mt-5">
            {[FaInstagram, FaTwitter, FaFacebook, FaYoutube].map((Icon, i) => (
              <a key={i} href="#" className="size-9 grid place-items-center rounded-full bg-card border border-border hover:border-gold hover:text-gold transition-colors">
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-display tracking-widest text-gold mb-4">QUICK LINKS</h4>
          <ul className="space-y-2 text-sm">
            {["About","Team","Coaches","Programs","Matches"].map((l) => (
              <li key={l}><Link to={`/${l.toLowerCase()}`} className="text-muted-foreground hover:text-gold transition-colors">{l}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-display tracking-widest text-gold mb-4">CONTACT</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><MapPin className="size-4 mt-0.5 text-gold" /> 42 Pavilion Road, Greenfield Oval</li>
            <li className="flex items-center gap-2"><Phone className="size-4 text-gold" /> +1 (555) 040-1188</li>
            <li className="flex items-center gap-2"><Mail className="size-4 text-gold" /> hello@greenfieldcricket.com</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-display tracking-widest text-gold mb-4">NEWSLETTER</h4>
          <p className="text-sm text-muted-foreground mb-3">Match updates and academy news.</p>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-3 py-2 rounded-md bg-input border border-border text-sm focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <button className="px-4 py-2 rounded-md bg-gradient-gold text-gold-foreground text-sm font-semibold">Join</button>
          </form>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Greenfield Cricket Academy. All rights reserved.
      </div>
    </footer>
  );
}
