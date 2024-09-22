'use client';

import HeaderInfoCard from "@/components/mobile_dashboard/HeaderInfoCard"
import VehicleInfoCard from "@/components/mobile_dashboard/VehicleInfoCard"
import CompactCleaningReportTable from "@/components/mobile_dashboard/CompactCleaningReportTable"
import MobileFooter from "@/components/mobile_dashboard/MobileFooter"

import React, { lazy } from "react";
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({subsets:["latin"]});

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
    const [selectedVehicle, setSelectedVehicle] = React.useState(0);
    return (
        <div className={`flex flex-col h-screen`}>
            {/* Customer, Vehicle Info Card */}
            <HeaderInfoCard name="Harsh Prateek" society="Springfields" startDate="Sep 1, 2024" flatNo="I404 (behind I405)" vehicles={['Toyota Fortuner', 'Jeep Meridian', 'Jeep Compass', 'Harley Davidson X440']} paymentStatus={false} selectedVehicle={selectedVehicle} setSelectedVehicle={setSelectedVehicle} />
            {/* Vehicle Info Card */}
            <VehicleInfoCard registrationNumber="22BH3415E" color="Dark Green" parkingSlot="529 (behind 527)" packageName="589" deepCleanDay="Wednesday" weeklyOff="Saturday" />
            {/* Clean History Table */}
            <CompactCleaningReportTable tableData={tableData} />
            {/* pagination */}
            <div className={`join mt-4 mx-auto text-sm ${workSans.className}`}>
                <button className="join-item btn">«</button>
                <button className="join-item btn">Page 1</button>
                <button disabled className="join-item btn">»</button>
            </div>
            {/* Footer */}
            <MobileFooter />

        </div>
    )
}

export default MobileCustomerDashboard