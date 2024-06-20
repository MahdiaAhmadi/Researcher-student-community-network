"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ReportDialog } from "@/components/ReportDialog"


export default function DetailPage({ params, postId }) {

  const router = useRouter();

  const id = params.id;

  const handleDelete = async () => {
    try {
      const res = await fetch(`http://localhost:8000/post/id/${postId}`, {
        method: "DELETE",
      });

      if (res.code === 200) {
        alert("Post deleted successfully!");
        router.push("/posts/timeline"); // Redirect to the timeline after successful deletion
      } else {
        alert("Failed to delete the post!");
      }
    } catch (error) {
      console.error("Error during deletion:", error);
      alert(
        "An error occurred while deleting the post. Please try again later."
      );
    }
  };

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
              Title of the Research: A example of name {id}
            </h1>
            <ReportDialog postId={id}/>
          </div>

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
          <div className="flex flex-row items-center justify-end">
            <div className="flex gap-3">
              <div className="px-3 py-1 text-sm text-white bg-blue-500 rounded-2xl ring-2 ring-blue-800">
                Category 1
              </div>
              <div className="px-3 py-1 text-sm text-white bg-yellow-500 rounded-2xl ring-2 ring-yellow-800">
                Category 2
              </div>
            </div>
          </div>
        </header>
        <div className="p-4 prose max-w-none text-gray-700 bg-white">
          <div className="flex justify-center items-center mb-4"></div>
          <p className="text-lg font-bold">Summary</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            voluptatibus, quae dolores natus eaque, illum iusto fuga
            consequuntur, aspernatur rem quod? Nihil, accusamus.
          </p>
          <p className="text-lg font-bold">Content</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque id sem et magna pellentesque mollis. Cras congue a
            tellus vestibulum rhoncus. Cras vel tellus at est pretium lacinia
            vel quis eros. Proin molestie dolor dictum nisi volutpat tincidunt.
            Aliquam accumsan erat non eros posuere, id porttitor lacus
            efficitur.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque id sem et magna pellentesque mollis. Cras congue a
            tellus vestibulum rhoncus. Cras vel tellus at est pretium lacinia
            vel quis eros. Proin molestie dolor dictum nisi volutpat tincidunt.
            Aliquam accumsan erat non eros posuere, id porttitor lacus
            efficitur.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque id sem et magna pellentesque mollis. Cras congue a
            tellus vestibulum rhoncus. Cras vel tellus at est pretium lacinia
            vel quis eros. Proin molestie dolor dictum nisi volutpat tincidunt.
            Aliquam accumsan erat non eros posuere, id porttitor lacus
            efficitur.
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
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-7 rounded-full "
              onClick={handleDelete}
            >
              Delete
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-7 rounded-full">
              Edit
            </button>
          </div>
        </div>
      </article>
      <article className="rounded shadow-md overflow-hidden flex flex-col mt-8">
        <header className="p-4 bg-gray-100">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate">
            Discussion
          </h2>
        </header>
        <div className="p-4 prose max-w-none text-gray-700 bg-white">
          <div className="flex items-center">
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
                Researcher Name
              </p>
              <p className="text-base text-gray-700">
                This is a comment by the researcher Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className="flex items-center mt-4">
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
                Researcher Name
              </p>
              <p className="text-base text-gray-700">
                This is another comment by the researcher Lorem ipsum dolor sit
                amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className="flex items-center mt-4">
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
                Researcher Name
              </p>
              <p className="text-base text-gray-700">
                This is another comment by the researcher Lorem ipsum dolor sit
                amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className="flex items-center mt-4">
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
                Researcher Name
              </p>
              <p className="text-base text-gray-700">
                This is another comment by the researcher Lorem ipsum dolor sit
                amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
