
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bath, Bed, Tv, Check, View, AirVent, Desk, Iron, WifiIcon } from "lucide-react";

const RoomsPage = () => {
  const bookingUrl = "https://www.booking.com/hotel/za/the-king-39-s-court-guest-manor.en-gb.html";
  
  const rooms = [
    {
      id: 1,
      title: "Deluxe King Suite",
      type: "suite",
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/117177319.jpg?k=87c6a02ca9a3be5859e626bb2998483f5e66e16c3ebd6f0d56be30296940d3c5&o=&hp=1",
      price: "R 3,500",
      size: "68 m²",
      description: "The spacious suite has 6 bedrooms and 6 bathrooms with a bath and free toiletries. The suite offers air conditioning, a wardrobe, an electric kettle, a flat-screen TV, as well as pool views. The unit has 6 beds.",
      bedrooms: [
        "Bedroom 1: 1 large double bed",
        "Bedroom 2: 1 large double bed",
        "Bedroom 3: 1 large double bed",
        "Bedroom 4: 1 large double bed",
        "Bedroom 5: 1 large double bed",
        "Bedroom 6: 1 large double bed"
      ],
      bathrooms: "6",
      rating: "Comfy beds, 8.7 – Based on 137 reviews",
      bathroom: [
        "Free toiletries",
        "Toilet",
        "Bath or shower",
        "Towels",
        "Toilet paper"
      ],
      view: "Pool view",
      facilities: [
        "Air conditioning",
        "Desk",
        "TV",
        "Iron",
        "Flat-screen TV",
        "Electric kettle",
        "Wardrobe or closet"
      ]
    },
    {
      id: 2,
      title: "Deluxe Double Room",
      type: "standard",
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/117175723.jpg?k=f40dc9c0aa40beb8dca45e0e894e05a6cb960963e7acf9a8c15f2019e22c2775&o=&hp=1",
      price: "R 1,800",
      size: "40 m²",
      description: "The spacious double room provides air conditioning, a wardrobe, as well as a private bathroom featuring a bath and a shower. The unit offers 1 bed.",
      bedrooms: ["1 double bed"],
      rating: "Comfy beds, 8.7 – Based on 137 reviews",
      bathroom: [
        "Free toiletries",
        "Toilet",
        "Bath or shower",
        "Towels",
        "Toilet paper"
      ],
      view: "View",
      facilities: [
        "Air conditioning",
        "Desk",
        "TV",
        "Iron",
        "Flat-screen TV",
        "Electric kettle",
        "Wardrobe or closet"
      ]
    }
  ];

  return (
    <>
      {/* Page Header */}
      <div className="relative h-64 md:h-80 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/117177319.jpg?k=87c6a02ca9a3be5859e626bb2998483f5e66e16c3ebd6f0d56be30296940d3c5&o=&hp=1" 
            alt="Accommodation at The King's Court" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        <div className="container mx-auto px-4 z-10 text-white text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-2 text-shadow">Our Rooms</h1>
          <p className="text-xl max-w-3xl mx-auto text-shadow">Experience luxury and comfort</p>
        </div>
      </div>
      
      {/* Room Listings */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          {rooms.map((room) => (
            <div key={room.id} className="mb-16">
              <Card className="overflow-hidden">
                <div className="grid md:grid-cols-2 gap-8 p-6">
                  <div className="relative h-[400px] overflow-hidden rounded-lg">
                    <img 
                      src={room.image} 
                      alt={room.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-serif mb-4">{room.title}</h2>
                      <div className="flex flex-wrap gap-4 mb-4">
                        <span className="flex items-center gap-1 text-sm"><View size={16} /> {room.size}</span>
                        <span className="flex items-center gap-1 text-sm"><View size={16} /> {room.view}</span>
                        <span className="flex items-center gap-1 text-sm"><AirVent size={16} /> Air conditioning</span>
                        <span className="flex items-center gap-1 text-sm"><Bath size={16} /> Private bathroom</span>
                        <span className="flex items-center gap-1 text-sm"><Tv size={16} /> Flat-screen TV</span>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium mb-2">Bedrooms:</h3>
                      {room.bedrooms.map((bedroom, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <Bed size={16} /> {bedroom}
                        </div>
                      ))}
                      <p className="text-sm text-gray-600 mt-2">{room.rating}</p>
                    </div>

                    <div>
                      <h3 className="font-medium mb-2">Description:</h3>
                      <p className="text-sm text-gray-600">{room.description}</p>
                    </div>

                    <div>
                      <h3 className="font-medium mb-2">Bathroom:</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {room.bathroom.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm">
                            <Check size={16} className="text-manor-gold" /> {item}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium mb-2">Facilities:</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {room.facilities.map((facility, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm">
                            <Check size={16} className="text-manor-gold" /> {facility}
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button 
                      className="w-full bg-manor-gold hover:bg-manor-gold/90 text-white mt-4"
                      onClick={() => window.open(bookingUrl, '_blank')}
                    >
                      Book Now
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RoomsPage;
