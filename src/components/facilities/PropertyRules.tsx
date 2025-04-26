import { Card, CardContent } from "@/components/ui/card";
const PropertyRules = () => {
  return <div className="mb-16">
      <h2 className="font-serif mb-8 text-[#d4af37] text-center text-3xl font-extrabold">House Rules:</h2>
      <Card>
        <CardContent className="p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-medium mb-4 text-[s#D4AF37] text-[#d4af37]">Check-in/out Times:</h3>
              <ul className="space-y-2">
                <li>Check-in: From 14:00 to 22:00</li>
                <li className="bg-white">Check-out: From 06:00 to 10:00</li>
              </ul>

              <h3 className="font-medium text-lg mt-6 mb-4 text-[#d4af37]">Cancellation Policy:</h3>
              <p className="text-gray-600">
                Cancellation and prepayment policies vary according to accommodation type. 
                Please check the conditions of your required option on booking.com.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-lg mb-4 text-[#d4af37]">Important Information:</h3>
              <ul className="space-y-4">
                <li>
                  <span className="font-medium text-[#d4af37]">Damage Deposit:</span>
                  <p className="text-gray-600">A damage deposit of ZAR 500 is required on arrival (cash payment).</p>
                </li>
                <li>
                  <span className="font-medium text-[#d4af37]">Children:</span>
                  <p className="text-gray-600">Children of any age are welcome.</p>
                </li>
                <li>
                  <span className="font-medium text-[#d4af37]">Pets:</span>
                  <p className="text-gray-600">Pets are not allowed.</p>
                </li>
                <li>
                  <span className="font-medium text-[#d4af37]">Smoking:</span>
                  <p className="text-gray-600">Smoking is not allowed.</p>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>;
};
export default PropertyRules;