"use client";
import { SessionProvider } from "next-auth/react";

export default function SectionContainer({ children }) {
  return (
    <SessionProvider>
      <section className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
        {children}
      </section>
    </SessionProvider>
  )
}
