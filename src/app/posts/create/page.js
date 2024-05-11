"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Create = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    categoriesId: [],
    authorId: "",
    summary: "",
    content: "",
    commentsId: [],
    researchLink: "",
    visibility: 0,
    filePath: "",
    createdAt: new Date().toISOString(),
  });

  const validateFormData = (data) => {
    const errors = {};
    if (!data.title) errors.title = "Title is required";
    if (!data.authorId) errors.authorId = "Author ID is required";
    if (!data.summary) errors.summary = "Summary is required";
    if (!data.content) errors.content = "Content is required";
    if (!data.researchLink) errors.researchLink = "Research Link is required";
    if (!data.filePath) errors.filePath = "File Path is required";
    if (!data.categoriesId || data.categoriesId.length === 0)
      errors.categoriesId = "Categories ID is required";
    if (!data.commentsId || data.commentsId.length === 0)
      errors.commentsId = "Comments ID is required";
    if (data.visibility === 0) errors.visibility = "Visibility is required";
    return { isValid: Object.keys(errors).length === 0, errors };
  };

  const transformData = (data) => {
    return {
      title: data.title,
      categories_id: data.categoriesId,
      author_id: data.authorId,
      summary: data.summary,
      content: data.content,
      comments_id: data.commentsId,
      research_link: data.researchLink,
      visibility: data.visibility,
      file_path: data.filePath,
      created_at: data.createdAt,
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { isValid, errors } = validateFormData(formData);
    if (!isValid) {
      alert(Object.values(errors).join(", "));
      return;
    }

    const transformedData = transformData(formData);
    try {
      const res = await fetch("http://localhost:8000/post/", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(transformedData),
      });
      const response = await res.json();
      if (response.code === 200) {
        router.push("/posts/timeline");
      } else {
        alert("Failed creating Post!");
      }
    } catch (error) {
      console.error(error);
      alert("Error creating Post!");
    }
  };

  return (
    <div className="new-post bg-gray-200 text-fourth px-5 py-3 mt-1 shadow h-screen  ">
      <div className="  border-fifth border-2 mb-2 rounded-2xl h-[100%]">
        <h2 className="text-center py-5 font-bold text-2xl text-blue-400 ">
          Add New Post
        </h2>

        <form onSubmit={handleSubmit} className="container mx-auto p-4 ">
          <div class="mb-1 flex">
            <label
              for="researchTitle"
              class="block text-sm font-medium text-gray-700 pr-2 "
            >
              Research Title<span class="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="researchTitle"
              name="researchTitle"
              class="mt-1 p-2 w-full border rounded-md "
              value={formData.title}
              onChange={(e) => {
                setFormData({ ...formData, title: e.target.value });
              }}
            />
          </div>
          <div class="mb-1 flex">
            <label
              for="researchTitle"
              class="block text-sm font-medium text-gray-700 pr-2 "
            >
              Author Id <span class="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="researchTitle"
              name="researchTitle"
              class="mt-1 p-2 w-full border rounded-md "
              value={formData.authorId}
              onChange={(e) => {
                setFormData({ ...formData, authorId: e.target.value });
              }}
            />
          </div>

          <div class="mb-1 flex">
            <label
              for="content"
              class="block text-sm font-medium text-gray-700 pr-2 "
            >
              Content<span class="text-red-500">*</span>
            </label>
            <textarea
              id="content"
              name="content"
              rows="2"
              class="mt-1 p-2 w-full  border rounded-md resize-none overflow-y-auto "
              value={formData.content}
              onChange={(e) => {
                setFormData({ ...formData, content: e.target.value });
              }}
            ></textarea>
          </div>

          <div class="mb-1 flex">
            <label
              for="summary"
              class="block text-sm font-medium text-gray-700 pr-2 "
            >
              Summary<span class="text-red-500">*</span>
            </label>
            <textarea
              id="summary"
              name="summary"
              rows="2"
              class="mt-1 p-2 w-full border rounded-md resize-none overflow-y-auto "
              value={formData.summary}
              onChange={(e) => {
                setFormData({ ...formData, summary: e.target.value });
              }}
            ></textarea>
          </div>

          <div class="mb-1 flex">
            <label
              for="researchLink"
              class="block text-sm font-medium text-gray-700 pr-2 "
            >
              Research Link<span class="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="researchLink"
              name="researchLink"
              class="mt-1 p-2 w-full  border rounded-md "
              value={formData.researchLink}
              onChange={(e) => {
                setFormData({ ...formData, researchLink: e.target.value });
              }}
            />
          </div>

          <div class="mb-1 flex">
            <label
              for="categoriesId"
              class="block text-sm font-medium text-gray-700 pr-2 "
            >
              Categories ID<span class="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="categoriesId"
              name="categoriesId"
              class="mt-1 p-2 w-full  border rounded-md "
              value={formData.categoriesId.join(",")}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  categoriesId: e.target.value.split(","),
                });
              }}
            />
          </div>
          <div class="mb-1 flex">
            <label
              for="commentsId"
              class="block text-sm font-medium text-gray-700 pr-2 "
            >
              Comments ID<span class="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="commentsId"
              name="commentsId"
              class="mt-1 p-2 w-full  border rounded-md "
              value={formData.commentsId.join(",")}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  commentsId: e.target.value.split(","),
                });
              }}
            />
          </div>

          <div class="mb-1 flex">
            <label
              for="visibility"
              class="block text-sm font-medium text-gray-700 pr-2 "
            >
              Visibility<span class="text-red-500">*</span>
            </label>
            <select
              id="visibility"
              name="visibility"
              class="mt-1 p-2 w-full border rounded-md "
              value={formData.visibility}
              onChange={(e) => {
                setFormData({ ...formData, visibility: e.target.value });
              }}
            >
              <option value="1">Visible</option>
              <option value="0">Hidden</option>
            </select>
          </div>

          <div class="mb-1 flex">
            <label
              for="filePath"
              class="block text-sm font-medium text-gray-700 pr-2 "
            >
              File Path<span class="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="filePath"
              name="filePath"
              class="mt-1 p-2 w-full  border rounded-md "
              value={formData.filePath}
              onChange={(e) => {
                setFormData({ ...formData, filePath: e.target.value });
              }}
            />
          </div>

          <div class="mb-1 flex">
            <label
              for="createdAt"
              class="block text-sm font-medium text-gray-700 pr-2 "
            >
              Created At<span class="text-red-500">*</span>
            </label>
            <input
              type="datetime-local"
              id="createdAt"
              name="createdAt"
              class="mt-1 p-2 w-full  border rounded-md "
              value={formData.createdAt}
              onChange={(e) => {
                setFormData({ ...formData, createdAt: e.target.value });
              }}
            />
          </div>
          <div className=" flex justify-center items-center">
            <button class=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
              Add Research
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
