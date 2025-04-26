import { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Bed, Wifi, Star, Calendar, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";
const HomePage = () => {
  const animatedElements = useRef<HTMLElement[]>([]);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1
    });
    document.querySelectorAll('.scroll-animation').forEach(el => {
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  const bookingUrl = "https://www.booking.com/hotel/za/the-king-39-s-court-guest-manor.en-gb.html";
  const rooms = [{
    id: 1,
    title: "Luxury Suite",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/117177319.jpg?k=87c6a02ca9a3be5859e626bb2998483f5e66e16c3ebd6f0d56be30296940d3c5&o=&hp=1",
    price: "R 2,500",
    description: "Spacious suite with a king-size bed and luxury amenities.",
    features: ["King-size bed", "En-suite bathroom", "Air conditioning", "Mini bar"]
  }, {
    id: 2,
    title: "Executive Room",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/117175723.jpg?k=f40dc9c0aa40beb8dca45e0e894e05a6cb960963e7acf9a8c15f2019e22c2775&o=&hp=1",
    price: "R 1,800",
    description: "Comfortable room with quality furnishings and garden views.",
    features: ["Queen-size bed", "Private bathroom", "Garden view", "Work desk"]
  }, {
    id: 3,
    title: "Family Suite",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/117176762.jpg?k=ecd95caa3804328a20cce8f58f18ffdf9657dd33185af4c4ba0dceec77d35d82&o=&hp=1",
    price: "R 3,200",
    description: "Spacious suite perfect for families with separate living area.",
    features: ["King-size bed + Twin beds", "Two bathrooms", "Lounge area", "Balcony"]
  }];
  const testimonials = [{
    id: 1,
    name: "Sarah M.",
    location: "United Kingdom",
    quote: "The King's Court exceeded all my expectations. The service was impeccable and the rooms luxurious.",
    rating: 5
  }, {
    id: 2,
    name: "David L.",
    location: "Australia",
    quote: "Beautiful gardens, excellent food, and the most comfortable bed I've ever slept in. Will definitely return!",
    rating: 5
  }, {
    id: 3,
    name: "Maria J.",
    location: "Germany",
    quote: "A truly peaceful retreat with wonderful staff who made our stay special. The attention to detail was remarkable.",
    rating: 5
  }];
  return <>
      {/* Hero Section */}
      <div className="relative h-screen min-h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img src="/lovable-uploads/5f6280d4-717d-40f9-81fd-9042a840789f.png" alt="The King's Court Guest Manor" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 text-white text-center">
          <img alt="Kings Court Logo" src="/lovable-uploads/a59c40a4-3ed0-460b-b037-903a2cc0ba5e.jpg" className="w-48 mx-auto mb-6 object-fill" />
          <h1 className="font-serif text-4xl font-bold mb-4 text-shadow text-[#d4af37] md:text-6xl">Welcome to The King's Court</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-shadow">Experience luxury accommodation in the heart of South Africa</p>
          <div className="flex gap-4 justify-center">
            <Link to="/rooms">
              <Button size="lg" className="text-white px-8 py-6 font-extrabold text-lg bg-slate-900 hover:bg-slate-800">
                View Our Rooms
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white px-8 py-6 text-lg font-extrabold text-zinc-50 bg-slate-900 hover:bg-slate-800">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Quick Info Section */}
      <div className="my-0 py-[25px] bg-slate-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="flex flex-col items-center p-4">
              <Bed size={32} className="text-manor-gold mb-2 bg-[D]" />
              <p className="text-sm py-0 text-black md:text-lg">Luxury Rooms</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <Wifi size={32} className="text-manor-gold mb-2" />
              <p className="text-sm text-black md:text-lg">Free WiFi</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <Calendar size={32} className="text-manor-gold mb-2" />
              <p className="text-sm text-black md:text-lg">Event Facilities</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <MapPin size={32} className="text-manor-gold mb-2" />
              <p className="text-sm text-black md:text-lg">Prime Location</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* About Section */}
      <div className="py-[32px] bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="scroll-animation">
              <img alt="The King's Court Building" className="rounded-lg shadow-lg w-full h-auto" src="/lovable-uploads/5498925a-a717-429c-9c26-fb11adf7cc41.jpg" />
            </div>
            <div className="scroll-animation">
              <h2 className="font-serif text-3xl mb-6 text-[#d4af37] text-center md:text-4xl">A Luxurious Escape in Bela-Bela South Africa</h2>
              <p className="mb-6 text-white">
                The King's Court Guest Manor offers a perfect blend of comfort, luxury, and warm hospitality. 
                Our beautiful property provides a tranquil retreat while being conveniently located 
                close to major attractions.
              </p>
              <p className="mb-8 text-white">
                With meticulously designed rooms, exceptional dining options, and personalized service, 
                we ensure that every guest experiences the best of South African hospitality.
              </p>
              <Link to="/about">
                <Button className="text-white bg-slate-900 hover:bg-slate-800 font-extrabold text-lg">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Rooms Section */}
      <div className="bg-slate-200 py-[35px] px-0 mx-0 my-0 rounded-md">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h6 className="text-[#D4AF37] mb-2 text-5xl font-bold">ACCOMMODATION</h6>
            <h2 className="font-serif text-3xl md:text-4xl mb-4">Our Elegant Rooms</h2>
            <p className="max-w-2xl mx-auto text-black">
              Comfortable Accommodation is what you get at The King's Court Guest Manor in Bela Bela, 
              offering air-conditioned rooms with private bathrooms, baths, showers, and free toiletries. 
              Each room includes a work desk, TV, electric kettle, and wardrobe. 
              We have the option of the Deluxe King Suite and the Deluxe Double Room.
            </p>
          </div>
        </div>
      </div>
      
      {/* Facilities Section */}
      <div className="py-[16px] bg-slate-200">
        <div className="container mx-auto px-[15px] py-0">
          <div className="text-center mb-12">
            <h6 className="text-[#D4AF37] mb-2 text-5xl font-bold">OUR FACILITIES</h6>
            <h2 className="font-serif text-3xl md:text-4xl mb-4">Amenities & Services</h2>
            <p className="max-w-2xl mx-auto text-black">
              We offer a range of facilities and services to make your stay comfortable and memorable.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[{
            icon: <Wifi size={28} />,
            title: "Free WiFi"
          }, {
            icon: <Users size={28} />,
            title: "Conference Facilities"
          }, {
            icon: <Calendar size={28} />,
            title: "Event Space"
          }, {
            icon: <Star size={28} />,
            title: "Swimming Pool"
          }, {
            icon: <Star size={28} />,
            title: "Restaurant"
          }, {
            icon: <Star size={28} />,
            title: "Daily Housekeeping"
          }, {
            icon: <Star size={28} />,
            title: "Garden Areas"
          }, {
            icon: <Star size={28} />,
            title: "Airport Transfers"
          }].map((item, index) => <div key={index} className="scroll-animation">
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="text-manor-gold mb-4 flex justify-center">{item.icon}</div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                  </CardContent>
                </Card>
              </div>)}
          </div>
        </div>
      </div>
      
      <div className="text-center mt-8">
        <Link to="/facilities">
          <Button variant="outline" className="border-[#D4AF37] text-white text-lg font-extrabold bg-slate-900 hover:bg-slate-800">
            View More
          </Button>
        </Link>
      </div>
      
      {/* Testimonials Section */}
      <div className="py-[28px] bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h6 className="font-medium mb-2 text-[#d4af37] text-5xl">OUR TESTIMONIALS</h6>
            <h2 className="font-serif text-3xl mb-4 text-[#d4af37] md:text-4xl">What Our Guests Say</h2>
            <p className="max-w-2xl mx-auto text-white">
              Read about the experiences of guests who have stayed at The King's Court Guest Manor.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map(testimonial => <div key={testimonial.id} className="scroll-animation">
                <Card className="h-full">
                  <CardContent className="p-6 flex flex-col h-full bg-slate-200">
                    <div className="flex mb-4">
                      {Array(5).fill(0).map((_, i) => <Star key={i} size={18} className={i < testimonial.rating ? "text-manor-gold" : "text-gray-300"} />)}
                    </div>
                    <p className="italic mb-6 flex-1 text-black">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <div>
                        <p className="font-medium text-black">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.location}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>)}
          </div>
        </div>
      </div>
    </>;
};
export default HomePage;