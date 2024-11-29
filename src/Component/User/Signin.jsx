import React from 'react'
import { Link } from 'react-router-dom'


function Signin() {
  return (
    <>

    

      <div className="bg-white w-full h-full flex flex-row min-h-screen justify-center items-center">
        < div className="isolate bg-amber-300 px-6 py-24 sm:py-32 lg:px-8 w-4/5 h-4/5 shadow-2xl ">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem] bg-white"
          >
          </div>

          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Login</h2>
            <p className="text-xl text-black mt-8">Enter Login details to get access</p>

          </div>
          <form action="#" method="POST" className="mx-auto mt-8 max-w-xl sm:mt-20 ">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">


              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                  UserName or Email Address
                </label>
                <div className="mt-2.5">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    placeholder="enter email address"
                    className=" bg-slate-200 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="password" className="block text-sm font-semibold leading-6 text-gray-900">
                  Password
                </label>
                <div className="mt-2.5">
                  <input
                    id="password"
                    name="password"
                    type="text"
                    className=" bg-slate-200 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

            </div>
            <div className="mt-10 ">

              <button
                type="submit"
                className="block w-full rounded-md bg-indigo-600 px-4 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "
              >
                Login
              </button>
            </div>
            <div className="text-black mt-8 ml-16">
              <p className="text-xl">Do not have an account?<Link  className="text-red-600">Sign Up</Link> here</p>
            </div>
          </form>
        </div >

      </div>

    </>
  )
}

export default Signin
