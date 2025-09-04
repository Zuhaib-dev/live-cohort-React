import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex justify-center gap-10 p-8">
      <NavLink className={(e) => (e.isActive ? "text-rose-400" : "")} to={"/"}>
        Home
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? "text-rose-400" : "")}
        to={"/products"}
      >
        Products
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? "text-rose-400" : "")}
        to={"/services"}
      >
        Services
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? "text-rose-400" : "")}
        to={"/about"}
      >
        About
      </NavLink>
    </div>
  );
};

export default Nav;
