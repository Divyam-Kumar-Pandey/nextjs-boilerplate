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
        <div className="font-bold text-8xl max-w-[60rem] my-5 leading-[5rem] tracking-tight">
          We make vehicle ownership simpler<span className="text-[#e300ff]">.</span>
        </div>
        <div className={`${montserrat.className} text-2xl max-w-[40rem] tracking-tight`}>
          Building the perfect solution for all vehicle owners so they can sit back and enjoy their drives.
        </div>
      </section>

      {/* Eco Washing Packages */}
      <section className="p-24 flex justify-between" id="eco-wash">
        <div className="text-[#414042] text-7xl font-bold max-w-[20%]">
          <span className="text-[#1e9f33]">Eco </span>
          Washing Packages
        </div>
        <div className={`${montserrat.className} text-4xl text-right max-w-[50rem] flex flex-col mt-4 justify-between items-end`}>
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
      <section id="pricing" className="flex justify-start relative p-24 bg-[#5f1b69]">
        {/* pricing cards */}
        <div className="w-[75%] h-[80vh] flex justify-between items-center bg-white rounded-2xl px-8">
          <PricingCard
            discount="33%" strikePrice="1499" price="999" period="per month per car"
            description={<></>}
            deepCleanDetails={{ count: 4, description: "deep cleans per month" }}
            ecoWashDetails={{ count: 6, description: "eco washes per week" }} />
          <div className="w-8 bg-gradient-to-r from-slate-200 from-10% to-transparent h-[75%]"></div>
          <PricingCard
            discount="20%" strikePrice="999" price="799" period="per month per car"
            description={<></>}
            deepCleanDetails={{ count: 2, description: "deep cleans per month" }}
            ecoWashDetails={{ count: 6, description: "eco washes per week" }} />
          <div className="bg-black w-[1px] my-10 h-[80%]"></div>
          <PricingCard
            discount="53%" strikePrice="499" price="235" period="per month per bike"
            description={<></>}
            deepCleanDetails={{ count: 2, description: "polishes per month" }}
            ecoWashDetails={{ count: 6, description: "eco washes per week" }} />
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
      {/* <section id="reviews" className="bg-[#fed9bf] reviews-image h-[80vh]">
            <div className="text-[#5f1b69]">What our customers say!</div>
      </section>   */}
    </div>
  );
}
