import { Link } from "wouter";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-heading text-2xl font-bold text-accent">Bharat Clothes Store</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Your destination for premium quality fabrics and latest fashion trends at affordable prices in Kanpur. We bring elegance to your wardrobe.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="bg-white/10 hover:bg-accent hover:text-primary p-2 rounded-full transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-accent hover:text-primary p-2 rounded-full transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-accent hover:text-primary p-2 rounded-full transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-white/80 hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="/products" className="text-white/80 hover:text-accent transition-colors">Our Collection</Link></li>
              <li><Link href="/about" className="text-white/80 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-white/80 hover:text-accent transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-xl font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent shrink-0 mt-1" />
                <span className="text-white/80 text-sm">Shop No. 253, Near Vinayak Pur, Rajiv Nagar, Sharda Nagar, Kanpur – 208025</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <a href="tel:+918052797415" className="text-white/80 hover:text-accent text-sm">+91 80527 97415</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <a href="mailto:info@bharatclothes.com" className="text-white/80 hover:text-accent text-sm">info@bharatclothes.com</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-heading text-xl font-semibold mb-6">Opening Hours</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-accent shrink-0 mt-1" />
                <div className="text-white/80 text-sm">
                  <p className="font-semibold text-white">Open 24 Hours</p>
                  <p>Monday - Sunday</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Bharat Clothes Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
