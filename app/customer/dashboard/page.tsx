'use client'
import React, { useEffect } from 'react'
import Sidebar from '@/components/Sidebar'
import RightSidebar from '@/components/RightSidebar'
import InfoCards from '@/components/InfoCards'
import CleaningReportTable from '@/components/CleaningReportTable'

import Image from 'next/image'
import LoadingSvg from '@/public/dashboard/Ripple@1x-1.9s-200px-200px.svg'

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


const CxDashboard = () => {
  const [selectedVehicle, setSelectedVehicle] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(false);
    }

    fetchData();
  }, []);
  
  return (
    isLoading ? <div className='h-screen w-screen flex items-center justify-center'>
      <Image src={LoadingSvg} alt='pync_logo'></Image>
    </div> :
    <div className='flex min-h-screen'>
      <Sidebar
        className="basis-1/5"
        name='Harsh Prateek'
        society='Springfields'
        startDate='Sep 1, 2024'
        flatNo='I404'
        paymentStatus={true}
        selectedVehicle={selectedVehicle}
        setSelectedVehicle={setSelectedVehicle}
        vehicles={['Toyota Fortuner', 'Jeep Meridian', 'Jeep Compass', 'Harley Davidson X440']}
      />
      <main className='basis-3/5 flex flex-col gap-12 items-center py-8'>
        <InfoCards
          vehicleName='Jeep Compass'
          registrationNo='22BH3415E'
          color='Dark Green'
          parkingSlot='529'
          packageName='Rs. 589/m'
          deepCleanDay='Wednesday'
          weeklyOffDay='Saturday'
        />
        <CleaningReportTable tableData={tableData} />
        <div className="join">
          <button className="join-item btn">«</button>
          <button className="join-item btn">Page 1</button>
          <button disabled className="join-item btn">»</button>
        </div>
      </main>
      <div className='basis-1/5'>
        <RightSidebar />
      </div>
    </div>
  )
}

export default CxDashboard