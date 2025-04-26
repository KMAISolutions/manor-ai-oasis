import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const faqs = [{
  question: "Does The King's Court Guest Manor have a pool?",
  answer: "Yes, The King's Court Guest Manor features an outdoor swimming pool that is open all year round."
}, {
  question: "What type of room can I book at The King's Court Guest Manor?",
  answer: "The property offers various room types including luxury suites and standard rooms, all equipped with modern amenities."
}, {
  question: "What are the check-in and check-out times at The King's Court Guest Manor?",
  answer: "Check-in is available from 14:00 to 22:00, and check-out is from 06:00 to 10:00."
}, {
  question: "How much does it cost to stay at The King's Court Guest Manor?",
  answer: "Room rates vary depending on the season and room type. Please check the booking.com website for current rates."
}, {
  question: "What is there to do at The King's Court Guest Manor?",
  answer: "Guests can enjoy the outdoor swimming pool, BBQ facilities, and various amenities. The property is also well-located for exploring local attractions."
}, {
  question: "How far is The King's Court Guest Manor from the centre of Bela-Bela?",
  answer: "The King's Court Guest Manor is conveniently located near the centre of Bela-Bela. Contact the property directly for exact distance information."
}];
const PropertyFAQ = () => {
  return <div className="mb-16">
      <h2 className="font-serif text-3xl mb-8 text-[#d4af37]">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>)}
      </Accordion>
    </div>;
};
export default PropertyFAQ;