
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Star, Wifi, Calendar } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-manor-charcoal text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-serif text-2xl mb-4 text-manor-gold">The King's Court</h3>
            <p className="mb-6 text-gray-300">Experience luxury accommodation in a beautiful setting. Our guest manor offers exceptional service and comfort.</p>
            <div className="flex space-x-2">
              {Array(5).fill(0).map((_, i) => (
                <Star key={i} size={16} className="text-manor-gold" />
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-4 text-manor-gold">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-manor-gold transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-manor-gold transition-colors">About Us</Link></li>
              <li><Link to="/rooms" className="text-gray-300 hover:text-manor-gold transition-colors">Rooms</Link></li>
              <li><Link to="/facilities" className="text-gray-300 hover:text-manor-gold transition-colors">Facilities</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-manor-gold transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-manor-gold transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-4 text-manor-gold">Our Facilities</h4>
            <ul className="space-y-2">
              <li className="flex items-center"><Wifi size={16} className="mr-2 text-manor-gold" /> Free WiFi</li>
              <li className="flex items-center"><Calendar size={16} className="mr-2 text-manor-gold" /> Events Hall</li>
              <li className="flex items-center"><Star size={16} className="mr-2 text-manor-gold" /> Luxury Rooms</li>
              <li className="flex items-center"><Star size={16} className="mr-2 text-manor-gold" /> Swimming Pool</li>
              <li className="flex items-center"><Star size={16} className="mr-2 text-manor-gold" /> Fine Dining</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-4 text-manor-gold">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-manor-gold" />
                <span>123 King's Road,<br />Cape Town, South Africa</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-manor-gold" />
                <span>+27 21 123 4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-manor-gold" />
                <span>info@kingscourt.co.za</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} The King's Court Guest Manor. All Rights Reserved.</p>
          <p className="mt-2">Powered By Kwena Moloto A.I Solutions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
