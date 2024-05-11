"use client";
import { ProfileDescription } from "@/components/ProfileDescription"
import { ProfileNavigation  } from "@/components/ProfileNavigation"
import { FollowingTable     } from "@/components/FollowingTable"
import   ScreenLoader         from "@/components/ui/ScreenLoader"
import { signIn, useSession } from "next-auth/react";
import { redirect           } from "next/navigation"
const getPosts = async (id) => {
  const req = await fetch("http://localhost:8000/user/id/" + id + "/likedPosts")
}
export default function SavedConsult() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/')
    },
  })
  if (status == "loading")
    return <ScreenLoader />
  const posts = getPosts(session.user.id)
    const rl = [ "research1", "research2" ]
    const ql = [ "question1", "question2" ]
    const tl = [ "topic1", "topic2" ]
    return (
        <div className="fixed">
          <ProfileDescription name={ session.user.displayName } education="IPB" country="Portugal"/>
          <ProfileNavigation/>
          <div className="flex flex-cols py-10 justify-between max-w-3xl xl:max-w-5xl">
            <FollowingTable researchList={rl} questionList={ql} topicList={tl}/>
          </div>
        </div>
    );
}
