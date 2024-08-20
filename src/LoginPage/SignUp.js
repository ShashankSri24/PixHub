import { Link } from "react-router-dom";
const SignUP = () => {
  return (
    <div
      className="bg-gradient-to-br from-[#23486F] via-[#192532] to- 
      [#10131C] flex items-center justify-center min-h-screen"
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md  ">
        <h3 className="text-2xl font-bold mb-6 text-center">Sign Up</h3>
        <form action="#">
          <div>
            <label
              htmlFor="name"
              className="block text-[18px] text-gray-700 text-sm font-medium mb-2"
            >
              Name :
            </label>
            <input
              type="text"
              id="name"
              autoComplete="off"
              placeholder="Enter your name"
              className="w-full my-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <label
              htmlFor="name"
              className=" text-[18px] block text-gray-700 text-sm font-medium mb-2"
            >
              New password :
            </label>
            <input
              type="password"
              id="name"
              autoComplete="off"
              placeholder="Enter your password"
              className="w-full my-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <label
              htmlFor="name"
              className=" text-[18px] block text-gray-700 text-sm font-medium mb-2"
            >
              Confirm password :
            </label>
            <input
              type="password"
              id="name"
              autoComplete="off"
              placeholder="confirm password"
              className="w-full my-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              type="submit"
              class="w-full my-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-500"
            >
              Sign UP
            </button>
            <h3 className="text-[15px] text-black-600 py-2 text-center">
              Already have an account?
              <Link to={"/login"} className="text-blue-500">
                login
              </Link>
            </h3>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignUP;
