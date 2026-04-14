import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container-narrow flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <a href="#" className="font-display font-bold text-xl text-foreground">
          Jume<span className="text-primary"> College</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#programs" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">Programs</a>
          <a href="#join" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">Join Us</a>
          <a href="mailto:info@otepic.org" className="inline-flex items-center justify-center px-5 py-2 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-sm hover:opacity-90 transition-opacity">
            Contact
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-foreground" aria-label="Toggle menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M18 6L6 18M6 6l12 12" /> : <><path d="M4 6h16" /><path d="M4 12h16" /><path d="M4 18h16" /></>}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 space-y-3">
          <a href="#programs" onClick={() => setOpen(false)} className="block font-body text-sm text-muted-foreground py-2">Programs</a>
          <a href="#join" onClick={() => setOpen(false)} className="block font-body text-sm text-muted-foreground py-2">Join Us</a>
          <a href="mailto:info@otepic.org" className="block font-body text-sm text-primary font-semibold py-2">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
