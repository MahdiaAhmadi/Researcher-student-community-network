"use client"

import HomePage from '@/components/Homepage';
import ScreenLoader from '@/components/ui/ScreenLoader';
import { useSession } from "next-auth/react";
import { redirect } from 'next/navigation';

export default function Page() {
  const { data: session, status } = useSession();
  if (status === "unauthenticated") {
    return <HomePage />
  } else if (status === "loading") {
    return <ScreenLoader />
  } else if (status === "authenticated") {
    return redirect('/timeline');
  }
  return null;
}
