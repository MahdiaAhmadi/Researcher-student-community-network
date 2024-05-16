"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

export default function LoginButton() {
  const { data: session } = useSession();
  return;
}
