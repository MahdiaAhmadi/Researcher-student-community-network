import Link from "next/link"
const ProfileNavigation = () => {
  return (
    <div className="bg-zinc-300 shadow flex items-center justify-between space-x-4 py-2 max-w-3xl xl:max-w-5xl h-fit rounded-md text-black">
      <div>
        <Link className="ml-4 p-1 hover:bg-black hover:text-white rounded-md" href="/profile">Profile</Link>
        <Link className="p-1 hover:bg-black hover:text-white rounded-md" href="/profile/stats">Stats</Link>
        <Link className="p-1 hover:bg-black hover:text-white rounded-md" href="/profile/following">Following</Link>
        <Link className="p-1 hover:bg-black hover:text-white rounded-md" href="/profile/saved">Saved</Link>
      </div>
      <div>
        <Link className="mr-4 rounded-md bg-teal-500 text-white font-medium p-1" href="/profile/addResearch">+ Add Research</Link>
      </div>
    </div>
  )
}

export { ProfileNavigation }
