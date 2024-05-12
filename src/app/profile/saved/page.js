"use client"

import { ProfileDescription } from "@/components/ProfileDescription"
import { SavedPosts } from "@/components/SavedPosts"

export default function SavedConsult() {
  const savedPosts = ["1", "2", "3"]
  const archivedPosts = ["6", "4", "5"]
  return (
    <ProfileDescription>
      <SavedPosts savedPosts={savedPosts} archivedPosts={archivedPosts} />
    </ProfileDescription>
  )
}
