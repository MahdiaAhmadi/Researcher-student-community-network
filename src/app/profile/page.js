"use client"

import { ProfileDescription } from "@/components/ProfileDescription"
import { AffiliationsTable  } from "@/components/AffiliationsTable"
import { AboutMeTable       } from "@/components/AboutMeTable"
import { put, get } from "@/data/webService";
import { useEffect, useState } from "react";

function SaveHandler({description, skills}) {
  put("/user/me/update", { profile_description: description, skills:skills }).then((data) => {
    console.log(data)
  }).catch(() => alert("Error changing the password!"))
}

export default function ProfileConsult() {
  const [description, setDescription] = useState(null);
  const [skills, setSkills] = useState(null);

  useEffect(() => {
    if((description === null) || (skills === null))
      get("/user/me").then((data) => {
        console.log(data)
        setDescription(data.profile_description)
        setSkills(data.skills)
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
        <AffiliationsTable institution="Instituto Politécnico de Bragança" location="Portugal" department="Department of Technology"/>
      </ProfileDescription>
  )
}
