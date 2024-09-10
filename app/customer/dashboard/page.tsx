import React from 'react'
import Sidebar from '@/components/Sidebar'
import RightSidebar from '@/components/RightSidebar'
import InfoCards from '@/components/InfoCards'
import CleaningReportTable from '@/components/CleaningReportTable'

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
  return (
    <div className='flex min-h-screen'>
      <Sidebar
        className="basis-1/5"
        name='Harsh Prateek'
        society='Springfields'
        startDate='Sep 1, 2024'
        flatNo='I404'
        paymentStatus={true}
        vehicles={['Jeep Compass', 'KTM Duke 250']}
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