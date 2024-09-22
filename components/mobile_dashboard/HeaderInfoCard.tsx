import profileImage from '@/public/dashboard/Profile.png'
import Image from 'next/image'
import { ReactInstance } from 'react'

import { DM_Sans, Work_Sans } from "next/font/google"

const dmSans = DM_Sans({ subsets: ["latin"] });
const workSans = Work_Sans({ subsets: ["latin"] });


const HeaderInfoCard = ({
    name,
    society,
    startDate,
    flatNo,
    vehicles,
    paymentStatus,
    selectedVehicle,
    setSelectedVehicle
}: {
    name: string,
    society: string,
    startDate: string,
    flatNo: string,
    vehicles: string[],
    paymentStatus: boolean,
    selectedVehicle: number,
    setSelectedVehicle: React.Dispatch<React.SetStateAction<number>>
}) => {
    return (
        <div className={`bg-black w-full  p-3 flex flex-col gap-2 ${workSans.className}`}>
            <div className="flex flex-row items-center gap-4">
                <Image src={profileImage} alt="Profile" width={80} height={80} />
                <div className="flex flex-col text-white">
                    <p className={`text-md font-bold ${dmSans.className}`}>{name}</p>
                    <p className="text-sm">{society}</p>
                    <p className="text-sm">Start Date: {startDate}</p>
                    <p className="text-sm">Flat No: {flatNo}</p>
                </div>
            </div>
            <div className={`flex flex-row justify-between gap-2 font-bold ${workSans.className}`}>
                <select name="vehicles" id="vehicles" className='custom-icon-select text-white font-semibold text-md text-center select bg-[#ff6f75] rounded-full select-md select-bordered w-full'>
                    {vehicles.map((vehicle) => (
                        <option key={vehicle} value={vehicle}>{vehicle}</option>
                    ))}
                </select>
                <button className={`btn text-sm leading-4 bg-[#e2e5e4] rounded-full ${paymentStatus ? "text-black" : "text-[#aa0014]"}`}>
                    {paymentStatus ? "Paid" : "Payment Pending!"}
                </button>
            </div>
        </div>
    )
}

export default HeaderInfoCard