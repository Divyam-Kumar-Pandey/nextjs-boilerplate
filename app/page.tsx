import Image from "next/image";
import Link from "next/link";

import pyncLogo from "@/public/pync_logo.png";
import whatsAppIcon from "@/public/dashboard/whatsapp_transparent.png";
import besidePricing from '@/public/beside-pricing.png'
import { SERVICE_DOC_URL } from '@/lib/constants';

import { Montserrat } from "next/font/google";
import PricingCard from "@/components/PricingCard";
const montserrat = Montserrat({ subsets: ["latin"] })

export default function Home() {
  return (
    <div className="w-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="hero-image p-24 text-black relative" id="hero-section">
        <Image src={pyncLogo} alt="pync-logo" height={150} />
        <Link href='https://wa.me/919876543210' target='_blank' className='absolute top-12 right-0 bg-[#49d660] h-16 w-24 rounded-l-full flex items-center pl-3 cursor-pointer'>
          <Image src={whatsAppIcon} alt='whatsapp' width={60} height={60} />
        </Link>
        <div className="font-bold text-8xl max-w-[70%] my-5 leading-[5rem] tracking-tight">
          We make vehicle ownership simpler<span className="text-[#e300ff]">.</span>
        </div>
        <div className={`${montserrat.className} text-2xl max-w-[44%] tracking-tight`}>
          Building the perfect solution for all vehicle owners so they can sit back and enjoy their drives.
        </div>
      </section>

      {/* Eco Washing Packages */}
      <section className="p-24 flex justify-between" id="eco-wash">
        <div className="text-[#414042] text-7xl font-bold max-w-[20%]">
          <span className="text-[#1e9f33]">Eco </span>
          Washing Packages
        </div>
        <div className={`${montserrat.className} text-4xl text-right max-w-[50%] flex flex-col mt-4 justify-between items-end`}>
          <div><span>Daily care service starting with</span>
            <div className="font-extrabold">
              <span className="text-[#e300ff]">Rs. 599/month </span>
              <span className="text-[#575763]">for 4 wheelers and</span>
            </div>
            <div className="font-extrabold">
              <span className="text-[#e300ff]">Rs. 249/month </span>
              <span className="text-[#575763]">for 2 wheelers.</span>
            </div></div>
          <button className="btn text-2xl font-normal bg-[#ffce75] w-[80%] my-16">View Monthly Packages</button>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="flex justify-end relative p-24 pt-0">
        <Image src={besidePricing} alt="car-care" height={650} quality={100} className="absolute -left-28" />
        <div className="flex flex-col w-[50%] items-center">
          <PricingCard
            monthlyPrice={"235 INR"}
            pricingDescription="PER MONTH FOR 2 WHEELERS"
            color="#46719c"
            description={
              <>
                <span>6 days per week</span>
                <span>2 polishes in a month</span>
              </>
            }
            cta={true}
          />
          <PricingCard
            monthlyPrice={"799 INR"}
            pricingDescription="PER MONTH FOR CAR"
            color="#431e63"
            description={
              <>
                <span>6 days per week</span>
                <span>2 deep cleans in a month</span>
              </>
            }
            cta={true}
          />
          <PricingCard
            monthlyPrice={"999 INR"}
            pricingDescription="PER MONTH FOR CAR"
            color="#7b6e24"
            description={
              <>
                <span>6 days per week</span>
                <span>4 deep cleans in a month</span>
              </>
            }
            cta={true}
          />
          <PricingCard
            monthlyPrice="Services"
            pricingDescription="FOR EVERY CUSTOMER"
            color="#000000"
            description={
              <>
                <span>24x7 support</span>
                <span>Repairs & damages</span>
                <span>Detailing & accessories</span>
                <span>Used vehicle sale</span>
              </>
            }
            cta={false}
          />
        </div>
      </section>

      {/* Reach out to us */}
      <section id="reach-out" className="beside-contact p-24 flex flex-col">
        <span className="text-8xl text-black mb-10 font-bold max-w-[50%] leading-[5rem] tracking-tight">
          You get the car, we get the <span className="text-[#e300ff]">care</span>!
        </span>
        <div className={`${montserrat.className} text-2xl max-w-[50%] flex flex-col gap-5 tracking-tight`}>
        <span>Give your vehicle the daily care it deserves by starting your Pync journey. If you&apos;ve got queries, we&apos;ve got the time to address them.</span> 
        <span>Simply scan the QR code, text us on Phone number, or email us at email ID. We&apos;re here for you!</span>
        </div>
      </section>

      {/* Customer Reviews */}
      <section id="reviews" className="bg-[#fed9bf] reviews-image h-[80vh]">
            <div className="text-[#5f1b69]">What our customers say!</div>
      </section>  
    </div>
  );
}
