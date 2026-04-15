import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Programs", to: isHome ? "#programs" : "/#programs", isAnchor: isHome },
    { label: "Projects", to: "/projects" },
    { label: "Services", to: "/services" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container-narrow flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="font-display font-bold text-xl text-foreground">
          Jume <span className="text-primary">College</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) =>
            link.isAnchor ? (
              <a key={link.label} href={link.to} className="px-4 py-2 font-body text-sm text-foreground/70 hover:text-foreground transition-colors rounded-lg hover:bg-muted">
                {link.label}
              </a>
            ) : (
              <Link key={link.label} to={link.to} className={`px-4 py-2 font-body text-sm rounded-lg transition-colors ${location.pathname === link.to ? "text-foreground bg-muted" : "text-foreground/70 hover:text-foreground hover:bg-muted"}`}>
                {link.label}
              </Link>
            )
          )}
          <Link to="/contact" className="ml-2 px-5 py-2 rounded-lg bg-primary text-primary-foreground font-body text-sm font-semibold hover:opacity-90 transition-opacity">
            Contact
          </Link>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-foreground" aria-label="Menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {open ? <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 space-y-1">
          {navLinks.map((link) =>
            link.isAnchor ? (
              <a key={link.label} href={link.to} onClick={() => setOpen(false)} className="block px-4 py-2.5 font-body text-sm text-foreground/70 hover:text-foreground rounded-lg hover:bg-muted">
                {link.label}
              </a>
            ) : (
              <Link key={link.label} to={link.to} onClick={() => setOpen(false)} className={`block px-4 py-2.5 font-body text-sm rounded-lg ${location.pathname === link.to ? "text-foreground bg-muted" : "text-foreground/70 hover:text-foreground hover:bg-muted"}`}>
                {link.label}
              </Link>
            )
          )}
          <Link to="/contact" onClick={() => setOpen(false)} className="block px-4 py-2.5 font-body text-sm font-semibold text-primary">
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
