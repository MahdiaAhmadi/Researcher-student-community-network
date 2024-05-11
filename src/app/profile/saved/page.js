"use client";
import { ProfileDescription } from "@/components/ProfileDescription"
import { ProfileNavigation  } from "@/components/ProfileNavigation"
import { SavedPosts         } from "@/components/SavedPosts"
import   ScreenLoader         from "@/components/ui/ScreenLoader"
import { signIn, useSession } from "next-auth/react";
import { redirect           } from "next/navigation"
export default function SavedConsult() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/')
    },
  })
  if (status == "loading")
    return <ScreenLoader />
  const savedPosts = [ "bla1", "bla2", "bla3" ]
  const archivedPosts = [ "bla6", "bla4", "bla5" ]
    return (
        <div className="fixed">
          <ProfileDescription name={ session.user.displayName } education="IPB" country="Portugal"/>
          <ProfileNavigation/>
          <div className="flex flex-cols py-10 justify-between max-w-3xl xl:max-w-5xl">
            <SavedPosts savedPosts={savedPosts} archivedPosts={archivedPosts}/>
          </div>
        </div>
    );
}
