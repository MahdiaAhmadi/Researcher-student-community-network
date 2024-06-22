"use client"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import PostCards from "@/components/PostCard";
import { get } from "@/data/webService"
import { Button } from "flowbite-react"

export default function AdminPage() {
  const [reportData, setReportData] = useState([]);
  const [authorized, setAuthorized] = useState(false);
  const [type, setType] = useState("posts");



  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/");
    },
  });

  const getReports = () => {
        get("/post/reported-posts").then((data) => {
        const sortedData = data.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setReportData(sortedData);
        setType("posts")
        }).catch(() => null);
    }
  const getBannedPosts = () => {
        get("/post/banned-posts").then((data) => {
        const sortedData = data.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setReportData(sortedData);
        setType("posts")
        }).catch(() => null);
  }
  const getBannedUsers = () => {
        get("/user/banned-users").then((data) => {
        const sortedData = data.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setReportData(sortedData);
        setType("users")
        }).catch(() => null);
  }
  if (status == "authenticated" && session.user.role == "admin") {
    return (
        <div className="flex flex-col">
        <div className="text-center w-full bg-red-500">Admin Page</div>
        <div className="flex">
            <div className="w-full pl-12">
                <div className="pl-2">
                {reportData.map((post) => {
                    return (
                    <PostCards
                        key={post.id}
                        alreadyLiked={false}
                      userId={session.user.id}
                        postId={post.id}
                        authorIsFollowed={false}
                        data={post}
                    />
                    );
                })}
                </div>
            </div>
      <div className="w-4/12 px-4">
        <div className="bg-gray-100 px-5 py-3 mt-6 shadow-md rounded-md flex-wrap">
        <Button className="bg-gray-500" onClick={getReports}>Reported Posts</Button>
        <Button className="bg-gray-500" onClick={getBannedPosts}>Banned Posts</Button>
        <Button className="bg-gray-500" onClick={getBannedUsers}>Banned Users</Button>
        </div>
      </div>
        </div>
        </div>
    );
  }
  return <div>Not Authorized</div>
}
