import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bath, Bed, Tv, Check, AirVent, Wifi } from "lucide-react";
import GuestReviews from "@/components/facilities/GuestReviews";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const RoomsPage = () => {
  const bookingUrl = "https://www.booking.com/hotel/za/the-king-39-s-court-guest-manor.en-gb.html";

  const kingSuiteImages = [
    "/lovable-uploads/b00e21c3-7777-4677-b5fd-a12561f53b41.jpg",
  ];

  const doubleRoomImages = [
    "/lovable-uploads/b6895fc9-055d-4d0a-95d5-1c34f9064797.jpg",
  ];

  return (
    <>
      <div className="relative h-64 md:h-80 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img src="/lovable-uploads/40dfed37-84c2-485d-b479-930e5c0f404c.png" alt="Rooms at The King's Court" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        <div className="container mx-auto px-4 z-10 text-white text-center">
          <h1 className="font-serif text-4xl font-bold mb-2 text-shadow text-[#d4af37] md:text-6xl">Our Rooms</h1>
          <p className="max-w-3xl mx-auto text-shadow font-semibold text-3xl">Experience luxury in our elegantly appointed rooms</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-black">
            Comfortable Accommodation is what you get at The King's Court Guest Manor in Bela Bela, 
            offering air-conditioned rooms with private bathrooms, baths, showers, and free toiletries. 
            Each room includes a work desk, TV, electric kettle, and wardrobe. 
            We have the option of the Deluxe King Suite and the Deluxe Double Room.
          </p>
        </div>

        <Tabs defaultValue="king-suite" className="max-w-6xl mx-auto bg-cyan-50">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="king-suite" className="bg-slate-900 hover:bg-slate-800 text-white mx-[16px]">Deluxe King Suite</TabsTrigger>
            <TabsTrigger value="double-room" className="bg-slate-900 hover:bg-slate-800 text-white mx-[16px]">Deluxe Double Room</TabsTrigger>
          </TabsList>

          <TabsContent value="king-suite">
            <Card>
              <CardContent className="grid md:grid-cols-2 gap-8 p-6">
                <div className="relative h-[400px] overflow-hidden rounded-lg">
                  <Carousel className="w-full h-full">
                    <CarouselContent>
                      {kingSuiteImages.map((image, index) => (
                        <CarouselItem key={index}>
                          <img src={image} alt={`King Suite View ${index + 1}`} className="w-full h-[400px] object-cover" />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-4" />
                    <CarouselNext className="right-4" />
                  </Carousel>
                </div>
                <div className="space-y-6">
                  <div>
                    <h2 className="font-serif mb-2 text-[#d4af37] text-4xl">Deluxe King Suite</h2>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span>68 m²</span>
                      <span>Pool view</span>
                      <span>6 bathrooms</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2 text-[#d4af37]">Bedrooms:</h3>
                    {[...Array(6)].map((_, idx) => <div key={idx} className="flex items-center gap-2 text-sm">
                        <Bed size={16} /> Bedroom {idx + 1}: 1 large double bed
                      </div>)}
                  </div>

                  <div>
                    <h3 className="font-medium mb-2 text-[#d4af37]">Bathroom:</h3>
                    {["Free toiletries", "Toilet", "Bath or shower", "Towels", "Toilet paper"].map((item, idx) => <div key={idx} className="flex items-center gap-2 text-sm">
                        <Check size={16} className="text-manor-gold" /> {item}
                      </div>)}
                  </div>

                  <div>
                    <h3 className="font-medium mb-2 text-[#d4af37]">Facilities:</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {["Air conditioning", "TV", "Flat-screen TV", "Electric kettle", "Wardrobe or closet"].map((facility, idx) => <div key={idx} className="flex items-center gap-2 text-sm">
                          <Check size={16} className="text-manor-gold" /> {facility}
                        </div>)}
                    </div>
                  </div>

                  <Button onClick={() => window.open(bookingUrl, '_blank')} className="w-full text-white bg-slate-900 hover:bg-slate-800 font-extrabold text-lg py-0 my-0 mx-0 px-0">
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="double-room">
            <Card>
              <CardContent className="grid md:grid-cols-2 gap-8 p-6">
                <div className="relative h-[400px] overflow-hidden rounded-lg">
                  <Carousel className="w-full h-full">
                    <CarouselContent>
                      {doubleRoomImages.map((image, index) => (
                        <CarouselItem key={index}>
                          <img src={image} alt={`Double Room View ${index + 1}`} className="w-full h-[400px] object-cover" />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-4" />
                    <CarouselNext className="right-4" />
                  </Carousel>
                </div>
                <div className="space-y-6">
                  <div>
                    <h2 className="font-serif mb-2 text-[#d4af37] text-4xl font-extrabold">Deluxe Double Room</h2>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span>40 m²</span>
                      <span>View</span>
                      <span>1 bathroom</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-2 text-[#d4af37] text-lg font-semibold">Bed:</h3>
                    <div className="flex items-center gap-2 text-sm">
                      <Bed size={16} /> 1 double bed
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-2 font-semibold text-[#d4af37] text-lg">Bathroom:</h3>
                    {["Free toiletries", "Toilet", "Bath or shower", "Towels", "Toilet paper"].map((item, idx) => <div key={idx} className="flex items-center gap-2 text-sm">
                        <Check size={16} className="text-manor-gold" /> {item}
                      </div>)}
                  </div>

                  <div>
                    <h3 className="mb-2 font-semibold text-lg text-[#d4af37]">Facilities:</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {["Air conditioning", "TV", "Flat-screen TV", "Electric kettle", "Wardrobe or closet"].map((facility, idx) => <div key={idx} className="flex items-center gap-2 text-sm">
                          <Check size={16} className="text-manor-gold" /> {facility}
                        </div>)}
                    </div>
                  </div>

                  <Button onClick={() => window.open(bookingUrl, '_blank')} className="w-full text-white bg-slate-900 hover:bg-slate-800 text-lg font-extrabold">
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-16">
          <GuestReviews />
        </div>

        <div className="w-full py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="border-t border-gray-200"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomsPage;
