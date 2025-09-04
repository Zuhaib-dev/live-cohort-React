import React from "react";
import { useNavigate } from "react-router-dom";


const Products = () => {
  const navigate = useNavigate()
  const navigatorHandler = (name)=>{
    navigate(`/products/detail/${name}`)
  }
  return (
    <div >
      <h1 className="text-5xl mb-10">Products</h1>
      <div>
        <h1 className="text-4xl mb-4">Product 1</h1>
        <h2 className="text-3xl mb-10">Product Details...</h2>
        <button onClick={()=> navigatorHandler("Porshe 911 GT3 RS")} className="bg-green-500 text-white px-4 py-2 rounded-xl  active:scale-95">
          Get Details
        </button>
      </div>
      <div className="m-10">
        <h1 className="text-4xl mb-4">Product 2</h1>
        <h2 className="text-3xl mb-10">Product Details...</h2>
        <button onClick={()=> navigatorHandler("Porshe 911 Gt3 RS")} className="bg-green-500 text-white px-4 py-2 rounded-xl  active:scale-95">
          Get Details
        </button>
      </div>
    </div>
  );
};

export default Products;
