"use client"
import ScreenLoader from "@/components/ui/ScreenLoader"
import Link from "next/link"
const ProfileNavigation = () => {
  return (
    <div className="bg-zinc-300 shadow flex items-center justify-between space-x-4 py-2  h-16 rounded-md text-black">
      <div>
        <Link className="ml-48 px-8 py-4 hover:bg-black hover:text-white rounded-full" href="/profile">Profile</Link>
        <Link className="px-8 py-4 hover:bg-black hover:text-white rounded-full" href="/profile/posts">Posts</Link>
        <Link className="px-8 py-4 hover:bg-black hover:text-white rounded-full" href="/profile/stats">Stats</Link>
        <Link className="px-8 py-4 hover:bg-black hover:text-white rounded-full" href="/profile/following">Following</Link>
        <Link className="px-8 py-4 hover:bg-black hover:text-white rounded-full" href="/profile/saved">Saved</Link>
      </div>
      <div>
        <Link className="mr-48 rounded-full bg-teal-500 text-white font-bold p-3" href="/profile/addResearch">+ Add Research</Link>
      </div>
    </div>
  )
}

export { ProfileNavigation }
