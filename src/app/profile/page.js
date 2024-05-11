"use client";
import { ProfileDescription } from "@/components/ProfileDescription"
import { ProfileNavigation  } from "@/components/ProfileNavigation"
import { AffiliationsTable  } from "@/components/AffiliationsTable"
import { AboutMeTable       } from "@/components/AboutMeTable"
import   ScreenLoader         from "@/components/ui/ScreenLoader"
import { signIn, useSession } from "next-auth/react";
import { redirect           } from "next/navigation"
export default function ProfileConsult() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/')
    },
  })
  if (status == "loading")
    return <ScreenLoader />
  return (
      <div className="fixed">
        <ProfileDescription name={ session.user.displayName } education="IPB" country="Portugal"/>
        <ProfileNavigation/>
        <div className="flex flex-cols py-10 justify-between max-w-3xl xl:max-w-5xl">
          <AboutMeTable informationMap={{ "Description":1, "teste":2 }}/>
          <AffiliationsTable informationMap={{ "Description":1, "teste":2 }}/>
        </div>
      </div>
  )
}
