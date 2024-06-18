"use client"
import { useState } from "react"
// Degrees will have the format
// {
//   title: "Master in Informatics"
//   institution: "IPB"
//   start_date: 2020-01-01
//   graduation_date: 2025-01-01
// }
function emptysave({degrees}) { console.log("Saving") }
const AcademicDegrees = ({ DegreeArray , SetDegreeArray, SaveFunction = emptysave }) => {
  const [Editable, setEditable] = useState(false);
  function handleNewDegree() {
    let degree = {
      title: "New Degree",
      institution: "New Degree",
      start_date: "0000-00-00",
      graduation_date: "0000-00-00"
    }
    let arr = [...DegreeArray]
    arr.push(degree)
    SetDegreeArray(arr)
  }
  function handleDeleteDegree(index) {
    let arr = [...DegreeArray]
    arr.splice(index, 1)
    SetDegreeArray(arr)
  }
  function handleEditButton() {
    if(Editable) {
      SaveFunction({ degrees:DegreeArray })
    }
    setEditable(!Editable)
  }
  return (
    <div className=" w-1/2 space-y-2">
      <div className=" w-5/6 bg-white border border-black items-center py-2 flex">
        <div className="ml-2 text-black mr-4">Academic Degrees</div>
        {Editable ? <button className="inline-block bg-blue-500 rounded-full px-2" onClick={handleNewDegree}>+</button> : null }
      </div>
      <div className="w-5/6 bg-white border border-black items-center py-2 items-center">
      <button className="text-black bg-blue-500 rounded ml-4 px-1" onClick={handleEditButton}>{ Editable ? "Save" : "Edit"}</button>
        {(DegreeArray === null) ? null : DegreeArray.map((item, index) => {
          return (
            <div key={index} className="my-2">
              <div className="text-black ml-4 font-bold flex ">
                <div className="mr-4" contentEditable={Editable} suppressContentEditableWarning={true} onInput={(e) => {DegreeArray[index].graduation_date = e.target.innerText}}>{item.title}</div>
                {Editable ? <button className="inline-block bg-red-500 rounded-full px-2" onClick={() => handleDeleteDegree(index)}>-</button> : null }
              </div>
              <div className="text-black ml-6 flex">
                <div>Institution: </div>
                <div contentEditable={Editable} suppressContentEditableWarning={true} onInput={(e) => {DegreeArray[index].institution = e.target.innerText}}>{item.institution}</div>
              </div>
              <div className="text-black ml-6 flex">
                <div>Start Date: </div>
                <div contentEditable={Editable} suppressContentEditableWarning={true} onInput={(e) => {DegreeArray[index].start_date = e.target.innerText}}>{item.start_date}</div>
              </div>
              <div className="text-black ml-6 flex">
                <div>Graduation Date: </div>
                <div contentEditable={Editable} suppressContentEditableWarning={true} onInput={(e) => {DegreeArray[index].graduation_date = e.target.innerText}}>{item.graduation_date}</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export { AcademicDegrees }
