import { Link } from "react-router-dom";
import logo from "@/assets/jume-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/70 section-padding">
      <div className="container-narrow">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div className="sm:col-span-2 md:col-span-1">
            <div className="bg-background rounded-xl p-3 inline-block mb-4">
              <img src={logo} alt="The Jume College – OTEPIC Kenya" className="h-12 w-auto object-contain" />
            </div>
            <p className="font-body text-sm leading-relaxed">
              Where knowledge grows and communities thrive. A project of OTEPIC Kenya.
            </p>
          </div>
          <div>
            <h4 className="font-body font-semibold text-background text-sm mb-3 uppercase tracking-wider">Pages</h4>
            <div className="space-y-2">
              <Link to="/" className="block font-body text-sm hover:text-background transition-colors">Home</Link>
              <Link to="/about" className="block font-body text-sm hover:text-background transition-colors">Jume College</Link>
              <Link to="/projects" className="block font-body text-sm hover:text-background transition-colors">Trainings & Projects</Link>
              <Link to="/newsletters" className="block font-body text-sm hover:text-background transition-colors">Newsletters</Link>
            </div>
          </div>
          <div>
            <h4 className="font-body font-semibold text-background text-sm mb-3 uppercase tracking-wider">Programs</h4>
            <div className="space-y-2">
              <Link to="/projects#programs" className="block font-body text-sm hover:text-background transition-colors">Permaculture</Link>
              <Link to="/projects#programs" className="block font-body text-sm hover:text-background transition-colors">Biointensive Farming</Link>
              <Link to="/projects#programs" className="block font-body text-sm hover:text-background transition-colors">Water Harvesting</Link>
              <Link to="/projects#programs" className="block font-body text-sm hover:text-background transition-colors">Agroforestry</Link>
            </div>
          </div>
          <div>
            <h4 className="font-body font-semibold text-background text-sm mb-3 uppercase tracking-wider">Connect</h4>
            <div className="space-y-2">
              <a href="tel:+254725429179" className="block font-body text-sm hover:text-background transition-colors">+254 725 429 179</a>
              <a href="mailto:otepic07@yahoo.com" className="block font-body text-sm hover:text-background transition-colors">otepic07@yahoo.com</a>
              <Link to="/contact" className="block font-body text-sm hover:text-background transition-colors">Contact Us</Link>
              <p className="font-body text-sm">Upendo Farm, Trans Nzoia, Kenya</p>
            </div>
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
