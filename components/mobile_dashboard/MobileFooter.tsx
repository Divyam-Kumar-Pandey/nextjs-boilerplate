import { SERVICE_DOC_URL } from '@/lib/constants';
import servicesDoc from '@/public/dashboard/services_pdf_mobile.png'
import pyncLogo from '@/public/pync_logo.png'
import { Work_Sans } from 'next/font/google';
import Image from 'next/image'
import Link from 'next/link';

const workSans = Work_Sans({ subsets: ["latin"] });




const MobileFooter = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-3 mx-5'>
      <Link href={SERVICE_DOC_URL}>
        <Image src={servicesDoc} alt='services_pdf_mobile' />
      </Link>
        <div className={`flex flex-col items-center justify-center text-xs mt-5 mb-2 ${workSans.className}`}>
          <Image src={pyncLogo} alt='pync_logo_white' width={60} height={60} />
          <p>REVIVERIDE PRIVATE LIMITED</p>
          <p>CIN: U45200KA2023PTC182467</p>
        </div>

      </div>
  )
}

export default MobileFooter