import React from "react";
import { Link,  } from "react-router-dom";

const Nav = () => {
  return <div className="flex justify-center gap-10 p-10">
    <Link to={'/'}>Home</Link>
    <Link to={'/services'}>Services</Link>
    <Link to={'/products'}>Products</Link>
    <Link to={'/about'}>About</Link>
  </div>;
};

export default Nav;
