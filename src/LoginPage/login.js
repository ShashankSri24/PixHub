import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div
      className="bg-gradient-to-br from-[#23486F] via-[#192532] to- 
      [#10131C] flex items-center justify-center min-h-screen"
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md  ">
        <h3 className="text-2xl font-bold mb-6 text-center">Login</h3>
        <form>
          <div>
            <label
              htmlFor="name"
              className="block text-[18px] text-gray-700 text-sm font-medium mb-2"
            >
              Email :
            </label>
            <input
              type="email"
              id="name"
              autoComplete="off"
              placeholder="Enter your name"
              className="w-full my-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <label
              htmlFor="name"
              className=" text-[18px] block text-gray-700 text-sm font-medium mb-2"
            >
              password :
            </label>
            <input
              type="password"
              id="name"
              autoComplete="off"
              placeholder="Enter your password"
              className="w-full my-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <h3 className="text-[15px] text-blue-600 py-2 text-center cursor-pointer">
              Forgot password?
            </h3>
            <button
              type="submit"
              class="w-full my-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-500"
            >
              login
            </button>
            <h3 className="text-[15px] text-black-600 py-2 text-center">
              Don't have an account?
              <Link to={"/SignUp"} className="text-blue-500">
                Sign UP
              </Link>
            </h3>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
