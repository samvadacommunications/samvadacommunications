import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";


const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="animate-fade-in">
            <div className="flex items-center space-x-3 mb-4">
              <img src="/Logo.png" alt="Samvada Communications" className="h-12 w-12" />
              <span className="text-lg font-bold">Samvada</span>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Delivering the best digital solutions with strategy, creativity, and impact.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-secondary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="animate-fade-in">
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Web Development</li>
              <li>Digital Marketing</li>
              <li>Graphic Design</li>
              <li>Social Media</li>
              <li>WhatsApp API</li>
              <li>Offline Marketing</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/80">S S Complex Saibrakatte, Shiriyara Village 576210</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={20} />
                <a href="tel:+917619394676" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  +91 7619394676
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={20} />
                <a href="mailto:info@samvadacommunications.com" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  info@samvadacommunications.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/80">
          <p>&copy; {new Date().getFullYear()} Samvada Communications. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
