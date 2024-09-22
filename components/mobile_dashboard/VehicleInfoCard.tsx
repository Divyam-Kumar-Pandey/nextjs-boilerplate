import calendar from '@/public/dashboard/calendar.png'
import Image from 'next/image'

import { Work_Sans } from "next/font/google"

const workSans = Work_Sans({ subsets: ["latin"] });

const VehicleInfoCard = ({
    registrationNumber,
    color,
    parkingSlot,
    packageName,
    deepCleanDay,
    weeklyOff
}: {
    registrationNumber: string;
    color: string;
    parkingSlot: string;
    packageName: string;
    deepCleanDay: string;
    weeklyOff: string;
}) => {
  return (
    <div className={`flex flex-col gap-4 relative ${workSans.className}`}>
        {/* Vehicle Details */}
        <div className="flex flex-row justify-between bg-[#e2e5e4] p-4 text-sm font-semibold overflow-x-auto whitespace-nowrap *:px-4">
            <span>{registrationNumber}</span>
            <span>{color}</span>
            <span>Parking: {parkingSlot}</span>
            <span>@{packageName}/m</span>
        </div>
        {/* Deep Clean Day, Weekly off */}
        <div className="flex flex-row justify-around mx-5 bg-[#ffd994] p-4 text-sm font-semibold rounded-xl relative">
            <Image src={calendar} alt="calendar" width={35} height={35} className='absolute top-[50%] left-6 -translate-y-[55%]' />
            <div className="flex flex-col pl-16">
                <span className='font-normal text-xs'>Interior Cleaning</span>
                <span>{deepCleanDay}</span>
            </div>
            <div className="flex flex-col">
                <span className='font-normal text-xs'>Weekly off</span>
                <span>{weeklyOff}</span>
            </div>
        </div>
    </div>
  )
}

export default VehicleInfoCard
