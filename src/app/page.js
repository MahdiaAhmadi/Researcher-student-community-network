"use client";
import { signIn, useSession } from "next-auth/react";
import Home from "./Main";

export default function Page() {
  const { data: session, status } = useSession();
  if (status === "unauthenticated") {
    signIn();
    return null;
  } else if (status === "loading") {
    return "Loading...";
  } else if (status === "authenticated") {
    return <Home />;
  }
  return null;

  return <Home></Home>;
}
