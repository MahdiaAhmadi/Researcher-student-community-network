const AffiliationsTable = ({ institution, location, department}) => {
  const informationMap = {
    "Location": location,
    "Department": department
  }
  return (
    <div className=" w-1/2 space-y-2">
      <div className=" w-5/6 bg-white border border-black items-center py-2">
        <div className="ml-2 text-black">Affiliations Table</div>
      </div>
      <div className="w-5/6 bg-white border border-black items-center py-2 items-center">
        <div className="text-black ml-4 font-bold">{institution}</div>
        { Object.keys(informationMap).map((key) => {
          return (
            <div className="my-2">
              <div className="text-black ml-4 font-bold">{key}</div>
              <div className="text-black ml-6">{informationMap[key]}</div>
            </div>
          )
        }) }
      </div>
    </div>
  )
}

export { AffiliationsTable }
