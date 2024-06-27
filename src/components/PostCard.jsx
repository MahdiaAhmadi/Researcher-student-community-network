"use client";

import { get, post, put } from "@/data/webService";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function PostCards({
  userId,
  postId,
  alreadyLiked,
  data,
  likedScreen,
  authorIsFollowed,
}) {
  const linkUrl = "/posts/".concat(postId);
  const [likes, setLikes] = useState(data?.likes ? data.likes : 0);
  const [liked, setIsLiked] = useState(alreadyLiked);
  const [comment, setComment] = useState("");
  const [commentsCount, setCommentsCount] = useState(data.comments_id.length);
  const [authorData, setAuthorData] = useState(null);
  const [institution, setInstitution] = useState(null);

  useEffect(() => {
    console.log("author");
    get(`/user/id/${data.author_id}`).then((data) => {
      setAuthorData(data)
      console.log(data);
    }).catch(() => alert("error getting author information"))
  }, [data])
  useEffect(() => {
    if (authorData != null) {
      console.log(authorData);
      get(`/institution/${authorData.institution_id}`).then((data) => {
        setInstitution(data)
        console.log(data);
      }).catch(() => alert("error getting author information"))
    }
  }, [authorData])
  const likePost = () => {
    if (!liked && !likedScreen) {
      let count = likes + 1;
      put(`/post/like/${postId}`)
        .then(() => {
          setLikes(count);
          setIsLiked(true);
        })
        .catch(() => {
          setLikes(count);
          setIsLiked(true);
        });
    }
  };

  const followUser = () => {
    if (!authorIsFollowed)
      post(`/user/follow-user/${data.author_id}`)
        .then(() => {
          alert("Followed");
        })
        .catch(() => null);
  };

  const createComment = () => {
    if (comment.trim() !== "") {
      const requestData = {
        author_id: userId,
        post_id: postId,
        content: comment,
      };
      post("/comment/", requestData)
        .then(() => {
          setComment("");
          setCommentsCount(commentsCount + 1);
        }).catch(() => {
          alert("Error creating comment");
        })
    }
  };

  return (
    <div className="research-card bg-gray-200 text-fourth px-5 py-3 mt-6 rounded-md hover:shadow-sm">
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
            <p>{authorData?.display_name}</p>
            <p>{institution?.name}</p>
          </div>
        </div>
        {userId != data?.author_id && (
          <button
            className={"follow-button text-white bg-secondary px-3 py-1 rounded-r-2xl rounded-l-2xl ".concat(
              authorIsFollowed ? " opacity-50 cursor-not-allowed" : ""
            )}
            disabled={authorIsFollowed}
            onClick={followUser}
          >
            <i className="fas fa-star" />
            {authorIsFollowed ? "Followed" : "Follow"}
          </button>
        )}
      </div>
      <Link href={linkUrl}>
        <div className="research-info">
          <h1 className="font-bold text-2xl mb-1">{data?.title}</h1>
          <div className="flex flex-row items-center justify-start">
            <div className="flex gap-3">
              {data?.categories?.map((cat) => {
                return (
                  <div
                    key={cat.id}
                    className="px-3 text-sm text-white bg-blue-500 rounded-2xl ring-2 ring-blue-800"
                  >
                    {cat.name}
                  </div>
                );
              })}
            </div>
          </div>
          <p className="mb-1">{data?.summary}</p>
        </div>
      </Link>
      {!likedScreen && (
        <div className="flex mt-2 gap-12">
          <div className="flex gap-1 ">
            <span
              className={"material-symbols-outlined cursor-pointer ".concat(
                liked ? "text-secondary" : "text-black"
              )}
              onClick={likePost}
            >
              thumb_up
            </span>
            {likes}
          </div>

          <div className="flex gap-1">
            <span
              className="material-symbols-outlined text-black cursor-pointer "
            >
              chat_bubble
            </span>
            <p>{commentsCount}</p>
          </div>

        </div>
      )}
      <div className="flex mt-4">
        <div className="w-11/12">
          <textarea
            id={"comment-area-".concat(postId)}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write a comment..."
            className="shadow-sm border 
                text-sm rounded-lg block w-full p-2.5 
                bg-gray-700 border-gray-600 placeholder-gray-400 text-white 
                focus:ring-blue-500 focus:border-blue-500 shadow-sm-light"
          />
        </div>
        <button onClick={createComment}
          className="w-1/12 ml-2 text-white bg-secondary px-2  rounded-r-2xl rounded-l-2xl ">
          Publish
        </button>
      </div>
    </div>
  );
}
