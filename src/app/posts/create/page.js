"use client";
import { useState } from "react";

const Create = () => {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, content };

    fetch("http://localhost:8000/Comment", {
      method: "Post",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    }).then(() => {
      console.log("new Comment added");
      console.log(data);
    });
  };
  return (
    <div className="new-post bg-gray-200 text-fourth px-5 py-3 mt-6 shadow">
      <div className="  ">
        <h2 className="">Add New Post</h2>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label>comment name: </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label>comment content: </label>
          <textarea
            required
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>

          <button
            onClick={handleSubmit}
            className="px-3 py-2 bg-secondary flex-initial"
          >
            Add Comment
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
