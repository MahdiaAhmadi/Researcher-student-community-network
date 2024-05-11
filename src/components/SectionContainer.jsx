"use client";
import { SessionProvider } from "next-auth/react";

export default function SectionContainer({ children }) {
  return (
    <SessionProvider>
      <section className="mx-auto max-w">{children}</section>
    </SessionProvider>
  );
}
