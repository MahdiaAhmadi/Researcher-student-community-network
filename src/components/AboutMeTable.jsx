"use client"
import { useState } from "react"

function emptysave({description, skills}) { console.log("Saving") }
function ShowDescription({Description, SetDescription, handleEditButton, Editable}) {
  if(Description === null) return null
  return (
    <div className="my-2">
      <button className="text-black bg-blue-500 rounded ml-4 px-1" onClick={handleEditButton}>{ Editable ? "Save" : "Edit"}</button>
      <div className="text-black ml-4 font-bold">Description</div>
      <div className="text-black ml-6" contentEditable={Editable} suppressContentEditableWarning={true} onInput={(e) => {SetDescription(e.target.innerText); console.log(Description)}}>{(' ' + Description).slice(1)}</div>
    </div>
  )
}
// SaveFunction should be the function responsible for saving the updated user information to the database.
// should have a parameter description for the new description text and a parameter skills for the new skills array
const AboutMeTable = ({ Description, SetDescription, Skills, SetSkills, SaveFunction = emptysave}) => {
  const [Editable, setEditable] = useState(false);
  const [auxDescription, setAuxDescription] = useState(Description);


  function ShowSkills() {
    if(Skills === null) return null
    return (
    <div className="my-2">
      <div className="text-black ml-4 mr-6 font-bold justify-between flex">
        <div className="inline-block">Skills</div>
        {Editable ? <button className="inline-block bg-blue-500 rounded-full px-2" onClick={handleNewSkill}>+</button> : null }
      </div>
      {
        Skills.map((item, index) => {
          return (<div className="text-black ml-6 mr-6 flex justify-between" key={index}>
                    <div contentEditable={Editable} suppressContentEditableWarning={true} onInput={(e) => {Skills[index] = e.target.innerText}}>{item}</div>
                    {Editable ? <button className="inline-block bg-red-500 rounded-full px-2" onClick={() => handleDeleteSkill(index)}>-</button> : null }
                  </div> )
        })
      }
    </div>
    )
  }
  function handleNewSkill() {
    let arr = [...Skills]
    arr.push("New Skill")
    SetSkills(arr)
  }
  function handleDeleteSkill(index) {
    let arr = [...Skills]
    arr.splice(index, 1)
    SetSkills(arr)
  }

  function handleEditButton() {
    if(Editable) {
        SetDescription(auxDescription)
        SaveFunction({ description:Description, skills:Skills })
    }
    setEditable(!Editable)
  }

  return (
    <div className="w-1/2 space-y-2">
      <div className=" w-5/6 bg-white border border-black items-center py-2">
        <div className="ml-2 text-black">About Me</div>
      </div>
      <div className="w-5/6 bg-white border border-black items-center py-2 items-center">
        {(Description === null && Skills === null) ? <div>Loading Profile Information</div> : null}
        <ShowDescription Description={Description} SetDescription={setAuxDescription} handleEditButton={handleEditButton} Editable={Editable}/>
        <ShowSkills/>
      </div>
    </div>
  )
}

export { AboutMeTable }

