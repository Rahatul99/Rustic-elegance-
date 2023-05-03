import React from 'react';
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
  const handleGoogleLogin = () => {
    // handle Google login logic
  }

  const handleGitLogin = () => {
    // handle Git login logic
  }
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-green-400 to-blue-500 flex flex-col justify-center sm:py-12">
        <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
          <h1 className="font-bold text-white text-center text-4xl mb-5">Login</h1>
          <div className="backdrop-blur-sm bg-white/30 shadow-lg w-full rounded-lg divide-y divide-gray-200">
            <div className="px-5 py-7">
              <form>
                <label className="font-semibold text-gray-600 pb-1 block">Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="border-2 border-gray-300 rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
                />

                <label className="font-semibold text-gray-600 pb-1 block">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="border-2 border-gray-300 rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
                />

                <button
                  type="submit"
                  className="transition duration-200 bg-blue-600 hover:bg-blue-700 focus:bg-blue-800 focus:shadow-sm focus:ring-4 focus:ring-blue-400 focus:ring-opacity-50 rounded-lg text-white px-6 py-3 text-sm mt-5 w-full"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-1">
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="bg-blue-600 hover:bg-red-700 focus:bg-red-800 focus:shadow-sm focus:ring-4 focus:ring-red-400 focus:ring-opacity-50 rounded-lg text-white px-6 py-3 text-sm mr-2"
          >

            <div className='flex justify-center'>
              <FaGoogle icon={FaGoogle} />
            </div>
            Sign in with Google
          </button>
          <button
            type="button"
            onClick={handleGitLogin}
            className="bg-gray-600 hover:bg-gray-700 focus:bg-gray-800 focus:shadow-sm focus:ring-4 focus:ring-gray-400 focus:ring-opacity-50 rounded-lg text-white px-6 py-3 text-sm"
          >
            <div className='flex justify-center'>
              <FaGithub icon={FaGithub} />
            </div>
            Sign in with GitHub
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;

