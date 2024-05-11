const PublicationStatus = ({ numCitations, numRecommendations, numFullReads, numOtherReads }) => {
  return (
    <div className="w-full space-y-2 mx-48">
      <div className="bg-white border border-black items-center py-2">
        <div className="ml-2 text-black text-center">Publication Status</div>
      </div>
      <div className="bg-white border border-black items-center p-10">
        <div className="bg-neutral-100 border-black border text-black" >
          <div className="text-center">Research Interest Score</div>
          <div className="font-bold ml-8 py-4">Breakdown of Scores:</div>
          <div className="ml-8 py-4"><b>{numCitations}</b> Citations</div>
          <div className="ml-8 py-4"><b>{numRecommendations}</b> Recomendations</div>
          <div className="ml-8 py-4"><b>{numFullReads}</b> Full Text Reads*</div>
          <div className="ml-8 py-4"><b>{numOtherReads}</b> Other Reads*</div>
          <div className="ml-8 py-4">*Reads by ResearchHub members</div>
        </div>
      </div>
    </div>
  )
}

export { PublicationStatus }
