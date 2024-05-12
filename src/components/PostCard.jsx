"use client"

import Link from "next/link";


export default function PostCards({ postId }) {

  const linkUrl = "/posts/".concat(postId);

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
          <h1 className="font-bold text-2xl mb-1">Title of Research</h1>
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
          {/**<div className="post-details">
            {isLoading && <div>Loading....</div>}
            {error && <div>{error}</div>}
            {post && (
              <article>
                <h2>{post.title}</h2>
                <p>summary for this post {post.summary}</p>
                <p>Date of creation: {post.created_at}</p>
              </article>
            )}
            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleBack}>Back </button>
          </div> */}
          <div className="relative ">

            <div className="reads absolute bottom-0 right-0 mt-4">Reads: 20</div>
            <hr className="my-4 border-t-2 border-fourth  mt-5" />
          </div>
        </div>
      </Link>
      <div className="interactions flex  gap-12">
        <div className="likes flex gap-1 ">
          <i className="fas fa-thumbs-up"></i> 12
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 hover:bg-gray-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
            />
          </svg>
        </div>
        <div className="comments flex gap-1">
          <i className="fas fa-comments"></i> 12
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 hover:bg-gray-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
            />
          </svg>
        </div>
      </div>
    </div>

  );
}
