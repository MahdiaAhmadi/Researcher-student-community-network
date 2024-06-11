"use client"
import ScreenLoader from "@/components/ui/ScreenLoader"
import { useSession } from "next-auth/react"
import Image from "next/image"
import { redirect } from "next/navigation"
import profilePicture from "./106x87.png"
import { ProfileNavigation } from "./ProfileNavigation"


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
    <div>
      <div className="flex justify-between py-2 ml-48 mr-48">
        <section className="flex">
          <Image className="left-0 top-[33px] p-2" alt="Profile picture of the user" src={profilePicture} width={106} height={87} />
          <div className="pl-2">
            <div>{session.user.displayName}</div>
            <div>{session.user.email}</div>
            <div>Portugal</div>
          </div>
        </section>

        <section className="self-center">
          <div className="mb-1 text-base font-medium text-white">Your Progress to Became a Researcher</div>
          <div className="w-full rounded-full h-2.5 mb-4 bg-gray-700">
            <div className="h-2.5 rounded-full bg-gray-300" style={{ width: "45%" }}></div>
          </div>
        </section>

      </div>
      <ProfileNavigation />
      <div className="flex flex-cols justify-between ml-48 mr-48 no-scrollbar mt-2">
        {children}
      </div>
    </div>
  )
}

export { ProfileDescription }

