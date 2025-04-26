
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Bath, BedDouble, Shower, Tv, WifiIcon } from "lucide-react";
import GuestReviews from "@/components/facilities/GuestReviews";
import PopularFacilities from "@/components/facilities/PopularFacilities";
import PropertyRules from "@/components/facilities/PropertyRules";
import PropertyFAQ from "@/components/facilities/PropertyFAQ";

const FacilitiesPage = () => {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div className="relative h-64 md:h-80 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/117175828.jpg?k=fc25b50159d732bc2468b8603e5fb947e05d1c788d67294c320fb75e90bd3f3a&o=&hp=1" 
            alt="Facilities at The King's Court" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        <div className="container mx-auto px-4 z-10 text-white text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-2 text-shadow">Our Facilities</h1>
          <p className="text-xl max-w-3xl mx-auto text-shadow">Experience comfort and luxury at its finest</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <GuestReviews />
        <PopularFacilities />
        <PropertyRules />
        <PropertyFAQ />
      </div>
    </div>
  );
};

export default FacilitiesPage;
