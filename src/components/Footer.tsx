import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-white font-bold text-xl">स्व</span>
              </div>
              <span className="font-serif font-bold text-xl">Swasthya Vaani</span>
            </div>
            <p className="text-background/70 leading-relaxed">
              Making healthcare information accessible to every Indian through AI-powered multilingual voice assistance.
            </p>
            <div className="flex gap-4 pt-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-background/70 hover:text-background transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-background/70 hover:text-background transition-colors">
                  Benefits
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-background/70 hover:text-background transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#download" className="text-background/70 hover:text-background transition-colors">
                  Download App
                </a>
              </li>
              <li>
                <a href="#about" className="text-background/70 hover:text-background transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  Disclaimer
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  Medical Guidelines
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-1 flex-shrink-0 text-background/70" />
                <div>
                  <a
                    href="mailto:support@swasthyavaani.in"
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    support@swasthyavaani.in
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-1 flex-shrink-0 text-background/70" />
                <div>
                  <a
                    href="tel:+911234567890"
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    +91 1234 567 890
                  </a>
                  <p className="text-sm text-background/50 mt-1">Mon-Fri, 9 AM - 6 PM IST</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-background/70" />
                <div className="text-background/70">
                  <p>Mumbai, Maharashtra</p>
                  <p className="text-sm text-background/50 mt-1">India</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-background/10 pt-8 mb-8">
          <p className="text-sm text-background/60 text-center max-w-4xl mx-auto leading-relaxed">
            <strong className="text-background/80">Medical Disclaimer:</strong> Swasthya Vaani provides general information about medicines and health for educational purposes only. This information is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or qualified health provider with any questions regarding a medical condition.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/60">
              © {new Date().getFullYear()} Swasthya Vaani. All rights reserved.
            </p>
            <p className="text-sm text-background/60">
              Made with ❤️ for India • स्वस्थ भारत, सशक्त भारत
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
