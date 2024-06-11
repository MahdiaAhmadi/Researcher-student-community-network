"use client"

import PostCards from "@/components/PostCard";
import { ProfileDescription } from "@/components/ProfileDescription";
import { get } from "@/data/webService";
import { useEffect, useState } from "react";


export default function SavedConsult() {

  const [savedPosts, setSavedPosts] = useState([]);
  const [researchersFolled, setReseachersFollowed] = useState([]);
  const userId = sessionStorage.getItem("userId");

  useEffect(() => {

    get("/post/").then((data) => {

      get(`/user/id/${userId}`)
        .then(({ follows_id }) => {
          if (follows_id) {
            setReseachersFollowed(follows_id);
            setSavedPosts(data.filter(post => follows_id.includes(post.author_id)))
          }
        });

    });
  }, []);

  return (
    <ProfileDescription>
      <div className="flex flex-cols w-full">
        <div className=" w-2/6 space-y-2">
          <div className=" font-bold text-black w-3/4 bg-white border border-black py-2 items-center">
            <button className="p-2 hover:underline">Researchers Followed ({researchersFolled.length})</button>
          </div>

        </div>
        <div className="items-center w-full">
          <div className="font-14 text-center text-xl text-bold">Followed Researchers Posts</div>
          <section className="mb-8">
            {savedPosts.map(post => {
              return (<PostCards
                key={post.id}
                alreadyLiked={false}
                userId={userId}
                postId={post.id}
                data={post}
                likedScreen={true}
                authorIsFollowed={true}
              />)
            })}
          </section>
          {/* <div>
            <div className="bg-white border border-black p-4 shadow mx-8 flex justify-between">
              <div className="text-neutral-800 ">Topics You Followed ({topicList.length})</div>
              <button className="text-black hover:underline">Edit</button>
            </div>
            <div className=" mx-8 flex justify-center mt-2 p-4">
              {topicList.map((elem, idx) => {
                return (
                  <div key={idx} className=" mx-2 p-3 bg-zinc-300 rounded-full text-black text-center">
                    {elem}
                  </div>)
              })}
            </div>
          </div> */}
        </div>
      </div>
    </ProfileDescription>
  )
}
