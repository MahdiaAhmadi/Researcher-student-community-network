"use client"

import HomePage from '@/components/Homepage';
import ScreenLoader from '@/components/ui/ScreenLoader';
import { signOut, useSession } from "next-auth/react";
import { redirect } from 'next/navigation';
import { useEffect } from 'react';

export default function Page() {
  const userId = sessionStorage.getItem("userId");
  const { data: session, status } = useSession();

  useEffect(() => {
    if ((userId == null || userId == undefined)
      && status === "authenticated") {
      signOut();
    }
  }, [])


  if (status === "unauthenticated") {
    return <HomePage />
  } else if (status === "loading") {
    return <ScreenLoader />
  } else if (status === "authenticated") {
    return redirect('/timeline');
  }
  return null;
}
