import { SERVICE_DOC_URL } from '@/lib/constants'
import servicesPdf from '@/public/dashboard/services_pdf_desktop.png'
import whatsappLogo from '@/public/dashboard/whatsapp_transparent.png'
import Image from 'next/image'
import Link from 'next/link'

const RightSidebar = () => {
  return (
    <div className='flex flex-col gap-4 justify-center h-full items-start relative'>
        <Link href='https://wa.me/919876543210' target='_blank' className='absolute top-12 right-0 bg-[#61c736] h-12 w-28 rounded-l-full flex items-center pl-3 cursor-pointer'>
            <Image src={whatsappLogo} alt='whatsapp' width={40} height={40} />
        </Link>
        <Link href={SERVICE_DOC_URL} className='flex flex-col gap-4 justify-center items-center'>
            <Image src={servicesPdf} alt='services' width={200} height={200} />
            <span className='text-sm'>Our Services Doc</span>
        </Link>
    </div>
  )
}

export default RightSidebar