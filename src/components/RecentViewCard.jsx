export default function RecentViewPostCards({children}){
    return(
        <div className="bg-gray-200 px-5 py-3 mt-6 shadow-md rounded-md border-2 border-gray-400">
            <h3 className="font-bold text-black">Title of Research</h3>
            <div className="flex justify-between mt-6 mb-6 space-x-4">
            {/* Categories */}
              <div className="flex space-x-4">
                <span className="bg-sixth px-3 py-1 rounded-2xl cursor-pointer text-black">
                  Category 1
                </span>
                <span className="bg-fifth px-3 py-1 rounded-2xl cursor-pointer text-black">
                  Category 2
                </span>
              </div>
            {/* Follow button */}
              <button className="follow-button bg-transparent px-3 py-1 rounded-2xl border-2 border-gray-400 hover:bg-gray-300 text-black">
                <i className="fas fa-star"></i> Follow
              </button>
            </div>
          <div className="flex gap-3 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="black"
            className="w-12 h-12 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>

          <div className="profile-info text-black">
            <p>Researcher Name</p>
            <p>University School Name</p>
          </div>
        </div>
        </div>
    )
}