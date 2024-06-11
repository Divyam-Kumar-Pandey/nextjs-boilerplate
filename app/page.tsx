import Image from "next/image";
import Link from "next/link";

import pyncLogo from "@/public/pync_logo.png";
import whatsAppIcon from "@/public/social-whatsapp-circle-512.png";


export default function Home() {
  return ( <>
    <div className="">
      <div className="flex flex-col justify-center sm:justify-start gap-7 p-[5%] lg:p-[5%] lg:ml-[5%]">
        <Image src={pyncLogo} alt="Pync Logo" width={225} className="mx-auto sm:mx-0" />
        <div className="league-spartan-font text-[2rem] sm:text-[3rem] lg:text-[3rem] leading-[32px] sm:leading-[42px] max-w-[600px]">
          Owning your vehicle was never simpler. 
        </div>
        <div className="aleo-font text-2xl max-w-[600px]">
        We are building the one stop solution for a vehicle owner, starting with <span className="text-[#B704CD]">daily care.</span> 
        </div>
        <div>
          <div className="league-spartan-font text-xl md:text-2xl lg:text-3xl ">
          Daily care starting <span className="text-[#B704CD]">@599</span> a month! and,

          </div>
          <div className="aleo-font text-xl">
          @249 INR a month for 2 wheelers.
          </div>
          
        </div>
        <div className="flex flex-wrap gap-5 justify-center sm:justify-start">
          <Link href="https://drive.google.com/file/d/1R_RasiD_4FCw9NrVVSKif1OEzoZDsGVH/view?usp=sharing">
          <button className="bg-[#FFD994] px-4 py-5 rounded-full mt-4 open-sans-font text-xl">View monthly packages</button>
          </Link>
          {/* contact us on whatsapp 7004948643 : Abhijit Singh*/}
          <Link href="https://wa.me/917004948643">
          <button className="bg-[#000000] flex items-center gap-1 mt-4 rounded-full open-sans-font text-xl">
            <Image src={whatsAppIcon} alt="whatsApp"width={50}  className="p-0 relative left-2" />
            <div className="text-white pl-10 pr-16 py-5">Contact Us</div>
          </button>
          </Link>
          </div>
      </div>
      <div className="hidden lg:flex flex-row absolute top-0 right-0 h-full -z-10">
        <div className="h-full w-[120px] bg-[#000000]"></div>
        <div className="h-full w-[120px] bg-[#5F1B69]"></div>
        <div className="h-full w-[120px] bg-[#FFD994]"></div>
      </div>
    </div>
    </>

  );
}
