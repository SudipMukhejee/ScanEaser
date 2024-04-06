import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../components/home";
import About from "../components/about";
import Feature from "./feature";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const NavLinks = [
    {
      id: 1,
      link: "HOME",
      path: "/",
      component: <Home/>,
    },
    {
      id: 2,
      link: "ABOUT",
      path: "/about",
      component: <About/>,
    },
    {
      id: 3,
      link: "FEATURE",
      path: "/feature",
      component: <Feature/>,
    },
  ];
  const handelclick = () => {
    // console.log("Hello I am click");
    setNav(!nav);
  };

  return (
    <Router>
      <nav className="w-[80%] mx-auto flex flex-col items-center mt-5">
        <div className="flex justify-between pt-5 pb-8 items-center lg:border-b-2 border-b-white/30 w-full lg:hover:pb-10 duration-300 ">
          <h1 className="text-white text-4xl text-center font-bold italic">
            SIGHT SPEAK
          </h1>
          <ul className="hidden lg:flex justify-center items-center gap-x-5  ">
            {NavLinks.map(({ id, link, path }) => (
              <li
                key={id}
                className="text-md text-white cursor-pointer hover:text-gray-400 hover:scale-105 duration-200"
              >
                <Link to={path}>{link}</Link>
              </li>
            ))}
          </ul>
          <div className="lg:hidden flex-start ml-6">
            <button
              onClick={handelclick}
              className="pr-4 text-gray-500 cursor-pointer"
            >
              {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </button>
          </div>
          <div>
            {nav && (
              <ul className="flex flex-col justify-center items-center w-full absolute top-16 left-0 text-white lg:hidden mt-32">
                {NavLinks.map(({ id, link, path }) => (
                  <li
                    key={id}
                    className="py-6 text-4xl px-4 cursor-pointer capitalize text-gray-500"
                  >
                    <Link to={path}>{link}</Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
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
      </nav>
      <Routes>
        {NavLinks.map(({ id, path, component }) => (
          <Route key={id} path={path} element={component} />
        ))}
      </Routes>
    </Router>
  );
};

export default Navbar;
