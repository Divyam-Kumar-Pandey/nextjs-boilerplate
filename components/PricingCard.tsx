import { Montserrat, Sanchez } from "next/font/google"
import React from "react"

const mont = Montserrat({ subsets: ["latin"] })
const san = Sanchez({
    weight: "400",
    subsets: ["latin"]
})

const PricingCard = ({
    discount,
    strikePrice,
    price,
    period,
    description,
    deepCleanDetails,
    ecoWashDetails
}: {
    discount: string,
    strikePrice: string,
    price: string,
    period: string,
    description: React.ReactNode,
    deepCleanDetails: {
        count: number,
        description: string
    },
    ecoWashDetails: {
        count: number,
        description: string
    }
}) => {
    return (
        <div className="flex flex-col justify-center items-center w-[30%]">
            <div className="mt-8 mb-4 flex flex-col items-center">
                <span className={`text-3xl line-through ${mont.className}`}>₹ {strikePrice}/-</span>
                <span className={`text-6xl font-bold text-[#e300ff] tracking-tighter`}>₹ {price}/-</span>
                <span className={` ${san.className}`}>{period?.toUpperCase()}</span>
            </div>
            <div className="border-2 border-[#838C92] w-[80%] rounded-lg h-[100px]"></div>

        </div>
    )
}

export default PricingCard