
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const reviews = [
  { category: "Staff", score: 9.0 },
  { category: "Facilities", score: 8.6 },
  { category: "Cleanliness", score: 8.9 },
  { category: "Comfort", score: 8.9 },
  { category: "Value for money", score: 8.5 },
];

const testimonials = [
  {
    name: "Tiana",
    location: "South Africa",
    quote: "The friendly staff and the cleanliness of the rooms",
  },
  {
    name: "Feeroz",
    location: "South Africa",
    quote: "The way the place was so good and the staff. Secured and also very good location.",
  },
  {
    name: "Thandeka",
    location: "South Africa",
    quote: "The place was extremely clean and value for money, the the colors and texture combination are out of this world. If you are looking for 5 start guest house at an affordable price than this is it.",
  },
];

const GuestReviews = () => {
  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <h2 className="font-serif text-3xl mb-4">Guest Reviews</h2>
        <div className="text-2xl font-bold text-manor-green mb-2">8.68</div>
        <div className="text-lg mb-8">Fabulous · 292 real reviews</div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.category}>
              <div className="flex justify-between mb-2">
                <span>{review.category}</span>
                <span className="font-bold">{review.score}</span>
              </div>
              <Progress value={review.score * 10} className="h-2" />
            </div>
          ))}
        </div>

        <div className="space-y-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <p className="italic mb-4">"{testimonial.quote}"</p>
                <div className="text-sm text-gray-600">
                  <span className="font-medium">{testimonial.name}</span> · {testimonial.location}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GuestReviews;
