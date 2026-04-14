const Footer = () => {
  return (
    <footer className="bg-foreground text-background/70 section-padding">
      <div className="container-narrow">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <h3 className="font-display font-bold text-xl text-background mb-3">
              Jume College
            </h3>
            <p className="font-body text-sm leading-relaxed">
              Where knowledge grows and communities thrive. A project of OTEPIC Kenya.
            </p>
          </div>
          <div>
            <h4 className="font-body font-semibold text-background text-sm mb-3 uppercase tracking-wider">Quick Links</h4>
            <div className="space-y-2">
              <a href="#programs" className="block font-body text-sm hover:text-background transition-colors">Training Programs</a>
              <a href="#join" className="block font-body text-sm hover:text-background transition-colors">Join Us</a>
              <a href="mailto:info@otepic.org" className="block font-body text-sm hover:text-background transition-colors">Contact</a>
            </div>
          </div>
          <div>
            <h4 className="font-body font-semibold text-background text-sm mb-3 uppercase tracking-wider">Connect</h4>
            <p className="font-body text-sm leading-relaxed">
              Support our programs, volunteer, or partner with us to expand opportunities across Kenya and beyond.
            </p>
          </div>
        </div>
        <div className="border-t border-background/10 pt-6 text-center">
          <p className="font-body text-xs">
            © {new Date().getFullYear()} Jume College – OTEPIC Kenya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
