
const CleaningReportTable = ({tableData}: {tableData: any}) => {
    return (
      <table className="min-w-[60%] mx-5 mt-2">
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
                      <td>{data.CareType}</td>
                  </tr>
              ))}
          </tbody>
      </table>
    )
  }
  
  export default CleaningReportTable