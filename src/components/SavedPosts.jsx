"use client"
import { useState } from "react"
import PostsCards from "@/components/PostCard"

const SavedPosts = ({ savedPosts, archivedPosts }) => {
  const [PostState, setPostState] = useState(1)
  let displayList = [  ]
  let title = ""
  switch (PostState) {
    case 0:
      displayList = savedPosts.concat(archivedPosts)
      title = "All Posts"
      break;
    case 1:
      displayList = savedPosts
      title = "Saved Posts"
      break;
    case 2:
      displayList = archivedPosts
      title = "Archived Posts"
      break;
  }
  return (
    <div className="flex flex-cols w-full">
      <div className=" w-1/6 space-y-2">
        <div className="w-3/4 bg-white border border-black items-center py-2">
          <div className="ml-2 text-black">Your Saved List</div>
        </div>
        <div className=" font-bold text-black w-3/4 bg-white border border-black py-2 items-center">
          <button className="ml-6 hover:underline" onClick={ () => {setPostState(0)}}>All Items ({savedPosts.length + archivedPosts.length})</button>
          <button className="ml-6 py-4 hover:underline" onClick={() => {setPostState(1)}}>Saved ({savedPosts.length})</button>
          <button className="ml-6 hover:underline" onClick={() => {setPostState(2)}}>Archived ({archivedPosts.length})</button>
        </div>
      </div>
      <div className="items-center w-full mr-48 justify-items-center grid">
        <div className="font-14 text-center py-2 text-xl text-bold">{title}</div>
      <div className="bg-white w-5/6 border border-black ">
        { displayList.map( (elem) => { return (<PostsCards key={elem}/>) } )}
      </div>
      </div>
    </div>
  )
}

export { SavedPosts }
