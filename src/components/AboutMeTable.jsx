"use client"
import { useState } from "react"

const AboutMeTable = ({ Description, Skills }) => {
  const [Editable, setEditable] = useState(false);
  const [text, setText] = useState(Description);
  const [SkillArr, setSkillArr] = useState(Skills);

  function handleNewSkill() {
    let arr = [...SkillArr]
    arr.push("New Skill")
    setSkillArr(arr)
  }
  function handleDeleteSkill(index) {
    let arr = [...SkillArr]
    arr.splice(index, 1)
    setSkillArr(arr)
  }

  return (
    <div className="w-1/2 space-y-2">
      <div className=" w-5/6 bg-white border border-black items-center py-2">
        <div className="ml-2 text-black">About Me</div>
      </div>
      <div className="w-5/6 bg-white border border-black items-center py-2 items-center">
            <div className="my-2">
              <button className="text-black bg-blue-500 rounded ml-4 px-1" onClick={() => setEditable(!Editable)}>{ Editable ? "Save" : "Edit"}</button>
              <div className="text-black ml-4 font-bold">Description</div>
              <div className="text-black ml-6" contentEditable={Editable} suppressContentEditableWarning={true}>{text}</div>
            </div>
            <div className="my-2">
              <div className="text-black ml-4 mr-6 font-bold justify-between flex">
                <div className="inline-block">Skills</div>
                {Editable ? <button className="inline-block bg-blue-500 rounded-full px-2" onClick={handleNewSkill}>+</button> : null }
              </div>
              {
                SkillArr.map((item, index) => {
                  return (<div className="text-black ml-6 mr-6 flex justify-between" key={index}>
                            <div contentEditable={Editable} suppressContentEditableWarning={true} onInput={(e) => {SkillArr[index] = e.target.innerText}}>{item}</div>
                            {Editable ? <button className="inline-block bg-red-500 rounded-full px-2" onClick={() => handleDeleteSkill(index)}>-</button> : null }
                          </div> )
                })
              }
            </div>
      </div>
    </div>
  )
}

export { AboutMeTable }

