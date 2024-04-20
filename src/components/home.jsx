import React, { useState } from "react";
import { gsap } from "gsap";
import Scroll from "./Scroll";
import Page5 from "./pagef";
import "../full.css";
import "./style.css";
import CardSection from "./CardSection";
import NavBarSection from "./Heronav";
import Footer from "../components/Footer";
import Ocr from "./ocr";
const Home = () => {
   const [fileName, setFileName] = useState("");
   const [email, setEmail] = useState("");

   const handleFileChange = (event) => {
      const file = event.target.files[0];
      setFileName(file.name);
   };

   const handleEmailChange = (event) => {
      setEmail(event.target.value);
   };
   const handleClick = () => {
      var page3Center = document.querySelector(".page3-center");
      var video = document.querySelector("#page3 video");

      page3Center.addEventListener("click", function () {
         video.play();
         gsap.to(video, {
            transform: "scaleX(1) scaleY(1)",
            opacity: 1,
            borderRadius: 0,
         });
      });
      video.addEventListener("click", function () {
         video.pause();
         gsap.to(video, {
            transform: "scaleX(0.7) scaleY(0)",
            opacity: 0,
            borderRadius: "30px",
         });
      });
   };

   return (
      <div>
         <NavBarSection />
         <div
            id="main "
            className="text-white"
            style={{
               height: "auto",
               width: "100%",
               backgroundColor: "#111",
               display: "flex",
               flexDirection: "column",
               alignItems: "center",
               justifyContent: "center",
               position: "relative",
               padding: "20px",

               //core css resive design write media query
            }}>
            <div
               id="page1"
               style={{
                  height: "auto",
                  width: "100%",
                  backgroundColor: "#111",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "",
                  marginTop: "10px",
               }}>
               <h1
                  style={{
                     fontSize: "7vw",
                     display: "flex",
                     textTransform: "uppercase",
                     fontWeight: "900",
                     lineHeight: "5vw",
                  }}>
                  Empowering Thr
                  <span
                     id="icon1"
                     className=""
                     style={{
                        height: "5vw",
                        display: "flex",
                        alignItems: "center",
                        borderRadius: "50%",
                        width: "5vw",
                        backgroundColor: "#0BA34E",
                     }}>
                     <svg
                        fill="none"
                        viewBox="0 0 20 20"
                        style={{
                           padding: "auto",
                           margin: "auto",
                           alignItems: "center",
                           borderRadius: "50%",
                        }}
                        className="p-auto m-auto items-center bg-green-600 rounded-full hover:rotate-12">
                        <path
                           fill="#fff"
                           d="M2.5 14.375V17.5h3.125l9.217-9.217-3.125-3.125L2.5 14.375Zm14.758-8.508a.83.83 0 0 0 0-1.175l-1.95-1.95a.83.83 0 0 0-1.175 0l-1.525 1.525 3.125 3.125 1.525-1.525Z"></path>
                     </svg>
                  </span>
                  ugh
               </h1>
               <h1
                  style={{
                     fontSize: "8.5vw",
                     textTransform: "uppercase",
                     fontWeight: "900",
                     lineHeight: "8.5vw",
                  }}>
                  Visual Language.
               </h1>
               <p
                  style={{
                     textAlign: "center",
                     fontWeight: "400",
                     marginTop: "3vh",
                     fontSize: "1.8rem",
                     padding: "10px",
                  }}>
                  Turn images into spoken words effortlessly with our OCR technology. Accessible, clear, and precise.
               </p>
            </div>
            <div id="page2">
               <Scroll />
            </div>

            <div
               id="page3"
               style={{
                  margin: "20px 0px",
                  width: "100%",
                  backgroundColor: "#111",
                  position: "relative",
                  backgroundImage:
                     "url(https://lazarev.kiev.ua/la24/reel-cover.webp)",
                  backgrounSize: "cover",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
               }}>
               <video src="https://lazarev.kiev.ua/la24/la-reel--min.mp4"></video>
               <button className="page3-center" onClick={handleClick}>
                  <div className="icon">
                     <i className="ri-play-fill"></i>
                  </div>
                  <h5>Watch Showreel</h5>
               </button>
            </div>
            <Page5 />
            <CardSection />
         </div>
         <Footer />
         <Ocr />
      </div>
   );
};
export default Home;
