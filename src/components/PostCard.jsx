"use client"

import { put } from "@/data/webService";
import Link from "next/link";
import { useState } from "react";


export default function PostCards({ postId, data }) {

  const linkUrl = "/posts/".concat(postId);
  const [likes, setLikes] = useState(data?.likes ? data.likes : 0);
  const [liked, setIsLiked] = useState(false);

  const likePost = () => {
    if (!liked)
      put("/post/like/".concat(postId)).then(() => {
        let count = likes + 1
        setLikes(count);
        setIsLiked(true)
      })
  }

  return (
    <div
      className="research-card bg-gray-200 text-fourth px-5 py-3 mt-6 rounded-md hover:shadow-sm">
      <div className="profile flex items-center justify-between">
        <div className="flex gap-3 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>

          <div className="profile-info">
            <p>Researcher Name</p>
            <p>University School Name</p>
          </div>
        </div>
        <button className="follow-button text-white bg-secondary px-3 py-1 rounded-r-2xl rounded-l-2xl ">
          <i className="fas fa-star"></i> Follow
        </button>
      </div>
      <Link href={linkUrl}>
        <div className="research-info">
          <h1 className="font-bold text-2xl mb-1">{data?.title}</h1>
          <p className="mb-1">{data?.summary}</p>
          <div className="flex flex-row items-center justify-start">
            <div className="flex gap-3">
              <div className="px-3 text-sm text-white bg-blue-500 rounded-2xl ring-2 ring-blue-800">
                Category 1
              </div>
              <div className="px-3 text-sm text-white bg-yellow-500 rounded-2xl ring-2 ring-yellow-800">
                Category 2
              </div>
            </div>
          </div>
        </div>
      </Link>
      <div className="flex mt-2 gap-12">
        <div className="flex gap-1 ">
          <span className="material-symbols-outlined text-black cursor-pointer "
            onClick={likePost}>
            thumb_up
          </span>
          {likes}
        </div>
        <div className="flex gap-1">
          <span className="material-symbols-outlined text-black cursor-pointer ">
            chat_bubble
          </span>
          {data.comments_id.length}
        </div>
      </div>
    </div>

  );
}
