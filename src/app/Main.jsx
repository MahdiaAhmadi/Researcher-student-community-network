"use client";
import LoginButton from "@/components/LoginButton";

import PostCards from "../components/PostCard";
import Homepage from "../components/Homepage";
export default function Home() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <Homepage></Homepage>

        <ul className="divide-y divide-gray-200 dark:divide-gray-700">

        </ul>
        <LoginButton />
      </div>

    </>
  );
}
