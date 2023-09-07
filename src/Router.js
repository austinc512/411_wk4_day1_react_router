/* 
    Write code for React Router here
Import the Home and About components from 
the component folder. Assign the default
path "/" to the Home component and "/about"
to the About component.

Remember to export the component at the end
*/

import React from "react";
import { Routes, Route } from "react-router-dom";
// Write component imports here //

import About from "./components/About";
import Car from "./components/Car";
import Home from "./components/Home";

// Start Router function here //
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/car/:id" element={<Car />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

//Don't forget to export your newly create Router component
export default Router;
