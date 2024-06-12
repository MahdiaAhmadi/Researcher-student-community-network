import { ProfileDescription } from "@/components/ProfileDescription"
import { AffiliationsTable  } from "@/components/AffiliationsTable"
import { AboutMeTable       } from "@/components/AboutMeTable"
export default function ProfileConsult() {
  const description ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  const skills = ["Security", "Computer Network"]
  return (
      <ProfileDescription>
        <AboutMeTable
          Description={description}
            Skills={skills}
        />
        <AffiliationsTable institution="Instituto Politécnico de Bragança" location="Portugal" department="Department of Technology"/>
      </ProfileDescription>
  )
}
