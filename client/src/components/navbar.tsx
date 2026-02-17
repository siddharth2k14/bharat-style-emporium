import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, MapPin, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Collection", href: "/products" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-primary text-white p-2 rounded-lg group-hover:bg-accent transition-colors duration-300">
              <ShoppingBag className="h-6 w-6" />
            </div>
            <div>
              <h1 className={`font-heading font-bold text-xl md:text-2xl leading-none ${isScrolled ? "text-primary" : "text-primary md:text-white"}`}>
                Bharat Clothes
              </h1>
              <span className={`text-xs tracking-wider ${isScrolled ? "text-muted-foreground" : "text-white/80"}`}>
                EST. KANPUR
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  location === link.href 
                    ? "text-accent font-bold" 
                    : isScrolled ? "text-foreground" : "text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button 
              className="bg-accent text-primary-foreground hover:bg-white hover:text-primary font-bold"
              size="sm"
              onClick={() => window.open('tel:+918052797415')}
            >
              <Phone className="mr-2 h-4 w-4" /> Call Now
            </Button>
          </nav>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className={isScrolled ? "text-foreground" : "text-white"}>
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background border-l-primary/20">
                <div className="flex flex-col gap-8 mt-10">
                  <div className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <Link 
                        key={link.name} 
                        href={link.href}
                        className={`text-lg font-medium py-2 border-b border-border/50 ${
                          location === link.href ? "text-primary font-bold" : "text-foreground"
                        }`}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                  
                  <div className="mt-auto space-y-4">
                    <Button className="w-full bg-primary" onClick={() => window.open('tel:+918052797415')}>
                      <Phone className="mr-2 h-4 w-4" /> Call +91 80527 97415
                    </Button>
                    <div className="flex items-start gap-3 text-sm text-muted-foreground bg-secondary/50 p-4 rounded-lg">
                      <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <p>Shop No. 253, Near Vinayak Pur, Rajiv Nagar, Sharda Nagar, Kanpur</p>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
