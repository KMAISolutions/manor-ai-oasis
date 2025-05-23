import { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Bed, Wifi, Star, Calendar, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
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
  const slides = ["/lovable-uploads/7a013118-6f29-478f-bea7-b79c84c50797.png", "/lovable-uploads/5f6280d4-717d-40f9-81fd-9042a840789f.png", "/lovable-uploads/5498925a-a717-429c-9c26-fb11adf7cc41.jpg"];
  const testimonials = [{
    id: 1,
    name: "Sarah Johnson",
    location: "Pretoria",
    quote: "The rooms were immaculate and the staff went above and beyond to make our stay special.",
    rating: 5
  }, {
    id: 2,
    name: "Michael Thompson",
    location: "Cape Town",
    quote: "A perfect blend of luxury and comfort. The pool area was a highlight for our family.",
    rating: 5
  }, {
    id: 3,
    name: "Thabo Mbeki",
    location: "Johannesburg",
    quote: "Excellent location and outstanding service. I'll definitely be returning.",
    rating: 4
  }];
  return <>
      {/* Hero Section */}
      <div className="relative h-screen min-h-[600px] flex items-center justify-center">
        <Carousel className="w-full h-full absolute inset-0">
          <CarouselContent className="my-0 mx-0 px-0 py-0">
            {slides.map((slide, index) => <CarouselItem key={index} className="h-full">
                <div className="relative h-full">
                  <img src={slide} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 hero-gradient"></div>
                </div>
              </CarouselItem>)}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
        
        <div className="container mx-auto px-4 z-10 text-white text-center">
          <h1 className="font-serif text-4xl font-bold mb-4 text-shadow text-[#d4af37] md:text-6xl">Welcome to The King's Court</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-shadow font-semibold md:text-3xl">Experience luxury accommodation in the heart of South Africa</p>
          <div className="flex gap-4 justify-center">
            <Link to="/rooms">
              <Button size="lg" className="text-white font-extrabold text-lg bg-slate-900 hover:bg-slate-800 px-[4px] py-[25px]">
                View Our Rooms
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-lg font-extrabold bg-slate-900 hover:bg-slate-800 text-white px-[3px] py-[22px]">
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
                <Button className="text-white font-extrabold text-lg bg-slate-800 hover:bg-slate-700">
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
            <h6 className="text-[#D4AF37] mb-2 font-bold text-3xl">ACCOMMODATION</h6>
            <h2 className="font-serif text-3xl mb-4 md:text-2xl font-semibold">Our Elegant Rooms</h2>
            <p className="max-w-2xl mx-auto text-black mb-8">
              Comfortable Accommodation is what you get at The King's Court Guest Manor in Bela Bela, 
              offering air-conditioned rooms with private bathrooms, baths, showers, and free toiletries. 
              Each room includes a work desk, TV, electric kettle, and wardrobe. 
              We have the option of the Deluxe King Suite and the Deluxe Double Room.
            </p>
            <Link to="/rooms">
              <Button variant="outline" className="border-[#D4AF37] text-white text-lg font-extrabold bg-slate-900 hover:bg-slate-800">
                View Rooms
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Facilities Section */}
      <div className="py-[16px] bg-slate-200">
        <div className="container mx-auto px-[15px] py-0">
          <div className="text-center mb-12">
            <h6 className="text-[#D4AF37] mb-2 text-3xl font-extrabold">OUR FACILITIES</h6>
            <h2 className="font-serif text-3xl mb-4 md:text-2xl font-semibold">Amenities & Services</h2>
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
          <Button variant="outline" className="border-[#D4AF37] text-white text-lg font-extrabold bg-slate-900 hover:bg-slate-800 my-[18px] py-0 mx-0">
            View More
          </Button>
        </Link>
      </div>
      
      {/* Testimonials Section */}
      <div className="py-[28px] bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h6 className="mb-2 text-[#d4af37] text-3xl font-extrabold">OUR TESTIMONIALS</h6>
            <h2 className="font-serif text-3xl mb-4 text-[#d4af37] md:text-2xl">What Our Guests Say</h2>
            <p className="max-w-2xl mx-auto text-white text-lg">
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
      
      {/* Container before footer */}
      <div className="w-full py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="border-t border-gray-200"></div>
        </div>
      </div>
    </>;
};
export default HomePage;