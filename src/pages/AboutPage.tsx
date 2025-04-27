import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Star, Users } from "lucide-react";
const AboutPage = () => {
  const team = [{
    name: "Jonathan King",
    position: "Owner & Managing Director",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    bio: "With over 20 years in the hospitality industry, Jonathan brings passion and expertise to ensure every guest has an exceptional experience."
  }, {
    name: "Elizabeth Moore",
    position: "General Manager",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    bio: "Elizabeth oversees all aspects of the guest manor, ensuring that operations run smoothly and guests receive the highest level of service."
  }, {
    name: "Michael Chen",
    position: "Head Chef",
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    bio: "A culinary artist with international experience, Michael creates exquisite dishes that delight our guests with local and international flavors."
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
      {/* Page Header */}
      <div className="relative h-64 md:h-80 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/117175828.jpg?k=fc25b50159d732bc2468b8603e5fb947e05d1c788d67294c320fb75e90bd3f3a&o=&hp=1" alt="About The King's Court" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        <div className="container mx-auto px-4 z-10 text-white text-center">
          <h1 className="font-serif text-4xl mb-2 text-shadow text-[#d4af37] font-extrabold md:text-6xl">About Us</h1>
          <p className="max-w-3xl mx-auto text-shadow font-semibold text-3xl">Learn more about The King's Court Guest Manor and our story</p>
        </div>
      </div>
      
      {/* Story Section */}
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
      
      {/* Meet the Team */}
      <div className="py-20 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h6 className="font-medium mb-2 text-gray-950">OUR TEAM</h6>
            <h2 className="font-serif text-3xl md:text-4xl mb-4 text-zinc-950">Meet Our Team</h2>
            <p className="max-w-2xl mx-auto text-gray-950">
              Our dedicated team works tirelessly to ensure your stay at The King's Court 
              is comfortable, enjoyable, and memorable.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => <div key={index} className="scroll-animation">
                <Card className="overflow-hidden h-full">
                  <div className="h-64 overflow-hidden">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-medium mb-1">{member.name}</h3>
                    <p className="text-manor-gold mb-3">{member.position}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </CardContent>
                </Card>
              </div>)}
          </div>
        </div>
      </div>
      
      {/* Values */}
      <div className="py-20 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h6 className="font-medium mb-2 text-zinc-950">OUR VALUES</h6>
            <h2 className="font-serif text-3xl md:text-4xl mb-4 text-gray-950">What We Stand For</h2>
            <p className="max-w-2xl mx-auto text-zinc-950">
              Our core values guide everything we do at The King's Court Guest Manor.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[{
            title: "Excellence",
            description: "We strive for excellence in every aspect of our service and facilities."
          }, {
            title: "Personalization",
            description: "We believe in tailoring experiences to meet each guest's unique needs."
          }, {
            title: "Sustainability",
            description: "We are committed to sustainable practices that protect our environment."
          }, {
            title: "Community",
            description: "We support our local community and promote local culture and products."
          }].map((value, index) => <div key={index} className="scroll-animation">
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-serif text-xl font-medium mb-3 text-zinc-950">{value.title}</h3>
                    <p className="text-zinc-950">{value.description}</p>
                  </CardContent>
                </Card>
              </div>)}
          </div>
        </div>
      </div>
      
      {/* Testimonials */}
      <div className="py-20 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h6 className="font-medium mb-2 text-gray-950">TESTIMONIALS</h6>
            <h2 className="font-serif text-3xl md:text-4xl mb-4 text-zinc-950">Guest Experiences</h2>
            <p className="max-w-2xl mx-auto text-zinc-950">
              Don't just take our word for it - see what our guests have to say about their stays.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map(testimonial => <div key={testimonial.id} className="scroll-animation">
                <Card className="h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex mb-4">
                      {Array(5).fill(0).map((_, i) => <Star key={i} size={18} className={i < testimonial.rating ? "text-manor-gold" : "text-gray-300"} />)}
                    </div>
                    <p className="italic text-gray-700 mb-6 flex-1">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <div>
                        <p className="font-medium">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.location}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>)}
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
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
    </>;
};
export default AboutPage;