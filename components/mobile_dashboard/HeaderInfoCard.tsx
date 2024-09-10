import profileImage from '@/public/dashboard/Profile.png'
import Image from 'next/image'

const HeaderInfoCard = ({
    name,
    society,
    startDate,
    flatNo,
    vehicles,
    paymentStatus,
}: {
    name: string,
    society: string,
    startDate: string,
    flatNo: string,
    vehicles: string[],
    paymentStatus: boolean,
}) => {
    return (
        <div className="bg-black w-full  p-3 flex flex-col gap-2">
            <div className="flex flex-row items-center gap-4">
                <Image src={profileImage} alt="Profile" width={80} height={80} />
                <div className="flex flex-col text-white">
                    <p className="text-md font-bold">{name}</p>
                    <p className="text-sm">{society}</p>
                    <p className="text-sm">Start Date: {startDate}</p>
                    <p className="text-sm">Flat No: {flatNo}</p>
                </div>
            </div>
            <div className='flex flex-row justify-between gap-2'>
                <select name="vehicles" id="vehicles" className=' text-white font-semibold text-md text-center select bg-[#ff6f75] rounded-full select-md select-bordered w-full max-w-[50%]'>
                    {vehicles.map((vehicle) => (
                        <option key={vehicle} value={vehicle}>{vehicle}</option>
                    ))}
                </select>
                <button className={`btn bg-[#e2e5e4] rounded-full w-full max-w-[48%] ${paymentStatus ? "text-black" : "text-[#aa0014]"}`}>
                    {paymentStatus ? "Paid" : "Payment Pending!"}
                </button>
            </div>
        </div>
    )
}

export default HeaderInfoCard