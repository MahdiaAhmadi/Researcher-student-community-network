"use client";
import { ProfileDescription } from "@/components/ProfileDescription"
import { ProfileNavigation } from "@/components/ProfileNavigation"
import { SavedPosts } from "@/components/SavedPosts"
import { signIn, useSession } from "next-auth/react";
export default function SavedConsult() {
  const savedPosts = [ "bla1", "bla2", "bla3" ]
  const archivedPosts = [ "bla6", "bla4", "bla5" ]
    return (
        <div className="fixed">
          <ProfileDescription name="First Last" education="IPB" country="Portugal"/>
          <ProfileNavigation/>
          <div className="flex flex-cols py-10 justify-between max-w-3xl xl:max-w-5xl">
            <SavedPosts savedPosts={savedPosts} archivedPosts={archivedPosts}/>
          </div>
        </div>
    );
}
