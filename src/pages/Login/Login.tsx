import React from 'react'
import logo from '../../assests/logo.jpeg'

const Login = () => {
  return (
    <div  className="mt-6 bg-black items-center flex flex-col max-w-md m-auto rounded-lg">
    <div
      className="bg-green-700 p-12 rounded-full flex flex-col flex-row items-center mt-4"
    >
      <img src={logo} className="h-14 w-14" />
    </div>

    <form
      className="flex flex-col flex-row items-center mt-8 max-w-md max-w-lg mx-auto mx-auto"
    >
      <input
        type="text"
        className="flex-grow w-full focus:outline-none text-black py-2 px-4 w rounded mb-4"
        placeholder="Username"
      />

      <input
        type="text"
        className="flex-grow w-full focus:outline-none text-black py-2 px-4 rounded mb-4"
        placeholder="Password"
      />

      <button
          className="bg-green-700 w-full flex-grow text-white py-2 px-16 rounded"
      >
        Login
      </button>
      <h2  className="text-white pb-16 pt-6">
        Not registered? <span  className="text-green-700">Create an account</span>
      </h2>
    </form>
  </div>
  )
}

export default Login
