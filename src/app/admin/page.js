"use client"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import PostCards from "@/components/PostCard";
import { get } from "@/data/webService"

export default function AdminPage() {
  const [reportData, setReportData] = useState([]);
  const [authorized, setAuthorized] = useState(false);


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
        }).catch(() => null);
    }
  if (status == "authenticated" && session.user.role == "admin") {
    return (
        <div className="flex flex-col">
        <div className="text-center w-full bg-red-500">Admin Page</div>
        <button onClick={getReports}>retrieve posts</button>
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
        </div>
    );
  }
  return <div>Not Authorized</div>
}
