import { ProfileDescription } from "@/components/ProfileDescription"
import { AffiliationsTable  } from "@/components/AffiliationsTable"
import PostCards              from "@/components/PostCard"
export default function PostsConsult() {
  return (
      <ProfileDescription>
        <div className='max-h-[79dvh] w-full pl-2 overflow-y-scroll no-scrollbar'>
          {["1","2","3"].map((i) => {
            return <PostCards key={i}/>
          })}
        </div>
      </ProfileDescription>
  )
}
