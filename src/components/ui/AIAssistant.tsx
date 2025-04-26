
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send } from "lucide-react";

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "system", content: "Hello! I'm your virtual assistant. How can I help you with your stay at The King's Court Guest Manor?" }
  ]);
  const [input, setInput] = useState("");
  
  const sendMessage = () => {
    if (!input.trim()) return;
    
    // Add user message
    setMessages([...messages, { role: "user", content: input }]);
    
    // Simulate AI response
    setTimeout(() => {
      const aiResponses = [
        "I'd be happy to help you with booking a room. We have several room types available including Luxury Suites and Standard Rooms. Would you like more details?",
        "Our check-in time is 2 PM and check-out is 11 AM. If you need early check-in or late check-out, please let us know in advance.",
        "Yes, we offer free WiFi throughout the property and all rooms include breakfast.",
        "The swimming pool is open from 7 AM to 9 PM daily. Towels are provided poolside.",
        "We'd be delighted to arrange transportation for you. Please provide your arrival details and we'll take care of it."
      ];
      
      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      setMessages(prev => [...prev, { role: "system", content: randomResponse }]);
    }, 800);
    
    setInput("");
  };
  
  return (
    <>
      <Button 
        className={`fixed bottom-6 right-6 rounded-full w-14 h-14 shadow-lg ${isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-manor-green hover:bg-manor-green/90'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </Button>
      
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 sm:w-96 bg-white rounded-lg shadow-xl overflow-hidden flex flex-col z-40 border border-gray-200 animate-fade-in">
          <div className="bg-manor-green p-4 text-white">
            <h3 className="font-serif text-lg">AI Assistant</h3>
            <p className="text-sm text-gray-100">Ask me anything about The King's Court</p>
          </div>
          
          <div className="flex-1 p-4 max-h-80 overflow-y-auto space-y-4 bg-gray-50">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`${msg.role === "user" ? "ml-auto bg-manor-green text-white" : "mr-auto bg-gray-200 text-gray-800"} rounded-lg p-3 max-w-[80%]`}
              >
                {msg.content}
              </div>
            ))}
          </div>
          
          <div className="p-4 border-t border-gray-200 bg-white">
            <form 
              className="flex items-center space-x-2"
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage();
              }}
            >
              <Input
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1"
              />
              <Button type="submit" size="icon" className="bg-manor-green hover:bg-manor-green/90">
                <Send size={18} />
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AIAssistant;
