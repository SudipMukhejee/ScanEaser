import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../components/home";
import About from "./About";
import Feature from "./feature";
import "../full.css";
const Navbar = () => {
   const [nav, setNav] = useState(false);
   const NavLinks = [
      {
         id: 1,
         link: "HOME",
         path: "/",
         component: <Home />,
      },
      {
         id: 2,
         link: "ABOUT",
         path: "/about",
         component: <About />,
      },
      {
         id: 3,
         link: "FEATURE",
         path: "/feature",
         component: <Feature />,
      },
   ];
   const handelclick = () => {
      // console.log("Hello I am click");
      setNav(!nav);
   };

   return (
      <nav>
         <h1>LAZAREV.</h1>
         <div className="nav-part2 ">
            <div className="nav-elem">
               <h4>Areas of experties</h4>
               <h5>
                  <span>AI & ML</span>
               </h5>
               <h5>
                  <span>Fintech</span>
               </h5>
               <h5>
                  <span>Real Estate</span>
               </h5>
               <h5>
                  <span>E-commerce</span>
               </h5>
               <h5>
                  <span>Web 3</span>
               </h5>
            </div>
            <div className="nav-elem">
               <h4>UIUX Design</h4>
               <h5>
                  <span>Fintech</span>
               </h5>
               <h5>
                  <span>Real Estate</span>
               </h5>
               <h5>
                  <span>E-commerce</span>
               </h5>
               <h5>
                  <span>Web 3</span>
               </h5>
            </div>
            <div className="nav-elem">
               <h4>Product design</h4>
               <h5>
                  <span>Fintech</span>
               </h5>
               <h5>
                  <span>Real Estate</span>
               </h5>
               <h5>
                  <span>E-commerce</span>
               </h5>
               <h5>
                  <span>Web 3</span>
               </h5>
            </div>
            <div className="nav-elem">
               <h4>Design Process</h4>

               <h5>
                  <span>E-commerce</span>
               </h5>
               <h5>
                  <span>Web 3</span>
               </h5>
            </div>
            <div className="nav-elem">
               <h4>About Agency</h4>
               <h5>
                  <span>Fintech</span>
               </h5>
               <h5>
                  <span>Real Estate</span>
               </h5>
               <h5></h5>
               <h5>
                  <span>Web 3</span>
               </h5>
            </div>
         </div>
         <button>
            Let's Talk{" "}
            <svg fill="none" viewBox="0 0 20 20">
               <path
                  fill="#fff"
                  d="M2.5 14.375V17.5h3.125l9.217-9.217-3.125-3.125L2.5 14.375Zm14.758-8.508a.83.83 0 0 0 0-1.175l-1.95-1.95a.83.83 0 0 0-1.175 0l-1.525 1.525 3.125 3.125 1.525-1.525Z"></path>
            </svg>
         </button>
         <div id="nav-bottom"></div>
      </nav>
   );
};

export default Navbar;
