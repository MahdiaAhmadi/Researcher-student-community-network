"use client"
import PostsCards from "@/components/PostCard";
import { useState } from "react";

const FollowingTable = ({ researchList, questionList, topicList }) => {
  const [FollowState, setFollowState] = useState(1);

  let displayList = [];
  switch (FollowState) {
    case 0:
      displayList = researchList.concat(questionList)
      break;
    case 1:
      displayList = researchList
      break;
    case 2:
      displayList = topicList
      break;
  }
  return (
    <div className="flex flex-cols w-full">
      <div className=" w-2/6 pr-2 space-y-2">
        <div className="bg-white border border-black items-center py-2">
          <div className="ml-2 text-black">Following</div>
        </div>
        <div className=" font-bold text-black bg-white border border-black py-2 items-center">
          <button className="ml-4 hover:underline" onClick={() => { setFollowState(0) }}>Research ({researchList.length + questionList.length})</button>
          <button className="ml-8 hover:underline" onClick={() => { setFollowState(1) }}>Research Item ({researchList.length})</button>
          <button className="ml-8 hover:underline" onClick={() => { setFollowState(2) }}>Question ({questionList.length})</button>
          <button className="ml-4 py-2 hover:underline" >Topic ({topicList.length})</button>
        </div>
      </div>
      <div className="items-center w-full">
        <div className="font-14 text-center text-xl text-bold">Research You Followed</div>
        <div className="mb-8">
          {displayList.map((elem) => {
            return (
              <PostsCards postId={elem} key={elem} />
            )
          })}
        </div>
        <div>
          <div className="bg-white border border-black p-4 shadow mx-8 flex justify-between">
            <div className="text-neutral-800 ">Topics You Followed ({topicList.length})</div>
            <button className="text-black hover:underline">Edit</button>
          </div>
          <div className=" mx-8 flex justify-center mt-2 p-4">
            {topicList.map((elem, idx) => {
              return (
                <div key={idx} className=" mx-2 p-3 bg-zinc-300 rounded-full text-black text-center">
                  {elem}
                </div>)
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export { FollowingTable };

