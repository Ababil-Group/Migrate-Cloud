import FadeInLeftWithSlowBounce from "@/animation_wrappers/FadeInLeftWithSlowBounce";
import FadeInRightWithSlowBounce from "@/animation_wrappers/FadeInRightWithSlowBounce ";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const GetInTouch = () => {
  return (
    <section className="py-20">
      <div className="container grid max-w-[1100px] grid-cols-1 gap-10 lg:grid-cols-2">
        {/* ==== LEFT SECTION ==== */}
        <FadeInLeftWithSlowBounce className="rounded-3xl bg-[#F3F6F3] p-8">
          <div className="flex h-full flex-col items-start justify-center gap-5">
            <h2 className="text-4xl font-bold">Contact</h2>
            <p className="font-semibold">
              For any questions you didn&apos;t find an answer to, feel free to
              reach out, and we&apos;ll explain everything in detail.
            </p>

            {/* ==== CONTACT DETAILS ==== */}
            <div className="w-full space-y-4">
              {/* Email */}
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-xl text-primary" />
                <p className="font-semibold">info@migratecloud.eu</p>
              </div>

              {/* Address list */}
              {[
                {
                  country: "UAE",
                  address:
                    "Level 5, One JLT Tower 1 - Jumeirah Lake Towers - Dubai - United Arab Emirates",
                },
                {
                  country: "UK",
                  address:
                    "15 Friars Street, Ipswich, Suffolk, England, IP1 1TD",
                },
                {
                  country: "South Africa",
                  address: "Matroosfontein, Cape Town, 7490, South Africa",
                },
                {
                  country: "Bangladesh",
                  address:
                    "House: 12, Road: 3, Sonargaon Janapath Road, Uttara, Sector: 12, Dhaka",
                },
                {
                  country: "Nepal",
                  address: "Bagbazar, Kathmandu 44600",
                },
                {
                  country: "Sri Lanka",
                  address:
                    "CBD Business Centre, 41 Janadhipathi Mawatha, Colombo",
                },
                {
                  country: "India",
                  address:
                    "A M Business Centre, 4610 Main Bazar Rd, near ICICI ATM, Shora Kothi, Kaseru Walan, Paharganj, New Delhi, Delhi 110055",
                },
                {
                  country: "Pakistan",
                  address: "Plot No. 08, I 8 Markaz, I-8, Islamabad",
                },
                {
                  country: "Kuwait",
                  address:
                    "Nouf Tower, Sharq Block, Jaber Al-Mubarak St, Kuwait City 15300, Kuwait",
                },
                {
                  country: "Malaysia",
                  address:
                    "Jalan Kiara, Mont Kiara, 50480, Kuala Lumpur, Wilayah Persekutuan, Kuala Lumpur, Malaysia",
                },
                {
                  country: "Oman",
                  address:
                    "Grand Business Center, Building No. 4, Muscat Grand Mall, Dauhat Al Adab St, South 136, Oman",
                },
                {
                  country: "Qatar",
                  address:
                    "Barwa Towers, C Ring Road, Al Saad Road, Doha, Qatar",
                },
                {
                  country: "Saudi Arabia",
                  address:
                    "Level 6, North Wing, Gate D, Al Akaria Plaza, Riyadh, Saudi Arabia",
                },
                {
                  country: "Singapore",
                  address: "10 Pasir Panjang Rd, Singapore 117438",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex w-full items-start gap-2 text-[12px]"
                >
                  {/* Left side (icon + country) */}
                  <div className="flex min-w-[120px] items-start gap-2 font-bold">
                    <FaMapMarkerAlt className="shrink-0 text-xl text-primary" />
                    <span>{item.country}:</span>
                  </div>

                  {/* Right side (address) */}
                  <p className="text-[12px] font-semibold leading-snug">
                    {item.address}
                  </p>
                </div>
              ))}
            </div>

            {/* Opening Hours */}
            <p className="pt-2 font-semibold">
              Opening hours: Mon - Fri 8:00 AM - 4:00 PM
            </p>
          </div>
        </FadeInLeftWithSlowBounce>

        {/* ==== RIGHT SECTION ==== */}
        <FadeInRightWithSlowBounce className="space-y-5">
          <h2 className="text-2xl font-bold">
            Contact Us for Expert Assistance Have Questions? We’re Here to Help!
          </h2>

          <form className="space-y-3" action="">
            <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
              <Input type="text" placeholder="First name" required />
              <Input type="text" placeholder="Last name" required />
            </div>

            <Input type="text" placeholder="Company name" required />
            <Input type="email" placeholder="Email address" required />
            <Input type="tel" placeholder="Mobile number" required />
            <Textarea placeholder="Enter a message" rows={5} required />

            <div>
              <Button className="bg-secondary">Send inquiry</Button>
            </div>
          </form>
        </FadeInRightWithSlowBounce>
      </div>
    </section>
  );
};

export default GetInTouch;
