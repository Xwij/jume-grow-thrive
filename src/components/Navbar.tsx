import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/jume-logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Trainings & Projects", to: "/projects" },
    { label: "Gallery", to: "/gallery" },
    { label: "Impact", to: "/impact" },
    { label: "Reports & Newsletters", to: "/newsletters" },
  ];

  const projectStrip = [
    { label: "Tabasamu Children's Home", to: "/tabasamu" },
    { label: "Permaculture Training", to: "/projects#programs" },
    { label: "Water Harvesting", to: "/projects#services" },
    { label: "Tree Nursery", to: "/projects#services" },
    { label: "Mushroom Production", to: "/projects#services" },
    { label: "Community Development", to: "/projects#services" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container-narrow flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2" aria-label="The Jume College — OTEPIC Kenya">
          <img src={logo} alt="The Jume College – OTEPIC Kenya" className="h-10 sm:h-11 w-auto object-contain" />
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link key={link.label} to={link.to} className={`px-4 py-2 font-body text-sm rounded-lg transition-colors ${location.pathname === link.to ? "text-foreground bg-muted" : "text-foreground/70 hover:text-foreground hover:bg-muted"}`}>
              {link.label}
            </Link>
          ))}
          <Link to="/donate" className="ml-2 px-5 py-2 rounded-lg bg-pink-500 text-white font-body text-sm font-semibold hover:bg-pink-600 transition-colors">
            Donate
          </Link>
          <Link to="/contact" className="ml-1 px-5 py-2 rounded-lg bg-primary text-primary-foreground font-body text-sm font-semibold hover:opacity-90 transition-opacity">
            Contact
          </Link>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-foreground" aria-label="Menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {open ? <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Sub-strip (red) */}
      <div className="hidden md:block bg-red-600 text-white">
        <div className="container-narrow flex items-center px-4 sm:px-6 lg:px-8 h-10">
          <span className="text-[11px] font-body uppercase tracking-widest text-white/90 shrink-0">
            The Jume College — OTEPIC Kenya
          </span>
          <div className="ml-auto shrink-0">
            <Link
              to="/newsletters"
              className="inline-flex items-center px-3 py-1 rounded-md bg-white text-red-600 text-xs font-body font-semibold hover:bg-white/90 transition-colors whitespace-nowrap"
            >
              Reports & Newsletters →
            </Link>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 space-y-1">
          {navLinks.map((link) => (
            <Link key={link.label} to={link.to} onClick={() => setOpen(false)} className={`block px-4 py-2.5 font-body text-sm rounded-lg ${location.pathname === link.to ? "text-foreground bg-muted" : "text-foreground/70 hover:text-foreground hover:bg-muted"}`}>
              {link.label}
            </Link>
          ))}
          <Link to="/donate" onClick={() => setOpen(false)} className="block px-4 py-2.5 font-body text-sm font-semibold text-pink-600">
            Donate
          </Link>
          <Link to="/contact" onClick={() => setOpen(false)} className="block px-4 py-2.5 font-body text-sm font-semibold text-primary">
            Contact Us
          </Link>
          <div className="pt-2 mt-2 border-t border-border">
            <p className="px-4 py-1 text-[10px] uppercase tracking-widest text-muted-foreground">Projects</p>
            {projectStrip.map((p) => (
              <Link key={p.label} to={p.to} onClick={() => setOpen(false)} className="block px-4 py-2 text-sm font-body text-foreground/75 hover:bg-muted rounded-lg">
                {p.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
