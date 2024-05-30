"use client";

import { useSession } from "next-auth/react";
import Link from "./Link";
import MobileNav from "./MobileNav";
import SearchBar from "./SearchBar";
import UserIcon from "./Usericon";

export default function Header() {
  const { status } = useSession();
  return (
    <header className="flex w-full items-center justify-between py-3  bg-secondary  px-10 ">
      <div>
        <Link href="/">
          <div className="flex items-center justify-between">
            <div className="mr-3"></div>
            <div className="hidden h-6 text-2xl font-semibold sm:block">
              ResearchHub
            </div>
          </div>
        </Link>
      </div>
      {status === "authenticated" && (
        <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
          <Link
            href="/timeline"
            className="hidden font-medium text-white-100 hover:border-b-2  hover:border-spacing-1 hover:border-primary-950 hover:transition duration-100 ease-in-out "
          >
            Home
          </Link>
          <SearchBar />
          <UserIcon />
          <MobileNav />
        </div>
      )}
    </header>
  );
}
