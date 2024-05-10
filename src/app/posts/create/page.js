"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Create = () => {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [categories_id, setCategories_id] = useState("");
  const [author_id, setAuthor_id] = useState("");
  const [summary, setSummary] = useState("");
  const [comments_id, setComments_id] = useState("");
  const [research_link, setResearch_link] = useState("");
  const [visibility, setVisibility] = useState(0);
  const [file_path, setFile_path] = useState("");
  const [created_at, setCreated_at] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      title == "" ||
      content == "" ||
      summary == "" ||
      author_id == "" ||
      research_link == ""
    ) {
      alert("Are Missing Fields!");
    } else {
      const categoriesId = []; // Initialize an empty list for categories_id
      const commentsId = []; // Initialize an empty list for comments_id
      const visibility = 1; // Use an integer for visibility
      const createdAt = new Date(); // Use a datetime object for created_at

      const res = await fetch("http://localhost:8000/post/", {
        method: "Post",
        headers: {
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          title: title,
          categories_id: categoriesId, // Send an empty list for categories_id
          author_id: author_id,
          summary: summary,
          content: content,
          comments_id: commentsId, // Send an empty list for comments_id
          research_link: research_link,
          visibility: visibility, // Send an integer for visibility
          file_path: file_path,
          created_at: createdAt.toISOString(), // Send a datetime object as a string in ISO format
        }),
      });
      const response = await res.json();

      if (response.code === 200) {
        router.push("/posts/timeline");
      } else {
        alert("Failed creating Post!");
      }
      console.log(response);
    }
  };

  return (
    <div className="new-post bg-gray-200 text-fourth px-5 py-3 mt-6 shadow h-screen mb-2 ">
      <div className="  border-fifth border-2 mb-2 rounded-2xl">
        <h2 className="text-center py-5 font-bold text-2xl text-secondary ">
          Add New Post
        </h2>
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto p-4 ">
          <div className="mb-5">
            <label
              className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              for="title"
            >
              Post Title: <span class="text-red-500">*</span>
            </label>
            <input
              id="title"
              type="text"
              required
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            />
          </div>
          <div className="mb-5">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              for="author"
            >
              Author_id: <span class="text-red-500">*</span>
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

          <div className="mb-5">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              for="content"
            >
              Post Content: <span class="text-red-500">*</span>
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

          <div className="mb-5">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              for="summary"
            >
              Post Summary: <span class="text-red-500">*</span>
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

          <div className="mb-5">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              for="link"
            >
              Research_link: <span class="text-red-500">*</span>
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

          <div className="text-center mt-8 ">
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
