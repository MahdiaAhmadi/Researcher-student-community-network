import Card from "../components/imagesDesign";

export default function HomePage() {
  return (
    <div className="  p-4 w-full">
      <div className="border-b-2 ">
        <div className="flex justify-between">
          <div className="py-10 ">
            <p className="text-2xl text-white mt-8 mb-10 font-semibold">
              Discover a Community of Researcher and <br></br> Get Connected
            </p>
            <div className="mt-25">
              <a
                href="#_"
                className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-full"
              >
                <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                <span className="relative px-6 py-2 transition-all ease-out bg-gray-900 rounded-full group-hover:bg-opacity-0 duration-400">
                  <span className="relative text-white">Log In</span>
                </span>
              </a>
              <a
                href="#_"
                className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-full ml-4"
              >
                <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                <span className="relative px-6 py-2 transition-all ease-out bg-gray-900 rounded-full group-hover:bg-opacity-0 duration-400">
                  <span className="relative text-white">Join Free</span>
                </span>
              </a>
            </div>
          </div>
          <div className="mt-7 mb-4">
            <img
              src="https://media.istockphoto.com/id/1448823265/pt/foto/project-management-leadership-and-planning-with-business-people-in-meeting-for-marketing.jpg?s=612x612&w=0&k=20&c=G6LgLJoSog5NsMJk8JpcDyimAa3GXOvReqZx1S4fKBg="
              alt="researcher network"
              className="w-auto h-60 rounded-md"
            />
          </div>
        </div>
      </div>
      <div className="mt-8 flex justify-evenly gap-5 mb-8 w-full ">
        <div className=" flex flex-col items-center justify-center">
          <Card image=" https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

          <a
            href="#_"
            class="inline-flex items-center justify-center h-16 px-10 py-0 text-xl font-semibold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-gray-600 border-solid rounded-full cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline"
          >
            Publish Research
          </a>
        </div>
        <div className="flex flex-col items-center justify-center ">
          <Card image="https://images.unsplash.com/photo-1582005450386-52b25f82d9bb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

          <a
            href="#_"
            class="inline-flex items-center justify-center h-16 px-10 py-0 text-xl font-semibold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-gray-600 border-solid rounded-full cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline"
          >
            Find Paper
          </a>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Card image="https://media.istockphoto.com/id/1127447338/pt/foto/network-of-business-concept.jpg?s=612x612&w=0&k=20&c=U6uOmGKBCmaRaMsa12fedcnMPj1Ou9gcg-zP25mLr-Q=" />

          <a
            href="#_"
            class="inline-flex items-center justify-center h-16 px-10 py-0 text-xl font-semibold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-gray-600 border-solid rounded-full cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline"
          >
            Become Researcher
          </a>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Card image="https://media.istockphoto.com/id/1184808346/pt/foto/business-communication-concept-marketing-shaking-hands-teamwork.jpg?s=612x612&w=0&k=20&c=fG36kq5A4zMCYqcvnXghRtLllTsEcDn0mu3cwLyIdzU=" />

          <a
            href="#_"
            class="inline-flex items-center justify-center h-16 px-10 py-0 text-xl font-semibold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-gray-600 border-solid rounded-full cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline"
          >
            Follow Researcher
          </a>
        </div>
      </div>
    </div>
  );
}
