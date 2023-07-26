import React from 'react';
import { useRouter } from 'next/router';

const LoginForm = () => {
    const router = useRouter();

    const handleLogin = async (event) => {
        event.preventDefault();

        // Perform login logic here (e.g., API call for authentication)

        // Assuming the login is successful, navigate to the dashboard page
        router.push('/dashboard');
    };
    return (
        <div className="flex flex-col justify-center items-center">


        <form className="w-full">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="john.doe@example.com"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="********"
            />
          </div>

          <div className="mt-4 mb-4 text-sm text-indigo-600 flex items-center justify-end">
            <a href="#">Forgot your password?</a>
          </div>

          <button
          onClick={handleLogin}
            type="button"
            className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg hover:bg-indigo-700"
          >
            Sign In
          </button>

          <div className="flex items-center mb-7 mt-14">
              <hr className="border-gray-300 flex-grow" />
              <p className="mx-4 text-gray-500 font-semibold">or</p>
              <hr className="border-gray-300 flex-grow" />
            </div>
 <button
            type="button"
            className="w-full bg-white  text-neutral-800 border border-neutral-600 font-semibold py-2 rounded-lg"
          >
           Register Now
          </button>
         
        </form>
      </div>
    );
};

export default LoginForm;
