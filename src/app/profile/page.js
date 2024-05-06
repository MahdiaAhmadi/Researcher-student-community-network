"use client";
import { ProfileDescription } from "@/components/ProfileDescription"
import { ProfileNavigation } from "@/components/ProfileNavigation"
import { AffiliationsTable } from "@/components/AffiliationsTable"
import { AboutMeTable } from "@/components/AboutMeTable"
import { signIn, useSession } from "next-auth/react";
export default function ProfileConsult() {
    return (
        <div className="fixed">
          <ProfileDescription name="First Last" education="IPB" country="Portugal"/>
          <ProfileNavigation/>
          <div className="flex flex-cols py-10 justify-between max-w-3xl xl:max-w-5xl">
            <AboutMeTable informationMap={{ "Description":1, "teste":2 }}/>
            <AffiliationsTable informationMap={{ "Description":1, "teste":2 }}/>
          </div>
        </div>
    );
}
