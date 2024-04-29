export default function SignIn() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6">Sign In</h1>
        <form className="bg-white p-6 rounded-md shadow-md">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="appearance-none border rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="appearance-none border rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline">
              Sign In
            </button>
            <a href="#" className="text-blue-500 hover:text-blue-700 font-bold">
              Forgot Password?
            </a>
          </div>
        </form>
        <p className="text-gray-700 mt-6">
          Don't have an account?{" "}
          <a href="#" className="text-blue-500 hover:text-blue-700 font-bold">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
