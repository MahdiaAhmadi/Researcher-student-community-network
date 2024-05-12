"use client"
import Image from "next/image"
import profilePicture from "./106x87.png"
import { ProfileNavigation } from "./ProfileNavigation"
import   ScreenLoader         from "@/components/ui/ScreenLoader"
import { signIn, useSession } from "next-auth/react";
import { redirect           } from "next/navigation"
const ProfileDescription = ({ children }) => {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/')
    },
  })
  if (status == "loading")
    return <ScreenLoader />
  return (
    <div className="h-screen w-full">
      <div className="flex w-screen flex-wrap py-3 ml-48 mr-48">
        <Image className="left-0 top-[33px] p-2" alt="Profile picture of the user" src={profilePicture} width={106} height={87}/>
        <div className="pl-2 w-1/5">
          <div>{session.user.displayName}</div>
          <div>{session.user.email}</div>
          <div>Portugal</div>
        </div>
      </div>
      <ProfileNavigation/>
      <div className="flex flex-cols py-10 justify-between ml-48 mr-48">
        { children }
      </div>
    </div>
  )
}

export { ProfileDescription }
