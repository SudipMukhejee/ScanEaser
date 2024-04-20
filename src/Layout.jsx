import React from "react";
import Navbar from "./components/Navbar";
import NavBarSection from './components/Heronav';
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
const Layout = () => {
   return (
      <div>
         {/*<Navbar />*/}
         <NavBarSection />
         <Outlet />
         <Footer />
      </div>
   );
};

export default Layout;
