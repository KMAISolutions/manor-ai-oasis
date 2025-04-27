import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Bed, Wifi, Car, MapPin, Star } from "lucide-react";

const AboutPage = () => {
  return (
    <>
      <div className="relative h-64 md:h-80 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img src="/lovable-uploads/7bb1a59b-d87d-48f0-be1d-7dbc4a480345.png" alt="About The King's Court" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        <div className="container mx-auto px-4 z-10 text-white text-center">
          <h1 className="font-serif text-4xl mb-2 text-shadow text-[#d4af37] font-extrabold md:text-6xl">About Us</h1>
          <p className="max-w-3xl mx-auto text-shadow font-semibold text-3xl">Learn more about The King's Court Guest Manor and our story</p>
        </div>
      </div>
      
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h6 className="text-manor-gold mb-2 text-4xl text-center font-extrabold mx-0 px-0 py-0">OUR STORY</h6>
              <h2 className="font-serif text-3xl md:text-4xl mb-6 font-semibold text-center">The King's Court Legacy</h2>
              <p className="mb-4 text-black text-center">
                Established in 1998, The King's Court Guest Manor began as a vision to create a luxury retreat 
                that showcases the best of South African hospitality. Our historic property, once the residence 
                of a prominent local family, has been carefully restored and transformed into the elegant 
                guest manor you see today.
              </p>
              <p className="mb-4 text-center text-black">
                Over the years, we have welcomed guests from around the world, providing them with 
                exceptional service and creating memorable experiences. Our commitment to excellence has 
                earned us numerous awards and recognition in the hospitality industry.
              </p>
              <p className="mb-6 text-black text-center">
                Today, The King's Court continues to uphold its tradition of luxury and warm hospitality, 
                while embracing modern amenities and sustainable practices to ensure a comfortable stay 
                for our guests and a positive impact on our community.
              </p>
              <div className="flex gap-4">
                <Button className="text-white bg-slate-900 hover:bg-slate-800 text-lg font-extrabold">
                  Book Your Stay
                </Button>
                <Link to="/contact">
                  <Button variant="outline" className="border-manor-green bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-lg">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            <div>
              <img alt="The King's Court History" className="rounded-lg shadow-lg w-full h-auto" src="/lovable-uploads/d03802bb-11bb-4e90-a4fe-9f15de4f1454.jpg" />
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Bed className="text-[#d4af37] w-8 h-8 mr-3" />
                  <h3 className="font-serif text-xl font-semibold">Comfortable Accommodation</h3>
                </div>
                <p className="text-gray-600">
                  The King's Court Guest Manor in Bela Bela offers air-conditioned rooms with private bathrooms, 
                  baths, showers, and free toiletries. Each room includes a work desk, TV, electric kettle, and wardrobe.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Wifi className="text-[#d4af37] w-8 h-8 mr-3" />
                  <h3 className="font-serif text-xl font-semibold">Exceptional Facilities</h3>
                </div>
                <p className="text-gray-600">
                  Guests enjoy a year-round outdoor swimming pool and free WiFi. 
                  The property features barbecue facilities and free on-site private parking.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="text-[#d4af37] w-8 h-8 mr-3" />
                  <h3 className="font-serif text-xl font-semibold">Prime Location</h3>
                </div>
                <p className="text-gray-600">
                  Located 15 km from Sondela Nature Reserve, 18 km from Bothasvley Nature Reserve, 
                  and 48 km from Zebula Golf Course. Nearby attractions include Combretum Game Park (37 km) 
                  and Elements Private Golf Reserve (24 km).
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Star className="text-[#d4af37] w-8 h-8 mr-3" />
                  <h3 className="font-serif text-xl font-semibold">Guest Satisfaction</h3>
                </div>
                <p className="text-gray-600">
                  Highly rated for room cleanliness, location, and attentive staff. 
                  Couples particularly like the location — they rated it 8.9 for a two-person trip.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="py-20 text-white bg-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl mb-6 text-[#d4af37] font-extrabold md:text-5xl">Ready to Experience The King's Court?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-gray-100 font-semibold text-lg">
            Book your stay today and discover why our guests keep coming back.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="text-white px-8 bg-slate-800 hover:bg-slate-700 text-lg font-extrabold">
              Book Now
            </Button>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white px-8 bg-slate-800 hover:bg-slate-700 text-lg font-extrabold">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="border-t border-gray-200"></div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
