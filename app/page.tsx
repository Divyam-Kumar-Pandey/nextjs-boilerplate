import Image from "next/image";
import Link from "next/link";

import pyncLogo from "@/public/pync_logo.png";
import whatsAppIcon from "@/public/social-whatsapp-circle-512.png";


export default function Home() {
  return ( <>
    <div className="">
      <div className="flex flex-col justify-center sm:justify-start gap-7 p-[5%] lg:p-[5%] lg:ml-[5%]">
        <Image src={pyncLogo} alt="Pync Logo" width={225} className="mx-0" />
        <div className="league-spartan-font text-[2rem] sm:text-[3rem] lg:text-[3rem] leading-[32px] sm:leading-[42px] max-w-[600px]">
          Owning your vehicle was never simpler. 
        </div>
        <div className="aleo-font text-2xl max-w-[600px]">
        We are building the one stop solution for a vehicle owner, starting with <span className="text-[#B704CD]">daily care.</span> 
        </div>
        <div>
          <div className="league-spartan-font text-2xl md:text-2xl lg:text-3xl ">
          Daily care starting <span className="text-[#B704CD]">@599</span> a month! and,

          </div>
          <div className="aleo-font text-xl">
          @249 INR a month for 2 wheelers.
          </div>
          
        </div>
        <div className="flex flex-wrap gap-5 justify-center sm:justify-start">
          <Link href="https://pync.s3.ap-south-1.amazonaws.com/public/FILE/Pync.pdf?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCmFwLXNvdXRoLTEiSDBGAiEA4cPFrCXzjlk9mPheytHa313C%2Bb1UjYYhVROQ4428aU0CIQDXEbIgU9sJaxSYi15ZvDR5ALsv6%2FohmFk%2BXQ9as38nfSr9Agg%2FEAAaDDc2NzM5ODA2ODI3NiIMLkGEQt7vxcV38iVMKtoCEaVsbwbR3nEvfB1R6foJiK3KJGO%2Fh%2BnT4isdNeY9De37FEVGU0dex%2Fk8lKMsv%2FXU3Iv%2F1vY4DCwYlHH3nuIy%2BF4Q22DE8zmp8W%2BJzZL9cAB3pfc3Pp%2BqxLrgGIJSUNi%2Bz2QMQd2%2FvakSsxubtfF7jz%2F3Ol5gNkxwyYryAX%2FTvoOeG8BssNLnvCXFcNYPVISUnWPzZzIgfguiRmuSF8FE1Z5OIL6FHo%2F9cp7SxygcJK8MKITZllILr31tzDKnRy87O%2FzNQUY1Tx6cNWsVIReHviMjkfHGKrxxS%2FC6tdYJBMQHszS5yQMegdgeTIxTA9%2FsoS4W%2BdClApdh71U3jP%2Bq3FtI%2BM0%2F1s8OYYziAgnV77%2BMx8P1QNP%2F42puvmFdOCIvUrxv97rbr%2FscYAbCOk8fFKrJQ3hhv31rxlUeQk0dDxmRX0xcHYFXgSQh4N0KoibOOGRd%2BKMnp%2Fm2fTDYgvW2BjqyApWXZFeaKsfi%2BSZdFV%2BEafWRKQCs8GQ350B5KMpROOWT%2FYc7GxFFbB6cFhm779f45zFiXHGMtILv3z3%2BzZhyfd2fRusaVyuzzpkS5b4j8yd3Tj5CXBdBdmM2zoJGWkukxMZW3jhUYZRnWqOEmAp1RuUGFWcgs39QBAWnHhWJV%2BuPicZmUFLssdEx5PnK%2F%2BdsGCGiAMuHBlqJfsltbhENbqM4ea78Da8g3tmyVNVP6uXeB9DLDown0vWgJyq2vc%2BnCVNSP07dyNN%2FmPApLUbhipSuiq4KHepyz6EAcVOffefwk%2F1wsORAcurhWpmHfWq06GZTL23pK%2FIZnx1dlzhwx1zPq64ylBA8M1yEf6vzZL7sZ4qi%2Boqp5RTUu88BqrJAfim5DmwKtWi8ejXKF7q311jaBw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240908T061918Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA3FLD5IA2AV34DXVE%2F20240908%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=ec2dd127acdbf4216ef35cf8359eaca719fce2211765827451a034340b741023">
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
