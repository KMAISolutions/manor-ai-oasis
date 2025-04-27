
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <motion.img
            whileHover={{ scale: 1.05 }}
            alt="Kings Court Logo"
            className="h-12 mr-2"
            src="/lovable-uploads/e79c1127-d74a-4e00-950b-0f4102e389f5.jpg"
          />
        </Link>
        
        <DesktopNav scrolled={scrolled} />
        <MobileNav />
      </div>
    </motion.nav>
  );
};

export default Navbar;
