import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";

const SignUpPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-800 to-green-500 py-12 px-4 sm:px-6 lg:px-8">
      <div className="main max-w-md w-full bg-slate-200 px-4 py-8 rounded-md">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-left text-2xl font-extrabold text-gray-900">Sign Up</h2>
            <p className="mt-2 text-left text-md text-gray-600">Create your account to get started with SightSpeak.</p>
          </div>
        
          <form className="mt-8 space-y-6" action="#" method="POST">
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <p className='text-black font-semibold mt-2'>Full Name</p>
                <label htmlFor="full-name" className="sr-only">Full Name</label>
                <input
                  id="full-name"
                  name="full-name"
                  type="text"
                  autoComplete="name"
                  required
                  className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                  placeholder="Full Name"
                />

                <p className='text-black font-semibold mt-2'>Email</p>
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />

                <p className='text-black font-semibold mt-2'>Password</p>
                <label htmlFor="password" className="sr-only">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />

                <p className='text-black font-semibold mt-2'>Confirm Password</p>
                <label htmlFor="confirm-password" className="sr-only">Confirm Password</label>
                <input
                  id="confirm-password"
                  name="confirm-password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                  placeholder="Confirm Password"
                />
              </div>
            </div>
            <div className='flex justify-center'>
              <button
                type="submit"
                className="w-52 py-2 px-4 border border-transparent rounded-full shadow-sm text-sm font-semibold text-white bg-orange-600 hover:bg-orange-700 hover:font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                Get Started
              </button>
            </div>
            <div className="txt flex content-center items-center px-2 gap-2">
              <hr className='border-1 w-64 my-auto border-slate-500'/>
              <p className='text-slate-500 m-y-auto font-semibold text-center'>Or</p>
              <hr className='border-1 w-64 my-auto border-slate-500'/>
              </div>
            <div>
            <button
              type="button"
              className="w-full flex justify-center py-2 px-4 border-2 rounded-full shadow-sm text-md font-semibold border-slate-600 text-white bg-cyan-900 hover:bg-cyan-950 focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              <FaGithub className='text-2xl mr-2 text-black rounded-xl'/> SignUp with GitHub 
            </button>
            <button
              type="button"
              className="mt-3 w-full flex justify-center py-2 px-4 border-2 rounded-full shadow-sm font-semibold text-md border-slate-600 text-white bg-cyan-900 hover:bg-cyan-950 focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              <FaGoogle className='text-2xl mr-2 rounded-xl'/> SignUp with Google
            </button>
          </div>
            <div className="end-line flex gap-x-2">
              <IoIosCheckmarkCircle className='bg-black rounded-full m-auto mt-5 sm:h-3 sm:w-4'/>
              <p className="mt-3 text-md font-medium text-gray-600 text-left">  By signing up on SightSpeak, you agree to our <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Privacy Policy</a> and <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Terms of Use</a>.</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
