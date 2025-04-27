import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Bath, BedDouble, Tv, WifiIcon } from "lucide-react";
import PopularFacilities from "@/components/facilities/PopularFacilities";
import PropertyRules from "@/components/facilities/PropertyRules";
import PropertyFAQ from "@/components/facilities/PropertyFAQ";

const FacilitiesPage = () => {
  return (
    <div className="min-h-screen">
      <div className="relative h-64 md:h-80 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img src="/lovable-uploads/b43d223f-17e2-4bd8-9de6-a757dcd2f999.png" alt="Facilities at The King's Court" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        <div className="container mx-auto px-4 z-10 text-white text-center">
          <h1 className="font-serif text-4xl font-bold mb-2 text-shadow text-[#d4af37] md:text-6xl">Our Facilities</h1>
          <p className="max-w-3xl mx-auto text-shadow text-3xl font-semibold">Experience comfort and luxury at its finest</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 bg-slate-200">
        <PopularFacilities />
        <PropertyRules />
        <PropertyFAQ />
        
        {/* Container before footer */}
        <div className="w-full py-8">
          <div className="border-t border-gray-200"></div>
        </div>
      </div>
    </div>
  );
};

export default FacilitiesPage;
