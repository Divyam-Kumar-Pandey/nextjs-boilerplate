import servicesDoc from '@/public/dashboard/services_pdf_mobile.png'
import pyncLogo from '@/public/pync_logo.png'
import Image from 'next/image'

const MobileFooter = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-3 mx-5'>
        <Image src={servicesDoc} alt='services_pdf_mobile' />
        <div className='flex flex-col items-center justify-center text-xs mt-5 mb-2'>
            <Image src={pyncLogo} alt='pync_logo_white' width={60} height={60} />
            <p>REVIVERIDE PRIVATE LIMITED</p>
            <p>CIN: U45200KA2023PTC182467</p>
        </div>
    </div>
  )
}

export default MobileFooter