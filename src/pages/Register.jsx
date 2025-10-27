import React from 'react'
import Header from '../common/Header'

export default function Register() {
  return (
    <>
    <body class="bg-gray-200 font-sans text-gray-700">
  <div class="container mx-auto p-8 flex">
    <div class="max-w-md w-full mx-auto">
      <h1 class="text-4xl text-center mb-12 font-thin">Company</h1>

      <div class="bg-white rounded-lg overflow-hidden shadow-2xl">
        <div class="p-8">
          <form method="POST" action="#" onsubmit="return false;">
            <div class="mb-5">
              <label for="fullname" class="block mb-2 text-sm font-medium text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                name="fullname"
                id="fullname"
                class="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Enter your full name"
              />
            </div>

            <div class="mb-5">
              <label for="email" class="block mb-2 text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                class="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Enter your email"
              />
            </div>

            <div class="mb-5">
              <label for="password" class="block mb-2 text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                class="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Create a password"
              />
            </div>

            <div class="mb-5">
              <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-600">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirm-password"
                id="confirm-password"
                class="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Re-enter password"
              />
            </div>

            <button
              class="w-full p-3 mt-4 bg-indigo-600 text-white rounded shadow hover:bg-indigo-700 transition-colors"
            >
              Register
            </button>
          </form>
        </div>

        <div
          class="flex justify-between p-8 text-sm border-t border-gray-300 bg-gray-100"
        >
          <a href="#" class="text-gray-600">Already have an account?</a>
          <a href="#" class="font-medium text-indigo-500">Login here</a>
        </div>
      </div>
    </div>
  </div>
</body>

    </>
  )
}
