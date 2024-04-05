import React, { useState } from "react";
// import { Link, animateScroll as scroll } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const NavLinks = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "OCR Tool",
    },
    {
      id: 4,
      link: "How it works",
    },
    {
      id: 5,
      link: "Demo",
    },
    {
      id: 6,
      link: "Features",
    },
  ];

  return (
    <nav className="w-[90%] mx-auto flex flex-col items-center">
      <div className="flex justify-between pt-5 pb-8 items-center lg:border-b-2 border-b-white/30 w-full lg:hover:pb-10 duration-300 ">
        <h1 className="text-white text-4xl text-center font-bold italic">
          SightSpeak
        </h1>
        <ul className="hidden lg:flex justify-center items-center gap-x-5  ">
          {NavLinks.map(({ id, link }) => (
            <li
              key={id}
              className="text-md text-white cursor-pointer hover:text-gray-400 hover:scale-105 duration-200"
            >
              {link}
            </li>
          ))}
        </ul>
        <div className="lg:hidden flex-start w-[30%] ml-6">
        <div
          onClick={() => {
            setNav(!nav);
          }}
          className="pr-4 text-gray-500 cursor-pointer "
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        </div>
        {nav && (
          <ul className="flex flex-col justify-center items-center w-full h-screen absolute top-16 left-0 text-white lg:hidden ">
            {NavLinks.map(({ id, link }) => (
              <li
                key={id}
                className="py-6 text-4xl px-4 cursor-pointer capitalize text-gray-500"
              >
                {link}
              </li>
            ))}
          </ul>
        )}

        <button className="flex bg-green-600 py-4 px-6 text-center text-white font-bold rounded-3xl  items-center uppercase">
          Get Started
          <span className="rounded-full bg-green-600">
            <svg
              fill="none"
              viewBox="0 0 20 20"
              className="h-[1.5vw] ml-[1.6vw] bg-green-600 rounded-full animate-bounce"
            >
              <path
                fill="#fff"
                d="M2.5 14.375V17.5h3.125l9.217-9.217-3.125-3.125L2.5 14.375Zm14.758-8.508a.83.83 0 0 0 0-1.175l-1.95-1.95a.83.83 0 0 0-1.175 0l-1.525 1.525 3.125 3.125 1.525-1.525Z"
              ></path>
            </svg>
          </span>
        </button>
      </div>
      {/* <div className="absolute z-[9] h-6 top-[100%] w-full border-b-2 border-b-white/30">
        
      </div> */}
    </nav>
  );
};

export default Navbar;
