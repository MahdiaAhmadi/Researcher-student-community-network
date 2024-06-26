"use client"

import { ProfileDescription  } from "@/components/ProfileDescription"
import { AcademicDegrees     } from "@/components/AcademicDegrees"
import { AboutMeTable        } from "@/components/AboutMeTable"
import { put, get            } from "@/data/webService";
import { useEffect, useState } from "react";

function SaveHandler({description, skills}) {
  put("/user/me/update", { profile_description: description, skills:skills }).then((data) => {
    console.log(data)
  }).catch(() => alert("Error Saving changes to Abour Me section"))
}

function SaveDegrees({degrees}) {
  put("/user/me/update", { degrees: degrees }).then((data) => {
    console.log(data)
  }).catch(() => alert("Error Saving changes in degrees"))
}
export default function ProfileConsult() {
  const [description, setDescription] = useState(null);
  const [skills, setSkills] = useState(null);
  const [degrees, setDegrees] = useState(null);


  useEffect(() => {
    if((description === null) || (skills === null) || (degrees === null))
      get("/user/me").then((data) => {
        console.log(data)
        setDescription(data.profile_description === undefined ? "Describe yourself to other researchers here" : data.profile_description)
        setSkills(data.skills === undefined ? [] : data.skills)
        setDegrees(data.degrees === undefined ? [] : data.degrees)
      })
  })
  return (
      <ProfileDescription>
        <AboutMeTable
          Description={description}
          SetDescription={setDescription}
          Skills={skills}
          SetSkills={setSkills}
          SaveFunction={SaveHandler}
        />
        <AcademicDegrees DegreeArray={degrees} SetDegreeArray={setDegrees} SaveFunction={SaveDegrees}/>
      </ProfileDescription>
  )
}
