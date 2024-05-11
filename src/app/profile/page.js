import { ProfileDescription } from "@/components/ProfileDescription"
import { AffiliationsTable  } from "@/components/AffiliationsTable"
import { AboutMeTable       } from "@/components/AboutMeTable"
export default function ProfileConsult() {
  return (
      <ProfileDescription>
        <AboutMeTable informationMap={{ "Description":1, "teste":2 }}/>
        <AffiliationsTable informationMap={{ "Description":1, "teste":2 }}/>
      </ProfileDescription>
  )
}
