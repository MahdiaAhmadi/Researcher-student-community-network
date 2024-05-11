"use client";
import HomePage from '@/components/Homepage';
import { signIn, useSession } from "next-auth/react";

export default function Page() {
  const { data: session, status } = useSession();
  if (status === "unauthenticated") {
    signIn();
    return null;
  } else if (status === "loading") {
    return "Loading...";
  } else if (status === "authenticated") {
    return <HomePage />;
  }
  return null;
}
