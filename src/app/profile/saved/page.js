import { ProfileDescription } from "@/components/ProfileDescription"
import { SavedPosts         } from "@/components/SavedPosts"
export default function SavedConsult() {
  const savedPosts = [ "bla1", "bla2", "bla3" ]
  const archivedPosts = [ "bla6", "bla4", "bla5" ]
    return (
        <ProfileDescription>
          <SavedPosts savedPosts={savedPosts} archivedPosts={archivedPosts}/>
        </ProfileDescription>
    )
}
