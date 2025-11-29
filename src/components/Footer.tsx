import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Github } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const navigate = useNavigate();

  const handleTeamNavigation = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/team');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <footer className="bg-background border-t w-full">
      <div className="w-full px-6 py-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center">
                    <img 
                    src={logo} // or use your logo import
                    
                    />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-foreground">CLIMATE LAB</h3>
                  <p className="text-sm text-muted-foreground">
                    National Institute of Technology Delhi
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Dedicated to advancing climate science through intelligent modeling, 
                analytics, and technology for environmental sustainability.
              </p>
            </div>

            {/* Research */}
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground text-sm uppercase tracking-wide">Research</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Climate Modeling</div>
                <div>Ocean Dynamics</div>
                <div>Coastal Engineering</div>
              </div>
            </div>

            {/* Links */}
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground text-sm uppercase tracking-wide">Links</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <Link to="/publications" className="block hover:text-foreground">Publications</Link>
                <Link to="/team" className="block hover:text-foreground">Team</Link>
                <Link to="/contact" className="block hover:text-foreground">Contact</Link>
              </div>
            </div>

            {/* Connect */}
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground text-sm uppercase tracking-wide text-center">Connect</h4>
              <div className="space-y-2 text-center">
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link to="/contact">Contact Lab</Link>
                </Button>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link to="https://nitdelhi.ac.in" target="_blank">NITD Website</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} CLIMATE Research Laboratory
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Committed to research excellence</span>
              <div className="w-1 h-1 bg-border rounded-full"></div>
              <div className="flex items-center gap-3">
                <button 
                  onClick={handleTeamNavigation}
                  className="text-primary hover:underline cursor-pointer text-sm font-medium"
                >
                  Developed by Viaan Sharma
                </button>
                <div className="flex gap-2">
                  <Button asChild variant="ghost" size="sm" className="h-7 w-7 p-0">
                    <Link to="https://www.linkedin.com/in/viaan-sharma-9a6368201/" target="_blank" title="LinkedIn">
                      <Linkedin className="h-3.5 w-3.5" />
                    </Link>
                  </Button>
                  <Button asChild variant="ghost" size="sm" className="h-7 w-7 p-0">
                    <Link to="https://github.com/viaansharma" target="_blank" title="GitHub">
                      <Github className="h-3.5 w-3.5" />
                    </Link>
                  </Button>
                  <Button asChild variant="ghost" size="sm" className="h-7 w-7 p-0">
                    <Link to="mailto:viaansharma7@gmail.com" title="Email">
                      <Mail className="h-3.5 w-3.5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;