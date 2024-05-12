import PostCards from "@/components/PostCard"
import { ProfileDescription } from "@/components/ProfileDescription"
export default function PostsConsult() {
  return (
    <ProfileDescription>
      <div className='w-full pl-2'>
        {["1", "2", "3"].map((i) => {
          return <PostCards key={i} />
        })}
      </div>
    </ProfileDescription>
  )
}
