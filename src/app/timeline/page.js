"use client";

import PostCards from "@/components/PostCard";
import RecentViewPostCards from "@/components/RecentViewCard";
import ScreenLoader from "@/components/ui/ScreenLoader";
import { get } from "@/data/webService";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function TimeLine() {
  const [timelineData, setTimelineData] = useState([]);
  const [userLikedPosts, setUserLikedPosts] = useState([]);
  const [follows, setFollows] = useState([]);

  const userId = sessionStorage.getItem("userId");

  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/");
    },
  });

  useEffect(() => {

    get(`/user/by-token`).then(({ liked_posts_id, follows_id }) => {
      if (liked_posts_id) setUserLikedPosts(liked_posts_id);
      if (follows_id) setFollows(follows_id);
    }).catch(() => null);
    get("/post/").then((data) => {
      const sortedData = data.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      setTimelineData(sortedData);
    }).catch(() => null);
  }, []);

  if (status == "loading") {
    return <ScreenLoader />;
  }

  return (
    <div className="flex">
      <div className="w-8/12 pl-12">
        <div className="pl-2">
          {timelineData.map((post) => {
            let liked = userLikedPosts.some((l) => l == post.id);
            let followUser = follows.some((l) => l == post.author_id);
            return (
              <PostCards
                key={post.id}
                alreadyLiked={liked}
                userId={userId}
                postId={post.id}
                authorIsFollowed={followUser}
                data={post}
              />
            );
          })}
        </div>
      </div>
      <div className="w-4/12 px-4">
        <div className="bg-gray-100 px-5 py-3 mt-6 shadow-md rounded-md flex-wrap">
          <h1 className="font-black text-2xl text-black">Recent Views</h1>
          <RecentViewPostCards />
        </div>
      </div>
    </div>
  );
}
