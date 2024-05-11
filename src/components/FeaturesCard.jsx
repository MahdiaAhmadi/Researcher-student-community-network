"use client";
import { signIn } from "next-auth/react";
const FeaturesCard = ({ title, body, btn_title, svg_icon }) => {
  return (
    <div className="p-6 mx-5 bg-white rounded-xl shadow-md">
      <div className="flex justify-center">
        {svg_icon}
      </div>
      <div>
        <div className="text-xl font-medium text-fifth mb-4">
          {title}
        </div>
        <div className="h-full">
          <p className="text-gray-500 mb-7">{body}</p>
          <button
            onClick={() => signIn()}
            className="text-white bg-gradient-to-r from-purple-500 
            to-pink-500 hover:bg-gradient-to-l 
            focus:ring-4 focus:outline-none focus:ring-purple-200 
            dark:focus:ring-purple-800 font-medium rounded-lg text-sm 
            px-5 py-2.5 text-center align-middle "
          >
            {btn_title}
          </button>
        </div>
      </div>
    </div>
  );
};
export default FeaturesCard;
