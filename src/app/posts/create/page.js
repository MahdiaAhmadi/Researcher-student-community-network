"use client";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";

const Create = () => {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [categories_id, setCategories_id] = useState([]); // initialize with an empty list
  const [comments_id, setComments_id] = useState([]); // initialize with an empty list
  const [author_id, setAuthor_id] = useState("");
  const [summary, setSummary] = useState("");
  const [research_link, setResearch_link] = useState("");
  const [visibility, setVisibility] = useState(1); // initialize with default value
  const [file_path, setFile_path] = useState("");
  const [likes, setLikes] = useState(0); // initialize with default value
  const [createdAt, setCreatedAt] = useState(
    new Date().toISOString().split("T")[0]
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      title === "" ||
      content === "" ||
      summary === "" ||
      author_id === "" ||
      research_link === ""
    ) {
      alert("Missing Fields!");
    }

    const postData = {
      title,
      categories_id:
        categories_id.length > 0 ? categories_id : ["cat1", "cat2"],
      likes,
      author_id,
      summary,
      content,
      comments_id: comments_id.length > 0 ? comments_id : ["comm1", "comm2"],
      research_link,
      visibility,
      file_path: file_path || "",
      created_at: createdAt, // Convert Date object to string in the format 'YYYY-MM-DD'
    };

    try {
      const res = await fetch("http://localhost:8000/post/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      const response = await res.json();

      if (response.code === 200) {
        router.push("/timeline");
      } else {
        alert("Failed creating Post!");
      }
    } catch (error) {
      console.error("Error during submission:", error);
      alert(
        "An error occurred while creating the post. Please try again later."
      );
    }
  };

  return (
    <div className="new-post bg-gray-200 text-fourth px-5 py-4  shadow h-screen ">
      <div className="  border-blue-400  border-2  rounded-2xl ">
        <h2 className="text-center py-5 font-bold text-2xl text-blue-400  ">
          Add New Post
        </h2>
        <form onSubmit={handleSubmit} className="w-[80%] mx-auto p-4 ">
          <div className="mb-4">
            <label
              className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              for="title"
            >
              Post Title: <span className="text-red-500">*</span>
            </label>
            <input
              id="title"
              type="text"
              required
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              className=" shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            />
          </div>
          <div className="mb-3">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              for="author"
            >
              Author_id: <span className="text-red-500">*</span>
            </label>
            <input
              id="author"
              type="text"
              required
              value={author_id}
              onChange={(e) => setAuthor_id(e.target.value)}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            />
          </div>

          <div className="mb-3">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              for="content"
            >
              Post Content: <span className="text-red-500">*</span>
            </label>
            <textarea
              id="content"
              required
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border resize-none overflow-hidden border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="content goes here..."
            ></textarea>
          </div>

          <div className="mb-3">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              for="summary"
            >
              Post Summary: <span className="text-red-500">*</span>
            </label>
            <textarea
              id="summary"
              required
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 resize-none overflow-hidden rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Summary goes here..."
            ></textarea>
          </div>

          <div className="mb-3">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              for="link"
            >
              Research_link: <span className="text-red-500">*</span>
            </label>
            <input
              id="link"
              type="text"
              required
              value={research_link}
              onChange={(e) => setResearch_link(e.target.value)}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            />
          </div>

          <div className="text-center mt-6 ">
            <button className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-8 py-3 text-center me-2 mb-4 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
              Add Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
