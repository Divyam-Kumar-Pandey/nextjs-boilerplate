import { Work_Sans } from "next/font/google"

const workSans = Work_Sans({ subsets: ["latin"] })

const statusColorMap = {
    "NOT_STARTED": "Black",
    "DEEP_CLEAN": "Blue",
    "DUSTING": "Blue",
    "DRY_WASH": "Blue",
    "VEHICLE_NOT_FOUND": "Red",
    "CUSTOMER_ASKED_TO_SKIP": "Red",
    "SKIPPED": "Red",
    "UNKNOWN": "Black" // Special case for "Unknown"
};

const CleaningReportTable = ({tableData}: {tableData: any}) => {
    return (
      <table className={`min-w-[60%] mx-5 mt-2 text-sm whitespace-nowrap ${workSans.className}`}>
          <thead className="">
              <tr className="h-4">
                  <th className="w-[15%]">Date</th>
                  <th className="w-[58%]">Day</th>
                  <th className="">Care Type</th>
              </tr>
          </thead>
          <tbody className="text-center">
              {tableData.map((data: any) => (
                  <tr className="h-12 border-b-2 border-[#f5f5f5]" key={data.Date}>
                      <td>{data.Date}</td>
                      <td>{data.Day}</td>
                      <td className="font-semibold">{data.CareType}</td>
                  </tr>
              ))}
          </tbody>
      </table>
    )
  }
  
  export default CleaningReportTable