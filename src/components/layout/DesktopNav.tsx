
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Instagram, Facebook } from "lucide-react";

const DesktopNav = ({ scrolled }: { scrolled: boolean }) => {
  return (
    <div className="hidden md:flex items-center space-x-6">
      <NavLink to="/" label="Home" scrolled={scrolled} />
      <NavLink to="/about" label="About" scrolled={scrolled} />
      <NavLink to="/rooms" label="Rooms" scrolled={scrolled} />
      <NavLink to="/facilities" label="Facilities" scrolled={scrolled} />
      <NavLink to="/contact" label="Contact" scrolled={scrolled} />
      
      <div className="flex items-center space-x-4">
        <SocialLink href="https://instagram.com" icon={<Instagram size={20} />} />
        <SocialLink href="https://facebook.com" icon={<Facebook size={20} />} />
      </div>
    </div>
  );
};

const NavLink = ({ to, label, scrolled }: { to: string; label: string; scrolled: boolean }) => {
  return (
    <Link to={to} className="relative group">
      <span className={`font-medium transition-colors ${
        scrolled ? 'text-foreground' : 'text-white text-shadow'
      }`}>
        {label}
      </span>
      <motion.div
        className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#D4AF37] group-hover:w-full transition-all duration-300"
        whileHover={{ width: "100%" }}
      />
    </Link>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-[#D4AF37] transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon}
    </motion.a>
  );
};

export default DesktopNav;
