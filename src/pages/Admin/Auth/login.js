import React from 'react';

export default function AdminLogin() {
  return (
    <div className=" bg-gray-100 flex justify-center">
      {/* Welcome Section */}
      <div className="flex w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden mt-10">
          {/* Left Side - Image */}
          <div className="w-1/2 hidden md:block">
            <img
              src="https://via.placeholder.com/500" // Replace with your actual image URL
              alt="Admin Panel Illustration"
              className="h-full object-cover"
            />
          </div>

          {/* Right Side - Login Form */}
          <div className="w-full md:w-1/2 p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Admin Login</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Login
              </button>
            </form>
          </div>
        </div>
    </div>
  );
}
