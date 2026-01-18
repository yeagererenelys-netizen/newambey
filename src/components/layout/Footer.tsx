import { Link } from "react-router-dom";
import { Car, Phone, MapPin, Clock, Facebook, Instagram, Youtube, ExternalLink } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-5">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                <Car className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <span className="font-heading font-bold text-lg">Asaan Motor</span>
                <span className="block text-xs opacity-80 -mt-0.5">आसान मोटर ड्राइविंग ट्रेनिंग</span>
              </div>
            </Link>
            <p className="text-sm opacity-80 leading-relaxed">
              Best driving training school in Agra. Expert instructors, flexible timings, 
              and proven results. Rated 4.8★ with 344+ happy students.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <WhatsAppButton variant="icon-only" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Our Services", path: "/services" },
                { name: "Road Signs", path: "/roadsigns" },
                { name: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-5">Our Services</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li>Car Driving Lessons</li>
              <li>Beginner Training</li>
              <li>Refresher Courses</li>
              <li>Road Safety Education</li>
              <li>License Preparation</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-5">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 mt-0.5 shrink-0 text-accent" />
                <span className="opacity-80">
                  Shop no. C2/12/5, Vikas Market, near Sultanganj Crossing, Kamla Nagar, Agra, UP 282005
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-5 h-5 shrink-0 text-accent" />
                <a href="tel:+919837040974" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">
                  098370 40974
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Clock className="w-5 h-5 shrink-0 text-accent" />
                <span className="opacity-80">Open Daily till 8 PM</span>
              </li>
            </ul>
            <div className="mt-5">
              <WhatsAppButton className="text-sm py-2.5 px-4" />
            </div>
          </div>
        </div>

        {/* People Also Search For */}
        <div className="mt-10 pt-8 border-t border-primary-foreground/20">
          <h5 className="font-heading font-medium text-sm mb-3 opacity-80">Other Driving Schools in Agra:</h5>
          <div className="flex flex-wrap gap-2 text-xs opacity-60">
            <span>Akash Car Driving Training School</span>
            <span>•</span>
            <span>K R Motor Driving School</span>
            <span>•</span>
            <span>Taj Car Driving School</span>
            <span>•</span>
            <span>Anjali Motor Driving Centre</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-70">
          <p>© {new Date().getFullYear()} Asaan Motor Driving Training School. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Designed by{" "}
            <a 
              href="https://krish-garg.netlify.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-accent hover:text-accent/80 transition-colors font-medium inline-flex items-center gap-1"
            >
              Krish Garg
              <ExternalLink className="w-3 h-3" />
            </a>
          </p>
          <p>Agra, Uttar Pradesh, India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;