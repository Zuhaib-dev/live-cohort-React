import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Recipes from "../pages/Recipes";
import About from "../pages/About";
import CreateRecipes from "../pages/CreateRecipes";

const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/createrecipes" element={<CreateRecipes />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default Mainroutes;
