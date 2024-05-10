<<<<<<< HEAD
import PostCards from "../components/PostCard";
import TimeLine from "./timeline/page";
export default function Home() {
  return (
    <>
     <TimeLine/>
=======
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

>>>>>>> 3c7503a3be647b5362514a6de983deac5de5b4e4
    </>
  );
}
