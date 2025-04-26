
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <h1 className={`font-serif text-xl md:text-2xl font-bold ${scrolled ? 'text-manor-green' : 'text-white text-shadow'}`}>
            The King's Court <span className="hidden sm:inline">Guest Manor</span>
          </h1>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className={`font-medium hover:text-manor-gold transition-colors ${scrolled ? 'text-foreground' : 'text-white text-shadow'}`}>Home</Link>
          <Link to="/about" className={`font-medium hover:text-manor-gold transition-colors ${scrolled ? 'text-foreground' : 'text-white text-shadow'}`}>About</Link>
          <Link to="/rooms" className={`font-medium hover:text-manor-gold transition-colors ${scrolled ? 'text-foreground' : 'text-white text-shadow'}`}>Rooms</Link>
          <Link to="/facilities" className={`font-medium hover:text-manor-gold transition-colors ${scrolled ? 'text-foreground' : 'text-white text-shadow'}`}>Facilities</Link>
          <Link to="/gallery" className={`font-medium hover:text-manor-gold transition-colors ${scrolled ? 'text-foreground' : 'text-white text-shadow'}`}>Gallery</Link>
          <Link to="/contact" className={`font-medium hover:text-manor-gold transition-colors ${scrolled ? 'text-foreground' : 'text-white text-shadow'}`}>Contact</Link>
          <Button className="bg-manor-gold hover:bg-manor-gold/90 text-white">Book Now</Button>
        </div>
        
        <div className="md:hidden flex items-center">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)} className={`${scrolled ? 'text-manor-green' : 'text-white'}`}>
            <Menu size={24} />
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-manor-green/95 z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center mb-8">
            <h1 className="font-serif text-xl font-bold text-white">The King's Court</h1>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-white">
              <X size={24} />
            </Button>
          </div>
          
          <div className="flex flex-col space-y-6 items-center">
            <Link to="/" className="text-white text-lg font-medium" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" className="text-white text-lg font-medium" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/rooms" className="text-white text-lg font-medium" onClick={() => setIsOpen(false)}>Rooms</Link>
            <Link to="/facilities" className="text-white text-lg font-medium" onClick={() => setIsOpen(false)}>Facilities</Link>
            <Link to="/gallery" className="text-white text-lg font-medium" onClick={() => setIsOpen(false)}>Gallery</Link>
            <Link to="/contact" className="text-white text-lg font-medium" onClick={() => setIsOpen(false)}>Contact</Link>
            <Button className="bg-manor-gold hover:bg-manor-gold/90 text-white w-full mt-4">Book Now</Button>
            
            <div className="mt-8 flex items-center text-white">
              <Phone size={16} className="mr-2" />
              <span>+27 21 123 4567</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
