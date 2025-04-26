import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bath, Bed, Tv, Check, AirVent, Wifi } from "lucide-react";
import GuestReviews from "@/components/facilities/GuestReviews";
const RoomsPage = () => {
  const bookingUrl = "https://www.booking.com/hotel/za/the-king-39-s-court-guest-manor.en-gb.html";
  return <>
      {/* Page Header */}
      <div className="relative h-64 md:h-80 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/117177319.jpg?k=87c6a02ca9a3be5859e626bb2998483f5e66e16c3ebd6f0d56be30296940d3c5&o=&hp=1" alt="Accommodation at The King's Court" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        <div className="container mx-auto px-4 z-10 text-white text-center">
          <h1 className="font-serif text-4xl mb-2 text-shadow text-[#d4af37] font-extrabold md:text-6xl">Our Rooms</h1>
          <p className="max-w-3xl mx-auto text-shadow font-semibold text-3xl">Experience luxury in our elegantly appointed rooms</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-gray-600">
            Comfortable Accommodation is what you get at The King's Court Guest Manor in Bela Bela, 
            offering air-conditioned rooms with private bathrooms, baths, showers, and free toiletries. 
            Each room includes a work desk, TV, electric kettle, and wardrobe. 
            We have the option of the Deluxe King Suite and the Deluxe Double Room.
          </p>
        </div>

        <Tabs defaultValue="king-suite" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 bg-slate-900">
            <TabsTrigger value="king-suite" className="text-white bg-slate-800 hover:bg-slate-700 mx-[16px]">Deluxe King Suite</TabsTrigger>
            <TabsTrigger value="double-room" className="text-white bg-slate-800 hover:bg-slate-700 mx-[16px]">Deluxe Double Room</TabsTrigger>
          </TabsList>

          <TabsContent value="king-suite">
            <Card>
              <CardContent className="grid md:grid-cols-2 gap-8 p-6">
                <div className="relative h-[400px] overflow-hidden rounded-lg">
                  <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/117177319.jpg?k=87c6a02ca9a3be5859e626bb2998483f5e66e16c3ebd6f0d56be30296940d3c5&o=&hp=1" alt="Deluxe King Suite" className="w-full h-full object-cover" />
                </div>
                <div className="space-y-6">
                  <div>
                    <h2 className="font-serif text-2xl mb-2">Deluxe King Suite</h2>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span>68 m²</span>
                      <span>Pool view</span>
                      <span>6 bathrooms</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Bedrooms:</h3>
                    {[...Array(6)].map((_, idx) => <div key={idx} className="flex items-center gap-2 text-sm">
                        <Bed size={16} /> Bedroom {idx + 1}: 1 large double bed
                      </div>)}
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Bathroom:</h3>
                    {["Free toiletries", "Toilet", "Bath or shower", "Towels", "Toilet paper"].map((item, idx) => <div key={idx} className="flex items-center gap-2 text-sm">
                        <Check size={16} className="text-manor-gold" /> {item}
                      </div>)}
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Facilities:</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {["Air conditioning", "TV", "Flat-screen TV", "Electric kettle", "Wardrobe or closet"].map((facility, idx) => <div key={idx} className="flex items-center gap-2 text-sm">
                          <Check size={16} className="text-manor-gold" /> {facility}
                        </div>)}
                    </div>
                  </div>

                  <Button className="w-full bg-manor-gold hover:bg-manor-gold/90 text-white" onClick={() => window.open(bookingUrl, '_blank')}>
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="double-room">
            <Card>
              <CardContent className="grid md:grid-cols-2 gap-8 p-6 bg-slate-900">
                <div className="relative h-[400px] overflow-hidden rounded-lg text-[[#D4AF37] text-[#d4af37]">
                  <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/117175723.jpg?k=f40dc9c0aa40beb8dca45e0e894e05a6cb960963e7acf9a8c15f2019e22c2775&o=&hp=1" alt="Deluxe Double Room" className="w-full h-full object-cover" />
                </div>
                <div className="space-y-6">
                  <div>
                    <h2 className="font-serif mb-2 text-[w#D4AF37] text-[#d4af37]">Deluxe Double Room</h2>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span className="text-[[#D4AF37] text-[#d4af37]">40 m²</span>
                      <span className="text-[[#D4AF37] text-[#d4af37]">View</span>
                      <span className="text-[#d4af37]">1 bathroom</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2 text-[#d4af37]">Bed:</h3>
                    <div className="flex items-center gap-2 text-sm bg-[s#D4AF37] bg-[#d4af37]">
                      <Bed size={16} /> 1 double bed
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Bathroom:</h3>
                    {["Free toiletries", "Toilet", "Bath or shower", "Towels", "Toilet paper"].map((item, idx) => <div key={idx} className="flex items-center gap-2 text-sm">
                        <Check size={16} className="text-manor-gold" /> {item}
                      </div>)}
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Facilities:</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {["Air conditioning", "TV", "Flat-screen TV", "Electric kettle", "Wardrobe or closet"].map((facility, idx) => <div key={idx} className="flex items-center gap-2 text-sm">
                          <Check size={16} className="text-manor-gold" /> {facility}
                        </div>)}
                    </div>
                  </div>

                  <Button className="w-full bg-manor-gold hover:bg-manor-gold/90 text-white" onClick={() => window.open(bookingUrl, '_blank')}>
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
      </div>
    </>;
};
export default RoomsPage;