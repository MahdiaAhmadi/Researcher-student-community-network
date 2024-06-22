"use client";

import { deletereq, get, post } from "@/data/webService";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { BanDialog } from "@/components/BanDialog";
import { ReportDialog } from "@/components/ReportDialog";

export default function DetailPage({ params }) {

  const [postData, setPostData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [comment, setComment] = useState("");

  const id = params.id;
  const userId = sessionStorage.getItem("userId");

  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/");
    },
  });


  useEffect(() => {
    if (status == "authenticated" && id) {
      get(`/post/id/${id}`)
        .then(data => {
          setLoading(false)
          setPostData(data);
        }).catch(() => redirect("/timeline"))
    } else {
      redirect("/timeline")
    }
  }, [id]);

  const handleDelete = () => {
    deletereq(`/post/id/${id}`)
      .then(response => {
        alert("Post deleted successfully!");
        redirect("/timeline")
      }).catch(() => {
        alert(
          "An error occurred while deleting the post. Please try again later."
        );
      })
  };

  const createComment = () => {
    if (comment.trim() !== "") {
      const requestData = {
        author_id: userId,
        post_id: id,
        content: comment,
      };
      post("/comment/", requestData)
        .then(() => {
          setComment("");
          get(`/post/id/${id}`)
            .then(data => {
              setPostData(data);
            })
        }).catch(() => {
          alert("Error creating comment");
        })
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  if (!postData) {
    return <div>No post data found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <article className="rounded shadow-md overflow-hidden flex flex-col max-w-full">
        <header className="p-4 bg-gray-100">
          <div className="flex">
            <Link href={"/timeline"}>
              <span className="material-symbols-outlined text-black">
                arrow_back
              </span>
            </Link>
            <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate">
              {postData?.title}
            </h1>
            <ReportDialog postId={postData?.id}/>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="Black"
                className="w-12 h-12 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              <div>
                <div className="flex">
                  <p className="text-sm font-medium text-black">
                    Researcher Name
                  </p>
                  {session.user.role == "admin" ? <BanDialog userId={params.id}/> : null}
                  <button
                    className="follow-button text-white bg-secondary px-3 ml-2 
              text-xs mt-1  rounded-2xl"
                  >
                    <i className="fas fa-star" /> Follow
                  </button>
                </div>
                <p className="text-sm font-medium text-gray-500">
                  University Name
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              {postData?.categories?.map(cat => {
                return (
                  <div key={cat.id} className="px-3 text-sm text-white bg-blue-500 rounded-2xl ring-2 ring-blue-800">
                    {cat.name}
                  </div>
                )
              })}

            </div>
          </div>
        </header>
        <div className="p-4 prose max-w-none text-gray-700 bg-white">
          <div className="flex justify-center items-center mb-4"></div>
          <p className="text-lg font-bold">Summary</p>
          <p>
            {postData?.summary}
          </p>
          <p className="text-lg font-bold">Content</p>
          <p>
            {postData?.content}
          </p>
          <p className="text-lg font-bold">Research Access Link:
            {postData?.research_link && <a className="text-lg font-bold"> {postData?.research_link}</a>}
          </p>

          <div className="mt-4">
            <p className="text-lg font-bold">Files</p>
            <div className="flex items-center justify-center h-32 bg-gray-200 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-16 h-16 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </div>
          </div>
          <hr className="border-1 border-gray-600"></hr>
          <div className="handle-post flex items-end justify-end gap-3  ">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-7 rounded-full "
              onClick={handleDelete}
            >
              Delete
            </button>

            <Link
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-7 rounded-full"
              href={`/posts/update?id=${id}`}
            >
              Edit
            </Link>
          </div>
        </div>
      </article>
      <section className="rounded shadow-md overflow-hidden flex flex-col mt-8">
        <header className="p-4 bg-gray-100">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate">
            Discussion
          </h2>
        </header>
        <div className="p-4 prose max-w-none text-gray-700 bg-white">
          <div className="flex mb-4">
            <div className="w-11/12">
              <textarea
                id={"comment-area-".concat(id)}
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
          {postData?.comments_id.length > 0 ?
            <>
              {postData?.comments?.map((comment) => {
                console.log({ comment })
                return (
                  <div key={comment.id} className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="Black"
                      className="w-12 h-12 cursor-pointer"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                    <div className="ml-4">
                      <p className="text-base font-medium text-black-500">
                        {comment.author ? comment.author.display_name
                          : "Researcher Name"}
                      </p>
                      <p className="text-base text-gray-700">
                        {comment.content}
                      </p>
                    </div>
                  </div>
                )
              })}
            </> :
            <p>No comments yet...</p>}

        </div>
      </section>
    </div>
  );
}
