import HeaderInfoCard from "@/components/mobile_dashboard/HeaderInfoCard"
import VehicleInfoCard from "@/components/mobile_dashboard/VehicleInfoCard"
import CompactCleaningReportTable from "@/components/mobile_dashboard/CompactCleaningReportTable"
import MobileFooter from "@/components/mobile_dashboard/MobileFooter"

const tableData = [
    {
        "Date": "7 Sep",
        "Day": "Saturday",
        "CareType": "Eco wash"
    },
    {
        "Date": "6 Sep",
        "Day": "Saturday",
        "CareType": "Dusting"
    },
    {
        "Date": "5 Sep",
        "Day": "Saturday",
        "CareType": "Deep clean"
    },
    {
        "Date": "4 Sep",
        "Day": "Saturday",
        "CareType": "Week Off"
    },
    {
        "Date": "3 Sep",
        "Day": "Saturday",
        "CareType": "Evening shift"
    },
    {
        "Date": "2 Sep",
        "Day": "Saturday",
        "CareType": "Vehicle not found"
    },
    {
        "Date": "1 Sep",
        "Day": "Saturday",
        "CareType": "Missed"
    }
]

const MobileCustomerDashboard = () => {
    return (
        <div className="flex flex-col h-screen">
            {/* Customer, Vehicle Info Card */}
            <HeaderInfoCard name="Harsh Prateek" society="Springfields" startDate="Sep 1, 2024" flatNo="I404" vehicles={["Jeep Compass", "KTM Duke 250"]} paymentStatus={false} />
            {/* Vehicle Info Card */}
            <VehicleInfoCard registrationNumber="22BH3415E" color="Dark Green" parkingSlot="529" packageName="589" deepCleanDay="Wednesday" weeklyOff="Saturday" />
            {/* Clean History Table */}
            <CompactCleaningReportTable tableData={tableData} />
            {/* pagination */}
            <div className="join grid grid-cols-2 mx-5 bg-[#e2e5e4] rounded-lg mt-3">
                <button className="join-item btn ">Previous page</button>
                <button disabled className="join-item btn">Next</button>
            </div>
            {/* Footer */}
            <MobileFooter />

        </div>
    )
}

export default MobileCustomerDashboard