import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted text-muted-foreground py-16">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-white font-bold text-xl">स्व</span>
              </div>
              <span className="font-serif font-bold text-xl text-foreground">Swasthya Vaani</span>
            </div>
            <p className="text-muted-foreground/80 leading-relaxed">
              Making healthcare information accessible to every Indian through AI-powered multilingual voice assistance.
            </p>
            <div className="flex gap-4 pt-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-foreground/10 hover:bg-foreground/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-foreground/10 hover:bg-foreground/20 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-foreground/10 hover:bg-foreground/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-foreground/10 hover:bg-foreground/20 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-muted-foreground/80 hover:text-foreground transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-muted-foreground/80 hover:text-foreground transition-colors">
                  Benefits
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-muted-foreground/80 hover:text-foreground transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#download" className="text-muted-foreground/80 hover:text-foreground transition-colors">
                  Download App
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground/80 hover:text-foreground transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground/80 hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground/80 hover:text-foreground transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground/80 hover:text-foreground transition-colors">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground/80 hover:text-foreground transition-colors">
                  Disclaimer
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground/80 hover:text-foreground transition-colors">
                  Medical Guidelines
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-1 flex-shrink-0 text-muted-foreground/80" />
                <div>
                  <a
                    href="mailto:support@swasthyavaani.in"
                    className="text-muted-foreground/80 hover:text-foreground transition-colors"
                  >
                    support@swasthyavaani.in
                  </a>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-muted-foreground/80" />
                <div className="text-muted-foreground/80">
                  <p>Hospet, Karnataka</p>
                  <p className="text-sm text-muted-foreground/60 mt-1">India</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-foreground/10 pt-8 mb-8">
          <p className="text-sm text-muted-foreground/70 text-center max-w-4xl mx-auto leading-relaxed">
            <strong className="text-muted-foreground/90">Medical Disclaimer:</strong> Swasthya Vaani provides general information about medicines and health for educational purposes only. This information is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or qualified health provider with any questions regarding a medical condition.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground/70">
              © {new Date().getFullYear()} Swasthya Vaani. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground/70">
              Made with ❤️ for India • स्वस्थ भारत, सशक्त भारत
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
