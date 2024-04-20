import React from 'react';
import './App.css';
// import Navbar from './components/Navbar';
import {createBrowserRouter,RouterProvider,createRoutesFromElements,Route} from "react-router-dom"
import Home from './components/home';
import About from './components/About/About';
import Feature from './components/feature';
import Layout from './Layout';
import SignIn from './components/Signin'
import SignUp from './components/SignUp'
import CardSection from './components/CardSection';
import ContactForm from './components/About/ContactForm';


function App() {

  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='about/contactus' element={<ContactForm/>}/>
        <Route path='feature' element={<Feature/>}/>
        <Route path='signin' element={<SignIn/>}/>
        <Route path='signup' element={<SignUp/>}/>
        <Route path='cards' element={<CardSection/>}/>
      </Route>
    )
  )

  return (
    <RouterProvider router={router}/>
  );
}

export default App;

