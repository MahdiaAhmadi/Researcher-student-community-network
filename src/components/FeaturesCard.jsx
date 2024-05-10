import Link from "./Link";
const FeaturesCard = ({ title, body, btn_title, svg_icon, path }) => {
  return (
    <div className="p-6 max-w-sm mx-8 bg-white rounded-xl shadow-md flex justify-between space-x-4 w-[20%] h-60 scale-85">
      <div className="flex-shrink-0">{svg_icon}</div>
      <div>
        <div className="text-xl font-medium text-fifth mb-4">{title}</div>
        <div className="h-full">
          <p className="text-gray-500 mb-7">{body}</p>
          <Link
            href={path}
            className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-8 h-8"
          >
            {btn_title}
          </Link>
        </div>
      </div>
    </div>
  );
};
export default FeaturesCard;
