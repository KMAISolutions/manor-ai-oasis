import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Message Sent",
      description: "Thank you for your message. We will respond shortly."
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  return (
    <>
      {/* Page Header */}
      <div className="relative h-64 md:h-80 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/117174162.jpg?k=306f853bd5763956add54358df2126e07fcd3f192a1d24c53935d112e7519c7b&o=&hp=1" alt="Contact The King's Court" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        <div className="container mx-auto px-4 z-10 text-white text-center">
          <h1 className="font-serif text-4xl mb-2 text-shadow font-extrabold text-[#d4af37] md:text-6xl">Contact Us</h1>
          <p className="max-w-3xl mx-auto text-shadow font-semibold text-3xl">Get in touch with The King's Court Guest Manor</p>
        </div>
      </div>
      
      {/* Contact Info & Form Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl mb-6 font-extrabold text-[#d4af37]">Get in Touch</h2>
              <p className="mb-8 text-black">
                Whether you have a question about our accommodations, want to make a reservation, 
                or need assistance with planning your visit, our friendly staff is here to help.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="flex flex-col justify-center">
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6 flex items-start">
                      <div className="bg-slate-900 text-white p-3 rounded-full mr-4">
                        <Phone size={24} />
                      </div>
                      <div>
                        <h3 className="font-serif mb-2 text-[#d4af37] font-normal text-2xl">Phone</h3>
                        <p className="text-gray-600">072 814 5439</p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6 flex items-start">
                      <div className="bg-slate-900 text-white p-3 rounded-full mr-4">
                        <Mail size={24} />
                      </div>
                      <div>
                        <h3 className="font-serif mb-2 text-2xl font-extrabold text-[#d4af37]">Email</h3>
                        <p className="text-gray-600">info@kingscourt.co.za</p>
                        <p className="text-gray-600">reservations@kingscourt.co.za</p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6 flex items-start">
                      <div className="bg-slate-900 text-white p-3 rounded-full mr-4">
                        <MapPin size={24} />
                      </div>
                      <div>
                        <h3 className="font-serif mb-2 text-2xl text-[#d4af37] font-extrabold">Address</h3>
                        <p className="text-gray-600">
                          70 Van Der Merwe Street<br />
                          Bela Bela, 0480<br />
                          Bela-Bela, South Africa
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="scroll-animation">
                <Card className="overflow-hidden">
                  <div className="bg-manor-green p-6 text-white">
                    <h2 className="font-serif text-2xl">Send Us a Message</h2>
                    <p className="text-gray-100">We'll get back to you as soon as possible</p>
                  </div>
                  <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Your Name</Label>
                          <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input id="email" name="email" value={formData.email} onChange={handleChange} type="email" placeholder="john@example.com" required />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+27 12 345 6789" />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="subject">Subject</Label>
                          <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="Booking Inquiry" required />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message">Your Message</Label>
                        <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="How can we help you?" rows={5} required />
                      </div>
                      
                      <Button className="w-full bg-manor-green hover:bg-manor-green/90 text-white">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Map Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif mb-4 text-5xl font-extrabold text-[#d4af37]">Find Us</h2>
            <p className="max-w-2xl mx-auto text-black text-base font-semibold">
              Located in a prime location with easy access to major attractions.
            </p>
          </div>
          
          <div className="h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.744774731891!2d28.289444!3d-24.880833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ec23a8b6c6b8b45%3A0x1b0f2b7b8b8b8b8b!2s70%20Van%20Der%20Merwe%20St%2C%20Bela-Bela%2C%200480!5e0!3m2!1sen!2sza!4v1619180021302!5m2!1sen!2sza"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy">
            </iframe>
          </div>
        </div>
      </div>
      
      {/* Container before footer */}
      <div className="w-full py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="border-t border-gray-200"></div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
