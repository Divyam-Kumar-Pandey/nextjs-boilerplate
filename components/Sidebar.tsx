import profileImage from '@/public/dashboard/Profile.png'
import pyncLogo from '@/public/dashboard/pync_logo_white.png'
import Image from 'next/image'

import { DM_Sans, Work_Sans } from 'next/font/google'

const dmSans = DM_Sans({subsets:["latin"]})
const workSans = Work_Sans({subsets:["latin"]})

const Sidebar = ({
    className,
    name, 
    society,
    startDate,
    flatNo,
    vehicles,
    paymentStatus,
    selectedVehicle,
    setSelectedVehicle
}:{
    className: string,
    name: string, 
    society: string,
    startDate: string,
    flatNo: string,
    paymentStatus: boolean,
    vehicles: string[],
    selectedVehicle: number,
    setSelectedVehicle: React.Dispatch<React.SetStateAction<number>>
}) => {
  return (
    <aside className={`bg-black p-10 flex flex-col justify-between ${className}`}>
        {/* Main */}
        <div className='flex flex-col justify-between h-3/4 gap-6'>
            {/* profile image, name, address */}
            <div className={`flex flex-col text-white ${workSans.className}`}>
                <Image src={profileImage} alt='profile' width={100} height={100} />
                <span className={` text-xl py-2 font-bold ${dmSans.className}`}>{name}</span>
                <span className=''>{society}</span>
                <span className=''>Start Date: {startDate} </span>
                <span className=''>Flat No: {flatNo} </span>
            </div>
            {/* Vehicles */}
            <div className={`text-white flex flex-col gap-2 ${dmSans.className} `}>
                <span className='font-semibold'>Your Vehicles</span>
                {vehicles && vehicles.length === 0 && <span>No vehicles found</span>}
                {vehicles && vehicles.map((vehicle, index) => { 
                    return (
                        <button 
                        key={vehicle} 
                        className={`bg-[#e2e5e4] text-black px-4 py-2 rounded-md font-normal ${selectedVehicle === index ? 'bg-[#ff6f75] text-white font-semibold' : ''}`}
                        onClick={() => setSelectedVehicle(index)}
                        >
                            {vehicle}
                        </button>
                    );
                })}
            </div>
            {/* Payment Status */}
            <div className={`flex flex-col text-white ${dmSans.className}`}>
                <span className='font-semibold'>Payment Status</span>
                <span 
                style={{color: paymentStatus ? '#61c736' : '#ff687a'}} 
                >{paymentStatus ? 'Paid for September' : 'Due for September'}
                </span>
                <button className={`mt-4 px-4 py-2 rounded-md font-semibold ${paymentStatus ? 'bg-[#e2e5e4] text-[#9a9a9a]' : 'bg-[#2b00ff] text-white'}`}>
                    {paymentStatus ? 'Paid' : 'Payment Link'}
                </button>
            </div>
        </div>
        {/* Footer */}
        <div className={`flex flex-col gap-0 text-white ${workSans.className}`}>
            <Image src={pyncLogo} alt='pync' width={60} height={60} />
            <span className='text-xs'>REVIVERIDE PRIVATE LIMITED<br/>CIN: U45200KA2023PTC182467</span>
        </div>
    </aside>
  )
}

export default Sidebar