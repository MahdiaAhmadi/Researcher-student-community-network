"use client"
import { useState, useEffect } from "react"
import { get } from "@/data/webService"
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
  const [institutions, setInstitutions] = useState([]);
  const [selectedInstitution, setSelectedInstitution] = useState(null);


  function EditMode({children, value}) {
    if(Editable){
      return children
    } else {
      return <div>{value}</div>
    }

  }
  useEffect(() => {
    if(institutions.length === 0) {
      console.log("Setting list of institutions");
      get("/institution/")
          .then(data => {
              setInstitutions(data)
          })
    }
  }, [])
  function handleNewDegree() {
    let degree = {
      title: "New Degree",
      institution: institutions[0].name,
      start_date: "2000-01-01",
      graduation_date: "2000-01-10"
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
            <div key={index} className="my-2 grid grid-cols-2 gap-4 mx-4 text-black font-bold">
              {/* <div className="text-black ml-4 font-bold flex "> */}
                <div className="mr-4" contentEditable={Editable} suppressContentEditableWarning={true} onInput={(e) => {DegreeArray[index].title = e.target.innerText}}>{item.title}</div>
              <div>
                {Editable ? <button className="inline-block bg-red-500 rounded-full px-2" onClick={() => handleDeleteDegree(index)}>-</button> : null }
              </div>
              {/* </div> */}
              {/* <div className="text-black ml-6 space-x-8 flex"> */}
                <div className="col-start-1">Institution: </div>
              <EditMode value={DegreeArray[index].institution}>
                  <select id="institutions"
                      defaultValue={DegreeArray[index].institution}
                      className="bg-white border border-indigo-300
              text-md text-gray-500 font-bold rounded-lg focus:ring-blue-500
              focus:border-blue-500 block w-full p-2.5"
                      onChange={({ target }) => {
                          setSelectedInstitution(target.value)
                        DegreeArray[index].institution = target.value
                      }}>
                      {institutions.map(inst => {
                          return <option key={inst.id}
                              value={inst.name}>
                              {inst.name}
                          </option>
                      })}
                  </select>
                </EditMode>
              {/* </div> */}
              {/* <div className="text-black flex ml-6 space-x-8"> */}
                <div>Start Date: </div>
                <EditMode value={DegreeArray[index].start_date}>
                  <input className="width-1/2" aria-label="Date" type="date" onChange={(date) => { DegreeArray[index].start_date = date.target.value }} defaultValue={item.start_date}/>
                </EditMode>
              {/* </div> */}
              {/* <div className="text-black flex ml-6 space-x-8"> */}
                <div>Graduation Date: </div>
                <EditMode value={DegreeArray[index].graduation_date}>
                  <input aria-label="Date" type="date" onChange={(date) => { DegreeArray[index].graduation_date = date.target.value }} defaultValue={item.graduation_date}/>
                </EditMode>
              {/* </div> */}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export { AcademicDegrees }
