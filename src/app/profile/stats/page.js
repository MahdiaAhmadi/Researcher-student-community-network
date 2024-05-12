import { ProfileDescription } from "@/components/ProfileDescription"
import { PublicationStatus  } from "@/components/PublicationStatus"
export default function StatsConsult() {
  return (
        <ProfileDescription>
          <PublicationStatus
            numCitations={10}
            numRecommendations={20}
            numFullReads={30}
            numOtherReads={40}
          />
        </ProfileDescription>
  )
}
