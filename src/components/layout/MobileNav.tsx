import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3
      }
    }
  };
  const menuItems = [{
    path: "/",
    label: "Home"
  }, {
    path: "/about",
    label: "About"
  }, {
    path: "/rooms",
    label: "Rooms"
  }, {
    path: "/facilities",
    label: "Facilities"
  }, {
    path: "/contact",
    label: "Contact"
  }];
  return <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)} className="text-white hover:bg-white/10">
        <Menu size={24} />
      </Button>

      <AnimatePresence>
        {isOpen && <motion.div initial="closed" animate="open" exit="closed" variants={menuVariants} className="fixed inset-0 bg-slate-900/95 z-50">
            <div className="container mx-auto px-4 py-6">
              <div className="flex justify-between items-center mb-8">
                <img alt="Kings Court Logo" className="h-12" src="/lovable-uploads/33fe452e-d493-45dd-ba72-99ebc028158d.jpg" />
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-white hover:bg-white/10">
                  <X size={24} />
                </Button>
              </div>
              
              <nav className="flex flex-col space-y-4">
                {menuItems.map(item => <Link key={item.path} to={item.path} onClick={() => setIsOpen(false)} className="text-white text-lg font-medium py-2 px-4 rounded-lg hover:bg-white/10 transition-colors">
                    {item.label}
                  </Link>)}
                
                <div className="flex gap-4 pt-4">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#D4AF37] transition-colors">
                    <motion.div whileHover={{
                  scale: 1.1
                }} className="p-2 rounded-full bg-white/10">
                      <img src="/instagram.svg" alt="Instagram" className="w-6 h-6" />
                    </motion.div>
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#D4AF37] transition-colors">
                    <motion.div whileHover={{
                  scale: 1.1
                }} className="p-2 rounded-full bg-white/10">
                      <img src="/facebook.svg" alt="Facebook" className="w-6 h-6" />
                    </motion.div>
                  </a>
                </div>
              </nav>
            </div>
          </motion.div>}
      </AnimatePresence>
    </div>;
};
export default MobileNav;