"use client";
import { ProfileDescription } from "@/components/ProfileDescription"
import { ProfileNavigation } from "@/components/ProfileNavigation"
import { PublicationStatus } from "@/components/PublicationStatus"
import { signIn, useSession } from "next-auth/react";
export default function StatsConsult() {
    return (
        <div className="fixed">
          <ProfileDescription name="First Last" education="IPB" country="Portugal"/>
          <ProfileNavigation/>
          <div className="flex flex-cols py-10 justify-between max-w-3xl xl:max-w-5xl">
            <PublicationStatus
              numCitations={10}
              numRecommendations={20}
              numFullReads={30}
              numOtherReads={40}
            />
          </div>
        </div>
    );
}
