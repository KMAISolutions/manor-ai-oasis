
import { Card, CardContent } from "@/components/ui/card";
import { Bath, Wifi } from "lucide-react";

const facilities = {
  popular: [
    { name: "Outdoor swimming pool", icon: "outdoor-swimming-pool" },
    { name: "Free parking", icon: "free-parking" },
    { name: "Free WiFi", icon: "wifi" },
    { name: "Non-smoking rooms", icon: "non-smoking-rooms" },
    { name: "BBQ facilities", icon: "bbq-facilities" },
    { name: "Breakfast", icon: "free-parking" },
  ],
  stay: [
    { name: "Parking", icon: "free-parking" },
    { name: "Private bathroom", icon: "bath" },
    { name: "Air conditioning", icon: "air-conditioning" },
    { name: "View", icon: "view" },
    { name: "Free WiFi", icon: "wifi" },
    { name: "BBQ facilities", icon: "bbq-facilities" },
    { name: "Bath", icon: "bath" },
    { name: "Non-smoking rooms", icon: "non-smoking-rooms" },
    { name: "Flat-screen TV", icon: "flat-screen-tv" },
    { name: "Outdoor swimming pool", icon: "outdoor-swimming-pool" },
  ],
};

const PopularFacilities = () => {
  return (
    <div className="mb-16">
      <h2 className="font-serif text-3xl mb-8">Most Popular Facilities</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <Card className="col-span-full md:col-span-1">
          <CardContent className="p-6">
            <h3 className="font-serif text-xl mb-4">Popular Facilities</h3>
            <div className="grid grid-cols-2 gap-4">
              {facilities.popular.map((facility, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Wifi className="h-5 w-5 text-manor-green" />
                  <span>{facility.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-full md:col-span-2">
          <CardContent className="p-6">
            <h3 className="font-serif text-xl mb-4">Great for Your Stay</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {facilities.stay.map((facility, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Bath className="h-5 w-5 text-manor-green" />
                  <span>{facility.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PopularFacilities;
