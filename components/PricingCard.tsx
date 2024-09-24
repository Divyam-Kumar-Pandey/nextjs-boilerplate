import { Montserrat, Sanchez } from "next/font/google"
import { ReactElement } from "react"

const mont = Montserrat({subsets:["latin"]})
const san = Sanchez({
    weight: "400",
    subsets: ["latin"]
})

const PricingCard = ({
    monthlyPrice,
    pricingDescription,
    color,
    description,
    cta
}:{
    monthlyPrice: string,
    pricingDescription: string,
    color: string,
    description: ReactElement,
    cta: boolean
}
) => {
  return (
    <div style={{borderColor: color}} className={`border-2 flex w-[100%] px-5 py-3 items-center m-4 rounded-lg relative`}>
        <div className="flex flex-col w-[35%]">
            <span className="font-bold text-3xl">{monthlyPrice}</span>
            <span className={`${san.className} text-[0.75rem]`}>{pricingDescription}</span>
        </div>
        <div className="bg-black w-[1px] my-10 h-[80%]"></div>
        <div className={`${mont.className} flex text-xl flex-col px-10 font-semibold`}>
            {description}
        </div>
        {cta &&
        <button style={{backgroundColor: color}} className={`btn text-white btn-sm absolute -bottom-4 w-[30%] ${mont.className}`}>GET STARTED</button>
}
    </div>
  )
}

export default PricingCard