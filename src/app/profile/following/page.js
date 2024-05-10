"use client";
import { ProfileDescription } from "@/components/ProfileDescription"
import { ProfileNavigation } from "@/components/ProfileNavigation"
import { FollowingTable } from "@/components/FollowingTable"
import { signIn, useSession } from "next-auth/react";
export default function StatsConsult() {
    const rl = [ "research1", "research2" ]
    const ql = [ "question1", "question2" ]
    const tl = [ "topic1", "topic2" ]
    return (
        <div className="fixed">
          <ProfileDescription name="First Last" education="IPB" country="Portugal"/>
          <ProfileNavigation/>
          <div className="flex flex-cols py-10 justify-between max-w-3xl xl:max-w-5xl">
            <FollowingTable researchList={rl} questionList={ql} topicList={tl}/>
          </div>
        </div>
    );
}
