import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from './Components/Home' 
import Product from './Components/Product' 
import Service from './Components/Service' 
import About from './Components/About' 
import Nav from "./Components/Nav";

const App = () => {
  return (
    <div className="w-screen h-screen bg-gray-800 text-white">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Service />} />
        <Route path="/products" element={<Product />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
