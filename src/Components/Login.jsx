import React, { useContext, useState } from 'react';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from '../AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
  const { signIn, googleLogin, gitHubLogIn } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState('');

  const from = location.state?.from?.pathname || '/';


  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    setError('')

    signIn(email, password)
      .then(res => {
        const loggedUser = res.user;
        navigate(from, {replace: true})
      })
      .catch((error) => {
        setError("User not found. Please Register");
      });
  }

  const handleGoogleLogin = () => {
    googleLogin(googleProvider)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        setError(error?.message);
      });
  }

  const handleGitLogin = () => {
    gitHubLogIn(githubProvider)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        setError(error?.message);
      });

  }
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-green-400 to-blue-500 flex flex-col justify-center sm:py-12">
        <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
          <h1 className="font-bold text-white text-center text-4xl mb-5">Login</h1>
          <div className="backdrop-blur-sm bg-white/30 shadow-lg w-full rounded-lg divide-y divide-gray-200">
            <div className="px-5 py-7">
              <form onSubmit={handleLogin}>
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

                <p className='text-black'>{error}</p>

                <button
                  type="submit"
                  className="transition duration-200 bg-blue-600 hover:bg-blue-700 focus:bg-blue-800 focus:shadow-sm focus:ring-4 focus:ring-blue-400 focus:ring-opacity-50 rounded-lg text-white px-6 py-3 text-sm mt-5 w-full"
                >
                  Login
                </button>
              </form>
              <p className="text-gray-600 text-center mt-5">
                Don't have an account? <Link to="/register" className="text-blue-600 hover:text-blue-800">Register here</Link>
              </p>
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

