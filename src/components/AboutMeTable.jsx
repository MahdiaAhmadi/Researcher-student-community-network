const AboutMeTable = ({ informationMap }) => {
  return (
    <div className="w-1/2 space-y-2">
      <div className=" w-5/6 bg-white border border-black items-center py-2">
        <div className="ml-2 text-black">About Me</div>
      </div>
      <div className="w-5/6 bg-white border border-black items-center py-2 items-center">
        {Object.keys(informationMap).map((key, idx) => {
          return (
            <div className="my-2" key={idx}>
              <div className="text-black ml-4 font-bold">{key}</div>
              <div className="text-black ml-6">{informationMap[key]}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export { AboutMeTable }

