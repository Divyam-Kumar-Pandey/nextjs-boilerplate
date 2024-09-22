import calendar from '@/public/dashboard/calendar.png'
import Image from 'next/image'

import { DM_Sans, Work_Sans } from 'next/font/google'

const dmSans = DM_Sans({subsets:["latin"]})
const workSans = Work_Sans({subsets:["latin"]})

const InfoCards = ({
    vehicleName,
    registrationNo,
    color,
    parkingSlot,
    packageName,
    deepCleanDay,
    weeklyOffDay,
}:{
    vehicleName: string,
    registrationNo: string,
    color: string,
    parkingSlot: string,
    packageName: string,
    deepCleanDay: string,
    weeklyOffDay: string,
}) => {
  return (
    <div className="flex gap-5 ">
        {/* Vehicle Card */}
        <div className={`bg-[#e2e5e4] rounded-lg shadow-sm px-5 py-3 flex flex-col gap-2 justify-center ${workSans.className}`}>
            <span className={`text-[#00669b] font-semibold ${dmSans.className}`}>{vehicleName}</span>
            <div className="flex flex-col">
                <div className="flex  gap-12">
                    <span>{registrationNo}</span>
                    <span>Parking: {parkingSlot}</span>
                </div>
                <div className="flex  gap-12">
                    <span>{color}</span>
                    <span>Package: {packageName}</span>
                </div>
                
            </div>
        </div>
        {/* Deep Clean, Weekly off */}
        <div className={`bg-[#ffd994] rounded-lg shadow-sm px-5 py-3 relative gap-3 flex flex-col min-w-48 ${workSans.className}`}>
            <div className="flex flex-col text-xs">
                <span className="text-xs">Interior Cleaning</span>
                <span className="font-semibold text-sm">{deepCleanDay}</span>
            </div>
            <div className="flex flex-col text-xs">
                <span className="text-xs">Weekly off</span>
                <span className="font-semibold text-sm">{weeklyOffDay}</span>
            </div>
            <div className="absolute bottom-3 right-3">
                <Image src={calendar} alt="calendar" width={30} height={30}/>
            </div>
        </div>
    </div>
  )
}

export default InfoCards