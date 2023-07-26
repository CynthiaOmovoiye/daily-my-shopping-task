import React from 'react';
import LoginForm from './LoginForm';

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row h-screen">
      {/* Image Section */}
      <div className="md:w-1/2 flex items-center justify-center ">
          {/* Replace the image URL with your own image */}
          <img
            src="/Rectangle 38.png"
            alt="Login Image"
            className="object-cover h-64 w-full md:h-full md:w-auto min-w-full"
          />
        </div>

      {/* Form Section */}
      <div className="md:w-1/2 px-10">
        <h2 className="text-4xl font-bold mb-4 mt-7">Login</h2>
        <p>Sed tortor, sed velit ridiculus ipsum pharetra.</p>
        <LoginForm />
      </div>
    </div>
    </div>
  );
};

export default LoginPage;
