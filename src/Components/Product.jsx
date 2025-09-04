import React from "react";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate()
  const navigatorHandler = ()=>{
    navigate('/products/details')
  }
  return (
    <div>
      <h1 className="text-5xl mb-10">Products</h1>
      <div className="mb-10">
        <h2 className="text-3xl mb-6 ">Product 1</h2>
        <button onClick={navigatorHandler} className="bg-white text-black px-4 py-2 rounded-2xl active:scale-95">
          See Details
        </button>
      </div>
      <div className="mb-10">
        <h2 className="text-3xl mb-6 ">Product 2</h2>
        <button onClick={navigatorHandler} className="bg-white text-black px-4 py-2 rounded-2xl active:scale-95">
          See Details
        </button>
      </div>
      <div className="mb-10">
        <h2 className="text-3xl mb-6 ">Product 3</h2>
        <button onClick={navigatorHandler} className="bg-white text-black px-4 py-2 rounded-2xl active:scale-95">
          See Details
        </button>
      </div>
    </div>
  );
};

export default Product;
