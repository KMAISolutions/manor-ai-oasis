import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Star, Wifi, Calendar, Instagram, Facebook } from "lucide-react";
const Footer = () => {
  return <footer className="text-white pt-16 pb-8 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-serif text-2xl mb-4 text-[#D4AF37]">The King's Court</h3>
            <p className="mb-6 text-gray-300">Experience luxury accommodation in a beautiful setting. Our guest manor offers exceptional service and comfort.</p>
            <div className="flex space-x-2 mb-4">
              {Array(5).fill(0).map((_, i) => <Star key={i} size={16} className={i < 4 ? "text-[#D4AF37]" : "text-gray-500"} />)}
            </div>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#D4AF37]">
                <Instagram size={24} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#D4AF37]">
                <Facebook size={24} />
              </a>
            </div>
          </div>
          
          <div className="my-0">
            <h4 className="font-serif text-lg mb-4 text-[#D4AF37]">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-[#D4AF37] transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-[#D4AF37] transition-colors">About Us</Link></li>
              <li><Link to="/rooms" className="text-gray-300 hover:text-[#D4AF37] transition-colors">Rooms</Link></li>
              <li><Link to="/facilities" className="text-gray-300 hover:text-[#D4AF37] transition-colors">Facilities</Link></li>
              <li><Link to="/facilities#faq" className="text-gray-300 hover:text-[#D4AF37] transition-colors">FAQ</Link></li>
              <li className="bg-slate-900"><Link to="/facilities#house-rules" className="text-gray-300 hover:text-[#D4AF37] transition-colors">House Rules</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-[#D4AF37] transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div className="my-0 mx-0 px-0 py-0">
            <h4 className="font-serif text-lg mb-4 text-[#D4AF37]">Our Facilities</h4>
            <ul className="space-y-2">
              <li className="flex items-center"><Wifi size={16} className="mr-2 text-manor-gold" /> Free WiFi</li>
              <li className="flex items-center"><Calendar size={16} className="mr-2 text-manor-gold" /> Events Hall</li>
              <li className="flex items-center"><Star size={16} className="mr-2 text-manor-gold" /> Luxury Rooms</li>
              <li className="flex items-center"><Star size={16} className="mr-2 text-manor-gold" /> Swimming Pool</li>
              <li className="flex items-center"><Star size={16} className="mr-2 text-manor-gold" /> Fine Dining</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-4 text-[#D4AF37]">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-[#D4AF37]" />
                <span>70 Van Der Merwe Street,<br />Bela Bela, 0480<br />South Africa</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-[#D4AF37]" />
                <span>072 814 5439</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p className="text-black">&copy; {new Date().getFullYear()} The King's Court Guest Manor. All Rights Reserved.</p>
          <p className="mt-2 text-[[#D4AF37] text-black">Powered By: Kwena Moloto A.I Solutions</p>
        </div>
      </div>
    </footer>;
};
export default Footer;