import { Link } from "react-router-dom";
import { Car, Phone, MapPin, Clock, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <Car className="w-5 h-5 text-secondary-foreground" />
              </div>
              <div>
                <span className="font-bold text-lg">New Ambey</span>
                <span className="block text-xs opacity-80 -mt-1">Motor Driving School</span>
              </div>
            </Link>
            <p className="text-sm opacity-80 leading-relaxed">
              Professional driving training in Jaipur since 2000. Expert lessons for beginners, 
              men, and women with patient and supportive trainers.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
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
                    className="text-sm opacity-80 hover:opacity-100 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Car Driving Lessons</li>
              <li>Beginner Training</li>
              <li>Refresher Courses</li>
              <li>Road Safety Education</li>
              <li>License Preparation</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 mt-1 shrink-0 text-secondary" />
                <span className="opacity-80">
                  164, Sector 2 Rd, Sector 2, Sector 6, Vidyadhar Nagar, Jaipur, Rajasthan 302039
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 shrink-0 text-secondary" />
                <a href="tel:09636420602" className="opacity-80 hover:opacity-100 hover:text-secondary transition-colors">
                  096364 20602
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Clock className="w-4 h-4 shrink-0 text-secondary" />
                <span className="opacity-80">Opens 4 AM (Sat - Thu)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-70">
          <p>© {new Date().getFullYear()} New Ambey Motor Driving School. All rights reserved.</p>
          <p>Jaipur, Rajasthan, India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
