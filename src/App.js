import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {createBrowserRouter,RouterProvider,createRoutesFromElements,Route} from "react-router-dom"
import Home from './components/home';
import About from './components/about';
import Feature from './components/feature';
import Layout from './Layout';
import Signup from './components/Signup'
function App() {

  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='feature' element={<Feature/>}/>
        <Route path='signup' element={<Signup/>}/>
      </Route>
    )
  )

  return (
    <RouterProvider router={router}/>
    
  );
}

export default App;

