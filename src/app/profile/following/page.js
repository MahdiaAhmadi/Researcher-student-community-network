import { ProfileDescription } from "@/components/ProfileDescription"
import { FollowingTable     } from "@/components/FollowingTable"
export default function SavedConsult() {
  const rl = [ "research1", "research2" ]
  const ql = [ "question1", "question2" ]
  const tl = [ "topic1", "topic2" ]
  return (
      <ProfileDescription>
        <FollowingTable researchList={rl} questionList={ql} topicList={tl}/>
      </ProfileDescription>
  )
}
