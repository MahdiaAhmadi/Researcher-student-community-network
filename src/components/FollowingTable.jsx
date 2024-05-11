"use client"
import { useState } from "react"
const getPosts = async (id) => {
  const res = await fetch("http://localhost:8000/user/id/" + id + "/liked-posts")
      .then(res => res.json())
      .catch(() => ({ code: 500, message: "Server Error" }));
  return res.data
}
const FollowingTable = async ({ researchList, questionList, topicList}) => {
  const [FollowState, setFollowState] = useState(1);

  let displayList = [  ];
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
      <div className=" w-1/6 space-y-2">
        <div className="w-3/4 bg-white border border-black items-center py-2">
          <div className="ml-2 text-black">Following</div>
        </div>
        <div className=" font-bold text-black w-3/4 bg-white border border-black py-2 items-center">
          <button className="ml-4 hover:underline" onClick={ () => {setFollowState(0)}}>Research ({researchList.length + questionList.length})</button>
          <button className="ml-8 hover:underline" onClick={() => {setFollowState(1)}}>Research Item ({researchList.length})</button>
          <button className="ml-8 hover:underline" onClick={() => {setFollowState(2)}}>Question ({questionList.length})</button>
          <button className="ml-4 py-2 hover:underline" >Topic ({topicList.length})</button>
        </div>
      </div>
      <div className="items-center w-full">
        <div className="font-14 text-center py-2 text-xl text-bold">Research You Followed</div>
        <div className="bg-white border border-black mb-8 mx-8">
          { displayList.map( (elem) => { return (
            <div>
              <div className=" text-black font-lg p-4">{elem}</div>
              <div className="flex justify-end text-black font-light p-4">
                <button className="hover:underline">Recommend</button>
                <button className="px-4 hover:underline">Follow</button>
                <button className="hover:underline">Share</button>
              </div>
            </div>
          ) } )}
        </div>
        <div>
          <div className="bg-white border border-black p-4 shadow mx-8 flex justify-between">
            <div className="text-neutral-800 ">Topics You Followed ({topicList.length})</div>
            <button className="text-black hover:underline">Edit</button>
          </div>
          <div className="bg-white border border-black mx-8 flex justify-center mt-2 p-4">
            { topicList.map( (elem) => { return (<div className=" mx-2 p-3 bg-zinc-300 rounded-full text-black text-center">{elem}</div>) } )}
          </div>
        </div>
      </div>
    </div>
  )
}

export { FollowingTable }
