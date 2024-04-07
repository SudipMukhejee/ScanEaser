import React, { useState } from 'react';
import { gsap } from "gsap";
import Scroll from "./Scroll";

import "../full.css";
import "./style.css"
const Home = () => {
   const [fileName, setFileName] = useState('');
   const [email, setEmail] = useState('');
   
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
      <div
         id="main "
         className="text-white"
         style={{
            height: "100vh",
            width: "100%",
            backgroundColor: "#111",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",

            //core css resive design write media query
         }}>
         <div
            id="page1"
            style={{
               height: "100vh",
               width: "100%",
               backgroundColor: "#111",
               display: "flex",
               flexDirection: "column",
               alignItems: "center",
               justifyContent: "center",
               position: "relative",
               marginTop: "750px",
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
               <span className="">
                  <svg
                     className="c-bttn__morph "
                     fill="none"
                     viewBox="0 0 131 136"
                     style={{
                        height: "5vw",
                        borderRadius: "50%",
                        width: "5vw",
                        backgroundColor: "#0BA34E",
                        hover: "transform: rotate(20deg)",
                     }}>
                     <path
                        class="g-path"
                        data-morph="end"
                        fill="#fff"
                        d="M48 77.457v7.224h7.224l21.307-21.306-7.224-7.225L48 77.457Zm34.118-19.67a1.919 1.919 0 0 0 0-2.716l-4.508-4.508a1.919 1.919 0 0 0-2.716 0l-3.526 3.526 7.224 7.224 3.526-3.525Z"></path>
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
               We partner with AI & ML businesses, guiding them from series A{" "}
               <br />
               to series D and beyond with our expertise in{" "}
            </p>
            <div
               id="page1-something"
               style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
               }}>
               <h4
                  style={{
                     fontWeight: "400",
                     fontSize: "1vw",
                     textTransform: "lowercase",
                     marginTop: "0.5vw",
                     padding: "9px 18px",
                     border: "1px solid hsl(0, 0%, 65%)",
                     borderRadius: "50px",
                     marginRight: "8px",
                  }}>
                  Brand design
               </h4>
               <h4
                  style={{
                     fontWeight: "400",
                     fontSize: "1vw",
                     textTransform: "lowercase",
                     marginTop: "0.5vw",
                     padding: "9px 18px",
                     border: "1px solid hsl(0, 0%, 65%)",
                     borderRadius: "50px",
                  }}>
                  User Experience
               </h4>
               <h4
                  style={{
                     fontWeight: "400",
                     fontSize: "1vw",
                     textTransform: "lowercase",
                     marginTop: "0.5vw",
                     padding: "9px 8px",
                  }}>
                  and
               </h4>
               <h4
                  style={{
                     fontWeight: "400",
                     fontSize: "1vw",
                     textTransform: "lowercase",
                     marginTop: "0.5vw",
                     padding: "9px 18px",
                     border: "1px solid hsl(0, 0%, 65%)",
                     borderRadius: "50px",
                  }}>
                  Digital product design
               </h4>
            </div>
            <div>
               <br />
               <br />
               <br />
               <br />
            </div>
         </div>
         <div id="page2">
            <Scroll />
         </div>

         <div
            id="page3"
            style={{
               marginTop: "50px",
               width: "100%",
               height: "5000px",
               //  need mediaquar here
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
         <div className="container">
      <div className="card">
        <h3>Upload Files</h3>
        <div className="drop_box">
          {fileName ? (
            <div className="form">
              <h4>{fileName}</h4>
              <input
                type="email"
                placeholder="Enter email to upload file"
                value={email}
                onChange={handleEmailChange}
              />
              <button className="btn">Upload</button>
            </div>
          ) : (
            <>
              <header>
                <h4>Select File here</h4>
              </header>
              <p>Files Supported: PDF, TEXT, DOC, DOCX</p>
              <input
                type="file"
                accept=".doc,.docx,.pdf"
                id="fileID"
                style={{ display: 'none' }}
                onChange={handleFileChange}
              />
              <label htmlFor="fileID" className="btn">Choose File</label>
            </>
          )}
        </div>
      </div>
    </div>
      </div>
   );
};
export default Home;
