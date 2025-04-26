
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bed, Users, Wifi, Check } from "lucide-react";

const RoomsPage = () => {
  const [selectedTab, setSelectedTab] = useState("all");
  
  const rooms = [
    {
      id: 1,
      title: "Luxury Suite",
      type: "suite",
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/117177319.jpg?k=87c6a02ca9a3be5859e626bb2998483f5e66e16c3ebd6f0d56be30296940d3c5&o=&hp=1",
      price: "R 2,500",
      description: "Our most spacious and luxurious accommodation option, featuring a king-size bed, separate living area, and premium amenities for the ultimate comfort.",
      capacity: "2 Adults",
      size: "45m²",
      amenities: [
        "King-size bed", 
        "En-suite bathroom", 
        "Separate living area", 
        "Air conditioning", 
        "Mini bar", 
        "Coffee machine", 
        "Smart TV", 
        "Free WiFi", 
        "Work desk", 
        "Premium toiletries"
      ]
    },
    {
      id: 2,
      title: "Executive Room",
      type: "standard",
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/117175723.jpg?k=f40dc9c0aa40beb8dca45e0e894e05a6cb960963e7acf9a8c15f2019e22c2775&o=&hp=1",
      price: "R 1,800",
      description: "A comfortable and elegant room featuring quality furnishings, garden views, and all the amenities needed for a pleasant stay.",
      capacity: "2 Adults",
      size: "32m²",
      amenities: [
        "Queen-size bed", 
        "Private bathroom", 
        "Garden view", 
        "Air conditioning", 
        "Mini fridge", 
        "Tea/coffee facilities", 
        "Flat-screen TV", 
        "Free WiFi", 
        "Work desk"
      ]
    },
    {
      id: 3,
      title: "Family Suite",
      type: "suite",
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/117176762.jpg?k=ecd95caa3804328a20cce8f58f18ffdf9657dd33185af4c4ba0dceec77d35d82&o=&hp=1",
      price: "R 3,200",
      description: "Perfect for families, this spacious suite features a king-size bed plus twin beds in a separate area, two bathrooms, and a comfortable lounge area.",
      capacity: "2 Adults + 2 Children",
      size: "55m²",
      amenities: [
        "King-size bed + Twin beds", 
        "Two bathrooms", 
        "Lounge area", 
        "Balcony", 
        "Air conditioning", 
        "Mini bar", 
        "Coffee machine", 
        "Smart TV", 
        "Free WiFi", 
        "Work desk", 
        "Family amenities"
      ]
    },
    {
      id: 4,
      title: "Deluxe Room",
      type: "standard",
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/117175949.jpg?k=ff56f7d3c9135b3d6fa1188116be9c0ca5dd47cdf363fddd285c0349267aed69&o=&hp=1",
      price: "R 2,100",
      description: "Offering additional space and comfort compared to our Executive Room, the Deluxe Room features premium furnishings and a private balcony.",
      capacity: "2 Adults",
      size: "38m²",
      amenities: [
        "Queen-size bed", 
        "En-suite bathroom", 
        "Private balcony", 
        "Air conditioning", 
        "Mini bar", 
        "Tea/coffee facilities", 
        "Flat-screen TV", 
        "Free WiFi", 
        "Work desk", 
        "Premium toiletries"
      ]
    },
    {
      id: 5,
      title: "Honeymoon Suite",
      type: "suite",
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/117179118.jpg?k=ba038245eeddf9ef6adf0d15d3507b80b7320396aa028a4ea7c9c776393b4008&o=&hp=1",
      price: "R 3,500",
      description: "Designed for couples celebrating special occasions, this romantic suite features a luxurious king-size bed, jacuzzi bath, and private terrace with stunning views.",
      capacity: "2 Adults",
      size: "50m²",
      amenities: [
        "King-size bed", 
        "Jacuzzi bath", 
        "Private terrace", 
        "Air conditioning", 
        "Mini bar", 
        "Coffee machine", 
        "Smart TV", 
        "Free WiFi", 
        "Work desk", 
        "Premium toiletries",
        "Complimentary sparkling wine"
      ]
    },
    {
      id: 6,
      title: "Twin Room",
      type: "standard",
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/117175102.jpg?k=072d6e51f17f544ae88991d6ab4d04e88fd23a4a3b32c81b004ce9f9a4453915&o=&hp=1",
      price: "R 1,800",
      description: "Comfortable accommodation with two twin beds, perfect for friends or colleagues traveling together.",
      capacity: "2 Adults",
      size: "32m²",
      amenities: [
        "Two twin beds", 
        "Private bathroom", 
        "Garden view", 
        "Air conditioning", 
        "Mini fridge", 
        "Tea/coffee facilities", 
        "Flat-screen TV", 
        "Free WiFi", 
        "Work desk"
      ]
    }
  ];
  
  const filteredRooms = selectedTab === "all" 
    ? rooms 
    : rooms.filter(room => room.type === selectedTab);
    
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
          <p className="text-xl max-w-3xl mx-auto text-shadow">Discover our luxurious accommodation options</p>
        </div>
      </div>
      
      {/* Room Filtering */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="font-serif text-3xl mb-4">Find Your Perfect Room</h2>
            <p className="max-w-2xl mx-auto text-gray-600 mb-8">
              Browse our selection of elegantly appointed rooms and suites, each designed with your comfort in mind.
            </p>
            
            <Tabs defaultValue="all" className="w-full max-w-md mx-auto">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="all" onClick={() => setSelectedTab("all")}>All Rooms</TabsTrigger>
                <TabsTrigger value="standard" onClick={() => setSelectedTab("standard")}>Standard</TabsTrigger>
                <TabsTrigger value="suite" onClick={() => setSelectedTab("suite")}>Suites</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          
          {/* Room Listings */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRooms.map((room) => (
              <div key={room.id} className="scroll-animation room-card">
                <Card className="overflow-hidden h-full flex flex-col">
                  <div className="relative overflow-hidden h-64">
                    <img 
                      src={room.image} 
                      alt={room.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-manor-gold text-white py-1 px-3 rounded-full">
                      {room.price} / night
                    </div>
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <h3 className="font-serif text-xl font-medium mb-2">{room.title}</h3>
                    <div className="flex items-center space-x-4 mb-3 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Users size={16} className="mr-1" />
                        {room.capacity}
                      </div>
                      <div>
                        <span>{room.size}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 line-clamp-2">{room.description}</p>
                    
                    <div className="mb-4 flex-1">
                      <h4 className="font-medium text-sm mb-2">Amenities:</h4>
                      <ul className="grid grid-cols-2 gap-x-2 gap-y-1">
                        {room.amenities.slice(0, 6).map((amenity, idx) => (
                          <li key={idx} className="flex items-start text-xs">
                            <Check size={12} className="text-manor-green mt-1 mr-1 flex-shrink-0" />
                            <span className="line-clamp-1">{amenity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex space-x-2 mt-auto">
                      <Button className="flex-1 bg-manor-green hover:bg-manor-green/90 text-white">
                        Book Now
                      </Button>
                      <Button variant="outline" className="flex-1 border-manor-green text-manor-green hover:bg-manor-green/10">
                        Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          
          {filteredRooms.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-gray-500">No rooms found matching your criteria.</p>
              <Button 
                className="mt-4 bg-manor-green hover:bg-manor-green/90 text-white"
                onClick={() => setSelectedTab("all")}
              >
                View All Rooms
              </Button>
            </div>
          )}
        </div>
      </div>
      
      {/* Room Features */}
      <div className="py-16 bg-manor-beige">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl mb-4">Room Features & Amenities</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              All of our rooms come with these standard features to ensure your comfort.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { icon: <Wifi size={24} />, title: "Free High-Speed WiFi" },
              { icon: <Bed size={24} />, title: "Premium Bedding" },
              { icon: <Check size={24} />, title: "Daily Housekeeping" },
              { icon: <Check size={24} />, title: "Air Conditioning" },
              { icon: <Check size={24} />, title: "Satellite TV" },
              { icon: <Check size={24} />, title: "In-room Safe" },
              { icon: <Check size={24} />, title: "Tea/Coffee Facilities" },
              { icon: <Check size={24} />, title: "Complimentary Toiletries" }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 text-manor-green">
                  {feature.icon}
                </div>
                <h3 className="font-medium">{feature.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Booking Policies */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl mb-4">Booking Information</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Important information about your stay at The King's Court Guest Manor.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Booking Policies",
                items: [
                  "Reservation requires credit card guarantee",
                  "72-hour cancellation policy",
                  "Special rates available for extended stays",
                  "Group booking discounts available"
                ]
              },
              {
                title: "Check-in / Check-out",
                items: [
                  "Check-in: 2:00 PM",
                  "Check-out: 11:00 AM",
                  "Early check-in available upon request",
                  "Late check-out available for a fee"
                ]
              },
              {
                title: "Additional Information",
                items: [
                  "Breakfast included in room rate",
                  "Free parking for guests",
                  "Pet-friendly rooms available (surcharge)",
                  "Airport transfers available (additional fee)"
                ]
              }
            ].map((section, index) => (
              <div key={index} className="scroll-animation">
                <Card className="h-full">
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-medium mb-4 text-manor-green">{section.title}</h3>
                    <ul className="space-y-2">
                      {section.items.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check size={16} className="text-manor-gold mr-2 mt-1 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="py-16 bg-manor-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">Ready to Book Your Stay?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-gray-100">
            Contact us directly for the best rates and special offers.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-manor-gold hover:bg-manor-gold/90 text-white px-8">
              Book Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8">
              Contact Reservations
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomsPage;
