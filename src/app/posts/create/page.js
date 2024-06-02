"use client";
import { Label } from "@/components/ui/Label";
import { get, post } from "@/data/webService";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function CreatePost() {
  const router = useRouter();

  const { data: session } = useSession();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [categories_id, setCategories_id] = useState([]);
  const [categoriesOptions, setCategoryOptions] = useState([]);
  const [summary, setSummary] = useState("");
  const [research_link, setResearch_link] = useState("");
  const [visibility, setVisibility] = useState(1);
  const [file_path, setFile_path] = useState("");
  const [isShowModal, setIsShowModal] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");

  useEffect(() => {
    loadCategories();
  }, []);

  function loadCategories() {
    get("/category/").then(data => {
      console.log(data)
      setCategoryOptions(data)
    })
  }

  const createNewCategory = (e) => {
    e.preventDefault();
    if (newCategoryName != "")
      post("/category/", {
        name: newCategoryName,
        posts_id: []
      }).then(() => {
        alert("Category Created!")
        setIsShowModal(false);
        loadCategories();
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      title === "" ||
      content === "" ||
      summary === "" ||
      research_link === ""
    ) {
      alert("Missing Fields!");
    }

    const postData = {
      title,
      categories_id:
        categories_id.length > 0 ? categories_id : ["cat1", "cat2"],
      likes: 0,
      author_id: session.user.userId,
      summary,
      content,
      comments_id: [],
      research_link,
      visibility,
      file_path: ""
    };

    post("/post/", postData).then(() => {
      router.push("/timeline");
    }).catch(() => {
      alert("Failed creating Post!");
    })

  };

  return (
    <div className="flex justify-center shadow my-5 ">
      <div className="bg-white border-blue-400 border-2 w-[70%] rounded-2xl ">
        <h2 className="text-center py-5 font-bold text-2xl text-blue-400">
          Add New Post
        </h2>
        {/* create category modal */}

        <form className="p-4 ">

          <InputText
            label="Post Title:"
            id="title"
            value={title}
            onChange={({ target }) => {
              setTitle(target.value);
            }} />
          <div className="grid grid-cols-12 gap-4 mb-2">
            <div className="col-span-7">
              <Label htmlFor="categories"
                label="Categories" />
              <select id="categories"
                className="shadow-sm border 
               text-sm rounded-lg block w-full p-2.5 
               bg-gray-700 border-gray-600 placeholder-gray-400 text-white 
               focus:ring-blue-500 focus:border-blue-500 shadow-sm-light"
                onChange={({ target }) => {
                  setCategories_id([target.value])
                }}>
                {categoriesOptions.map(cat => {
                  return <option key={cat.id}
                    value={cat.id}>
                    {cat.name}
                  </option>
                })}
              </select>
            </div>
            <div className="col-span-2">
              <Label htmlFor="create-cat"
                label="Create One" />
              <button id="create-cat"
                onClick={() => setIsShowModal(true)}
                class="block text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 "
                type="button">
                +
              </button>
            </div>
            <div className="col-span-3">
              <Label htmlFor="visibility"
                label="Visibility" />
              <select id="visibility"
                className="shadow-sm border 
               text-sm rounded-lg block w-full p-2.5 
               bg-gray-700 border-gray-600 placeholder-gray-400 text-white 
               focus:ring-blue-500 focus:border-blue-500 shadow-sm-light"
                onChange={({ target }) => {
                  setVisibility(target.value)
                }}>
                <option value={0}>
                  Just for me - Private
                </option>
                <option selected value={1}>
                  For all - Public
                </option>
              </select>

            </div>
          </div>
          {isShowModal &&
            <div className="border-blue-400 p-2 border-2 rounded-2xl">
              <div className="flex items-center justify-between border-b rounded-t border-gray-600">
                <h3 className="text-lg font-semibold text-black">
                  Create Category
                </h3>
                <button
                  onClick={() => setIsShowModal(false)}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto 
                inline-flex justify-center items-center" data-modal-toggle="crud-modal">
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>

              <InputText
                label="Category Name:"
                id="categoryName"
                value={newCategoryName}
                onChange={({ target }) => {
                  setNewCategoryName(target.value);
                }} />

              <button
                onClick={createNewCategory}
                className="text-white inline-flex items-center focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700">
                + Add new Category
              </button>

            </div>}
          <InputTextArea
            label="Post Content:"
            id="content"
            value={content}
            placeholder="content goes here..."
            onChange={({ target }) => {
              setContent(target.value);
            }} />

          <InputTextArea
            label="Post Summary:"
            id="summary"
            value={summary}
            placeholder="content goes here..."
            onChange={({ target }) => {
              setSummary(target.value);
            }} />

          <InputText
            label="Post Research:"
            id="link"
            value={research_link}
            onChange={({ target }) => {
              setResearch_link(target.value);
            }} />


          <div className="text-center mt-6 ">
            <button onClick={handleSubmit}
              className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-8 py-3 text-center me-2 mb-4 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
              Add Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};


function InputText({ label, id, value, onChange }) {
  return (
    <div className="mb-4">
      <label
        className="text-left block mb-2 text-sm font-medium text-gray-900"
        for={id}>
        {label}<span className="text-red-500">*</span>
      </label>

      <input
        id={id}
        type="text"
        required
        value={value}
        onChange={onChange}
        className="shadow-sm border 
      text-sm rounded-lg block w-full p-2.5 
      bg-gray-700 border-gray-600 placeholder-gray-400 text-white 
      focus:ring-blue-500 focus:border-blue-500 shadow-sm-light"
      />
    </div>
  )
}

function InputTextArea({ label, id, value, onChange, placeholder }) {
  return (
    <div className="mb-4">
      <label
        className="text-left block mb-2 text-sm font-medium text-gray-900"
        for={id}>
        {label}<span className="text-red-500">*</span>
      </label>
      <textarea
        id={id}
        required
        value={value}
        onChange={onChange}
        rows="4"
        className="shadow-sm border 
      text-sm rounded-lg block w-full p-2.5 
      bg-gray-700 border-gray-600 placeholder-gray-400 text-white 
      focus:ring-blue-500 focus:border-blue-500 shadow-sm-light"
        placeholder={placeholder}
      />

    </div>
  )
}
