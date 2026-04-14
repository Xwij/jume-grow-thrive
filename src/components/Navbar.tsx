import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container-narrow flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="font-display font-bold text-xl text-foreground">
          Jume<span className="text-primary"> College</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">Home</Link>
          {isHome ? (
            <a href="#programs" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">Programs</a>
          ) : (
            <Link to="/#programs" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">Programs</Link>
          )}
          <Link to="/contact" className="inline-flex items-center justify-center px-5 py-2 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-sm hover:opacity-90 transition-opacity">
            Contact
          </Link>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-foreground" aria-label="Toggle menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M18 6L6 18M6 6l12 12" /> : <><path d="M4 6h16" /><path d="M4 12h16" /><path d="M4 18h16" /></>}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 space-y-3">
          <Link to="/" onClick={() => setOpen(false)} className="block font-body text-sm text-muted-foreground py-2">Home</Link>
          {isHome ? (
            <a href="#programs" onClick={() => setOpen(false)} className="block font-body text-sm text-muted-foreground py-2">Programs</a>
          ) : (
            <Link to="/#programs" onClick={() => setOpen(false)} className="block font-body text-sm text-muted-foreground py-2">Programs</Link>
          )}
          <Link to="/contact" onClick={() => setOpen(false)} className="block font-body text-sm text-primary font-semibold py-2">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
