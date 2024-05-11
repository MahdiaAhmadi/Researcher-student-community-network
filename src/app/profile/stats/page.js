"use client";
import { ProfileDescription } from "@/components/ProfileDescription"
import { ProfileNavigation  } from "@/components/ProfileNavigation"
import { PublicationStatus  } from "@/components/PublicationStatus"
import { ScreenLoader       } from "@/components/ui/ScreenLoader"
import { signIn, useSession } from "next-auth/react"
import { redirect           } from "next/navigation"
export default function StatsConsult() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/')
    },
  })
  if (status == "loading")
    return <ScreenLoader />

  return (
      <div className="w-full h-screen">
        <ProfileDescription name={ session.user.displayName } education="IPB" country="Portugal"/>
        <ProfileNavigation/>
        <div className="flex flex-cols py-10 justify-between ml-48 mr-48">
          <PublicationStatus
            numCitations={10}
            numRecommendations={20}
            numFullReads={30}
            numOtherReads={40}
          />
        </div>
      </div>
  )
}
