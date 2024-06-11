"use client"


import PostCards from "@/components/PostCard";
import { ProfileDescription } from "@/components/ProfileDescription";
import { get } from "@/data/webService";
import { useEffect, useState } from "react";

export default function SavedConsult() {

  const [savedPosts, setSavedPosts] = useState([]);
  const userId = sessionStorage.getItem("userId");

  useEffect(() => {

    get("/post/").then((data) => {

      get(`/user/id/${userId}`)
        .then(({ liked_posts_id }) => {
          if (liked_posts_id) {
            setSavedPosts(data.filter(post => liked_posts_id.includes(post.id)))
          }
        });

    });
  }, []);


  return (
    <ProfileDescription>
      <div className="flex flex-cols w-full">
        <div className=" w-2/6 space-y-2">
          <div className="w-3/4 bg-white border border-black items-center py-2">
            <div className="ml-2 text-black">Your Liked Posts</div>
          </div>
          <div className=" font-bold text-black w-3/4 bg-white border border-black py-2 items-center">
            <button className="ml-6 py-4 hover:underline">Liked ({savedPosts.length})</button>
          </div>
        </div>
        <div className="items-center w-full justify-items-center grid">
          <div className="font-14 text-center py-2 text-xl text-bold">Liked Posts</div>
          <div className="w-full">

            {savedPosts.map(post => {
              return (<PostCards
                key={post.id}
                alreadyLiked={false}
                userId={userId}
                postId={post.id}
                data={post}
                likedScreen={true}
              />)
            })}

          </div>
        </div>
      </div>
    </ProfileDescription>
  )
}
