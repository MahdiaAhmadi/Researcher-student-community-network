"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { get, put } from "../../../data/webService";

export default function UpdatePost({ params }) {
  const router = useRouter()
  const searchParams = useSearchParams();
  const postId = searchParams.get('id');

  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [postSummary, setPostSummary] = useState("");
  const [updated, setUpdated] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (postId) {
      get(`/post/id/${postId}`).then(post => {
        setPostTitle(post.title);
        setPostContent(post.content);
        setPostSummary(post.summary)
      }).catch(error => {
        setError(error.message)
      });
    } else {
      setError("Invalid post ID");
    }


  }, [postId]);



  const handleUpdate = (e) => {
    e.preventDefault();
    setLoading(true);


    const postData = {
      title: postTitle.trim(),
      content: postContent.trim(),
      summary: postSummary.trim(),
    };

    if (!postData.title || !postData.content || !postData.summary) {
      setError("Please fill in all fields");

    } else {
      put(`/post/id/${postId}`, postData)
        .then(() => {
          setUpdated(true);
          setError(null);
          setLoading(false);
          router.push("/timeline");
        }).catch(e => {
          setError(e.message);
        })
    }


  };

  return (
    <div className="mt-9">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <form
          onSubmit={handleUpdate}
          className="flex flex-col items-center justify-center w-[60%] rounded-2xl border-2 border-blue-400 bg-white py-4 mt-8 ml-auto mr-auto"
        >
          <h2 className="text-green-600 font-bold">Update Your Post</h2>

          <div className="flex flex-col items-start justify-center w-[60%] mt-4">
            <label className="text-green-700">Post Title:</label>
            <input
              type="text"
              value={postTitle}
              onChange={(e) => setPostTitle(e.target.value)}
              className="border-solid border-2 border-gray-500 rounded-md p-1 w-full text-black"
            />
          </div>

          {/* Content Field */}
          <div className="flex flex-col items-start justify-center w-[60%]">
            <label className="text-green-700 mt-6">Post Content:</label>
            <textarea
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
              className="border-solid border-2 border-gray-500 rounded-md p-1 w-full  text-black"
            />
          </div>

          {/* Summary Field */}
          <div className="flex flex-col items-start justify-center w-[60%]">
            <label className="text-green-700 mt-6">Post Summary:</label>
            <textarea
              value={postSummary}
              onChange={(e) => setPostSummary(e.target.value)}
              className="border-solid border-2 border-gray-500 rounded-md p-1 w-full  text-black"
            />
          </div>

          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-8 py-3 text-center mt-4 mb-4 text-white"
          >
            Update Post
          </button>
        </form>
      )}
      {updated ? <p>Post updated successfully!</p> : null}
      {error ? <p style={{ color: "red" }}>{error}</p> : null}
    </div>
  );
}
